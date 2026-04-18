// ── SHARED DATA ──────────────────────────────────────────────
const SITE = {
  nav: [
    { label: 'Matches',   href: '/matches.html',      key: 'nav_matches' },
    { label: 'Map',       href: '/map.html',           key: 'nav_map' },
    { label: 'Explore',   href: '/explore.html',       key: 'nav_explore' },
    { label: 'Get There', href: '/logistics.html',     key: 'nav_logistics' },
    { label: 'Checklist', href: '/checklist.html',     key: 'nav_checklist' },
    { label: 'Survival',  href: '/survival.html',      key: 'nav_survival' },
    { label: 'Families',  href: '/families.html',      key: 'nav_families' },
    { label: 'Weather',   href: '/weather.html',        key: 'nav_weather' },
  ]
};

const NEIGHBORHOODS = [
  { slug:'deep-ellum', name:'Deep Ellum', icon:'🎸', tag:'Nightlife · Food', cats:['nightlife','food'],
    desc:'Dallas\'s gritty arts district — live blues & jazz every night, craft breweries, murals, and legendary BBQ spots within walking distance of each other.',
    long:'Deep Ellum is the heartbeat of Dallas after dark. Once a booming jazz scene in the 1920s, today it pulses with live music venues, independent galleries, craft beer bars, and some of the city\'s best BBQ joints. During the World Cup, expect wall-to-wall fan energy every night.',
    highlights:['Live music 7 nights a week','Pecan Lodge — best brisket in Dallas','Craft brewery trail','Massive murals & street art'],
    tips:['Park on side streets — avoid the main strip lots','Most venues open until 2am','DART Green Line stops at Deep Ellum station'],
    gmaps:'https://maps.google.com/?q=Deep+Ellum+Dallas+TX',
    links:[{label:'Deep Ellum Foundation',url:'https://www.deepellumtexas.com'},{label:'Deep Ellum on Google Maps',url:'https://maps.google.com/?q=Deep+Ellum+Dallas+TX'}]
  },
  { slug:'uptown', name:'Uptown', icon:'🥂', tag:'Food · Upscale', cats:['food','nightlife'],
    desc:'Walkable restaurant row with rooftop bars, steakhouses, and international cuisine. The most pedestrian-friendly part of Dallas — rare for Texas.',
    long:'Uptown is where Dallas dresses up. McKinney Avenue is lined with patio restaurants, wine bars, and rooftop lounges. The M-Line Trolley runs the length of the strip for free. It\'s the best neighborhood for pre-match dining and post-match cocktails in equal measure.',
    highlights:['McKinney Ave restaurant strip','Free M-Line Trolley along the main drag','Rooftop bars with skyline views','Walking distance to downtown hotels'],
    tips:['Make reservations a week out during World Cup','The trolley runs until midnight on weekends','Uber pickup points get busy — add a few blocks'],
    gmaps:'https://maps.google.com/?q=Uptown+Dallas+TX',
    links:[{label:'McKinney Avenue Transit Authority',url:'https://www.mata.org'},{label:'Uptown Dallas on Google Maps',url:'https://maps.google.com/?q=Uptown+Dallas+TX'}]
  },
  { slug:'bishop-arts', name:'Bishop Arts', icon:'🎨', tag:'Culture · Boutique', cats:['culture','food'],
    desc:'Oak Cliff\'s bohemian pocket: independent boutiques, gallery spaces, Tex-Mex taquerias, and some of the best coffee in Dallas.',
    long:'Bishop Arts District is the kind of neighborhood you didn\'t know you needed. Thirty blocks of independent shops, acclaimed restaurants, and art galleries in a walkable grid. It\'s authentically Dallas — not built for tourists — which is exactly what makes it special.',
    highlights:['30+ independent restaurants and shops','Gallery row on Bishop Ave','Best specialty coffee in Dallas','Vibrant outdoor dining scene'],
    tips:['10 min by car from downtown — no direct rail','Street parking free after 6pm','Visit on a Saturday for the full market atmosphere'],
    gmaps:'https://maps.google.com/?q=Bishop+Arts+District+Dallas+TX',
    links:[{label:'Bishop Arts District',url:'https://www.bishopartsdistrict.com'},{label:'Bishop Arts on Google Maps',url:'https://maps.google.com/?q=Bishop+Arts+District+Dallas+TX'}]
  },
  { slug:'arts-district', name:'Arts District', icon:'🏛️', tag:'Culture · Museums', cats:['culture'],
    desc:'The largest contiguous arts district in the US. Home to the Nasher Sculpture Center, Dallas Museum of Art, and the Meyerson Symphony Center.',
    long:'The Dallas Arts District spans 68 acres and contains more LEED-certified buildings than any other arts district in the world. The Dallas Museum of Art is free every day. The Nasher Sculpture Center has one of the finest sculpture gardens in North America.',
    highlights:['Dallas Museum of Art (free admission)','Nasher Sculpture Center','Morton H. Meyerson Symphony Center','Crow Museum of Asian Art'],
    tips:['DMA is free every day — no reservation needed','Nasher garden is best in the late afternoon light','DART Pearl/Arts District station is steps away'],
    gmaps:'https://maps.google.com/?q=Dallas+Arts+District+TX',
    links:[{label:'Dallas Museum of Art',url:'https://www.dma.org'},{label:'Nasher Sculpture Center',url:'https://www.nashersculpturecenter.org'},{label:'Arts District on Google Maps',url:'https://maps.google.com/?q=Dallas+Arts+District+TX'}]
  },
  { slug:'stockyards', name:'Stockyards (Fort Worth)', icon:'🤠', tag:'Culture · History', cats:['culture','food'],
    desc:'30 min from Dallas — the historic cattle yards where you can catch a rodeo, visit honky-tonks, and eat legendary Texas BBQ.',
    long:'The Fort Worth Stockyards is one of the most genuinely unique experiences in all of North Texas. Twice daily longhorn cattle drives down Exchange Avenue. World-class honky-tonks like Billy Bob\'s Texas. And some of the most serious beef in the state at Cattlemen\'s Steakhouse.',
    highlights:['Daily Longhorn cattle drive (11:30am & 4pm)','Billy Bob\'s Texas — world\'s largest honky-tonk','Cattlemen\'s Steakhouse — legendary since 1947','Rodeo every Friday & Saturday night'],
    tips:['40 min from Dallas via I-30','TRE rail goes to Fort Worth — then Uber','Go on a Friday night for the full rodeo experience'],
    gmaps:'https://maps.google.com/?q=Fort+Worth+Stockyards+TX',
    links:[{label:'Fort Worth Stockyards',url:'https://www.fortworthstockyards.org'},{label:'Billy Bob\'s Texas',url:'https://www.billybobstexas.com'},{label:'Stockyards on Google Maps',url:'https://maps.google.com/?q=Fort+Worth+Stockyards+TX'}]
  },
  { slug:'oak-cliff', name:'Oak Cliff', icon:'🌮', tag:'Food · Authentic', cats:['food'],
    desc:'Skip the tourist Tex-Mex. Come here for authentic tacos al pastor, elote, and family-run taquizas that international visitors absolutely love.',
    long:'Oak Cliff is where Dallas locals eat when they don\'t want to perform for tourists. The taco scene here is world-class. Torchy\'s got famous here. Revolver Taco was born here. And the neighborhood taquerias — cash only, no English menus, always a line — are what Dallas food writers dream about.',
    highlights:['Revolver Taco — chef-driven elevated tacos','Neighborhood taquerias open until 3am','Elleño — best queso in Dallas','Oak Cliff Brewing Company'],
    tips:['Bring cash — many taquerias don\'t take cards','Best visited after 8pm when the night market energy picks up','Bishop Arts District is in the same neighborhood'],
    gmaps:'https://maps.google.com/?q=Oak+Cliff+Dallas+TX',
    links:[{label:'Oak Cliff on Google Maps',url:'https://maps.google.com/?q=Oak+Cliff+Dallas+TX'}]
  },
];

const RESTAURANTS = [
  { slug:'pecan-lodge', name:'Pecan Lodge', stars:5, cuisine:'BBQ', cat:'bbq', price:'$$', area:'Deep Ellum',
    desc:'Best brisket in Dallas. Insane burnt ends. Lines start at 11am — get there early or expect a 90-min wait.',
    long:'Pecan Lodge started as a farmers market stall and became a Dallas institution almost overnight. The brisket is smoke-ringed perfection, the burnt ends are legendary, and the jalapeño cheese sausage is not optional. Cash only. Worth every second of the wait.',
    address:'2702 Main St, Dallas, TX 75226', hours:'Mon–Thu 11am–3pm, Fri–Sun 11am–5pm',
    phone:'+1 (214) 748-8900', tags:['ICONIC','Cash Only','Lines Expected'],
    website:'https://www.pecanlodge.com', gmaps:'https://maps.google.com/?q=Pecan+Lodge+Dallas+TX',
    tips:['Arrive at opening — waits hit 90 min by noon','Order the Pitmaster Plate to try everything','Cash only at the counter','Burnt ends sell out — get there before noon']
  },
  { slug:'lucia', name:'Lucia', stars:5, cuisine:'Italian', cat:'international', price:'$$$', area:'Oak Cliff',
    desc:'Tiny, reservation-only gem. House-made pasta with Texas ingredients. Book 3 weeks ahead during World Cup.',
    long:'Lucia is one of the most acclaimed restaurants in Dallas, full stop. Chef David Uygur sources everything locally and makes pasta daily. The menu changes weekly. It seats 36 people. During the World Cup, getting a reservation will be nearly impossible — try OpenTable at midnight exactly 30 days before your date.',
    address:'408 W 8th St, Dallas, TX 75208', hours:'Tue–Sat 6pm–10pm (dinner only)',
    phone:'+1 (214) 948-4998', tags:['BOOK AHEAD','James Beard Nominated','Tiny Venue'],
    website:'https://www.luciadallas.com', gmaps:'https://maps.google.com/?q=Lucia+Restaurant+Dallas+TX',
    tips:['Reservations open 30 days in advance on OpenTable','Walk-in bar seats are first come, first served','Ask about the chef\'s tasting menu','Pair with the wine list — it\'s exceptional']
  },
  { slug:'knife', name:'Knife', stars:5, cuisine:'Steakhouse', cat:'international', price:'$$$$', area:'Uptown',
    desc:'Texas-raised beef, dry-aged 60+ days on site. The definitive Dallas steakhouse experience for special occasions.',
    long:'John Tesar\'s Knife is where you go to understand what Texas beef is really about. Everything is dry-aged in-house, minimum 60 days, some cuts up to 240 days. The bone-in ribeye is the benchmark. It\'s expensive. It is absolutely worth it.',
    address:'5300 E Mockingbird Ln, Dallas, TX 75206', hours:'Daily 5pm–10pm',
    phone:'+1 (214) 443-9339', tags:['SPLURGE','Best Steak in Dallas','Reservation Required'],
    website:'https://www.restaurantknife.com', gmaps:'https://maps.google.com/?q=Knife+Restaurant+Dallas+TX',
    tips:['The bone-in ribeye is non-negotiable','Reserve at least 2 weeks ahead','Try the 240-day dry-aged if available','Happy hour at the bar is significantly cheaper']
  },
  { slug:'revolver-taco', name:'Revolver Taco', stars:5, cuisine:'Tacos', cat:'texmex', price:'$', area:'Deep Ellum',
    desc:'Chef-driven elevated tacos. Rotating menu based on seasonal ingredients. The most creative taco in Dallas.',
    long:'Revolver Taco Lounge is where fine dining sensibility meets taco-stand format. Regino Rojas changes the menu constantly, sourcing from Mexican farms and Texas ranches simultaneously. You might find duck confit tacos next to handmade mole negro. No two visits are the same.',
    address:'2701 Main St, Dallas, TX 75226', hours:'Wed–Sun 5pm–10pm',
    phone:'+1 (214) 741-2629', tags:['CHEF-DRIVEN','Creative Menu','Local Legend'],
    website:'https://www.revolvertacosdallaas.com', gmaps:'https://maps.google.com/?q=Revolver+Taco+Dallas+TX',
    tips:['No reservations — arrive at 5pm or expect a wait','Order everything — portions are small and meant to share','The drinks program is as serious as the food','Follow them on Instagram for menu previews']
  },
  { slug:'eleno', name:'Elleño', stars:5, cuisine:'Tex-Mex', cat:'texmex', price:'$$', area:'Bishop Arts',
    desc:'Modern Tex-Mex with a serious cocktail program. The queso is the stuff of local legend.',
    long:'Elleño is what Tex-Mex looks like when a serious chef gets involved. The queso blanco is genuinely otherworldly — silky, flavorful, deeply addictive. The margarita program is equally serious. Lively atmosphere, great for groups, and the perfect bridge between authentic Mexican food and Dallas dining culture.',
    address:'316 W 7th St, Dallas, TX 75208', hours:'Mon–Thu 4pm–10pm, Fri–Sun 11am–11pm',
    phone:'+1 (469) 399-1299', tags:['BEST QUESO','Great for Groups','Lively Atmosphere'],
    website:'https://www.elleno.com', gmaps:'https://maps.google.com/?q=Elleño+Dallas+TX',
    tips:['Start with the queso — it is not optional','The house margarita is on par with anywhere in Mexico','Weekend brunch is excellent but very busy','Reservations available on Resy']
  },
  { slug:'heim-bbq', name:'Heim BBQ', stars:4, cuisine:'BBQ', cat:'bbq', price:'$$', area:'Fort Worth',
    desc:'Fort Worth\'s answer to Pecan Lodge. Bacon burnt ends are the must-order — they\'re unique to Heim.',
    long:'Travis and Emma Heim turned a food truck into a Fort Worth empire. The innovation here is bacon burnt ends — thick-cut bacon, smoked for hours, cubed and caramelized. They also do tremendous brisket and sell out of ribs by 1pm on weekends. The Fort Worth location is closer to AT&T Stadium than any Dallas BBQ.',
    address:'1109 W Magnolia Ave, Fort Worth, TX 76104', hours:'Wed–Sun 11am–4pm (or sold out)',
    phone:'+1 (817) 882-6970', tags:['BACON BURNT ENDS','Closest to Stadium','Sells Out Fast'],
    website:'https://www.heimbbq.com', gmaps:'https://maps.google.com/?q=Heim+BBQ+Fort+Worth+TX',
    tips:['Arrive at opening — sold out by 2pm on weekends','Bacon burnt ends are unique to Heim — mandatory order','The Fort Worth location is 15 min from AT&T Stadium','Check their Instagram for daily sold-out alerts']
  },
  { slug:'strangeways', name:'Strangeways', stars:4, cuisine:'Bar', cat:'bar', price:'$$', area:'Deep Ellum',
    desc:'500+ craft beers on tap and in cans. Legendary cheese fries. The best match-watching bar in Deep Ellum.',
    long:'Strangeways is the beer nerd\'s paradise and the perfect World Cup bar. 500+ selections spanning every style imaginable, a legit food menu anchored by their famous cheese fries, and an atmosphere that gets electric for big matches. Multiple screens throughout.',
    address:'2743 Commerce St, Dallas, TX 75226', hours:'Daily 2pm–2am',
    phone:'+1 (214) 741-4001', tags:['500+ BEERS','Match Watching','Open Late'],
    website:'https://www.strangewaysdallas.com', gmaps:'https://maps.google.com/?q=Strangeways+Dallas+TX',
    tips:['Get there 45 min before kickoff to get a screen-facing seat','The cheese fries are essential','Ask the staff for beer recommendations — they know everything','No reservations — first come first served']
  },
  { slug:'hg-sply-co', name:'HG Sply Co', stars:4, cuisine:'Bar', cat:'bar', price:'$$', area:'Lower Greenville',
    desc:'Massive rooftop with 360° Dallas skyline views. The ideal pre-match spot. Great cocktails and a full food menu.',
    long:'HG Sply Co occupies a converted space on Greenville Ave with one of the best rooftop terraces in Dallas. The views are dramatic, the cocktail menu is creative, and the kitchen turns out solid food until late. It\'s become the unofficial pre-match gathering spot for expats in Dallas during big tournaments.',
    address:'2008 Greenville Ave, Dallas, TX 75206', hours:'Mon–Fri 4pm–2am, Sat–Sun 11am–2am',
    phone:'+1 (469) 334-0895', tags:['ROOFTOP','Pre-Match Spot','Skyline Views'],
    website:'https://www.hgsplyco.com', gmaps:'https://maps.google.com/?q=HG+Sply+Co+Dallas+TX',
    tips:['Rooftop fills fast — arrive 1 hour before kickoff','The lower level has A/C if the heat is brutal','Parking on side streets or use the lot on Ross Ave','Sunday brunch + match day is a killer combo']
  },
  { slug:'smoky-rose', name:'Smoky Rose', stars:4, cuisine:'BBQ Fusion', cat:'bbq', price:'$$', area:'Garland',
    desc:'Korean-Texas BBQ fusion. Table grills, brisket tacos, kimchi biscuits. Completely unique to Dallas.',
    long:'Smoky Rose is the most unexpected restaurant on this list — and one of the most memorable. Korean table-grill technique applied to Texas beef, with kimchi and gochujang woven into the sides. Brisket tacos with Korean slaw, smoked bulgogi, and house-made hot sauce. A one-of-a-kind Dallas experience.',
    address:'2551 Forest Ln, Garland, TX 75042', hours:'Tue–Sun 11am–9pm',
    phone:'+1 (972) 276-6111', tags:['KOREAN-TEXAS FUSION','Unique','Table Grills'],
    website:'https://www.smokyrosebbq.com', gmaps:'https://maps.google.com/?q=Smoky+Rose+Garland+TX',
    tips:['The brisket tacos with Korean slaw are the signature — order them','Table grill experience requires 2+ people','About 20 min from downtown Dallas','Call ahead on weekends — waits can be long']
  },
];

