// Repeated card/list content, kept as data so section components stay
// simple templates that map over arrays instead of hard-coded markup blocks.

export const whyCards = [
  {
    num: '01',
    title: 'Test the level',
    body: 'Step onto the court with motivated teammates and watch your child rise to meet a whole new level of competition.',
  },
  {
    num: '02',
    title: 'Meet the coaches',
    body: 'Get to know the coaches who will push, encourage, and show up for your child all season long.',
  },
  {
    num: '03',
    title: 'Find the right team',
    body: 'Rep is the top prize, but Select might be the perfect fit if your schedule, travel, or timing calls for it.',
  },
  {
    num: '04',
    title: 'Get a clear next step',
    body: 'Every athlete walks away with a real answer and a next step — never a vague "we’ll be in touch."',
  },
];

export const detailCards = [
  { label: 'When', main: 'Aug 15–16', sub: 'Saturday and Sunday, 2026' },
  { label: 'Where', main: 'David Ann', sub: 'Athletic Centre, Vaughan' },
  { label: 'Tryout Fee', main: '$15', sub: 'Per registered player' },
  { label: 'Divisions', main: 'U9–U17', sub: 'Boys and girls' },
];

export const scheduleDays = [
  {
    day: 'Saturday, August 15',
    rows: [
      { time: '9:00 – 10:30 AM', tag: 'U12 Boys' },
      { time: '11:00 AM – 12:30 PM', tag: 'U14 Boys' },
      { time: '1:00 – 2:30 PM', tag: 'U9–U11 Boys' },
      { time: '3:00 – 4:00 PM', tag: 'U10–U13 Girls' },
    ],
  },
  {
    day: 'Sunday, August 16',
    rows: [
      { time: '9:00 – 10:30 AM', tag: 'U15 Boys' },
      { time: '11:00 AM – 12:30 PM', tag: 'U16–U17 Boys' },
      { time: '1:00 – 2:30 PM', tag: 'U13 Boys' },
      { time: '3:00 – 4:00 PM', tag: 'U14–U16 Girls' },
    ],
  },
];

export const evalItems = [
  'Fundamental skill',
  'Decision-making',
  'Effort and pace',
  'Coachability',
  'Team awareness',
  'Competitive readiness',
];

export const reviews = [
  {
    quote:
      'Mishel, Jake and the GTA Mavericks coaches instilled the passion of playing basketball in my son. They are lively, fun, and trainers at an extremely high level.',
    author: 'Victoria Minevich',
    role: 'Parent review',
  },
  {
    quote:
      'We are delighted with the programs offered by GTA Mavericks. The staff are very professional and caring. They go above and beyond with customer service and making children happy.',
    author: 'Rima Homaidi',
    role: 'Parent review',
  },
  {
    quote:
      'My son has been with this club for two seasons and is very happy. His basketball skills have improved tremendously, the coaches are true pros, and he never wants to miss practice.',
    author: 'GTA Mavericks parent',
    role: 'Parent review',
  },
];

export const paths = [
  {
    featured: true,
    image: '/images/mavericks-action-placeholder.webp',
    alt: 'GTA Mavericks Rep basketball player shooting in a competitive arena',
    kicker: 'Coach-selected',
    title: 'Rep Basketball Teams',
    body: 'Competitive team basketball for committed athletes ready to represent GTA Mavericks against clubs across Ontario.',
    meta: ['2+ weekly commitments', 'League play', 'Tournaments', 'Team systems'],
    ctaLabel: 'Register for Tryouts',
    ctaHref: null, // uses site.registrationUrl
  },
  {
    featured: false,
    image: 'https://gtamavericks.ca/wp-content/uploads/2025/03/Spring-Select-Basketball.jpg',
    alt: 'GTA Mavericks Select basketball player advancing the ball in a game',
    kicker: 'Competitive + flexible',
    title: 'Select Basketball',
    body: 'A real team experience for players who want competition and structure without the full Rep schedule or travel commitment.',
    meta: ['1 practice/week', 'Fixed roster', 'Uniform', '3 exhibition games'],
    ctaLabel: 'Start at Tryouts',
    ctaHref: null,
  },
  {
    featured: false,
    image: 'https://gtamavericks.ca/wp-content/uploads/2024/12/Preparing-for-basketball-tryouts.webp',
    // Source photo is a wide gym-floor shot; default center-crop lands on
    // the empty doors/mats in the background instead of the kids doing
    // push-ups, who are toward the left third of the frame.
    imagePosition: 'left center',
    alt: 'Young basketball players building strength during GTA Mavericks fundamentals training',
    kicker: 'Beginner pathway',
    title: 'Fundamentals Basketball Program',
    body: 'A positive weekly program for beginners building movement, confidence, and the basketball basics needed to progress.',
    meta: ['90 min/week', '1 session/week', 'Fall or full season', 'Pricing TBA'],
    ctaLabel: 'Ask About Fundamentals',
    ctaHref: 'mailto:info@gtamavericks.ca?subject=Fundamentals%20Basketball%20Program',
  },
];

