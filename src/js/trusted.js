import { initNavbar } from './navbar.js';

initNavbar();

// cx/cy are coordinates on the poland-map.svg viewBox (0 0 646.47 555.32).
const MAP_WIDTH = 646.47;
const MAP_HEIGHT = 555.32;

const TRUSTED_CITIES = [
  {
    id: 'warszawa',
    label: 'Warszawa',
    cx: 412.82,
    cy: 235.35,
    orgs: [
      { name: 'OPZZ', logo: '/assets/trusted-logos/warszawa_OPZZ.webp' },
      { name: 'NSZZP Metra Warszawskiego', logo: '/assets/trusted-logos/warszawa_nszzp_metra_warszawskiego.webp' },
      { name: 'Konfederacja Pracy Młodych', logo: '/assets/trusted-logos/warszawa_konfederacja_pracy_mlodych.webp' },
      { name: 'ZZPKM', logo: '/assets/trusted-logos/warszawa_zzpkm.webp' },
      { name: 'KP Centrum Nauki Kopernik', logo: '/assets/trusted-logos/warszawa_kp_kopernik.webp' },
      { name: 'Związek Rewizyjny Banków Spółdzielczych im. Franciszka Stefczyka', logo: '/assets/trusted-logos/warszawa_zrbs.webp' },
    ],
  },
  {
    id: 'michalow_reginow',
    label: 'Michałów-Reginów',
    cx: 397.68,
    cy: 219.13,
    orgs: [{ name: 'IKA Kalisiak i Groszek Spółka Jawna', logo: '/assets/trusted-logos/michalow_reginow_ika.webp' }],
  },
  {
    id: 'bydgoszcz',
    label: 'Bydgoszcz',
    cx: 233.94,
    cy: 183.06,
    orgs: [{ name: 'OZZ KAS Bydgoszcz', logo: '/assets/trusted-logos/bydgoszcz_ozz_kas.webp' }],
  },
  {
    id: 'brodnica',
    label: 'Brodnica',
    cx: 317.75,
    cy: 162.51,
    orgs: [{ name: 'OZZ KAS Brodnica', logo: '/assets/trusted-logos/brodnica_ozz_kas.webp' }],
  },
  {
    id: 'kalisz',
    label: 'Kalisz',
    cx: 269.89,
    cy: 294.42,
    orgs: [{ name: 'OZZ KAS Kalisz', logo: '/assets/trusted-logos/kalisz_ozz_kas.webp' }],
  },
  {
    id: 'kielce',
    label: 'Kielce',
    cx: 407.36,
    cy: 360.33,
    orgs: [{ name: 'OZZ KAS Kielce', logo: '/assets/trusted-logos/kielce_ozz_kas.webp' }],
  },
  {
    id: 'skarzysko',
    label: 'Skarżysko-Kamienna',
    cx: 425.21,
    cy: 347.35,
    orgs: [{ name: 'OZZ KAS Skarżysko', logo: '/assets/trusted-logos/skarzysko_ozz_kas.webp' }],
  },
  {
    id: 'ostrow_wielkopolski',
    label: 'Ostrów Wielkopolski',
    cx: 246.64,
    cy: 303.61,
    orgs: [{ name: 'OZZ KAS Ostrów Wielkopolski', logo: '/assets/trusted-logos/ostrow_wielkopolski_ozz_kas.webp' }],
  },
  {
    id: 'olsztyn',
    label: 'Olsztyn',
    cx: 371.31,
    cy: 102.12,
    orgs: [{ name: 'ZZTKM', logo: '/assets/trusted-logos/olsztyn_zztkm.webp' }],
  },
  {
    id: 'sejny',
    label: 'Sejny',
    cx: 522.51,
    cy: 58.75,
    orgs: [{ name: 'Targowisko Miejskie w Sejnach', logo: '/assets/trusted-logos/sejny_targowisko.webp' }],
  },
  {
    id: 'szczecin',
    label: 'Szczecin',
    cx: 58.1,
    cy: 153.15,
    orgs: [{ name: 'ZNP Oddział Szczecin', logo: '/assets/trusted-logos/szczecin_znp.webp' }],
  },
  {
    id: 'polkowice',
    label: 'Polkowice',
    cx: 149.34,
    cy: 336.78,
    orgs: [
      { name: 'ZZPPM Oddział Zakłady Wzbogacania Rud', logo: '/assets/trusted-logos/polkowice_zzppm_ozwr.webp' },
      { name: 'ZZPPM O/ZG Polkowice-Sieroszowice', logo: '/assets/trusted-logos/polkowice_zzppm.webp' },
    ],
  },
  {
    id: 'lubin',
    label: 'Lubin',
    cx: 156.89,
    cy: 362.28,
    orgs: [{ name: 'ZZPTIA "Dozór" Oddział Centralny Ośrodek Przetwarzania Informacji', logo: '/assets/trusted-logos/lubin_dozor.webp' }],
  },
  {
    id: 'boleslawiec',
    label: 'Bolesławiec',
    cx: 117.05,
    cy: 357.24,
    orgs: [{ name: 'Związek Zawodowy Pracowników Zakładów Ceramicznych Bolesławiec', logo: '/assets/trusted-logos/boleslawiec_zzpzc.webp' }],
  },
  {
    id: 'czestochowa',
    label: 'Częstochowa',
    cx: 323.45,
    cy: 388.82,
    orgs: [{ name: 'Konfederacja Pracy Guardian Glass', logo: '/assets/trusted-logos/czestochowa_kp_guardian_glass.svg' }],
  },
  {
    id: 'staszow',
    label: 'Staszów',
    cx: 450.08,
    cy: 390.07,
    orgs: [{ name: 'NSZZ PGiPS', logo: '/assets/trusted-logos/sztaszow_nszz_pgips.webp' }],
  },
  {
    id: 'puchaczow',
    label: 'Puchaczów',
    cx: 551.51,
    cy: 305.6,
    orgs: [{ name: 'ZZG Bogdanka', logo: '/assets/trusted-logos/puchaczow_zzg.webp' }],
  },
  {
    id: 'lublin',
    label: 'Lublin',
    cx: 515.32,
    cy: 319.93,
    orgs: [{ name: 'MZZP Energetyki', logo: '/assets/trusted-logos/lublin_zrzeszenie_energetykow.webp' }],
  },
  {
    id: 'rybnik',
    label: 'Rybnik',
    cx: 293.29,
    cy: 454.8,
    orgs: [{ name: 'ZZG PGG KWK Jankowice', logo: '/assets/trusted-logos/rybnik_zzg.webp' }],
  },
  {
    id: 'poznan',
    label: 'Poznań',
    cx: 173.1,
    cy: 242.51,
    orgs: [
      { name: 'Porozumienie 2014', logo: '/assets/trusted-logos/poznan_porozumienie.webp' },
      { name: 'Porozumienie 2014 Zarząd Zakładowy Credit Agricole Bank Polska S.A.', logo: '/assets/trusted-logos/poznan_credit_agricole.webp' },
      { name: 'Ogólnopolski Związek Zawodowy Pracowników Inspekcji Weterynaryjnej', logo: '/assets/trusted-logos/poznan_wet.webp' },
    ],
  },
];