// ── SHARED NAV RENDER ──────────────────────────────────────────
function renderNav(activePage) {
  const base = getBase();
  const nav = document.getElementById('main-nav');
  if (!nav) return;
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const isLight = document.documentElement.classList.contains('light');

  nav.innerHTML = `
    <div style="position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#002868 33.3%,#BF0A30 33.3%,#BF0A30 66.6%,#F0EDE8 66.6%);opacity:0.7;z-index:1"></div>
    <a class="logo" href="${base}index.html">⚽ Dallas<span class="g">2026</span></a>
    <ul class="nav-links">
      ${SITE.nav.map(n => {
        const href = base + n.href.replace(/^\//, '');
        const fileName = n.href.replace(/^\//, '');
        const isActive = currentPath === fileName || (currentPath === 'index.html' && n.href === '/matches.html' && activePage === 'matches');
        const navKey = 'nav_' + n.href.replace(/^\//, '').replace('.html','').replace('-','_');
        const label = t(navKey) || n.label;
        return `<li><a href="${href}" class="${isActive ? 'active' : ''}" data-navkey="${navKey}">${label}</a></li>`;
      }).join('')}
    </ul>
    <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
      <div class="lang-switcher">
        <button class="lang-btn active" onclick="setLang('en')">EN</button>
        <button class="lang-btn" onclick="setLang('es')">ES</button>
        <button class="lang-btn" onclick="setLang('fr')">FR</button>
        <button class="lang-btn" onclick="setLang('pt')">PT</button>
      </div>
      <button class="theme-toggle" id="theme-toggle-btn" onclick="toggleTheme()"
        title="${isLight ? 'Switch to dark mode' : 'Switch to light mode'}"
        aria-label="Toggle light/dark mode">
        ${isLight ? '🌙' : '☀️'}
      </button>
      <button class="hamburger" id="hamburger-btn" onclick="toggleMobileNav()"
        aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>`;

  // Inject mobile drawer after nav (only once)
  if (!document.getElementById('mobile-nav-drawer')) {
    const drawer = document.createElement('div');
    drawer.id = 'mobile-nav-drawer';
    drawer.className = 'mobile-nav-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
      <div style="padding:.5rem 1.25rem 1rem;border-bottom:1px solid var(--border);margin-bottom:.5rem">
        <div style="font-family:var(--fh);font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:.75rem">Navigate</div>
        ${SITE.nav.map(n => {
          const href = base + n.href.replace(/^\//, '');
          const fileName = n.href.replace(/^\//, '');
          const isActive = currentPath === fileName;
          const navKey2 = 'nav_' + n.href.replace(/^\//, '').replace('.html','').replace('-','_');
          const label2 = t(navKey2) || n.label;
          return `<a href="${href}" class="mobile-nav-link${isActive ? ' active' : ''}" onclick="closeMobileNav()" data-navkey="${navKey2}">${label2}</a>`;
        }).join('')}
      </div>
      <div style="padding:1rem 1.25rem">
        <div style="font-family:var(--fh);font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:.75rem">Language</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="lang-btn active" onclick="setLang('en');closeMobileNav()">EN — English</button>
          <button class="lang-btn" onclick="setLang('es');closeMobileNav()">ES — Español</button>
          <button class="lang-btn" onclick="setLang('fr');closeMobileNav()">FR — Français</button>
          <button class="lang-btn" onclick="setLang('pt');closeMobileNav()">PT — Português</button>
        </div>
      </div>`;
    document.body.insertBefore(drawer, document.body.firstChild);
  }
}

function toggleMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const btn = document.getElementById('hamburger-btn');
  if (!drawer || !btn) return;
  const isOpen = drawer.classList.contains('open');
  drawer.classList.toggle('open', !isOpen);
  btn.classList.toggle('open', !isOpen);
  btn.setAttribute('aria-expanded', String(!isOpen));
  drawer.setAttribute('aria-hidden', String(isOpen));
  // Prevent body scroll when drawer is open
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMobileNav() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const btn = document.getElementById('hamburger-btn');
  if (drawer) { drawer.classList.remove('open'); drawer.setAttribute('aria-hidden', 'true'); }
  if (btn) { btn.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  document.body.style.overflow = '';
}

// Close drawer on Escape key
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });

// ── THEME MANAGEMENT ──────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('dallas2026-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const useDark = saved ? saved === 'dark' : prefersDark;
  if (!useDark) {
    document.documentElement.classList.add('light');
  }
}

function toggleTheme() {
  // Smooth transition class
  document.documentElement.classList.add('theme-transitioning');
  document.documentElement.classList.toggle('light');
  const isLight = document.documentElement.classList.contains('light');
  localStorage.setItem('dallas2026-theme', isLight ? 'light' : 'dark');
  // Update toggle button
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    btn.textContent = isLight ? '🌙' : '☀️';
    btn.title = isLight ? 'Switch to dark mode' : 'Switch to light mode';
  }
  // Also update hero background if on homepage
  updateHeroForTheme(isLight);
  // Remove transition class after animation
  setTimeout(() => document.documentElement.classList.remove('theme-transitioning'), 350);
}

function updateHeroForTheme(isLight) {
  // Weather card background on index.html
  const wCard = document.querySelector('.weather-card');
  if (wCard) {
    wCard.style.background = isLight ? 'rgba(0,40,104,0.08)' : 'rgba(0,40,104,0.6)';
    wCard.style.borderColor = isLight ? 'rgba(0,40,104,0.2)' : 'rgba(240,237,232,0.15)';
  }
}

// Run immediately so theme applies before render
initTheme();

function getBase() {
  // Robustly calculates the relative path back to the site root,
  // regardless of whether the site is deployed at the domain root
  // (yourusername.github.io/) or a subdirectory (yourusername.github.io/dallas2026/).
  // Uses absolute paths anchored to the actual URL — never breaks on subdirectory deploys.
  const path = window.location.pathname;
  const isSubDir = path.includes('/neighborhoods/') ||
                   path.includes('/restaurants/')   ||
                   path.includes('/activities/');

  // Split into parts, drop empty strings
  const parts = path.split('/').filter(Boolean);

  if (!isSubDir) {
    // Top-level page: e.g. /dallas2026/matches.html
    // Drop the filename, return the directory with leading slash
    parts.pop();
    return (parts.length ? '/' + parts.join('/') + '/' : '/');
  } else {
    // Subdir page: e.g. /dallas2026/activities/perot-museum.html
    // Drop the filename AND the subdir folder
    parts.pop(); // filename
    parts.pop(); // 'activities' | 'neighborhoods' | 'restaurants'
    return (parts.length ? '/' + parts.join('/') + '/' : '/');
  }
}

// ── FOOTER RENDER ─────────────────────────────────────────────
function renderFooter() {
  const base = getBase();
  const footer = document.getElementById('main-footer');
  if (!footer) return;
  footer.innerHTML = `
    <div class="footer-inner">
      <div>
        <div class="footer-logo">⚽ Dallas<span class="g">2026</span></div>
        <div class="footer-tagline">Your complete FIFA World Cup visitor guide</div>
      </div>
      <div>
        <div class="footer-col-title">Pages</div>
        <ul class="footer-links">
          ${SITE.nav.map(n => `<li><a href="${base}${n.href.replace(/^\//,'')}">${n.label}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Official Links</div>
        <ul class="footer-links">
          <li><a href="https://www.fifa.com/fifaplus/en/tournaments/mens/worldcup/canadamexicousa2026" target="_blank" rel="noopener">FIFA World Cup 2026 ↗</a></li>
          <li><a href="https://www.dart.org" target="_blank" rel="noopener">DART Transit ↗</a></li>
          <li><a href="https://www.attstadium.com" target="_blank" rel="noopener">AT&T Stadium ↗</a></li>
          <li><a href="https://www.visitdallas.com" target="_blank" rel="noopener">Visit Dallas ↗</a></li>
          <li><a href="https://www.dfwairport.com" target="_blank" rel="noopener">DFW Airport ↗</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-col-title">Emergency</div>
        <ul class="footer-links">
          <li><a href="tel:911">Emergency: 911</a></li>
          <li><a href="tel:+12147484900">Medical City Arlington</a></li>
          <li><a href="https://www.weather.gov" target="_blank" rel="noopener">Weather Alerts ↗</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">Fan-made visitor guide for FIFA World Cup 2026 · Not affiliated with FIFA or the City of Dallas</div>`;
}

// ── COUNTDOWN ─────────────────────────────────────────────────
// All confirmed Dallas match datetimes in ISO format (CDT = UTC-5)
// CDT = Central Daylight Time = UTC-4 (summer offset, NOT UTC-5)
const DALLAS_MATCH_TIMES = [
  new Date('2026-06-14T15:00:00-04:00'), // Netherlands vs Japan  — 3:00 PM CDT
  new Date('2026-06-17T15:00:00-04:00'), // England vs Croatia    — 3:00 PM CDT
  new Date('2026-06-22T12:00:00-04:00'), // Argentina vs Austria  — 12:00 PM CDT
  new Date('2026-06-25T18:00:00-04:00'), // Japan vs Sweden       — 6:00 PM CDT
  new Date('2026-06-27T21:00:00-04:00'), // Jordan vs Argentina   — 9:00 PM CDT
  new Date('2026-06-30T12:00:00-04:00'), // Round of 32           — 12:00 PM CDT
  new Date('2026-07-03T13:00:00-04:00'), // Round of 32           — 1:00 PM CDT
  new Date('2026-07-06T14:00:00-04:00'), // Round of 16           — 2:00 PM CDT
  new Date('2026-07-14T14:00:00-04:00'), // Semifinal             — 2:00 PM CDT
];

function getNextMatch() {
  const now = new Date();
  // Find the next match that hasn't kicked off yet (allow 2hr grace after start)
  return DALLAS_MATCH_TIMES.find(d => d - now > -2 * 36e5) || null;
}

function initCountdown(dayId, hId, mId, sId) {
  function tick() {
    const target = getNextMatch();
    if (!target) {
      // All matches done — show zeros
      [dayId, hId, mId, sId].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '0';
      });
      return;
    }
    const t = target - new Date();
    if (t <= 0) {
      // Kickoff! Show live indicator
      [dayId, hId, mId, sId].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = '0';
      });
      return;
    }
    const d = Math.floor(t / 864e5),
          h = Math.floor(t % 864e5 / 36e5),
          m = Math.floor(t % 36e5 / 6e4),
          s = Math.floor(t % 6e4 / 1e3);
    if (dayId && document.getElementById(dayId)) document.getElementById(dayId).textContent = d;
    if (hId   && document.getElementById(hId))   document.getElementById(hId).textContent   = String(h).padStart(2,'0');
    if (mId   && document.getElementById(mId))   document.getElementById(mId).textContent   = String(m).padStart(2,'0');
    if (sId   && document.getElementById(sId))   document.getElementById(sId).textContent   = String(s).padStart(2,'0');
    const dh = document.getElementById('days-hero');
    if (dh) dh.textContent = d;
  }
  tick(); setInterval(tick, 1000);
}

// ── HERO WEATHER ──────────────────────────────────────────────
// Fetches in Celsius + m/s so we can convert to either unit on the fly.
let _heroWeatherData = null;
let _heroWeatherUnit = localStorage.getItem('dallas2026-unit') || 'F';

async function initWeather() {
  try {
    const r = await fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=32.78&longitude=-96.81' +
      '&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m' +
      '&temperature_unit=celsius&wind_speed_unit=ms&timezone=America%2FChicago'
    );
    const d = await r.json();
    _heroWeatherData = d.current;
    renderHeroWeather();
  } catch(e) {
    const descEl = document.getElementById('w-desc');
    if (descEl) descEl.textContent = 'Weather unavailable';
  }
}

function renderHeroWeather() {
  if (!_heroWeatherData) return;
  const c = _heroWeatherData;
  const isCelsius = _heroWeatherUnit === 'C';
  const codes = {0:'Clear skies',1:'Mostly clear',2:'Partly cloudy',3:'Overcast',
    45:'Foggy',51:'Light drizzle',61:'Light rain',63:'Moderate rain',
    80:'Rain showers',95:'Thunderstorms'};

  const tempC = c.temperature_2m;
  const temp  = isCelsius ? Math.round(tempC) : Math.round(tempC * 9/5 + 32);
  const unit  = isCelsius ? '°C' : '°F';
  const windMs = c.wind_speed_10m;
  const wind  = isCelsius ? Math.round(windMs * 3.6) : Math.round(windMs * 2.237);
  const wUnit = isCelsius ? 'km/h' : 'mph';

  const tempEl     = document.getElementById('w-temp');
  const descEl     = document.getElementById('w-desc');
  const humEl      = document.getElementById('w-hum');
  const windEl     = document.getElementById('w-wind');
  const windUnitEl = document.getElementById('w-wind-unit');

  if (tempEl)     tempEl.textContent = temp + unit;
  if (descEl)     descEl.textContent = codes[c.weather_code] || 'Conditions vary';
  if (humEl)      humEl.textContent  = Math.round(c.relative_humidity_2m);
  if (windEl)     windEl.textContent = wind;
  if (windUnitEl) windUnitEl.textContent = wUnit;

  // Update toggle button — shows the unit you'll SWITCH TO (not current)
  const btn = document.getElementById('hw-toggle');
  if (btn) {
    btn.textContent = isCelsius ? '°F' : '°C';
    btn.title = isCelsius ? 'Switch to Fahrenheit' : 'Switch to Celsius';
  }
}

function heroWeatherUnit(u) {
  _heroWeatherUnit = u;
  localStorage.setItem('dallas2026-unit', u);
  if (typeof ww_setUnit === 'function') ww_setUnit(u);
  renderHeroWeather();
}

function heroWeatherToggle() {
  // Toggle between F and C
  heroWeatherUnit(_heroWeatherUnit === 'F' ? 'C' : 'F');
}

// ── EXTERNAL LINK HELPER ──────────────────────────────────────
function extLink(url, label) {
  return `<a href="${url}" target="_blank" rel="noopener" class="ext-link">${label} <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></a>`;
}

// ── STAR RENDERER ─────────────────────────────────────────────
function stars(n) {
  return '★'.repeat(n) + '☆'.repeat(5-n);
}

// ── ACTIVE NAV ON SCROLL ──────────────────────────────────────
function initScrollSpy(sectionIds) {
  window.addEventListener('scroll', () => {
    let cur = '';
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top < 120) cur = id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => {
      a.classList.toggle('active', a.dataset.section === cur);
    });
  });
}

