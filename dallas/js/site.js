// ── SHARED DATA ──────────────────────────────────────────────
const SITE = {
  // Flat nav kept for footer sitemap generation
  nav: [
    { label: 'Matches',   href: '/matches.html',      key: 'nav_matches' },
    { label: 'Tickets',   href: '/tickets.html',       key: 'nav_tickets' },
    { label: 'Map',       href: '/map.html',           key: 'nav_map' },
    { label: 'Airport',   href: '/airport.html',       key: 'nav_airport' },
    { label: 'Get There', href: '/logistics.html',     key: 'nav_logistics' },
    { label: 'Fan Zones', href: '/fanzones.html',      key: 'nav_fanzones' },
    { label: 'Groups',    href: '/groups.html',         key: 'nav_groups' },
    { label: 'Stay',      href: '/accommodation.html', key: 'nav_accommodation' },
    { label: 'Budget',    href: '/budget.html',        key: 'nav_budget' },
    { label: 'Shopping',  href: '/shopping.html',      key: 'nav_shopping' },
    { label: 'Explore',   href: '/explore.html',       key: 'nav_explore' },
    { label: 'Halal',     href: '/halal.html',          key: 'nav_halal' },
    { label: 'Day Trips', href: '/daytrips.html',       key: 'nav_daytrips' },
    { label: 'Checklist', href: '/checklist.html',     key: 'nav_checklist' },
    { label: 'Survival',  href: '/survival.html',      key: 'nav_survival' },
    { label: 'Phrases',   href: '/phrases.html',        key: 'nav_phrases' },
    { label: 'Families',  href: '/families.html',      key: 'nav_families' },
    { label: 'Weather',   href: '/weather.html',        key: 'nav_weather' },
  ],

  // Categorised nav for dropdown menu
  navCategories: [
    {
      labelKey: 'cat_matches', key: 'cat_matches', icon: '⚽',
      items: [
        { labelKey: 'nav_item_schedule', href: '/matches.html',  subKey: 'nav_item_schedule_sub' },
        { labelKey: 'nav_item_tickets',  href: '/tickets.html',  subKey: 'nav_item_tickets_sub' },
        { labelKey: 'nav_item_fanzones', href: '/fanzones.html', subKey: 'nav_item_fanzones_sub' },
        { labelKey: 'nav_item_map',      href: '/map.html',      subKey: 'nav_item_map_sub' },
      ]
    },
    {
      labelKey: 'cat_transport', key: 'cat_transport', icon: '✈️',
      items: [
        { labelKey: 'nav_item_airport',   href: '/airport.html',    subKey: 'nav_item_airport_sub' },
        { labelKey: 'nav_item_transit',   href: '/logistics.html',  subKey: 'nav_item_transit_sub' },
        { labelKey: 'nav_item_groups',    href: '/groups.html',     subKey: 'nav_item_groups_sub' },
        { labelKey: 'nav_item_daytrips',  href: '/daytrips.html',   subKey: 'nav_item_daytrips_sub' },
      ]
    },
    {
      labelKey: 'cat_stay', key: 'cat_stay', icon: '🏨',
      items: [
        { labelKey: 'nav_item_stay',     href: '/accommodation.html', subKey: 'nav_item_stay_sub' },
        { labelKey: 'nav_item_budget',   href: '/budget.html',        subKey: 'nav_item_budget_sub' },
        { labelKey: 'nav_item_shopping', href: '/shopping.html',      subKey: 'nav_item_shopping_sub' },
      ]
    },
    {
      labelKey: 'cat_food', key: 'cat_food', icon: '🍽️',
      items: [
        { labelKey: 'nav_item_explore', href: '/explore.html', subKey: 'nav_item_explore_sub' },
        { labelKey: 'nav_item_halal',   href: '/halal.html',   subKey: 'nav_item_halal_sub' },
      ]
    },
    {
      labelKey: 'cat_plan', key: 'cat_plan', icon: '📋',
      items: [
        { labelKey: 'nav_item_checklist', href: '/checklist.html', subKey: 'nav_item_checklist_sub' },
        { labelKey: 'nav_item_survival',  href: '/survival.html',  subKey: 'nav_item_survival_sub' },
        { labelKey: 'nav_item_phrases',   href: '/phrases.html',   subKey: 'nav_item_phrases_sub' },
        { labelKey: 'nav_item_families',  href: '/families.html',  subKey: 'nav_item_families_sub' },
        { labelKey: 'nav_item_weather',   href: '/weather.html',   subKey: 'nav_item_weather_sub' },
      ]
    },
  ]
};

