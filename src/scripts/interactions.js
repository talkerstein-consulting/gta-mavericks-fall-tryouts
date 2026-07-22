// All page interactivity: countdown, scroll-reveal, FAQ accordion, smooth
// in-page navigation, the sticky mobile CTA, the lead-form mailto fallback,
// and — because this page is meant to be embedded as a WordPress iframe —
// a postMessage height sync so the parent page can size the iframe to fit
// content instead of showing a fixed-height scrollbar.

(function () {
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Countdown ----
  var countdownEl = document.querySelector('[data-countdown-target]');
  if (countdownEl) {
    var target = new Date(countdownEl.getAttribute('data-countdown-target')).getTime();
    var ids = { days: 'days', hours: 'hours', minutes: 'minutes', seconds: 'seconds' };
    var updateCountdown = function () {
      var distance = target - Date.now();
      if (distance <= 0) {
        document.getElementById(ids.days).textContent = '0';
        document.getElementById(ids.hours).textContent = '0';
        document.getElementById(ids.minutes).textContent = '0';
        document.getElementById(ids.seconds).textContent = '0';
        return;
      }
      document.getElementById(ids.days).textContent = Math.floor(distance / 86400000);
      document.getElementById(ids.hours).textContent = String(Math.floor((distance % 86400000) / 3600000)).padStart(2, '0');
      document.getElementById(ids.minutes).textContent = String(Math.floor((distance % 3600000) / 60000)).padStart(2, '0');
      document.getElementById(ids.seconds).textContent = String(Math.floor((distance % 60000) / 1000)).padStart(2, '0');
    };
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ---- Scroll reveal ----
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal:not(.in)').forEach(function (el) {
    revealObserver.observe(el);
  });

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });

  // ---- Sticky mobile CTA visibility ----
  var mobileCta = document.getElementById('mobileCta');
  window.addEventListener(
    'scroll',
    function () {
      if (!mobileCta) return;
      if (window.innerWidth <= 760 && window.scrollY > 520) {
        mobileCta.classList.add('show');
      } else {
        mobileCta.classList.remove('show');
      }
    },
    { passive: true }
  );

  // ---- Offset-aware smooth scrolling for in-page navigation ----
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var hash = link.getAttribute('href');
      if (!hash || hash === '#') return;
      var target = document.querySelector(hash);
      if (!target) return;
      event.preventDefault();
      var offset = window.innerWidth <= 760 ? 74 : 88;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? 'auto' : 'smooth' });
      if (history.pushState) history.pushState(null, '', hash);
      window.setTimeout(
        function () {
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        },
        reduceMotion ? 0 : 550
      );
    });
  });

  // ---- Active-section state powers subtle between-section motion ----
  if ('IntersectionObserver' in window) {
    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          entry.target.classList.toggle('is-active', entry.isIntersecting);
        });
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: 0 }
    );
    document.querySelectorAll('section[data-animate-section]').forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  // ---- Keep the sticky CTA from covering the contact form or final CTA ----
  if (mobileCta && 'IntersectionObserver' in window) {
    var suppressObserver = new IntersectionObserver(
      function (entries) {
        var shouldSuppress = entries.some(function (entry) {
          return entry.isIntersecting;
        });
        mobileCta.classList.toggle('suppress', shouldSuppress);
      },
      { threshold: 0.08 }
    );
    var contactPanel = document.getElementById('quick-contact');
    var finalCard = document.querySelector('.final-card');
    if (contactPanel) suppressObserver.observe(contactPanel);
    if (finalCard) suppressObserver.observe(finalCard);
  }

  // ---- Lead form: validate, then open a pre-addressed email ----
  var form = document.getElementById('tryoutLeadForm');
  var status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        status.textContent = 'Please complete the required fields.';
        return;
      }
      var data = new FormData(form);
      var name = String(data.get('parentName') || 'Parent');
      var subject = 'Fall Rep Tryout Question — ' + String(data.get('playerAge') || 'Player');
      var body = [
        'Parent / guardian: ' + name,
        'Phone: ' + String(data.get('parentPhone') || ''),
        'Player age group: ' + String(data.get('playerAge') || ''),
        'Current level: ' + String(data.get('playerLevel') || ''),
        '',
        'Question / context:',
        String(data.get('message') || 'No additional message provided.'),
        '',
        'Sent from the GTA Mavericks Fall Rep Tryouts landing page.',
      ].join('\n');
      status.textContent = 'Opening your email app…';
      window.location.href = 'mailto:info@gtamavericks.ca?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  // ---- Iframe height sync (for the WordPress embed) ----
  // Posts this document's height to the parent window so a listener there
  // (see the WordPress embed snippet) can resize the iframe to fit content
  // instead of relying on an internal scrollbar.
  if (window.parent && window.parent !== window) {
    var lastHeight = 0;
    var postHeight = function () {
      var height = document.documentElement.scrollHeight;
      if (height !== lastHeight) {
        lastHeight = height;
        window.parent.postMessage({ source: 'gta-mavericks-tryouts', type: 'resize', height: height }, '*');
      }
    };
    postHeight();
    window.addEventListener('load', postHeight);
    window.addEventListener('resize', postHeight);
    if ('ResizeObserver' in window) {
      new ResizeObserver(postHeight).observe(document.body);
    } else {
      setInterval(postHeight, 500);
    }
  }
})();