// ── FAMILY ACTIVITIES DATA ────────────────────────────────────
const FAMILY_ACTIVITIES = [
  {
    slug: 'perot-museum',
    name: 'Perot Museum of Nature & Science',
    icon: '🦕',
    cat: 'museum',
    area: 'Downtown Dallas',
    age: 'All ages',
    price: '$$',
    duration: '2–4 hrs',
    indoorOutdoor: 'Indoor',
    desc: 'Five floors of hands-on science and nature exhibits — dinosaurs, gems, space, energy, and engineering. The best rainy-day (or blazing-hot) activity in Dallas.',
    long: 'The Perot Museum is one of the finest science museums in the American South. The Lyda Hill Gem & Mineral Hall dazzles with precious stones from around the world. The Dinosaurs Then and Now Hall houses a genuine T. rex skull. The Engineering & Innovation Hall has hands-on building challenges kids can\'t tear themselves away from. On a July afternoon when it\'s 104°F outside, this place is a lifesaver for families.',
    highlights: ['T. rex skull and full dinosaur skeletons','Hands-on engineering challenges','Gem & mineral collection with meteorites','Dedicated children\'s museum floor (under 8)','Giant IMAX-style film theater'],
    tips: ['Buy tickets online — weekend queues are long','Arrive at opening (10am) to beat school groups','The rooftop garden has great downtown views','Allow at least 3 hours — kids will want more','Parking garage connected to the building'],
    address: '2201 N Field St, Dallas, TX 75201',
    hours: 'Mon–Sat 10am–5pm, Sun 11am–5pm',
    phone: '+1 (214) 428-5555',
    website: 'https://www.perotmuseum.org',
    gmaps: 'https://maps.google.com/?q=Perot+Museum+Dallas+TX',
    transit: { dart: true, line: 'Orange/Red Line → Victory Station (5-min walk)', driving: '10 min from downtown, garage on-site', rideshare: 'Easy Uber/Lyft drop-off on Field St' },
    admission: { adult: 25, child: 17, under3: 'Free' },
    tags: ['KIDS LOVE IT', 'Air Conditioned', 'All Ages'],
    viator: 'https://www.viator.com/Dallas-attractions/Perot-Museum/d673-a22789',
  },
  {
    slug: 'dallas-zoo',
    name: 'Dallas Zoo',
    icon: '🦁',
    cat: 'outdoors',
    area: 'Oak Cliff / South Dallas',
    age: 'All ages',
    price: '$$',
    duration: '3–5 hrs',
    indoorOutdoor: 'Outdoor + Indoor',
    desc: 'The largest zoo in Texas — 106 acres with 2,000+ animals including the Giants of the Savanna habitat with African elephants roaming freely alongside giraffes.',
    long: 'Dallas Zoo is genuinely exceptional. The Giants of the Savanna is one of the most naturalistic African habitat exhibits in North America — elephants and giraffes share open space with no glass between you and them. The ZooNorth section has black rhinos, and the Lacerte Family Children\'s Zoo has a splash pad for hot summer days. Go early — the animals are most active in the morning.',
    highlights: ['Giants of the Savanna — elephants & giraffes together','Black rhinos and cheetahs','Splash pad in Children\'s Zoo','Giraffe feeding experience (extra fee)','Children\'s carousel and train ride'],
    tips: ['Open at 9am — go early before the heat peaks','Bring sunscreen and hats — it\'s very exposed','Giraffe feeding ($5 extra) is worth every penny','The tram ($3) saves tired legs on big walking days','Free parking in the main lot'],
    address: '650 S RL Thornton Fwy, Dallas, TX 75203',
    hours: 'Daily 9am–5pm (last entry 4pm)',
    phone: '+1 (469) 554-7500',
    website: 'https://www.dallaszoo.com',
    gmaps: 'https://maps.google.com/?q=Dallas+Zoo+TX',
    transit: { dart: true, line: 'Blue/Red Line → Dallas Zoo Station (main entrance)', driving: '5 min from downtown', rideshare: 'Drop-off at main entrance' },
    admission: { adult: 21, child: 17, under2: 'Free' },
    tags: ['BEST IN TEXAS', 'Splash Pad', 'Early Morning'],
    viator: 'https://www.viator.com/Dallas-attractions/Dallas-Zoo/d673-a22790',
  },
  {
    slug: 'legoland-discovery',
    name: 'LEGOLAND Discovery Center',
    icon: '🧱',
    cat: 'indoor',
    area: 'Grapevine (near DFW Airport)',
    age: '3–12 years',
    price: '$$$',
    duration: '2–3 hrs',
    indoorOutdoor: 'Indoor',
    desc: 'Fully indoor LEGO world with 4D cinema, rides, building zones, and a miniature LEGO Dallas cityscape. Perfect for ages 3–12 on a hot Texas afternoon.',
    long: 'LEGOLAND Discovery Center Grapevine is the ultimate rainy-day or heat-escape for younger kids. The MINILAND section has an impressive LEGO replica of Dallas including AT&T Stadium — great for World Cup families. The factory tour teaches how LEGO bricks are made. Two rides (a laser-blasting dark ride and a merlin\'s apprentice flying ride), two 4D films, and unlimited building zones. Adults must be accompanied by a child.',
    highlights: ['MINILAND with LEGO replica of Dallas','Two rides including laser blaster dark ride','LEGO factory tour','4D cinema with two films','Unlimited creative building zones'],
    tips: ['Book online — often cheaper + skip the queue','Best for ages 3–10 (older kids may outgrow it)','Plan 2.5 hours — it\'s not huge but they\'ll want to linger','Located in Grapevine Mills Mall — easy parking','Combine with SEA LIFE Aquarium next door'],
    address: '3000 Grapevine Mills Pkwy, Grapevine, TX 76051',
    hours: 'Daily 10am–7pm (last entry 5pm)',
    phone: '+1 (817) 488-6868',
    website: 'https://www.legolanddiscoverycenter.com/grapevine',
    gmaps: 'https://maps.google.com/?q=LEGOLAND+Discovery+Center+Grapevine+TX',
    transit: { dart: false, line: 'No direct transit — car or rideshare required', driving: '30 min from Dallas (I-635 N → TX-26)', rideshare: 'Uber/Lyft from DFW Airport ~10 min' },
    admission: { adult: 28, child: 28, under2: 'Free', note: 'Same price for adults & children' },
    tags: ['AGES 3–12', 'Air Conditioned', 'No Transit'],
    viator: 'https://www.viator.com/tours/Dallas/LEGOLAND-Discovery-Center/d673-5798P1',
  },
  {
    slug: 'sea-life-aquarium',
    name: 'SEA LIFE Grapevine Aquarium',
    icon: '🦈',
    cat: 'indoor',
    area: 'Grapevine (near DFW Airport)',
    age: 'All ages',
    price: '$$$',
    duration: '1.5–2.5 hrs',
    indoorOutdoor: 'Indoor',
    desc: 'Walk-through ocean tunnel aquarium with sharks, rays, seahorses, and a touch pool. Right next to LEGOLAND — combine both for a full family day.',
    long: 'SEA LIFE Grapevine is a compact but beautifully designed aquarium with an impressive 360° ocean tunnel where sharks and rays swim overhead. The rockpool touch tank lets kids handle starfish and crabs. The jellyfish display is genuinely mesmerizing for all ages. It\'s connected to Grapevine Mills Mall and directly next door to LEGOLAND Discovery Center — buying combo tickets for both saves money and makes for a perfect full-day outing.',
    highlights: ['360° ocean walk-through tunnel with sharks','Jellyfish display and seahorses','Rockpool touch tank','Combo deals with LEGOLAND next door','Fully air conditioned — perfect summer escape'],
    tips: ['Buy LEGOLAND + SEA LIFE combo — saves ~$15/person','Allow 1.5–2 hours for a comfortable visit','Touch tank is best early — less crowded','Grapevine Mills Mall has food court for lunch','Parking is free at the mall'],
    address: '3000 Grapevine Mills Pkwy Suite 214, Grapevine, TX 76051',
    hours: 'Daily 10am–7pm',
    phone: '+1 (817) 488-6868',
    website: 'https://www.visitsealife.com/grapevine',
    gmaps: 'https://maps.google.com/?q=SEA+LIFE+Grapevine+Aquarium+TX',
    transit: { dart: false, line: 'No direct transit — car or rideshare required', driving: '30 min from Dallas, next to LEGOLAND', rideshare: '~10 min Uber from DFW Airport' },
    admission: { adult: 26, child: 21, under2: 'Free' },
    tags: ['TOUCH TANK', 'Combo with LEGO', 'Air Conditioned'],
    viator: 'https://www.viator.com/Dallas/d673-ttd',
  },
  {
    slug: 'reunion-tower',
    name: 'Reunion Tower GeO-Deck',
    icon: '🌆',
    cat: 'landmark',
    area: 'Downtown Dallas',
    age: 'All ages',
    price: '$$',
    duration: '45–90 min',
    indoorOutdoor: 'Indoor + Outdoor',
    desc: 'Dallas\'s iconic ball-shaped observation tower with 360° views from 470 feet. Interactive HD cameras let kids zoom in on the stadium, planes landing at Love Field, and the entire DFW skyline.',
    long: 'Reunion Tower is the most recognizable landmark on the Dallas skyline — that glowing ball you see in every photo. The GeO-Deck sits at 470 feet with both indoor and outdoor observation decks. The interactive camera stations let kids control HD cameras that zoom in anywhere across the city. On a clear day you can see AT&T Stadium in Arlington 20 miles away. The Cloud Nine Café upstairs offers drinks with the view.',
    highlights: ['470-foot observation deck with 360° city views','Interactive HD zoom cameras','Outdoor deck with open-air viewing','Clear day views to AT&T Stadium','Cloud Nine Café with cocktails for parents'],
    tips: ['Book online — cheaper than door price','Sunset timing (7:30–8:30pm in June) is spectacular','Takes about an hour — good as part of a downtown day','Connected to Hyatt Regency by walkway','Bring a jacket — the outdoor deck gets windy'],
    address: '300 Reunion Blvd E, Dallas, TX 75207',
    hours: 'Sun–Thu 11am–9pm, Fri–Sat 11am–10pm',
    phone: '+1 (214) 712-7040',
    website: 'https://www.reuniontower.com',
    gmaps: 'https://maps.google.com/?q=Reunion+Tower+Dallas+TX',
    transit: { dart: true, line: 'Union Station (all lines) — 8-min walk', driving: '5 min from downtown, valet or street parking', rideshare: 'Easy drop-off at the tower base' },
    admission: { adult: 19, child: 13, under3: 'Free' },
    tags: ['ICONIC VIEW', 'Downtown', 'DART Accessible'],
    viator: 'https://www.viator.com/tours/Dallas/Reunion-Tower-GeO-Deck-Admission/d673-13966P8',
  },
  {
    slug: 'six-flags-over-texas',
    name: 'Six Flags Over Texas',
    icon: '🎢',
    cat: 'themepark',
    area: 'Arlington (near AT&T Stadium)',
    age: '5+ years',
    price: '$$$',
    duration: 'Full day',
    indoorOutdoor: 'Outdoor + some Indoor',
    desc: 'The original Six Flags — roller coasters, water rides, and thrill attractions just 1 mile from AT&T Stadium. A full day out for families between matches.',
    long: 'Six Flags Over Texas is the park that started the whole Six Flags chain, opened in 1961. It sits literally 1 mile from AT&T Stadium in Arlington, making it a perfect between-matches day trip. The Titan steel coaster is one of the tallest in Texas at 245 feet. The Judge Roy Scream wooden coaster is a classic. For younger kids, Bugs Bunny Boomtown has over 20 rides. June–July is hot but the park has misting stations and water rides throughout.',
    highlights: ['Titan — 245-foot steel coaster, one of Texas\'s tallest','Mr. Freeze: Reverse Blast — 0 to 70mph in seconds','Bugs Bunny Boomtown for young children','Multiple water rides to cool down','Walking distance from AT&T Stadium'],
    tips: ['Buy tickets online — gate price is much higher','Go on weekdays if possible — weekends are packed','Download the Six Flags app for wait times','Bring a change of clothes for water rides','Flash Pass skip-the-line worth it on busy days'],
    address: '2201 E Road to Six Flags St, Arlington, TX 76010',
    hours: 'Hours vary — check website. Generally 10:30am–8pm+ in summer',
    phone: '+1 (817) 640-8900',
    website: 'https://www.sixflags.com/overtexas',
    gmaps: 'https://maps.google.com/?q=Six+Flags+Over+Texas+Arlington+TX',
    transit: { dart: false, line: 'No direct transit — car, rideshare, or FIFA shuttle area', driving: '1 mile from AT&T Stadium, on-site parking ($35)', rideshare: 'Uber/Lyft from Arlington hotels ~5 min' },
    admission: { adult: 55, child: 45, under2: 'Free', note: 'Online price. Gate price is significantly higher.' },
    tags: ['FULL DAY', 'Near Stadium', 'Ages 5+'],
    viator: 'https://www.viator.com/tours/Dallas/Six-Flags-Over-Texas/d673-4088SIXFLAGSTX',
  },
  {
    slug: 'national-western-heritage',
    name: 'Stockyards & Cattle Drive',
    icon: '🤠',
    cat: 'outdoors',
    area: 'Fort Worth Stockyards',
    age: 'All ages',
    price: '$',
    duration: '2–4 hrs',
    indoorOutdoor: 'Outdoor + Indoor',
    desc: 'Twice-daily longhorn cattle drives down Exchange Avenue. Free to watch, fascinating for kids — plus a rodeo arena, petting areas, and authentic cowboy culture.',
    long: 'The Fort Worth Stockyards cattle drive happens twice daily (11:30am and 4pm) and is completely free to watch. Texas Longhorn cattle are driven down Exchange Avenue by real cowboys on horseback — it\'s genuinely spectacular and unlike anything kids from other countries will have ever seen. The Stockyards also has a petting zoo, horse rides, and the Cowtown Cattlepen Maze. For the full experience, stick around for the Friday or Saturday night rodeo.',
    highlights: ['Free twice-daily Longhorn cattle drive (11:30am & 4pm)','Friday & Saturday night rodeo ($15–25)','Cowtown Cattlepen Maze for kids','Horse rides for children','Billy Bob\'s Texas honky-tonk next door'],
    tips: ['Cattle drive is free — just show up 10 min early for a good spot','11:30am drive is less crowded than 4pm','The rodeo on Friday night is exceptional — book ahead','Exchange Ave is walkable and stroller-friendly','Parking in the free lots off Main St'],
    address: '131 E Exchange Ave, Fort Worth, TX 76164',
    hours: 'Open daily. Cattle drive 11:30am & 4pm daily',
    phone: '+1 (817) 625-9715',
    website: 'https://www.fortworthstockyards.org',
    gmaps: 'https://maps.google.com/?q=Fort+Worth+Stockyards+TX',
    transit: { dart: false, line: 'TRE to Fort Worth T&P Station, then Uber (~15 min)', driving: '35 min from Dallas via I-30, free parking on Main St', rideshare: 'Uber/Lyft from Fort Worth TRE station ~$10' },
    admission: { adult: 0, child: 0, note: 'Cattle drive is free. Rodeo tickets $15–25.' },
    tags: ['FREE ENTRY', 'Cattle Drive', 'Fort Worth'],
    viator: 'https://www.viator.com/tours/Fort-Worth/Fort-Worth-Stockyards-Experience/d5440-3582FWSTOCKYARDS',
  },
  {
    slug: 'hawaiian-falls',
    name: 'Hawaiian Falls Water Park',
    icon: '🌊',
    cat: 'outdoors',
    area: 'The Colony (North Dallas)',
    age: 'All ages',
    price: '$$',
    duration: 'Full day',
    indoorOutdoor: 'Outdoor',
    desc: 'The best water park in the DFW area — wave pools, lazy river, tube slides, and a dedicated toddler splash zone. Essential for families in July heat.',
    long: 'Hawaiian Falls is the answer to Dallas summer heat. The Colony location is the largest in the chain with a massive wave pool, multiple body slides, a multi-lane racing slide, a lazy river, and an extensive toddler area with shallow splash zones. In June and July when temperatures are regularly above 100°F, a water park day between matches is genuinely the best thing you can do with children. Plan to arrive at opening — it fills up by noon on weekends.',
    highlights: ['Wave pool with 4-foot waves','Lazy river — bring your own inner tube','Multi-lane racing slides','Dedicated toddler splash zone (ages 0–5)','Season passes available for multiple visits'],
    tips: ['Arrive at 10am opening — capacity reached by noon on weekends','Buy tickets online — cheaper than gate','Bring water shoes — pavement gets extremely hot','Reapply sunscreen every hour — you\'re outside all day','Free parking in the large surface lot'],
    address: '4400 Paige Rd, The Colony, TX 75056',
    hours: 'Daily 10am–7pm (Memorial Day–Labor Day)',
    phone: '+1 (972) 370-0100',
    website: 'https://www.hawaiianfalls.com',
    gmaps: 'https://maps.google.com/?q=Hawaiian+Falls+The+Colony+TX',
    transit: { dart: false, line: 'No direct transit — car or rideshare required', driving: '30 min north of Dallas via I-35E', rideshare: '~$30–40 Uber from downtown Dallas' },
    admission: { adult: 35, child: 29, under2: 'Free' },
    tags: ['BEAT THE HEAT', 'Full Day', 'All Ages'],
    viator: 'https://www.viator.com/Dallas/d673-ttd',
  },
  {
    slug: 'globe-life-field',
    name: 'Globe Life Field Tour',
    icon: '⚾',
    cat: 'stadium',
    area: 'Arlington (near AT&T Stadium)',
    age: 'All ages',
    price: '$',
    duration: '1.5 hrs',
    indoorOutdoor: 'Indoor',
    desc: 'Behind-the-scenes tour of the Texas Rangers\' retractable-roof stadium — just a 10-min walk from AT&T Stadium. Catch a Rangers game while you\'re in town for the World Cup.',
    long: 'Globe Life Field opened in 2020 and is one of the most beautiful ballparks in America — a retractable roof means it\'s air-conditioned no matter how hot Dallas gets. The 75-minute stadium tour goes into the dugout, clubhouse, and press box. The Texas Rangers play throughout the World Cup period, making a baseball game a great family activity between FIFA matches. Families coming from soccer-mad countries often find American baseball a fascinating cultural experience.',
    highlights: ['Retractable roof — fully air-conditioned','Behind-the-scenes tour: dugout, clubhouse, press box','Rangers games June–July during World Cup period','Walk-up tickets often available','10-min walk from AT&T Stadium'],
    tips: ['Buy game tickets at mlb.com/rangers — upper deck is great value','Hot dogs and nachos are the essential ballpark food','Games start at 7:05pm most weeknights — 3 hours long','The roof is always closed in summer — it\'s perfectly cool inside','Combine with AT&T Stadium area for a full Arlington day'],
    address: '734 Stadium Dr, Arlington, TX 76011',
    hours: 'Tours: Mon–Sat 10am, 12pm, 2pm (non-game days only)',
    phone: '+1 (817) 533-1655',
    website: 'https://www.mlb.com/rangers/ballpark/tours',
    gmaps: 'https://maps.google.com/?q=Globe+Life+Field+Arlington+TX',
    transit: { dart: false, line: 'No direct transit — same location as AT&T Stadium', driving: '1 AT&T Way, Arlington — shared parking with AT&T Stadium', rideshare: 'Easy drop-off at stadium entrance' },
    admission: { adult: 22, child: 14, under2: 'Free', note: 'Game tickets separate from tours.' },
    tags: ['NEAR STADIUM', 'Air Conditioned', 'Cultural Experience'],
    viator: 'https://www.viator.com/Dallas/d673-ttd',
  },
  {
    slug: 'dallas-arboretum',
    name: 'Dallas Arboretum & Botanical Garden',
    icon: '🌸',
    cat: 'outdoors',
    area: 'East Dallas (White Rock Lake)',
    age: 'All ages',
    price: '$$',
    duration: '2–3 hrs',
    indoorOutdoor: 'Outdoor',
    desc: 'Stunning 66-acre garden on White Rock Lake with a dedicated children\'s adventure garden, splash areas, and some of the most beautiful landscaping in Texas.',
    long: 'The Dallas Arboretum is 66 acres of extraordinary gardens on the shores of White Rock Lake. The Rory Meyers Children\'s Adventure Garden is one of the finest children\'s garden spaces in America — 8 acres of interactive science and nature exhibits designed specifically for kids, including a splash zone that\'s essential in summer. The views across the lake to the Dallas skyline are stunning. Visit in the morning — it gets very hot by afternoon.',
    highlights: ['Rory Meyers Children\'s Adventure Garden (8 acres)','Interactive water features and splash zone','White Rock Lake waterfront views','Dallas skyline backdrop for photos','Seasonal festivals and family events'],
    tips: ['Go in the morning — afternoon heat is brutal outside','Buy tickets online — gate is the same price but slower','Bring a picnic or use the garden café','The children\'s garden alone is worth the admission price','Free parking in the surface lot on Garland Rd'],
    address: '8525 Garland Rd, Dallas, TX 75218',
    hours: 'Daily 9am–5pm',
    phone: '+1 (214) 515-6615',
    website: 'https://www.dallasarboretum.org',
    gmaps: 'https://maps.google.com/?q=Dallas+Arboretum+TX',
    transit: { dart: true, line: 'Bus route 60 from NorthPark or DART Blue Line Mockingbird Station → Bus', driving: '15 min from downtown, free parking on-site', rideshare: 'Easy Uber/Lyft drop-off at main gate' },
    admission: { adult: 22, child: 17, under2: 'Free' },
    tags: ['CHILDREN\'S GARDEN', 'Morning Visit', 'Beautiful Views'],
    viator: 'https://www.viator.com/Dallas-attractions/Dallas-Arboretum-and-Botanical-Garden/d673-a22791',
  },
];

// ── COMPACT WEATHER WIDGET ────────────────────────────────────
// Call renderWeatherWidget(containerId) on any page for an embedded card.
// Reads/writes unit preference to localStorage ('dallas2026-unit').