const NEIGHBORHOODS = [
  { slug:'deep-ellum', name:'Deep Ellum', icon:'🎸', tag:'Nightlife · Food', cats:['nightlife','food'],
    desc:'Dallas\'s gritty arts district — live blues & jazz every night, craft breweries, murals, and legendary BBQ spots within walking distance of each other.',
    long:'Deep Ellum is the heartbeat of Dallas after dark. Once a booming jazz scene in the 1920s, today it pulses with live music venues, independent galleries, and some of the city\'s best BBQ joints. During the World Cup, expect wall-to-wall fan energy every night.',
    highlights:['Live music 7 nights a week','Pecan Lodge — best brisket in Dallas','World-class street art and murals','Fan zones and match screens all tournament'],
    tips:['Park on side streets — avoid the main strip lots','Most venues open until 2am','DART Green Line stops at Deep Ellum station'],
    gmaps:'https://maps.google.com/?q=Deep+Ellum+Dallas+TX',
    links:[{label:'Deep Ellum Foundation',url:'https://www.deepellumtexas.com'},{label:'Deep Ellum on Google Maps',url:'https://maps.google.com/?q=Deep+Ellum+Dallas+TX'}]
  },
  { slug:'uptown', name:'Uptown', icon:'🥂', tag:'Food · Upscale', cats:['food','nightlife'],
    desc:'Walkable restaurant row with rooftop bars, steakhouses, and international cuisine. The most pedestrian-friendly part of Dallas — rare for Texas.',
    long:'Uptown is where Dallas dresses up. McKinney Avenue is lined with patio restaurants and rooftop dining. The M-Line Trolley runs the length of the strip for free. It\'s the best neighborhood for pre-match and post-match dining in the city.',
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
    tips:['Reservations open 30 days in advance on OpenTable','Ask about the chef\'s tasting menu','The pasta is hand-made daily — always order one','Book at least 3 weeks ahead for weekend dinners']
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
    desc:'Modern Tex-Mex with bold flavors. The queso is the stuff of local legend.',
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
  { slug:'noodle-wave', name:'Noodle Wave', stars:5, cuisine:'Halal · Thai', cat:'halal', price:'$$', area:'Richardson',
    desc:'Halal-certified Thai food with 5 DFW locations. Pad Thai, curries, stir fry, and noodle dishes — all zabihah halal since 2003.',
    long:"Noodle Wave has been the go-to halal Thai restaurant in the Dallas area since 2003, and for good reason. Chef Rosie's recipes span traditional Thai to fusion — pad Thai, penang curry, almond sriracha chicken, cashew udon noodles, and freshly fried spring rolls. With 5 locations across DFW including Richardson and Irving, it's the most accessible halal option for World Cup visitors. The Richardson location is closest to downtown Dallas via DART.",
    address:'1490 W Spring Valley Rd, Richardson, TX 75080', hours:'Daily 11am–10pm',
    phone:'+1 (972) 690-3637', tags:['HALAL CERTIFIED','Thai','5 DFW Locations'],
    website:'https://www.noodlewave.com', gmaps:'https://maps.google.com/?q=Noodle+Wave+Richardson+TX',
    tips:['Cashew chicken udon and penang curry are the standout dishes','Richardson location on Spring Valley Rd is the original and most popular','DART Red Line to Arapaho Center station is close by','No alcohol served on premises — fully halal environment']
  },
  { slug:'new-york-eats', name:'New York Eats', stars:5, cuisine:'Halal · Mediterranean · American', cat:'halal', price:'$', area:'Arlington',
    desc:'New York-style halal street cart food right near AT&T Stadium. Chicken and gyro platters, wraps, and burgers — all zabihah halal since 2014.',
    long:"New York Eats brings the legendary New York halal cart experience to Arlington, Texas. Hand-cut zabihah halal chicken and gyro, served over seasoned basmati rice with their legendary white sauce and hot sauce, both made in-house. The Manhattan Mix Plate is the signature order. Located just minutes from AT&T Stadium near UT Arlington, this is the most convenient halal option for match-day visitors. Available on Uber Eats and Grubhub for hotel delivery.",
    address:'604 Doug Russell Rd, Suite B, Arlington, TX 76010', hours:'Mon & Wed-Sun 11am-11:30pm, Tue 4pm-11:30pm',
    phone:'+1 (682) 593-1428', tags:['HALAL CERTIFIED','Near Stadium','Delivery Available'],
    website:'http://www.newyorkeats.net', gmaps:'https://maps.google.com/?q=New+York+Eats+Arlington+TX',
    tips:['Manhattan Mix Plate is the must-order — chicken and gyro over rice with white sauce','Only 10 minutes from AT&T Stadium — perfect before or after a match','Available on Uber Eats and Grubhub for delivery to your hotel','Open until 11:30pm — great post-match dinner option']
  },
  { slug:'yemandi', name:'Yemandi Yemeni Cuisine', stars:5, cuisine:'Halal · Yemeni', cat:'halal', price:'$$', area:'Richardson',
    desc:"Dallas's most viral halal restaurant. Authentic Yemeni mandi — slow-roasted lamb and chicken over fragrant spiced rice, handmade bread from a tandoor oven, and traditional floor seating. 6 million TikTok views and counting.",
    long:"Yemandi opened in April 2025 and became one of the most talked-about restaurants in Dallas almost overnight — a TikTok video racked up nearly 6 million views within weeks. Hidden in a Richardson shopping plaza, the restaurant serves authentic Yemeni mandi: slow-cooked lamb or chicken over perfectly spiced basmati rice, made from scratch daily. The traditional Sunnah floor-seating booths set it apart from anything else in Dallas. Portions are enormous and designed for sharing — come hungry and bring friends. Only halal meats, always fresh.",
    address:'888 S Greenville Ave, Unit 210, Richardson, TX 75081', hours:'Mon-Thu 11am-10pm · Fri-Sun 11am-11pm',
    phone:'+1 (214) 377-7999', tags:['HALAL CERTIFIED','Viral on TikTok','Traditional Floor Seating'],
    website:'https://www.yemandi.com', gmaps:'https://maps.google.com/?q=Yemandi+Yemeni+Cuisine+Richardson+TX',
    tips:['Order the Lamb Mandi — the signature dish and the reason for the 6M TikTok views','Traditional floor seating is available — remove shoes and settle in','Portions are massive and meant for sharing — 2 people can share one mandi platter','Near Noodle Wave and Afrah on S Greenville Ave — make a halal food crawl of Richardson']
  },
  { slug:'afrah-mediterranean', name:'Afrah Mediterranean', stars:5, cuisine:'Halal · Mediterranean', cat:'halal', price:'$$', area:'Richardson',
    desc:'Full-service halal Mediterranean restaurant with a bakery. Voted best Mediterranean in Dallas multiple times.',
    long:'Afrah is a Richardson institution — a sprawling halal Mediterranean restaurant with a full bakery attached. The menu covers Lebanese, Syrian, and Palestinian dishes with exceptional depth. The fattoush salad is the best in Dallas, the kafta kebabs are charcoal-grilled, and the pastry case is loaded with fresh baklava, knafeh, and maamoul. For World Cup visitors from the Middle East, this is the closest thing to home.',
    address:'200 N Central Expy, Richardson, TX 75080', hours:'Daily 10am–11pm',
    phone:'+1 (972) 671-7676', tags:['HALAL CERTIFIED','Bakery & Restaurant','Best in Dallas'],
    website:'https://www.afrahrestaurant.com', gmaps:'https://maps.google.com/?q=Afrah+Mediterranean+Richardson+TX',
    tips:['Order the knafeh at the bakery counter — it\'s made fresh daily','The fattoush salad is unmissable','Busy on weekends — arrive before 12:30pm or after 2pm for lunch','The bakery items make great gifts to take back to the hotel']
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

  // Determine active category
  function getActiveCategory() {
    for (const cat of SITE.navCategories) {
      for (const item of cat.items) {
        if (currentPath === item.href.replace(/^\//, '') || activePage === item.href.replace(/^\//, '').replace('.html','')) {
          return cat.key;
        }
      }
    }
    return null;
  }
  const activeCat = getActiveCategory();

  nav.innerHTML = `
    <div style="position:absolute;bottom:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#002868 33.3%,#BF0A30 33.3%,#BF0A30 66.6%,#F0EDE8 66.6%);opacity:0.7;z-index:1"></div>
    <a class="logo" href="${base}index.html">⚽ Dallas<span class="g">2026</span></a>
    <ul class="nav-links nav-cats">
      ${SITE.navCategories.map(cat => {
        const isActiveCat = activeCat === cat.key;
        const catLabel = t(cat.labelKey) || cat.labelKey;
        return `<li class="nav-cat-item${isActiveCat ? ' active-cat' : ''}">
          <button class="nav-cat-btn${isActiveCat ? ' active' : ''}" onclick="toggleDropdown(this)" aria-expanded="false" data-catkey="${cat.labelKey}">
            ${catLabel} <span class="nav-caret">▾</span>
          </button>
          <div class="nav-dropdown">
            ${cat.items.map(item => {
              const href = base + item.href.replace(/^\//, '');
              const fileName = item.href.replace(/^\//, '');
              const isActive = currentPath === fileName;
              const itemLabel = t(item.labelKey) || item.labelKey;
              const itemSub = t(item.subKey) || item.subKey;
              return `<a href="${href}" class="nav-dd-item${isActive ? ' active' : ''}" data-labelkey="${item.labelKey}" data-subkey="${item.subKey}">
                <span class="nav-dd-label">${itemLabel}</span>
                <span class="nav-dd-sub">${itemSub}</span>
              </a>`;
            }).join('')}
          </div>
        </li>`;
      }).join('')}
    </ul>
    <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
      <div class="lang-switcher">
        <button class="lang-btn active" onclick="setLang('en')">EN</button>
        <button class="lang-btn" onclick="setLang('es')">ES</button>
        <button class="lang-btn" onclick="setLang('fr')">FR</button>
        <button class="lang-btn" onclick="setLang('nl')">NL</button>
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

  // Re-translate nav on language change
  if (!window._navLangHandlerSet) {
    document.addEventListener('langchange', function() {
      // Update category button labels
      document.querySelectorAll('[data-catkey]').forEach(el => {
        const key = el.getAttribute('data-catkey');
        const translated = t(key);
        if (translated) {
          // For buttons: update text but keep the caret span
          if (el.tagName === 'BUTTON') {
            const caret = el.querySelector('.nav-caret');
            el.textContent = translated + ' ';
            if (caret) el.appendChild(caret);
          } else {
            el.textContent = el.getAttribute('data-icon') + ' ' + translated;
          }
        }
      });
      // Update dropdown item labels and subs
      document.querySelectorAll('[data-labelkey]').forEach(el => {
        const labelKey = el.getAttribute('data-labelkey');
        const subKey = el.getAttribute('data-subkey');
        const labelEl = el.querySelector('.nav-dd-label');
        const subEl = el.querySelector('.nav-dd-sub');
        if (labelEl && t(labelKey)) labelEl.textContent = t(labelKey);
        if (subEl && subKey && t(subKey)) subEl.textContent = t(subKey);
        // Mobile nav links (no children)
        if (!labelEl && t(labelKey)) el.textContent = t(labelKey);
      });
    });
    window._navLangHandlerSet = true;
  }

  // Close dropdown when clicking outside
  if (!window._navClickHandlerSet) {
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav-cat-item')) {
        document.querySelectorAll('.nav-cat-btn').forEach(b => {
          b.setAttribute('aria-expanded', 'false');
          b.closest('.nav-cat-item').classList.remove('dd-open');
        });
      }
    });
    window._navClickHandlerSet = true;
  }

  // Mobile drawer with categories
  if (!document.getElementById('mobile-nav-drawer')) {
    const drawer = document.createElement('div');
    drawer.id = 'mobile-nav-drawer';
    drawer.className = 'mobile-nav-drawer';
    drawer.setAttribute('aria-hidden', 'true');
    drawer.innerHTML = `
      <div style="padding:.5rem 1.25rem 1rem;border-bottom:1px solid var(--border);margin-bottom:.5rem">
        ${SITE.navCategories.map(cat => `
          <div style="margin-bottom:1rem">
            <div style="font-family:var(--fh);font-size:.62rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--red);margin-bottom:.5rem" data-catkey="${cat.labelKey}">${cat.icon} ${t(cat.labelKey) || cat.labelKey}</div>
            ${cat.items.map(item => {
              const href = base + item.href.replace(/^\//, '');
              const fileName = item.href.replace(/^\//, '');
              const isActive = currentPath === fileName;
              return `<a href="${href}" class="mobile-nav-link${isActive ? ' active' : ''}" onclick="closeMobileNav()" data-labelkey="${item.labelKey}">${t(item.labelKey) || item.labelKey}</a>`;
            }).join('')}
          </div>
        `).join('')}
      </div>
      <div style="padding:1rem 1.25rem">
        <div style="font-family:var(--fh);font-size:.65rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:var(--muted);margin-bottom:.75rem">Language</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          <button class="lang-btn active" onclick="setLang('en');closeMobileNav()">EN — English</button>
          <button class="lang-btn" onclick="setLang('es');closeMobileNav()">ES — Español</button>
          <button class="lang-btn" onclick="setLang('fr');closeMobileNav()">FR — Français</button>
          <button class="lang-btn" onclick="setLang('nl');closeMobileNav()">NL — Nederlands</button>
        </div>
      </div>`;
    document.body.insertBefore(drawer, document.body.firstChild);
  }
}

function toggleDropdown(btn) {
  const item = btn.closest('.nav-cat-item');
  const isOpen = item.classList.contains('dd-open');
  // Close all
  document.querySelectorAll('.nav-cat-item.dd-open').forEach(el => {
    el.classList.remove('dd-open');
    el.querySelector('.nav-cat-btn').setAttribute('aria-expanded', 'false');
  });
  // Open this one if it was closed
  if (!isOpen) {
    item.classList.add('dd-open');
    btn.setAttribute('aria-expanded', 'true');
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
          <li><a href="https://forecast.weather.gov/MapClick.php?lat=32.8975&lon=-97.0444" target="_blank" rel="noopener">Weather Alerts ↗</a></li>
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
      document.getElementById('ww-body').innerHTML = `<span style="font-size:.78rem;color:var(--muted)">Weather unavailable. <a href="https://forecast.weather.gov/MapClick.php?lat=32.8975&lon=-97.0444" target="_blank" style="color:var(--gold)">NWS Dallas ↗</a></span>`;
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
    nav_logistics:'Get There', nav_fanzones:'Fan Zones', nav_airport:'Airport',
    nav_accommodation:'Stay', nav_budget:'Budget', nav_shopping:'Shopping',
    nav_tickets:'Tickets', nav_daytrips:'Day Trips', nav_phrases:'Phrases', nav_halal:'Halal', nav_groups:'Groups',
    nav_checklist:'Checklist', nav_survival:'Survival', nav_families:'Families', nav_weather:'Weather',

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
    mexican_tab:'Mexican', asian_tab:'Asian', fastfood_tab:'Fast Food',
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
    bk_esim_label: 'US eSIM', bk_esim_badge: 'Essential',
    bk_esim_cta: 'Get US eSIM',
    bk_esim_desc_s: 'Activate a US eSIM before you land.',
    bk_esim_desc: 'Stay connected from the moment you land. US Mobile eSIM works on all major US networks — activate before you fly, no SIM swap needed.',
    
    // ── NEW PAGES ──────────────────────────────
    // Tickets
    tkt_label:'Match Tickets', tkt_title:'Ticket Guide',
    tkt_sub:'Everything you need to know about buying tickets for FIFA World Cup 2026 matches in Dallas.',
    tkt_official_label:'Official Tickets', tkt_official_title:'Buy from FIFA Direct',
    tkt_official_warning:'Always buy official first. The only authorised source is FIFA.com/tickets.',
    tkt_cats_label:'Ticket Categories', tkt_scam_label:'Scam Warning',
    tkt_scam_title:"Don't Get Scammed", tkt_stadium_label:'At the Stadium',
    tkt_stadium_title:'Using Your Ticket',
    tkt_resale_label:'Resale Market', tkt_resale_title:'If Official Tickets Are Sold Out',
    // Fan Zones
    fz_label:'No Ticket? No Problem', fz_title:'Fan Zones & Watch Parties',
    fz_sub:"You don't need a match ticket to experience the World Cup in Dallas.",
    fz_official_label:'Official Venue', fz_official_title:'FIFA Fan Festival',
    fz_tips_label:'Planning Tips', fz_tips_title:'Fan Zone Advice',
    // Airport
    ap_label:'Arriving in Dallas', ap_title:'Dallas Airport Guide',
    ap_sub:'DFW is one of the largest airports in the world. Here is everything you need.',
    ap_primary_label:'Primary Airport', ap_step_label:'When You Land',
    ap_terminal_label:'Terminal Guide', ap_terminals_title:'Which Terminal Are You In?',
    ap_secondary_label:'Secondary Airport', ap_tips_label:'Essential Tips',
    ap_tips_title:"Don't Make These Mistakes",
    // Accommodation
    acc_label:'Where to Stay', acc_title:'Accommodation Guide',
    acc_sub:'Arlington, downtown Dallas, or Fort Worth? Here is the honest breakdown.',
    acc_decision_label:'The Big Decision', acc_decision_title:'Arlington vs Dallas vs Fort Worth',
    acc_hotels_label:'Recommended Hotels', acc_hotels_title:"Where We'd Stay",
    acc_tips_label:'Booking Advice', acc_tips_title:'Book Early. Very Early.',
    // Budget
    bud_label:'Financial Planning', bud_title:'Dallas Budget Guide',
    bud_sub:'The honest truth about what a week in Dallas actually costs.',
    bud_tiers_label:'Daily Budget by Tier', bud_tiers_title:'How Much Will You Spend?',
    bud_prices_label:'What Things Cost', bud_prices_title:'Price Reality Check',
    bud_tip_label:'Tipping Culture', bud_tip_title:'Tipping in Texas',
    bud_save_label:'Save Money', bud_save_title:'Budget Smart Tips',
    // Shopping
    shop_label:'Retail Therapy', shop_title:'Shopping in Dallas',
    shop_sub:'Dallas is a world-class shopping destination — from luxury malls to Texas-made goods.',
    shop_malls_label:'Major Shopping Centers', shop_malls_title:'The Big Malls',
    shop_souv_label:'What to Buy', shop_souv_title:'Authentic Texas Souvenirs',
    shop_intl_label:'International Shoppers', shop_intl_title:'Tax & Shopping Tips',
    // Groups
    grp_label:'Travelling Together', grp_title:'Group Travel Guide',
    grp_sub:'Travelling with a supporters club or group of 10+? Here is everything you need.',
    grp_accom_label:'Group Accommodation', grp_accom_title:'Staying Together as a Group',
    grp_transport_label:'Getting to the Stadium', grp_transport_title:'Group Transport to AT&T Stadium',
    grp_meet_label:'Finding Each Other', grp_meet_title:'Meeting Points & Communication',
    grp_clubs_label:'Supporters Clubs', grp_clubs_title:"Connect with Your Nation's Fans",
    grp_checklist_label:'Group Checklist', grp_checklist_title:'Before You Travel',
    // Day Trips
    dt_label:'Beyond Dallas', dt_title:'Day Trips from Dallas',
    dt_sub:'Most World Cup visitors have 7–14 days. Texas has some unique destinations nearby.',
    dt_fw_label:'30 Minutes Away', dt_fw_title:'Fort Worth Stockyards',
    dt_austin_label:'3 Hours Away', dt_austin_title:'Austin — Live Music Capital',
    dt_sa_label:'4.5 Hours Away', dt_sa_title:'San Antonio — The Alamo & River Walk',
    dt_waco_label:'1.5 Hours Away', dt_waco_title:'Waco — Magnolia Market',
    // Halal
    hal_label:'Muslim Visitor Guide', hal_title:'Halal Food & Muslim Guide',
    hal_sub:'Dallas has a large Muslim community — halal food is genuinely easy to find.',
    hal_key_label:'Key Info', hal_key_title:'Dallas for Muslim Visitors',
    hal_rest_label:'Halal Restaurants', hal_rest_title:'Where to Eat',
    hal_mosque_label:'Mosques & Prayer', hal_mosque_title:'Prayer Facilities in Dallas',
    hal_tips_label:'Practical Tips', hal_tips_title:'Muslim-Friendly Travel Tips',
    // Phrases
    phr_label:'Speaking Texan', phr_title:'Phrases & Culture Guide',
    phr_sub:'America and Texas have their own rules — spoken and unspoken.',
    phr_slang_label:'Essential Texas Slang', phr_slang_title:'Words You Will Hear',
    phr_wrong_label:'Things You Will Get Wrong', phr_wrong_title:'Cultural Differences That Catch People Out',
    phr_useful_label:'Useful Phrases', phr_useful_title:'What to Actually Say',
    phr_temp_label:'Temperature Converter', phr_temp_title:'Fahrenheit Quick Reference',
    // Map
    map_label:'Navigate Dallas', map_title:'Interactive Map',
    map_stadium:'AT&T Stadium', map_dart:'DART Stations', map_hotels:'Hotels',
    map_fanzone:'Fan Festival', map_rest:'Restaurants',
    // Families - boxes
    fam_tip_heat:'Beat the Heat', fam_tip_dart:'DART Accessible',
    fam_tip_free:'Free or Discounted', fam_tip_combo:'Buy Combo Tickets',
    // Weather - boxes
    wx_june:'June', wx_july:'July', wx_tips_label:'Weather Tips',
    wx_tips_title:'Staying Safe in Dallas Summer Heat',
    // Explore page boxes
    exp_section_rest:'Restaurants', exp_section_nbh:'Neighborhoods',
    exp_nbh_label:'Explore by Neighborhood',
        
    // ── NAV CATEGORY + ITEM LABELS ──
    cat_matches:'Matches',
    cat_transport:'Getting There',
    cat_stay:'Stay & Budget',
    cat_food:'Eat & Drink',
    cat_plan:'Plan',
    nav_item_schedule:'Match Schedule',
    nav_item_schedule_sub:'All 9 Dallas fixtures',
    nav_item_tickets:'Tickets',
    nav_item_tickets_sub:'How to buy & scam warnings',
    nav_item_fanzones:'Fan Zones',
    nav_item_fanzones_sub:'Watch without a ticket',
    nav_item_map:'Interactive Map',
    nav_item_map_sub:'Stadium, hotels, transit',
    nav_item_airport:'Airport Guide',
    nav_item_airport_sub:'DFW & Love Field',
    nav_item_transit:'Stadium Transit',
    nav_item_transit_sub:'TRE, shuttle, parking',
    nav_item_groups:'Group Travel',
    nav_item_groups_sub:'Supporters clubs',
    nav_item_daytrips:'Day Trips',
    nav_item_daytrips_sub:'Fort Worth, Austin, San Antonio',
    nav_item_stay:'Where to Stay',
    nav_item_stay_sub:'Arlington vs Dallas vs FW',
    nav_item_budget:'Budget Guide',
    nav_item_budget_sub:'How much does it cost?',
    nav_item_shopping:'Shopping',
    nav_item_shopping_sub:'Malls, outlets & souvenirs',
    nav_item_explore:'Explore Dallas',
    nav_item_explore_sub:'Neighborhoods & restaurants',
    nav_item_halal:'Halal & Muslim Guide',
    nav_item_halal_sub:'Halal food, mosques & tips',
    nav_item_checklist:'Match Day Checklist',
    nav_item_checklist_sub:'Everything to pack',
    nav_item_survival:'Survival Guide',
    nav_item_survival_sub:'Heat, money, safety',
    nav_item_phrases:'Phrases & Culture',
    nav_item_phrases_sub:'Texas slang & customs',
    nav_item_families:'Families',
    nav_item_families_sub:'Kids activities',
    nav_item_weather:'Weather',
    nav_item_weather_sub:'Live forecast',
    
    // ── SEC-TITLE TRANSLATIONS [EN] ──
    tkt_official_title:'Buy from FIFA Direct',
    tkt_resale_title:'If Official Tickets Are Sold Out',
    tkt_scam_title:'Don\'t Get Scammed',
    tkt_stadium_title:'Using Your Ticket',
    fz_official_title:'FIFA Fan Festival',
    fz_tips_title:'Fan Zone Advice',
    ap_terminals_title:'Which Terminal Are You In?',
    ap_tips_title:'Don\'t Make These Mistakes',
    acc_decision_title:'Arlington vs Dallas vs Fort Worth',
    acc_hotels_title:'Where We\'d Stay',
    acc_tips_title:'Book Early. Very Early.',
    bud_tiers_title:'How Much Will You Spend?',
    bud_prices_title:'Price Reality Check',
    bud_tip_title:'Tipping in Texas',
    bud_save_title:'Budget Smart Tips',
    shop_malls_title:'The Big Malls',
    shop_souv_title:'Authentic Texas Souvenirs',
    shop_intl_title:'Tax & Shopping Tips',
    grp_accom_title:'Staying Together as a Group',
    grp_transport_title:'Group Transport to AT&T Stadium',
    grp_meet_title:'Meeting Points & Communication',
    grp_clubs_title:'Connect with Your Nation\'s Fans',
    grp_checklist_title:'Before You Travel',
    dt_fw_title:'Fort Worth Stockyards',
    dt_austin_title:'Austin — Live Music Capital of the World',
    dt_sa_title:'San Antonio — The Alamo & River Walk',
    dt_waco_title:'Waco — Magnolia Market',
    hal_key_title:'Dallas for Muslim Visitors',
    hal_rest_title:'Where to Eat',
    hal_mosque_title:'Prayer Facilities in Dallas',
    hal_tips_title:'Muslim-Friendly Travel Tips',
    phr_slang_title:'Words You\'ll Hear',
    phr_wrong_title:'Cultural Differences That Catch People Out',
    phr_useful_title:'What to Actually Say',
    phr_temp_title:'Fahrenheit Quick Reference',
    footer_note:'Fan-made visitor guide for FIFA World Cup 2026 · Not affiliated with FIFA or the City of Dallas',
    booking_sub: 'Find the best deals on hotels, flights, and transport to Dallas.',
    bk_deals: 'Deals',
    bk_hotels_label: 'Hotels',
    bk_hotels_badge: 'Most Popular',
    bk_hotels_cta: 'Search Hotels',
    bk_hotels_desc_s: 'Best rates, free cancellation on most rooms.',
    bk_hotels_desc: 'Compare 500+ Dallas hotels. Free cancellation on most rooms.',
    bk_flights_label: 'Flights to DFW',
    bk_flights_badge: 'Best for Intl',
    bk_flights_cta: 'Search Flights',
    bk_flights_desc_s: 'Search every airline. Best prices for June 2026.',
    bk_flights_desc: 'Search every airline into DFW. Set fare alerts for June-July 2026.',
    bk_cars_label: 'Rental Cars',
    bk_cars_badge: 'Stadium Essential',
    bk_cars_cta: 'Compare Cars',
    bk_cars_desc_s: 'Pick up at DFW Airport. Essential for Arlington.',
    bk_cars_desc: 'Pick up at DFW or downtown Dallas. Essential for AT&T Stadium.',
    bk_bus_label: 'Bus Tickets',
    bk_bus_badge: 'Budget Option',
    bk_bus_cta: 'Find Bus Routes',
    bk_bus_desc_s: 'Budget routes from Houston, Austin and OKC.',
    bk_bus_desc: 'Budget bus routes from Houston, Austin, San Antonio. From $15.',
    bk_turo_label: 'Turo Car Sharing',
    bk_turo_badge: 'Trending',
    bk_turo_cta: 'Browse Turo',
    bk_turo_desc_s: 'Rent unique cars from local hosts.',
    bk_turo_desc: 'Rent from local car owners - often cheaper than rentals.',
    bk_act_label: 'Tours and Activities',
    bk_act_badge: 'Experiences',
    bk_act_cta: 'Browse Activities',
    bk_act_desc_s: 'Stadium tours, Stockyards, Dallas experiences.',
    bk_act_desc: 'Stadium tours, food tours, and cultural experiences. Book ahead.',
    bk_airbnb_label: 'VRBO Vacation Rentals',
    bk_airbnb_badge: 'Homes',
    bk_airbnb_cta: 'Search VRBO',
    bk_airbnb_desc_s: 'Apartments and houses near Dallas.',
    bk_airbnb_desc: 'Entire homes and apartments on VRBO near AT&T Stadium. Great for groups of 4+.',
    bk_eats_label: 'Food Delivery',
    bk_eats_badge: 'Delivery',
    bk_eats_cta: 'Order Food',
    bk_eats_desc_s: 'Dallas restaurants delivered to your hotel.',
    bk_eats_desc: 'Get the best Dallas restaurants delivered to your hotel.',
    bk_uber_label: 'Ride to the Stadium',
    bk_uber_badge: 'Rides',
    bk_uber_cta: 'Get Uber',
    bk_uber_desc_s: 'Uber rides to AT&T Stadium on match days.',
    bk_uber_desc: 'New to Uber? Sign up before match day. Surge pricing on match days.',
    bk_ubereats_label: 'Food Delivery', bk_ubereats_badge: 'Delivery',
    bk_ubereats_cta: 'Order Food', bk_ubereats_desc_s: 'Uber Eats delivery across Dallas.',
    bk_ubereats_desc: 'Order from hundreds of Dallas restaurants. Great for hotel nights between matches.',
    pages:'Pages', official_links:'Official Links', emergency:'Emergency',
  },

  es: {
    nav_matches:'Partidos', nav_map:'Mapa', nav_explore:'Explorar',
    nav_logistics:'Cómo Llegar', nav_fanzones:'Fanzones', nav_airport:'Aeropuerto',
    nav_accommodation:'Alojamiento', nav_budget:'Presupuesto', nav_shopping:'Compras',
    nav_tickets:'Entradas', nav_daytrips:'Excursiones', nav_phrases:'Frases', nav_halal:'Halal', nav_groups:'Grupos',
    nav_checklist:'Lista', nav_survival:'Guía', nav_families:'Familias', nav_weather:'Clima',

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
    mexican_tab:'Mexicana', asian_tab:'Asiática', fastfood_tab:'Comida Rápida',
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

    bk_esim_label: 'eSIM EE.UU.', bk_esim_badge: 'Esencial',
    bk_esim_cta: 'Obtener eSIM',
    bk_esim_desc_s: 'Activa una eSIM de EE.UU. antes de llegar.',
    bk_esim_desc: 'Conecítate desde que aterrizas. US Mobile eSIM funciona en las principales redes de EE.UU.',
    
    // ── NUEVAS PÁGINAS ──────────────────────────
    tkt_label:'Entradas', tkt_title:'Guía de Entradas',
    tkt_sub:'Todo lo que necesitas saber sobre comprar entradas para los partidos en Dallas.',
    tkt_official_label:'Entradas Oficiales', tkt_official_title:'Compra en FIFA Directo',
    tkt_official_warning:'Compra siempre oficial primero. La única fuente autorizada es FIFA.com/tickets.',
    tkt_cats_label:'Categorías de Entradas', tkt_scam_label:'Advertencia de Estafa',
    tkt_scam_title:'No Te Estafes', tkt_stadium_label:'En el Estadio',
    tkt_stadium_title:'Usando Tu Entrada',
    tkt_resale_label:'Mercado de Reventa', tkt_resale_title:'Si las Entradas Oficiales Se Agotan',
    fz_label:'¿Sin Entrada? Sin Problema', fz_title:'Zonas de Fans y Partidos en Pantalla',
    fz_sub:'No necesitas entrada para vivir el Mundial en Dallas.',
    fz_official_label:'Lugar Oficial', fz_official_title:'FIFA Fan Festival',
    fz_tips_label:'Consejos', fz_tips_title:'Consejos para la Fan Zone',
    ap_label:'Llegando a Dallas', ap_title:'Guía del Aeropuerto de Dallas',
    ap_sub:'DFW es uno de los aeropuertos más grandes del mundo. Aquí está todo lo que necesitas.',
    ap_primary_label:'Aeropuerto Principal', ap_step_label:'Al Llegar',
    ap_terminal_label:'Guía de Terminales', ap_terminals_title:'¿En Qué Terminal Estás?',
    ap_secondary_label:'Aeropuerto Secundario', ap_tips_label:'Consejos Esenciales',
    ap_tips_title:'No Cometas Estos Errores',
    acc_label:'Dónde Alojarse', acc_title:'Guía de Alojamiento',
    acc_sub:'¿Arlington, centro de Dallas o Fort Worth? Aquí está el análisis honesto.',
    acc_decision_label:'La Gran Decisión', acc_decision_title:'Arlington vs Dallas vs Fort Worth',
    acc_hotels_label:'Hoteles Recomendados', acc_hotels_title:'Dónde Nos Alojaríamos',
    acc_tips_label:'Consejos de Reserva', acc_tips_title:'Reserva Pronto. Muy Pronto.',
    bud_label:'Planificación Financiera', bud_title:'Guía de Presupuesto de Dallas',
    bud_sub:'La verdad honesta sobre cuánto cuesta una semana en Dallas.',
    bud_tiers_label:'Presupuesto Diario por Nivel', bud_tiers_title:'¿Cuánto Gastarás?',
    bud_prices_label:'Lo Que Cuestan las Cosas', bud_prices_title:'Verificación de Precios',
    bud_tip_label:'Cultura de Propinas', bud_tip_title:'Las Propinas en Texas',
    bud_save_label:'Ahorra Dinero', bud_save_title:'Consejos para Ahorrar',
    shop_label:'Compras', shop_title:'Compras en Dallas',
    shop_sub:'Dallas es un destino de compras de clase mundial.',
    shop_malls_label:'Centros Comerciales', shop_malls_title:'Los Grandes Centros',
    shop_souv_label:'Qué Comprar', shop_souv_title:'Souvenirs Auténticos de Texas',
    shop_intl_label:'Compradores Internacionales', shop_intl_title:'Consejos de Impuestos y Compras',
    grp_label:'Viajando Juntos', grp_title:'Guía de Viaje en Grupo',
    grp_sub:'¿Viajando con una peña o grupo de 10+? Aquí está todo lo que necesitas.',
    grp_accom_label:'Alojamiento Grupal', grp_accom_title:'Alojarse Juntos como Grupo',
    grp_transport_label:'Llegar al Estadio', grp_transport_title:'Transporte Grupal al AT&T Stadium',
    grp_meet_label:'Encontrarse', grp_meet_title:'Puntos de Encuentro y Comunicación',
    grp_clubs_label:'Peñas', grp_clubs_title:'Conéctate con los Fans de Tu Nación',
    grp_checklist_label:'Lista del Grupo', grp_checklist_title:'Antes de Viajar',
    dt_label:'Más Allá de Dallas', dt_title:'Excursiones desde Dallas',
    dt_sub:'La mayoría de visitantes tiene 7–14 días. Texas tiene destinos únicos cerca.',
    dt_fw_label:'A 30 Minutos', dt_fw_title:'Fort Worth Stockyards',
    dt_austin_label:'A 3 Horas', dt_austin_title:'Austin — Capital de la Música en Vivo',
    dt_sa_label:'A 4.5 Horas', dt_sa_title:'San Antonio — El Álamo y el River Walk',
    dt_waco_label:'A 1.5 Horas', dt_waco_title:'Waco — Magnolia Market',
    hal_label:'Guía para Visitantes Musulmanes', hal_title:'Comida Halal y Guía Musulmana',
    hal_sub:'Dallas tiene una gran comunidad musulmana — la comida halal es fácil de encontrar.',
    hal_key_label:'Info Clave', hal_key_title:'Dallas para Visitantes Musulmanes',
    hal_rest_label:'Restaurantes Halal', hal_rest_title:'Dónde Comer',
    hal_mosque_label:'Mezquitas y Oración', hal_mosque_title:'Instalaciones de Oración en Dallas',
    hal_tips_label:'Consejos Prácticos', hal_tips_title:'Consejos para Visitantes Musulmanes',
    phr_label:'Hablando Tejano', phr_title:'Guía de Frases y Cultura',
    phr_sub:'América y Texas tienen sus propias reglas — habladas y no habladas.',
    phr_slang_label:'Jerga Texana Esencial', phr_slang_title:'Palabras Que Escucharás',
    phr_wrong_label:'Lo Que Harás Mal', phr_wrong_title:'Diferencias Culturales Que Sorprenden',
    phr_useful_label:'Frases Útiles', phr_useful_title:'Qué Decir Realmente',
    phr_temp_label:'Conversor de Temperatura', phr_temp_title:'Referencia Rápida de Fahrenheit',
    map_label:'Navega Dallas', map_title:'Mapa Interactivo',
    map_stadium:'AT&T Estadio', map_dart:'Estaciones DART', map_hotels:'Hoteles',
    map_fanzone:'Festival de Fans', map_rest:'Restaurantes',
    exp_section_rest:'Restaurantes', exp_section_nbh:'Barrios',
    exp_nbh_label:'Explorar por Barrio',
        
    // ── FAMILIES PAGE ──
    fam_label: 'Actividades Familiares',
    fam_title: 'Dallas en Familia',
    fam_sub: 'Las mejores actividades con niños en Dallas durante el Mundial — museos, parques temáticos, zoológicos y experiencias texanas.',
    fam_heat_warning: 'Aviso de calor extremo:',
    fam_heat_text: 'Dallas en junio y julio alcanza regularmente 38–40°C. Planifica actividades al aire libre por la mañana o después de las 5pm.',
    fam_acts_label: '10 Atracciones Familiares', fam_acts_title: 'Qué Hacer',
    fam_transit_label: 'Moverse con Niños', fam_transit_title: 'Guía de Transporte Familiar',
    fam_tab_all: 'Todas', fam_tab_museum: 'Museos', fam_tab_outdoors: 'Aire Libre',
    fam_tab_indoor: 'Interior', fam_tab_theme: 'Parques Temáticos', fam_tab_landmark: 'Monumentos',
    fam_tab_stadium: 'Estadios', fam_tab_dart: '🚆 Solo DART',
    fam_dart_yes: 'Accesible por DART', fam_dart_no: 'Coche/Uber',
    fam_duration: 'Duración', fam_age: 'Edad Recomendada',
    // ── WEATHER PAGE ──
    wx_june: 'Junio', wx_july: 'Julio', wx_tips_label: 'Consejos Meteorológicos',
    wx_tips_title: 'Mantenerse Seguro en el Calor de Verano de Dallas',
    // ── EXPLORE PAGE ──
    exp_section_rest: 'Restaurantes', exp_section_nbh: 'Barrios',
    exp_nbh_label: 'Explorar por Barrio',
    // ── AFFILIATE CARDS ──
    bk_hotels_label: 'Hoteles', bk_hotels_badge: 'Más Popular',
    bk_hotels_cta: 'Buscar Hoteles', bk_hotels_desc_s: 'Mejores tarifas, cancelación gratuita.',
    bk_hotels_desc: 'Compara 500+ hoteles en Dallas. Cancelación gratuita en la mayoría.',
    bk_flights_label: 'Vuelos a DFW', bk_flights_badge: 'Mejor para Intl',
    bk_flights_cta: 'Buscar Vuelos', bk_flights_desc_s: 'Busca todas las aerolíneas hacia DFW.',
    bk_flights_desc: 'Busca todas las aerolíneas hacia DFW. Activa alertas de precios para junio-julio 2026.',
    bk_cars_label: 'Coches de Alquiler', bk_cars_badge: 'Necesario en Texas',
    bk_cars_cta: 'Buscar Coches', bk_cars_desc_s: 'Compara precios de alquiler de coches en DFW.',
    bk_cars_desc: 'Compara precios de alquiler en DFW. Un coche es esencial para Arlington y excursiones.',
    bk_bus_label: 'Autobús Interurbano', bk_bus_badge: 'Económico',
    bk_bus_cta: 'Ver Rutas', bk_bus_desc_s: 'FlixBus desde/hacia Dallas.',
    bk_bus_desc: 'FlixBus conecta Dallas con Austin, San Antonio y Houston desde ~$20.',
    bk_turo_label: 'Alquiler Peer-to-Peer', bk_turo_badge: 'Alternativa',
    bk_turo_cta: 'Ver Coches', bk_turo_desc_s: 'Alquila coches de particulares en DFW.',
    bk_turo_desc: 'Alquila coches directamente de propietarios en DFW. Suele ser más barato que empresas tradicionales.',
    bk_activities_label: 'Tours y Actividades', bk_activities_badge: 'Local',
    bk_activities_cta: 'Explorar Tours', bk_activities_desc_s: 'Tours locales de Dallas en Viator.',
    bk_activities_desc: 'Tours guiados de Dallas, visitas a Fort Worth y experiencias únicas de Texas.',
    bk_uber_label: 'Viaje al Estadio', bk_uber_badge: 'Rides',
    bk_uber_cta: 'Obtener Uber', bk_uber_desc_s: 'Uber al AT&T Stadium los días de partido.',
    bk_uber_desc: '¿Nuevo en Uber? Regístrate y consigue tus primeros viajes con descuento.',
    bk_ubereats_label: 'Comida a Domicilio', bk_ubereats_badge: 'Entrega',
    bk_ubereats_cta: 'Pedir Comida', bk_ubereats_desc_s: 'Uber Eats en Dallas.',
    bk_ubereats_desc: 'Pide de cientos de restaurantes de Dallas. Genial para noches en el hotel.',
        
    // ── NAV CATEGORY + ITEM LABELS ──
    cat_matches:'Partidos',
    cat_transport:'Cómo Llegar',
    cat_stay:'Alojamiento y Presupuesto',
    cat_food:'Comer y Beber',
    cat_plan:'Planificar',
    nav_item_schedule:'Calendario',
    nav_item_schedule_sub:'Los 9 partidos de Dallas',
    nav_item_tickets:'Entradas',
    nav_item_tickets_sub:'Cómo comprar y evitar estafas',
    nav_item_fanzones:'Zonas de Fans',
    nav_item_fanzones_sub:'Ver sin entrada',
    nav_item_map:'Mapa Interactivo',
    nav_item_map_sub:'Estadio, hoteles, transporte',
    nav_item_airport:'Guía del Aeropuerto',
    nav_item_airport_sub:'DFW y Love Field',
    nav_item_transit:'Transporte al Estadio',
    nav_item_transit_sub:'TRE, lanzadera, parking',
    nav_item_groups:'Viaje en Grupo',
    nav_item_groups_sub:'Peñas y grupos',
    nav_item_daytrips:'Excursiones',
    nav_item_daytrips_sub:'Fort Worth, Austin, San Antonio',
    nav_item_stay:'Dónde Alojarse',
    nav_item_stay_sub:'Arlington vs Dallas vs FW',
    nav_item_budget:'Guía de Presupuesto',
    nav_item_budget_sub:'¿Cuánto cuesta?',
    nav_item_shopping:'Compras',
    nav_item_shopping_sub:'Centros comerciales y souvenirs',
    nav_item_explore:'Explorar Dallas',
    nav_item_explore_sub:'Barrios y restaurantes',
    nav_item_halal:'Guía Halal y Musulmana',
    nav_item_halal_sub:'Comida halal y mezquitas',
    nav_item_checklist:'Lista del Día del Partido',
    nav_item_checklist_sub:'Todo lo que llevar',
    nav_item_survival:'Guía de Supervivencia',
    nav_item_survival_sub:'Calor, dinero, seguridad',
    nav_item_phrases:'Frases y Cultura',
    nav_item_phrases_sub:'Jerga texana y costumbres',
    nav_item_families:'Familias',
    nav_item_families_sub:'Actividades para niños',
    nav_item_weather:'Tiempo',
    nav_item_weather_sub:'Previsión en directo',
    
    // ── SEC-TITLE TRANSLATIONS [ES] ──
    tkt_official_title:'Compra en FIFA Directamente',
    tkt_resale_title:'Si las Entradas Oficiales Se Agotan',
    tkt_scam_title:'No Te Estafes',
    tkt_stadium_title:'Usando Tu Entrada',
    fz_official_title:'FIFA Fan Festival',
    fz_tips_title:'Consejos para la Fan Zone',
    ap_terminals_title:'¿En Qué Terminal Estás?',
    ap_tips_title:'No Cometas Estos Errores',
    acc_decision_title:'Arlington vs Dallas vs Fort Worth',
    acc_hotels_title:'Dónde Nos Alojaríamos',
    acc_tips_title:'Reserva Pronto. Muy Pronto.',
    bud_tiers_title:'¿Cuánto Gastarás?',
    bud_prices_title:'Verificación de Precios',
    bud_tip_title:'Las Propinas en Texas',
    bud_save_title:'Consejos para Ahorrar',
    shop_malls_title:'Los Grandes Centros',
    shop_souv_title:'Souvenirs Auténticos de Texas',
    shop_intl_title:'Consejos de Impuestos y Compras',
    grp_accom_title:'Alojarse Juntos como Grupo',
    grp_transport_title:'Transporte Grupal al AT&T Stadium',
    grp_meet_title:'Puntos de Encuentro y Comunicación',
    grp_clubs_title:'Conéctate con los Fans de Tu Nación',
    grp_checklist_title:'Antes de Viajar',
    dt_fw_title:'Fort Worth Stockyards',
    dt_austin_title:'Austin — Capital de la Música en Vivo',
    dt_sa_title:'San Antonio — El Álamo y el River Walk',
    dt_waco_title:'Waco — Magnolia Market',
    hal_key_title:'Dallas para Visitantes Musulmanes',
    hal_rest_title:'Dónde Comer',
    hal_mosque_title:'Instalaciones de Oración en Dallas',
    hal_tips_title:'Consejos para Visitantes Musulmanes',
    phr_slang_title:'Palabras Que Escucharás',
    phr_wrong_title:'Diferencias Culturales Que Sorprenden',
    phr_useful_title:'Qué Decir Realmente',
    phr_temp_title:'Referencia Rápida de Fahrenheit',
    footer_note:'Guía de visitantes creada por fanáticos para la Copa Mundial FIFA 2026 · No afiliada con FIFA ni la Ciudad de Dallas',
    booking_sub: 'Encuentra las mejores ofertas en hoteles, vuelos y transporte a Dallas.',
    bk_deals: 'Ofertas',
    bk_hotels_label: 'Hoteles',
    bk_hotels_badge: 'Mas Popular',
    bk_hotels_cta: 'Buscar Hoteles',
    bk_hotels_desc_s: 'Mejores tarifas, cancelacion gratuita en la mayoria.',
    bk_hotels_desc: 'Compara 500+ hoteles en Dallas. Cancelacion gratuita en la mayoria.',
    bk_flights_label: 'Vuelos a DFW',
    bk_flights_badge: 'Mejor para Intl',
    bk_flights_cta: 'Buscar Vuelos',
    bk_flights_desc_s: 'Busca todas las aerolineas. Mejores precios.',
    bk_flights_desc: 'Busca todas las aerolineas hacia DFW. Configura alertas de precio.',
    bk_cars_label: 'Autos de Alquiler',
    bk_cars_badge: 'Esencial para Estadio',
    bk_cars_cta: 'Comparar Autos',
    bk_cars_desc_s: 'Recoge en Aeropuerto DFW. Esencial para Arlington.',
    bk_cars_desc: 'Recoge en DFW o centro de Dallas. Esencial para el estadio.',
    bk_bus_label: 'Boletos de Autobus',
    bk_bus_badge: 'Opcion Economica',
    bk_bus_cta: 'Buscar Rutas de Bus',
    bk_bus_desc_s: 'Rutas economicas desde Houston, Austin y OKC.',
    bk_bus_desc: 'Rutas de bus desde Houston, Austin, San Antonio. Desde $15.',
    bk_turo_label: 'Turo Carsharing',
    bk_turo_badge: 'Tendencia',
    bk_turo_cta: 'Ver Turo',
    bk_turo_desc_s: 'Alquila autos unicos de anfitriones locales.',
    bk_turo_desc: 'Alquila de propietarios locales - a menudo mas barato.',
    bk_act_label: 'Tours y Actividades',
    bk_act_badge: 'Experiencias',
    bk_act_cta: 'Ver Actividades',
    bk_act_desc_s: 'Tours del estadio, Stockyards, experiencias en Dallas.',
    bk_act_desc: 'Tours del estadio, gastronomia y experiencias culturales.',
    bk_airbnb_label: 'VRBO Alquileres',
    bk_airbnb_badge: 'Casas',
    bk_airbnb_cta: 'Buscar en VRBO',
    bk_airbnb_desc_s: 'Apartamentos y casas cerca de Dallas.',
    bk_airbnb_desc: 'Casas y apartamentos en VRBO cerca del estadio. Ideal para grupos.',
    bk_eats_label: 'Entrega de Comida',
    bk_eats_badge: 'Entrega',
    bk_eats_cta: 'Pedir Comida',
    bk_eats_desc_s: 'Restaurantes de Dallas entregados a tu hotel.',
    bk_eats_desc: 'Los mejores restaurantes de Dallas a tu hotel.',
    bk_uber_label: 'Viaje al Estadio',
    bk_uber_badge: 'Viajes',
    bk_uber_cta: 'Usar Uber',
    bk_uber_desc_s: 'Uber al estadio AT&T en dias de partido.',
    bk_uber_desc: 'Nuevo en Uber? Registrate antes del dia del partido.',
    pages:'Páginas', official_links:'Enlaces Oficiales', emergency:'Emergencias',
  },

  fr: {
    nav_matches:'Matchs', nav_map:'Carte', nav_explore:'Explorer',
    nav_logistics:'Y Aller', nav_fanzones:'Fan Zones', nav_airport:'Aéroport',
    nav_accommodation:'Hébergement', nav_budget:'Budget', nav_shopping:'Shopping',
    nav_tickets:'Billets', nav_daytrips:'Excursions', nav_phrases:'Phrases', nav_halal:'Halal', nav_groups:'Groupes',
    nav_checklist:'Liste',
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
    mexican_tab:'Mexicaine', asian_tab:'Asiatique', fastfood_tab:'Fast Food',
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

    bk_esim_label: 'eSIM USA', bk_esim_badge: 'Essentiel',
    bk_esim_cta: 'Obtenir eSIM',
    bk_esim_desc_s: 'Activez une eSIM US avant d\'atterrir.',
    bk_esim_desc: 'Connecté dès l\'atterrissage. US Mobile eSIM fonctionne sur tous les grands réseaux américains.',
    
    // ── NOUVELLES PAGES ──────────────────────────
    tkt_label:'Billets de Match', tkt_title:'Guide des Billets',
    tkt_sub:'Tout ce que vous devez savoir pour acheter des billets pour les matchs à Dallas.',
    tkt_official_label:'Billets Officiels', tkt_official_title:'Acheter chez FIFA Directement',
    tkt_official_warning:"Achetez toujours officiel en premier. La seule source autorisée est FIFA.com/tickets.",
    tkt_cats_label:'Catégories de Billets', tkt_scam_label:'Avertissement Arnaque',
    tkt_scam_title:'Ne Vous Faites Pas Arnaquer', tkt_stadium_label:'Au Stade',
    tkt_stadium_title:'Utiliser Votre Billet',
    tkt_resale_label:'Marché de Revente', tkt_resale_title:'Si les Billets Officiels Sont Épuisés',
    fz_label:'Pas de Billet? Pas de Problème', fz_title:'Fan Zones et Diffusions',
    fz_sub:"Vous n\'avez pas besoin d\'un billet pour vivre la Coupe du Monde à Dallas.",
    fz_official_label:'Lieu Officiel', fz_official_title:'FIFA Fan Festival',
    fz_tips_label:'Conseils', fz_tips_title:'Conseils pour la Fan Zone',
    ap_label:'Arriver à Dallas', ap_title:'Guide de l\'Aéroport de Dallas',
    ap_sub:'DFW est l\'un des plus grands aéroports du monde. Voici tout ce dont vous avez besoin.',
    ap_primary_label:'Aéroport Principal', ap_step_label:'À l\'Arrivée',
    ap_terminal_label:'Guide des Terminaux', ap_terminals_title:'Dans Quel Terminal Êtes-Vous?',
    ap_secondary_label:'Aéroport Secondaire', ap_tips_label:'Conseils Essentiels',
    ap_tips_title:'Ne Faites Pas Ces Erreurs',
    acc_label:'Où Séjourner', acc_title:'Guide d\'Hébergement',
    acc_sub:'Arlington, centre-ville de Dallas ou Fort Worth? Voici l\'analyse honnête.',
    acc_decision_label:'La Grande Décision', acc_decision_title:'Arlington vs Dallas vs Fort Worth',
    acc_hotels_label:'Hôtels Recommandés', acc_hotels_title:'Où Nous Séjournerions',
    acc_tips_label:'Conseils de Réservation', acc_tips_title:'Réservez Tôt. Très Tôt.',
    bud_label:'Planification Financière', bud_title:'Guide Budget de Dallas',
    bud_sub:'La vérité honnête sur le coût d\'une semaine à Dallas.',
    bud_tiers_label:'Budget Quotidien par Niveau', bud_tiers_title:'Combien Dépenserez-Vous?',
    bud_prices_label:'Ce Que Ça Coûte', bud_prices_title:'Vérification des Prix',
    bud_tip_label:'Culture du Pourboire', bud_tip_title:'Les Pourboires au Texas',
    bud_save_label:'Économiser', bud_save_title:'Conseils pour Économiser',
    shop_label:'Shopping', shop_title:'Shopping à Dallas',
    shop_sub:'Dallas est une destination shopping de classe mondiale.',
    shop_malls_label:'Centres Commerciaux', shop_malls_title:'Les Grands Centres',
    shop_souv_label:'Quoi Acheter', shop_souv_title:'Souvenirs Authentiques du Texas',
    shop_intl_label:'Acheteurs Internationaux', shop_intl_title:'Conseils Taxes et Shopping',
    grp_label:'Voyager Ensemble', grp_title:'Guide Voyage en Groupe',
    grp_sub:'Vous voyagez avec un club de supporters ou groupe de 10+?',
    grp_accom_label:'Hébergement Groupe', grp_accom_title:'Séjourner Ensemble en Groupe',
    grp_transport_label:'Aller au Stade', grp_transport_title:'Transport Groupe vers AT&T Stadium',
    grp_meet_label:'Se Retrouver', grp_meet_title:'Points de Rendez-Vous et Communication',
    grp_clubs_label:'Clubs de Supporters', grp_clubs_title:'Rejoignez les Fans de Votre Nation',
    grp_checklist_label:'Liste du Groupe', grp_checklist_title:'Avant de Voyager',
    dt_label:'Au-Delà de Dallas', dt_title:'Excursions depuis Dallas',
    dt_sub:'La plupart des visiteurs ont 7–14 jours. Le Texas a des destinations uniques.',
    dt_fw_label:'À 30 Minutes', dt_fw_title:'Fort Worth Stockyards',
    dt_austin_label:'À 3 Heures', dt_austin_title:'Austin — Capitale de la Musique Live',
    dt_sa_label:'À 4h30', dt_sa_title:'San Antonio — L\'Alamo et la River Walk',
    dt_waco_label:'À 1h30', dt_waco_title:'Waco — Magnolia Market',
    hal_label:'Guide Visiteurs Musulmans', hal_title:'Nourriture Halal et Guide Musulman',
    hal_sub:'Dallas a une grande communauté musulmane — la nourriture halal est facile à trouver.',
    hal_key_label:'Infos Clés', hal_key_title:'Dallas pour les Visiteurs Musulmans',
    hal_rest_label:'Restaurants Halal', hal_rest_title:'Où Manger',
    hal_mosque_label:'Mosquées et Prière', hal_mosque_title:'Lieux de Prière à Dallas',
    hal_tips_label:'Conseils Pratiques', hal_tips_title:'Conseils pour Visiteurs Musulmans',
    phr_label:'Parler Texan', phr_title:'Guide Phrases et Culture',
    phr_sub:"L'Amérique et le Texas ont leurs propres règles — parlées et non parlées.",
    phr_slang_label:'Argot Texan Essentiel', phr_slang_title:'Mots Que Vous Entendrez',
    phr_wrong_label:'Ce Que Vous Ferez Mal', phr_wrong_title:'Différences Culturelles Surprenantes',
    phr_useful_label:'Phrases Utiles', phr_useful_title:'Ce Qu\'il Faut Vraiment Dire',
    phr_temp_label:'Convertisseur de Température', phr_temp_title:'Référence Rapide Fahrenheit',
    map_label:'Naviguer Dallas', map_title:'Carte Interactive',
    map_stadium:'Stade AT&T', map_dart:'Stations DART', map_hotels:'Hôtels',
    map_fanzone:'Festival des Fans', map_rest:'Restaurants',
    exp_section_rest:'Restaurants', exp_section_nbh:'Quartiers',
    exp_nbh_label:'Explorer par Quartier',
        
    // ── FAMILIES PAGE ──
    fam_label: 'Activités Familiales',
    fam_title: 'Dallas en Famille',
    fam_sub: 'Les meilleures activités avec des enfants à Dallas pendant la Coupe du Monde — musées, parcs à thème, zoos et expériences texanes.',
    fam_heat_warning: 'Avertissement chaleur:',
    fam_heat_text: 'Dallas en juin et juillet atteint régulièrement 38–40°C. Planifiez les activités en plein air le matin ou après 17h.',
    fam_acts_label: '10 Attractions Familiales', fam_acts_title: 'Que Faire',
    fam_transit_label: 'Se Déplacer avec des Enfants', fam_transit_title: 'Guide Transport Familial',
    fam_tab_all: 'Tout', fam_tab_museum: 'Musées', fam_tab_outdoors: 'Plein Air',
    fam_tab_indoor: 'Intérieur', fam_tab_theme: 'Parcs à Thème', fam_tab_landmark: 'Monuments',
    fam_tab_stadium: 'Stades', fam_tab_dart: '🚆 DART Seulement',
    fam_dart_yes: 'Accessible en DART', fam_dart_no: 'Voiture/Uber',
    fam_duration: 'Durée', fam_age: 'Âge Recommandé',
    // ── WEATHER PAGE ──
    wx_june: 'Juin', wx_july: 'Juillet', wx_tips_label: 'Conseils Météo',
    wx_tips_title: 'Rester en Sécurité dans la Chaleur Estivale de Dallas',
    // ── EXPLORE PAGE ──
    exp_section_rest: 'Restaurants', exp_section_nbh: 'Quartiers',
    exp_nbh_label: 'Explorer par Quartier',
    // ── AFFILIATE CARDS ──
    bk_hotels_label: 'Hôtels', bk_hotels_badge: 'Plus Populaire',
    bk_hotels_cta: 'Chercher Hôtels', bk_hotels_desc_s: 'Meilleurs tarifs, annulation gratuite.',
    bk_hotels_desc: 'Comparez 500+ hôtels à Dallas. Annulation gratuite sur la plupart.',
    bk_flights_label: 'Vols vers DFW', bk_flights_badge: 'Meilleur Intl',
    bk_flights_cta: 'Chercher Vols', bk_flights_desc_s: 'Cherchez toutes les compagnies vers DFW.',
    bk_flights_desc: 'Cherchez toutes les compagnies aériennes vers DFW. Configurez des alertes pour juin-juillet 2026.',
    bk_cars_label: 'Location de Voiture', bk_cars_badge: 'Nécessaire au Texas',
    bk_cars_cta: 'Chercher Voitures', bk_cars_desc_s: 'Comparez les prix de location à DFW.',
    bk_cars_desc: 'Comparez les prix à DFW. Une voiture est essentielle pour Arlington et les excursions.',
    bk_bus_label: 'Bus Interurbain', bk_bus_badge: 'Économique',
    bk_bus_cta: 'Voir Trajets', bk_bus_desc_s: 'FlixBus depuis/vers Dallas.',
    bk_bus_desc: 'FlixBus relie Dallas à Austin, San Antonio et Houston dès ~20$.',
    bk_turo_label: 'Location entre Particuliers', bk_turo_badge: 'Alternative',
    bk_turo_cta: 'Voir Voitures', bk_turo_desc_s: 'Louez des voitures de particuliers à DFW.',
    bk_turo_desc: 'Louez des voitures directement de propriétaires. Souvent moins cher que les agences.',
    bk_activities_label: 'Tours et Activités', bk_activities_badge: 'Local',
    bk_activities_cta: 'Explorer Tours', bk_activities_desc_s: 'Tours locaux de Dallas sur Viator.',
    bk_activities_desc: 'Visites guidées de Dallas, excursions à Fort Worth et expériences texanes uniques.',
    bk_uber_label: 'Trajet vers le Stade', bk_uber_badge: 'Trajets',
    bk_uber_cta: 'Obtenir Uber', bk_uber_desc_s: 'Uber vers AT&T Stadium les jours de match.',
    bk_uber_desc: 'Nouveau sur Uber? Inscrivez-vous et obtenez vos premières courses à prix réduit.',
    bk_ubereats_label: 'Livraison de Repas', bk_ubereats_badge: 'Livraison',
    bk_ubereats_cta: 'Commander', bk_ubereats_desc_s: 'Uber Eats à Dallas.',
    bk_ubereats_desc: 'Commandez depuis des centaines de restaurants. Parfait pour les soirées à l\'hôtel.',
        
    // ── NAV CATEGORY + ITEM LABELS ──
    cat_matches:'Matchs',
    cat_transport:'Y Aller',
    cat_stay:'Séjour et Budget',
    cat_food:'Manger et Boire',
    cat_plan:'Planifier',
    nav_item_schedule:'Calendrier',
    nav_item_schedule_sub:'Les 9 matchs de Dallas',
    nav_item_tickets:'Billets',
    nav_item_tickets_sub:'Comment acheter et éviter les arnaques',
    nav_item_fanzones:'Fan Zones',
    nav_item_fanzones_sub:'Regarder sans billet',
    nav_item_map:'Carte Interactive',
    nav_item_map_sub:'Stade, hôtels, transports',
    nav_item_airport:'Guide Aéroport',
    nav_item_airport_sub:'DFW et Love Field',
    nav_item_transit:'Transport Stade',
    nav_item_transit_sub:'TRE, navette, parking',
    nav_item_groups:'Voyage en Groupe',
    nav_item_groups_sub:'Clubs de supporters',
    nav_item_daytrips:'Excursions',
    nav_item_daytrips_sub:'Fort Worth, Austin, San Antonio',
    nav_item_stay:'Où Séjourner',
    nav_item_stay_sub:'Arlington vs Dallas vs FW',
    nav_item_budget:'Guide Budget',
    nav_item_budget_sub:'Combien ça coûte?',
    nav_item_shopping:'Shopping',
    nav_item_shopping_sub:'Centres commerciaux et souvenirs',
    nav_item_explore:'Explorer Dallas',
    nav_item_explore_sub:'Quartiers et restaurants',
    nav_item_halal:'Guide Halal et Musulman',
    nav_item_halal_sub:'Nourriture halal et mosquées',
    nav_item_checklist:'Checklist Jour de Match',
    nav_item_checklist_sub:'Tout ce qu\'il faut',
    nav_item_survival:'Guide de Survie',
    nav_item_survival_sub:'Chaleur, argent, sécurité',
    nav_item_phrases:'Phrases et Culture',
    nav_item_phrases_sub:'Argot texan et coutumes',
    nav_item_families:'Familles',
    nav_item_families_sub:'Activités pour enfants',
    nav_item_weather:'Météo',
    nav_item_weather_sub:'Prévisions en direct',
    
    // ── SEC-TITLE TRANSLATIONS [FR] ──
    tkt_official_title:'Acheter chez FIFA Directement',
    tkt_resale_title:'Si les Billets Officiels Sont Épuisés',
    tkt_scam_title:'Ne Vous Faites Pas Arnaquer',
    tkt_stadium_title:'Utiliser Votre Billet',
    fz_official_title:'FIFA Fan Festival',
    fz_tips_title:'Conseils pour la Fan Zone',
    ap_terminals_title:'Dans Quel Terminal Êtes-Vous?',
    ap_tips_title:'Ne Faites Pas Ces Erreurs',
    acc_decision_title:'Arlington vs Dallas vs Fort Worth',
    acc_hotels_title:'Où Nous Séjournerions',
    acc_tips_title:'Réservez Tôt. Très Tôt.',
    bud_tiers_title:'Combien Dépenserez-Vous?',
    bud_prices_title:'Vérification des Prix',
    bud_tip_title:'Les Pourboires au Texas',
    bud_save_title:'Conseils pour Économiser',
    shop_malls_title:'Les Grands Centres',
    shop_souv_title:'Souvenirs Authentiques du Texas',
    shop_intl_title:'Conseils Taxes et Shopping',
    grp_accom_title:'Séjourner Ensemble en Groupe',
    grp_transport_title:'Transport Groupe vers AT&T Stadium',
    grp_meet_title:'Points de Rendez-Vous et Communication',
    grp_clubs_title:'Rejoignez les Fans de Votre Nation',
    grp_checklist_title:'Avant de Voyager',
    dt_fw_title:'Fort Worth Stockyards',
    dt_austin_title:'Austin — Capitale de la Musique Live',
    dt_sa_title:'San Antonio — L\'Alamo et la River Walk',
    dt_waco_title:'Waco — Magnolia Market',
    hal_key_title:'Dallas pour les Visiteurs Musulmans',
    hal_rest_title:'Où Manger',
    hal_mosque_title:'Lieux de Prière à Dallas',
    hal_tips_title:'Conseils pour Visiteurs Musulmans',
    phr_slang_title:'Mots Que Vous Entendrez',
    phr_wrong_title:'Différences Culturelles Surprenantes',
    phr_useful_title:'Ce Qu\'il Faut Vraiment Dire',
    phr_temp_title:'Référence Rapide Fahrenheit',
    footer_note:'Guide de visiteurs créé par des fans pour la Coupe du Monde FIFA 2026 · Non affilié à la FIFA ni à la ville de Dallas',
    booking_sub: 'Trouvez les meilleures offres en hotels, vols et transport vers Dallas.',
    bk_deals: 'Offres',
    bk_hotels_label: 'Hotels',
    bk_hotels_badge: 'Le Plus Populaire',
    bk_hotels_cta: 'Rechercher des Hotels',
    bk_hotels_desc_s: 'Meilleurs tarifs, annulation gratuite sur la plupart.',
    bk_hotels_desc: 'Comparez 500+ hotels a Dallas. Annulation gratuite sur la plupart.',
    bk_flights_label: 'Vols vers DFW',
    bk_flights_badge: 'Meilleur pour Intl',
    bk_flights_cta: 'Rechercher des Vols',
    bk_flights_desc_s: 'Recherchez toutes les compagnies. Meilleurs prix.',
    bk_flights_desc: 'Recherchez toutes les compagnies vers DFW. Activez les alertes de prix.',
    bk_cars_label: 'Location de Voiture',
    bk_cars_badge: 'Essentiel Stade',
    bk_cars_cta: 'Comparer les Voitures',
    bk_cars_desc_s: 'Prise en charge a DFW. Essentiel pour Arlington.',
    bk_cars_desc: 'Prise en charge a DFW ou centre-ville. Essentiel pour le stade.',
    bk_bus_label: 'Billets de Bus',
    bk_bus_badge: 'Option Budget',
    bk_bus_cta: 'Trouver des Routes de Bus',
    bk_bus_desc_s: 'Routes economiques depuis Houston, Austin et OKC.',
    bk_bus_desc: 'Bus depuis Houston, Austin, San Antonio. A partir de $15.',
    bk_turo_label: 'Turo Covoiturage',
    bk_turo_badge: 'Tendance',
    bk_turo_cta: 'Voir Turo',
    bk_turo_desc_s: 'Louez des voitures uniques chez des hotes locaux.',
    bk_turo_desc: 'Louez chez des proprietaires locaux - souvent moins cher.',
    bk_act_label: 'Tours et Activites',
    bk_act_badge: 'Experiences',
    bk_act_cta: 'Voir les Activites',
    bk_act_desc_s: 'Tours du stade, Stockyards, experiences a Dallas.',
    bk_act_desc: 'Tours du stade, gastronomie et experiences culturelles.',
    bk_airbnb_label: 'VRBO Locations',
    bk_airbnb_badge: 'Logements',
    bk_airbnb_cta: 'Chercher sur VRBO',
    bk_airbnb_desc_s: 'Appartements et maisons pres de Dallas.',
    bk_airbnb_desc: 'Logements VRBO entiers pres du stade. Ideal pour les groupes.',
    bk_eats_label: 'Livraison de Repas',
    bk_eats_badge: 'Livraison',
    bk_eats_cta: 'Commander',
    bk_eats_desc_s: 'Restaurants de Dallas livres a votre hotel.',
    bk_eats_desc: 'Les meilleurs restaurants de Dallas livres a votre hotel.',
    bk_uber_label: 'Trajet vers le Stade',
    bk_uber_badge: 'Trajets',
    bk_uber_cta: 'Prendre Uber',
    bk_uber_desc_s: 'Uber vers le stade AT&T les jours de match.',
    bk_uber_desc: 'Nouveau sur Uber? Inscrivez-vous avant le jour du match.',
    pages:'Pages', official_links:'Liens Officiels', emergency:'Urgences',
  },

  nl: {
    nav_matches:'Wedstrijden', nav_map:'Kaart', nav_explore:'Verkennen',
    nav_logistics:'Reizen', nav_fanzones:'Fanzones', nav_airport:'Vliegveld',
    nav_accommodation:'Verblijf', nav_budget:'Budget', nav_shopping:'Winkelen',
    nav_tickets:'Tickets', nav_daytrips:'Dagtrips', nav_phrases:'Zinnen', nav_halal:'Halal', nav_groups:'Groepen',
    nav_checklist:'Checklist', nav_survival:'Gids', nav_families:'Families', nav_weather:'Weer',
    home_eyebrow:'FIFA Wereldkampioenschap 2026 - Dallas, Texas',
    home_h1_line1:'Big', home_h1_line2:'D', home_h1_line3:'Bezoekersguide',
    home_sub:'Alles wat je nodig hebt voor Dallas tijdens het grootste sportevenement ter wereld.',
    home_btn_matches:'Wedstrijden Bekijken', home_btn_explore:'Dallas Verkennen',
    home_days_away:'Dagen Te Gaan',
    home_cd_label:'Volgende Wedstrijd in Dallas',
    home_cd_game:'Nederland vs Japan - Groepsfase - 14 jun 2026',
    home_cd_countdown:'Aftellen tot Aftrap',
    home_quick_title:'Alles wat je Nodig Hebt', home_quick_sub:'Snelle Links',
    days:'dagen', hrs:'uur', min:'min', sec:'sec',
    book_your_trip:'Boek je Reis',
    search_hotels:'Hotels Zoeken', search_flights:'Vluchten Zoeken',
    compare_cars:"Auto's Vergelijken", find_bus:'Busroutes Vinden',
    browse_turo:'Bekijk Turo', browse_activities:'Bekijk Activiteiten',
    via:'via', affiliate_note:'Affiliate links - kleine commissie zonder extra kosten.',
    add_to_calendar:'+ Toevoegen aan Agenda',
    view_on_maps:'Openen in Google Maps',
    official_website:'Officiele Website',
    call_to_reserve:'Bellen om te Reserveren',
    full_schedule:'Volledig Schema',
    all_neighborhoods:'Alle Wijken', all_restaurants:'Alle Restaurants',
    all_activities:'Alle Familieactiviteiten',
    explore_label:'Verkennen', see_details:'Details Bekijken', read_more:'Lees meer',
    matches_venue:'AT&T Stadium - Arlington, TX',
    matches_title:'Dallas Wedstrijden',
    matches_note:'Het Dallas Stadion ontvangt 9 wedstrijden. Alle tijden zijn CDT.',
    next_match:'Volgende Wedstrijd in Dallas',
    countdown_label:'Aftellen tot Aftrap',
    group_stage:'Groepsfase', round_of_32:'Ronde van 32',
    round_of_16:'Ronde van 16', semifinal:'Halve Finale',
    known_after:'Bekend na',
    flying_in:'Kom je voor deze wedstrijd?',
    flights_on_skyscanner:'Vluchten op Skyscanner',
    hotels_near_stadium:'Hotels bij het Stadion',
    stay_near_action:'Verblijf Dicht bij de Actie',
    venue_info:'Stadion Info',
    address:'Adres', capacity:'Capaciteit', getting_there:'Hoe Kom je Er',
    bag_policy:'Tassenbeleid',
    explore_beyond:'Voorbij het Stadion', explore_title:'Verken Dallas',
    all_areas:'Alle Gebieden', food_drink:'Eten en Drinken',
    nightlife:'Nachtleven', culture:'Cultuur',
    local_favorites:'Lokale Favorieten', where_to_eat:'Waar Eten',
    all_tab:'Alles', bbq_tab:'BBQ', texmex_tab:'Tex-Mex',
    mexican_tab:'Mexicaans', asian_tab:'Aziatisch', fastfood_tab:'Fast Food',
    international_tab:'Internationaal', bars_tab:'Halal',
    logistics_title:'Hoe Kom je Er',
    recommended_route:'Aanbevolen Route', step_by_step:'Stap voor Stap',
    all_options:'Alle Opties', getting_around:'Vervoer in Dallas',
    important:'Belangrijk:',
    arlington_alert:'Arlington heeft geen metro. Plan je vervoer - verkeer op I-30 kan 60-90 minuten extra kosten.',
    checklist_label:'Interactief Hulpmiddel',
    checklist_title:'Wedstrijddag Checklist',
    your_progress:'Jouw Voortgang', done:'gedaan',
    survival_label:'Voor Internationale Bezoekers',
    survival_title:'Overlevingsgids', know_before:'Wat te Weten voor Aankomst',
    families_title:'Dallas met Kinderen', activities_title:'Wat te Doen',
    heat_warning:'Waarschuwing extreme hitte:',
    heat_warning_text:'Dallas bereikt in juni-juli regelmatig 38-40 graden. Plan buitenactiviteiten vroeg in de ochtend of laat in de middag.',
    dart_only:'Alleen DART', getting_around_kids:'Vervoer met Kinderen',
    family_transit:'Familie Vervoersgids', plan_stay:'Plan je Familieverblijf',
    dart_accessible:'Bereikbaar per DART', car_recommended:'Auto Aanbevolen',
    live_weather:'Live vanuit Dallas, TX', weather_title:'Dallas Weer',
    next_24h:'Komende 24 Uur', day_forecast:'7-Daagse Voorspelling',
    conditions_glance:'Weersomstandigheden',
    match_day_advice:'Tips voor Wedstrijddag', stadium_weather:'Stadion Weertips',
    humidity:'Vochtigheid', wind:'Windsnelheid', uv_index:'UV-index',
    sunrise:'Zonsopgang', sunset:'Zonsondergang', wind_dir:'Windrichting',
    updated:'Bijgewerkt',
    bk_esim_label: 'US eSIM', bk_esim_badge: 'Essentieel',
    bk_esim_cta: 'eSIM Ophalen',
    bk_esim_desc_s: 'Activeer een US eSIM voor de landing.',
    bk_esim_desc: 'Verbonden zodra je landt. US Mobile eSIM werkt op alle grote Amerikaanse netwerken.',
    
    // ── NIEUWE PAGINA'S ──────────────────────────
    tkt_label:'Wedstrijdkaarten', tkt_title:'Kaartengids',
    tkt_sub:'Alles wat je moet weten over het kopen van kaarten voor wedstrijden in Dallas.',
    tkt_official_label:'Officiële Kaarten', tkt_official_title:'Koop bij FIFA Rechtstreeks',
    tkt_official_warning:'Koop altijd officieel eerst. De enige bron is FIFA.com/tickets.',
    tkt_cats_label:'Kaartcategorieën', tkt_scam_label:'Oplichting Waarschuwing',
    tkt_scam_title:'Word Niet Opgelicht', tkt_stadium_label:'In het Stadion',
    tkt_stadium_title:'Uw Kaart Gebruiken',
    tkt_resale_label:'Doorverkoopmarkt', tkt_resale_title:'Als Officiële Kaarten Uitverkocht Zijn',
    fz_label:'Geen Kaart? Geen Probleem', fz_title:'Fanzones en Wedstrijdschermen',
    fz_sub:'Je hebt geen kaart nodig om het WK in Dallas te beleven.',
    fz_official_label:'Officiële Locatie', fz_official_title:'FIFA Fan Festival',
    fz_tips_label:'Planningtips', fz_tips_title:'Fanzone Advies',
    ap_label:'Aankomen in Dallas', ap_title:'Dallas Luchthavenguids',
    ap_sub:'DFW is een van de grootste luchthavens ter wereld. Hier is alles wat je nodig hebt.',
    ap_primary_label:'Primaire Luchthaven', ap_step_label:'Bij Aankomst',
    ap_terminal_label:'Terminalguids', ap_terminals_title:'In Welke Terminal Ben Je?',
    ap_secondary_label:'Secundaire Luchthaven', ap_tips_label:'Essentiële Tips',
    ap_tips_title:'Maak Deze Fouten Niet',
    acc_label:'Waar te Verblijven', acc_title:'Accommodatiegids',
    acc_sub:'Arlington, centrum Dallas of Fort Worth? Hier is de eerlijke vergelijking.',
    acc_decision_label:'De Grote Keuze', acc_decision_title:'Arlington vs Dallas vs Fort Worth',
    acc_hotels_label:'Aanbevolen Hotels', acc_hotels_title:'Waar Wij Zouden Verblijven',
    acc_tips_label:'Boekingsadvies', acc_tips_title:'Boek Vroeg. Heel Vroeg.',
    bud_label:'Financiële Planning', bud_title:'Dallas Budgetgids',
    bud_sub:'De eerlijke waarheid over wat een week in Dallas kost.',
    bud_tiers_label:'Dagelijks Budget per Niveau', bud_tiers_title:'Hoeveel Ga Je Uitgeven?',
    bud_prices_label:'Wat Dingen Kosten', bud_prices_title:'Prijzen Realiteitscheck',
    bud_tip_label:'Fooi Cultuur', bud_tip_title:'Fooi Geven in Texas',
    bud_save_label:'Geld Besparen', bud_save_title:'Slimme Bespaartips',
    shop_label:'Winkelen', shop_title:'Winkelen in Dallas',
    shop_sub:'Dallas is een winkelbestemming van wereldklasse.',
    shop_malls_label:'Grote Winkelcentra', shop_malls_title:'De Grote Malls',
    shop_souv_label:'Wat te Kopen', shop_souv_title:'Authentieke Texas Souvenirs',
    shop_intl_label:'Internationale Shoppers', shop_intl_title:'Belasting en Winkeltips',
    grp_label:'Samen Reizen', grp_title:'Groepsreisgids',
    grp_sub:'Reist u met een supportersclub of groep van 10+? Hier is alles wat u nodig hebt.',
    grp_accom_label:'Groepsaccommodatie', grp_accom_title:'Samen Verblijven als Groep',
    grp_transport_label:'Naar het Stadion', grp_transport_title:'Groepstransport naar AT&T Stadium',
    grp_meet_label:'Elkaar Vinden', grp_meet_title:'Ontmoetingspunten en Communicatie',
    grp_clubs_label:'Supportersclubs', grp_clubs_title:'Verbinding met Fans van Uw Land',
    grp_checklist_label:'Groepschecklist', grp_checklist_title:'Voor het Vertrek',
    dt_label:'Voorbij Dallas', dt_title:'Dagtrips vanuit Dallas',
    dt_sub:'De meeste bezoekers hebben 7–14 dagen. Texas heeft unieke bestemmingen.',
    dt_fw_label:'30 Minuten Weg', dt_fw_title:'Fort Worth Stockyards',
    dt_austin_label:'3 Uur Weg', dt_austin_title:'Austin — Live Muziekhoofdstad',
    dt_sa_label:'4,5 Uur Weg', dt_sa_title:'San Antonio — De Alamo en River Walk',
    dt_waco_label:'1,5 Uur Weg', dt_waco_title:'Waco — Magnolia Market',
    hal_label:'Gids voor Moslimgasten', hal_title:'Halal Eten en Moslimgids',
    hal_sub:'Dallas heeft een grote moslimgemeenschap — halal eten is goed te vinden.',
    hal_key_label:'Kerninformatie', hal_key_title:'Dallas voor Moslimgasten',
    hal_rest_label:'Halal Restaurants', hal_rest_title:'Waar te Eten',
    hal_mosque_label:'Moskeeën en Gebed', hal_mosque_title:'Gebedsruimtes in Dallas',
    hal_tips_label:'Praktische Tips', hal_tips_title:'Moslimvriendelijke Reistips',
    phr_label:'Texaans Spreken', phr_title:'Zinnen en Cultuurguids',
    phr_sub:'Amerika en Texas hebben hun eigen regels — uitgesproken en onuitgesproken.',
    phr_slang_label:'Essentieel Texaans Jargon', phr_slang_title:'Woorden Die U Hoort',
    phr_wrong_label:'Wat U Fout Doet', phr_wrong_title:'Culturele Verschillen Die Verrassen',
    phr_useful_label:'Nuttige Zinnen', phr_useful_title:'Wat U Echt Moet Zeggen',
    phr_temp_label:'Temperatuuromzetter', phr_temp_title:'Fahrenheit Snelreferentie',
    map_label:'Dallas Navigeren', map_title:'Interactieve Kaart',
    map_stadium:'AT&T Stadion', map_dart:'DART Stations', map_hotels:'Hotels',
    map_fanzone:'Fanfestival', map_rest:'Restaurants',
    exp_section_rest:'Restaurants', exp_section_nbh:'Wijken',
    exp_nbh_label:'Verkennen per Wijk',
        
    // ── FAMILIES PAGE ──
    fam_label: 'Gezinsactiviteiten',
    fam_title: 'Dallas met Kinderen',
    fam_sub: 'De beste activiteiten met kinderen in Dallas tijdens het WK — musea, pretparken, dierentuinen en Texaanse ervaringen.',
    fam_heat_warning: 'Hittewaarschuwing:',
    fam_heat_text: 'Dallas in juni en juli bereikt regelmatig 38–40°C. Plan buitenactiviteiten vroeg in de ochtend of na 17:00.',
    fam_acts_label: '10 Attracties voor Gezinnen', fam_acts_title: 'Wat te Doen',
    fam_transit_label: 'Reizen met Kinderen', fam_transit_title: 'Gezinsvervoergids',
    fam_tab_all: 'Alles', fam_tab_museum: 'Musea', fam_tab_outdoors: 'Buiten',
    fam_tab_indoor: 'Binnen', fam_tab_theme: 'Pretparken', fam_tab_landmark: 'Bezienswaardigheden',
    fam_tab_stadium: 'Stadions', fam_tab_dart: '🚆 Alleen DART',
    fam_dart_yes: 'DART Toegankelijk', fam_dart_no: 'Auto/Uber',
    fam_duration: 'Duur', fam_age: 'Aanbevolen Leeftijd',
    // ── WEATHER PAGE ──
    wx_june: 'Juni', wx_july: 'Juli', wx_tips_label: 'Weertips',
    wx_tips_title: 'Veilig Blijven in de Dallas Zomerhitte',
    // ── EXPLORE PAGE ──
    exp_section_rest: 'Restaurants', exp_section_nbh: 'Wijken',
    exp_nbh_label: 'Verkennen per Wijk',
    // ── AFFILIATE CARDS ──
    bk_hotels_label: 'Hotels', bk_hotels_badge: 'Meest Populair',
    bk_hotels_cta: 'Zoek Hotels', bk_hotels_desc_s: 'Beste tarieven, gratis annulering.',
    bk_hotels_desc: 'Vergelijk 500+ hotels in Dallas. Gratis annulering op de meeste.',
    bk_flights_label: 'Vluchten naar DFW', bk_flights_badge: 'Beste Intl',
    bk_flights_cta: 'Zoek Vluchten', bk_flights_desc_s: 'Zoek alle airlines naar DFW.',
    bk_flights_desc: 'Zoek alle luchtvaartmaatschappijen naar DFW. Stel tariefmeldingen in voor juni-juli 2026.',
    bk_cars_label: 'Huurauto', bk_cars_badge: 'Nodig in Texas',
    bk_cars_cta: "Zoek Auto's", bk_cars_desc_s: 'Vergelijk huurautoprijzen bij DFW.',
    bk_cars_desc: 'Vergelijk prijzen bij DFW. Een auto is essentieel voor Arlington en dagtrips.',
    bk_bus_label: 'Intercitybus', bk_bus_badge: 'Goedkoop',
    bk_bus_cta: 'Bekijk Routes', bk_bus_desc_s: 'FlixBus van/naar Dallas.',
    bk_bus_desc: 'FlixBus verbindt Dallas met Austin, San Antonio en Houston vanaf ~$20.',
    bk_turo_label: 'Peer-to-Peer Verhuur', bk_turo_badge: 'Alternatief',
    bk_turo_cta: "Bekijk Auto's", bk_turo_desc_s: "Huur auto's van particulieren bij DFW.",
    bk_turo_desc: "Huur auto's rechtstreeks van eigenaren. Vaak goedkoper dan traditionele verhuurbedrijven.",
    bk_activities_label: 'Tours en Activiteiten', bk_activities_badge: 'Lokaal',
    bk_activities_cta: 'Verken Tours', bk_activities_desc_s: 'Lokale Dallas tours op Viator.',
    bk_activities_desc: 'Rondleidingen in Dallas, uitstapjes naar Fort Worth en unieke Texaanse ervaringen.',
    bk_uber_label: 'Rit naar het Stadion', bk_uber_badge: 'Ritten',
    bk_uber_cta: 'Uber Krijgen', bk_uber_desc_s: 'Uber naar AT&T Stadium op wedstrijddagen.',
    bk_uber_desc: 'Nieuw bij Uber? Meld je aan en krijg je eerste ritten met korting.',
    bk_ubereats_label: 'Maaltijdbezorging', bk_ubereats_badge: 'Bezorging',
    bk_ubereats_cta: 'Bestellen', bk_ubereats_desc_s: 'Uber Eats in Dallas.',
    bk_ubereats_desc: 'Bestel bij honderden restaurants. Perfect voor avonden in het hotel.',
        
    // ── NAV CATEGORY + ITEM LABELS ──
    cat_matches:'Wedstrijden',
    cat_transport:'Reizen',
    cat_stay:'Verblijf en Budget',
    cat_food:'Eten en Drinken',
    cat_plan:'Plannen',
    nav_item_schedule:'Wedstrijdschema',
    nav_item_schedule_sub:'Alle 9 Dallas wedstrijden',
    nav_item_tickets:'Tickets',
    nav_item_tickets_sub:'Hoe te kopen en oplichting vermijden',
    nav_item_fanzones:'Fanzones',
    nav_item_fanzones_sub:'Kijken zonder ticket',
    nav_item_map:'Interactieve Kaart',
    nav_item_map_sub:'Stadion, hotels, vervoer',
    nav_item_airport:'Luchthavenguids',
    nav_item_airport_sub:'DFW en Love Field',
    nav_item_transit:'Stadion Vervoer',
    nav_item_transit_sub:'TRE, pendel, parkeren',
    nav_item_groups:'Groepsreis',
    nav_item_groups_sub:'Supportersclubs',
    nav_item_daytrips:'Dagtrips',
    nav_item_daytrips_sub:'Fort Worth, Austin, San Antonio',
    nav_item_stay:'Waar te Verblijven',
    nav_item_stay_sub:'Arlington vs Dallas vs FW',
    nav_item_budget:'Budgetgids',
    nav_item_budget_sub:'Hoeveel kost het?',
    nav_item_shopping:'Winkelen',
    nav_item_shopping_sub:'Winkelcentra en souvenirs',
    nav_item_explore:'Dallas Verkennen',
    nav_item_explore_sub:'Wijken en restaurants',
    nav_item_halal:'Halal en Moslimgids',
    nav_item_halal_sub:'Halal eten en moskeeën',
    nav_item_checklist:'Wedstrijddag Checklist',
    nav_item_checklist_sub:'Alles wat je nodig hebt',
    nav_item_survival:'Overlevingsgids',
    nav_item_survival_sub:'Hitte, geld, veiligheid',
    nav_item_phrases:'Zinnen en Cultuur',
    nav_item_phrases_sub:'Texaans jargon en gewoonten',
    nav_item_families:'Gezinnen',
    nav_item_families_sub:'Activiteiten voor kinderen',
    nav_item_weather:'Weer',
    nav_item_weather_sub:'Live weersvoorspelling',
    
    // ── SEC-TITLE TRANSLATIONS [NL] ──
    tkt_official_title:'Koop bij FIFA Rechtstreeks',
    tkt_resale_title:'Als Officiële Tickets Uitverkocht Zijn',
    tkt_scam_title:'Word Niet Opgelicht',
    tkt_stadium_title:'Uw Ticket Gebruiken',
    fz_official_title:'FIFA Fan Festival',
    fz_tips_title:'Fanzone Advies',
    ap_terminals_title:'In Welke Terminal Ben Je?',
    ap_tips_title:'Maak Deze Fouten Niet',
    acc_decision_title:'Arlington vs Dallas vs Fort Worth',
    acc_hotels_title:'Waar Wij Zouden Verblijven',
    acc_tips_title:'Boek Vroeg. Heel Vroeg.',
    bud_tiers_title:'Hoeveel Ga Je Uitgeven?',
    bud_prices_title:'Prijzen Realiteitscheck',
    bud_tip_title:'Fooi Geven in Texas',
    bud_save_title:'Slimme Bespaartips',
    shop_malls_title:'De Grote Malls',
    shop_souv_title:'Authentieke Texas Souvenirs',
    shop_intl_title:'Belasting en Winkeltips',
    grp_accom_title:'Samen Verblijven als Groep',
    grp_transport_title:'Groepstransport naar AT&T Stadium',
    grp_meet_title:'Ontmoetingspunten en Communicatie',
    grp_clubs_title:'Verbinding met Fans van Uw Land',
    grp_checklist_title:'Voor het Vertrek',
    dt_fw_title:'Fort Worth Stockyards',
    dt_austin_title:'Austin — Live Muziekhoofdstad',
    dt_sa_title:'San Antonio — De Alamo en River Walk',
    dt_waco_title:'Waco — Magnolia Market',
    hal_key_title:'Dallas voor Moslimgasten',
    hal_rest_title:'Waar te Eten',
    hal_mosque_title:'Gebedsruimtes in Dallas',
    hal_tips_title:'Moslimvriendelijke Reistips',
    phr_slang_title:'Woorden Die U Hoort',
    phr_wrong_title:'Culturele Verschillen Die Verrassen',
    phr_useful_title:'Wat U Echt Moet Zeggen',
    phr_temp_title:'Fahrenheit Snelreferentie',
    footer_note:"Fangemaakt bezoekersguide voor het FIFA WK 2026 - Niet gelieerd aan FIFA",
    booking_sub: 'Vind de beste deals voor hotels, vluchten en vervoer naar Dallas.',
    bk_deals: 'Deals',
    bk_hotels_label: 'Hotels',
    bk_hotels_badge: 'Meest Populair',
    bk_hotels_cta: 'Hotels Zoeken',
    bk_hotels_desc_s: 'Beste tarieven, gratis annulering op de meeste kamers.',
    bk_hotels_desc: 'Vergelijk 500+ hotels in Dallas. Gratis annulering op de meeste kamers.',
    bk_flights_label: 'Vluchten naar DFW',
    bk_flights_badge: 'Beste voor Intl',
    bk_flights_cta: 'Vluchten Zoeken',
    bk_flights_desc_s: 'Zoek alle luchtvaartmaatschappijen. Beste prijzen.',
    bk_flights_desc: 'Zoek alle vluchten naar DFW. Stel prijsalarmen in voor juni-juli 2026.',
    bk_cars_label: 'Huurauto',
    bk_cars_badge: 'Stadion Essentieel',
    bk_cars_cta: "Auto's Vergelijken",
    bk_cars_desc_s: 'Ophalen op DFW Airport. Essentieel voor Arlington.',
    bk_cars_desc: 'Ophalen op DFW of centrum Dallas. Essentieel voor het stadion.',
    bk_bus_label: 'Bustickets',
    bk_bus_badge: 'Budgetoptie',
    bk_bus_cta: 'Busroutes Zoeken',
    bk_bus_desc_s: 'Budgetroutes vanuit Houston, Austin en OKC.',
    bk_bus_desc: 'Busverbindingen vanuit Houston, Austin, San Antonio. Vanaf $15.',
    bk_turo_label: 'Turo Autodelen',
    bk_turo_badge: 'Trending',
    bk_turo_cta: 'Bekijk Turo',
    bk_turo_desc_s: 'Huur unieke auto van lokale eigenaar.',
    bk_turo_desc: 'Huur van lokale eigenaren - vaak goedkoper dan regulier.',
    bk_act_label: 'Tours en Activiteiten',
    bk_act_badge: 'Ervaringen',
    bk_act_cta: 'Bekijk Activiteiten',
    bk_act_desc_s: 'Stadion tours, Stockyards, Dallas ervaringen.',
    bk_act_desc: 'Stadion tours, eetbeleving en culturele ervaringen. Vroeg boeken.',
    bk_airbnb_label: 'VRBO Vakantieverblijven',
    bk_airbnb_badge: 'Woningen',
    bk_airbnb_cta: 'Zoeken op VRBO',
    bk_airbnb_desc_s: 'Appartementen en huizen bij Dallas.',
    bk_airbnb_desc: 'VRBO woningen bij het stadion. Ideaal voor groepen van 4+.',
    bk_eats_label: 'Eten Bezorgen',
    bk_eats_badge: 'Bezorging',
    bk_eats_cta: 'Bestellen',
    bk_eats_desc_s: 'Dallas restaurants bezorgd naar je hotel.',
    bk_eats_desc: 'De beste restaurants van Dallas bezorgd naar je hotel.',
    bk_uber_label: 'Rit naar het Stadion',
    bk_uber_badge: 'Ritten',
    bk_uber_cta: 'Uber Nemen',
    bk_uber_desc_s: 'Uber naar AT&T Stadium op wedstrijddagen.',
    bk_uber_desc: 'Nieuw bij Uber? Registreer voor de wedstrijddag. Hoge tarieven op matchdays.',
    pages:"Pagina's", official_links:'Officiele Links', emergency:'Noodgevallen',
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

// ── UNIVERSAL PAGE TRANSLATOR ─────────────────────────────────
// Call this on langchange for any page that uses data-i18n attributes.
// Handles both simple text and data-i18n-attr for attributes.
function updateAllI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const attr = el.getAttribute('data-i18n-attr');
    const val = t(key);
    if (!val) return;
    if (attr) { el.setAttribute(attr, val); }
    else { el.textContent = val; }
  });
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
    exp_rest_all: 'All', exp_rest_bbq: 'BBQ', exp_rest_tex: 'Tex-Mex', exp_rest_mex: 'Mexican', exp_rest_asian: 'Asian', exp_rest_ff: 'Fast Food', exp_rest_intl: 'International', exp_rest_bar: 'Halal',
    exp_explore_link: 'Explore',

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
    fam_weather_label: 'Plan Around the Heat',
    fam_weather_title: 'Dallas Weather',
    fam_dart_title: 'DART Light Rail',
    fam_dart_best: 'Best for: Zoo, Perot Museum, Reunion Tower',
    fam_dart_desc: 'The easiest transit for families. Kids under 5 ride free. Download GoPass before you arrive.',

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
    match_booking_sub: 'Stay in Arlington for walkable access, or downtown Dallas with DART connections.',
    match_transit_link: 'Full Transit Guide →',
    match_fifa_config: 'FIFA World Cup configuration',
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
    exp_rest_all: 'Todo', exp_rest_bbq: 'BBQ', exp_rest_tex: 'Tex-Mex', exp_rest_mex: 'Mexicana', exp_rest_asian: 'Asiática', exp_rest_ff: 'Comida Rápida', exp_rest_intl: 'Internacional', exp_rest_bar: 'Halal',
    exp_explore_link: 'Explorar',
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
    fam_weather_label: 'Planifica con el Calor',
    fam_weather_title: 'Clima en Dallas',
    fam_dart_title: 'Tren Ligero DART',
    fam_dart_best: 'Ideal para: Zoo, Museo Perot, Reunion Tower',
    fam_dart_desc: 'El transporte más fácil. Niños menores de 5 años gratis. Descarga GoPass antes de llegar.',
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
    match_booking_sub: 'Alojate en Arlington para acceso a pie, o en el centro de Dallas con DART.',
    match_transit_link: 'Guía de Transporte →', match_add_cal: '+ Agregar al Calendario',
    match_fifa_config: 'Configuración Copa Mundial FIFA',
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
    exp_rest_all: 'Tout', exp_rest_bbq: 'BBQ', exp_rest_tex: 'Tex-Mex', exp_rest_mex: 'Mexicaine', exp_rest_asian: 'Asiatique', exp_rest_ff: 'Fast Food', exp_rest_intl: 'International', exp_rest_bar: 'Halal',
    exp_explore_link: 'Explorer',
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
    fam_weather_label: 'Planifier selon la Chaleur',
    fam_weather_title: 'Météo Dallas',
    fam_dart_title: 'Tramway DART',
    fam_dart_best: 'Idéal pour: Zoo, Musée Perot, Reunion Tower',
    fam_dart_desc: "Transport le plus simple. Enfants moins de 5 ans gratuits. Téléchargez GoPass avant d'arriver.",
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
    match_booking_sub: 'Restez a Arlington pour un acces a pied, ou au centre-ville de Dallas avec DART.',
    match_transit_link: 'Guide de Transport →', match_add_cal: '+ Ajouter au Calendrier',
    match_fifa_config: 'Configuration Coupe du Monde FIFA',
    match_flying: 'Vous venez pour ce match ?', match_find_date: 'Trouvez des vols arrivant',
  },

  nl: {
    surv_know_label: 'Voor Internationale Bezoekers',
    surv_know_title: 'Wat te Weten voor Aankomst',
    surv_heat_title: 'De Hitte van Texas',
    surv_heat: ['Juni-juli temperaturen bereiken 35-40 graden met hoge luchtvochtigheid','Neem een herbruikbare waterfles mee en blijf drinken','Het AT&T Stadium heeft volledige airconditioning','Zonnebrand factor 50+ voor de buitenfangebieden','Lichte kleding aanbevolen op wedstrijddagen','Hittestress is een reel risico - zoek schaduw tijdens pauzes'],
    surv_transit_title: 'Vervoer in Dallas',
    surv_transit: ['Dallas is een autostad - openbaar vervoer is beperkt buiten het centrum','De DART lightrail bedient het centrum, Uptown en Deep Ellum','Uber/Lyft hanteren hoge tarieven op wedstrijddagen - plan vooruit','Huur een auto als je buiten het centrum verblijft','Download de GoPass app voor DART-tickets voor aankomst'],
    surv_money_title: 'Geld en Fooi',
    surv_money: ['Alleen USD - zorg voor contant geld voor foodtrucks','Fooi 18-20% in restaurants is gebruikelijk','15% verwacht in bars; minimaal $1 per drankje','Creditcards worden bijna overal geaccepteerd','Geldautomaten rekenen $3-5 extra - gebruik Wise of Revolut','Prijzen zijn exclusief belasting - voeg 8,25% toe'],
    surv_conn_title: 'Connectiviteit',
    surv_conn: ['Koop een T-Mobile of AT&T prepaid SIM op DFW Airport','eSIM opties: Airalo of Google Fi werken in de VS','Gratis WiFi in het stadion maar overbelast - download vooraf','Download offline Google Maps van Dallas voor aankomst','Noodgevallen: bel 911 (gratis van elke telefoon)'],
    surv_health_title: 'Gezondheid en Veiligheid',
    surv_health: ['Reisverzekering sterk aanbevolen - zorg in de VS is erg duur','Dichtstbijzijnde ziekenhuis: Medical City Arlington, 5 min van stadion','Spoedeisende hulpklinieken voor kleine problemen','CVS en Walgreens apotheken op bijna elke hoek','Kraanwater is veilig te drinken in de regio Dallas'],
    surv_arriving_title: 'Aankomen in Dallas',
    surv_arriving: ['Hoofdluchthaven: DFW International - 25 min van Dallas','DART Orange Line verbindt DFW direct met het centrum','Secundair vliegveld: Dallas Love Field (DAL) - binnenlandse vluchten','Douane en immigratie kunnen 60-90 minuten duren','ESTA of visum vereist voor niet-Amerikaanse bezoekers'],
    surv_resources_title: 'Nuttige Bronnen',
    surv_resources: ['Officiel toerisme Dallas','FIFA Wereldkampioenschap 2026 officiel','DART reisplanner','Dallas weersvoorspelling','ESTA visumvrijstelling aanvraag'],
    surv_weather_label: 'Live Omstandigheden',
    surv_weather_title: 'Dallas Weer',
    surv_weather_sub: 'Live weer in Dallas - wissel tussen graden Fahrenheit en Celsius.',
    log_venue: 'Dallas Stadion, Arlington', log_title: 'Hoe Kom je Er',
    log_hero_sub: 'Het Dallas Stadion ligt in Arlington, tussen Dallas en Fort Worth. Geen directe trein.',
    log_rec_label: 'Aanbevolen Route', log_rec_title: 'Stap voor Stap',
    log_alert: 'Arlington heeft geen metro of lightrail. Plan je vervoer - het verkeer kan 60-90 minuten extra kosten.',
    log_s1_title: 'TRE naar CentrePort',
    log_s1_body: 'Neem de Trinity Railway Express naar CentrePort/DFW Airport. Elke 30 minuten op wedstrijddagen.',
    log_s1_tip: 'Ongeveer 35 min vanaf Union Station - $5 per rit',
    log_s2_title: 'Gratis FIFA Shuttle',
    log_s2_body: 'Gratis FIFA-shuttles rijden vanuit CentrePort direct naar de stadiongates - 10-15 minuten.',
    log_s2_tip: 'Gratis met je ticket - vertrek 2+ uur van tevoren',
    log_s3_title: 'Toegang tot het Stadion',
    log_s3_body: 'Laat je mobiele ticket zien. Alleen doorzichtige tassen. Poorten open 2,5 uur voor de wedstrijd.',
    log_s3_tip: 'Maak een screenshot van je ticket - geen bereik in het stadion',
    log_s4_title: 'Na de Wedstrijd',
    log_s4_body: 'Retourshuttles rijden totdat de menigte verspreid is - reken op 30-45 minuten wachten.',
    log_s4_tip: 'Stel je Uber-ophaallocatie in voordat je het stadion ingaat',
    log_opts_label: 'Alle Opties', log_opts_title: 'Vervoer Overzicht',
    log_opt_rec: 'Aanbevolen',
    log_opt_tre_title: 'TRE + Shuttle', log_opt_tre_desc: 'Trinity Railway Express dan gratis FIFA-shuttle.',
    log_opt_tre_pros: 'Geen file - $5 - Speciale service', log_opt_tre_cons: 'Vereist planning',
    log_opt_drive_title: 'Rijden en Parkeren', log_opt_drive_desc: 'Rijden naar Arlington en officieel parkeren.',
    log_opt_drive_pros: 'Deur-tot-deur - Flexibel', log_opt_drive_cons: 'Druk verkeer - $30-60',
    log_opt_uber_title: 'Uber / Lyft', log_opt_uber_desc: 'Handig maar duur op wedstrijddagen.',
    log_opt_uber_pros: 'Geen planning nodig', log_opt_uber_cons: 'Hoog tarief - Lange wachttijd',
    log_opt_bus_title: 'Bus (Budget)', log_opt_bus_desc: 'FlixBus en Greyhound verbinden Dallas met andere steden. Vanaf $15.',
    log_opt_bus_pros: 'Goedkoopste optie', log_opt_bus_cons: 'Niet direct naar stadion',
    log_book_label: 'Boek je Vervoer', log_book_sub: "Huur een auto voor de meeste flexibiliteit. Hotels zijn snel volgeboekt.",
    cl_label: 'Interactief Hulpmiddel', cl_title: 'Wedstrijddag Checklist',
    cl_sub: '35 dingen om te regelen. Vink ze af - voortgang wordt opgeslagen in je browser.',
    cl_progress: 'Jouw Voortgang', cl_reset: 'Opnieuw', cl_done: 'gedaan',
    cl_groups: [
      { g: '🎫 Tickets en Documenten', items: ['Download de FIFA-app en laad je ticket','Screenshot van je ticket (geen bereik in het stadion)','Paspoort of identiteitsbewijs ingepakt','Polisnummer reisverzekering opgeslagen','Hotelbevestiging gedownload'] },
      { g: '🚌 Vervoer', items: ['Plan je route naar het stadion','GoPass DART-app gedownload en opgeladen','Shuttledienstregeling gecontroleerd - 2u eerder vertrekken','Uber/Lyft ingesteld met ophaallocatie in Arlington','Parkeerpas vooraf gekocht indien rijden'] },
      { g: '👝 Wat Mee te Nemen', items: ['Doorzichtige tas (30x15x30 cm max)','Zonnebrand factor 50+ aangebracht en ingepakt','Herbruikbare waterfles (leeg voor de beveiliging)','Telefoon volledig opgeladen','Powerbank ingepakt','Teamshirt of clubkleuren','Klein contant geld voor verkopers en fooi'] },
      { g: '🏨 Voor Vertrek', items: ['Hotel heeft je contactgegevens','Ken de dichtstbijzijnde DART/TRE-halte','Ontmoetingspunt na wedstrijd afgesproken','Check het weerbericht voor Dallas'] },
      { g: '📱 Apps en Downloads', items: ['Officiele FIFA-app geinstalleerd','Offline kaart van Dallas gedownload','GoPass vervoersapp geinstalleerd','Uber/Lyft account ingesteld','Noodcontacten opgeslagen: 911, hotel, ambassade'] },
      { g: '🍽️ Eten en Plan', items: ['Restaurant voor de wedstrijd gereserveerd','Bar of fanzone afgesproken met groep','Restaurant na de wedstrijd gevonden','Ontbijt of lunch geregeld'] },
    ],
    exp_beyond: 'Voorbij het Stadion', exp_title: 'Verken Dallas',
    exp_sub: 'Dallas is een stad van wijken, elk met zijn eigen karakter.',
    exp_nbh_label: 'Zes Gebieden om te Kennen', exp_nbh_title: 'Wijken',
    exp_rest_label: 'Lokale Favorieten', exp_rest_title: 'Waar Eten',
    exp_tabs_all: 'Alle Gebieden', exp_tabs_food: 'Eten en Drinken', exp_tabs_night: 'Nachtleven', exp_tabs_culture: 'Cultuur',
    exp_rest_all: 'Alles', exp_rest_bbq: 'BBQ', exp_rest_tex: 'Tex-Mex', exp_rest_mex: 'Mexicaans', exp_rest_asian: 'Aziatisch', exp_rest_ff: 'Fast Food', exp_rest_intl: 'Internationaal', exp_rest_bar: 'Halal',
    exp_explore_link: 'Verkennen',
    map_label: 'Interactieve Bezoekerskaart', map_title: 'Dallas Kaart',
    map_sub: 'Stadion, vervoershaltes, hotels, fanzones en restaurants op een kaart.',
    map_filter: 'Filteren op Categorie',
    map_all: 'Alles', map_stadium: 'Stadion', map_transit: 'Vervoer',
    map_food: 'Eten en Drinken', map_hotels: 'Hotels', map_fanzones: 'Fanzones',
    fam_label: 'Familieactiviteiten', fam_title: 'Dallas met Kinderen',
    fam_sub: 'De beste activiteiten met kinderen in Dallas - musea, attractieparken en dierentuinen.',
    fam_heat_warning: 'Waarschuwing extreme hitte:',
    fam_heat_text: 'Dallas bereikt in juni en juli regelmatig 38-40 graden. Plan buitenactiviteiten vroeg of laat op de dag.',
    fam_acts_label: '10 Attracties voor Families', fam_acts_title: 'Wat te Doen',
    fam_transit_label: 'Vervoer met Kinderen', fam_transit_title: 'Familie Vervoersgids',
    fam_tab_all: 'Alles', fam_tab_museum: 'Musea', fam_tab_outdoors: 'Buiten',
    fam_tab_indoor: 'Binnen', fam_tab_theme: 'Attractieparken',
    fam_tab_landmark: 'Bezienswaardigheden', fam_tab_stadium: 'Stadions', fam_tab_dart: '🚆 Alleen DART',
    fam_dart_yes: 'Bereikbaar per DART', fam_dart_no: 'Auto/Taxi',
    fam_duration: 'Duur', fam_age: 'Aanbevolen Leeftijd',
    fam_transit_dart: '🚆 Bereikbaar per DART', fam_transit_car: '🚗 Auto Aanbevolen',
    fam_weather_label: 'Plan rondom de Hitte', fam_weather_title: 'Dallas Weer',
    fam_dart_title: 'DART Lightrail',
    fam_dart_best: 'Ideaal voor: Dierentuin, Perot Museum, Reunion Tower',
    fam_dart_desc: 'Het eenvoudigste vervoer voor families. Kinderen onder 5 jaar reizen gratis. Download GoPass voor aankomst.',
    wx_label: 'Live vanuit Dallas, TX', wx_title: 'Dallas Weer', wx_live: 'Live',
    wx_next24: 'Komende 24 Uur', wx_7day: '7-Daagse Voorspelling',
    wx_glance: 'Weersomstandigheden', wx_advice: 'Tips voor Wedstrijddag',
    wx_stadium_title: 'Stadion Weertips', wx_loading: 'Weergegevens laden...',
    wx_unavailable: 'Weer niet beschikbaar', wx_updated: 'Bijgewerkt',
    wx_humidity: 'Vochtigheid', wx_wind: 'Windsnelheid', wx_uv: 'UV-index',
    wx_sunrise: 'Zonsopgang', wx_sunset: 'Zonsondergang', wx_winddir: 'Windrichting',
    wx_feels: 'Gevoelstemperatuur',
    wx_heat_ok: 'Aangenaam', wx_heat_warm: 'Warm', wx_heat_hot: 'Heet', wx_heat_extreme: 'Extreme Hitte',
    wx_advice_cards: [
      { icon: '🏟️', title: 'Dallas Stadion', body: 'Het stadion heeft een inklapbaar dak en airconditioning. Binnen is het altijd aangenaam.' },
      { icon: '🚶', title: 'Naar het Stadion', body: 'De route van CentrePort naar de ingang is buiten. In juni-juli is dit zwaar. Lichte kleding en water meenemen.' },
      { icon: '☔', title: 'Onweersbuien', body: 'Dallas krijgt snelle zomerse onweersbuien. Ze trekken in 30-45 minuten over. Het dak sluit bij bliksem.' },
      { icon: '💧', title: 'Hydratatie', body: 'Bij hoge temperaturen verlies je snel water. Drink voordat je dorst voelt. Lege flessen mogen door de beveiliging.' },
    ],
    match_venue_label: 'Dallas Stadion - Arlington, TX',
    match_fixtures_title: 'Dallas Wedstrijden',
    match_note: 'Het Dallas Stadion ontvangt 9 wedstrijden - meer dan elk ander stadion. Alle tijden in CDT.',
    match_next: 'Volgende Wedstrijd in Dallas', match_cd_label: 'Aftellen tot Aftrap',
    match_stay_label: 'Verblijf Dicht bij de Actie', match_venue_info: 'Stadion Info',
    match_address: 'Adres', match_capacity: 'Capaciteit',
    match_getting: 'Hoe Kom je Er', match_bags: 'Tassenbeleid',
    match_bags_text: 'Alleen doorzichtige tassen - Max 30x15x30 cm - Mobiel ticket verplicht',
    match_getting_text: 'TRE-trein naar CentrePort, dan gratis FIFA-shuttle. Geen directe trein naar Arlington.',
    match_fifa_config: 'FIFA Wereldkampioenschap configuratie',
    match_booking_sub: 'Verblijf in Arlington voor loopafstand, of in het centrum van Dallas met DART.',
    match_transit_link: 'Volledige Vervoersgids', match_add_cal: '+ Toevoegen aan Agenda',
    match_flying: 'Kom je voor deze wedstrijd?', match_find_date: 'Vind vluchten',
  }
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
        {url:'https://forecast.weather.gov/MapClick.php?lat=32.8975&lon=-97.0444', key:3},
        {url:'https://esta.cbp.dhs.gov', key:4},
      ]
    },
  {
    slug: 'jfk-memorial',
    name: 'JFK Memorial & Sixth Floor Museum',
    icon: '🏛️',
    cat: 'landmark',
    area: 'Downtown Dallas',
    price: '$',
    dart: true,
    duration: '2–3 hours',
    desc: 'The site where President Kennedy was assassinated in 1963. The Sixth Floor Museum in the former Texas School Book Depository is one of the most visited museums in Texas — moving, historically significant, and essential Dallas history.',
    long: 'Dealey Plaza in downtown Dallas is where President John F. Kennedy was shot on November 22, 1963 — one of the most significant moments in American history. The Sixth Floor Museum occupies the floor of the former Texas School Book Depository from which shots were fired. The museum covers Kennedy\'s presidency, the assassination, and its aftermath through film, photography, and artifacts. Powerful and sobering. Dealey Plaza itself is free to visit — stand on the grassy knoll and see the view for yourself. The museum requires a ticket ($18). DART Green/Blue Line to West End station, 5-minute walk.',
    highlights: ['The sniper\'s nest recreated exactly as it was in 1963','Original film footage of the motorcade','Dealey Plaza outdoor memorial — free to visit','Walking distance from Dallas\'s historic West End district'],
    tips: ['Buy museum tickets online in advance — lines can be long','Allow 2 hours minimum for the museum','The grassy knoll and plaza are free — no ticket needed','Combine with a walk through the West End and Klyde Warren Park'],
    address: '411 Elm St, Dallas, TX 75202',
    gmaps: 'https://maps.google.com/?q=Sixth+Floor+Museum+Dallas+TX',
    website: 'https://www.jfk.org',
  },
  {
    slug: 'gun-range',
    name: 'Shoot Smart Gun Range',
    icon: '🎯',
    cat: 'indoor',
    area: 'Multiple DFW Locations',
    price: '$$',
    dart: false,
    duration: '1–2 hours',
    desc: 'Shoot a real American firearm at one of DFW\'s premier indoor shooting ranges. For many international visitors, this is a uniquely American experience unavailable at home. Professional instruction, safety equipment provided, and a wide range of firearms to try.',
    long: 'Shooting at an American gun range is one of the most uniquely American experiences available to international visitors. Shoot Smart is one of DFW\'s most professional and well-run ranges — clean, safe, and welcoming to first-timers. Staff provide full safety briefing and instruction. No prior experience needed. Firearms available to rent include pistols, rifles, and shotguns. All safety equipment (ear protection, eye protection) is provided. Multiple DFW locations including Arlington near the stadium. Visitors from countries without civilian gun access consistently describe this as the most memorable activity of their trip.',
    highlights: ['Fully staffed with professional range safety officers','No prior experience required — beginners welcome','Wide range of firearms to rent including pistols and rifles','Safety equipment included in range fee'],
    tips: ['Book a lane in advance — busy on weekends','Closed-toe shoes required','Must be 18+ to shoot (21+ for handguns without a guardian)','Staff are excellent with first-timers — ask for instruction'],
    address: 'Multiple DFW locations — 4825 S Cooper St, Arlington, TX (near stadium)',
    gmaps: 'https://maps.google.com/?q=Shoot+Smart+Gun+Range+Arlington+TX',
    website: 'https://www.shootsmart.com',
  },  ];
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