function buildOrgCard(org, variant) {
  const card = document.createElement('div');
  card.className = `org-card org-card--${variant}`;

  const logoWrap = document.createElement('div');
  logoWrap.className = 'org-card__logo-wrap';
  const img = document.createElement('img');
  img.className = 'org-card__logo';
  img.alt = '';
  img.src = org.logo;
  logoWrap.appendChild(img);

  const name = document.createElement('span');
  name.className = 'org-card__name';
  name.textContent = org.name;

  card.appendChild(logoWrap);
  card.appendChild(name);
  return card;
}

function initPolandMap() {
  const map = document.querySelector('[data-poland-map]');
  const card = document.querySelector('[data-city-card]');
  if (!map || !card) return;

  let activeCityId = null;

  function hideCard() {
    card.classList.remove('is-visible');
    card.innerHTML = '';
  }

  function showCard(city) {
    activeCityId = city.id;
    card.innerHTML = '';
    city.orgs.forEach((org) => card.appendChild(buildOrgCard(org, 'card')));

    const leftPct = (city.cx / MAP_WIDTH) * 100;
    const topPct = (city.cy / MAP_HEIGHT) * 100;
    const anchorLeft = city.cx / MAP_WIDTH > 0.5;
    const anchorTop = city.cy / MAP_HEIGHT > 0.5;

    card.style.left = `${leftPct}%`;
    card.style.top = `${topPct}%`;
    card.style.transform = `translate(${anchorLeft ? '-100%' : '0%'}, ${anchorTop ? 'calc(-100% - 14px)' : '14px'})`;
    card.classList.add('is-visible');
  }

  TRUSTED_CITIES.forEach((city) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'city-dot';
    dot.setAttribute('aria-label', city.label);
    dot.style.left = `${(city.cx / MAP_WIDTH) * 100}%`;
    dot.style.top = `${(city.cy / MAP_HEIGHT) * 100}%`;

    const marker = document.createElement('span');
    marker.className = 'city-dot__marker';
    dot.appendChild(marker);

    const setActive = () => {
      map.querySelectorAll('.city-dot').forEach((d) => d.classList.remove('is-active'));
      dot.classList.add('is-active');
      showCard(city);
    };
    const clearActive = () => {
      if (activeCityId === city.id) {
        dot.classList.remove('is-active');
        activeCityId = null;
        hideCard();
      }
    };

    dot.addEventListener('mouseenter', setActive);
    dot.addEventListener('focus', setActive);
    dot.addEventListener('mouseleave', clearActive);
    dot.addEventListener('blur', clearActive);

    map.appendChild(dot);
  });

  map.appendChild(card);
}

initPolandMap();