async function renderWeatherWidget(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const WX_CODES = {
    0:{l:'Clear Sky',i:'☀️'},1:{l:'Mostly Clear',i:'🌤️'},2:{l:'Partly Cloudy',i:'⛅'},
    3:{l:'Overcast',i:'☁️'},45:{l:'Foggy',i:'🌫️'},51:{l:'Light Drizzle',i:'🌦️'},
    61:{l:'Light Rain',i:'🌧️'},63:{l:'Rain',i:'🌧️'},80:{l:'Showers',i:'🌦️'},
    95:{l:'Thunderstorms',i:'⛈️'},96:{l:'Thunderstorms',i:'⛈️'},
  };
  function wx(code){ return WX_CODES[code] || {l:'Variable',i:'🌡️'}; }

  let unit = localStorage.getItem('dallas2026-unit') || 'F';
  function toD(c){ return unit==='F' ? Math.round(c*9/5+32) : Math.round(c); }
  function uL(){ return unit==='F' ? '°F' : '°C'; }
  function heatCls(c){ return c<27?'#81C784':c<33?'#F0EDE8':c<38?'#FF6B35':'#BF0A30'; }

  const base = (function(){
    const d=window.location.pathname.split('/').filter(Boolean).length;
    const sub=window.location.pathname.includes('/neighborhoods/')||window.location.pathname.includes('/restaurants/')||window.location.pathname.includes('/activities/');
    return sub?'../../':'./';
  })();

  el.innerHTML = `<div style="background:var(--card);border:1px solid var(--border);padding:1.25rem;font-family:var(--fb)">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.85rem">
      <div style="font-family:var(--fh);font-size:.65rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--gold);display:flex;align-items:center;gap:6px">
        <span class="live-dot"></span>Dallas Live Weather
      </div>
      <div style="display:flex;border:1px solid var(--border2);overflow:hidden">
        <button id="ww-f" onclick="ww_setUnit('F')" style="font-family:var(--fh);font-size:.7rem;font-weight:700;padding:4px 10px;border:none;cursor:pointer;background:${unit==='F'?'var(--gold)':'transparent'};color:${unit==='F'?'var(--dark)':'var(--muted)'};transition:all .15s">°F</button>
        <button id="ww-c" onclick="ww_setUnit('C')" style="font-family:var(--fh);font-size:.7rem;font-weight:700;padding:4px 10px;border:none;cursor:pointer;background:${unit==='C'?'var(--gold)':'transparent'};color:${unit==='C'?'var(--dark)':'var(--muted)'};transition:all .15s">°C</button>
      </div>
    </div>
    <div id="ww-body" style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
      <div style="font-size:.8rem;color:var(--muted);font-weight:300">Loading…</div>
    </div>
    <div id="ww-days" style="display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-top:.85rem;border-top:1px solid var(--border);padding-top:.85rem"></div>
    <div style="margin-top:.75rem">
      <a href="${base}weather.html" style="font-family:var(--fh);font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--gold);text-decoration:none;display:inline-flex;align-items:center;gap:4px">Full Forecast →</a>
    </div>
  </div>`;

  async function load() {
    try {
      const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.7767&longitude=-96.7970&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,precipitation&daily=temperature_2m_max,temperature_2m_min,weather_code,precipitation_probability_max&temperature_unit=celsius&wind_speed_unit=ms&timezone=America%2FChicago&forecast_days=7');
      const d = await res.json();
      const c = d.current;
      const wxi = wx(c.weather_code);
      const feelsC = c.apparent_temperature;
      const windMph = Math.round(c.wind_speed_10m * 2.237);
      const windKph = Math.round(c.wind_speed_10m * 3.6);
      const windStr = unit==='F' ? `${windMph}mph` : `${windKph}km/h`;

      document.getElementById('ww-body').innerHTML = `
        <div style="font-size:2.8rem;line-height:1">${wxi.i}</div>
        <div style="flex:1">
          <div style="font-family:var(--fh);font-size:2.4rem;font-weight:900;color:var(--text);line-height:1">${toD(c.temperature_2m)}${uL()}</div>
          <div style="font-size:.72rem;color:var(--muted);font-weight:300;margin-top:1px">${wxi.l} · Feels like ${toD(feelsC)}${uL()}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:4px;text-align:right">
          <div style="font-size:.72rem;color:var(--muted);font-weight:300">💧 ${c.relative_humidity_2m}%</div>
          <div style="font-size:.72rem;color:var(--muted);font-weight:300">💨 ${windStr}</div>
          <div style="font-size:.7rem;font-weight:700;color:${heatCls(c.temperature_2m)}">${c.temperature_2m>=38?'🔴 Extreme heat':c.temperature_2m>=33?'⚠️ Very hot':c.temperature_2m>=27?'☀️ Hot':'✅ Comfortable'}</div>
        </div>`;

      const days=['Su','Mo','Tu','We','Th','Fr','Sa'];
      const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      document.getElementById('ww-days').innerHTML = d.daily.time.map((t,i) => {
        const day = new Date(t+'T12:00:00');
        const dayLbl = i===0?'Now':days[day.getDay()];
        const wxi2 = wx(d.daily.weather_code[i]);
        return `<div style="text-align:center">
          <div style="font-family:var(--fh);font-size:.6rem;font-weight:700;color:${i===0?'var(--gold)':'var(--muted)'};text-transform:uppercase;letter-spacing:.06em;margin-bottom:2px">${dayLbl}</div>
          <div style="font-size:1rem;margin-bottom:2px">${wxi2.i}</div>
          <div style="font-family:var(--fh);font-size:.7rem;font-weight:700;color:var(--text)">${toD(d.daily.temperature_2m_max[i])}°</div>
          <div style="font-size:.62rem;color:var(--dim);font-weight:300">${toD(d.daily.temperature_2m_min[i])}°</div>
        </div>`;
      }).join('');

      // Store data on el for re-render on unit change
      el._wxData = d;
    } catch(e) {
      document.getElementById('ww-body').innerHTML = `<span style="font-size:.78rem;color:var(--muted)">Weather unavailable. <a href="https://www.weather.gov/fwd" target="_blank" style="color:var(--gold)">NWS Dallas ↗</a></span>`;
    }
  }

  window.ww_setUnit = function(u) {
    unit = u;
    localStorage.setItem('dallas2026-unit', u);
    ['ww-f','ww-c'].forEach(id => {
      const b = document.getElementById(id);
      if (!b) return;
      const active = (id==='ww-f' && u==='F') || (id==='ww-c' && u==='C');
      b.style.background = active ? 'var(--gold)' : 'transparent';
      b.style.color = active ? 'var(--dark)' : 'var(--muted)';
    });
    load();
  };

  load();
}

// ══════════════════════════════════════════════════════════════
// LANGUAGE / TRANSLATION SYSTEM
// ══════════════════════════════════════════════════════════════

let currentLang = localStorage.getItem('dallas2026-lang') || 'en';

const TRANSLATIONS = {
  en: {
    // NAV
    nav_matches:'Matches', nav_map:'Map', nav_explore:'Explore',
    nav_logistics:'Get There', nav_checklist:'Checklist',
    nav_survival:'Survival', nav_families:'Families', nav_weather:'Weather',

    // HOMEPAGE
    home_eyebrow:'FIFA World Cup 2026 · Dallas, Texas',
    home_h1_line1:'Big', home_h1_line2:'D', home_h1_line3:'Host City Guide',
    home_sub:'Everything you need to experience Dallas during the world\'s biggest sporting event — matches, food, transit, neighborhoods, hotels, and flights.',
    home_btn_matches:'View Matches', home_btn_explore:'Explore Dallas',
    home_days_away:'Days Away',
    home_cd_label:'Next Dallas Match',
    home_cd_game:'Netherlands vs Japan — Group Stage · Jun 14, 2026',
    home_cd_countdown:'Countdown to Kickoff',
    home_quick_title:'Everything You Need',
    home_quick_sub:'Quick Links',

    // SHARED UI
    days:'days', hrs:'hrs', min:'min', sec:'sec',
    book_your_trip:'Book Your Trip',
    search_hotels:'Search Hotels', search_flights:'Search Flights',
    compare_cars:'Compare Cars', find_bus:'Find Bus Routes',
    browse_turo:'Browse Turo', browse_activities:'Browse Activities',
    via:'via', affiliate_note:'Affiliate links — we earn a small commission at no cost to you.',
    add_to_calendar:'+ Add to Calendar',
    view_on_maps:'Open in Google Maps ↗',
    official_website:'Official Website ↗',
    call_to_reserve:'Call to Reserve ↗',
    full_schedule:'Full Schedule →',
    all_neighborhoods:'All Neighborhoods →',
    all_restaurants:'All Restaurants →',
    all_activities:'All Family Activities →',
    explore_label:'Explore',
    see_details:'See Details →',
    read_more:'Read more →',

    // MATCHES PAGE
    matches_venue:'AT&T Stadium · Arlington, TX',
    matches_title:'Dallas Fixtures',
    matches_note:'Dallas Stadium (AT&T Stadium) hosts 9 matches — the most of any venue in the tournament. All times are CDT (Central Daylight Time). Click any match to find flights and hotels.',
    next_match:'Next Dallas Match',
    countdown_label:'Countdown to Kickoff',
    group_stage:'Group Stage',
    round_of_32:'Round of 32',
    round_of_16:'Round of 16',
    semifinal:'Semifinal',
    known_after:'Known after',
    flying_in:'Flying in for this match?',
    flights_on_skyscanner:'Flights on Skyscanner ↗',
    hotels_near_stadium:'Hotels near Stadium ↗',
    stay_near_action:'Stay Near the Action',
    venue_info:'Venue Info',
    address:'Address', capacity:'Capacity', getting_there:'Getting There',
    bag_policy:'Bag Policy',

    // EXPLORE PAGE
    explore_beyond:'Beyond the Stadium',
    explore_title:'Explore Dallas',
    all_areas:'All Areas', food_drink:'Food & Drink',
    nightlife:'Nightlife', culture:'Culture',
    local_favorites:'Local Favorites',
    where_to_eat:'Where to Eat',
    all_tab:'All', bbq_tab:'BBQ', texmex_tab:'Tex-Mex',
    international_tab:'International', bars_tab:'Bars',

    // LOGISTICS PAGE
    logistics_title:'Getting There',
    recommended_route:'Recommended Route',
    step_by_step:'Step by Step',
    all_options:'All Options',
    getting_around:'Getting Around',
    important:'Important:',
    arlington_alert:'Arlington has no light rail or subway. Every visitor needs to plan transport carefully — match-day traffic on I-30 can add 60–90 min each way.',

    // CHECKLIST PAGE
    checklist_label:'Interactive Tool',
    checklist_title:'Match Day Checklist',
    your_progress:'Your Progress',
    done:'done',

    // SURVIVAL PAGE
    survival_label:'For International Visitors',
    survival_title:'Survival Guide',
    know_before:'Know Before You Go',

    // FAMILIES PAGE
    families_title:'Family Dallas',
    activities_title:'Things to Do',
    heat_warning:'Summer heat warning:',
    heat_warning_text:'Dallas in June and July regularly hits 100–105°F (38–40°C). Schedule outdoor activities for early morning (9–11am) or late afternoon (after 5pm). Water parks, museums, and air-conditioned venues are the best midday choices for families.',
    dart_only:'DART Only',
    getting_around_kids:'Getting Around with Kids',
    family_transit:'Family Transit Guide',
    plan_stay:'Plan Your Family Stay',
    dart_accessible:'DART Accessible',
    car_recommended:'Car Recommended',

    // WEATHER PAGE
    live_weather:'Live from Dallas, TX',
    weather_title:'Dallas Weather',
    next_24h:'Next 24 Hours',
    day_forecast:'7-Day Forecast',
    conditions_glance:'Conditions at a Glance',
    match_day_advice:'Match Day Advice',
    stadium_weather:'Stadium Weather Tips',
    humidity:'Humidity', wind:'Wind Speed', uv_index:'UV Index',
    sunrise:'Sunrise', sunset:'Sunset', wind_dir:'Wind Dir',
    updated:'Updated',

    // FOOTER
    footer_note:'Fan-made visitor guide for FIFA World Cup 2026 · Not affiliated with FIFA or the City of Dallas',
    pages:'Pages', official_links:'Official Links', emergency:'Emergency',
  },

  es: {
    nav_matches:'Partidos', nav_map:'Mapa', nav_explore:'Explorar',
    nav_logistics:'Cómo Llegar', nav_checklist:'Lista',
    nav_survival:'Guía', nav_families:'Familias', nav_weather:'Clima',

    home_eyebrow:'Copa Mundial FIFA 2026 · Dallas, Texas',
    home_h1_line1:'Big', home_h1_line2:'D', home_h1_line3:'Guía Ciudad Sede',
    home_sub:'Todo lo que necesitas para vivir Dallas durante el evento deportivo más grande del mundo — partidos, comida, transporte, barrios, hoteles y vuelos.',
    home_btn_matches:'Ver Partidos', home_btn_explore:'Explorar Dallas',
    home_days_away:'Días Restantes',
    home_cd_label:'Próximo Partido en Dallas',
    home_cd_game:'Países Bajos vs Japón — Fase de Grupos · 14 Jun 2026',
    home_cd_countdown:'Cuenta Regresiva',
    home_quick_title:'Todo lo que Necesitas',
    home_quick_sub:'Accesos Rápidos',

    days:'días', hrs:'hrs', min:'min', sec:'seg',
    book_your_trip:'Reserva tu Viaje',
    search_hotels:'Buscar Hoteles', search_flights:'Buscar Vuelos',
    compare_cars:'Comparar Autos', find_bus:'Buscar Autobuses',
    browse_turo:'Ver Turo', browse_activities:'Ver Actividades',
    via:'con', affiliate_note:'Enlaces afiliados — ganamos una pequeña comisión sin costo para ti.',
    add_to_calendar:'+ Agregar al Calendario',
    view_on_maps:'Abrir en Google Maps ↗',
    official_website:'Sitio Oficial ↗',
    call_to_reserve:'Llamar para Reservar ↗',
    full_schedule:'Horario Completo →',
    all_neighborhoods:'Todos los Barrios →',
    all_restaurants:'Todos los Restaurantes →',
    all_activities:'Todas las Actividades →',
    explore_label:'Explorar',
    see_details:'Ver Detalles →',
    read_more:'Leer más →',

    matches_venue:'Estadio Dallas · Arlington, TX',
    matches_title:'Partidos en Dallas',
    matches_note:'El Estadio Dallas alberga 9 partidos, más que cualquier otro estadio del torneo. Todos los horarios en CDT. Haz clic en un partido para buscar vuelos y hoteles.',
    next_match:'Próximo Partido en Dallas',
    countdown_label:'Cuenta Regresiva',
    group_stage:'Fase de Grupos',
    round_of_32:'Ronda de 32',
    round_of_16:'Ronda de 16',
    semifinal:'Semifinal',
    known_after:'Se confirma después del',
    flying_in:'¿Viajando para este partido?',
    flights_on_skyscanner:'Vuelos en Skyscanner ↗',
    hotels_near_stadium:'Hoteles cerca del Estadio ↗',
    stay_near_action:'Alójate Cerca de la Acción',
    venue_info:'Info del Estadio',
    address:'Dirección', capacity:'Capacidad', getting_there:'Cómo Llegar',
    bag_policy:'Política de Bolsas',

    explore_beyond:'Más Allá del Estadio',
    explore_title:'Explorar Dallas',
    all_areas:'Todas las Zonas', food_drink:'Comida y Bebida',
    nightlife:'Nocturno', culture:'Cultura',
    local_favorites:'Favoritos Locales',
    where_to_eat:'Dónde Comer',
    all_tab:'Todo', bbq_tab:'BBQ', texmex_tab:'Tex-Mex',
    international_tab:'Internacional', bars_tab:'Bares',

    logistics_title:'Cómo Llegar',
    recommended_route:'Ruta Recomendada',
    step_by_step:'Paso a Paso',
    all_options:'Todas las Opciones',
    getting_around:'Moverse por Dallas',
    important:'Importante:',
    arlington_alert:'Arlington no tiene metro ni tren ligero. Planifica tu transporte con anticipación — el tráfico en días de partido puede añadir 60–90 min por trayecto.',

    checklist_label:'Herramienta Interactiva',
    checklist_title:'Lista del Día del Partido',
    your_progress:'Tu Progreso',
    done:'completados',

    survival_label:'Para Visitantes Internacionales',
    survival_title:'Guía de Supervivencia',
    know_before:'Qué Saber Antes de Llegar',

    families_title:'Dallas en Familia',
    activities_title:'Qué Hacer',
    heat_warning:'Advertencia de calor extremo:',
    heat_warning_text:'Dallas en junio y julio alcanza regularmente 38–40°C. Programa actividades al aire libre por la mañana (9–11h) o por la tarde (después de las 17h). Los parques acuáticos, museos y recintos climatizados son las mejores opciones al mediodía.',
    dart_only:'Solo DART',
    getting_around_kids:'Moverse con Niños',
    family_transit:'Guía de Transporte Familiar',
    plan_stay:'Planifica tu Estancia Familiar',
    dart_accessible:'Accesible en DART',
    car_recommended:'Se Recomienda Auto',

    live_weather:'En Vivo desde Dallas, TX',
    weather_title:'Clima en Dallas',
    next_24h:'Próximas 24 Horas',
    day_forecast:'Pronóstico de 7 Días',
    conditions_glance:'Condiciones de un Vistazo',
    match_day_advice:'Consejos para el Día del Partido',
    stadium_weather:'Clima en el Estadio',
    humidity:'Humedad', wind:'Viento', uv_index:'Índice UV',
    sunrise:'Amanecer', sunset:'Atardecer', wind_dir:'Dirección Viento',
    updated:'Actualizado',

    footer_note:'Guía de visitantes creada por fanáticos para la Copa Mundial FIFA 2026 · No afiliada con FIFA ni la Ciudad de Dallas',
    pages:'Páginas', official_links:'Enlaces Oficiales', emergency:'Emergencias',
  },

  fr: {
    nav_matches:'Matchs', nav_map:'Carte', nav_explore:'Explorer',
    nav_logistics:'Y Aller', nav_checklist:'Liste',
    nav_survival:'Guide', nav_families:'Familles', nav_weather:'Météo',

    home_eyebrow:'Coupe du Monde FIFA 2026 · Dallas, Texas',
    home_h1_line1:'Big', home_h1_line2:'D', home_h1_line3:'Guide Ville Hôte',
    home_sub:'Tout ce qu\'il faut pour vivre Dallas lors du plus grand événement sportif au monde — matchs, nourriture, transports, quartiers, hôtels et vols.',
    home_btn_matches:'Voir les Matchs', home_btn_explore:'Explorer Dallas',
    home_days_away:'Jours Restants',
    home_cd_label:'Prochain Match à Dallas',
    home_cd_game:'Pays-Bas vs Japon — Phase de Groupes · 14 Jun 2026',
    home_cd_countdown:'Compte à Rebours',
    home_quick_title:'Tout ce qu\'il Vous Faut',
    home_quick_sub:'Liens Rapides',

    days:'jours', hrs:'hrs', min:'min', sec:'sec',
    book_your_trip:'Réservez Votre Voyage',
    search_hotels:'Chercher Hôtels', search_flights:'Chercher Vols',
    compare_cars:'Comparer Voitures', find_bus:'Trouver Bus',
    browse_turo:'Voir Turo', browse_activities:'Voir Activités',
    via:'via', affiliate_note:'Liens affiliés — nous touchons une petite commission sans frais pour vous.',
    add_to_calendar:'+ Ajouter au Calendrier',
    view_on_maps:'Ouvrir dans Google Maps ↗',
    official_website:'Site Officiel ↗',
    call_to_reserve:'Appeler pour Réserver ↗',
    full_schedule:'Programme Complet →',
    all_neighborhoods:'Tous les Quartiers →',
    all_restaurants:'Tous les Restaurants →',
    all_activities:'Toutes les Activités →',
    explore_label:'Explorer',
    see_details:'Voir les Détails →',
    read_more:'En savoir plus →',

    matches_venue:'Stade Dallas · Arlington, TX',
    matches_title:'Matchs à Dallas',
    matches_note:'Le Stade Dallas accueille 9 matchs — le plus grand nombre de tous les stades. Horaires en CDT. Cliquez sur un match pour trouver vols et hôtels.',
    next_match:'Prochain Match à Dallas',
    countdown_label:'Compte à Rebours',
    group_stage:'Phase de Groupes',
    round_of_32:'Tour de 32',
    round_of_16:'Tour de 16',
    semifinal:'Demi-finale',
    known_after:'Connu après le',
    flying_in:'Vous venez pour ce match ?',
    flights_on_skyscanner:'Vols sur Skyscanner ↗',
    hotels_near_stadium:'Hôtels près du Stade ↗',
    stay_near_action:'Séjournez près de l\'Action',
    venue_info:'Infos Stade',
    address:'Adresse', capacity:'Capacité', getting_there:'Comment Venir',
    bag_policy:'Politique Bagages',

    explore_beyond:'Au-delà du Stade',
    explore_title:'Explorer Dallas',
    all_areas:'Toutes les Zones', food_drink:'Nourriture & Boissons',
    nightlife:'Soirée', culture:'Culture',
    local_favorites:'Favoris Locaux',
    where_to_eat:'Où Manger',
    all_tab:'Tout', bbq_tab:'BBQ', texmex_tab:'Tex-Mex',
    international_tab:'International', bars_tab:'Bars',

    logistics_title:'Comment Y Aller',
    recommended_route:'Itinéraire Recommandé',
    step_by_step:'Étape par Étape',
    all_options:'Toutes les Options',
    getting_around:'Se Déplacer à Dallas',
    important:'Important :',
    arlington_alert:'Arlington n\'a pas de métro ni de tramway. Planifiez votre transport à l\'avance — la circulation les jours de match peut ajouter 60–90 min par trajet.',

    checklist_label:'Outil Interactif',
    checklist_title:'Liste Jour de Match',
    your_progress:'Votre Progression',
    done:'fait',

    survival_label:'Pour les Visiteurs Internationaux',
    survival_title:'Guide de Survie',
    know_before:'Ce qu\'il Faut Savoir',

    families_title:'Dallas en Famille',
    activities_title:'Que Faire',
    heat_warning:'Avertissement chaleur :',
    heat_warning_text:'Dallas en juin et juillet atteint régulièrement 38–40°C. Planifiez les activités en plein air le matin (9–11h) ou l\'après-midi tard (après 17h). Les parcs aquatiques, musées et lieux climatisés sont idéaux en milieu de journée.',
    dart_only:'DART Uniquement',
    getting_around_kids:'Se Déplacer avec des Enfants',
    family_transit:'Guide Transport Famille',
    plan_stay:'Planifiez votre Séjour Famille',
    dart_accessible:'Accessible en DART',
    car_recommended:'Voiture Recommandée',

    live_weather:'En Direct de Dallas, TX',
    weather_title:'Météo Dallas',
    next_24h:'24 Prochaines Heures',
    day_forecast:'Prévisions 7 Jours',
    conditions_glance:'Conditions en un Coup d\'Œil',
    match_day_advice:'Conseils Jour de Match',
    stadium_weather:'Météo au Stade',
    humidity:'Humidité', wind:'Vent', uv_index:'Indice UV',
    sunrise:'Lever du soleil', sunset:'Coucher du soleil', wind_dir:'Direction Vent',
    updated:'Mis à jour',

    footer_note:'Guide de visiteurs créé par des fans pour la Coupe du Monde FIFA 2026 · Non affilié à la FIFA ni à la ville de Dallas',
    pages:'Pages', official_links:'Liens Officiels', emergency:'Urgences',
  },

  pt: {
    nav_matches:'Jogos', nav_map:'Mapa', nav_explore:'Explorar',
    nav_logistics:'Como Chegar', nav_checklist:'Lista',
    nav_survival:'Guia', nav_families:'Famílias', nav_weather:'Clima',

    home_eyebrow:'Copa do Mundo FIFA 2026 · Dallas, Texas',
    home_h1_line1:'Big', home_h1_line2:'D', home_h1_line3:'Guia da Cidade Sede',
    home_sub:'Tudo que você precisa para viver Dallas durante o maior evento esportivo do mundo — jogos, comida, transporte, bairros, hotéis e voos.',
    home_btn_matches:'Ver Jogos', home_btn_explore:'Explorar Dallas',
    home_days_away:'Dias Restantes',
    home_cd_label:'Próximo Jogo em Dallas',
    home_cd_game:'Holanda vs Japão — Fase de Grupos · 14 Jun 2026',
    home_cd_countdown:'Contagem Regressiva',
    home_quick_title:'Tudo que Você Precisa',
    home_quick_sub:'Links Rápidos',

    days:'dias', hrs:'hrs', min:'min', sec:'seg',
    book_your_trip:'Reserve sua Viagem',
    search_hotels:'Buscar Hotéis', search_flights:'Buscar Voos',
    compare_cars:'Comparar Carros', find_bus:'Buscar Ônibus',
    browse_turo:'Ver Turo', browse_activities:'Ver Atividades',
    via:'via', affiliate_note:'Links afiliados — ganhamos uma pequena comissão sem custo para você.',
    add_to_calendar:'+ Adicionar ao Calendário',
    view_on_maps:'Abrir no Google Maps ↗',
    official_website:'Site Oficial ↗',
    call_to_reserve:'Ligar para Reservar ↗',
    full_schedule:'Calendário Completo →',
    all_neighborhoods:'Todos os Bairros →',
    all_restaurants:'Todos os Restaurantes →',
    all_activities:'Todas as Atividades →',
    explore_label:'Explorar',
    see_details:'Ver Detalhes →',
    read_more:'Saiba mais →',

    matches_venue:'Estádio Dallas · Arlington, TX',
    matches_title:'Jogos em Dallas',
    matches_note:'O Estádio Dallas sedia 9 jogos — mais do que qualquer outro estádio. Horários em CDT. Clique em um jogo para buscar voos e hotéis.',
    next_match:'Próximo Jogo em Dallas',
    countdown_label:'Contagem Regressiva',
    group_stage:'Fase de Grupos',
    round_of_32:'Rodada de 32',
    round_of_16:'Rodada de 16',
    semifinal:'Semifinal',
    known_after:'Confirmado após',
    flying_in:'Viajando para este jogo?',
    flights_on_skyscanner:'Voos no Skyscanner ↗',
    hotels_near_stadium:'Hotéis perto do Estádio ↗',
    stay_near_action:'Fique Perto da Ação',
    venue_info:'Info do Estádio',
    address:'Endereço', capacity:'Capacidade', getting_there:'Como Chegar',
    bag_policy:'Política de Bolsas',

    explore_beyond:'Além do Estádio',
    explore_title:'Explorar Dallas',
    all_areas:'Todas as Áreas', food_drink:'Comida e Bebida',
    nightlife:'Noite', culture:'Cultura',
    local_favorites:'Favoritos Locais',
    where_to_eat:'Onde Comer',
    all_tab:'Tudo', bbq_tab:'BBQ', texmex_tab:'Tex-Mex',
    international_tab:'Internacional', bars_tab:'Bares',

    logistics_title:'Como Chegar',
    recommended_route:'Rota Recomendada',
    step_by_step:'Passo a Passo',
    all_options:'Todas as Opções',
    getting_around:'Como se Locomover',
    important:'Importante:',
    arlington_alert:'Arlington não tem metrô nem VLT. Planeje seu transporte com antecedência — o trânsito nos dias de jogo pode adicionar 60–90 min por trajeto.',

    checklist_label:'Ferramenta Interativa',
    checklist_title:'Lista do Dia do Jogo',
    your_progress:'Seu Progresso',
    done:'feitos',

    survival_label:'Para Visitantes Internacionais',
    survival_title:'Guia de Sobrevivência',
    know_before:'O que Saber Antes de Chegar',

    families_title:'Dallas em Família',
    activities_title:'O que Fazer',
    heat_warning:'Aviso de calor extremo:',
    heat_warning_text:'Dallas em junho e julho atinge regularmente 38–40°C. Programe atividades ao ar livre pela manhã (9–11h) ou à tarde (depois das 17h). Parques aquáticos, museus e locais climatizados são as melhores opções ao meio-dia.',
    dart_only:'Somente DART',
    getting_around_kids:'Locomover-se com Crianças',
    family_transit:'Guia de Transporte Familiar',
    plan_stay:'Planeje sua Estadia em Família',
    dart_accessible:'Acessível pelo DART',
    car_recommended:'Carro Recomendado',

    live_weather:'Ao Vivo de Dallas, TX',
    weather_title:'Clima em Dallas',
    next_24h:'Próximas 24 Horas',
    day_forecast:'Previsão de 7 Dias',
    conditions_glance:'Condições em um Relance',
    match_day_advice:'Dicas para o Dia do Jogo',
    stadium_weather:'Clima no Estádio',
    humidity:'Umidade', wind:'Vento', uv_index:'Índice UV',
    sunrise:'Nascer do sol', sunset:'Pôr do sol', wind_dir:'Direção Vento',
    updated:'Atualizado',

    footer_note:'Guia de visitantes criado por fãs para a Copa do Mundo FIFA 2026 · Não afiliado à FIFA nem à Cidade de Dallas',
    pages:'Páginas', official_links:'Links Oficiais', emergency:'Emergências',
  }
};