export const miniPaths = [
  {
    image: 'https://gtamavericks.ca/wp-content/uploads/2024/11/richmond-hill-basketball.webp',
    alt: 'Young children learning basketball movement in Mini Mavericks',
    meta: 'Ages 4–6',
    title: 'Mini Mavericks',
    body: 'A playful first basketball experience focused on movement, coordination, listening, confidence, and fun.',
    linkLabel: 'Ask about Mini Mavericks →',
    linkHref: 'mailto:info@gtamavericks.ca?subject=Mini%20Mavericks',
    external: false,
  },
  {
    image: 'https://gtamavericks.ca/wp-content/uploads/2024/01/DSC04477-min-scaled.jpg',
    alt: 'GTA Mavericks basketball campers putting their hands together',
    meta: 'Summer + school breaks',
    title: 'Basketball Camps',
    body: 'High-energy training, games, challenges, and coaching during summer, spring, and school breaks.',
    linkLabel: 'View basketball camps →',
    linkHref: 'https://gtamavericks.ca/summer-basketball-camp-vaughan/',
    external: true,
  },
];

export const placementSteps = [
  {
    no: '1',
    title: 'Register and attend',
    body: 'Choose the assigned age-group session and arrive prepared to compete.',
  },
  {
    no: '2',
    title: 'Coaches evaluate',
    body: 'Skill, effort, decision-making, coachability, team awareness, and competitive readiness are considered.',
  },
  {
    no: '3',
    title: 'Receive the outcome',
    body: 'Families receive a placement communication for Rep, Select, or the most appropriate development pathway.',
  },
  {
    no: '4',
    title: 'Choose the season',
    body: 'Review the schedule, commitment, and program details before confirming your child’s place.',
  },
];

export const lifePillars = [
  {
    title: 'Discipline',
    body: 'Show up prepared, follow through, and respect the standard.',
  },
  {
    title: 'Confidence',
    body: 'Take action under pressure instead of freezing or second-guessing.',
  },
  {
    title: 'Teamwork',
    body: 'Communicate, share responsibility, and understand how individual choices affect the group.',
  },
  {
    title: 'Healthy habits',
    body: 'Learn the value of movement, recovery, sleep, preparation, and consistent effort.',
  },
];

export const faqItems = [
  {
    q: 'Does every player make a Rep team?',
    a: 'No. Rep rosters are selected by coaches. Athletes may instead be recommended for Select or Fundamentals when that is the stronger current fit.',
    open: true,
  },
  {
    q: 'Does my child attend both days?',
    a: 'No. Each age group has one assigned session. Use the official schedule above to find the correct date and time.',
    open: false,
  },
  {
    q: 'Can players from other clubs attend?',
    a: 'Yes. Tryouts are an opportunity for athletes and families to compare coaching, team culture, competition, and season commitment before choosing the best fit.',
    open: false,
  },
  {
    q: 'What should players bring?',
    a: 'Basketball shoes, athletic clothing, a filled water bottle, and any required personal support items. Arrive early enough to check in and be ready at the scheduled start time.',
    open: false,
  },
  {
    q: 'What are the Fundamentals season options?',
    a: 'The planned Fall term runs from mid-September to mid-December. The full season runs from mid-September to June. Sessions are planned for 90 minutes once per week; pricing is still being finalized.',
    open: false,
  },
];
