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
        return `<li><a href="${href}" class="${isActive ? 'active' : ''}">${n.label}</a></li>`;
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
          return `<a href="${href}" class="mobile-nav-link${isActive ? ' active' : ''}" onclick="closeMobileNav()">${n.label}</a>`;
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
  // Works for both local file and deployed subdirectory
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  const isSubDir = window.location.pathname.includes('/neighborhoods/') || window.location.pathname.includes('/restaurants/') || window.location.pathname.includes('/activities/');
  return isSubDir ? '../../' : './';
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
function initCountdown(dayId, hId, mId, sId) {
  function tick() {
    const t = new Date('2026-06-15T19:00:00-05:00') - new Date();
    if (t <= 0) return;
    const d = Math.floor(t / 864e5), h = Math.floor(t % 864e5 / 36e5),
          m = Math.floor(t % 36e5 / 6e4), s = Math.floor(t % 6e4 / 1e3);
    if (dayId && document.getElementById(dayId)) document.getElementById(dayId).textContent = d;
    if (hId && document.getElementById(hId)) document.getElementById(hId).textContent = String(h).padStart(2,'0');
    if (mId && document.getElementById(mId)) document.getElementById(mId).textContent = String(m).padStart(2,'0');
    if (sId && document.getElementById(sId)) document.getElementById(sId).textContent = String(s).padStart(2,'0');
    const dh = document.getElementById('days-hero');
    if (dh) dh.textContent = d;
  }
  tick(); setInterval(tick, 1000);
}

// ── WEATHER ───────────────────────────────────────────────────
async function initWeather() {
  try {
    const r = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.78&longitude=-96.81&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&temperature_unit=fahrenheit&wind_speed_unit=mph&timezone=America%2FChicago');
    const d = await r.json(); const c = d.current;
    const codes = {0:'Clear skies',1:'Mostly clear',2:'Partly cloudy',3:'Overcast',45:'Foggy',51:'Light drizzle',61:'Light rain',63:'Moderate rain',80:'Rain showers',95:'Thunderstorms'};
    const tempEl = document.getElementById('w-temp');
    const descEl = document.getElementById('w-desc');
    const humEl  = document.getElementById('w-hum');
    const windEl = document.getElementById('w-wind');
    if (tempEl) tempEl.textContent = Math.round(c.temperature_2m) + '°F';
    if (descEl) descEl.textContent = codes[c.weather_code] || 'Conditions vary';
    if (humEl)  humEl.textContent  = Math.round(c.relative_humidity_2m);
    if (windEl) windEl.textContent = Math.round(c.wind_speed_10m);
  } catch(e) {
    const descEl = document.getElementById('w-desc');
    if (descEl) descEl.textContent = 'Weather unavailable';
  }
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