// ── TRANSLATION HELPERS ───────────────────────────────────────
function t(key) {
  const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return lang[key] || TRANSLATIONS.en[key] || key;
}

function setLang(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  localStorage.setItem('dallas2026-lang', lang);

  // Update all lang buttons in nav and drawer
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('onclick')?.match(/setLang\('(\w+)'\)/)?.[1];
    btn.classList.toggle('active', btnLang === lang);
  });

  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) {
      el.setAttribute(attr, t(key));
    } else {
      el.textContent = t(key);
    }
  });

  // Re-translate nav links
  document.querySelectorAll('[data-navkey]').forEach(el => {
    const key = el.getAttribute('data-navkey');
    el.textContent = t(key) || el.textContent;
  });

  // Fire a custom event so pages can react
  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

// Apply saved language on page load
function initLang() {
  const saved = localStorage.getItem('dallas2026-lang') || 'en';
  if (saved !== 'en') {
    // Use setTimeout so page-specific langchange listeners register first
    currentLang = saved;
    // Update buttons immediately (nav is already rendered)
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('onclick')?.match(/setLang\(['"](\w+)['"]\)/)?.[1];
      btn.classList.toggle('active', btnLang === saved);
    });
    // Translate data-i18n elements immediately
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (val) el.textContent = val;
    });
    // Fire langchange AFTER current script finishes, so page listeners are registered
    setTimeout(() => {
      document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: saved } }));
    }, 0);
  }
}

