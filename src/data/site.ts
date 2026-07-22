// Single source of truth for values repeated across the page (register link,
// contact info, event dates). Keeping these here means updating a phone
// number or the tryout date doesn't require hunting through components.

export const site = {
  title: 'GTA Mavericks Fall Rep Tryouts 2026',
  description:
    'Register for GTA Mavericks Fall Rep Basketball Tryouts, August 15–16, 2026 in Vaughan. Boys and girls U9–U17.',

  registrationUrl:
    'https://app.gameelevate.ca/program?program_uuid=38eeaa34-e824-44fe-a4b1-ccba792e3acc&utm_content=vaughan-lp',

  // Original markup used two different display formats for the same number.
  phoneDisplayFooter: '+1 (800) 787-5215',
  phoneDisplayContact: '1-800-787-5215',
  phoneHref: 'tel:+18007875215',
  email: 'info@gtamavericks.ca',
  address: '300 Peter Rupert Ave, Maple, ON',

  venue: 'David Ann Athletic Centre',
  city: 'Vaughan',
  ageRange: 'U9–U17',
  fee: '$15',

  eventDatesShort: 'August 15–16',
  eventDatesFull: 'Aug 15–16',
  eventYear: '2026',
  countdownTargetIso: '2026-08-15T09:00:00-04:00',

  logoUrl:
    'https://res.cloudinary.com/dr8iorhci/image/upload/v1783181041/1041024_-_GTA_Logo_r0qyq4.svg',
  heroVideoUrl:
    'https://res.cloudinary.com/dr8iorhci/video/upload/v1783181941/SnapInsta.to_AQNkJk8hHDY9Vt6pUHuq9oDSUmGJcy6dmsiTlwm7JIRXIbaHKnJog1_TS2OvoQdhqolW4dRQWQtGmGnpivKJ35K-frLWqIiA4D4wDqM_ujoffn.mp4',

  googleMapsUrl:
    'https://www.google.com/maps/place/GTA+Mavericks+Basketball+Association/@43.8492275,-79.4970422,17z',
} as const;