// ══════════════════════════════════════════════════════════════
// EXTENDED TRANSLATIONS — page content
// ══════════════════════════════════════════════════════════════
const PAGE_CONTENT = {
  en: {
    // ── SURVIVAL ──────────────────────────────────────────────
    surv_know_label: 'For International Visitors',
    surv_know_title: 'Know Before You Go',
    surv_heat_title: 'Texas Heat',
    surv_heat: ['June–July temps hit 95–105°F (35–40°C) with high humidity','Carry a refillable water bottle — hydrate constantly','AT&T Stadium is fully air-conditioned indoors','Sunscreen SPF 50+ for outdoor fan zones and tailgates','Light, breathable fabrics only — avoid jeans on match days','Heat exhaustion is a real risk — sit in shade during breaks'],
    surv_transit_title: 'Getting Around Dallas',
    surv_transit: ['Dallas is a car city — public transit is limited outside downtown','DART light rail covers downtown, Uptown, and Deep Ellum','Uber/Lyft surge heavily on match days — plan ahead','Rent a car if staying outside the central area','Download the GoPass app for DART tickets before you arrive'],
    surv_money_title: 'Money & Tipping',
    surv_money: ['USD only — have cash for food trucks and street vendors','Tip 18–20% at sit-down restaurants — culturally mandatory','15% tip expected at bars; $1/drink is the minimum','Credit cards accepted almost everywhere; contactless available','ATMs charge $3–5 foreign withdrawal fees — use Wise or Revolut','Prices shown before tax — add 8.25% sales tax at checkout'],
    surv_conn_title: 'Connectivity',
    surv_conn: ['Buy a T-Mobile or AT&T prepaid SIM at DFW Airport on arrival','eSIM options: Airalo or Google Fi work in the US','Stadium WiFi is free but congested — download what you need first','Download offline Google Maps for the Dallas metro before arriving','Emergency: dial 911 (free from any phone)'],
    surv_health_title: 'Health & Safety',
    surv_health: ['Travel insurance strongly recommended — US healthcare is very expensive','Nearest hospital: Medical City Arlington, 5 min from stadium','Urgent care clinics for minor issues — cheaper than ER','CVS and Walgreens pharmacies are on almost every corner','Tap water is safe to drink throughout the Dallas metro'],
    surv_arriving_title: 'Arriving in Dallas',
    surv_arriving: ['Main airport: DFW International (DFW) — 25 min from Dallas','DART Orange Line connects DFW directly to downtown Dallas','Secondary airport: Dallas Love Field (DAL) — domestic flights','Customs and immigration can take 60–90 min — allow extra time','ESTA or visa required for non-US visitors — apply at least 72hrs ahead'],
    surv_resources_title: 'Useful Resources',
    surv_resources: ['Visit Dallas official tourism ↗','FIFA World Cup 2026 official ↗','DART transit trip planner ↗','Dallas weather forecast (NWS) ↗','US ESTA visa waiver application ↗'],
    surv_weather_label: 'Live Conditions',
    surv_weather_title: 'Dallas Weather',
    surv_weather_sub: 'Real-time Dallas weather — toggle between °F and °C. Plan your outdoor activities around the heat.',

    // ── LOGISTICS ─────────────────────────────────────────────
    log_venue: 'AT&T Stadium, Arlington',
    log_title: 'Getting There',
    log_hero_sub: "AT&T Stadium is in Arlington — between Dallas and Fort Worth. No direct rail. Here's exactly how to get there without losing your mind.",
    log_rec_label: 'Recommended Route',
    log_rec_title: 'Step by Step',
    log_alert: 'Arlington has no light rail or subway. Every visitor needs to plan transport carefully — match-day traffic on I-30 can add 60–90 min each way.',
    log_s1_title: 'TRE Rail to CentrePort',
    log_s1_body: 'From downtown Dallas (Union Station) or Fort Worth, take the Trinity Railway Express to CentrePort/DFW Airport station. Service every 30 min on match days.',
    log_s1_tip: '~35 min from Dallas Union Station · $5 one-way',
    log_s2_title: 'Free FIFA Shuttle',
    log_s2_body: 'Dedicated FIFA shuttles run from CentrePort directly to AT&T Stadium gates — 10–15 min ride. Runs from 3 hrs before kickoff through 1.5 hrs post-match.',
    log_s2_tip: 'Free with match ticket · Leave 2+ hours before kickoff',
    log_s3_title: 'Gate Entry',
    log_s3_body: 'Show your mobile ticket at the gate. Clear bags only (12"×6"×12" max). Gates open 2.5 hours before kickoff. Security peaks at 90 min before.',
    log_s3_tip: 'Screenshot your ticket before entering — cellular unreliable inside',
    log_s4_title: 'After the Match',
    log_s4_body: 'Return shuttles run until the crowd clears — expect 30–45 min post-match waits. Alternatively, walk to nearby Arlington bars to wait it out, then Uber back.',
    log_s4_tip: 'Pre-set your Uber pickup point before you enter the stadium',
    log_opts_label: 'All Options',
    log_opts_title: 'Getting Around',
    log_opt_rec: 'Recommended',
    log_opt_tre_title: 'TRE + Shuttle',
    log_opt_tre_desc: 'Trinity Railway Express from Dallas or Fort Worth, then free FIFA shuttle to stadium.',
    log_opt_tre_pros: 'No traffic · $5 · Dedicated match service',
    log_opt_tre_cons: 'Requires planning · Post-match waits',
    log_opt_drive_title: 'Drive & Park',
    log_opt_drive_desc: 'Drive to Arlington and use official AT&T Stadium lots. Pre-purchase online — lots sell out.',
    log_opt_drive_pros: 'Door to door · Flexible',
    log_opt_drive_cons: 'Heavy traffic · $30–60 per car · Long exit',
    log_opt_uber_title: 'Uber / Lyft',
    log_opt_uber_desc: 'Convenient from hotels but expensive on match days — 3–5× surge pricing. Drop-off on Randol Mill Rd.',
    log_opt_uber_pros: 'No planning needed',
    log_opt_uber_cons: 'Expensive surge · Long post-match pickup wait',
    log_opt_bus_title: 'Bus (Budget)',
    log_opt_bus_desc: 'FlixBus and Greyhound connect Dallas to other Texas cities and nearby states. From $15 one-way.',
    log_opt_bus_pros: 'Cheapest option · Routes from Houston, Austin, OKC',
    log_opt_bus_cons: 'Not direct to stadium · Schedule dependent',
    log_book_label: 'Book Your Transport',
    log_book_sub: 'Rental cars are the most flexible option for Arlington. Hotels near the stadium book out fast — reserve early.',

    // ── CHECKLIST ─────────────────────────────────────────────
    cl_label: 'Interactive Tool',
    cl_title: 'Match Day Checklist',
    cl_sub: '35 things to have sorted before you head to AT&T Stadium. Check them off as you go — progress saves in your browser.',
    cl_progress: 'Your Progress',
    cl_reset: 'Reset',
    cl_done: 'done',
    cl_groups: [
      { g: '🎫 Tickets & Docs', items: ['Download FIFA app and load your ticket','Screenshot your ticket (cellular unreliable inside)','Passport or valid government ID packed','Travel insurance policy number saved offline','Hotel booking confirmation downloaded'] },
      { g: '🚌 Transport', items: ['Planned your route to AT&T Stadium','GoPass DART app downloaded and topped up','Shuttle schedule checked — depart 2hrs before','Uber/Lyft pre-set with Arlington pickup point','Parking pass pre-purchased (if driving)'] },
      { g: '👝 What to Bring', items: ['Clear bag (12"×6"×12" max — no exceptions)','Sunscreen SPF 50+ applied and packed','Refillable water bottle (empty to pass security)','Phone fully charged before leaving hotel','Portable battery pack packed','Team jersey, scarf, or colors','Small cash (USD) for vendors and tips'] },
      { g: '🏨 Before You Leave', items: ['Hotel front desk has your match-day contact','Know the nearest DART/TRE stop to your hotel','Agree on post-match meeting point with your group','Check Dallas weather forecast for the day'] },
      { g: '📱 Apps & Downloads', items: ['FIFA official app installed','Google Maps offline map of Dallas downloaded','GoPass transit app installed','Uber/Lyft account set up and payment added','Emergency contacts saved: 911, hotel, embassy'] },
      { g: '🍽️ Food & Plan', items: ['Pre-match restaurant reserved (book early!)','Pre-match bar or fan zone agreed with group','Post-match dinner spot identified (they book fast)','Breakfast or lunch sorted — you\'ll be hungry'] },
    ],

    // ── EXPLORE ───────────────────────────────────────────────
    exp_beyond: 'Beyond the Stadium',
    exp_title: 'Explore Dallas',
    exp_sub: 'Dallas is a city of neighborhoods, each with its own personality. Here\'s how to find the real city — not just the stadium.',
    exp_nbh_label: 'Six Areas to Know',
    exp_nbh_title: 'Neighborhoods',
    exp_rest_label: 'Local Favorites',
    exp_rest_title: 'Where to Eat',
    exp_tabs_all: 'All Areas', exp_tabs_food: 'Food & Drink', exp_tabs_night: 'Nightlife', exp_tabs_culture: 'Culture',
    exp_rest_all: 'All', exp_rest_bbq: 'BBQ', exp_rest_tex: 'Tex-Mex', exp_rest_intl: 'International', exp_rest_bar: 'Bars',

    // ── MAP ───────────────────────────────────────────────────
    map_label: 'Interactive Visitor Map',
    map_title: 'Dallas Map',
    map_sub: 'Stadium, transit stops, hotels, fan zones, and top restaurants — all on one map. Click any pin for details and directions.',
    map_filter: 'Filter by Category',
    map_all: 'All', map_stadium: 'Stadium', map_transit: 'Transit',
    map_food: 'Food & Drink', map_hotels: 'Hotels', map_fanzones: 'Fan Zones',

    // ── FAMILIES ──────────────────────────────────────────────
    fam_label: 'Family Activities',
    fam_title: 'Family Dallas',
    fam_sub: 'The best things to do with kids in and around Dallas during the World Cup — museums, theme parks, water parks, zoos, and Texas experiences they\'ll never forget.',
    fam_heat_warning: 'Summer heat warning:',
    fam_heat_text: 'Dallas in June and July regularly hits 100–105°F (38–40°C). Schedule outdoor activities for early morning (9–11am) or late afternoon (after 5pm). Water parks, museums, and air-conditioned venues are the best midday choices for families.',
    fam_acts_label: '10 Attractions for Families',
    fam_acts_title: 'Things to Do',
    fam_transit_label: 'Getting Around with Kids',
    fam_transit_title: 'Family Transit Guide',
    fam_tab_all: 'All Activities', fam_tab_museum: 'Museums', fam_tab_outdoors: 'Outdoors',
    fam_tab_indoor: 'Indoor', fam_tab_theme: 'Theme Parks', fam_tab_landmark: 'Landmarks',
    fam_tab_stadium: 'Stadiums', fam_tab_dart: '🚆 DART Only',
    fam_dart_yes: 'DART Accessible', fam_dart_no: 'Drive/Ride',
    fam_duration: 'Duration', fam_age: 'Best Age',
    fam_transit_dart: '🚆 DART Accessible', fam_transit_car: '🚗 Car Recommended',

    // ── WEATHER ───────────────────────────────────────────────
    wx_label: 'Live from Dallas, TX',
    wx_title: 'Dallas Weather',
    wx_live: 'Live Data',
    wx_next24: 'Next 24 Hours',
    wx_7day: '7-Day Forecast',
    wx_glance: 'Conditions at a Glance',
    wx_advice: 'Match Day Advice',
    wx_stadium_title: 'Stadium Weather Tips',
    wx_loading: 'Loading weather data…',
    wx_unavailable: 'Weather unavailable',
    wx_updated: 'Updated',
    wx_humidity: 'Humidity', wx_wind: 'Wind Speed', wx_uv: 'UV Index',
    wx_sunrise: 'Sunrise', wx_sunset: 'Sunset', wx_winddir: 'Wind Dir',
    wx_feels: 'Feels like',
    wx_heat_ok: 'Comfortable', wx_heat_warm: 'Warm', wx_heat_hot: 'Hot', wx_heat_extreme: 'Extreme Heat',
    wx_advice_cards: [
      { icon: '🏟️', title: 'AT&T Stadium', body: 'The stadium has a retractable roof and full climate control — inside it\'s always comfortable regardless of outside conditions. Dress for 70°F (21°C) inside.' },
      { icon: '🚶', title: 'Getting to the Stadium', body: 'The walk from CentrePort to the shuttle, and the outdoor approach to gates, is exposed. In June–July this is brutal in the heat. Wear light clothing and bring water.' },
      { icon: '☔', title: 'Thunderstorms', body: 'Dallas gets fast-moving afternoon thunderstorms in summer. They usually pass in 30–45 min. The stadium roof closes immediately for lightning. Keep an eye on the radar.' },
      { icon: '💧', title: 'Hydration', body: 'In 100°F+ heat you can lose a litre of water per hour outdoors. Drink before you feel thirsty. Empty refillable bottles are allowed through stadium security.' },
    ],

    // ── MATCHES page extras ────────────────────────────────────
    match_venue_label: 'AT&T Stadium · Arlington, TX',
    match_fixtures_title: 'Dallas Fixtures',
    match_note: 'Dallas Stadium (AT&T Stadium) hosts 9 matches — the most of any venue in the tournament. All times are CDT. Click any match to find flights and hotels.',
    match_next: 'Next Dallas Match',
    match_cd_label: 'Countdown to Kickoff',
    match_stay_label: 'Stay Near the Action',
    match_venue_info: 'Venue Info',
    match_address: 'Address', match_capacity: 'Capacity',
    match_getting: 'Getting There', match_bags: 'Bag Policy',
    match_bags_text: 'Clear bags only · Max 12"×6"×12" · Mobile tickets required · No outside food/drink',
    match_getting_text: 'TRE rail to CentrePort, then free FIFA shuttle. No direct rail to Arlington.',
    match_transit_link: 'Full Transit Guide →',
    match_add_cal: '+ Add to Calendar',
    match_flying: 'Flying in for this match?',
    match_find_date: 'Find flights arriving',
  },

  es: {
    surv_know_label: 'Para Visitantes Internacionales',
    surv_know_title: 'Lo que Debes Saber',
    surv_heat_title: 'El Calor de Texas',
    surv_heat: ['Temperaturas de junio–julio: 35–40°C con alta humedad','Lleva una botella de agua reutilizable — hidrátate constantemente','El AT&T Stadium tiene aire acondicionado total en interiores','Protector solar FPS 50+ para las fan zones al aire libre','Ropa ligera y transpirable — evita los jeans en días de partido','El golpe de calor es un riesgo real — siéntate a la sombra en los descansos'],
    surv_transit_title: 'Cómo Moverse por Dallas',
    surv_transit: ['Dallas es ciudad de autos — el transporte público es limitado fuera del centro','El tren ligero DART cubre el centro, Uptown y Deep Ellum','Uber/Lyft tienen tarifas altas en días de partido — planifica con anticipación','Alquila un auto si te hospedas fuera del área central','Descarga la app GoPass para boletos DART antes de llegar'],
    surv_money_title: 'Dinero y Propinas',
    surv_money: ['Solo USD — ten efectivo para food trucks y vendedores','Propina 18–20% en restaurantes — es culturalmente obligatorio','Se espera 15% en bares; $1/bebida como mínimo','Tarjetas de crédito aceptadas casi en todos lados; contactless disponible','Los cajeros cobran $3–5 de comisión — usa Wise o Revolut','Los precios no incluyen impuestos — añade 8.25% en caja'],
    surv_conn_title: 'Conectividad',
    surv_conn: ['Compra un SIM prepago de T-Mobile o AT&T en el aeropuerto DFW','eSIM: Airalo o Google Fi funcionan en EUA','WiFi gratuito en el estadio pero congestionado — descarga lo que necesites antes','Descarga mapas offline de Dallas antes de llegar','Emergencias: marca el 911 (gratis desde cualquier teléfono)'],
    surv_health_title: 'Salud y Seguridad',
    surv_health: ['Seguro de viaje muy recomendado — la salud en EUA es muy cara','Hospital más cercano: Medical City Arlington, a 5 min del estadio','Clínicas de urgencias para problemas menores — más baratas que urgencias','Farmacias CVS y Walgreens en casi cada esquina','El agua del grifo es segura en toda el área de Dallas'],
    surv_arriving_title: 'Llegando a Dallas',
    surv_arriving: ['Aeropuerto principal: DFW Internacional — a 25 min de Dallas','La línea naranja de DART conecta DFW con el centro de Dallas','Aeropuerto secundario: Dallas Love Field (DAL) — vuelos domésticos','La aduana puede tomar 60–90 min — deja tiempo extra','ESTA o visa requerida para visitantes no estadounidenses — solicítala con 72h de anticipación'],
    surv_resources_title: 'Recursos Útiles',
    surv_resources: ['Turismo oficial de Dallas ↗','Copa Mundial FIFA 2026 oficial ↗','Planificador de viajes DART ↗','Pronóstico del tiempo en Dallas ↗','Solicitud de exención de visa ESTA ↗'],
    surv_weather_label: 'Condiciones en Vivo',
    surv_weather_title: 'Clima en Dallas',
    surv_weather_sub: 'Clima en vivo en Dallas — alterna entre °F y °C. Planifica tus actividades al aire libre según el calor.',
    log_venue: 'Estadio Dallas, Arlington',
    log_title: 'Cómo Llegar',
    log_hero_sub: 'El Estadio Dallas está en Arlington, entre Dallas y Fort Worth. Sin ferrocarril directo. Así es exactamente como llegar.',
    log_rec_label: 'Ruta Recomendada',
    log_rec_title: 'Paso a Paso',
    log_alert: 'Arlington no tiene metro ni tren ligero. Planifica tu transporte — el tráfico en días de partido puede añadir 60–90 min por trayecto.',
    log_s1_title: 'TRE a CentrePort',
    log_s1_body: 'Desde Union Station (centro de Dallas) o Fort Worth, toma el Trinity Railway Express hasta CentrePort/Aeropuerto DFW. Sale cada 30 min en días de partido.',
    log_s1_tip: '~35 min desde Union Station · $5 por trayecto',
    log_s2_title: 'Shuttle Gratuito FIFA',
    log_s2_body: 'Autobuses FIFA gratuitos salen de CentrePort directamente a las entradas del estadio — 10–15 min de viaje.',
    log_s2_tip: 'Gratis con tu boleto · Sal 2+ horas antes',
    log_s3_title: 'Entrada al Estadio',
    log_s3_body: 'Muestra tu boleto móvil en la entrada. Solo bolsas transparentes (30×15×30 cm máx). Las puertas abren 2.5 horas antes.',
    log_s3_tip: 'Toma captura de tu boleto — sin señal dentro del estadio',
    log_s4_title: 'Después del Partido',
    log_s4_body: 'Los shuttles de regreso funcionan hasta que la multitud se dispersa — espera 30–45 min. Alternativa: ve a bares cercanos a esperar y luego pide un Uber.',
    log_s4_tip: 'Configura tu punto de recogida de Uber antes de entrar al estadio',
    log_opts_label: 'Todas las Opciones',
    log_opts_title: 'Cómo Moverte',
    log_opt_rec: 'Recomendado',
    log_opt_tre_title: 'TRE + Shuttle',
    log_opt_tre_desc: 'Trinity Railway Express desde Dallas o Fort Worth, luego shuttle FIFA gratuito.',
    log_opt_tre_pros: 'Sin tráfico · $5 · Servicio dedicado',
    log_opt_tre_cons: 'Requiere planificación · Espera post-partido',
    log_opt_drive_title: 'Auto y Estacionamiento',
    log_opt_drive_desc: 'Maneja a Arlington y usa los estacionamientos oficiales del estadio. Reserva online.',
    log_opt_drive_pros: 'Puerta a puerta · Flexible',
    log_opt_drive_cons: 'Mucho tráfico · $30–60 · Larga salida',
    log_opt_uber_title: 'Uber / Lyft',
    log_opt_uber_desc: 'Conveniente pero caro en días de partido — tarifas 3–5× más altas. Baja en Randol Mill Rd.',
    log_opt_uber_pros: 'Sin planificación',
    log_opt_uber_cons: 'Tarifa elevada · Larga espera post-partido',
    log_opt_bus_title: 'Autobús (Económico)',
    log_opt_bus_desc: 'FlixBus y Greyhound conectan Dallas con otras ciudades de Texas. Desde $15 por trayecto.',
    log_opt_bus_pros: 'Opción más barata · Rutas desde Houston, Austin',
    log_opt_bus_cons: 'No va directo al estadio · Depende del horario',
    log_book_label: 'Reserva tu Transporte',
    log_book_sub: 'Los autos de alquiler son la opción más flexible para Arlington. Los hoteles cerca del estadio se agotan rápido — reserva con anticipación.',
    cl_label: 'Herramienta Interactiva',
    cl_title: 'Lista del Día del Partido',
    cl_sub: '35 cosas que debes tener listas antes de ir al estadio. Márcalas mientras avanzas — el progreso se guarda en tu navegador.',
    cl_progress: 'Tu Progreso', cl_reset: 'Reiniciar', cl_done: 'completados',
    cl_groups: [
      { g: '🎫 Boletos y Documentos', items: ['Descarga la app FIFA y carga tu boleto','Toma captura de tu boleto (sin señal dentro)','Pasaporte o identificación oficial empacada','Número de póliza del seguro de viaje guardado offline','Confirmación de hotel descargada'] },
      { g: '🚌 Transporte', items: ['Planifica tu ruta al estadio','App GoPass DART descargada y cargada','Horario del shuttle revisado — sal 2h antes','Uber/Lyft configurado con punto de recogida en Arlington','Pase de estacionamiento pre-comprado (si manejas)'] },
      { g: '👝 Qué Llevar', items: ['Bolsa transparente (30×15×30 cm máx — sin excepciones)','Protector solar FPS 50+ aplicado y empacado','Botella de agua reutilizable (vacía para pasar seguridad)','Teléfono completamente cargado antes de salir del hotel','Cargador portátil empacado','Playera, bufanda o colores del equipo','Efectivo pequeño (USD) para vendedores y propinas'] },
      { g: '🏨 Antes de Salir', items: ['El hotel tiene tu contacto para el día del partido','Sabes la parada DART/TRE más cercana a tu hotel','Punto de encuentro post-partido acordado con tu grupo','Revisa el pronóstico del tiempo en Dallas para ese día'] },
      { g: '📱 Apps y Descargas', items: ['App oficial FIFA instalada','Mapa offline de Dallas descargado','App de transporte GoPass instalada','Cuenta de Uber/Lyft configurada con método de pago','Contactos de emergencia guardados: 911, hotel, embajada'] },
      { g: '🍽️ Comida y Plan', items: ['Restaurante pre-partido reservado (¡reserva con anticipación!)','Bar o fan zone pre-partido acordado con el grupo','Restaurante post-partido identificado (se llenan rápido)','Desayuno o almuerzo resuelto — tendrás hambre'] },
    ],
    exp_beyond: 'Más Allá del Estadio', exp_title: 'Explorar Dallas',
    exp_sub: 'Dallas es una ciudad de barrios, cada uno con su propia personalidad. Así es como encontrar la ciudad real.',
    exp_nbh_label: 'Seis Zonas para Conocer', exp_nbh_title: 'Barrios',
    exp_rest_label: 'Favoritos Locales', exp_rest_title: 'Dónde Comer',
    exp_tabs_all: 'Todas las Zonas', exp_tabs_food: 'Comida y Bebida', exp_tabs_night: 'Nocturno', exp_tabs_culture: 'Cultura',
    exp_rest_all: 'Todo', exp_rest_bbq: 'BBQ', exp_rest_tex: 'Tex-Mex', exp_rest_intl: 'Internacional', exp_rest_bar: 'Bares',
    map_label: 'Mapa Interactivo', map_title: 'Mapa de Dallas',
    map_sub: 'Estadio, paradas de transporte, hoteles, fan zones y restaurantes — todo en un mapa.',
    map_filter: 'Filtrar por Categoría',
    map_all: 'Todo', map_stadium: 'Estadio', map_transit: 'Transporte',
    map_food: 'Comida y Bebida', map_hotels: 'Hoteles', map_fanzones: 'Zonas de Fanáticos',
    fam_label: 'Actividades Familiares', fam_title: 'Dallas en Familia',
    fam_sub: 'Las mejores actividades con niños en Dallas durante el Mundial — museos, parques de atracciones, parques acuáticos, zoológicos y experiencias tejanas.',
    fam_heat_warning: 'Advertencia de calor extremo:',
    fam_heat_text: 'Dallas en junio y julio alcanza regularmente 38–40°C. Programa actividades al aire libre por la mañana (9–11h) o tarde (después de las 17h).',
    fam_acts_label: '10 Atracciones para Familias', fam_acts_title: 'Qué Hacer',
    fam_transit_label: 'Moverse con Niños', fam_transit_title: 'Guía de Transporte Familiar',
    fam_tab_all: 'Todas', fam_tab_museum: 'Museos', fam_tab_outdoors: 'Exterior',
    fam_tab_indoor: 'Interior', fam_tab_theme: 'Parques de Atracciones',
    fam_tab_landmark: 'Monumentos', fam_tab_stadium: 'Estadios', fam_tab_dart: '🚆 Solo DART',
    fam_dart_yes: 'Accesible en DART', fam_dart_no: 'Auto/Taxi',
    fam_duration: 'Duración', fam_age: 'Edad Recomendada',
    fam_transit_dart: '🚆 Accesible en DART', fam_transit_car: '🚗 Se Recomienda Auto',
    wx_label: 'En Vivo desde Dallas, TX', wx_title: 'Clima en Dallas', wx_live: 'En Vivo',
    wx_next24: 'Próximas 24 Horas', wx_7day: 'Pronóstico de 7 Días',
    wx_glance: 'Condiciones de un Vistazo', wx_advice: 'Consejos para el Día del Partido',
    wx_stadium_title: 'Clima en el Estadio', wx_loading: 'Cargando datos del clima…',
    wx_unavailable: 'Clima no disponible', wx_updated: 'Actualizado',
    wx_humidity: 'Humedad', wx_wind: 'Velocidad del Viento', wx_uv: 'Índice UV',
    wx_sunrise: 'Amanecer', wx_sunset: 'Atardecer', wx_winddir: 'Dirección Viento',
    wx_feels: 'Sensación térmica',
    wx_heat_ok: 'Agradable', wx_heat_warm: 'Cálido', wx_heat_hot: 'Caluroso', wx_heat_extreme: 'Calor Extremo',
    wx_advice_cards: [
      { icon: '🏟️', title: 'Estadio Dallas', body: 'El estadio tiene techo retráctil y clima artificial — dentro siempre es cómodo. Vístete para 21°C en interiores.' },
      { icon: '🚶', title: 'Llegar al Estadio', body: 'El camino desde CentrePort hasta el shuttle y la entrada al estadio es al aire libre. En junio–julio es brutal. Ropa ligera y agua.' },
      { icon: '☔', title: 'Tormentas Eléctricas', body: 'Dallas tiene tormentas de verano rápidas. Suelen pasar en 30–45 min. El techo se cierra de inmediato ante rayos.' },
      { icon: '💧', title: 'Hidratación', body: 'Con más de 38°C puedes perder un litro de agua por hora. Bebe antes de tener sed. Se permiten botellas vacías en seguridad.' },
    ],
    match_venue_label: 'Estadio Dallas · Arlington, TX',
    match_fixtures_title: 'Partidos en Dallas',
    match_note: 'El Estadio Dallas alberga 9 partidos — más que cualquier otro estadio. Todos los horarios en CDT.',
    match_next: 'Próximo Partido en Dallas', match_cd_label: 'Cuenta Regresiva',
    match_stay_label: 'Alójate Cerca de la Acción', match_venue_info: 'Info del Estadio',
    match_address: 'Dirección', match_capacity: 'Capacidad',
    match_getting: 'Cómo Llegar', match_bags: 'Política de Bolsas',
    match_bags_text: 'Solo bolsas transparentes · Máx 30×15×30 cm · Boleto móvil obligatorio · Sin comida ni bebida exterior',
    match_getting_text: 'Tren TRE a CentrePort, luego shuttle FIFA gratuito. Sin ferrocarril directo a Arlington.',
    match_transit_link: 'Guía de Transporte →', match_add_cal: '+ Agregar al Calendario',
    match_flying: '¿Viajando para este partido?', match_find_date: 'Encuentra vuelos llegando',
  },

  fr: {
    surv_know_label: 'Pour les Visiteurs Internationaux',
    surv_know_title: 'Ce qu\'il Faut Savoir',
    surv_heat_title: 'La Chaleur du Texas',
    surv_heat: ['Températures juin–juillet : 35–40°C avec forte humidité','Portez une bouteille d\'eau réutilisable — hydratez-vous constamment','L\'AT&T Stadium est entièrement climatisé à l\'intérieur','Crème solaire SPF 50+ pour les fan zones en plein air','Vêtements légers et respirants — évitez les jeans les jours de match','Le coup de chaleur est un risque réel — cherchez l\'ombre pendant les pauses'],
    surv_transit_title: 'Se Déplacer à Dallas',
    surv_transit: ['Dallas est une ville de voitures — les transports publics sont limités hors du centre','Le tramway DART dessert le centre-ville, Uptown et Deep Ellum','Uber/Lyft pratiquent des tarifs élevés les jours de match — planifiez à l\'avance','Louez une voiture si vous séjournez hors du centre','Téléchargez l\'application GoPass pour les billets DART avant d\'arriver'],
    surv_money_title: 'Argent et Pourboires',
    surv_money: ['Uniquement USD — ayez du liquide pour les food trucks','Pourboire 18–20% au restaurant — incontournable culturellement','15% attendu dans les bars ; 1$/consommation minimum','Cartes de crédit acceptées presque partout ; sans contact disponible','Les distributeurs facturent 3–5$ de frais — utilisez Wise ou Revolut','Les prix sont hors taxes — ajoutez 8,25% à la caisse'],
    surv_conn_title: 'Connectivité',
    surv_conn: ['Achetez une SIM prépayée T-Mobile ou AT&T à l\'aéroport DFW','eSIM : Airalo ou Google Fi fonctionnent aux États-Unis','WiFi gratuit au stade mais saturé — téléchargez ce dont vous avez besoin avant','Téléchargez des cartes hors ligne de Dallas avant d\'arriver','Urgences : composez le 911 (gratuit depuis tout téléphone)'],
    surv_health_title: 'Santé et Sécurité',
    surv_health: ['Assurance voyage fortement recommandée — les soins sont très chers aux États-Unis','Hôpital le plus proche : Medical City Arlington, à 5 min du stade','Cliniques de soins urgents pour les problèmes mineurs — moins chers que les urgences','Pharmacies CVS et Walgreens à presque chaque coin de rue','L\'eau du robinet est potable dans toute la région de Dallas'],
    surv_arriving_title: 'Arriver à Dallas',
    surv_arriving: ['Aéroport principal : DFW International — à 25 min de Dallas','La ligne Orange du DART relie DFW directement au centre-ville','Aéroport secondaire : Dallas Love Field (DAL) — vols intérieurs','La douane peut prendre 60–90 min — prévoyez du temps supplémentaire','ESTA ou visa requis pour les visiteurs non américains — demandez au moins 72h à l\'avance'],
    surv_resources_title: 'Ressources Utiles',
    surv_resources: ['Tourisme officiel de Dallas ↗','Coupe du Monde FIFA 2026 officielle ↗','Planificateur de trajet DART ↗','Prévisions météo Dallas (NWS) ↗','Demande de dispense de visa ESTA ↗'],
    surv_weather_label: 'Conditions en Direct',
    surv_weather_title: 'Météo Dallas',
    surv_weather_sub: 'Météo de Dallas en direct — basculez entre °F et °C. Planifiez vos activités en plein air en fonction de la chaleur.',
    log_venue: 'Stade Dallas, Arlington', log_title: 'Comment Y Aller',
    log_hero_sub: 'Le Stade Dallas est à Arlington, entre Dallas et Fort Worth. Pas de train direct. Voici exactement comment s\'y rendre.',
    log_rec_label: 'Itinéraire Recommandé', log_rec_title: 'Étape par Étape',
    log_alert: 'Arlington n\'a pas de métro ni de tramway. Planifiez votre transport — la circulation les jours de match peut ajouter 60–90 min par trajet.',
    log_s1_title: 'TRE vers CentrePort',
    log_s1_body: 'Depuis Union Station (centre-ville de Dallas) ou Fort Worth, prenez le Trinity Railway Express jusqu\'à CentrePort/Aéroport DFW. Toutes les 30 min les jours de match.',
    log_s1_tip: '~35 min depuis Union Station · 5$ par trajet',
    log_s2_title: 'Navette FIFA Gratuite',
    log_s2_body: 'Des navettes FIFA gratuites partent de CentrePort directement vers les entrées du stade — 10–15 min de trajet.',
    log_s2_tip: 'Gratuit avec votre billet · Partez 2h+ avant',
    log_s3_title: 'Entrée au Stade',
    log_s3_body: 'Présentez votre billet mobile à l\'entrée. Sacs transparents uniquement (30×15×30 cm max). Portes ouvertes 2h30 avant le match.',
    log_s3_tip: 'Faites une capture de votre billet — le réseau est saturé à l\'intérieur',
    log_s4_title: 'Après le Match',
    log_s4_body: 'Les navettes retour fonctionnent jusqu\'à la dispersion de la foule — prévoyez 30–45 min d\'attente. Alternative : allez dans les bars d\'Arlington en attendant, puis Uber.',
    log_s4_tip: 'Configurez votre point de prise en charge Uber avant d\'entrer',
    log_opts_label: 'Toutes les Options', log_opts_title: 'Comment Se Déplacer',
    log_opt_rec: 'Recommandé',
    log_opt_tre_title: 'TRE + Navette', log_opt_tre_desc: 'Trinity Railway Express depuis Dallas ou Fort Worth, puis navette FIFA gratuite.',
    log_opt_tre_pros: 'Sans trafic · 5$ · Service dédié', log_opt_tre_cons: 'Planification nécessaire · Attente post-match',
    log_opt_drive_title: 'En Voiture et Parking', log_opt_drive_desc: 'Conduisez jusqu\'à Arlington et utilisez les parkings officiels du stade. Réservez en ligne.',
    log_opt_drive_pros: 'Porte-à-porte · Flexible', log_opt_drive_cons: 'Trafic intense · 30–60$ · Longue sortie',
    log_opt_uber_title: 'Uber / Lyft', log_opt_uber_desc: 'Pratique mais cher les jours de match — tarifs 3–5× plus élevés. Dépose sur Randol Mill Rd.',
    log_opt_uber_pros: 'Aucune planification', log_opt_uber_cons: 'Tarif élevé · Longue attente post-match',
    log_opt_bus_title: 'Bus (Économique)', log_opt_bus_desc: 'FlixBus et Greyhound relient Dallas à d\'autres villes du Texas. Dès 15$ par trajet.',
    log_opt_bus_pros: 'Option la moins chère · Routes depuis Houston, Austin', log_opt_bus_cons: 'Pas direct au stade · Dépend des horaires',
    log_book_label: 'Réservez Votre Transport', log_book_sub: 'Les voitures de location sont l\'option la plus flexible pour Arlington. Les hôtels près du stade se remplissent vite — réservez tôt.',
    cl_label: 'Outil Interactif', cl_title: 'Liste Jour de Match',
    cl_sub: '35 choses à préparer avant de vous rendre au stade. Cochez-les au fur et à mesure — votre progression est sauvegardée dans votre navigateur.',
    cl_progress: 'Votre Progression', cl_reset: 'Réinitialiser', cl_done: 'fait',
    cl_groups: [
      { g: '🎫 Billets & Documents', items: ['Téléchargez l\'app FIFA et chargez votre billet','Faites une capture de votre billet (réseau saturé à l\'intérieur)','Passeport ou pièce d\'identité officielle','Numéro de police d\'assurance voyage sauvegardé hors ligne','Confirmation d\'hôtel téléchargée'] },
      { g: '🚌 Transport', items: ['Planifiez votre itinéraire vers le stade','App GoPass DART téléchargée et rechargée','Horaires de navette vérifiés — partez 2h avant','Uber/Lyft configuré avec point de prise en charge à Arlington','Pass de parking pré-acheté (si vous conduisez)'] },
      { g: '👝 Ce qu\'il Faut Apporter', items: ['Sac transparent (30×15×30 cm max — aucune exception)','Crème solaire SPF 50+ appliquée et emportée','Bouteille d\'eau réutilisable (vide pour passer la sécurité)','Téléphone complètement chargé avant de partir','Batterie externe emportée','Maillot, écharpe ou couleurs de l\'équipe','Petites coupures (USD) pour les vendeurs et pourboires'] },
      { g: '🏨 Avant de Partir', items: ['L\'hôtel a votre contact pour le jour du match','Connaissez l\'arrêt DART/TRE le plus proche de votre hôtel','Point de rendez-vous post-match convenu avec votre groupe','Vérifiez la météo de Dallas pour ce jour-là'] },
      { g: '📱 Applications & Téléchargements', items: ['Application officielle FIFA installée','Carte hors ligne de Dallas téléchargée','Application de transport GoPass installée','Compte Uber/Lyft configuré avec moyen de paiement','Contacts d\'urgence sauvegardés : 911, hôtel, ambassade'] },
      { g: '🍽️ Repas & Plan', items: ['Restaurant d\'avant-match réservé (réservez tôt !)','Bar ou fan zone d\'avant-match convenu avec le groupe','Restaurant d\'après-match identifié (ils se remplissent vite)','Petit-déjeuner ou déjeuner organisé — vous aurez faim'] },
    ],
    exp_beyond: 'Au-delà du Stade', exp_title: 'Explorer Dallas',
    exp_sub: 'Dallas est une ville de quartiers, chacun avec sa propre personnalité. Voici comment trouver la vraie ville.',
    exp_nbh_label: 'Six Zones à Connaître', exp_nbh_title: 'Quartiers',
    exp_rest_label: 'Favoris Locaux', exp_rest_title: 'Où Manger',
    exp_tabs_all: 'Toutes les Zones', exp_tabs_food: 'Nourriture & Boissons', exp_tabs_night: 'Soirée', exp_tabs_culture: 'Culture',
    exp_rest_all: 'Tout', exp_rest_bbq: 'BBQ', exp_rest_tex: 'Tex-Mex', exp_rest_intl: 'International', exp_rest_bar: 'Bars',
    map_label: 'Carte Interactive', map_title: 'Carte de Dallas',
    map_sub: 'Stade, arrêts de transport, hôtels, fan zones et restaurants — tout sur une seule carte.',
    map_filter: 'Filtrer par Catégorie',
    map_all: 'Tout', map_stadium: 'Stade', map_transit: 'Transport',
    map_food: 'Nourriture & Boissons', map_hotels: 'Hôtels', map_fanzones: 'Fan Zones',
    fam_label: 'Activités Familiales', fam_title: 'Dallas en Famille',
    fam_sub: 'Les meilleures activités avec des enfants à Dallas — musées, parcs d\'attractions, parcs aquatiques, zoos et expériences texanes.',
    fam_heat_warning: 'Avertissement chaleur :',
    fam_heat_text: 'Dallas en juin et juillet atteint régulièrement 38–40°C. Planifiez les activités en plein air le matin (9–11h) ou l\'après-midi tard (après 17h).',
    fam_acts_label: '10 Attractions pour les Familles', fam_acts_title: 'Que Faire',
    fam_transit_label: 'Se Déplacer avec des Enfants', fam_transit_title: 'Guide Transport Famille',
    fam_tab_all: 'Tout', fam_tab_museum: 'Musées', fam_tab_outdoors: 'Plein Air',
    fam_tab_indoor: 'Intérieur', fam_tab_theme: 'Parcs d\'Attractions',
    fam_tab_landmark: 'Monuments', fam_tab_stadium: 'Stades', fam_tab_dart: '🚆 DART Uniquement',
    fam_dart_yes: 'Accessible en DART', fam_dart_no: 'Voiture/Taxi',
    fam_duration: 'Durée', fam_age: 'Âge Recommandé',
    fam_transit_dart: '🚆 Accessible en DART', fam_transit_car: '🚗 Voiture Recommandée',
    wx_label: 'En Direct de Dallas, TX', wx_title: 'Météo Dallas', wx_live: 'En Direct',
    wx_next24: '24 Prochaines Heures', wx_7day: 'Prévisions 7 Jours',
    wx_glance: 'Conditions en un Coup d\'Œil', wx_advice: 'Conseils Jour de Match',
    wx_stadium_title: 'Météo au Stade', wx_loading: 'Chargement des données météo…',
    wx_unavailable: 'Météo indisponible', wx_updated: 'Mis à jour',
    wx_humidity: 'Humidité', wx_wind: 'Vitesse du Vent', wx_uv: 'Indice UV',
    wx_sunrise: 'Lever du soleil', wx_sunset: 'Coucher du soleil', wx_winddir: 'Direction Vent',
    wx_feels: 'Ressenti',
    wx_heat_ok: 'Agréable', wx_heat_warm: 'Chaud', wx_heat_hot: 'Très chaud', wx_heat_extreme: 'Chaleur Extrême',
    wx_advice_cards: [
      { icon: '🏟️', title: 'Stade Dallas', body: 'Le stade a un toit rétractable et la climatisation — à l\'intérieur il fait toujours bon. Habillez-vous pour 21°C à l\'intérieur.' },
      { icon: '🚶', title: 'Rejoindre le Stade', body: 'Le chemin depuis CentrePort jusqu\'aux navettes et aux entrées est en plein air. En juin–juillet c\'est brutal. Vêtements légers et eau.' },
      { icon: '☔', title: 'Orages', body: 'Dallas connaît des orages estivaux rapides. Ils passent en 30–45 min. Le toit se ferme immédiatement en cas de foudre.' },
      { icon: '💧', title: 'Hydratation', body: 'Par 38°C+ vous pouvez perdre un litre d\'eau par heure en extérieur. Buvez avant d\'avoir soif. Les bouteilles vides passent la sécurité.' },
    ],
    match_venue_label: 'Stade Dallas · Arlington, TX',
    match_fixtures_title: 'Matchs à Dallas',
    match_note: 'Le Stade Dallas accueille 9 matchs — plus que tout autre stade. Horaires en CDT.',
    match_next: 'Prochain Match à Dallas', match_cd_label: 'Compte à Rebours',
    match_stay_label: 'Séjournez près de l\'Action', match_venue_info: 'Infos Stade',
    match_address: 'Adresse', match_capacity: 'Capacité',
    match_getting: 'Comment Venir', match_bags: 'Politique Bagages',
    match_bags_text: 'Sacs transparents uniquement · Max 30×15×30 cm · Billet mobile obligatoire · Sans nourriture ni boisson extérieure',
    match_getting_text: 'Train TRE vers CentrePort, puis navette FIFA gratuite. Pas de train direct vers Arlington.',
    match_transit_link: 'Guide de Transport →', match_add_cal: '+ Ajouter au Calendrier',
    match_flying: 'Vous venez pour ce match ?', match_find_date: 'Trouvez des vols arrivant',
  },

  pt: {
    surv_know_label: 'Para Visitantes Internacionais',
    surv_know_title: 'O que Saber Antes de Chegar',
    surv_heat_title: 'O Calor do Texas',
    surv_heat: ['Temperaturas de junho–julho: 35–40°C com alta umidade','Leve uma garrafa d\'água reutilizável — hidrate-se constantemente','O AT&T Stadium tem ar-condicionado total nos ambientes internos','Protetor solar FPS 50+ para as fan zones ao ar livre','Roupas leves e respiráveis — evite jeans nos dias de jogo','O estresse térmico é um risco real — sente-se à sombra nos intervalos'],
    surv_transit_title: 'Como se Locomover em Dallas',
    surv_transit: ['Dallas é cidade de carros — o transporte público é limitado fora do centro','O metrô leve DART cobre o centro, Uptown e Deep Ellum','Uber/Lyft têm tarifas altas nos dias de jogo — planeje com antecedência','Alugue um carro se ficar fora da área central','Baixe o app GoPass para bilhetes DART antes de chegar'],
    surv_money_title: 'Dinheiro e Gorjetas',
    surv_money: ['Apenas USD — tenha dinheiro para food trucks e vendedores','Gorjeta de 18–20% em restaurantes — obrigatório culturalmente','15% esperado em bares; US$1/bebida no mínimo','Cartões de crédito aceitos em quase todo lugar; contactless disponível','Caixas eletrônicos cobram US$3–5 de taxa — use Wise ou Revolut','Preços sem impostos — adicione 8,25% no caixa'],
    surv_conn_title: 'Conectividade',
    surv_conn: ['Compre um SIM pré-pago da T-Mobile ou AT&T no aeroporto DFW','eSIM: Airalo ou Google Fi funcionam nos EUA','WiFi gratuito no estádio mas congestionado — baixe o que precisar antes','Baixe mapas offline de Dallas antes de chegar','Emergências: disque 911 (gratuito de qualquer telefone)'],
    surv_health_title: 'Saúde e Segurança',
    surv_health: ['Seguro viagem altamente recomendado — saúde nos EUA é muito cara','Hospital mais próximo: Medical City Arlington, a 5 min do estádio','Clínicas de pronto-atendimento para problemas menores — mais baratas que urgências','Farmácias CVS e Walgreens em quase cada esquina','A água da torneira é segura para beber em toda a região de Dallas'],
    surv_arriving_title: 'Chegando a Dallas',
    surv_arriving: ['Aeroporto principal: DFW Internacional — a 25 min de Dallas','A linha laranja do DART conecta DFW diretamente ao centro','Aeroporto secundário: Dallas Love Field (DAL) — voos domésticos','A imigração pode levar 60–90 min — deixe tempo extra','ESTA ou visto necessário para visitantes não americanos — solicite com 72h de antecedência'],
    surv_resources_title: 'Recursos Úteis',
    surv_resources: ['Turismo oficial de Dallas ↗','Copa do Mundo FIFA 2026 oficial ↗','Planejador de viagens DART ↗','Previsão do tempo Dallas (NWS) ↗','Solicitação de isenção de visto ESTA ↗'],
    surv_weather_label: 'Condições ao Vivo',
    surv_weather_title: 'Clima em Dallas',
    surv_weather_sub: 'Clima ao vivo em Dallas — alterne entre °F e °C. Planeje suas atividades ao ar livre de acordo com o calor.',
    log_venue: 'Estádio Dallas, Arlington', log_title: 'Como Chegar',
    log_hero_sub: 'O Estádio Dallas fica em Arlington, entre Dallas e Fort Worth. Sem trilho direto. Veja exatamente como chegar.',
    log_rec_label: 'Rota Recomendada', log_rec_title: 'Passo a Passo',
    log_alert: 'Arlington não tem metrô nem VLT. Planeje seu transporte — o trânsito nos dias de jogo pode adicionar 60–90 min por trajeto.',
    log_s1_title: 'TRE para CentrePort',
    log_s1_body: 'Da Union Station (centro de Dallas) ou Fort Worth, pegue o Trinity Railway Express até CentrePort/Aeroporto DFW. A cada 30 min nos dias de jogo.',
    log_s1_tip: '~35 min da Union Station · US$5 por trajeto',
    log_s2_title: 'Ônibus FIFA Gratuito',
    log_s2_body: 'Ônibus FIFA gratuitos saem de CentrePort diretamente para as entradas do estádio — 10–15 min de viagem.',
    log_s2_tip: 'Gratuito com seu ingresso · Saia 2h+ antes',
    log_s3_title: 'Entrada no Estádio',
    log_s3_body: 'Mostre seu ingresso móvel na entrada. Apenas bolsas transparentes (30×15×30 cm máx). Portões abrem 2,5h antes do jogo.',
    log_s3_tip: 'Tire um print do ingresso — sem sinal dentro do estádio',
    log_s4_title: 'Após o Jogo',
    log_s4_body: 'Os ônibus de retorno funcionam até a multidão dispersar — espere 30–45 min. Alternativa: vá a bares próximos esperar e depois chame um Uber.',
    log_s4_tip: 'Configure seu ponto de embarque no Uber antes de entrar',
    log_opts_label: 'Todas as Opções', log_opts_title: 'Como se Locomover',
    log_opt_rec: 'Recomendado',
    log_opt_tre_title: 'TRE + Ônibus', log_opt_tre_desc: 'Trinity Railway Express de Dallas ou Fort Worth, depois ônibus FIFA gratuito.',
    log_opt_tre_pros: 'Sem trânsito · US$5 · Serviço dedicado', log_opt_tre_cons: 'Requer planejamento · Espera pós-jogo',
    log_opt_drive_title: 'Carro e Estacionamento', log_opt_drive_desc: 'Dirija até Arlington e use os estacionamentos oficiais do estádio. Reserve online.',
    log_opt_drive_pros: 'Porta a porta · Flexível', log_opt_drive_cons: 'Muito trânsito · US$30–60 · Longa saída',
    log_opt_uber_title: 'Uber / Lyft', log_opt_uber_desc: 'Conveniente mas caro nos dias de jogo — tarifas 3–5× mais altas. Desembarque na Randol Mill Rd.',
    log_opt_uber_pros: 'Sem planejamento', log_opt_uber_cons: 'Tarifa alta · Longa espera pós-jogo',
    log_opt_bus_title: 'Ônibus (Econômico)', log_opt_bus_desc: 'FlixBus e Greyhound conectam Dallas a outras cidades do Texas. A partir de US$15.',
    log_opt_bus_pros: 'Opção mais barata · Rotas de Houston, Austin', log_opt_bus_cons: 'Não vai direto ao estádio · Depende do horário',
    log_book_label: 'Reserve seu Transporte', log_book_sub: 'Carros alugados são a opção mais flexível para Arlington. Hotéis perto do estádio esgotam rápido — reserve cedo.',
    cl_label: 'Ferramenta Interativa', cl_title: 'Lista do Dia do Jogo',
    cl_sub: '35 coisas para resolver antes de ir ao estádio. Marque conforme avança — o progresso é salvo no seu navegador.',
    cl_progress: 'Seu Progresso', cl_reset: 'Reiniciar', cl_done: 'feitos',
    cl_groups: [
      { g: '🎫 Ingressos e Documentos', items: ['Baixe o app FIFA e carregue seu ingresso','Tire um print do ingresso (sem sinal dentro)','Passaporte ou documento oficial empacado','Número da apólice do seguro de viagem salvo offline','Confirmação de hotel baixada'] },
      { g: '🚌 Transporte', items: ['Planeje sua rota ao estádio','App GoPass DART baixado e carregado','Horário do ônibus verificado — saia 2h antes','Uber/Lyft configurado com ponto de embarque em Arlington','Passe de estacionamento pré-comprado (se for de carro)'] },
      { g: '👝 O que Levar', items: ['Bolsa transparente (30×15×30 cm máx — sem exceções)','Protetor solar FPS 50+ aplicado e na bolsa','Garrafa d\'água reutilizável (vazia para passar pela segurança)','Celular totalmente carregado antes de sair do hotel','Carregador portátil na bolsa','Camisa, cachecol ou cores do seu time','Dinheiro trocado (USD) para vendedores e gorjetas'] },
      { g: '🏨 Antes de Sair', items: ['O hotel tem seu contato para o dia do jogo','Saiba a parada DART/TRE mais próxima do seu hotel','Ponto de encontro pós-jogo combinado com o grupo','Verifique a previsão do tempo de Dallas para o dia'] },
      { g: '📱 Apps e Downloads', items: ['App oficial FIFA instalado','Mapa offline de Dallas baixado','App de transporte GoPass instalado','Conta Uber/Lyft configurada com meio de pagamento','Contatos de emergência salvos: 911, hotel, embaixada'] },
      { g: '🍽️ Comida e Plano', items: ['Restaurante pré-jogo reservado (reserve cedo!)','Bar ou fan zone pré-jogo combinado com o grupo','Restaurante pós-jogo identificado (lotam rápido)','Café da manhã ou almoço resolvido — você vai estar com fome'] },
    ],
    exp_beyond: 'Além do Estádio', exp_title: 'Explorar Dallas',
    exp_sub: 'Dallas é uma cidade de bairros, cada um com sua própria personalidade. Veja como encontrar a cidade real.',
    exp_nbh_label: 'Seis Áreas para Conhecer', exp_nbh_title: 'Bairros',
    exp_rest_label: 'Favoritos Locais', exp_rest_title: 'Onde Comer',
    exp_tabs_all: 'Todas as Áreas', exp_tabs_food: 'Comida e Bebida', exp_tabs_night: 'Noite', exp_tabs_culture: 'Cultura',
    exp_rest_all: 'Tudo', exp_rest_bbq: 'BBQ', exp_rest_tex: 'Tex-Mex', exp_rest_intl: 'Internacional', exp_rest_bar: 'Bares',
    map_label: 'Mapa Interativo', map_title: 'Mapa de Dallas',
    map_sub: 'Estádio, paradas de transporte, hotéis, fan zones e restaurantes — tudo em um mapa.',
    map_filter: 'Filtrar por Categoria',
    map_all: 'Tudo', map_stadium: 'Estádio', map_transit: 'Transporte',
    map_food: 'Comida e Bebida', map_hotels: 'Hotéis', map_fanzones: 'Zonas de Fãs',
    fam_label: 'Atividades Familiares', fam_title: 'Dallas em Família',
    fam_sub: 'As melhores atividades com crianças em Dallas — museus, parques, parques aquáticos, zoológicos e experiências texanas.',
    fam_heat_warning: 'Aviso de calor extremo:',
    fam_heat_text: 'Dallas em junho e julho atinge regularmente 38–40°C. Programe atividades ao ar livre pela manhã (9–11h) ou à tarde (depois das 17h).',
    fam_acts_label: '10 Atrações para Famílias', fam_acts_title: 'O que Fazer',
    fam_transit_label: 'Locomover-se com Crianças', fam_transit_title: 'Guia de Transporte Familiar',
    fam_tab_all: 'Tudo', fam_tab_museum: 'Museus', fam_tab_outdoors: 'Ar Livre',
    fam_tab_indoor: 'Interior', fam_tab_theme: 'Parques de Diversão',
    fam_tab_landmark: 'Pontos Turísticos', fam_tab_stadium: 'Estádios', fam_tab_dart: '🚆 Somente DART',
    fam_dart_yes: 'Acessível pelo DART', fam_dart_no: 'Carro/Táxi',
    fam_duration: 'Duração', fam_age: 'Idade Recomendada',
    fam_transit_dart: '🚆 Acessível pelo DART', fam_transit_car: '🚗 Carro Recomendado',
    wx_label: 'Ao Vivo de Dallas, TX', wx_title: 'Clima em Dallas', wx_live: 'Ao Vivo',
    wx_next24: 'Próximas 24 Horas', wx_7day: 'Previsão de 7 Dias',
    wx_glance: 'Condições em um Relance', wx_advice: 'Dicas para o Dia do Jogo',
    wx_stadium_title: 'Clima no Estádio', wx_loading: 'Carregando dados do clima…',
    wx_unavailable: 'Clima indisponível', wx_updated: 'Atualizado',
    wx_humidity: 'Umidade', wx_wind: 'Velocidade do Vento', wx_uv: 'Índice UV',
    wx_sunrise: 'Nascer do sol', wx_sunset: 'Pôr do sol', wx_winddir: 'Direção Vento',
    wx_feels: 'Sensação térmica',
    wx_heat_ok: 'Agradável', wx_heat_warm: 'Morno', wx_heat_hot: 'Quente', wx_heat_extreme: 'Calor Extremo',
    wx_advice_cards: [
      { icon: '🏟️', title: 'Estádio Dallas', body: 'O estádio tem teto retrátil e climatização total — dentro sempre é confortável. Vista-se para 21°C no interior.' },
      { icon: '🚶', title: 'Chegar ao Estádio', body: 'O caminho de CentrePort até o ônibus e a entrada do estádio é ao ar livre. Em junho–julho é brutal. Roupa leve e água.' },
      { icon: '☔', title: 'Tempestades', body: 'Dallas tem tempestades de verão rápidas. Geralmente passam em 30–45 min. O teto fecha imediatamente em caso de raios.' },
      { icon: '💧', title: 'Hidratação', body: 'Com 38°C+ você pode perder um litro de água por hora ao ar livre. Beba antes de sentir sede. Garrafas vazias passam pela segurança.' },
    ],
    match_venue_label: 'Estádio Dallas · Arlington, TX',
    match_fixtures_title: 'Jogos em Dallas',
    match_note: 'O Estádio Dallas sedia 9 jogos — mais do que qualquer outro estádio. Horários em CDT.',
    match_next: 'Próximo Jogo em Dallas', match_cd_label: 'Contagem Regressiva',
    match_stay_label: 'Fique Perto da Ação', match_venue_info: 'Info do Estádio',
    match_address: 'Endereço', match_capacity: 'Capacidade',
    match_getting: 'Como Chegar', match_bags: 'Política de Bolsas',
    match_bags_text: 'Apenas bolsas transparentes · Máx 30×15×30 cm · Ingresso móvel obrigatório · Sem comida ou bebida externa',
    match_getting_text: 'Trem TRE para CentrePort, depois ônibus FIFA gratuito. Sem trilho direto para Arlington.',
    match_transit_link: 'Guia de Transporte →', match_add_cal: '+ Adicionar ao Calendário',
    match_flying: 'Viajando para este jogo?', match_find_date: 'Encontre voos chegando',
  },
};

// Merge PAGE_CONTENT into TRANSLATIONS so t() works for all keys
Object.keys(PAGE_CONTENT).forEach(lang => {
  if (TRANSLATIONS[lang]) {
    Object.assign(TRANSLATIONS[lang], PAGE_CONTENT[lang]);
  }
});

// ── PAGE RENDERERS ────────────────────────────────────────────
// Each page calls its renderer and re-calls on langchange.

function renderSurvivalPage() {
  const cards = [
    { icon:'🌡️', titleKey:'surv_heat_title',    itemsKey:'surv_heat' },
    { icon:'🚗', titleKey:'surv_transit_title', itemsKey:'surv_transit' },
    { icon:'💳', titleKey:'surv_money_title',   itemsKey:'surv_money' },
    { icon:'📱', titleKey:'surv_conn_title',     itemsKey:'surv_conn' },
    { icon:'🏥', titleKey:'surv_health_title',  itemsKey:'surv_health' },
    { icon:'✈️', titleKey:'surv_arriving_title',itemsKey:'surv_arriving' },
    { icon:'🌐', titleKey:'surv_resources_title',itemsKey:'surv_resources',
      links: [
        {url:'https://www.visitdallas.com', key:0},
        {url:'https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums', key:1},
        {url:'https://www.dart.org', key:2},
        {url:'https://www.weather.gov/fwd', key:3},
        {url:'https://esta.cbp.dhs.gov', key:4},
      ]
    },
  ];
  const grid = document.getElementById('surv-grid');
  if (!grid) return;
  grid.innerHTML = cards.map(c => {
    const items = t(c.itemsKey);
    const liHtml = Array.isArray(items) ? items.map((item, i) => {
      if (c.links) {
        const link = c.links[i];
        return `<li><a href="${link.url}" target="_blank" rel="noopener" style="color:var(--white)">${item}</a></li>`;
      }
      return `<li>${item}</li>`;
    }).join('') : '';
    return `<div class="surv-card">
      <div class="surv-head"><span class="surv-ico">${c.icon}</span><span class="surv-title">${t(c.titleKey)}</span></div>
      <ul class="surv-items">${liHtml}</ul>
    </div>`;
  }).join('');

  // Section headings
  const lbl = document.getElementById('surv-know-label');
  const ttl = document.getElementById('surv-know-title');
  if (lbl) lbl.textContent = t('surv_know_label');
  if (ttl) ttl.textContent = t('surv_know_title');

  // Weather widget label
  const wlbl = document.getElementById('surv-weather-label');
  const wttl = document.getElementById('surv-weather-title');
  const wsub = document.getElementById('surv-weather-sub');
  if (wlbl) wlbl.textContent = t('surv_weather_label');
  if (wttl) wttl.textContent = t('surv_weather_title');
  if (wsub) wsub.textContent = t('surv_weather_sub');
}

function renderLogisticsPage() {
  // Section labels
  const ids = {
    'log-venue': 'log_venue', 'log-title': 'log_title',
    'log-rec-label': 'log_rec_label', 'log-rec-title': 'log_rec_title',
    'log-opts-label': 'log_opts_label', 'log-opts-title': 'log_opts_title',
    'log-book-label': 'log_book_label',
  };
  Object.entries(ids).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = t(key);
  });

  // Alert
  const alert = document.getElementById('log-alert');
  if (alert) alert.innerHTML = `<strong>${t('important')}</strong> ${t('log_alert')}`;

  // Steps
  const steps = [
    { num:'01', tKey:'log_s1_title', bKey:'log_s1_body', tipKey:'log_s1_tip' },
    { num:'02', tKey:'log_s2_title', bKey:'log_s2_body', tipKey:'log_s2_tip' },
    { num:'03', tKey:'log_s3_title', bKey:'log_s3_body', tipKey:'log_s3_tip' },
    { num:'04', tKey:'log_s4_title', bKey:'log_s4_body', tipKey:'log_s4_tip' },
  ];
  const stepsGrid = document.getElementById('log-steps-grid');
  if (stepsGrid) {
    stepsGrid.innerHTML = steps.map(s => `
      <div class="step-card">
        <div class="step-num">${s.num}</div>
        <div class="step-title">${t(s.tKey)}</div>
        <p class="step-body">${t(s.bKey)}</p>
        <p class="step-tip">⚡ ${t(s.tipKey)}</p>
      </div>`).join('');
  }

  // Options
  const opts = [
    { rec:true,  icon:'🚂', tKey:'log_opt_tre_title',   dKey:'log_opt_tre_desc',   pKey:'log_opt_tre_pros',   cKey:'log_opt_tre_cons',   link:{url:'https://www.dart.org', label:'DART Trip Planner ↗'} },
    { rec:false, icon:'🚗', tKey:'log_opt_drive_title', dKey:'log_opt_drive_desc', pKey:'log_opt_drive_pros', cKey:'log_opt_drive_cons', link:{url:'https://www.attstadium.com/plan-your-visit/parking', label:'Book Parking ↗'} },
    { rec:false, icon:'🚕', tKey:'log_opt_uber_title',  dKey:'log_opt_uber_desc',  pKey:'log_opt_uber_pros',  cKey:'log_opt_uber_cons',  link:null },
    { rec:false, icon:'🚌', tKey:'log_opt_bus_title',   dKey:'log_opt_bus_desc',   pKey:'log_opt_bus_pros',   cKey:'log_opt_bus_cons',   link:null },
  ];
  const optsGrid = document.getElementById('log-opts-grid');
  if (optsGrid) {
    optsGrid.innerHTML = opts.map(o => `
      <div class="option-card${o.rec ? ' recommended' : ''}">
        ${o.rec ? `<div class="rec-badge">${t('log_opt_rec')}</div>` : ''}
        <div class="oc-title">${o.icon} ${t(o.tKey)}</div>
        <div class="oc-desc">${t(o.dKey)}</div>
        <div class="oc-pros">✓ ${t(o.pKey)}</div>
        <div class="oc-cons">✗ ${t(o.cKey)}</div>
        ${o.link ? `<div style="margin-top:.75rem"><a href="${o.link.url}" target="_blank" rel="noopener" class="ext-link" style="font-size:.65rem">${o.link.label}</a></div>` : ''}
      </div>`).join('');
  }
}

function renderChecklistPage() {
  const lbl = document.getElementById('cl-page-label');
  const ttl = document.getElementById('cl-page-title');
  const sub = document.getElementById('cl-page-sub');
  const progLbl = document.getElementById('cl-prog-label');
  const resetBtn = document.getElementById('cl-reset-btn');
  if (lbl) lbl.textContent = t('cl_label');
  if (ttl) ttl.textContent = t('cl_title');
  if (sub) sub.textContent = t('cl_sub');
  if (progLbl) progLbl.textContent = t('cl_progress');
  if (resetBtn) resetBtn.textContent = t('cl_reset');

  const groups = t('cl_groups');
  if (!Array.isArray(groups)) return;

  // Re-render checklist with translated strings, preserving check state
  const checks = JSON.parse(localStorage.getItem('dallas2026-checks') || '{}');
  const grid = document.getElementById('cl-grid');
  if (!grid) return;

  grid.innerHTML = groups.map((g, gi) => `
    <div class="cl-group">
      <div class="cl-group-title">${g.g}</div>
      <div class="cl-items">
        ${g.items.map((item, ii) => {
          const key = gi + '_' + ii;
          const done = checks[key];
          return `<div class="cl-item${done ? ' done' : ''}" onclick="clToggle('${key}',this)">
            <div class="cl-check" style="${done ? 'background:var(--gold);border-color:var(--gold);color:var(--dark)' : ''}">${done ? '✓' : ''}</div>
            <div class="cl-label" style="${done ? 'text-decoration:line-through;color:var(--dim)' : ''}">${item}</div>
          </div>`;
        }).join('')}
      </div>
    </div>`).join('');
  updateChecklistProgress();
}

function updateChecklistProgress() {
  const groups = t('cl_groups');
  if (!Array.isArray(groups)) return;
  const total = groups.reduce((a, g) => a + g.items.length, 0);
  const checks = JSON.parse(localStorage.getItem('dallas2026-checks') || '{}');
  const done = Object.values(checks).filter(Boolean).length;
  const progDone = document.getElementById('prog-done');
  const progTotal = document.getElementById('prog-total');
  const progFill = document.getElementById('prog-fill');
  if (progDone) progDone.textContent = done;
  if (progTotal) progTotal.textContent = total;
  if (progFill) progFill.style.width = (done / total * 100) + '%';
}

function clToggle(key, el) {
  const checks = JSON.parse(localStorage.getItem('dallas2026-checks') || '{}');
  checks[key] = !checks[key];
  localStorage.setItem('dallas2026-checks', JSON.stringify(checks));
  el.classList.toggle('done', checks[key]);
  el.querySelector('.cl-check').textContent = checks[key] ? '✓' : '';
  el.querySelector('.cl-check').style.cssText = checks[key] ? 'background:var(--gold);border-color:var(--gold);color:var(--dark)' : '';
  el.querySelector('.cl-label').style.cssText = checks[key] ? 'text-decoration:line-through;color:var(--dim)' : '';
  updateChecklistProgress();
}

function clReset() {
  localStorage.removeItem('dallas2026-checks');
  renderChecklistPage();
}
