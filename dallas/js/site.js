
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
    desc:"Dallas\'s most viral halal restaurant. Authentic Yemeni mandi — slow-roasted lamb and chicken over fragrant spiced rice, handmade bread from a tandoor oven, and traditional floor seating. 6 million TikTok views and counting.",
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

  // ── PREVIOUSLY CREATED (completing array) ──
  { slug:'el-fenix', name:'El Fenix', stars:4, cuisine:'Mexican', cat:'mexican', price:'$', area:'Dallas',
    desc:'A Dallas institution since 1918 — the original Tex-Mex chain. Enchiladas, tamales, and chile rellenos served the old-school way.',
    long:'El Fenix has been feeding Dallas since 1918, making it one of the oldest restaurant chains in Texas. Combination plates piled high with enchiladas, rice, and beans for under $15. The downtown Dallas location is a landmark.',
    address:'1601 McKinney Ave, Dallas, TX 75202', hours:'Mon–Thu 11am–9pm · Fri–Sat 11am–10pm · Sun 11am–9pm',
    tags:['Dallas Institution','Since 1918','Authentic Tex-Mex'],
    website:'https://www.elfenix.com', gmaps:'https://maps.google.com/?q=El+Fenix+Dallas+TX',
    tips:['Order the #1 combination plate — the classic','Green chili sauce is the star — ask for extra','Downtown location most convenient for visitors','Margaritas are excellent and very reasonably priced']
  },
  { slug:'urban-taco', name:'Urban Taco', stars:4, cuisine:'Mexican', cat:'mexican', price:'$$', area:'Uptown',
    desc:'Modern Mexican with street taco roots. Birria, al pastor, and a knockout margarita list. The Uptown patio is one of the best in Dallas.',
    long:'Urban Taco takes Mexican street food seriously. The birria queso tacos are some of the best in the city — braised beef, melted cheese, and consommé for dipping. The outdoor patio on McKinney Avenue gets electric on weekend evenings.',
    address:'4111 Lomo Alto Dr, Dallas, TX 75219', hours:'Daily 11am–10pm (11pm Fri–Sat)',
    tags:['Birria Tacos','Rooftop Patio','Happy Hour'],
    website:'https://www.urbantaco.com', gmaps:'https://maps.google.com/?q=Urban+Taco+Dallas+TX',
    tips:['Birria queso tacos are the must-order','Large groups — reserve the patio in advance','Happy hour 3–6pm Mon–Fri','Walk from most Uptown hotels']
  },
  { slug:'whataburger', name:'Whataburger', stars:4, cuisine:'American · Burgers', cat:'fastfood', price:'$', area:'DFW — Multiple',
    desc:"Texas's most beloved burger chain — a genuine cultural institution. Thick beef patties, jalapeño sauce, and a 24-hour cult following.",
    long:'Whataburger is not just a burger chain — it is a Texas religion. Founded in 1950 and open 24 hours, the orange-and-white restaurants are a DFW staple. The jalapeño burger with seasoned fries and a Dr Pepper is as Texan as it gets.',
    address:'Multiple DFW locations — open 24 hours',
    hours:'Open 24 hours',
    tags:['Texas Icon','24 Hours','Jalapeño Burger'],
    website:'https://whataburger.com', gmaps:'https://maps.google.com/?q=Whataburger+Dallas+TX',
    tips:['Jalapeño and cheese burger is the signature','Fancy ketchup (orange lid) is a Texas souvenir','Open 24 hours — great after a late match','Honey butter chicken biscuit at breakfast is legendary']
  },
  { slug:'in-n-out', name:'In-N-Out Burger', stars:5, cuisine:'American · Burgers', cat:'fastfood', price:'$', area:'DFW — Multiple',
    desc:'The legendary California burger chain. Fresh-never-frozen beef, secret menu, and Animal Style. International visitors make it a pilgrimage.',
    long:'In-N-Out has a cult following worldwide. Patties are never frozen, buns baked fresh daily, and the secret menu is worth knowing. Despite the global fame, prices stay incredibly low. DFW has multiple locations. The line is always worth the wait.',
    address:'4901 Airport Fwy, Fort Worth, TX (near stadium)',
    hours:'Sun–Thu 10:30am–1am · Fri–Sat 10:30am–1:30am',
    tags:['California Legend','Fresh Never Frozen','Secret Menu'],
    website:'https://www.in-n-out.com', gmaps:'https://maps.google.com/?q=In-N-Out+Burger+Fort+Worth+TX',
    tips:['Order Double-Double Animal Style — the classic secret menu','Fresh-cut fries are better than regular fries','Chocolate shake is exceptional','Line moves faster than it looks']
  },
  { slug:'pdq', name:'PDQ', stars:4, cuisine:'American · Chicken', cat:'fastfood', price:'$', area:'Arlington',
    desc:'Texas-born fast-casual chicken chain. Hand-breaded tenders, fresh salads, and the best fast-food milkshakes in DFW. Near AT&T Stadium.',
    long:'PDQ (People Dedicated to Quality) has a strong Texas following. Hand-breaded chicken tenders made to order, fresh salads, and hand-spun milkshakes. Far better quality than the national giants at similar prices. Near the stadium in Arlington.',
    address:'2300 E Lamar Blvd, Arlington, TX', hours:'Daily 10:30am–10pm',
    tags:['Hand-Breaded Chicken','Near Stadium','Fresh Fast Casual'],
    website:'https://www.eatpdq.com', gmaps:'https://maps.google.com/?q=PDQ+Arlington+Texas',
    tips:['Hand-spun milkshakes are exceptional','Try multiple dipping sauces — ranch and honey mustard','Near AT&T Stadium in Arlington','Faster and fresher than big-name chains']
  },
  { slug:'ramen-suzuki', name:'Ramen Suzuki', stars:5, cuisine:'Japanese · Ramen', cat:'asian', price:'$$', area:'Addison',
    desc:'The best ramen in DFW — 18-hour tonkotsu broth, hand-made noodles, and a line out the door every weekend.',
    long:'Ramen Suzuki does one thing perfectly. The tonkotsu broth simmers for 18 hours, noodles are made fresh daily, and portions are enormous. Worth the 20-minute drive from downtown. Weekend waits hit 45 minutes — arrive early.',
    address:'5290 Belt Line Rd, Addison, TX 75001', hours:'Tue–Sun 11am–2:30pm & 5:30–9:30pm · Closed Mon',
    tags:['Best Ramen in DFW','18-Hour Broth','Authentic Japanese'],
    website:'https://maps.google.com/?q=Ramen+Suzuki+Addison+TX', gmaps:'https://maps.google.com/?q=Ramen+Suzuki+Addison+TX',
    tips:['Arrive before opening on weekends or expect a 45-min wait','Tonkotsu is the signature — start there','Add a soft-boiled egg — always worth it','Cash and card both accepted']
  },
  { slug:'monkey-king-noodle', name:'Monkey King Noodle', stars:4, cuisine:'Chinese · Noodles', cat:'asian', price:'$', area:'Deep Ellum',
    desc:"Xi\'an-style hand-pulled noodles in the heart of Deep Ellum. Cumin lamb noodles, excellent vegetarian options, enormous portions.",
    long:"Monkey King brings Xi\'an-style Chinese street food to Deep Ellum. Noodles are hand-pulled to order. The cumin lamb signature dish is genuinely excellent. A great cheap lunch before exploring Deep Ellum\'s music scene.",
    address:'2845 Commerce St, Dallas, TX 75226', hours:'Wed–Mon 11am–9pm · Closed Tue',
    tags:["Xi\'an Chinese",'Hand-Pulled Noodles','Deep Ellum'],
    website:'https://www.monkeykingdallas.com', gmaps:'https://maps.google.com/?q=Monkey+King+Noodle+Dallas+TX',
    tips:['Cumin lamb hand-pulled noodles is the dish to order','Vegetarian menu is extensive','In Deep Ellum — combine with Pecan Lodge for a food crawl','Go early — they run out of noodles by 8pm']
  },
  { slug:'pho-bang', name:'Pho Bang', stars:4, cuisine:'Vietnamese · Pho', cat:'asian', price:'$', area:'Dallas',
    desc:'The best pho in DFW — a 30-year Vietnamese institution with enormous bowls, authentic broth, and outstanding banh mi.',
    long:'Pho Bang has served DFW for over 30 years. The pho broth simmers from beef bones for hours — clear, rich, deeply fragrant. Portions are enormous. Cash preferred, no-frills dining room. Worth the drive for the authentic experience.',
    address:'9780 Ferguson Rd, Dallas, TX 75228', hours:'Daily 8am–8pm',
    tags:['DFW Institution','30 Years Open','Best Pho'],
    website:'https://maps.google.com/?q=Pho+Bang+Dallas+TX', gmaps:'https://maps.google.com/?q=Pho+Bang+Dallas+TX',
    tips:['Pho tai (rare beef) is the classic order','Banh mi are excellent and under $5','Bring cash — preferred over card','Vietnamese iced coffee is mandatory']
  },

  // ── TEX-MEX ──
  { slug:'meso-maya', name:'Meso Maya', stars:5, cuisine:'Tex-Mex · Mexican', cat:'texmex', price:'$$', area:'Uptown',
    desc:'Upscale Tex-Mex from Central and Southern Mexico. Mole Poblano enchiladas, avocado margaritas, and tableside guacamole. The McKinney Ave flagship is the best in the chain.',
    long:'Meso Maya brings dishes from Veracruz, Oaxaca, and Puebla to Dallas — this is not the standard combo plate Tex-Mex. The mole is made in-house and is genuinely complex. The avocado margarita is one of the best cocktails in Dallas. Multiple locations across DFW with the Uptown flagship being the most convenient for visitors.',
    address:'1611 McKinney Ave, Dallas, TX 75202', hours:'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 10am–10pm',
    tags:['Upscale Tex-Mex','Award-Winning Mole','Avocado Margarita'],
    website:'https://www.mesomaya.com', gmaps:'https://maps.google.com/?q=Meso+Maya+Dallas+TX',
    tips:['The avocado margarita is unmissable','Mole Poblano enchiladas are the signature dish','Make a reservation — busy on weekends','Tableside guacamole is worth the extra cost']
  },
  { slug:'mi-cocina', name:'Mi Cocina', stars:4, cuisine:'Tex-Mex', cat:'texmex', price:'$$', area:'Highland Park',
    desc:'Dallas institution since 1991. Famous for the Mambo Taxi — a margarita-sangria fusion that has its own cult following. Reliable Tex-Mex in a warm, welcoming setting.',
    long:'Mi Cocina has been a Dallas Tex-Mex institution since 1991, beloved by locals across generations. The Mambo Taxi cocktail — a margarita and sangria hybrid — is one of the most iconic drinks in Dallas. The food is crowd-pleasing Tex-Mex done consistently well. Multiple locations across DFW make it accessible from wherever you\'re staying.',
    address:'77 Highland Park Village, Dallas, TX 75205', hours:'Sun–Thu 11am–10pm · Fri–Sat 11am–11pm',
    tags:['Dallas Institution','Mambo Taxi','Multiple Locations'],
    website:'https://www.micocina.com', gmaps:'https://maps.google.com/?q=Mi+Cocina+Highland+Park+Dallas',
    tips:['Mambo Taxi is the drink everyone orders — try it','Multiple DFW locations — pick the closest to you','Great for large groups','Happy hour specials worth checking']
  },
  { slug:'las-palmas', name:'Las Palmas Tex-Mex', stars:4, cuisine:'Tex-Mex', cat:'texmex', price:'$$', area:'Uptown',
    desc:'Swanky Uptown Tex-Mex with legendary hickory ribs and velvety garlic-herb queso. The dark, lively ambiance makes it feel more elevated than a standard Tex-Mex joint.',
    long:'Las Palmas sits in the heart of Uptown with an atmosphere that feels more cocktail bar than combo plate restaurant. The hickory ribs are exceptional and the queso with garlic and fresh herbs is the best in the neighborhood. Prices are slightly higher than typical Tex-Mex but the setting and quality justify it. Perfect for a group dinner before or after a match.',
    address:'2708 Routh St, Dallas, TX 75201', hours:'Mon–Thu 11am–10pm · Fri–Sat 11am–11pm · Sun 11am–9pm',
    tags:['Uptown Location','Hickory Ribs','Great Queso'],
    website:'https://www.laspalmasdallas.com', gmaps:'https://maps.google.com/?q=Las+Palmas+Tex-Mex+Dallas+TX',
    tips:['Hickory ribs are the standout — order the half rack','Garlic herb queso is better than most in Dallas','Dark and lively atmosphere — good for groups','Walking distance from most Uptown hotels']
  },
  // ── MEXICAN ──
  { slug:'javier-gourmet', name:"Javier's Gourmet Mexicano", stars:5, cuisine:'Mexican', cat:'mexican', price:'$$$', area:'Uptown',
    desc:'The most authentic upscale Mexican restaurant in Dallas. Old Mexico City elegance, Filete Cantinflas, and a wine list that rivals fine dining. A Dallas institution loved by presidents and locals alike.',
    long:"Javier's is the restaurant Dallas reaches for when it wants to impress. Located on Cole Avenue in Uptown, the interior evokes classic Mexico City with dark wood, candlelight, and impeccable service. The menu stays true to Mexican heritage — not Tex-Mex — with dishes like Filete Cantinflas and Mayan Style Pork. The wine cellar is one of the best in Dallas. Reserve weeks ahead.",
    address:'4912 Cole Ave, Dallas, TX 75205', hours:'Mon–Sat 6pm–11pm · Closed Sunday',
    tags:['Fine Dining','Authentic Mexican','Wine Cellar','Presidential Favourite'],
    website:'https://www.javiers.net', gmaps:'https://maps.google.com/?q=Javiers+Gourmet+Mexicano+Dallas+TX',
    tips:['Reserve weeks in advance — genuinely hard to get a table','Dinner only — no lunch service','Dress smart — this is upscale dining','The wine list is exceptional — ask the sommelier']
  },
  { slug:'trompo', name:'Trompo', stars:5, cuisine:'Mexican · Tacos', cat:'mexican', price:'$', area:'West Dallas',
    desc:'The best al pastor tacos in Dallas. Slow-roasted pork on a vertical spit, hand-cut to order onto fresh corn tortillas. A cult favourite among Dallas taco lovers — simple, brilliant, essential.',
    long:'Trompo does one thing — al pastor tacos — and does it better than anyone in Dallas. The pork shoulder is marinated and slow-roasted on a traditional vertical trompo spit, shaved to order onto fresh corn tortillas with pineapple and cilantro. The line is always long. It is always worth it. Cash only. Get there early.',
    address:'218 W. Commerce St, Dallas, TX 75208', hours:'Wed–Mon 11am–4pm or until sold out · Closed Tue',
    tags:['Al Pastor Specialist','Cash Only','Sells Out Daily','Cult Favourite'],
    website:'https://maps.google.com/?q=Trompo+Dallas+TX', gmaps:'https://maps.google.com/?q=Trompo+Dallas+TX',
    tips:['Cash only — bring USD','Gets there by 11:30am — sold out by 2pm most days','Al pastor with pineapple is the only thing to order','Near Bishop Arts District — combine visits']
  },
  { slug:'calle-doce', name:'Calle Doce', stars:4, cuisine:'Mexican · Seafood', cat:'mexican', price:'$$', area:'Oak Cliff',
    desc:'Family-run Mexican seafood restaurant since 1981 in a charming Oak Cliff home. Veracruz-style shrimp, grilled fish, and Camaron a la Veracruzana. Authentic and beloved.',
    long:'The Sanchez family has been serving Oak Cliff from this charming converted home since 1981. Calle Doce leans into Veracruz-style seafood — a different corner of Mexican cuisine than most Dallas visitors expect. The Camaron a la Veracruzana (shrimp in tomato, olives, capers) is the signature dish. Warm, family atmosphere that feels nothing like a tourist restaurant.',
    address:'415 W 12th St, Dallas, TX 75208', hours:'Tue–Thu 11am–9pm · Fri–Sat 11am–10pm · Sun 11am–9pm · Closed Mon',
    tags:['Family-Run Since 1981','Veracruz Seafood','Oak Cliff','Authentic'],
    website:'https://maps.google.com/?q=Calle+Doce+Dallas+TX', gmaps:'https://maps.google.com/?q=Calle+Doce+Oak+Cliff+Dallas',
    tips:['Camaron a la Veracruzana is the signature — must order','Grilled fish dishes are exceptional','Oak Cliff neighbourhood — combine with Bishop Arts','Arrive early on weekends — no reservations']
  },
  // ── ASIAN ──
  { slug:'loro', name:'Loro Asian Smokehouse', stars:5, cuisine:'Asian Fusion · BBQ', cat:'asian', price:'$$', area:'North Dallas',
    desc:'A James Beard-backed Texas smokehouse meets Asian eatery. Smoked brisket with Asian flavours, chicken karaage, pork belly with coconut rice. One of the most original concepts in Dallas.',
    long:'Loro is a collaboration between the team behind Uchi (one of America\'s top Japanese restaurants) and Aaron Franklin (America\'s most famous pitmaster). The result is a Texas smokehouse with Japanese and Southeast Asian flavour profiles — smoked brisket with koji butter, chicken karaage, salmon collar. Beautiful timber-and-steel space with a large outdoor area. One of Dallas\'s most unique dining experiences.',
    address:'14999 Montfort Dr, Dallas, TX 75254', hours:'Sun–Thu 11am–9pm · Fri–Sat 11am–10pm',
    tags:['James Beard Backed','BBQ Meets Asian','Uchi Collaboration','Unique Concept'],
    website:'https://www.loroeats.com', gmaps:'https://maps.google.com/?q=Loro+Asian+Smokehouse+Dallas+TX',
    tips:['Smoked brisket with koji butter is the must-order','Large outdoor patio — great on cooler evenings','Book a table — it gets very busy','The cocktail programme matches the food quality']
  },
  { slug:'uchi-dallas', name:'Uchi Dallas', stars:5, cuisine:'Japanese · Sushi', cat:'asian', price:'$$$$', area:'Uptown',
    desc:"One of America\'s top Japanese restaurants, now in Dallas. James Beard Award-winning chef Tyson Cole's creative omakase-style menu redefines sushi. The finest Japanese dining in DFW.",
    long:"Uchi Dallas is a branch of the celebrated Austin original, rated among America\'s best Japanese restaurants. Chef Tyson Cole's creative menu goes far beyond conventional sushi — dishes like machi cure (yellowtail, citrus, truffle) and daily specials driven by seasonal ingredients. The omakase tasting menu is exceptional. This is a splurge meal but one of the genuine fine dining experiences in Dallas.",
    address:'2817 Maple Ave, Dallas, TX 75201', hours:'Mon–Thu 5pm–10pm · Fri–Sat 5pm–11pm · Sun 5pm–9pm',
    tags:['James Beard Restaurant','Omakase','World-Class Sushi','Fine Dining'],
    website:'https://uchirestaurants.com/dallas', gmaps:'https://maps.google.com/?q=Uchi+Dallas+TX',
    tips:['Reserve 2–3 weeks in advance','Omakase tasting menu is the best way to experience it','Happy Hour (5–6:30pm daily) offers omakase bites at half price','Best Japanese restaurant in DFW — worth the splurge']
  },
  { slug:'ngon-vietnamese', name:'Ngon Vietnamese Kitchen', stars:5, cuisine:'Vietnamese', cat:'asian', price:'$$', area:'Lower Greenville',
    desc:'Crown jewel of Lower Greenville. Exceptional pho, banh mi, and Vietnamese classics in a stylish setting. Consistently rated among the best Vietnamese restaurants in DFW.',
    long:'Ngon Vietnamese Kitchen brings refined Vietnamese cooking to one of Dallas\'s best dining corridors on Lower Greenville. The pho broth is simmered for hours — clear, fragrant, and rich. The banh mi is outstanding. The space is modern and comfortable. For visitors wanting excellent Asian food within walking distance of popular Dallas neighborhoods, Ngon is the pick.',
    address:'1907 Greenville Ave, Dallas, TX 75206', hours:'Mon–Thu 11am–9:30pm · Fri–Sat 11am–10pm · Sun 11am–9pm',
    tags:['Lower Greenville','Award-Winning Pho','Vietnamese Fine Casual'],
    website:'https://www.ngondallas.com', gmaps:'https://maps.google.com/?q=Ngon+Vietnamese+Kitchen+Dallas+TX',
    tips:['Pho and banh mi are the anchors — both exceptional','Great DART access from Lower Greenville area','Lively at lunch — book for dinner','Vietnamese iced coffee is excellent']
  },
  { slug:'korean-bbq-partners', name:'Korean BBQ Partners', stars:4, cuisine:'Korean BBQ', cat:'asian', price:'$$', area:'Carrollton',
    desc:'The best Korean BBQ experience in DFW. Table grills, premium cuts of beef and pork, banchan spreads, and soju. A quintessential Korean BBQ night out — the full communal experience.',
    long:'Korean BBQ in Dallas is centred in the Carrollton-Farmers Branch corridor, home to a large Korean community. Korean BBQ Partners is consistently rated the best in the area — premium marbled beef (galbi, samgyeopsal), excellent banchan (side dishes), and a lively atmosphere. The table grill experience is social and fun — perfect for groups. Allow 2+ hours for a full Korean BBQ dinner.',
    address:'1902 E Belt Line Rd, Carrollton, TX 75006', hours:'Mon–Sun 11:30am–11:30pm',
    tags:['Table Grills','Premium Korean BBQ','Group Experience','AYCE Option'],
    website:'https://maps.google.com/?q=Korean+BBQ+Partners+Carrollton+TX', gmaps:'https://maps.google.com/?q=Korean+BBQ+Partners+Carrollton+TX',
    tips:['Go with a group of 4+ for the best experience','Galbi (short rib) and samgyeopsal (pork belly) are must-orders','Allow 2 hours minimum for a proper Korean BBQ session','Carrollton is 25 min from downtown — worth the drive']
  },
  // ── FAST FOOD ──
  { slug:'raising-canes', name:"Raising Cane's", stars:4, cuisine:'American · Chicken', cat:'fastfood', price:'$', area:'DFW — Multiple',
    desc:'Louisiana-born, Texas-adopted chicken tender chain. One menu item done perfectly — chicken tenders, crinkle fries, Texas toast, and the legendary Cane\'s sauce. A cult following worldwide.',
    long:"Raising Cane\'s was founded in Baton Rouge but has become a Texas institution. The menu has exactly one thing: chicken tenders. They are always fresh, always crispy, and always served with the secret Cane\'s sauce (a tangy, creamy dipping sauce with a cult following). Multiple DFW locations including near AT&T Stadium. International visitors consistently rate it as the best American fast food they've tried.",
    address:'Multiple DFW locations — 4620 S Cooper St, Arlington, TX (near stadium)',
    hours:'Sun–Thu 10am–1am · Fri–Sat 10am–3:30am',
    tags:['Cult Following','Fresh Chicken Tenders','Late Night','One Menu Item'],
    website:'https://www.raisingcanes.com', gmaps:'https://maps.google.com/?q=Raising+Canes+Arlington+Texas',
    tips:["Cane\'s sauce is the secret weapon — ask for extra",'The Box Combo is the classic — 3 tenders, fries, coleslaw, toast, sauce','Open very late — great post-match option','Line moves very fast despite appearances']
  },
  { slug:'buc-ees', name:"Buc-ee's", stars:5, cuisine:'American · Texas Experience', cat:'fastfood', price:'$', area:'Terrell TX (45 min)',
    desc:"Not just a gas station — the most famous travel stop in America. Beaver nuggets, brisket sandwiches, fresh fudge, and 100+ fuel pumps. A uniquely American and uniquely Texan experience that international visitors go out of their way for.",
    long:"Buc-ee's is a Texas phenomenon — a gas station and convenience store the size of a small supermarket, with 120 fuel pumps, exceptionally clean bathrooms, and food that rivals actual restaurants. The slow-smoked brisket sandwich, beaver nuggets (caramel puffed corn), and fresh kolaches are the classics. International visitors make it a pilgrimage. The nearest location is in Terrell, about 45 minutes east of Dallas on I-20.",
    address:'I-20 at Exit 501, Terrell, TX 75160 (45 min from Dallas)',
    hours:'Open 24 hours',
    tags:['Texas Legend','24 Hours','Road Trip Stop','Brisket Sandwiches'],
    website:'https://www.buc-ees.com', gmaps:'https://maps.google.com/?q=Buc-ees+Terrell+Texas',
    tips:['Take the I-20 East toward Terrell — 45 minutes from downtown Dallas','Get the brisket sandwich, beaver nuggets, and a kolache','The bathrooms are famously spotless — often rated best in America','Combine with a day trip back from the airport or a day out']
  },
  // ── INTERNATIONAL ──
  { slug:'al-biernat', name:"Al Biernat's", stars:5, cuisine:"Steakhouse · American", cat:'international', price:'$$$$', area:'Oak Lawn',
    desc:"Dallas\'s most beloved steakhouse. Celebrity clientele, prime dry-aged beef, and old-school hospitality that makes every guest feel like a regular. Where Dallas power brokers have dinner.",
    long:"Al Biernat's has been the power dining room of Dallas for decades. Prime dry-aged steaks, exceptional seafood, and a wine cellar worth exploring. The dining room hums with Dallas energy — politicians, sports team owners, TV personalities. Service is impeccable. This is the steakhouse experience that defines Dallas fine dining. Reserve 2–3 weeks in advance.",
    address:'4217 Oak Lawn Ave, Dallas, TX 75219', hours:'Mon–Fri 11:30am–10pm · Sat–Sun 5pm–10pm',
    tags:['Dallas Power Dining','Prime Dry-Aged Beef','Celebrity Clientele','Fine Dining'],
    website:'https://www.albiernats.com', gmaps:'https://maps.google.com/?q=Al+Biernats+Dallas+TX',
    tips:['Reserve well in advance — one of the hardest tables in Dallas','The 28-day dry-aged prime ribeye is the benchmark','Dress smart — this is Oak Lawn fine dining','Go for lunch if dinner is fully booked — same quality, easier to get in']
  },
  { slug:'tei-an', name:'Tei-An', stars:5, cuisine:'Japanese · Soba', cat:'international', price:'$$$', area:'Arts District',
    desc:'One-of-a-kind soba restaurant in the Dallas Arts District. Master soba chef Teiichi Sakurai hand-pulls fresh buckwheat noodles daily. James Beard nominated and beloved by the culinary world.',
    long:"Tei-An is unlike anything else in Dallas. Chef Teiichi Sakurai trained as a soba master in Japan and handmakes fresh buckwheat soba noodles daily — a dying art even in Japan. Located in One Arts Plaza in the Dallas Arts District, Tei-An is a beautiful, serene restaurant that serves some of the most refined Japanese cuisine in the American South. The soba is extraordinary. Walk to the Sixth Floor Museum or Nasher Sculpture Center after dinner.",
    address:'1722 Routh St #110, Dallas, TX 75201', hours:'Tue–Sun 11:30am–2pm & 5:30pm–10pm · Closed Mon',
    tags:['James Beard Nominated','Hand-Made Soba','Arts District','Unique in Dallas'],
    website:'https://www.tei-an.com', gmaps:'https://maps.google.com/?q=Tei+An+Dallas+TX',
    tips:['The cold soba is exceptional in Dallas summer heat','Reserve in advance — small restaurant, fills up fast','In the Arts District — combine with the Nasher or DMA','The omakase soba tasting is the ultimate way to experience it']
  },
  { slug:'mot-hai-ba', name:'Mot Hai Ba', stars:5, cuisine:'Vietnamese · Modern', cat:'international', price:'$$$', area:'Lower Greenville',
    desc:'Modern Vietnamese fine dining on Lower Greenville. Chef Peja Krstic reimagines Vietnamese classics with European technique. One of the most acclaimed restaurants in Dallas.',
    long:"Mot Hai Ba (Vietnamese for 1-2-3) is where Vietnamese cuisine meets fine dining technique. Chef Peja Krstic — who previously cooked at Michelin-starred restaurants — brings European precision to Vietnamese flavour profiles. The result is extraordinary: lemongrass beef tenderloin, crispy duck with pickled papaya, and cocktails that incorporate Vietnamese herbs. One of Dallas\'s most talked-about restaurants.",
    address:'2914 Greenville Ave, Dallas, TX 75206', hours:'Tue–Sat 5:30pm–10pm · Closed Sun–Mon',
    tags:['Modern Vietnamese','Fine Dining','Lower Greenville','Chef-Driven'],
    website:'https://www.mothaibadallas.com', gmaps:'https://maps.google.com/?q=Mot+Hai+Ba+Dallas+TX',
    tips:['Tasting menu is the best way to experience the full vision','Reserve at least a week in advance','Dinner only — not open for lunch','One of the most impressive restaurants in DFW']
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
      <div style="position:relative" id="gt-dropdown-wrap">
        <button onclick="document.getElementById(\'gt-menu\').style.display=document.getElementById(\'gt-menu\').style.display===\'none\'?\'block\':\'none\'" style="background:transparent;border:1px solid var(--border);color:var(--muted);border-radius:3px;padding:3px 8px;font-size:.68rem;cursor:pointer;height:28px;white-space:nowrap;display:flex;align-items:center;gap:4px">&#127760; Translate <span style="font-size:.5rem">▾</span></button>
        <div id="gt-menu" style="display:none;position:absolute;top:32px;right:0;background:var(--card);border:1px solid var(--border);border-radius:4px;box-shadow:0 8px 24px rgba(0,0,0,.4);z-index:500;min-width:160px;padding:4px 0">
          <div onclick="gtGo(\'nl\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇳🇱 Nederlands</div>
          <div onclick="gtGo(\'es\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇪🇸 Español</div>
          <div onclick="gtGo(\'fr\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇫🇷 Français</div>
          <div onclick="gtGo(\'de\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇩🇪 Deutsch</div>
          <div onclick="gtGo(\'ar\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇸🇦 Arabic</div>
          <div onclick="gtGo(\'pt\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇧🇷 Português</div>
          <div onclick="gtGo(\'it\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇮🇹 Italiano</div>
          <div onclick="gtGo(\'ja\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇯🇵 日本語</div>
          <div onclick="gtGo(\'ko\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇰🇷 한국어</div>
          <div onclick="gtGo(\'zh-CN\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇨🇳 中文</div>
          <div onclick="gtGo(\'ru\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇷🇺 Русский</div>
          <div onclick="gtGo(\'tr\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇹🇷 Türkçe</div>
          <div onclick="gtGo(\'hi\')" style="padding:7px 14px;font-size:.78rem;color:var(--muted);cursor:pointer;white-space:nowrap" onmouseover="this.style.background=\'var(--mid)\'" onmouseout="this.style.background=\'transparent\'">🇮🇳 हिन्दी</div>
        </div>
      </div>
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
    related_label:'Related Guides', related_title:'Keep Exploring',
    
    home_book_title:'Plan Your Dallas Trip',
    home_book_sub:'Compare hotels near AT&T Stadium, find flights into DFW, and book rental cars.',
        
    // ── BOOKING TITLES [EN] ──
    book_plan_visit:'Plan Around This Visit',
    book_plan_visit_sub:'Stay close, book a rental car, and make the most of your day.',
    book_dallas_trip:'Book Your Dallas Trip',
    book_dallas_trip_sub:'Find flights into DFW, hotels near the stadium, and rental cars.',
    book_dallas_stay:'Plan Your Dallas Stay',
    book_dallas_stay_sub:'Book hotels, flights, and rental cars for your World Cup visit.',
    book_family_stay:'Plan Your Family Stay',
    book_family_stay_sub:'Hotels with pools are in high demand — book early for World Cup 2026.',
    book_fanzone:'Plan Your Fan Zone Visit',
    book_fanzone_sub:'Stay downtown Dallas for easy access to fan zones and DART connections.',
    book_match_day:'Book Your Match Day',
    book_match_day_sub:'Book your hotel near AT&T Stadium and flights into DFW.',
    book_explore:'Plan Your Dallas Stay',
    book_explore_sub:'Book hotels near the best Dallas neighborhoods.',
    book_search_now:'Search & Book Now',
    book_search_now_sub:'Compare hotels across Arlington, Dallas, and Fort Worth.',
    book_daytrips:'Plan Your Day Trips',
    book_daytrips_sub:'Rent a car to explore Texas. VRBO vacation homes make great overnight bases.',
    book_groups:'Book Group Accommodation',
    book_groups_sub:'VRBO houses sleep 8–16 people and often work out cheaper per person than hotels.',
    act_keep_label:'Keep Exploring', act_keep_title:'More Activities', act_all_fam:'All Family Activities',
    
    // ── SHARED SECTION LABELS [EN] ──
    rst_about:'About',
    rst_full_story:'Full Story',
    rst_highlights:'Highlights',
    rst_insider:'Insider Tips',
    rst_staying:'Staying Nearby?',
    rst_why:'Why Go',
    rst_hotels_nearby:'Hotels Nearby',
    act_full_details:'Full Details',
    act_why:'Why Visit',
    act_how_to:'How to Get There',
    act_highlights:'Highlights',
    act_practical:'Practical Info',
    act_admission:'Admission Prices',
    act_insider:'Insider Tips',
    act_getting:'Getting There',
    act_what_see:'What to See',
    act_what_inc:'What\'s Included',
    act_before:'Before You Go',
    act_important:'Important Notes',
    nbh_about:'About',
    nbh_highlights:'Highlights',
    nbh_insider:'Insider Tips',
    nbh_book_for:'Book for This Area',
    nbh_where_eat:'Where to Eat Nearby',
    home_everything:'Everything You Need',
    home_live:'Live Conditions',
    mat_fixtures:'Dallas Fixtures',
    mat_venue:'AT&T Stadium · Arlington TX',
    mat_stay:'Stay Near the Action',
    mat_venue_info:'Venue Info',
    exp_nbh_title:'Neighborhoods',
    exp_where_eat:'Where to Eat in Dallas',
    exp_six_areas:'Six Areas to Know',
    fam_transit:'Family Transit Guide',
    fam_weather:'Dallas Weather Warning',
    fam_10_title:'10 Attractions for Families',
    fam_heat:'Plan Around the Heat',
    log_rec_route:'Recommended Route',
    log_all_opts:'All Transport Options',
    log_book_transport:'Book Your Transport',
    ap_when_land:'When You Land',
    map_interactive:'Interactive Visitor Map',
    tkt_categories:'Ticket Categories',
    wx_stadium:'Stadium Weather',
    wx_live:'Live from Dallas TX',
    wx_next24:'Next 24 Hours',
    wx_7day:'7-Day Forecast',
    srv_live:'Live Conditions',
    dt_san_antonio:'San Antonio — The Alamo & River Walk',
    
    // ── EXTRA LABELS [EN] ──
    nbh_stay_explore:'Stay & Explore',
    nbh_nearby_dining:'Nearby Dining',
    nbh_nearby:'Nearby',
    nbh_the_neighborhood:'The Neighborhood',
    rst_hotels_in:'Hotels in This Area',
    rst_more_rest:'More Dallas Restaurants',
    rst_keep_exploring:'Keep Exploring',
    wx_conditions:'Conditions at a Glance',
    wx_match_advice:'Match Day Advice',
    wx_stadium_weather:'Stadium Weather',
    fam_transit_guide:'Family Transit Guide',
    fam_weather_warning:'Dallas Weather Warning',
    
    // ── GENERIC SECTION KEYS [EN] ──
    nbh_the_details:'The Details',
    nbh_book_area:'Book for This Area',
    nbh_where_eat_h2:'Where to Eat',
    nbh_more_nbh:'More Neighborhoods',
    nbh_keep_exp:'Keep Exploring',
    rst_hotels_area:'Hotels in This Area',
    rst_more_restaurants:'More Restaurants',
    rst_keep_exp:'Keep Exploring',
    mat_dallas_fixtures:'Dallas Fixtures',
    exp_where_eat_h2:'Where to Eat',
    fam_transit_h2:'Family Transit Guide',
    fam_dallas_weather:'Dallas Weather Warning',
    wx_stadium_h2:'Stadium Weather',
    
    // ── HERO SUBTITLES [EN] ──
    survival_hero_sub:'Essential knowledge for international visitors. Texas has its own rules, culture, and climate — here\'s what you need to know before you arrive.',
    tickets_hero_sub:'Everything you need to know about buying tickets for FIFA World Cup 2026 matches in Dallas — official channels, resale options, prices, and scam warnings.',
    accommodation_hero_sub:'Arlington, downtown Dallas, or Fort Worth? Each has real pros and cons depending on how many matches you\'re attending, your budget, and what you want to do between games.',
    daytrips_hero_sub:'Most World Cup visitors have 7–14 days. Between matches, Texas has some of the most unique destinations in the world within a few hours drive.',
    checklist_hero_sub:'35 things to have sorted before you head to AT&T Stadium. Check them off as you go — missing any of these makes match day significantly harder.',
    fanzones_hero_sub:'You don\'t need a match ticket to experience the World Cup in Dallas. The official FIFA Fan Festival and dozens of watch party venues bring the atmosphere to everyone.',
    budget_hero_sub:'The honest truth about what a week in Dallas actually costs — from stadium snacks to hotel rates to tipping culture. Plan your budget before you arrive.',
    phrases_hero_sub:'America and Texas have their own rules — spoken and unspoken. Here\'s what international visitors consistently get wrong, and how to fit in.',
    families_hero_sub:'The best things to do with kids in and around Dallas during the World Cup — museums, theme parks, water parks, and ways to beat the Texas summer heat.',
    shopping_hero_sub:'Dallas is a world-class shopping destination — from luxury malls and designer boutiques to Texas-made goods and outlet bargains.',
    groups_hero_sub:'Travelling with a supporters club or a group of 10+? Groups have different logistics — hotel blocks, group transport, ticket coordination, and meeting points.',
    halal_hero_sub:'Dallas has a large and well-established Muslim community — halal food is genuinely easy to find, especially in Richardson. This guide covers everything Muslim visitors need.',
    airport_hero_sub:'DFW International is one of the largest airports in the world. Here\'s everything you need to get from the plane to your hotel without stress.',
    
    // ── GROUPS PAGE [EN] ──
    grp_accom1_title:'Hotel room blocks',
    grp_accom1_body:'For groups of 10+ rooms, contact hotels directly for group rates. Marriott, Hilton and Hyatt have group sales teams. Book well in advance.',
    grp_accom2_title:'VRBO for large groups',
    grp_accom2_body:'A large VRBO house fits 8–16 people for significantly less per person than hotels. Uptown Dallas and Las Colinas have excellent options with pools.',
    grp_accom3_title:'Spread across nearby cities',
    grp_accom3_body:'Large supporters clubs split accommodation across Dallas, Arlington and Fort Worth. Coordinate a central meeting point for match days.',
    grp_trans1_title:'TRE Train — best for groups',
    grp_trans1_body:'Runs from downtown Dallas to CentrePort on match days where FIFA provides free shuttles. Cheap ($2.50), reliable, and the whole group rides together.',
    grp_trans2_title:'Charter coach',
    grp_trans2_body:'For groups of 40+, chartering a coach is worth considering. Costs roughly $400–800 for a round trip. Book in advance and agree on pickup times.',
    grp_trans3_title:'Rideshare convoy',
    grp_trans3_body:'For groups of 8–20, book multiple Ubers simultaneously to the same location. Set a designated pickup point and request 30 minutes before departure.',
    grp_trans4_title:'Parking carpool',
    grp_trans4_body:'Groups with rental cars can carpool to reduce parking costs. Official AT&T Stadium parking is $30–60 per vehicle. Book passes in advance.',
    grp_before_match:'Before the match',
    grp_meetup_spots:'Best group meetup spots',
    grp_meet1_title:'Designate a meeting point',
    grp_meet1_body:'outside AT&T Stadium before entering — inside, mobile signal is poor. Agree on Gate A, B, C etc. as your rally point.',
    grp_meet2_title:'WhatsApp group',
    grp_meet2_body:'with all travellers. Share hotel addresses, ticket info and match day plans. Download offline maps for the Dallas area.',
    grp_meet3_title:'US SIM or eSIM',
    grp_meet3_body:'— everyone in the group needs a US number with data. US Mobile eSIM is the easiest option — activate before you fly.',
    grp_spot1:'The Rustic, Uptown — massive outdoor venue, handles large groups well. Great pre-match atmosphere with big screens.',
    grp_spot2:'Klyde Warren Park — free outdoor park in downtown Dallas. Large open space, food trucks, easy for a group to gather.',
    grp_spot3:'FIFA Fan Festival — the natural gathering point for supporters of all nations.',
    grp_clubs_intro:'Most national team supporters clubs organise group travel packages, ticket ballots and meetup events. Connect with yours before you travel.',
    grp_club1_title:'Oranje (Netherlands)',
    grp_club1_body:'The Dutch national supporters club is one of the most organised in world football — famous orange marches. Check oranjesupporter.nl for Dallas events.',
    grp_club2_title:'La Albiceleste (Argentina)',
    grp_club2_body:'Argentine supporters expected in huge numbers as defending champions. Dallas has an established Argentine community.',
    grp_club3_title:'Torcida (Brazil)',
    grp_club3_body:'Brazilian fans bring some of the tournament\'s best atmosphere. Large Brazilian community in DFW. Check official Torcida Brasil channels.',
    grp_club4_title:'American Outlaws (USA)',
    grp_club4_body:'US national team supporters club with active chapters in Dallas-Fort Worth. americanoutlaws.com — find the DFW chapter.',
    grp_6months:'6+ months before',
    grp_1month:'1 month before',
    grp_check1:'Book hotel room block or VRBO house',
    grp_check2:'Register all group members on FIFA.com',
    grp_check3:'Apply for tickets via FIFA ballot together',
    grp_check4:'Book flights (use same flight if possible)',
    grp_check5:'Set up group WhatsApp or Telegram',
    grp_check6:'Confirm all tickets are in FIFA app',
    grp_check7:'Arrange US Mobile eSIM for all members',
    grp_check8:'Book group transport to stadium',
    grp_check9:'Designate a group leader for match day',
    grp_check10:'Agree on stadium meeting point',
    
    // ── SHARED CARD LABELS [EN] ──
    lbl_address:'Address',
    lbl_hours:'Hours',
    lbl_cuisine:'Cuisine',
    lbl_price:'Price',
    lbl_halal:'Halal Status',
    lbl_dart:'DART',
    lbl_duration:'Duration',
    lbl_age:'Recommended Age',
    lbl_best_for:'Best Location for Visitors',
    lbl_phone:'Phone',
    lbl_website:'Website',
    lbl_experience:'Experience Needed',
    lbl_getting_there:'Getting There',
    lbl_insider_tips:'Insider Tips',
    lbl_admission:'Admission',
    lbl_age_req:'Age requirement',
    lbl_cost:'Cost',
    lbl_open_24:'Open 24 hours',
    lbl_official_site:'Official site',
    lbl_fifa_app:'FIFA Ticketing App',
    lbl_sales_phases:'Sales phases',
    lbl_id_required:'ID required',
    lbl_iata:'IATA Code',
    lbl_dist_dallas:'Distance to Dallas',
    lbl_dist_stadium:'Distance to Stadium',
    lbl_intl_terminal:'International Terminal',
    lbl_terminals:'Terminals',
    lbl_price_range:'Price range',
    lbl_best_for_who:'Best for',
    lbl_getting_there_dt:'Getting There',
    lbl_best_time:'Best time to visit',
    lbl_road_trip:'Road Trip Idea',
    lbl_halal_avail:'Halal food availability',
    lbl_mosques:'Mosques',
    lbl_prayer_stadium:'Prayer at the stadium',
    lbl_alcohol:'Alcohol at matches',
    lbl_restaurants_sit:'Restaurants (sit-down)',
    lbl_food_delivery:'Food delivery',
    lbl_uber_lyft:'Uber / Lyft',
    lbl_hotel_housekeep:'Hotel housekeeping',
    lbl_coffee_counter:'Coffee / counter service',
    lbl_tax_on_top:'Tax on top',
    
    // ── CARD CONTENT [EN] ──
    ap_step1_title:'Immigration & Customs (Terminal D)',
    ap_step1_body:'Allow 60–90 minutes. US citizens use APC kiosks. International visitors use staffed lanes. Have your ESTA or visa, passport, and return flight details ready.',
    ap_step2_title:'Get a US SIM Card',
    ap_step2_body:'AT&T and T-Mobile stores are in Terminal D arrivals hall — open from 6am. Prepaid SIMs from $20–40 for 30 days. Buy before leaving the terminal.',
    ap_step3_title:'Take the Skylink to Your Terminal',
    ap_step3_body:'If you have a connecting domestic flight, take the free Skylink automated train between terminals. It runs 24/7 every 2–5 minutes.',
    ap_step4_title:'DART Orange Line to Downtown Dallas',
    ap_step4_body:'The DART Orange Line runs from Terminal A (South) at DFW directly to downtown Dallas in ~45 minutes. Buy tickets on the GoPass app. $2.50 per trip.',
    ap_step5_title:'Getting to Arlington (Stadium)',
    ap_step5_body:'On match days: TRE train from DFW (CentrePort station) direct — then FREE FIFA shuttle to AT&T Stadium. No match day? Rent a car or Uber (~$35–50).',
    ap_term_a_label:'Terminal A — American Airlines',
    ap_term_b_label:'Terminal B — American Airlines',
    ap_term_c_label:'Terminal C — American Airlines',
    ap_term_d_label:'Terminal D ★ — International',
    ap_term_e_label:'Terminal E — Multiple Airlines',
    ap_term_d_note:'All international arrivals. Immigration, customs, SIM stores, currency exchange. If flying from Europe, South America, Asia or the Middle East — you land here.',
    ap_tip1_title:'Don\'t take a taxi from DFW',
    ap_tip1_body:'Taxis from DFW to downtown Dallas cost $50–80. The DART Orange Line does the same journey in 45 minutes for $2.50. Use the train.',
    ap_tip2_title:'Allow time for immigration',
    ap_tip2_body:'During the World Cup, DFW will be at peak international capacity. Budget 90 minutes minimum for immigration. Do not book tight connections on entry day.',
    ap_tip3_title:'Sort your ESTA before you fly',
    ap_tip3_body:'Visitors from visa-waiver countries need ESTA approval. Apply at esta.cbp.dhs.gov at least 72 hours before departure. It costs $21 and is valid for 2 years.',
    ap_tip4_title:'Download GoPass before arriving',
    ap_tip4_body:'The DART GoPass app lets you buy transit tickets on your phone. Download and set it up before you land so you can go straight to the DART platform.',
    ap_tip5_title:'DFW is enormous — allow connection time',
    ap_tip5_body:'DFW has 5 terminals spread across a huge area. Never book under 90 minutes for a connection at DFW.',
    ap_tip6_title:'Currency — get USD before you arrive',
    ap_tip6_body:'Airport currency exchange has terrible rates. Get USD at your home bank. Cards (Visa/Mastercard) are accepted almost everywhere in Dallas.',
    acc_arlington_title:'Arlington',
    acc_arlington_sub:'Walking distance to stadium',
    acc_arlington_body:'Most convenient for attending multiple matches. Walk or short Uber to AT&T Stadium. Limited nightlife compared to Dallas.',
    acc_arlington_best:'Attending 3+ matches · Groups who want to walk to the stadium',
    acc_dallas_title:'Downtown Dallas',
    acc_dallas_sub:'Best all-round choice',
    acc_dallas_body:'Best balance of access and experience. DART to the stadium, plus full access to Dallas\'s restaurants, fan zones, and nightlife.',
    acc_dallas_best:'First-time visitors · Exploring Dallas culture · Fan zones',
    acc_fw_title:'Fort Worth',
    acc_fw_sub:'Budget-friendly, charming',
    acc_fw_body:'Often overlooked but genuinely great. 30 minutes to the stadium, much cheaper hotels, and the Fort Worth Stockyards is a unique Texas experience.',
    acc_fw_best:'Budget-conscious visitors · Families · Those wanting a quieter base',
    acc_book_early_title:'Book now — prices will double',
    acc_book_early_body:'Dallas hotel prices during the World Cup are already 2–3× normal rates. By the time matches start, available rooms will be scarce. Book refundable rates now.',
    acc_free_cancel_title:'Free cancellation is your friend',
    acc_free_cancel_body:'Book fully refundable rates even if slightly higher. Match schedules can shift. Booking.com and VRBO both offer strong cancellation options.',
    acc_checkout_title:'Check checkout day carefully',
    acc_checkout_body:'Many hotels require minimum stays around match days. Look for hotels with no minimum stay requirements.',
    acc_non_match_title:'Consider checking out on a non-match day',
    acc_non_match_body:'Match days have surge pricing on Uber and chaotic traffic. Schedule your departure for a quiet Tuesday or Wednesday.',
    bud_budget_label:'Budget',
    bud_midrange_label:'Mid-Range ★',
    bud_splurge_label:'Splurge',
    bud_budget_items:'Fast food or food trucks ($8–12/meal)|DART for all transport|Free fan zones & parks|Budget hostel or shared rental|Free museums (DMA is free daily)',
    bud_mid_items:'Sit-down restaurants ($20–35/meal)|Occasional Uber ($15–25/trip)|Paid attractions ($20–30)|Mid-range hotel or private rental|Most people fall in this range',
    bud_splurge_items:'Fine dining ($80–150/meal)|Uber Black everywhere|Luxury hotel (Omni, Ritz, etc.)|Premium stadium experiences|Shopping at Northpark / Galleria',
    bud_tip1_title:'Dallas Museum of Art is Free',
    bud_tip1_body:'General admission is free every day. One of the best art museums in the American South — world-class collection. A great air-conditioned option on a hot afternoon.',
    bud_tip2_title:'DART saves $30–50 per day',
    bud_tip2_body:'A DART day pass is $6. The equivalent in Uber rides is $50–80. Use DART for anything downtown.',
    bud_tip3_title:'Use Wise or Revolut',
    bud_tip3_body:'Airport ATMs and currency exchange booths charge 5–8% in fees. A Wise or Revolut card gives you near-perfect exchange rates. Set one up before you fly.',
    bud_tip4_title:'Food trucks for lunch',
    bud_tip4_body:'Dallas has an excellent food truck scene. Excellent tacos, BBQ, and international food for $10–14. Save sit-down restaurants for dinner.',
    bud_tip5_title:'BYOW to the stadium (water)',
    bud_tip5_body:'Empty refillable water bottles are permitted through AT&T Stadium security. Stadium water costs $6–8 per bottle — a family of 4 saves $25+ per match.',
    bud_tip6_title:'Walmart / HEB for snacks',
    bud_tip6_body:'Stock up on snacks from a grocery store for your hotel room. HEB and Walmart are a fraction of the cost of hotel minibars.',
    phr_yall_title:'Y\'all',
    phr_yall_body:'You all / you (plural). The most Texas word in existence. "Y\'all ready to order?" means "Are you all ready to order?" Use it freely.',
    phr_fixin_title:'Fixin\' to',
    phr_fixin_body:'"I\'m fixin\' to head out" = "I\'m about to leave." Not broken, just Texas grammar.',
    phr_bless_title:'Bless your heart',
    phr_bless_body:'On the surface this sounds kind. In practice it often means "you poor fool." Context is everything.',
    phr_howdy_title:'Howdy',
    phr_howdy_body:'Hello. Yes, people actually say this in Texas. It\'s a genuine greeting. Say it back — it\'s endearing.',
    phr_check_title:'Check / the check',
    phr_check_body:'The bill at a restaurant. "Can we get the check?" not "Can we get the bill?" though both work.',
    phr_restroom_title:'Restroom',
    phr_restroom_body:'Toilet / bathroom. "Where\'s the restroom?" is the correct phrasing. "Toilet" is understood but sounds odd.',
    phr_togo_title:'To-go / take-out',
    phr_togo_body:'"Take-away" in American English is "to-go" or "take-out." "Can I get this to-go?" is what you say.',
    phr_soccer_title:'Soccer',
    phr_soccer_body:'What everyone in the US calls football. Don\'t be offended — Americans love the sport, they just have a different name for it.',
    phr_cult1_title:'Tipping is not optional',
    phr_cult1_body:'Service staff earn below minimum wage — tips make up the bulk of their income. 18–20% at restaurants is standard, not generous.',
    phr_cult2_title:'Fahrenheit, not Celsius',
    phr_cult2_body:'Dallas in June-July is 95–105°F (35–40°C). Quick conversion: subtract 32, divide by 1.8 to get Celsius.',
    phr_cult3_title:'Everything requires a car',
    phr_cult3_body:'Dallas is not a walking city outside specific neighborhoods. Use DART for downtown, Uber for everything else.',
    phr_cult4_title:'Free refills are real',
    phr_cult4_body:'Soft drinks come with unlimited free refills at almost every American restaurant. You don\'t need to ask.',
    phr_cult5_title:'How to order BBQ',
    phr_cult5_body:'At most Texas BBQ joints you order by weight at a counter — "half a pound of brisket, please." Eat with your hands.',
    phr_cult6_title:'Always carry your passport',
    phr_cult6_body:'US bars card everyone who looks under 40. You need government-issued photo ID to buy alcohol. Your passport is safest.',
    phr_cult7_title:'"How are you?" is a greeting',
    phr_cult7_body:'When an American says "Hi, how are you?" they expect "Good, thanks!" — not an actual account of your wellbeing.',
    phr_cult8_title:'Healthcare is very expensive',
    phr_cult8_body:'A hospital visit without insurance costs thousands. Buy comprehensive travel insurance before you travel — medical coverage is the most important part.',
    phr_col_restaurant:'At a restaurant',
    phr_col_transport:'Getting around',
    fz_tip1_title:'Arrive Early',
    fz_tip1_body:'Fan zones fill up 60–90 minutes before kickoff for major matches. For the Semifinal, plan to arrive 2+ hours early.',
    fz_tip2_title:'Beat the Heat',
    fz_tip2_body:'Outdoor fan zones in Dallas in June-July reach 38-40°C. Bring water, sunscreen, and a hat for daytime matches.',
    fz_tip3_title:'Wear Your Colors',
    fz_tip3_body:'National team shirts make fan zones electric. Dallas will have supporters from every nation.',
    fz_tip4_title:'Use DART',
    fz_tip4_body:'Downtown Dallas fan zones are easily reachable by DART light rail. Avoid driving — parking near popular venues is expensive.',
    fz_info_entry:'Entry',
    fz_info_screens:'Screens',
    fz_info_transport:'Getting There',
    fz_info_location:'Expected Location',
    fz_warning_title:'Official confirmation pending',
    fz_warning_body:'FIFA typically announces Fan Festival details 3–6 months before the tournament. Check FIFA.com for the latest.',
    shop_northpark:'NorthPark Center',shop_galleria:'Galleria Dallas',shop_allen:'Allen Premium Outlets',shop_legacy:'The Shops at Legacy',shop_bishop:'Bishop Arts District',shop_deepellum:'Deep Ellum',shop_cowboy:'Resistol or Stetson Hat',shop_boots:'Texas Cowboy Boots',shop_sauce:'Texas Hot Sauce & BBQ Rubs',shop_art:'Texas Art & Prints',shop_pecan:'Texas Pecan Treats',shop_merch:'Official Tournament Merchandise',fam_dart_title:'DART Light Rail',fam_car_title:'Rental Car',fam_uber_title:'Uber / Lyft with Kids',
    
    // ── TICKETS PAGE [EN] ──
    tkt_warning:'Always buy official first.',
    tkt_warning_body:'The only authorised source for FIFA World Cup 2026 tickets is FIFA.com/tickets. Any other site selling \"official\" tickets is a third party at best and a scam at worst.',
    tkt_official_site_body:'Register for a FIFA account first — required before any purchase',
    tkt_app_body:'Download the official FIFA app — all tickets are digital, stored here. Required for stadium entry. Download before you travel.',
    tkt_phases_body:'FIFA runs multiple sales phases — early ballot, general sale, and last-minute. Each phase opens on FIFA.com. Sign up for email alerts.',
    tkt_id_body:'Tickets are tied to your ID. At the gate you\'ll need your passport or ID matching the ticket name. Non-transferable without FIFA approval.',
    tkt_cat4_title:'Category 4',
    tkt_cat4_price:'$50–80',
    tkt_cat4_body:'Restricted view or upper tier. Lowest price, limited availability. Sold first in ballot phases.',
    tkt_cat3_title:'Category 3',
    tkt_cat3_price:'$100–150',
    tkt_cat3_body:'Upper tier with full pitch view. Best value category — good sight lines at AT&T Stadium.',
    tkt_cat2_title:'Category 2',
    tkt_cat2_price:'$200–350',
    tkt_cat2_body:'Lower tier, side stands. Excellent view, good atmosphere. Most popular category.',
    tkt_cat1_title:'Category 1',
    tkt_cat1_price:'$400–800',
    tkt_cat1_body:'Premium lower tier, behind goals or midfield. Best seats in the stadium. Very limited.',
    tkt_semi_title:'Semifinal',
    tkt_semi_price:'$400–2,000',
    tkt_semi_body:'Dallas hosts a Semifinal (July 14). Premium pricing across all categories. Book the moment sales open.',
    tkt_resale_intro:'FIFA runs an official resale platform — this is the safest secondary market option. Third-party resale sites also carry World Cup tickets but with significant price premiums.',
    tkt_resale1_title:'FIFA Official Resale',
    tkt_resale1_body:'FIFA.com/tickets — official resale marketplace. Safest option for secondary market. Tickets are verified and ID-linked. Check regularly as tickets are returned throughout the tournament.',
    tkt_resale2_title:'StubHub / Viagogo',
    tkt_resale2_body:'Expect 3–10× face value for popular matches. Prices spike as match day approaches for big games. Buy early if you\'re using resale. Both offer buyer guarantees.',
    tkt_resale3_title:'Supporters Club Allocation',
    tkt_resale3_body:'National football associations receive ticket allocations. Join your national supporters club — Dutch, Argentine, Brazilian, and English supporter clubs often have ticket packages for members.',
    tkt_scam1_title:'PDF tickets are fake',
    tkt_scam1_body:'FIFA World Cup 2026 tickets are digital only — stored in the FIFA app. Anyone selling a PDF, screenshot, or printed ticket is scamming you. Walk away immediately.',
    tkt_scam2_title:'Bank transfer = no protection',
    tkt_scam2_body:'Never pay by bank transfer, wire, crypto, or gift cards for tickets. Use a credit card through a verified platform only — gives you chargeback rights if the ticket is invalid.',
    tkt_scam3_title:'Social media sellers',
    tkt_scam3_body:'Facebook groups, WhatsApp, and Instagram are full of ticket scammers during major tournaments. Even if a seller looks legitimate with reviews and photos, use only verified platforms.',
    tkt_scam4_title:'Fake FIFA websites',
    tkt_scam4_body:'Scammers create convincing fake ticket sites. The only real FIFA ticketing URL is fifa.com — bookmark it and type it directly. Do not click links in emails or ads claiming to sell official tickets.',
    tkt_stad1_title:'Download the FIFA App',
    tkt_stad1_body:'Your ticket lives in the FIFA app. Download it and add your ticket well before match day. Keep the app on your home screen. Make sure your phone is charged.',
    tkt_stad2_title:'Arrive 90 minutes early',
    tkt_stad2_body:'AT&T Stadium is enormous. Security queues for 100,000+ people take time. Gates open 2.5 hours before kickoff. Arrive 90 minutes early to avoid missing the start.',
    tkt_stad3_title:'Clear bag policy',
    tkt_stad3_body:'AT&T Stadium enforces a strict clear bag policy. Only bags smaller than 12\"×6\"×12\" in clear plastic, vinyl, or PVC are permitted. Small clutch bags up to 4.5\"×6.5\" are allowed.',
    tkt_stad4_title:'Bring photo ID',
    tkt_stad4_body:'Your passport or government-issued ID must match the name on your ticket. FIFA may conduct random ID checks at the gate. Minors must be accompanied by the registered ticket holder.',
    
    // ── BIG PAGE CONTENT [EN] ──
    ap_step1_body:'Allow 60–90 minutes. US citizens use APC kiosks (faster). International visitors use staffed lanes. Have your ESTA or visa, passport, and return flight details ready.',
    ap_step2_body:'AT&T and T-Mobile stores are in Terminal D arrivals hall — open from 6am. Prepaid SIMs from $20–40 for 30 days. Much cheaper than roaming. Alternatively, activate an eSIM before you fly.',
    ap_step3_body:'If you have a connecting domestic flight, take the free Skylink automated train between terminals. It runs 24/7 every 2–5 minutes. Terminals are far apart — allow 30+ minutes for connections.',
    ap_step4_body:'The DART Orange Line runs from Terminal A (South) at DFW directly to downtown Dallas in ~45 minutes. $2.50 per trip. Do not take a taxi or Uber from the airport to downtown — DART is faster and 10× cheaper.',
    ap_step5_body:'On match days: TRE train from DFW direct to CentrePort/DFW station — then FREE FIFA shuttle to AT&T Stadium. No match day? Rent a car or Uber (~$35–50).',
    ap_tip1_body:'Taxis from DFW to downtown Dallas cost $50–80. The DART Orange Line does the same journey in 45 minutes for $2.50.',
    ap_tip2_body:'During the World Cup, DFW will be at peak international capacity. Budget 90 minutes minimum. Do not book tight connections on entry day.',
    ap_tip3_body:'Visitors from visa-waiver countries need ESTA approval. Apply at esta.cbp.dhs.gov at least 72 hours before departure. It costs $21 and is valid for 2 years.',
    ap_tip4_body:'The DART GoPass app lets you buy transit tickets on your phone. Download and set it up before you land so you can go straight to the DART platform.',
    ap_tip5_body:'DFW has 5 terminals spread across a huge area. Never book under 90 minutes for a connection at DFW.',
    ap_tip6_body:'Airport currency exchange has terrible rates. Get USD at your home bank. Cards (Visa/Mastercard) are accepted almost everywhere in Dallas.',
    ap_term_a_airlines:'American Airlines',
    ap_term_a_body:'Domestic US flights. DART Orange Line station is at Terminal A South — the quickest route to downtown Dallas.',
    ap_term_b_airlines:'American Airlines',
    ap_term_b_body:'Domestic US flights. Good food options including local Texas brands. Skylink to all other terminals.',
    ap_term_c_airlines:'American Airlines',
    ap_term_c_body:'Domestic and some international. Skylink connects to Terminal D for international arrivals and customs.',
    ap_term_d_airlines:'International — Most visitors land here',
    ap_term_d_body:'All international arrivals. Immigration, customs, SIM stores, currency exchange, and ground transport. If flying from Europe, South America, Asia, or the Middle East — you land here.',
    ap_term_e_airlines:'Multiple Airlines',
    ap_term_e_body:'Spirit, Frontier, United, and others. Ground transport to TRE and rental cars. Skylink to all terminals.',
    ap_dal_airlines:'Southwest Airlines (primary), Delta, United (limited)',
    ap_dal_dist:'8 km from downtown Dallas — much closer than DFW',
    ap_dal_transit:'DART Orange/Blue Line (Inwood/Love Field station) — 15 min to downtown',
    ap_dal_body:'Love Field is domestic only — no international flights. If you\'re connecting from a US city, you might land here. It\'s more convenient than DFW for downtown Dallas hotels. The DART light rail stop is a short walk from the terminal.',
    ap_dal_airlines_label:'Airlines',
    ap_dal_dist_label:'Distance',
    ap_dal_transit_label:'Transit',
    bud_budget_items:'Fast food or food trucks ($8–12/meal)|DART for all transport|Free fan zones & parks|Budget hostel or VRBO shared apartment|Free museums (DMA is free daily)',
    bud_mid_items:'Sit-down restaurants ($20–35/meal)|Occasional Uber ($15–25/trip)|Paid attractions ($20–30)|Mid-range hotel or private VRBO rental|Most people fall in this range',
    bud_splurge_items:'Fine dining ($80–150/meal)|Uber Black everywhere|Luxury hotel (Omni, Ritz, etc.)|Premium stadium experiences|Shopping at Northpark / Galleria',
    bud_per_day:'per day',
    bud_excl_note:'Per person per day, excluding match tickets and accommodation. All prices in USD.',
    bud_food_drink:'Food & Drink',
    bud_transport_activities:'Transport & Activities',
    bud_tipping_warning:'Tipping is not optional in the US.',
    bud_tipping_body:'Service staff are often paid below minimum wage — tips make up the difference. Not tipping is considered rude. Budget for it.',
    hal_tip1_title:'Verify halal certification',
    hal_tip1_body:'Always verify halal status with the restaurant directly — use Zabihah.com or the Halal Trip app to find certified halal restaurants in DFW.',
    hal_tip2_title:'Halal grocery stores',
    hal_tip2_body:'Al-Barakah Halal Meat Market in Richardson and Halal Meat Shop on Greenville Ave stock a wide range of certified halal meat and groceries.',
    hal_tip3_title:'Wudu at the stadium',
    hal_tip3_body:'AT&T Stadium bathrooms have standard sinks. Plan to perform wudu at your hotel before match day. Prayer room availability will be confirmed closer to the tournament.',
    hal_tip4_title:'Qibla direction in Dallas',
    hal_tip4_body:'From Dallas, the qibla direction is approximately 48–50° northeast. Use the Muslim Pro or Athan app for a precise compass reading.',
    hal_tip5_title:'Alcohol is everywhere',
    hal_tip5_body:'Alcohol is served at the stadium, in restaurants, and at fan zones. It is not compulsory — simply decline. The Richardson halal restaurant cluster is entirely alcohol-free.',
    hal_tip6_title:'Richardson — your base',
    hal_tip6_body:'Consider staying in Richardson if halal food access is a priority. 15 min on DART to downtown Dallas, 30 min to the stadium on match days.',
    hal_mosque1_title:'IANT — Islamic Association of North Texas',
    hal_mosque1_loc:'Richardson · Main community mosque',
    hal_mosque1_body:'The largest Islamic centre in the Dallas area. Full Friday Jumu\'ah services, daily prayers, halal food market on-site. Near DART Red Line.',
    hal_mosque2_title:'Masjid Al-Islam',
    hal_mosque2_loc:'Dallas · Near downtown',
    hal_mosque2_body:'Convenient for visitors staying in downtown Dallas. Daily prayers. Friday Jumu\'ah at 1:15pm. Accessible by DART.',
    hal_mosque3_title:'Masjid Al-Hedaya',
    hal_mosque3_loc:'Arlington · Near AT&T Stadium',
    hal_mosque3_body:'Closest mosque to AT&T Stadium. Useful on match days for Dhuhr or Asr prayers before or after a game. ~5 minutes drive from the stadium.',
    hal_mosque4_title:'Prayer Times App',
    hal_mosque4_loc:'Digital tool',
    hal_mosque4_body:'Download Muslim Pro or Athan app before travelling. Both provide accurate Dallas prayer times, qibla direction, and nearby mosque finder. Free to use.',
    hal_rest_intro:'Richardson (15-20 min from downtown Dallas on DART Red Line) is the heart of halal dining in DFW — a cluster of excellent restaurants within walking distance of each other.',
    acc_hotel1_name:'Omni Dallas Hotel',
    acc_hotel1_area:'Downtown Dallas · $$$',
    acc_hotel1_tag:'Top Pick',
    acc_hotel1_body:'Connected by skybridge to the Kay Bailey Hutchison Convention Center. Rooftop pool, great views, and directly above DART connections. One of Dallas\'s finest hotels — book far in advance.',
    acc_hotel2_name:'Marriott Courtyard Arlington',
    acc_hotel2_area:'Arlington · $$',
    acc_hotel2_tag:'Near Stadium',
    acc_hotel2_body:'Within walking distance of AT&T Stadium. Clean, reliable, and the location is unbeatable for match days. Fills up months in advance — check availability now.',
    acc_hotel3_name:'The Adolphus Hotel',
    acc_hotel3_area:'Downtown Dallas · $$$$',
    acc_hotel3_tag:'Historic Luxury',
    acc_hotel3_body:'Built in 1912, this is Dallas\'s most storied hotel. Beaux-Arts architecture, exceptional service, and a legendary bar. If you want one memorable splurge night, this is the one.',
    acc_hotel4_name:'Aloft Dallas Downtown',
    acc_hotel4_area:'Downtown Dallas · $$',
    acc_hotel4_tag:'Best Value Central',
    acc_hotel4_body:'Modern, well-located, and reasonably priced. Good common areas, reliable WiFi, and walking distance to DART. Great for younger travellers and groups.',
    acc_hotel5_name:'VRBO — Uptown Dallas',
    acc_hotel5_area:'Uptown · $ per person',
    acc_hotel5_tag:'Groups of 4+',
    acc_hotel5_body:'For groups of 4+, a VRBO apartment in Uptown Dallas often works out significantly cheaper than hotel rooms. Full kitchen, more space, and one of Dallas\'s best neighborhoods.',
    acc_hotel6_name:'Hilton Fort Worth',
    acc_hotel6_area:'Fort Worth · $$',
    acc_hotel6_tag:'Budget Smart',
    acc_hotel6_body:'Downtown Fort Worth, walking distance to the Stockyards. TRE train gives direct match-day access to the stadium. Often 30–40% cheaper than equivalent Dallas hotels.',
    acc_arlington_best:'Attending 3+ matches · Groups who want to walk to the stadium · Avoiding match-day transport chaos',
    acc_dallas_best:'First-time visitors · Exploring Dallas culture · Fan zones · Mix of matches and sightseeing',
    acc_fw_best:'Budget-conscious visitors · Families · Those wanting a quieter base with Texas character',
    acc_arlington_price:'$150–350/night during match days · Books out fast — reserve now',
    acc_dallas_price:'$120–280/night · More hotel options than Arlington',
    acc_fw_price:'$80–180/night · Significantly cheaper than Dallas on match days',
    acc_price_range:'Price range',
    acc_best_for_lbl:'Best for',
    acc_book_early_body:'Dallas hotel prices during the World Cup are already 2–3× normal rates. Book refundable rates now and cancel later if plans change.',
    acc_free_cancel_body:'Book fully refundable rates even if they\'re slightly higher. Match schedules can shift. Booking.com and VRBO both offer strong cancellation options.',
    acc_checkout_body:'Many hotels require minimum stays around match days. Look for hotels with no minimum stay requirements — or book a full week even if you plan to arrive late.',
    acc_non_match_body:'Match days have surge pricing on Uber and chaotic traffic. Schedule your departure for a quiet Tuesday or Wednesday — easier airport journey and cheaper rideshare prices.',
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
    related_label:'Guías Relacionadas', related_title:'Seguir Explorando',
    
    home_book_title:'Planifica Tu Viaje a Dallas',
    home_book_sub:'Compara hoteles cerca del AT&T Stadium, encuentra vuelos a DFW y reserva coches.',
        
    // ── BOOKING TITLES [ES] ──
    book_plan_visit:'Planifica Esta Visita',
    book_plan_visit_sub:'Alójate cerca, alquila un coche y saca el máximo partido al día.',
    book_dallas_trip:'Reserva Tu Viaje a Dallas',
    book_dallas_trip_sub:'Encuentra vuelos a DFW, hoteles cerca del estadio y coches de alquiler.',
    book_dallas_stay:'Planifica Tu Estancia en Dallas',
    book_dallas_stay_sub:'Reserva hoteles, vuelos y coches para tu visita al Mundial.',
    book_family_stay:'Planifica Tu Estancia Familiar',
    book_family_stay_sub:'Los hoteles con piscina tienen mucha demanda — reserva pronto.',
    book_fanzone:'Planifica Tu Visita a la Fan Zone',
    book_fanzone_sub:'Alójate en el centro de Dallas para acceso fácil a las fan zones.',
    book_match_day:'Reserva Tu Día de Partido',
    book_match_day_sub:'Reserva tu hotel cerca del AT&T Stadium y vuelos a DFW.',
    book_explore:'Planifica Tu Estancia en Dallas',
    book_explore_sub:'Reserva hoteles cerca de los mejores barrios de Dallas.',
    book_search_now:'Buscar y Reservar Ahora',
    book_search_now_sub:'Compara hoteles en Arlington, Dallas y Fort Worth.',
    book_daytrips:'Planifica Tus Excursiones',
    book_daytrips_sub:'Alquila un coche para explorar Texas. Las casas VRBO son perfectas para pernoctar.',
    book_groups:'Reservar Alojamiento Grupal',
    book_groups_sub:'Las casas VRBO para 8–16 personas suelen salir más baratas que los hoteles.',
    act_keep_label:'Seguir Explorando', act_keep_title:'Más Actividades', act_all_fam:'Todas las Actividades Familiares',
    
    // ── SHARED SECTION LABELS [ES] ──
    rst_about:'Sobre el Restaurante',
    rst_full_story:'La Historia Completa',
    rst_highlights:'Destacados',
    rst_insider:'Consejos Internos',
    rst_staying:'¿Alojarse Cerca?',
    rst_why:'Por Qué Ir',
    rst_hotels_nearby:'Hoteles Cercanos',
    act_full_details:'Detalles Completos',
    act_why:'Por Qué Visitar',
    act_how_to:'Cómo Llegar',
    act_highlights:'Aspectos Destacados',
    act_practical:'Información Práctica',
    act_admission:'Precios de Entrada',
    act_insider:'Consejos de Visita',
    act_getting:'Cómo Llegar',
    act_what_see:'Qué Ver',
    act_what_inc:'Qué Incluye',
    act_before:'Antes de Ir',
    act_important:'Notas Importantes',
    nbh_about:'Sobre el Barrio',
    nbh_highlights:'Aspectos Destacados',
    nbh_insider:'Consejos Locales',
    nbh_book_for:'Reservar en Esta Zona',
    nbh_where_eat:'Dónde Comer Cerca',
    home_everything:'Todo Lo Que Necesitas',
    home_live:'Condiciones en Vivo',
    mat_fixtures:'Partidos en Dallas',
    mat_venue:'AT&T Stadium · Arlington TX',
    mat_stay:'Alojarse Cerca del Estadio',
    mat_venue_info:'Información del Estadio',
    exp_nbh_title:'Barrios',
    exp_where_eat:'Dónde Comer en Dallas',
    exp_six_areas:'Seis Zonas a Conocer',
    fam_transit:'Guía de Transporte Familiar',
    fam_weather:'Aviso de Calor en Dallas',
    fam_10_title:'10 Atracciones Familiares',
    fam_heat:'Planificar con el Calor',
    log_rec_route:'Ruta Recomendada',
    log_all_opts:'Todas las Opciones',
    log_book_transport:'Reservar Transporte',
    ap_when_land:'Al Llegar',
    map_interactive:'Mapa Interactivo',
    tkt_categories:'Categorías de Entradas',
    wx_stadium:'Tiempo en el Estadio',
    wx_live:'En Vivo desde Dallas TX',
    wx_next24:'Próximas 24 Horas',
    wx_7day:'Previsión 7 Días',
    srv_live:'Condiciones en Vivo',
    dt_san_antonio:'San Antonio — El Álamo y el River Walk',
    
    // ── EXTRA LABELS [ES] ──
    nbh_stay_explore:'Alojarse y Explorar',
    nbh_nearby_dining:'Restaurantes Cercanos',
    nbh_nearby:'Cercano',
    nbh_the_neighborhood:'El Barrio',
    rst_hotels_in:'Hoteles en Esta Zona',
    rst_more_rest:'Más Restaurantes de Dallas',
    rst_keep_exploring:'Seguir Explorando',
    wx_conditions:'Resumen de Condiciones',
    wx_match_advice:'Consejos para el Día del Partido',
    wx_stadium_weather:'Tiempo en el Estadio',
    fam_transit_guide:'Guía de Transporte Familiar',
    fam_weather_warning:'Aviso de Calor en Dallas',
    
    // ── GENERIC SECTION KEYS [ES] ──
    nbh_the_details:'Los Detalles',
    nbh_book_area:'Reservar en Esta Zona',
    nbh_where_eat_h2:'Dónde Comer',
    nbh_more_nbh:'Más Barrios',
    nbh_keep_exp:'Seguir Explorando',
    rst_hotels_area:'Hoteles en la Zona',
    rst_more_restaurants:'Más Restaurantes',
    rst_keep_exp:'Seguir Explorando',
    mat_dallas_fixtures:'Partidos en Dallas',
    exp_where_eat_h2:'Dónde Comer',
    fam_transit_h2:'Guía de Transporte Familiar',
    fam_dallas_weather:'Aviso de Calor en Dallas',
    wx_stadium_h2:'Tiempo en el Estadio',
    
    // ── HERO SUBTITLES [ES] ──
    survival_hero_sub:'Conocimiento esencial para visitantes internacionales. Texas tiene sus propias reglas, cultura y clima.',
    tickets_hero_sub:'Todo lo que necesitas saber sobre comprar entradas para los partidos del Mundial 2026 en Dallas.',
    accommodation_hero_sub:'Arlington, centro de Dallas o Fort Worth? Cada opción tiene pros y contras según tu presupuesto y los partidos que asistas.',
    daytrips_hero_sub:'La mayoría de visitantes tiene 7–14 días. Entre partidos, Texas tiene destinos únicos a pocas horas en coche.',
    checklist_hero_sub:'35 cosas que preparar antes de ir al AT&T Stadium. Márcalas una a una para no pasar apuros el día del partido.',
    fanzones_hero_sub:'No necesitas entrada para vivir el Mundial en Dallas. El FIFA Fan Festival oficial y decenas de lugares de retransmisión acercan el ambiente a todos.',
    budget_hero_sub:'La verdad honesta sobre lo que cuesta una semana en Dallas — desde aperitivos del estadio hasta propinas. Planifica tu presupuesto antes de llegar.',
    phrases_hero_sub:'América y Texas tienen sus propias reglas. Esto es lo que los visitantes internacionales suelen hacer mal y cómo integrarse.',
    families_hero_sub:'Las mejores actividades con niños en Dallas durante el Mundial — museos, parques temáticos y cómo combatir el calor texano.',
    shopping_hero_sub:'Dallas es un destino de compras de clase mundial — desde centros comerciales de lujo hasta productos texanos y outlets.',
    groups_hero_sub:'Viajando con una peña o grupo de 10+? Los grupos tienen logísticas diferentes — bloques de hotel, transporte grupal y puntos de encuentro.',
    halal_hero_sub:'Dallas tiene una gran comunidad musulmana. La comida halal es fácil de encontrar, especialmente en Richardson.',
    airport_hero_sub:'DFW International es uno de los aeropuertos más grandes del mundo. Todo lo que necesitas para llegar sin estrés al hotel.',
    
    // ── GROUPS PAGE [ES] ──
    grp_accom1_title:'Bloques de habitaciones',
    grp_accom1_body:'Para grupos de 10+ habitaciones, contacta hoteles directamente. Marriott, Hilton e Hyatt tienen equipos de ventas para grupos. Reserva con antelación.',
    grp_accom2_title:'VRBO para grupos grandes',
    grp_accom2_body:'Una casa VRBO grande alberga 8–16 personas por mucho menos que los hoteles. Uptown Dallas y Las Colinas tienen excelentes opciones con piscina.',
    grp_accom3_title:'Repartirse entre ciudades',
    grp_accom3_body:'Los grandes grupos suelen repartir alojamiento entre Dallas, Arlington y Fort Worth. Coordina un punto de encuentro central para días de partido.',
    grp_trans1_title:'Tren TRE — mejor para grupos',
    grp_trans1_body:'Va desde el centro de Dallas hasta CentrePort en días de partido con lanzaderas gratuitas de la FIFA. Barato ($2.50) y fiable.',
    grp_trans2_title:'Autobús chárter',
    grp_trans2_body:'Para grupos de 40+, alquilar un autobús merece la pena. Cuesta aproximadamente $400–800 ida y vuelta. Reserva con antelación.',
    grp_trans3_title:'Convoy de rideshare',
    grp_trans3_body:'Para grupos de 8–20, pedid varios Uber simultáneamente. Estableced un punto de recogida y pedidlo 30 minutos antes.',
    grp_trans4_title:'Carpool con aparcamiento',
    grp_trans4_body:'Los grupos con coches alquilados pueden hacer carpool. El aparcamiento oficial cuesta $30–60 por vehículo. Reservad plazas con antelación.',
    grp_before_match:'Antes del partido',
    grp_meetup_spots:'Mejores puntos de encuentro',
    grp_meet1_title:'Designad un punto de encuentro',
    grp_meet1_body:'fuera del AT&T Stadium antes de entrar — dentro la señal es mala. Acordad la puerta A, B, C, etc.',
    grp_meet2_title:'Grupo de WhatsApp',
    grp_meet2_body:'con todos los viajeros. Compartid hoteles, entradas y planes. Descargad mapas offline de Dallas.',
    grp_meet3_title:'SIM o eSIM de EE.UU.',
    grp_meet3_body:'— todos necesitan un número de EE.UU. con datos. La eSIM de US Mobile es la más fácil.',
    grp_spot1:'The Rustic, Uptown — enorme local al aire libre, ideal para grupos. Gran ambiente con pantallas gigantes.',
    grp_spot2:'Klyde Warren Park — parque gratuito en el centro de Dallas. Amplio espacio con food trucks.',
    grp_spot3:'FIFA Fan Festival — punto de encuentro natural para aficionados de todas las naciones.',
    grp_clubs_intro:'La mayoría de las peñas nacionales organizan viajes en grupo, ballots de entradas y encuentros. Contáctales antes de viajar.',
    grp_club1_title:'Oranje (Países Bajos)',
    grp_club1_body:'La peña holandesa es una de las más organizadas del mundo — famosas marchas naranja. Consulta oranjesupporter.nl.',
    grp_club2_title:'La Albiceleste (Argentina)',
    grp_club2_body:'Se esperan aficionados argentinos en grandes números como campeones. Dallas tiene una comunidad argentina consolidada.',
    grp_club3_title:'Torcida (Brasil)',
    grp_club3_body:'Los aficionados brasileños traen el mejor ambiente. Gran comunidad brasileña en DFW.',
    grp_club4_title:'American Outlaws (EE.UU.)',
    grp_club4_body:'Peña nacional con capítulos activos en Dallas-Fort Worth. americanoutlaws.com.',
    grp_6months:'6+ meses antes',
    grp_1month:'1 mes antes',
    grp_check1:'Reservar bloque de habitaciones o casa VRBO',
    grp_check2:'Registrar miembros del grupo en FIFA.com',
    grp_check3:'Solicitar entradas juntos en el ballot de FIFA',
    grp_check4:'Reservar vuelos (mismo vuelo si es posible)',
    grp_check5:'Crear grupo de WhatsApp o Telegram',
    grp_check6:'Confirmar entradas en la app FIFA',
    grp_check7:'Contratar eSIM de US Mobile para todos',
    grp_check8:'Reservar transporte grupal al estadio',
    grp_check9:'Designar un líder para el día del partido',
    grp_check10:'Acordar punto de encuentro en el estadio',
    
    // ── SHARED CARD LABELS [ES] ──
    lbl_address:'Dirección',
    lbl_hours:'Horario',
    lbl_cuisine:'Cocina',
    lbl_price:'Precio',
    lbl_halal:'Estado Halal',
    lbl_dart:'DART',
    lbl_duration:'Duración',
    lbl_age:'Edad Recomendada',
    lbl_best_for:'Mejor Ubicación para Visitantes',
    lbl_phone:'Teléfono',
    lbl_website:'Sitio Web',
    lbl_experience:'Experiencia Necesaria',
    lbl_getting_there:'Cómo Llegar',
    lbl_insider_tips:'Consejos Internos',
    lbl_admission:'Entrada',
    lbl_age_req:'Requisito de Edad',
    lbl_cost:'Coste',
    lbl_open_24:'Abierto 24 horas',
    lbl_official_site:'Sitio Oficial',
    lbl_fifa_app:'App de Entradas FIFA',
    lbl_sales_phases:'Fases de Venta',
    lbl_id_required:'DNI/Pasaporte Requerido',
    lbl_iata:'Código IATA',
    lbl_dist_dallas:'Distancia a Dallas',
    lbl_dist_stadium:'Distancia al Estadio',
    lbl_intl_terminal:'Terminal Internacional',
    lbl_terminals:'Terminales',
    lbl_price_range:'Rango de Precios',
    lbl_best_for_who:'Mejor para',
    lbl_getting_there_dt:'Cómo Llegar',
    lbl_best_time:'Mejor Momento para Visitar',
    lbl_road_trip:'Idea de Viaje por Carretera',
    lbl_halal_avail:'Disponibilidad de Comida Halal',
    lbl_mosques:'Mezquitas',
    lbl_prayer_stadium:'Oración en el Estadio',
    lbl_alcohol:'Alcohol en los Partidos',
    lbl_restaurants_sit:'Restaurantes (servicio de mesa)',
    lbl_food_delivery:'Comida a Domicilio',
    lbl_uber_lyft:'Uber / Lyft',
    lbl_hotel_housekeep:'Limpieza del Hotel',
    lbl_coffee_counter:'Café / Mostrador',
    lbl_tax_on_top:'Impuesto Adicional',
    
    // ── CARD CONTENT [ES] ──
    ap_step1_title:'Inmigración y Aduanas (Terminal D)',
    ap_step1_body:'Allow 60–90 minutes. US citizens use APC kiosks. International visitors use staffed lanes. Have your ESTA or visa, passport, and return flight details ready.',
    ap_step2_title:'Conseguir una SIM de EE.UU.',
    ap_step2_body:'AT&T and T-Mobile stores are in Terminal D arrivals hall — open from 6am. Prepaid SIMs from $20–40 for 30 days. Buy before leaving the terminal.',
    ap_step3_title:'Tomar el Skylink a Tu Terminal',
    ap_step3_body:'If you have a connecting domestic flight, take the free Skylink automated train between terminals. It runs 24/7 every 2–5 minutes.',
    ap_step4_title:'Línea Naranja DART al Centro de Dallas',
    ap_step4_body:'The DART Orange Line runs from Terminal A (South) at DFW directly to downtown Dallas in ~45 minutes. Buy tickets on the GoPass app. $2.50 per trip.',
    ap_step5_title:'Llegar a Arlington (Estadio)',
    ap_step5_body:'On match days: TRE train from DFW (CentrePort station) direct — then FREE FIFA shuttle to AT&T Stadium. No match day? Rent a car or Uber (~$35–50).',
    ap_term_a_label:'Terminal A — American Airlines',
    ap_term_b_label:'Terminal B — American Airlines',
    ap_term_c_label:'Terminal C — American Airlines',
    ap_term_d_label:'Terminal D ★ — International',
    ap_term_e_label:'Terminal E — Multiple Airlines',
    ap_term_d_note:'All international arrivals. Immigration, customs, SIM stores, currency exchange. If flying from Europe, South America, Asia or the Middle East — you land here.',
    ap_tip1_title:'No tomes un taxi desde DFW',
    ap_tip1_body:'Taxis from DFW to downtown Dallas cost $50–80. The DART Orange Line does the same journey in 45 minutes for $2.50. Use the train.',
    ap_tip2_title:'Permite tiempo para inmigración',
    ap_tip2_body:'During the World Cup, DFW will be at peak international capacity. Budget 90 minutes minimum for immigration. Do not book tight connections on entry day.',
    ap_tip3_title:'Tramita tu ESTA antes de volar',
    ap_tip3_body:'Visitors from visa-waiver countries need ESTA approval. Apply at esta.cbp.dhs.gov at least 72 hours before departure. It costs $21 and is valid for 2 years.',
    ap_tip4_title:'Descarga GoPass antes de llegar',
    ap_tip4_body:'The DART GoPass app lets you buy transit tickets on your phone. Download and set it up before you land so you can go straight to the DART platform.',
    ap_tip5_title:'DFW es enorme — cuenta con tiempo de conexión',
    ap_tip5_body:'DFW has 5 terminals spread across a huge area. Never book under 90 minutes for a connection at DFW.',
    ap_tip6_title:'Moneda — consigue USD antes de llegar',
    ap_tip6_body:'Airport currency exchange has terrible rates. Get USD at your home bank. Cards (Visa/Mastercard) are accepted almost everywhere in Dallas.',
    acc_arlington_title:'Arlington',
    acc_arlington_sub:'A pie del estadio',
    acc_arlington_body:'Most convenient for attending multiple matches. Walk or short Uber to AT&T Stadium. Limited nightlife compared to Dallas.',
    acc_arlington_best:'Attending 3+ matches · Groups who want to walk to the stadium',
    acc_dallas_title:'Centro de Dallas',
    acc_dallas_sub:'La mejor opción global',
    acc_dallas_body:'Best balance of access and experience. DART to the stadium, plus full access to Dallas\'s restaurants, fan zones, and nightlife.',
    acc_dallas_best:'First-time visitors · Exploring Dallas culture · Fan zones',
    acc_fw_title:'Fort Worth',
    acc_fw_sub:'Económico y encantador',
    acc_fw_body:'Often overlooked but genuinely great. 30 minutes to the stadium, much cheaper hotels, and the Fort Worth Stockyards is a unique Texas experience.',
    acc_fw_best:'Budget-conscious visitors · Families · Those wanting a quieter base',
    acc_book_early_title:'Reserva ahora — los precios se duplicarán',
    acc_book_early_body:'Dallas hotel prices during the World Cup are already 2–3× normal rates. By the time matches start, available rooms will be scarce. Book refundable rates now.',
    acc_free_cancel_title:'La cancelación gratuita es tu aliada',
    acc_free_cancel_body:'Book fully refundable rates even if slightly higher. Match schedules can shift. Booking.com and VRBO both offer strong cancellation options.',
    acc_checkout_title:'Comprueba el día de salida',
    acc_checkout_body:'Many hotels require minimum stays around match days. Look for hotels with no minimum stay requirements.',
    acc_non_match_title:'Intenta salir en un día sin partido',
    acc_non_match_body:'Match days have surge pricing on Uber and chaotic traffic. Schedule your departure for a quiet Tuesday or Wednesday.',
    bud_budget_label:'Económico',
    bud_midrange_label:'Intermedio ★',
    bud_splurge_label:'Lujo',
    bud_budget_items:'Fast food or food trucks ($8–12/meal)|DART for all transport|Free fan zones & parks|Budget hostel or shared rental|Free museums (DMA is free daily)',
    bud_mid_items:'Sit-down restaurants ($20–35/meal)|Occasional Uber ($15–25/trip)|Paid attractions ($20–30)|Mid-range hotel or private rental|Most people fall in this range',
    bud_splurge_items:'Fine dining ($80–150/meal)|Uber Black everywhere|Luxury hotel (Omni, Ritz, etc.)|Premium stadium experiences|Shopping at Northpark / Galleria',
    bud_tip1_title:'El Museo de Arte de Dallas es Gratis',
    bud_tip1_body:'General admission is free every day. One of the best art museums in the American South — world-class collection. A great air-conditioned option on a hot afternoon.',
    bud_tip2_title:'DART ahorra $30–50 al día',
    bud_tip2_body:'A DART day pass is $6. The equivalent in Uber rides is $50–80. Use DART for anything downtown.',
    bud_tip3_title:'Usa Wise o Revolut',
    bud_tip3_body:'Airport ATMs and currency exchange booths charge 5–8% in fees. A Wise or Revolut card gives you near-perfect exchange rates. Set one up before you fly.',
    bud_tip4_title:'Food trucks para el almuerzo',
    bud_tip4_body:'Dallas has an excellent food truck scene. Excellent tacos, BBQ, and international food for $10–14. Save sit-down restaurants for dinner.',
    bud_tip5_title:'Lleva agua al estadio',
    bud_tip5_body:'Empty refillable water bottles are permitted through AT&T Stadium security. Stadium water costs $6–8 per bottle — a family of 4 saves $25+ per match.',
    bud_tip6_title:'Walmart / HEB para aperitivos',
    bud_tip6_body:'Stock up on snacks from a grocery store for your hotel room. HEB and Walmart are a fraction of the cost of hotel minibars.',
    phr_yall_title:'Y\'all',
    phr_yall_body:'You all / you (plural). The most Texas word in existence. "Y\'all ready to order?" means "Are you all ready to order?" Use it freely.',
    phr_fixin_title:'Fixin\' to',
    phr_fixin_body:'"I\'m fixin\' to head out" = "I\'m about to leave." Not broken, just Texas grammar.',
    phr_bless_title:'Bless your heart',
    phr_bless_body:'On the surface this sounds kind. In practice it often means "you poor fool." Context is everything.',
    phr_howdy_title:'Howdy',
    phr_howdy_body:'Hello. Yes, people actually say this in Texas. It\'s a genuine greeting. Say it back — it\'s endearing.',
    phr_check_title:'Check / the check',
    phr_check_body:'The bill at a restaurant. "Can we get the check?" not "Can we get the bill?" though both work.',
    phr_restroom_title:'Restroom',
    phr_restroom_body:'Toilet / bathroom. "Where\'s the restroom?" is the correct phrasing. "Toilet" is understood but sounds odd.',
    phr_togo_title:'To-go / take-out',
    phr_togo_body:'"Take-away" in American English is "to-go" or "take-out." "Can I get this to-go?" is what you say.',
    phr_soccer_title:'Soccer',
    phr_soccer_body:'What everyone in the US calls football. Don\'t be offended — Americans love the sport, they just have a different name for it.',
    phr_cult1_title:'Las propinas no son opcionales',
    phr_cult1_body:'Service staff earn below minimum wage — tips make up the bulk of their income. 18–20% at restaurants is standard, not generous.',
    phr_cult2_title:'Fahrenheit, no Celsius',
    phr_cult2_body:'Dallas in June-July is 95–105°F (35–40°C). Quick conversion: subtract 32, divide by 1.8 to get Celsius.',
    phr_cult3_title:'Todo requiere coche',
    phr_cult3_body:'Dallas is not a walking city outside specific neighborhoods. Use DART for downtown, Uber for everything else.',
    phr_cult4_title:'Los refrescos son ilimitados',
    phr_cult4_body:'Soft drinks come with unlimited free refills at almost every American restaurant. You don\'t need to ask.',
    phr_cult5_title:'Cómo pedir BBQ',
    phr_cult5_body:'At most Texas BBQ joints you order by weight at a counter — "half a pound of brisket, please." Eat with your hands.',
    phr_cult6_title:'Lleva siempre el pasaporte',
    phr_cult6_body:'US bars card everyone who looks under 40. You need government-issued photo ID to buy alcohol. Your passport is safest.',
    phr_cult7_title:'"¿Cómo estás?" es un saludo',
    phr_cult7_body:'When an American says "Hi, how are you?" they expect "Good, thanks!" — not an actual account of your wellbeing.',
    phr_cult8_title:'La sanidad es muy cara',
    phr_cult8_body:'A hospital visit without insurance costs thousands. Buy comprehensive travel insurance before you travel — medical coverage is the most important part.',
    phr_col_restaurant:'En un restaurante',
    phr_col_transport:'Para desplazarse',
    fz_tip1_title:'Llega Pronto',
    fz_tip1_body:'Fan zones fill up 60–90 minutes before kickoff for major matches. For the Semifinal, plan to arrive 2+ hours early.',
    fz_tip2_title:'Combate el Calor',
    fz_tip2_body:'Outdoor fan zones in Dallas in June-July reach 38-40°C. Bring water, sunscreen, and a hat for daytime matches.',
    fz_tip3_title:'Lleva tus Colores',
    fz_tip3_body:'National team shirts make fan zones electric. Dallas will have supporters from every nation.',
    fz_tip4_title:'Usa el DART',
    fz_tip4_body:'Downtown Dallas fan zones are easily reachable by DART light rail. Avoid driving — parking near popular venues is expensive.',
    fz_info_entry:'Entrada',
    fz_info_screens:'Pantallas',
    fz_info_transport:'Cómo Llegar',
    fz_info_location:'Ubicación Prevista',
    fz_warning_title:'Confirmación oficial pendiente',
    fz_warning_body:'FIFA typically announces Fan Festival details 3–6 months before the tournament. Check FIFA.com for the latest.',
    shop_northpark:'NorthPark Center',shop_galleria:'Galleria Dallas',shop_allen:'Allen Premium Outlets',shop_legacy:'The Shops at Legacy',shop_bishop:'Distrito de Artes Bishop',shop_deepellum:'Deep Ellum',shop_cowboy:'Sombrero Resistol o Stetson',shop_boots:'Botas Vaqueras de Texas',shop_sauce:'Salsa Picante y BBQ de Texas',shop_art:'Arte e Impresiones de Texas',shop_pecan:'Dulces de Pacana de Texas',shop_merch:'Merchandising Oficial del Torneo',fam_dart_title:'Metro DART',fam_car_title:'Coche de Alquiler',fam_uber_title:'Uber / Lyft con Niños',
    
    // ── TICKETS PAGE [ES] ──
    tkt_warning:'Compra siempre oficial primero.',
    tkt_warning_body:'La única fuente autorizada para entradas del Mundial FIFA 2026 es FIFA.com/tickets. Cualquier otro sitio es un tercero en el mejor caso, una estafa en el peor.',
    tkt_official_site_body:'Regístrate en FIFA primero — obligatorio antes de cualquier compra',
    tkt_app_body:'Descarga la app oficial de FIFA — todas las entradas son digitales. Necesaria para entrar al estadio. Descárgala antes de viajar.',
    tkt_phases_body:'FIFA tiene varias fases de venta — ballot anticipado, venta general y de última hora. Cada fase abre en FIFA.com. Suscríbete a alertas por email.',
    tkt_id_body:'Las entradas están vinculadas a tu ID. En la puerta necesitarás tu pasaporte o DNI que coincida con el nombre de la entrada.',
    tkt_cat4_title:'Categoría 4',
    tkt_cat4_price:'$50–80',
    tkt_cat4_body:'Vista restringida o nivel superior. El precio más bajo, disponibilidad limitada. Las primeras en venderse en el ballot.',
    tkt_cat3_title:'Categoría 3',
    tkt_cat3_price:'$100–150',
    tkt_cat3_body:'Nivel superior con vista completa del campo. La mejor relación calidad-precio — buenas líneas de visión en el AT&T Stadium.',
    tkt_cat2_title:'Categoría 2',
    tkt_cat2_price:'$200–350',
    tkt_cat2_body:'Nivel inferior, gradas laterales. Vista excelente, buen ambiente. La categoría más popular.',
    tkt_cat1_title:'Categoría 1',
    tkt_cat1_price:'$400–800',
    tkt_cat1_body:'Nivel inferior premium, detrás de las porterías o en el centro. Los mejores asientos del estadio. Muy limitados.',
    tkt_semi_title:'Semifinal',
    tkt_semi_price:'$400–2.000',
    tkt_semi_body:'Dallas acoge una Semifinal (14 de julio). Precios premium en todas las categorías. Compra en cuanto abra la venta.',
    tkt_resale_intro:'FIFA tiene una plataforma oficial de reventa — la opción más segura en el mercado secundario.',
    tkt_resale1_title:'Reventa Oficial FIFA',
    tkt_resale1_body:'FIFA.com/tickets — mercado oficial de reventa. La opción más segura. Entradas verificadas y vinculadas al ID.',
    tkt_resale2_title:'StubHub / Viagogo',
    tkt_resale2_body:'Espera pagar 3–10 veces el precio de cara para partidos populares. Compra pronto si vas a usar reventa.',
    tkt_resale3_title:'Asignación de Peñas',
    tkt_resale3_body:'Las federaciones nacionales reciben asignaciones de entradas. Únete a tu peña nacional — las peñas holandesa, argentina, brasileña e inglesa suelen tener paquetes de entradas.',
    tkt_scam1_title:'Las entradas en PDF son falsas',
    tkt_scam1_body:'Las entradas del Mundial FIFA 2026 son solo digitales — en la app FIFA. Quien venda un PDF, captura o entrada impresa te está estafando.',
    tkt_scam2_title:'Transferencia bancaria = sin protección',
    tkt_scam2_body:'Nunca pagues con transferencia bancaria, cripto o tarjetas regalo. Usa solo tarjeta de crédito a través de una plataforma verificada.',
    tkt_scam3_title:'Vendedores en redes sociales',
    tkt_scam3_body:'Facebook, WhatsApp e Instagram están llenos de estafadores durante los grandes torneos. Usa solo plataformas verificadas.',
    tkt_scam4_title:'Páginas web falsas de FIFA',
    tkt_scam4_body:'La única URL real de entradas FIFA es fifa.com — márcala y escríbela directamente. No hagas clic en enlaces de emails o anuncios.',
    tkt_stad1_title:'Descarga la App FIFA',
    tkt_stad1_body:'Tu entrada está en la app FIFA. Descárgala y añade tu entrada antes del día del partido.',
    tkt_stad2_title:'Llega 90 minutos antes',
    tkt_stad2_body:'El AT&T Stadium es enorme. Las colas de seguridad para 100.000+ personas llevan tiempo. Las puertas abren 2,5 horas antes del partido.',
    tkt_stad3_title:'Política de bolsa transparente',
    tkt_stad3_body:'Solo se permiten bolsas transparentes menores de 30×15×30 cm. Las pequeñas clutch de hasta 11×16,5 cm están permitidas.',
    tkt_stad4_title:'Lleva tu ID con foto',
    tkt_stad4_body:'Tu pasaporte o ID debe coincidir con el nombre de la entrada. FIFA puede hacer controles aleatorios en la puerta.',
    
    // ── BIG PAGE CONTENT [ES] ──
    ap_step1_body:'Permite 60–90 minutos. Los ciudadanos estadounidenses usan quioscos APC. Los visitantes internacionales usan carriles con personal. Ten preparados tu ESTA o visa, pasaporte y detalles del vuelo de regreso.',
    ap_step2_body:'Las tiendas AT&T y T-Mobile están en el vestíbulo de llegadas de la Terminal D. SIM prepago desde $20–40 por 30 días. Mucho más barato que el roaming.',
    ap_step3_body:'If you have a connecting domestic flight, take the free Skylink automated train between terminals. It runs 24/7 every 2–5 minutes. Terminals are far apart — allow 30+ minutes for connections.',
    ap_step4_body:'La línea naranja DART va desde la Terminal A Sur del DFW directamente al centro de Dallas en ~45 minutos. $2.50 por viaje. No tomes taxi o Uber desde el aeropuerto.',
    ap_step5_body:'En días de partido: tren TRE desde DFW hasta la estación CentrePort — luego lanzadera GRATUITA de la FIFA al AT&T Stadium.',
    ap_tip1_body:'Los taxis desde DFW al centro cuestan $50–80. La línea naranja DART hace el mismo recorrido en 45 minutos por $2.50.',
    ap_tip2_body:'Durante el Mundial, DFW estará a máxima capacidad internacional. Planifica al menos 90 minutos para inmigración.',
    ap_tip3_body:'Los visitantes de países con exención de visado necesitan aprobación ESTA. Solicítalo en esta.cbp.dhs.gov al menos 72 horas antes.',
    ap_tip4_body:'La app DART GoPass permite comprar billetes en el móvil. Descárgala y configúrala antes de aterrizar.',
    ap_tip5_body:'DFW tiene 5 terminales en una área enorme. Nunca reserves menos de 90 minutos para una conexión en DFW.',
    ap_tip6_body:'Las casas de cambio del aeropuerto tienen pésimas tasas. Consigue dólares en tu banco antes de viajar.',
    ap_term_a_airlines:'American Airlines',
    ap_term_a_body:'Domestic US flights. DART Orange Line station is at Terminal A South — the quickest route to downtown Dallas.',
    ap_term_b_airlines:'American Airlines',
    ap_term_b_body:'Domestic US flights. Good food options including local Texas brands. Skylink to all other terminals.',
    ap_term_c_airlines:'American Airlines',
    ap_term_c_body:'Domestic and some international. Skylink connects to Terminal D for international arrivals and customs.',
    ap_term_d_airlines:'International — Most visitors land here',
    ap_term_d_body:'All international arrivals. Immigration, customs, SIM stores, currency exchange, and ground transport. If flying from Europe, South America, Asia, or the Middle East — you land here.',
    ap_term_e_airlines:'Multiple Airlines',
    ap_term_e_body:'Spirit, Frontier, United, and others. Ground transport to TRE and rental cars. Skylink to all terminals.',
    ap_dal_airlines:'Southwest Airlines (primary), Delta, United (limited)',
    ap_dal_dist:'8 km from downtown Dallas — much closer than DFW',
    ap_dal_transit:'DART Orange/Blue Line (Inwood/Love Field station) — 15 min to downtown',
    ap_dal_body:'Love Field is domestic only — no international flights. If you\'re connecting from a US city, you might land here. It\'s more convenient than DFW for downtown Dallas hotels. The DART light rail stop is a short walk from the terminal.',
    ap_dal_airlines_label:'Airlines',
    ap_dal_dist_label:'Distance',
    ap_dal_transit_label:'Transit',
    bud_budget_items:'Comida rápida o food trucks ($8–12/plato)|DART para todo el transporte|Fan zones y parques gratuitos|Hostal económico o apartamento VRBO compartido|Museos gratuitos (el DMA es gratis todos los días)',
    bud_mid_items:'Restaurantes ($20–35/persona)|Uber ocasional ($15–25/viaje)|Atracciones de pago ($20–30)|Hotel intermedio o VRBO privado|La mayoría de la gente entra en esta categoría',
    bud_splurge_items:'Restaurantes de lujo ($80–150/persona)|Uber Black en todos lados|Hotel de lujo (Omni, Ritz, etc.)|Experiencias premium en el estadio|Compras en Northpark / Galleria',
    bud_per_day:'por día',
    bud_excl_note:'Por persona por día, excluyendo entradas y alojamiento. Todos los precios en USD.',
    bud_food_drink:'Comida y Bebida',
    bud_transport_activities:'Transporte y Actividades',
    bud_tipping_warning:'Las propinas no son opcionales en EE.UU.',
    bud_tipping_body:'El personal de servicio suele cobrar menos del salario mínimo. No dejar propina se considera una falta de respeto.',
    hal_tip1_title:'Verifica la certificación halal',
    hal_tip1_body:'Always verify halal status with the restaurant directly — use Zabihah.com or the Halal Trip app to find certified halal restaurants in DFW.',
    hal_tip2_title:'Supermercados halal',
    hal_tip2_body:'Al-Barakah Halal Meat Market in Richardson and Halal Meat Shop on Greenville Ave stock a wide range of certified halal meat and groceries.',
    hal_tip3_title:'Wudu en el estadio',
    hal_tip3_body:'AT&T Stadium bathrooms have standard sinks. Plan to perform wudu at your hotel before match day. Prayer room availability will be confirmed closer to the tournament.',
    hal_tip4_title:'Dirección Qibla en Dallas',
    hal_tip4_body:'From Dallas, the qibla direction is approximately 48–50° northeast. Use the Muslim Pro or Athan app for a precise compass reading.',
    hal_tip5_title:'El alcohol está en todas partes',
    hal_tip5_body:'Alcohol is served at the stadium, in restaurants, and at fan zones. It is not compulsory — simply decline. The Richardson halal restaurant cluster is entirely alcohol-free.',
    hal_tip6_title:'Richardson — tu base',
    hal_tip6_body:'Consider staying in Richardson if halal food access is a priority. 15 min on DART to downtown Dallas, 30 min to the stadium on match days.',
    hal_mosque1_title:'IANT — Asociación Islámica del Norte de Texas',
    hal_mosque1_loc:'Richardson · Mezquita principal',
    hal_mosque1_body:'The largest Islamic centre in the Dallas area. Full Friday Jumu\'ah services, daily prayers, halal food market on-site. Near DART Red Line.',
    hal_mosque2_title:'Masjid Al-Islam',
    hal_mosque2_loc:'Dallas · Cerca del centro',
    hal_mosque2_body:'Convenient for visitors staying in downtown Dallas. Daily prayers. Friday Jumu\'ah at 1:15pm. Accessible by DART.',
    hal_mosque3_title:'Masjid Al-Hedaya',
    hal_mosque3_loc:'Arlington · Cerca del AT&T Stadium',
    hal_mosque3_body:'Closest mosque to AT&T Stadium. Useful on match days for Dhuhr or Asr prayers before or after a game. ~5 minutes drive from the stadium.',
    hal_mosque4_title:'App de Horarios de Oración',
    hal_mosque4_loc:'Herramienta digital',
    hal_mosque4_body:'Download Muslim Pro or Athan app before travelling. Both provide accurate Dallas prayer times, qibla direction, and nearby mosque finder. Free to use.',
    hal_rest_intro:'Richardson (15-20 min desde el centro de Dallas en DART Línea Roja) es el corazón de la gastronomía halal en DFW.',
    acc_hotel1_name:'Omni Dallas Hotel',
    acc_hotel1_area:'Downtown Dallas · $$$',
    acc_hotel1_tag:'Primera Opción',
    acc_hotel1_body:'Connected by skybridge to the Kay Bailey Hutchison Convention Center. Rooftop pool, great views, and directly above DART connections. One of Dallas\'s finest hotels — book far in advance.',
    acc_hotel2_name:'Marriott Courtyard Arlington',
    acc_hotel2_area:'Arlington · $$',
    acc_hotel2_tag:'Cerca del Estadio',
    acc_hotel2_body:'Within walking distance of AT&T Stadium. Clean, reliable, and the location is unbeatable for match days. Fills up months in advance — check availability now.',
    acc_hotel3_name:'The Adolphus Hotel',
    acc_hotel3_area:'Downtown Dallas · $$$$',
    acc_hotel3_tag:'Lujo Histórico',
    acc_hotel3_body:'Built in 1912, this is Dallas\'s most storied hotel. Beaux-Arts architecture, exceptional service, and a legendary bar. If you want one memorable splurge night, this is the one.',
    acc_hotel4_name:'Aloft Dallas Downtown',
    acc_hotel4_area:'Downtown Dallas · $$',
    acc_hotel4_tag:'Mejor Relación Calidad-Precio',
    acc_hotel4_body:'Modern, well-located, and reasonably priced. Good common areas, reliable WiFi, and walking distance to DART. Great for younger travellers and groups.',
    acc_hotel5_name:'VRBO — Uptown Dallas',
    acc_hotel5_area:'Uptown · $ per person',
    acc_hotel5_tag:'Grupos de 4+',
    acc_hotel5_body:'For groups of 4+, a VRBO apartment in Uptown Dallas often works out significantly cheaper than hotel rooms. Full kitchen, more space, and one of Dallas\'s best neighborhoods.',
    acc_hotel6_name:'Hilton Fort Worth',
    acc_hotel6_area:'Fort Worth · $$',
    acc_hotel6_tag:'Económico Inteligente',
    acc_hotel6_body:'Downtown Fort Worth, walking distance to the Stockyards. TRE train gives direct match-day access to the stadium. Often 30–40% cheaper than equivalent Dallas hotels.',
    acc_arlington_best:'Asistir a 3+ partidos · Grupos que quieren ir andando al estadio',
    acc_dallas_best:'Primera visita · Explorar Dallas · Fan zones',
    acc_fw_best:'Viajeros con presupuesto · Familias · Base tranquila',
    acc_arlington_price:'$150–350/noche en días de partido · Se agota rápido — reserva ahora',
    acc_dallas_price:'$120–280/noche · Más opciones de hotel que Arlington',
    acc_fw_price:'$80–180/noche · Mucho más barato que Dallas en días de partido',
    acc_price_range:'Rango de precios',
    acc_best_for_lbl:'Mejor para',
    acc_book_early_body:'Dallas hotel prices during the World Cup are already 2–3× normal rates. Book refundable rates now and cancel later if plans change.',
    acc_free_cancel_body:'Book fully refundable rates even if they\'re slightly higher. Match schedules can shift. Booking.com and VRBO both offer strong cancellation options.',
    acc_checkout_body:'Many hotels require minimum stays around match days. Look for hotels with no minimum stay requirements — or book a full week even if you plan to arrive late.',
    acc_non_match_body:'Match days have surge pricing on Uber and chaotic traffic. Schedule your departure for a quiet Tuesday or Wednesday — easier airport journey and cheaper rideshare prices.',
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
    related_label:'Guides Connexes', related_title:'Continuer à Explorer',
    
    home_book_title:'Planifiez Votre Voyage à Dallas',
    home_book_sub:'Comparez les hôtels près du AT&T Stadium, trouvez des vols vers DFW et louez une voiture.',
        
    // ── BOOKING TITLES [FR] ──
    book_plan_visit:'Planifiez Cette Visite',
    book_plan_visit_sub:'Séjournez à proximité, louez une voiture et profitez au maximum de votre journée.',
    book_dallas_trip:'Réservez Votre Voyage à Dallas',
    book_dallas_trip_sub:'Trouvez des vols vers DFW, des hôtels près du stade et des voitures de location.',
    book_dallas_stay:'Planifiez Votre Séjour à Dallas',
    book_dallas_stay_sub:'Réservez hôtels, vols et voitures pour votre visite à la Coupe du Monde.',
    book_family_stay:'Planifiez Votre Séjour en Famille',
    book_family_stay_sub:'Les hôtels avec piscine sont très demandés — réservez tôt.',
    book_fanzone:'Planifiez Votre Visite en Fan Zone',
    book_fanzone_sub:'Séjournez au centre-ville de Dallas pour accéder facilement aux fan zones.',
    book_match_day:'Réservez Votre Jour de Match',
    book_match_day_sub:'Réservez votre hôtel près du AT&T Stadium et des vols vers DFW.',
    book_explore:'Planifiez Votre Séjour à Dallas',
    book_explore_sub:'Réservez des hôtels près des meilleurs quartiers de Dallas.',
    book_search_now:'Chercher et Réserver Maintenant',
    book_search_now_sub:'Comparez les hôtels à Arlington, Dallas et Fort Worth.',
    book_daytrips:'Planifiez Vos Excursions',
    book_daytrips_sub:'Louez une voiture pour explorer le Texas. Les maisons VRBO sont idéales.',
    book_groups:'Réserver un Hébergement de Groupe',
    book_groups_sub:'Les maisons VRBO pour 8–16 personnes reviennent souvent moins cher.',
    act_keep_label:'Continuer à Explorer', act_keep_title:'Plus d\'Activités', act_all_fam:'Toutes les Activités Familiales',
    
    // ── SHARED SECTION LABELS [FR] ──
    rst_about:'À Propos',
    rst_full_story:'L\'Histoire Complète',
    rst_highlights:'Points Forts',
    rst_insider:'Conseils d\'Initiés',
    rst_staying:'Séjourner à Proximité?',
    rst_why:'Pourquoi Y Aller',
    rst_hotels_nearby:'Hôtels à Proximité',
    act_full_details:'Détails Complets',
    act_why:'Pourquoi Visiter',
    act_how_to:'Comment Y Aller',
    act_highlights:'Points Forts',
    act_practical:'Informations Pratiques',
    act_admission:'Prix d\'Entrée',
    act_insider:'Conseils de Visite',
    act_getting:'Comment Y Aller',
    act_what_see:'Que Voir',
    act_what_inc:'Ce Qui Est Inclus',
    act_before:'Avant d\'Y Aller',
    act_important:'Notes Importantes',
    nbh_about:'À Propos du Quartier',
    nbh_highlights:'Points Forts',
    nbh_insider:'Conseils Locaux',
    nbh_book_for:'Réserver dans ce Quartier',
    nbh_where_eat:'Où Manger à Proximité',
    home_everything:'Tout Ce Dont Vous Avez Besoin',
    home_live:'Conditions en Direct',
    mat_fixtures:'Matchs à Dallas',
    mat_venue:'AT&T Stadium · Arlington TX',
    mat_stay:'Séjourner près du Stade',
    mat_venue_info:'Infos sur le Stade',
    exp_nbh_title:'Quartiers',
    exp_where_eat:'Où Manger à Dallas',
    exp_six_areas:'Six Quartiers à Connaître',
    fam_transit:'Guide Transport Familial',
    fam_weather:'Alerte Chaleur Dallas',
    fam_10_title:'10 Attractions Familiales',
    fam_heat:'S\'adapter à la Chaleur',
    log_rec_route:'Itinéraire Recommandé',
    log_all_opts:'Toutes les Options',
    log_book_transport:'Réserver le Transport',
    ap_when_land:'À l\'Arrivée',
    map_interactive:'Carte Interactive',
    tkt_categories:'Catégories de Billets',
    wx_stadium:'Météo au Stade',
    wx_live:'En Direct de Dallas TX',
    wx_next24:'Prochaines 24 Heures',
    wx_7day:'Prévision 7 Jours',
    srv_live:'Conditions en Direct',
    dt_san_antonio:'San Antonio — L\'Alamo et la River Walk',
    
    // ── EXTRA LABELS [FR] ──
    nbh_stay_explore:'Séjourner et Explorer',
    nbh_nearby_dining:'Restaurants à Proximité',
    nbh_nearby:'À Proximité',
    nbh_the_neighborhood:'Le Quartier',
    rst_hotels_in:'Hôtels dans ce Quartier',
    rst_more_rest:'Plus de Restaurants à Dallas',
    rst_keep_exploring:'Continuer à Explorer',
    wx_conditions:'Aperçu des Conditions',
    wx_match_advice:'Conseils pour le Jour de Match',
    wx_stadium_weather:'Météo au Stade',
    fam_transit_guide:'Guide Transport Familial',
    fam_weather_warning:'Alerte Chaleur Dallas',
    
    // ── GENERIC SECTION KEYS [FR] ──
    nbh_the_details:'Les Détails',
    nbh_book_area:'Réserver dans ce Quartier',
    nbh_where_eat_h2:'Où Manger',
    nbh_more_nbh:'Plus de Quartiers',
    nbh_keep_exp:'Continuer à Explorer',
    rst_hotels_area:'Hôtels dans ce Quartier',
    rst_more_restaurants:'Plus de Restaurants',
    rst_keep_exp:'Continuer à Explorer',
    mat_dallas_fixtures:'Matchs à Dallas',
    exp_where_eat_h2:'Où Manger',
    fam_transit_h2:'Guide Transport Familial',
    fam_dallas_weather:'Alerte Chaleur Dallas',
    wx_stadium_h2:'Météo au Stade',
    
    // ── HERO SUBTITLES [FR] ──
    survival_hero_sub:'Connaissances essentielles pour les visiteurs internationaux. Le Texas a ses propres règles, culture et climat.',
    tickets_hero_sub:'Tout ce que vous devez savoir sur l\'achat de billets pour les matchs de la Coupe du Monde 2026 à Dallas.',
    accommodation_hero_sub:'Arlington, le centre-ville de Dallas ou Fort Worth? Chaque option a ses avantages selon votre budget et les matchs auxquels vous assistez.',
    daytrips_hero_sub:'La plupart des visiteurs ont 7–14 jours. Entre les matchs, le Texas offre des destinations uniques à quelques heures de route.',
    checklist_hero_sub:'35 choses à régler avant d\'aller au AT&T Stadium. Cochez-les au fur et à mesure pour éviter les problèmes.',
    fanzones_hero_sub:'Vous n\'avez pas besoin de billet pour vivre la Coupe du Monde à Dallas. Le Festival des Fans FIFA et des dizaines de lieux diffusent l\'ambiance pour tous.',
    budget_hero_sub:'La vérité honnête sur ce que coûte une semaine à Dallas — des snacks du stade aux pourboires. Planifiez votre budget avant d\'arriver.',
    phrases_hero_sub:'L\'Amérique et le Texas ont leurs propres règles. Voici ce que les visiteurs internationaux font souvent mal et comment s\'intégrer.',
    families_hero_sub:'Les meilleures activités avec des enfants à Dallas pendant la Coupe du Monde — musées, parcs à thème et moyens de lutter contre la chaleur.',
    shopping_hero_sub:'Dallas est une destination shopping de classe mondiale — des centres commerciaux de luxe aux produits texans et aux outlets.',
    groups_hero_sub:'Vous voyagez avec un club de supporters ou un groupe de 10+? Les groupes ont des besoins logistiques différents.',
    halal_hero_sub:'Dallas a une grande communauté musulmane. La nourriture halal est facile à trouver, notamment à Richardson.',
    airport_hero_sub:'DFW International est l\'un des plus grands aéroports du monde. Voici tout ce dont vous avez besoin pour rejoindre votre hôtel sans stress.',
    
    // ── GROUPS PAGE [FR] ──
    grp_accom1_title:'Blocs de chambres d\'hôtel',
    grp_accom1_body:'Pour les groupes de 10+ chambres, contactez les hôtels directement. Marriott, Hilton et Hyatt ont des équipes dédiées aux groupes.',
    grp_accom2_title:'VRBO pour les grands groupes',
    grp_accom2_body:'Une grande maison VRBO accueille 8–16 personnes pour bien moins que les hôtels. Uptown Dallas et Las Colinas ont d\'excellentes options avec piscine.',
    grp_accom3_title:'Se répartir dans les villes proches',
    grp_accom3_body:'Les grands groupes répartissent souvent l\'hébergement entre Dallas, Arlington et Fort Worth. Coordonnez un point de rendez-vous central.',
    grp_trans1_title:'Train TRE — idéal pour les groupes',
    grp_trans1_body:'Relie le centre-ville de Dallas à CentrePort les jours de match avec navettes gratuites de la FIFA. Pas cher ($2.50) et fiable.',
    grp_trans2_title:'Car affrété',
    grp_trans2_body:'Pour les groupes de 40+, affréter un car vaut la peine. Environ $400–800 pour l\'aller-retour. Réservez à l\'avance.',
    grp_trans3_title:'Convoi de rideshare',
    grp_trans3_body:'Pour les groupes de 8–20, commandez plusieurs Uber simultanément. Définissez un point de prise en charge et commandez 30 minutes avant.',
    grp_trans4_title:'Covoiturage avec parking',
    grp_trans4_body:'Les groupes avec voitures peuvent covoiturer. Le parking officiel coûte $30–60 par véhicule. Réservez les places à l\'avance.',
    grp_before_match:'Avant le match',
    grp_meetup_spots:'Meilleurs points de rendez-vous',
    grp_meet1_title:'Désignez un point de rendez-vous',
    grp_meet1_body:'à l\'extérieur du AT&T Stadium — à l\'intérieur le signal est mauvais. Convenez d\'une porte (A, B, C, etc.).',
    grp_meet2_title:'Groupe WhatsApp',
    grp_meet2_body:'avec tous les voyageurs. Partagez adresses, billets et plans. Téléchargez des cartes hors ligne de Dallas.',
    grp_meet3_title:'SIM ou eSIM américaine',
    grp_meet3_body:'— tout le groupe a besoin d\'un numéro américain avec data. L\'eSIM US Mobile est la plus simple.',
    grp_spot1:'The Rustic, Uptown — immense salle en plein air, idéale pour les grands groupes. Super ambiance avec grands écrans.',
    grp_spot2:'Klyde Warren Park — parc gratuit au centre-ville. Grand espace avec food trucks.',
    grp_spot3:'FIFA Fan Festival — le point de rassemblement naturel pour les supporters de toutes les nations.',
    grp_clubs_intro:'La plupart des clubs de supporters nationaux organisent des voyages en groupe et des événements. Rejoignez le vôtre avant de partir.',
    grp_club1_title:'Oranje (Pays-Bas)',
    grp_club1_body:'L\'un des clubs de supporters les plus organisés au monde — célèbres marches orange. Consultez oranjesupporter.nl.',
    grp_club2_title:'La Albiceleste (Argentine)',
    grp_club2_body:'Supporters attendus en grand nombre en tant que champions en titre. Dallas a une communauté argentine établie.',
    grp_club3_title:'Torcida (Brésil)',
    grp_club3_body:'Les Brésiliens apportent la meilleure ambiance. Grande communauté brésilienne à DFW.',
    grp_club4_title:'American Outlaws (États-Unis)',
    grp_club4_body:'Club national avec des chapitres actifs à Dallas-Fort Worth. americanoutlaws.com.',
    grp_6months:'6+ mois avant',
    grp_1month:'1 mois avant',
    grp_check1:'Réserver un bloc de chambres ou une maison VRBO',
    grp_check2:'Inscrire tous les membres sur FIFA.com',
    grp_check3:'Postuler ensemble pour des billets via tirage FIFA',
    grp_check4:'Réserver les vols (même vol si possible)',
    grp_check5:'Créer un groupe WhatsApp ou Telegram',
    grp_check6:'Confirmer les billets dans l\'appli FIFA',
    grp_check7:'Obtenir une eSIM US Mobile pour tous',
    grp_check8:'Réserver le transport de groupe vers le stade',
    grp_check9:'Désigner un responsable pour le jour du match',
    grp_check10:'Convenir d\'un point de rendez-vous au stade',
    
    // ── SHARED CARD LABELS [FR] ──
    lbl_address:'Adresse',
    lbl_hours:'Horaires',
    lbl_cuisine:'Cuisine',
    lbl_price:'Prix',
    lbl_halal:'Statut Halal',
    lbl_dart:'DART',
    lbl_duration:'Durée',
    lbl_age:'Âge Recommandé',
    lbl_best_for:'Meilleur Emplacement pour les Visiteurs',
    lbl_phone:'Téléphone',
    lbl_website:'Site Web',
    lbl_experience:'Expérience Requise',
    lbl_getting_there:'Comment Y Aller',
    lbl_insider_tips:'Conseils d\'Initiés',
    lbl_admission:'Entrée',
    lbl_age_req:'Condition d\'Âge',
    lbl_cost:'Coût',
    lbl_open_24:'Ouvert 24h/24',
    lbl_official_site:'Site Officiel',
    lbl_fifa_app:'Application Billets FIFA',
    lbl_sales_phases:'Phases de Vente',
    lbl_id_required:'Pièce d\'Identité Requise',
    lbl_iata:'Code IATA',
    lbl_dist_dallas:'Distance de Dallas',
    lbl_dist_stadium:'Distance du Stade',
    lbl_intl_terminal:'Terminal International',
    lbl_terminals:'Terminaux',
    lbl_price_range:'Fourchette de Prix',
    lbl_best_for_who:'Idéal Pour',
    lbl_getting_there_dt:'Comment Y Aller',
    lbl_best_time:'Meilleur Moment pour Visiter',
    lbl_road_trip:'Idée de Road Trip',
    lbl_halal_avail:'Disponibilité de la Nourriture Halal',
    lbl_mosques:'Mosquées',
    lbl_prayer_stadium:'Prière au Stade',
    lbl_alcohol:'Alcool aux Matchs',
    lbl_restaurants_sit:'Restaurants (service à table)',
    lbl_food_delivery:'Livraison de Repas',
    lbl_uber_lyft:'Uber / Lyft',
    lbl_hotel_housekeep:'Entretien Hôtel',
    lbl_coffee_counter:'Café / Comptoir',
    lbl_tax_on_top:'Taxe en Plus',
    
    // ── CARD CONTENT [FR] ──
    ap_step1_title:'Immigration et Douanes (Terminal D)',
    ap_step1_body:'Allow 60–90 minutes. US citizens use APC kiosks. International visitors use staffed lanes. Have your ESTA or visa, passport, and return flight details ready.',
    ap_step2_title:'Obtenir une SIM américaine',
    ap_step2_body:'AT&T and T-Mobile stores are in Terminal D arrivals hall — open from 6am. Prepaid SIMs from $20–40 for 30 days. Buy before leaving the terminal.',
    ap_step3_title:'Prendre le Skylink vers Votre Terminal',
    ap_step3_body:'If you have a connecting domestic flight, take the free Skylink automated train between terminals. It runs 24/7 every 2–5 minutes.',
    ap_step4_title:'Ligne Orange DART vers le Centre-Ville',
    ap_step4_body:'The DART Orange Line runs from Terminal A (South) at DFW directly to downtown Dallas in ~45 minutes. Buy tickets on the GoPass app. $2.50 per trip.',
    ap_step5_title:'Aller à Arlington (Stade)',
    ap_step5_body:'On match days: TRE train from DFW (CentrePort station) direct — then FREE FIFA shuttle to AT&T Stadium. No match day? Rent a car or Uber (~$35–50).',
    ap_term_a_label:'Terminal A — American Airlines',
    ap_term_b_label:'Terminal B — American Airlines',
    ap_term_c_label:'Terminal C — American Airlines',
    ap_term_d_label:'Terminal D ★ — International',
    ap_term_e_label:'Terminal E — Multiple Airlines',
    ap_term_d_note:'All international arrivals. Immigration, customs, SIM stores, currency exchange. If flying from Europe, South America, Asia or the Middle East — you land here.',
    ap_tip1_title:'Ne prenez pas de taxi depuis DFW',
    ap_tip1_body:'Taxis from DFW to downtown Dallas cost $50–80. The DART Orange Line does the same journey in 45 minutes for $2.50. Use the train.',
    ap_tip2_title:'Prévoyez du temps pour l\'immigration',
    ap_tip2_body:'During the World Cup, DFW will be at peak international capacity. Budget 90 minutes minimum for immigration. Do not book tight connections on entry day.',
    ap_tip3_title:'Réglez votre ESTA avant de partir',
    ap_tip3_body:'Visitors from visa-waiver countries need ESTA approval. Apply at esta.cbp.dhs.gov at least 72 hours before departure. It costs $21 and is valid for 2 years.',
    ap_tip4_title:'Téléchargez GoPass avant d\'arriver',
    ap_tip4_body:'The DART GoPass app lets you buy transit tickets on your phone. Download and set it up before you land so you can go straight to the DART platform.',
    ap_tip5_title:'DFW est immense — prévoyez le temps de correspondance',
    ap_tip5_body:'DFW has 5 terminals spread across a huge area. Never book under 90 minutes for a connection at DFW.',
    ap_tip6_title:'Monnaie — procurez-vous des USD avant d\'arriver',
    ap_tip6_body:'Airport currency exchange has terrible rates. Get USD at your home bank. Cards (Visa/Mastercard) are accepted almost everywhere in Dallas.',
    acc_arlington_title:'Arlington',
    acc_arlington_sub:'À pied du stade',
    acc_arlington_body:'Most convenient for attending multiple matches. Walk or short Uber to AT&T Stadium. Limited nightlife compared to Dallas.',
    acc_arlington_best:'Attending 3+ matches · Groups who want to walk to the stadium',
    acc_dallas_title:'Centre-ville de Dallas',
    acc_dallas_sub:'Meilleur choix global',
    acc_dallas_body:'Best balance of access and experience. DART to the stadium, plus full access to Dallas\'s restaurants, fan zones, and nightlife.',
    acc_dallas_best:'First-time visitors · Exploring Dallas culture · Fan zones',
    acc_fw_title:'Fort Worth',
    acc_fw_sub:'Économique et charmant',
    acc_fw_body:'Often overlooked but genuinely great. 30 minutes to the stadium, much cheaper hotels, and the Fort Worth Stockyards is a unique Texas experience.',
    acc_fw_best:'Budget-conscious visitors · Families · Those wanting a quieter base',
    acc_book_early_title:'Réservez maintenant — les prix vont doubler',
    acc_book_early_body:'Dallas hotel prices during the World Cup are already 2–3× normal rates. By the time matches start, available rooms will be scarce. Book refundable rates now.',
    acc_free_cancel_title:'L\'annulation gratuite est votre alliée',
    acc_free_cancel_body:'Book fully refundable rates even if slightly higher. Match schedules can shift. Booking.com and VRBO both offer strong cancellation options.',
    acc_checkout_title:'Vérifiez le jour de départ',
    acc_checkout_body:'Many hotels require minimum stays around match days. Look for hotels with no minimum stay requirements.',
    acc_non_match_title:'Partez si possible un jour sans match',
    acc_non_match_body:'Match days have surge pricing on Uber and chaotic traffic. Schedule your departure for a quiet Tuesday or Wednesday.',
    bud_budget_label:'Économique',
    bud_midrange_label:'Intermédiaire ★',
    bud_splurge_label:'Luxe',
    bud_budget_items:'Fast food or food trucks ($8–12/meal)|DART for all transport|Free fan zones & parks|Budget hostel or shared rental|Free museums (DMA is free daily)',
    bud_mid_items:'Sit-down restaurants ($20–35/meal)|Occasional Uber ($15–25/trip)|Paid attractions ($20–30)|Mid-range hotel or private rental|Most people fall in this range',
    bud_splurge_items:'Fine dining ($80–150/meal)|Uber Black everywhere|Luxury hotel (Omni, Ritz, etc.)|Premium stadium experiences|Shopping at Northpark / Galleria',
    bud_tip1_title:'Le Musée d\'Art de Dallas est Gratuit',
    bud_tip1_body:'General admission is free every day. One of the best art museums in the American South — world-class collection. A great air-conditioned option on a hot afternoon.',
    bud_tip2_title:'DART économise $30–50 par jour',
    bud_tip2_body:'A DART day pass is $6. The equivalent in Uber rides is $50–80. Use DART for anything downtown.',
    bud_tip3_title:'Utilisez Wise ou Revolut',
    bud_tip3_body:'Airport ATMs and currency exchange booths charge 5–8% in fees. A Wise or Revolut card gives you near-perfect exchange rates. Set one up before you fly.',
    bud_tip4_title:'Food trucks pour le déjeuner',
    bud_tip4_body:'Dallas has an excellent food truck scene. Excellent tacos, BBQ, and international food for $10–14. Save sit-down restaurants for dinner.',
    bud_tip5_title:'Apportez de l\'eau au stade',
    bud_tip5_body:'Empty refillable water bottles are permitted through AT&T Stadium security. Stadium water costs $6–8 per bottle — a family of 4 saves $25+ per match.',
    bud_tip6_title:'Walmart / HEB pour les snacks',
    bud_tip6_body:'Stock up on snacks from a grocery store for your hotel room. HEB and Walmart are a fraction of the cost of hotel minibars.',
    phr_yall_title:'Y\'all',
    phr_yall_body:'You all / you (plural). The most Texas word in existence. "Y\'all ready to order?" means "Are you all ready to order?" Use it freely.',
    phr_fixin_title:'Fixin\' to',
    phr_fixin_body:'"I\'m fixin\' to head out" = "I\'m about to leave." Not broken, just Texas grammar.',
    phr_bless_title:'Bless your heart',
    phr_bless_body:'On the surface this sounds kind. In practice it often means "you poor fool." Context is everything.',
    phr_howdy_title:'Howdy',
    phr_howdy_body:'Hello. Yes, people actually say this in Texas. It\'s a genuine greeting. Say it back — it\'s endearing.',
    phr_check_title:'Check / the check',
    phr_check_body:'The bill at a restaurant. "Can we get the check?" not "Can we get the bill?" though both work.',
    phr_restroom_title:'Restroom',
    phr_restroom_body:'Toilet / bathroom. "Where\'s the restroom?" is the correct phrasing. "Toilet" is understood but sounds odd.',
    phr_togo_title:'To-go / take-out',
    phr_togo_body:'"Take-away" in American English is "to-go" or "take-out." "Can I get this to-go?" is what you say.',
    phr_soccer_title:'Soccer',
    phr_soccer_body:'What everyone in the US calls football. Don\'t be offended — Americans love the sport, they just have a different name for it.',
    phr_cult1_title:'Le pourboire n\'est pas optionnel',
    phr_cult1_body:'Service staff earn below minimum wage — tips make up the bulk of their income. 18–20% at restaurants is standard, not generous.',
    phr_cult2_title:'Fahrenheit, pas Celsius',
    phr_cult2_body:'Dallas in June-July is 95–105°F (35–40°C). Quick conversion: subtract 32, divide by 1.8 to get Celsius.',
    phr_cult3_title:'Tout nécessite une voiture',
    phr_cult3_body:'Dallas is not a walking city outside specific neighborhoods. Use DART for downtown, Uber for everything else.',
    phr_cult4_title:'Les sodas sont illimités',
    phr_cult4_body:'Soft drinks come with unlimited free refills at almost every American restaurant. You don\'t need to ask.',
    phr_cult5_title:'Comment commander un BBQ',
    phr_cult5_body:'At most Texas BBQ joints you order by weight at a counter — "half a pound of brisket, please." Eat with your hands.',
    phr_cult6_title:'Gardez toujours votre passeport',
    phr_cult6_body:'US bars card everyone who looks under 40. You need government-issued photo ID to buy alcohol. Your passport is safest.',
    phr_cult7_title:'"Comment allez-vous?" est une salutation',
    phr_cult7_body:'When an American says "Hi, how are you?" they expect "Good, thanks!" — not an actual account of your wellbeing.',
    phr_cult8_title:'Les soins médicaux coûtent très cher',
    phr_cult8_body:'A hospital visit without insurance costs thousands. Buy comprehensive travel insurance before you travel — medical coverage is the most important part.',
    phr_col_restaurant:'Au restaurant',
    phr_col_transport:'Se déplacer',
    fz_tip1_title:'Arrivez Tôt',
    fz_tip1_body:'Fan zones fill up 60–90 minutes before kickoff for major matches. For the Semifinal, plan to arrive 2+ hours early.',
    fz_tip2_title:'Luttez Contre la Chaleur',
    fz_tip2_body:'Outdoor fan zones in Dallas in June-July reach 38-40°C. Bring water, sunscreen, and a hat for daytime matches.',
    fz_tip3_title:'Portez Vos Couleurs',
    fz_tip3_body:'National team shirts make fan zones electric. Dallas will have supporters from every nation.',
    fz_tip4_title:'Utilisez le DART',
    fz_tip4_body:'Downtown Dallas fan zones are easily reachable by DART light rail. Avoid driving — parking near popular venues is expensive.',
    fz_info_entry:'Entrée',
    fz_info_screens:'Écrans',
    fz_info_transport:'Comment Y Aller',
    fz_info_location:'Emplacement Prévu',
    fz_warning_title:'Confirmation officielle en attente',
    fz_warning_body:'FIFA typically announces Fan Festival details 3–6 months before the tournament. Check FIFA.com for the latest.',
    shop_northpark:'NorthPark Center',shop_galleria:'Galleria Dallas',shop_allen:'Allen Premium Outlets',shop_legacy:'The Shops at Legacy',shop_bishop:'Quartier des Arts Bishop',shop_deepellum:'Deep Ellum',shop_cowboy:'Chapeau Resistol ou Stetson',shop_boots:'Bottes de Cowboy du Texas',shop_sauce:'Sauce Piquante et BBQ du Texas',shop_art:'Art et Impressions du Texas',shop_pecan:'Friandises Noix de Pécan',shop_merch:'Merchandising Officiel du Tournoi',fam_dart_title:'Métro Léger DART',fam_car_title:'Location de Voiture',fam_uber_title:'Uber / Lyft avec Enfants',
    
    // ── TICKETS PAGE [FR] ──
    tkt_warning:'Achetez toujours officiel en premier.',
    tkt_warning_body:'La seule source autorisée pour les billets de la Coupe du Monde FIFA 2026 est FIFA.com/tickets. Tout autre site vendant des billets \"officiels\" est un tiers au mieux, une arnaque au pire.',
    tkt_official_site_body:'Créez d\'abord un compte FIFA — obligatoire avant tout achat',
    tkt_app_body:'Téléchargez l\'application officielle FIFA — tous les billets sont numériques. Nécessaire pour l\'entrée au stade. Téléchargez avant de voyager.',
    tkt_phases_body:'FIFA organise plusieurs phases de vente — ballot anticipé, vente générale et dernière minute. Chaque phase s\'ouvre sur FIFA.com. Inscrivez-vous aux alertes email.',
    tkt_id_body:'Les billets sont liés à votre identité. À l\'entrée, vous aurez besoin de votre passeport ou pièce d\'identité correspondant au nom du billet.',
    tkt_cat4_title:'Catégorie 4',
    tkt_cat4_price:'50–80$',
    tkt_cat4_body:'Vue restreinte ou niveau supérieur. Prix le plus bas, disponibilité limitée. Premières à être vendues lors des phases de ballot.',
    tkt_cat3_title:'Catégorie 3',
    tkt_cat3_price:'100–150$',
    tkt_cat3_body:'Niveau supérieur avec vue complète sur le terrain. Meilleur rapport qualité-prix — bonne visibilité au AT&T Stadium.',
    tkt_cat2_title:'Catégorie 2',
    tkt_cat2_price:'200–350$',
    tkt_cat2_body:'Niveau inférieur, tribunes latérales. Excellente vue, bonne ambiance. Catégorie la plus populaire.',
    tkt_cat1_title:'Catégorie 1',
    tkt_cat1_price:'400–800$',
    tkt_cat1_body:'Niveau inférieur premium, derrière les buts ou au milieu. Meilleures places du stade. Très limitées.',
    tkt_semi_title:'Demi-finale',
    tkt_semi_price:'400–2 000$',
    tkt_semi_body:'Dallas accueille une Demi-finale (14 juillet). Tarifs premium dans toutes les catégories. Achetez dès l\'ouverture des ventes.',
    tkt_resale_intro:'FIFA dispose d\'une plateforme de revente officielle — l\'option la plus sûre sur le marché secondaire.',
    tkt_resale1_title:'Revente Officielle FIFA',
    tkt_resale1_body:'FIFA.com/tickets — marché officiel de revente. Option la plus sûre. Billets vérifiés et liés à l\'ID.',
    tkt_resale2_title:'StubHub / Viagogo',
    tkt_resale2_body:'Attendez-vous à payer 3–10× le prix facial pour les matchs populaires. Achetez tôt si vous utilisez la revente.',
    tkt_resale3_title:'Allocation Clubs de Supporters',
    tkt_resale3_body:'Les fédérations nationales reçoivent des allocations de billets. Rejoignez votre club de supporters national — les clubs néerlandais, argentin, brésilien et anglais ont souvent des packages.',
    tkt_scam1_title:'Les billets PDF sont faux',
    tkt_scam1_body:'Les billets de la Coupe du Monde FIFA 2026 sont uniquement numériques. Quiconque vend un PDF, capture d\'écran ou billet imprimé vous arnaque.',
    tkt_scam2_title:'Virement bancaire = aucune protection',
    tkt_scam2_body:'Ne payez jamais par virement, crypto ou cartes-cadeaux. Utilisez uniquement une carte de crédit via une plateforme vérifiée.',
    tkt_scam3_title:'Vendeurs sur les réseaux sociaux',
    tkt_scam3_body:'Facebook, WhatsApp et Instagram sont remplis d\'arnaqueurs lors des grands tournois. Utilisez uniquement des plateformes vérifiées.',
    tkt_scam4_title:'Faux sites FIFA',
    tkt_scam4_body:'La seule vraie URL FIFA est fifa.com — mettez-la en favori. Ne cliquez pas sur des liens dans des emails ou des publicités.',
    tkt_stad1_title:'Téléchargez l\'Appli FIFA',
    tkt_stad1_body:'Votre billet est dans l\'application FIFA. Téléchargez-la et ajoutez votre billet bien avant le jour du match.',
    tkt_stad2_title:'Arrivez 90 minutes en avance',
    tkt_stad2_body:'Le AT&T Stadium est immense. Les files de sécurité pour 100 000+ personnes prennent du temps. Les portes ouvrent 2h30 avant le coup d\'envoi.',
    tkt_stad3_title:'Politique sac transparent',
    tkt_stad3_body:'Seuls les sacs transparents inférieurs à 30×15×30 cm sont autorisés. Les petites pochettes jusqu\'à 11×16,5 cm sont permises.',
    tkt_stad4_title:'Apportez une pièce d\'identité',
    tkt_stad4_body:'Votre passeport ou pièce d\'identité doit correspondre au nom du billet. La FIFA peut effectuer des contrôles aléatoires à l\'entrée.',
    
    // ── BIG PAGE CONTENT [FR] ──
    ap_step1_body:'Comptez 60–90 minutes. Les citoyens américains utilisent les bornes APC. Les visiteurs internationaux utilisent les guichets avec agents. Ayez votre ESTA, passeport et détails de vol de retour prêts.',
    ap_step2_body:'Les boutiques AT&T et T-Mobile sont dans le hall des arrivées du Terminal D. SIM prépayée de $20–40 pour 30 jours. Bien moins cher que le roaming.',
    ap_step3_body:'If you have a connecting domestic flight, take the free Skylink automated train between terminals. It runs 24/7 every 2–5 minutes. Terminals are far apart — allow 30+ minutes for connections.',
    ap_step4_body:'La ligne Orange DART relie le Terminal A Sud du DFW au centre-ville de Dallas en ~45 minutes. $2.50 par trajet. Ne prenez pas de taxi depuis l\'aéroport.',
    ap_step5_body:'Les jours de match: train TRE depuis DFW jusqu\'à la gare CentrePort — puis navette GRATUITE FIFA vers le AT&T Stadium.',
    ap_tip1_body:'Les taxis de DFW au centre-ville coûtent $50–80. La ligne Orange DART fait le même trajet en 45 minutes pour $2.50.',
    ap_tip2_body:'Pendant la Coupe du Monde, DFW sera à sa capacité internationale maximale. Prévoyez au moins 90 minutes pour l\'immigration.',
    ap_tip3_body:'Les visiteurs des pays exemptés de visa ont besoin de l\'ESTA. Faites la demande sur esta.cbp.dhs.gov au moins 72 heures avant le départ.',
    ap_tip4_body:'L\'application DART GoPass vous permet d\'acheter des tickets sur votre téléphone. Téléchargez-la avant d\'atterrir.',
    ap_tip5_body:'DFW a 5 terminaux répartis sur une grande zone. Ne réservez jamais moins de 90 minutes pour une correspondance à DFW.',
    ap_tip6_body:'Les bureaux de change des aéroports ont de mauvais taux. Procurez-vous des dollars dans votre banque avant de voyager.',
    ap_term_a_airlines:'American Airlines',
    ap_term_a_body:'Domestic US flights. DART Orange Line station is at Terminal A South — the quickest route to downtown Dallas.',
    ap_term_b_airlines:'American Airlines',
    ap_term_b_body:'Domestic US flights. Good food options including local Texas brands. Skylink to all other terminals.',
    ap_term_c_airlines:'American Airlines',
    ap_term_c_body:'Domestic and some international. Skylink connects to Terminal D for international arrivals and customs.',
    ap_term_d_airlines:'International — Most visitors land here',
    ap_term_d_body:'All international arrivals. Immigration, customs, SIM stores, currency exchange, and ground transport. If flying from Europe, South America, Asia, or the Middle East — you land here.',
    ap_term_e_airlines:'Multiple Airlines',
    ap_term_e_body:'Spirit, Frontier, United, and others. Ground transport to TRE and rental cars. Skylink to all terminals.',
    ap_dal_airlines:'Southwest Airlines (primary), Delta, United (limited)',
    ap_dal_dist:'8 km from downtown Dallas — much closer than DFW',
    ap_dal_transit:'DART Orange/Blue Line (Inwood/Love Field station) — 15 min to downtown',
    ap_dal_body:'Love Field is domestic only — no international flights. If you\'re connecting from a US city, you might land here. It\'s more convenient than DFW for downtown Dallas hotels. The DART light rail stop is a short walk from the terminal.',
    ap_dal_airlines_label:'Airlines',
    ap_dal_dist_label:'Distance',
    ap_dal_transit_label:'Transit',
    bud_budget_items:'Fast food ou food trucks ($8–12/repas)|DART pour tout le transport|Fan zones et parcs gratuits|Auberge de jeunesse ou appartement VRBO partagé|Musées gratuits (le DMA est gratuit chaque jour)',
    bud_mid_items:'Restaurants ($20–35/personne)|Uber occasionnel ($15–25/trajet)|Attractions payantes ($20–30)|Hôtel intermédiaire ou VRBO privé|La plupart des visiteurs sont dans cette catégorie',
    bud_splurge_items:'Restaurant gastronomique ($80–150/personne)|Uber Black partout|Hôtel de luxe (Omni, Ritz, etc.)|Expériences premium au stade|Shopping au Northpark / Galleria',
    bud_per_day:'par jour',
    bud_excl_note:'Par personne par jour, hors billets de match et hébergement. Tous les prix en USD.',
    bud_food_drink:'Nourriture et Boissons',
    bud_transport_activities:'Transport et Activités',
    bud_tipping_warning:'Le pourboire n\'est pas optionnel aux États-Unis.',
    bud_tipping_body:'Le personnel de service est souvent payé en dessous du salaire minimum. Ne pas donner de pourboire est considéré comme impoli.',
    hal_tip1_title:'Vérifiez la certification halal',
    hal_tip1_body:'Always verify halal status with the restaurant directly — use Zabihah.com or the Halal Trip app to find certified halal restaurants in DFW.',
    hal_tip2_title:'Épiceries halal',
    hal_tip2_body:'Al-Barakah Halal Meat Market in Richardson and Halal Meat Shop on Greenville Ave stock a wide range of certified halal meat and groceries.',
    hal_tip3_title:'Wudu au stade',
    hal_tip3_body:'AT&T Stadium bathrooms have standard sinks. Plan to perform wudu at your hotel before match day. Prayer room availability will be confirmed closer to the tournament.',
    hal_tip4_title:'Direction qibla à Dallas',
    hal_tip4_body:'From Dallas, the qibla direction is approximately 48–50° northeast. Use the Muslim Pro or Athan app for a precise compass reading.',
    hal_tip5_title:'L\'alcool est partout',
    hal_tip5_body:'Alcohol is served at the stadium, in restaurants, and at fan zones. It is not compulsory — simply decline. The Richardson halal restaurant cluster is entirely alcohol-free.',
    hal_tip6_title:'Richardson — votre base',
    hal_tip6_body:'Consider staying in Richardson if halal food access is a priority. 15 min on DART to downtown Dallas, 30 min to the stadium on match days.',
    hal_mosque1_title:'IANT — Association Islamique du Nord du Texas',
    hal_mosque1_loc:'Richardson · Principale mosquée communautaire',
    hal_mosque1_body:'The largest Islamic centre in the Dallas area. Full Friday Jumu\'ah services, daily prayers, halal food market on-site. Near DART Red Line.',
    hal_mosque2_title:'Masjid Al-Islam',
    hal_mosque2_loc:'Dallas · Près du centre-ville',
    hal_mosque2_body:'Convenient for visitors staying in downtown Dallas. Daily prayers. Friday Jumu\'ah at 1:15pm. Accessible by DART.',
    hal_mosque3_title:'Masjid Al-Hedaya',
    hal_mosque3_loc:'Arlington · Près du AT&T Stadium',
    hal_mosque3_body:'Closest mosque to AT&T Stadium. Useful on match days for Dhuhr or Asr prayers before or after a game. ~5 minutes drive from the stadium.',
    hal_mosque4_title:'Application Horaires de Prière',
    hal_mosque4_loc:'Outil numérique',
    hal_mosque4_body:'Download Muslim Pro or Athan app before travelling. Both provide accurate Dallas prayer times, qibla direction, and nearby mosque finder. Free to use.',
    hal_rest_intro:'Richardson (15-20 min du centre-ville de Dallas sur la Ligne Rouge DART) est le cœur de la restauration halal à DFW.',
    acc_hotel1_name:'Omni Dallas Hotel',
    acc_hotel1_area:'Downtown Dallas · $$$',
    acc_hotel1_tag:'Premier Choix',
    acc_hotel1_body:'Connected by skybridge to the Kay Bailey Hutchison Convention Center. Rooftop pool, great views, and directly above DART connections. One of Dallas\'s finest hotels — book far in advance.',
    acc_hotel2_name:'Marriott Courtyard Arlington',
    acc_hotel2_area:'Arlington · $$',
    acc_hotel2_tag:'Près du Stade',
    acc_hotel2_body:'Within walking distance of AT&T Stadium. Clean, reliable, and the location is unbeatable for match days. Fills up months in advance — check availability now.',
    acc_hotel3_name:'The Adolphus Hotel',
    acc_hotel3_area:'Downtown Dallas · $$$$',
    acc_hotel3_tag:'Luxe Historique',
    acc_hotel3_body:'Built in 1912, this is Dallas\'s most storied hotel. Beaux-Arts architecture, exceptional service, and a legendary bar. If you want one memorable splurge night, this is the one.',
    acc_hotel4_name:'Aloft Dallas Downtown',
    acc_hotel4_area:'Downtown Dallas · $$',
    acc_hotel4_tag:'Meilleur Rapport Qualité-Prix',
    acc_hotel4_body:'Modern, well-located, and reasonably priced. Good common areas, reliable WiFi, and walking distance to DART. Great for younger travellers and groups.',
    acc_hotel5_name:'VRBO — Uptown Dallas',
    acc_hotel5_area:'Uptown · $ per person',
    acc_hotel5_tag:'Groupes de 4+',
    acc_hotel5_body:'For groups of 4+, a VRBO apartment in Uptown Dallas often works out significantly cheaper than hotel rooms. Full kitchen, more space, and one of Dallas\'s best neighborhoods.',
    acc_hotel6_name:'Hilton Fort Worth',
    acc_hotel6_area:'Fort Worth · $$',
    acc_hotel6_tag:'Budget Intelligent',
    acc_hotel6_body:'Downtown Fort Worth, walking distance to the Stockyards. TRE train gives direct match-day access to the stadium. Often 30–40% cheaper than equivalent Dallas hotels.',
    acc_arlington_best:'Assister à 3+ matchs · Groupes voulant marcher jusqu\'au stade',
    acc_dallas_best:'Premiers visiteurs · Explorer Dallas · Fan zones',
    acc_fw_best:'Voyageurs avec budget limité · Familles · Base tranquille',
    acc_arlington_price:'$150–350/nuit les jours de match · Se remplit vite — réservez maintenant',
    acc_dallas_price:'$120–280/nuit · Plus d\'options d\'hôtels qu\'Arlington',
    acc_fw_price:'$80–180/nuit · Nettement moins cher que Dallas les jours de match',
    acc_price_range:'Fourchette de prix',
    acc_best_for_lbl:'Idéal pour',
    acc_book_early_body:'Dallas hotel prices during the World Cup are already 2–3× normal rates. Book refundable rates now and cancel later if plans change.',
    acc_free_cancel_body:'Book fully refundable rates even if they\'re slightly higher. Match schedules can shift. Booking.com and VRBO both offer strong cancellation options.',
    acc_checkout_body:'Many hotels require minimum stays around match days. Look for hotels with no minimum stay requirements — or book a full week even if you plan to arrive late.',
    acc_non_match_body:'Match days have surge pricing on Uber and chaotic traffic. Schedule your departure for a quiet Tuesday or Wednesday — easier airport journey and cheaper rideshare prices.',
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
    related_label:'Gerelateerde Gidsen', related_title:'Blijf Verkennen',
    
    home_book_title:'Plan Je Dallas Reis',
    home_book_sub:'Vergelijk hotels bij AT&T Stadium, vind vluchten naar DFW en huur een auto.',
        
    // ── BOOKING TITLES [NL] ──
    book_plan_visit:'Plan Dit Bezoek',
    book_plan_visit_sub:'Verblijf dichtbij, huur een auto en haal het meeste uit je dag.',
    book_dallas_trip:'Boek Je Dallas Reis',
    book_dallas_trip_sub:'Vind vluchten naar DFW, hotels bij het stadion en huurauto\'s.',
    book_dallas_stay:'Plan Je Dallas Verblijf',
    book_dallas_stay_sub:'Boek hotels, vluchten en auto\'s voor je WK-bezoek.',
    book_family_stay:'Plan Je Gezinsverblijf',
    book_family_stay_sub:'Hotels met zwembad zijn erg gevraagd — boek vroeg voor WK 2026.',
    book_fanzone:'Plan Je Fanzone Bezoek',
    book_fanzone_sub:'Verblijf in het centrum van Dallas voor gemakkelijke toegang tot fanzones.',
    book_match_day:'Boek Je Wedstrijddag',
    book_match_day_sub:'Boek je hotel bij AT&T Stadium en vluchten naar DFW.',
    book_explore:'Plan Je Dallas Verblijf',
    book_explore_sub:'Boek hotels bij de beste wijken van Dallas.',
    book_search_now:'Nu Zoeken en Boeken',
    book_search_now_sub:'Vergelijk hotels in Arlington, Dallas en Fort Worth.',
    book_daytrips:'Plan Je Dagtrips',
    book_daytrips_sub:'Huur een auto om Texas te verkennen. VRBO vakantiehuizen zijn geweldig.',
    book_groups:'Groepsaccommodatie Boeken',
    book_groups_sub:'VRBO huizen voor 8–16 personen zijn vaak goedkoper dan hotels.',
    act_keep_label:'Blijf Verkennen', act_keep_title:'Meer Activiteiten', act_all_fam:'Alle Gezinsactiviteiten',
    
    // ── SHARED SECTION LABELS [NL] ──
    rst_about:'Over het Restaurant',
    rst_full_story:'Het Volledige Verhaal',
    rst_highlights:'Hoogtepunten',
    rst_insider:'Insidertips',
    rst_staying:'In de Buurt Verblijven?',
    rst_why:'Waarom Gaan',
    rst_hotels_nearby:'Nabijgelegen Hotels',
    act_full_details:'Volledige Details',
    act_why:'Waarom Bezoeken',
    act_how_to:'Hoe er Komen',
    act_highlights:'Hoogtepunten',
    act_practical:'Praktische Info',
    act_admission:'Toegangsprijzen',
    act_insider:'Bezoekerstips',
    act_getting:'Hoe er Komen',
    act_what_see:'Wat te Zien',
    act_what_inc:'Wat is Inbegrepen',
    act_before:'Voor het Bezoek',
    act_important:'Belangrijke Opmerkingen',
    nbh_about:'Over de Wijk',
    nbh_highlights:'Hoogtepunten',
    nbh_insider:'Lokale Tips',
    nbh_book_for:'Boeken in Dit Gebied',
    nbh_where_eat:'Waar te Eten in de Buurt',
    home_everything:'Alles Wat Je Nodig Hebt',
    home_live:'Live Omstandigheden',
    mat_fixtures:'Dallas Wedstrijden',
    mat_venue:'AT&T Stadion · Arlington TX',
    mat_stay:'Verblijven bij het Stadion',
    mat_venue_info:'Stadioninformatie',
    exp_nbh_title:'Wijken',
    exp_where_eat:'Waar te Eten in Dallas',
    exp_six_areas:'Zes Wijken om te Kennen',
    fam_transit:'Gezinsvervoergids',
    fam_weather:'Hittewaarschuwing Dallas',
    fam_10_title:'10 Attracties voor Gezinnen',
    fam_heat:'Plannen rond de Hitte',
    log_rec_route:'Aanbevolen Route',
    log_all_opts:'Alle Opties',
    log_book_transport:'Vervoer Boeken',
    ap_when_land:'Bij Aankomst',
    map_interactive:'Interactieve Kaart',
    tkt_categories:'Kaartcategorieën',
    wx_stadium:'Stadionweer',
    wx_live:'Live vanuit Dallas TX',
    wx_next24:'Komende 24 Uur',
    wx_7day:'7-Daagse Voorspelling',
    srv_live:'Live Omstandigheden',
    dt_san_antonio:'San Antonio — De Alamo en River Walk',
    
    // ── EXTRA LABELS [NL] ──
    nbh_stay_explore:'Verblijven en Verkennen',
    nbh_nearby_dining:'Nabijgelegen Restaurants',
    nbh_nearby:'In de Buurt',
    nbh_the_neighborhood:'De Wijk',
    rst_hotels_in:'Hotels in Dit Gebied',
    rst_more_rest:'Meer Dallas Restaurants',
    rst_keep_exploring:'Blijf Verkennen',
    wx_conditions:'Overzicht van Omstandigheden',
    wx_match_advice:'Wedstrijddag Advies',
    wx_stadium_weather:'Stadionweer',
    fam_transit_guide:'Gezinsvervoergids',
    fam_weather_warning:'Hittewaarschuwing Dallas',
    
    // ── GENERIC SECTION KEYS [NL] ──
    nbh_the_details:'De Details',
    nbh_book_area:'Boeken in Dit Gebied',
    nbh_where_eat_h2:'Waar te Eten',
    nbh_more_nbh:'Meer Wijken',
    nbh_keep_exp:'Blijf Verkennen',
    rst_hotels_area:'Hotels in Dit Gebied',
    rst_more_restaurants:'Meer Restaurants',
    rst_keep_exp:'Blijf Verkennen',
    mat_dallas_fixtures:'Dallas Wedstrijden',
    exp_where_eat_h2:'Waar te Eten',
    fam_transit_h2:'Gezinsvervoergids',
    fam_dallas_weather:'Hittewaarschuwing Dallas',
    wx_stadium_h2:'Stadionweer',
    
    // ── HERO SUBTITLES [NL] ──
    survival_hero_sub:'Essentiële kennis voor internationale bezoekers. Texas heeft zijn eigen regels, cultuur en klimaat.',
    tickets_hero_sub:'Alles wat je moet weten over het kopen van tickets voor FIFA WK 2026-wedstrijden in Dallas.',
    accommodation_hero_sub:'Arlington, het centrum van Dallas of Fort Worth? Elke optie heeft voor- en nadelen afhankelijk van je budget en wedstrijden.',
    daytrips_hero_sub:'De meeste WK-bezoekers hebben 7–14 dagen. Tussen wedstrijden door heeft Texas unieke bestemmingen op een paar uur rijden.',
    checklist_hero_sub:'35 dingen die geregeld moeten zijn voor je naar AT&T Stadium gaat. Vink ze af zodat je niets vergeet.',
    fanzones_hero_sub:'Je hebt geen wedstrijdticket nodig om het WK in Dallas te beleven. Het officiële FIFA Fan Festival en tientallen kijklocaties brengen de sfeer naar iedereen.',
    budget_hero_sub:'De eerlijke waarheid over wat een week in Dallas kost — van stadiondrinken tot fooi. Plan je budget voordat je aankomt.',
    phrases_hero_sub:'Amerika en Texas hebben hun eigen regels. Dit is wat internationale bezoekers vaak fout doen en hoe je je kunt aanpassen.',
    families_hero_sub:'De beste activiteiten met kinderen in Dallas tijdens het WK — musea, pretparken en manieren om de Texaanse zomerhitte te trotseren.',
    shopping_hero_sub:'Dallas is een winkelbestemming van wereldklasse — van luxe winkelcentra tot Texaanse producten en outletkoopjes.',
    groups_hero_sub:'Reist u met een supportersclub of groep van 10+? Groepen hebben andere logistiek — hotelblokken, groepsvervoer en ontmoetingspunten.',
    halal_hero_sub:'Dallas heeft een grote moslimgemeenschap. Halal eten is goed te vinden, vooral in Richardson.',
    airport_hero_sub:'DFW International is een van de grootste luchthavens ter wereld. Alles wat je nodig hebt om stressvrij van het vliegtuig naar je hotel te komen.',
    
    // ── GROUPS PAGE [NL] ──
    grp_accom1_title:'Hotelkamerblokken',
    grp_accom1_body:'Voor groepen van 10+ kamers, neem contact op met hotels voor groepstarieven. Marriott, Hilton en Hyatt hebben groepsverkoopteams. Boek ruim van tevoren.',
    grp_accom2_title:'VRBO voor grote groepen',
    grp_accom2_body:'Een groot VRBO-huis biedt plek aan 8–16 personen voor veel minder per persoon dan hotels. Uptown Dallas en Las Colinas hebben uitstekende opties met zwembad.',
    grp_accom3_title:'Verspreid over nabijgelegen steden',
    grp_accom3_body:'Grote supportersclubs verdelen verblijf over Dallas, Arlington en Fort Worth. Coördineer een centraal ontmoetingspunt voor wedstrijddagen.',
    grp_trans1_title:'TRE Trein — beste voor groepen',
    grp_trans1_body:'Rijdt van het centrum van Dallas naar CentrePort op wedstrijddagen met gratis pendelbusdiensten van FIFA. Goedkoop ($2.50) en betrouwbaar.',
    grp_trans2_title:'Touringcar huren',
    grp_trans2_body:'Voor groepen van 40+, is een touringcar huren de moeite waard. Kost ongeveer $400–800 retour. Boek van tevoren.',
    grp_trans3_title:'Rideshare konvooi',
    grp_trans3_body:'Voor groepen van 8–20, bestel meerdere Ubers tegelijk naar dezelfde locatie. Stel een ophaalplaats in en bestel 30 minuten voor vertrek.',
    grp_trans4_title:'Carpool met parkeren',
    grp_trans4_body:'Groepen met huurauto\'s kunnen carpoolen. Officieel parkeren kost $30–60 per voertuig. Boek parkeerpassen van tevoren.',
    grp_before_match:'Voor de wedstrijd',
    grp_meetup_spots:'Beste groepsontmoetingsplaatsen',
    grp_meet1_title:'Wijs een ontmoetingspunt aan',
    grp_meet1_body:'buiten AT&T Stadium voor het ingaan — binnen is het mobiele signaal slecht. Spreek poort A, B, C etc. af.',
    grp_meet2_title:'WhatsApp-groep',
    grp_meet2_body:'met alle reizigers. Deel hoteladressen, tickets en plannen. Download offline kaarten van Dallas.',
    grp_meet3_title:'US SIM of eSIM',
    grp_meet3_body:'— iedereen heeft een Amerikaans nummer met data nodig. US Mobile eSIM is de eenvoudigste optie.',
    grp_spot1:'The Rustic, Uptown — enorme buitenlocatie voor grote groepen. Geweldige sfeer met grote schermen.',
    grp_spot2:'Klyde Warren Park — gratis park in het centrum van Dallas. Grote open ruimte met foodtrucks.',
    grp_spot3:'FIFA Fan Festival — het natuurlijke verzamelpunt voor supporters van alle naties.',
    grp_clubs_intro:'De meeste nationale supportersclubs organiseren groepsreizen, ticketloterijballots en ontmoetingsevenementen. Neem contact op voor je vertrekt.',
    grp_club1_title:'Oranje (Nederland)',
    grp_club1_body:'Een van de meest georganiseerde supportersclubs ter wereld — beroemde oranje marsen. Kijk op oranjesupporter.nl.',
    grp_club2_title:'La Albiceleste (Argentinië)',
    grp_club2_body:'Argentijnse supporters verwacht in grote aantallen als regerend kampioen. Dallas heeft een Argentijnse gemeenschap.',
    grp_club3_title:'Torcida (Brazilië)',
    grp_club3_body:'Braziliaanse fans brengen de beste sfeer. Grote Braziliaanse gemeenschap in DFW.',
    grp_club4_title:'American Outlaws (VS)',
    grp_club4_body:'Nationale supportersclub met actieve afdelingen in Dallas-Fort Worth. americanoutlaws.com.',
    grp_6months:'6+ maanden van tevoren',
    grp_1month:'1 maand van tevoren',
    grp_check1:'Hotelkamerblok of VRBO-huis boeken',
    grp_check2:'Alle groepsleden registreren op FIFA.com',
    grp_check3:'Samen tickets aanvragen via FIFA-ballot',
    grp_check4:'Vluchten boeken (liefst dezelfde vlucht)',
    grp_check5:'WhatsApp- of Telegram-groep aanmaken',
    grp_check6:'Bevestigen dat alle tickets in de FIFA-app staan',
    grp_check7:'US Mobile eSIM regelen voor alle leden',
    grp_check8:'Groepstransport naar stadion boeken',
    grp_check9:'Een groepsleider aanwijzen voor de wedstrijddag',
    grp_check10:'Afspreken over verzamelpunt bij het stadion',
    
    // ── SHARED CARD LABELS [NL] ──
    lbl_address:'Adres',
    lbl_hours:'Openingstijden',
    lbl_cuisine:'Keuken',
    lbl_price:'Prijs',
    lbl_halal:'Halal Status',
    lbl_dart:'DART',
    lbl_duration:'Duur',
    lbl_age:'Aanbevolen Leeftijd',
    lbl_best_for:'Beste Locatie voor Bezoekers',
    lbl_phone:'Telefoon',
    lbl_website:'Website',
    lbl_experience:'Benodigde Ervaring',
    lbl_getting_there:'Hoe er Komen',
    lbl_insider_tips:'Insidertips',
    lbl_admission:'Toegang',
    lbl_age_req:'Leeftijdsvereiste',
    lbl_cost:'Kosten',
    lbl_open_24:'24 uur open',
    lbl_official_site:'Officiële Site',
    lbl_fifa_app:'FIFA Tickets App',
    lbl_sales_phases:'Verkoopfasen',
    lbl_id_required:'ID Vereist',
    lbl_iata:'IATA-Code',
    lbl_dist_dallas:'Afstand tot Dallas',
    lbl_dist_stadium:'Afstand tot Stadion',
    lbl_intl_terminal:'Internationale Terminal',
    lbl_terminals:'Terminals',
    lbl_price_range:'Prijsklasse',
    lbl_best_for_who:'Beste Voor',
    lbl_getting_there_dt:'Hoe er Komen',
    lbl_best_time:'Beste Tijd om te Bezoeken',
    lbl_road_trip:'Roadtrip Idee',
    lbl_halal_avail:'Beschikbaarheid Halal Eten',
    lbl_mosques:'Moskeeën',
    lbl_prayer_stadium:'Gebed in het Stadion',
    lbl_alcohol:'Alcohol bij Wedstrijden',
    lbl_restaurants_sit:'Restaurants (bediening)',
    lbl_food_delivery:'Maaltijdbezorging',
    lbl_uber_lyft:'Uber / Lyft',
    lbl_hotel_housekeep:'Hotelkamerservice',
    lbl_coffee_counter:'Koffie / Balie',
    lbl_tax_on_top:'Belasting Bovenop',
    
    // ── CARD CONTENT [NL] ──
    ap_step1_title:'Immigratie en Douane (Terminal D)',
    ap_step1_body:'Allow 60–90 minutes. US citizens use APC kiosks. International visitors use staffed lanes. Have your ESTA or visa, passport, and return flight details ready.',
    ap_step2_title:'Een US SIM-kaart Kopen',
    ap_step2_body:'AT&T and T-Mobile stores are in Terminal D arrivals hall — open from 6am. Prepaid SIMs from $20–40 for 30 days. Buy before leaving the terminal.',
    ap_step3_title:'De Skylink Nemen naar Uw Terminal',
    ap_step3_body:'If you have a connecting domestic flight, take the free Skylink automated train between terminals. It runs 24/7 every 2–5 minutes.',
    ap_step4_title:'DART Oranje Lijn naar het Centrum',
    ap_step4_body:'The DART Orange Line runs from Terminal A (South) at DFW directly to downtown Dallas in ~45 minutes. Buy tickets on the GoPass app. $2.50 per trip.',
    ap_step5_title:'Naar Arlington (Stadion)',
    ap_step5_body:'On match days: TRE train from DFW (CentrePort station) direct — then FREE FIFA shuttle to AT&T Stadium. No match day? Rent a car or Uber (~$35–50).',
    ap_term_a_label:'Terminal A — American Airlines',
    ap_term_b_label:'Terminal B — American Airlines',
    ap_term_c_label:'Terminal C — American Airlines',
    ap_term_d_label:'Terminal D ★ — International',
    ap_term_e_label:'Terminal E — Multiple Airlines',
    ap_term_d_note:'All international arrivals. Immigration, customs, SIM stores, currency exchange. If flying from Europe, South America, Asia or the Middle East — you land here.',
    ap_tip1_title:'Neem geen taxi vanuit DFW',
    ap_tip1_body:'Taxis from DFW to downtown Dallas cost $50–80. The DART Orange Line does the same journey in 45 minutes for $2.50. Use the train.',
    ap_tip2_title:'Reken op tijd voor immigratie',
    ap_tip2_body:'During the World Cup, DFW will be at peak international capacity. Budget 90 minutes minimum for immigration. Do not book tight connections on entry day.',
    ap_tip3_title:'Regel uw ESTA voor vertrek',
    ap_tip3_body:'Visitors from visa-waiver countries need ESTA approval. Apply at esta.cbp.dhs.gov at least 72 hours before departure. It costs $21 and is valid for 2 years.',
    ap_tip4_title:'Download GoPass voor aankomst',
    ap_tip4_body:'The DART GoPass app lets you buy transit tickets on your phone. Download and set it up before you land so you can go straight to the DART platform.',
    ap_tip5_title:'DFW is enorm — plan overstaptijd in',
    ap_tip5_body:'DFW has 5 terminals spread across a huge area. Never book under 90 minutes for a connection at DFW.',
    ap_tip6_title:'Valuta — haal USD voor vertrek',
    ap_tip6_body:'Airport currency exchange has terrible rates. Get USD at your home bank. Cards (Visa/Mastercard) are accepted almost everywhere in Dallas.',
    acc_arlington_title:'Arlington',
    acc_arlington_sub:'Loopafstand van stadion',
    acc_arlington_body:'Most convenient for attending multiple matches. Walk or short Uber to AT&T Stadium. Limited nightlife compared to Dallas.',
    acc_arlington_best:'Attending 3+ matches · Groups who want to walk to the stadium',
    acc_dallas_title:'Centrum Dallas',
    acc_dallas_sub:'Beste alomvattende keuze',
    acc_dallas_body:'Best balance of access and experience. DART to the stadium, plus full access to Dallas\'s restaurants, fan zones, and nightlife.',
    acc_dallas_best:'First-time visitors · Exploring Dallas culture · Fan zones',
    acc_fw_title:'Fort Worth',
    acc_fw_sub:'Budgetvriendelijk en charmant',
    acc_fw_body:'Often overlooked but genuinely great. 30 minutes to the stadium, much cheaper hotels, and the Fort Worth Stockyards is a unique Texas experience.',
    acc_fw_best:'Budget-conscious visitors · Families · Those wanting a quieter base',
    acc_book_early_title:'Boek nu — prijzen verdubbelen',
    acc_book_early_body:'Dallas hotel prices during the World Cup are already 2–3× normal rates. By the time matches start, available rooms will be scarce. Book refundable rates now.',
    acc_free_cancel_title:'Gratis annulering is uw vriend',
    acc_free_cancel_body:'Book fully refundable rates even if slightly higher. Match schedules can shift. Booking.com and VRBO both offer strong cancellation options.',
    acc_checkout_title:'Controleer de uitcheckdag',
    acc_checkout_body:'Many hotels require minimum stays around match days. Look for hotels with no minimum stay requirements.',
    acc_non_match_title:'Vertrek indien mogelijk op een dag zonder wedstrijd',
    acc_non_match_body:'Match days have surge pricing on Uber and chaotic traffic. Schedule your departure for a quiet Tuesday or Wednesday.',
    bud_budget_label:'Budget',
    bud_midrange_label:'Middenprijsklasse ★',
    bud_splurge_label:'Luxe',
    bud_budget_items:'Fast food or food trucks ($8–12/meal)|DART for all transport|Free fan zones & parks|Budget hostel or shared rental|Free museums (DMA is free daily)',
    bud_mid_items:'Sit-down restaurants ($20–35/meal)|Occasional Uber ($15–25/trip)|Paid attractions ($20–30)|Mid-range hotel or private rental|Most people fall in this range',
    bud_splurge_items:'Fine dining ($80–150/meal)|Uber Black everywhere|Luxury hotel (Omni, Ritz, etc.)|Premium stadium experiences|Shopping at Northpark / Galleria',
    bud_tip1_title:'Dallas Museum of Art is Gratis',
    bud_tip1_body:'General admission is free every day. One of the best art museums in the American South — world-class collection. A great air-conditioned option on a hot afternoon.',
    bud_tip2_title:'DART bespaart $30–50 per dag',
    bud_tip2_body:'A DART day pass is $6. The equivalent in Uber rides is $50–80. Use DART for anything downtown.',
    bud_tip3_title:'Gebruik Wise of Revolut',
    bud_tip3_body:'Airport ATMs and currency exchange booths charge 5–8% in fees. A Wise or Revolut card gives you near-perfect exchange rates. Set one up before you fly.',
    bud_tip4_title:'Foodtrucks voor de lunch',
    bud_tip4_body:'Dallas has an excellent food truck scene. Excellent tacos, BBQ, and international food for $10–14. Save sit-down restaurants for dinner.',
    bud_tip5_title:'Neem water mee naar het stadion',
    bud_tip5_body:'Empty refillable water bottles are permitted through AT&T Stadium security. Stadium water costs $6–8 per bottle — a family of 4 saves $25+ per match.',
    bud_tip6_title:'Walmart / HEB voor snacks',
    bud_tip6_body:'Stock up on snacks from a grocery store for your hotel room. HEB and Walmart are a fraction of the cost of hotel minibars.',
    phr_yall_title:'Y\'all',
    phr_yall_body:'You all / you (plural). The most Texas word in existence. "Y\'all ready to order?" means "Are you all ready to order?" Use it freely.',
    phr_fixin_title:'Fixin\' to',
    phr_fixin_body:'"I\'m fixin\' to head out" = "I\'m about to leave." Not broken, just Texas grammar.',
    phr_bless_title:'Bless your heart',
    phr_bless_body:'On the surface this sounds kind. In practice it often means "you poor fool." Context is everything.',
    phr_howdy_title:'Howdy',
    phr_howdy_body:'Hello. Yes, people actually say this in Texas. It\'s a genuine greeting. Say it back — it\'s endearing.',
    phr_check_title:'Check / the check',
    phr_check_body:'The bill at a restaurant. "Can we get the check?" not "Can we get the bill?" though both work.',
    phr_restroom_title:'Restroom',
    phr_restroom_body:'Toilet / bathroom. "Where\'s the restroom?" is the correct phrasing. "Toilet" is understood but sounds odd.',
    phr_togo_title:'To-go / take-out',
    phr_togo_body:'"Take-away" in American English is "to-go" or "take-out." "Can I get this to-go?" is what you say.',
    phr_soccer_title:'Soccer',
    phr_soccer_body:'What everyone in the US calls football. Don\'t be offended — Americans love the sport, they just have a different name for it.',
    phr_cult1_title:'Fooi geven is niet optioneel',
    phr_cult1_body:'Service staff earn below minimum wage — tips make up the bulk of their income. 18–20% at restaurants is standard, not generous.',
    phr_cult2_title:'Fahrenheit, niet Celsius',
    phr_cult2_body:'Dallas in June-July is 95–105°F (35–40°C). Quick conversion: subtract 32, divide by 1.8 to get Celsius.',
    phr_cult3_title:'Alles vereist een auto',
    phr_cult3_body:'Dallas is not a walking city outside specific neighborhoods. Use DART for downtown, Uber for everything else.',
    phr_cult4_title:'Frisdrank wordt onbeperkt bijgevuld',
    phr_cult4_body:'Soft drinks come with unlimited free refills at almost every American restaurant. You don\'t need to ask.',
    phr_cult5_title:'Hoe BBQ te bestellen',
    phr_cult5_body:'At most Texas BBQ joints you order by weight at a counter — "half a pound of brisket, please." Eat with your hands.',
    phr_cult6_title:'Draag altijd uw paspoort bij u',
    phr_cult6_body:'US bars card everyone who looks under 40. You need government-issued photo ID to buy alcohol. Your passport is safest.',
    phr_cult7_title:'"How are you?" is een begroeting',
    phr_cult7_body:'When an American says "Hi, how are you?" they expect "Good, thanks!" — not an actual account of your wellbeing.',
    phr_cult8_title:'Gezondheidszorg is erg duur',
    phr_cult8_body:'A hospital visit without insurance costs thousands. Buy comprehensive travel insurance before you travel — medical coverage is the most important part.',
    phr_col_restaurant:'In een restaurant',
    phr_col_transport:'Verplaatsingen',
    fz_tip1_title:'Kom Vroeg',
    fz_tip1_body:'Fan zones fill up 60–90 minutes before kickoff for major matches. For the Semifinal, plan to arrive 2+ hours early.',
    fz_tip2_title:'Bestrijd de Hitte',
    fz_tip2_body:'Outdoor fan zones in Dallas in June-July reach 38-40°C. Bring water, sunscreen, and a hat for daytime matches.',
    fz_tip3_title:'Draag Uw Kleuren',
    fz_tip3_body:'National team shirts make fan zones electric. Dallas will have supporters from every nation.',
    fz_tip4_title:'Gebruik de DART',
    fz_tip4_body:'Downtown Dallas fan zones are easily reachable by DART light rail. Avoid driving — parking near popular venues is expensive.',
    fz_info_entry:'Toegang',
    fz_info_screens:'Schermen',
    fz_info_transport:'Hoe er Komen',
    fz_info_location:'Verwachte Locatie',
    fz_warning_title:'Officiële bevestiging in afwachting',
    fz_warning_body:'FIFA typically announces Fan Festival details 3–6 months before the tournament. Check FIFA.com for the latest.',
    shop_northpark:'NorthPark Center',shop_galleria:'Galleria Dallas',shop_allen:'Allen Premium Outlets',shop_legacy:'The Shops at Legacy',shop_bishop:'Bishop Arts District',shop_deepellum:'Deep Ellum',shop_cowboy:'Resistol of Stetson Hoed',shop_boots:'Texaanse Cowboylaarzen',shop_sauce:'Texaanse Hete Saus en BBQ Kruiden',shop_art:'Texaanse Kunst en Prints',shop_pecan:'Texaanse Pecansnoepjes',shop_merch:'Officieel Toernooiartikelen',fam_dart_title:'DART Lightrail',fam_car_title:'Huurauto',fam_uber_title:'Uber / Lyft met Kinderen',
    
    // ── TICKETS PAGE [NL] ──
    tkt_warning:'Koop altijd eerst officieel.',
    tkt_warning_body:'De enige geautoriseerde bron voor FIFA WK 2026 tickets is FIFA.com/tickets. Elke andere site die \"officiële\" tickets verkoopt is op zijn best een derde partij en op zijn slechtst oplichting.',
    tkt_official_site_body:'Maak eerst een FIFA-account aan — vereist voor elke aankoop',
    tkt_app_body:'Download de officiële FIFA-app — alle tickets zijn digitaal. Vereist voor stadiontoelating. Download voor vertrek.',
    tkt_phases_body:'FIFA heeft meerdere verkoopfasen — vroege loting, algemene verkoop en last-minute. Elke fase opent op FIFA.com. Meld je aan voor e-mailmeldingen.',
    tkt_id_body:'Tickets zijn gekoppeld aan uw ID. Bij de ingang heeft u uw paspoort of ID nodig dat overeenkomt met de naam op het ticket.',
    tkt_cat4_title:'Categorie 4',
    tkt_cat4_price:'$50–80',
    tkt_cat4_body:'Beperkt zicht of bovenste ring. Laagste prijs, beperkte beschikbaarheid. Eerste categorie die verkocht wordt in de loting.',
    tkt_cat3_title:'Categorie 3',
    tkt_cat3_price:'$100–150',
    tkt_cat3_body:'Bovenste ring met volledig zicht op het veld. Beste prijs-kwaliteitverhouding — goed zicht in AT&T Stadium.',
    tkt_cat2_title:'Categorie 2',
    tkt_cat2_price:'$200–350',
    tkt_cat2_body:'Onderste ring, zijtribunes. Uitstekend zicht, goede sfeer. Meest populaire categorie.',
    tkt_cat1_title:'Categorie 1',
    tkt_cat1_price:'$400–800',
    tkt_cat1_body:'Premium onderste ring, achter de doelen of middenveld. Beste zitplaatsen in het stadion. Zeer beperkt.',
    tkt_semi_title:'Halve finale',
    tkt_semi_price:'$400–2.000',
    tkt_semi_body:'Dallas ontvangt een halve finale (14 juli). Premiumprijs in alle categorieën. Koop zodra de verkoop opent.',
    tkt_resale_intro:'FIFA heeft een officieel doorverkoopplatform — de veiligste optie op de secundaire markt.',
    tkt_resale1_title:'FIFA Officiële Doorverkoop',
    tkt_resale1_body:'FIFA.com/tickets — officiële doorverkoopmarktplaats. Veiligste optie. Tickets zijn geverifieerd en gekoppeld aan ID.',
    tkt_resale2_title:'StubHub / Viagogo',
    tkt_resale2_body:'Verwacht 3–10× de nominale waarde voor populaire wedstrijden. Koop vroeg als u doorverkoop gebruikt.',
    tkt_resale3_title:'Supportersclub Toewijzing',
    tkt_resale3_body:'Nationale voetbalbonden ontvangen tickettoewijzingen. Word lid van uw nationale supportersclub — de Nederlandse, Argentijnse, Braziliaanse en Engelse clubs hebben vaak ticketpakketten.',
    tkt_scam1_title:'PDF-tickets zijn nep',
    tkt_scam1_body:'FIFA WK 2026 tickets zijn alleen digitaal — opgeslagen in de FIFA-app. Wie een PDF, screenshot of gedrukt ticket verkoopt, is een oplichter.',
    tkt_scam2_title:'Bankoverschrijving = geen bescherming',
    tkt_scam2_body:'Betaal nooit via bankoverschrijving, crypto of cadeaukaarten. Gebruik alleen een creditcard via een geverifieerd platform.',
    tkt_scam3_title:'Verkopers op sociale media',
    tkt_scam3_body:'Facebook, WhatsApp en Instagram zitten vol oplichters tijdens grote toernooien. Gebruik alleen geverifieerde platforms.',
    tkt_scam4_title:'Nep FIFA-websites',
    tkt_scam4_body:'De enige echte FIFA-ticketing URL is fifa.com — sla hem op en typ hem rechtstreeks in. Klik niet op links in e-mails of advertenties.',
    tkt_stad1_title:'Download de FIFA-app',
    tkt_stad1_body:'Uw ticket staat in de FIFA-app. Download hem en voeg uw ticket toe ruim voor de wedstrijddag.',
    tkt_stad2_title:'90 minuten vroeger aankomen',
    tkt_stad2_body:'AT&T Stadium is enorm. Beveiligingswachtrijen voor 100.000+ mensen kosten tijd. Poorten open 2,5 uur voor aftrap.',
    tkt_stad3_title:'Beleid voor doorzichtige tassen',
    tkt_stad3_body:'Alleen doorzichtige tassen kleiner dan 30×15×30 cm zijn toegestaan. Kleine clutchtassen tot 11×16,5 cm zijn toegestaan.',
    tkt_stad4_title:'Neem foto-ID mee',
    tkt_stad4_body:'Uw paspoort of overheids-ID moet overeenkomen met de naam op het ticket. FIFA kan willekeurige ID-controles uitvoeren bij de ingang.',
    
    // ── BIG PAGE CONTENT [NL] ──
    ap_step1_body:'Reken op 60–90 minuten. Amerikaanse burgers gebruiken APC-kiosken. Internationale bezoekers gebruiken bemande rijen. Zorg dat uw ESTA, paspoort en terugvluchtgegevens gereed zijn.',
    ap_step2_body:'AT&T en T-Mobile winkels zijn in de aankomsthal van Terminal D. Prepaid SIM-kaarten vanaf $20–40 voor 30 dagen. Veel goedkoper dan roaming.',
    ap_step3_body:'If you have a connecting domestic flight, take the free Skylink automated train between terminals. It runs 24/7 every 2–5 minutes. Terminals are far apart — allow 30+ minutes for connections.',
    ap_step4_body:'De DART Oranje Lijn rijdt van Terminal A (Zuid) bij DFW rechtstreeks naar het centrum van Dallas in ~45 minuten. $2.50 per rit. Neem geen taxi of Uber van het vliegveld.',
    ap_step5_body:'Op wedstrijddagen: TRE-trein van DFW naar station CentrePort — dan GRATIS FIFA-pendelbus naar AT&T Stadium.',
    ap_tip1_body:'Taxi\'s van DFW naar het centrum kosten $50–80. De DART Oranje Lijn doet hetzelfde in 45 minuten voor $2.50.',
    ap_tip2_body:'Tijdens het WK zal DFW op maximale internationale capaciteit zijn. Reken minimaal 90 minuten voor immigratie.',
    ap_tip3_body:'Bezoekers uit landen met visumontheffing hebben ESTA-goedkeuring nodig. Aanvragen op esta.cbp.dhs.gov minimaal 72 uur voor vertrek.',
    ap_tip4_body:'Met de DART GoPass-app koopt u transittickets op uw telefoon. Download het voor de landing.',
    ap_tip5_body:'DFW heeft 5 terminals verspreid over een groot gebied. Boek nooit minder dan 90 minuten voor een overstap bij DFW.',
    ap_tip6_body:'Wisselkantoren op luchthavens hebben slechte koersen. Haal dollars bij uw bank voor vertrek.',
    ap_term_a_airlines:'American Airlines',
    ap_term_a_body:'Domestic US flights. DART Orange Line station is at Terminal A South — the quickest route to downtown Dallas.',
    ap_term_b_airlines:'American Airlines',
    ap_term_b_body:'Domestic US flights. Good food options including local Texas brands. Skylink to all other terminals.',
    ap_term_c_airlines:'American Airlines',
    ap_term_c_body:'Domestic and some international. Skylink connects to Terminal D for international arrivals and customs.',
    ap_term_d_airlines:'International — Most visitors land here',
    ap_term_d_body:'All international arrivals. Immigration, customs, SIM stores, currency exchange, and ground transport. If flying from Europe, South America, Asia, or the Middle East — you land here.',
    ap_term_e_airlines:'Multiple Airlines',
    ap_term_e_body:'Spirit, Frontier, United, and others. Ground transport to TRE and rental cars. Skylink to all terminals.',
    ap_dal_airlines:'Southwest Airlines (primary), Delta, United (limited)',
    ap_dal_dist:'8 km from downtown Dallas — much closer than DFW',
    ap_dal_transit:'DART Orange/Blue Line (Inwood/Love Field station) — 15 min to downtown',
    ap_dal_body:'Love Field is domestic only — no international flights. If you\'re connecting from a US city, you might land here. It\'s more convenient than DFW for downtown Dallas hotels. The DART light rail stop is a short walk from the terminal.',
    ap_dal_airlines_label:'Airlines',
    ap_dal_dist_label:'Distance',
    ap_dal_transit_label:'Transit',
    bud_budget_items:'Fast food of foodtrucks ($8–12/maaltijd)|DART voor al het vervoer|Gratis fanzones en parken|Budget hostel of gedeeld VRBO-appartement|Gratis musea (DMA elke dag gratis)',
    bud_mid_items:'Restaurants ($20–35/persoon)|Af en toe Uber ($15–25/rit)|Betaalde attracties ($20–30)|Middenklasse hotel of privé VRBO|De meeste mensen vallen in deze categorie',
    bud_splurge_items:'Fine dining ($80–150/persoon)|Uber Black overal|Luxe hotel (Omni, Ritz, etc.)|Premium stadionervaringen|Winkelen bij Northpark / Galleria',
    bud_per_day:'per dag',
    bud_excl_note:'Per persoon per dag, exclusief wedstrijdtickets en accommodatie. Alle prijzen in USD.',
    bud_food_drink:'Eten en Drinken',
    bud_transport_activities:'Vervoer en Activiteiten',
    bud_tipping_warning:'Fooi geven is niet optioneel in de VS.',
    bud_tipping_body:'Servicemedewerkers verdienen vaak minder dan het minimumloon. Geen fooi geven wordt als onbeleefd beschouwd.',
    hal_tip1_title:'Controleer halal-certificering',
    hal_tip1_body:'Always verify halal status with the restaurant directly — use Zabihah.com or the Halal Trip app to find certified halal restaurants in DFW.',
    hal_tip2_title:'Halal supermarkten',
    hal_tip2_body:'Al-Barakah Halal Meat Market in Richardson and Halal Meat Shop on Greenville Ave stock a wide range of certified halal meat and groceries.',
    hal_tip3_title:'Wudu in het stadion',
    hal_tip3_body:'AT&T Stadium bathrooms have standard sinks. Plan to perform wudu at your hotel before match day. Prayer room availability will be confirmed closer to the tournament.',
    hal_tip4_title:'Qibla-richting in Dallas',
    hal_tip4_body:'From Dallas, the qibla direction is approximately 48–50° northeast. Use the Muslim Pro or Athan app for a precise compass reading.',
    hal_tip5_title:'Alcohol is overal',
    hal_tip5_body:'Alcohol is served at the stadium, in restaurants, and at fan zones. It is not compulsory — simply decline. The Richardson halal restaurant cluster is entirely alcohol-free.',
    hal_tip6_title:'Richardson — uw uitvalsbasis',
    hal_tip6_body:'Consider staying in Richardson if halal food access is a priority. 15 min on DART to downtown Dallas, 30 min to the stadium on match days.',
    hal_mosque1_title:'IANT — Islamitische Vereniging van Noord-Texas',
    hal_mosque1_loc:'Richardson · Belangrijkste gemeenschapsmoskee',
    hal_mosque1_body:'The largest Islamic centre in the Dallas area. Full Friday Jumu\'ah services, daily prayers, halal food market on-site. Near DART Red Line.',
    hal_mosque2_title:'Masjid Al-Islam',
    hal_mosque2_loc:'Dallas · Nabij centrum',
    hal_mosque2_body:'Convenient for visitors staying in downtown Dallas. Daily prayers. Friday Jumu\'ah at 1:15pm. Accessible by DART.',
    hal_mosque3_title:'Masjid Al-Hedaya',
    hal_mosque3_loc:'Arlington · Nabij AT&T Stadium',
    hal_mosque3_body:'Closest mosque to AT&T Stadium. Useful on match days for Dhuhr or Asr prayers before or after a game. ~5 minutes drive from the stadium.',
    hal_mosque4_title:'Gebedstijden-app',
    hal_mosque4_loc:'Digitaal hulpmiddel',
    hal_mosque4_body:'Download Muslim Pro or Athan app before travelling. Both provide accurate Dallas prayer times, qibla direction, and nearby mosque finder. Free to use.',
    hal_rest_intro:'Richardson (15-20 min van het centrum van Dallas via DART Rode Lijn) is het hart van halal-eten in DFW.',
    acc_hotel1_name:'Omni Dallas Hotel',
    acc_hotel1_area:'Downtown Dallas · $$$',
    acc_hotel1_tag:'Beste Keuze',
    acc_hotel1_body:'Connected by skybridge to the Kay Bailey Hutchison Convention Center. Rooftop pool, great views, and directly above DART connections. One of Dallas\'s finest hotels — book far in advance.',
    acc_hotel2_name:'Marriott Courtyard Arlington',
    acc_hotel2_area:'Arlington · $$',
    acc_hotel2_tag:'Nabij Stadion',
    acc_hotel2_body:'Within walking distance of AT&T Stadium. Clean, reliable, and the location is unbeatable for match days. Fills up months in advance — check availability now.',
    acc_hotel3_name:'The Adolphus Hotel',
    acc_hotel3_area:'Downtown Dallas · $$$$',
    acc_hotel3_tag:'Historische Luxe',
    acc_hotel3_body:'Built in 1912, this is Dallas\'s most storied hotel. Beaux-Arts architecture, exceptional service, and a legendary bar. If you want one memorable splurge night, this is the one.',
    acc_hotel4_name:'Aloft Dallas Downtown',
    acc_hotel4_area:'Downtown Dallas · $$',
    acc_hotel4_tag:'Beste Prijs-Kwaliteit',
    acc_hotel4_body:'Modern, well-located, and reasonably priced. Good common areas, reliable WiFi, and walking distance to DART. Great for younger travellers and groups.',
    acc_hotel5_name:'VRBO — Uptown Dallas',
    acc_hotel5_area:'Uptown · $ per person',
    acc_hotel5_tag:'Groepen van 4+',
    acc_hotel5_body:'For groups of 4+, a VRBO apartment in Uptown Dallas often works out significantly cheaper than hotel rooms. Full kitchen, more space, and one of Dallas\'s best neighborhoods.',
    acc_hotel6_name:'Hilton Fort Worth',
    acc_hotel6_area:'Fort Worth · $$',
    acc_hotel6_tag:'Slim Budgetteren',
    acc_hotel6_body:'Downtown Fort Worth, walking distance to the Stockyards. TRE train gives direct match-day access to the stadium. Often 30–40% cheaper than equivalent Dallas hotels.',
    acc_arlington_best:'3+ wedstrijden bijwonen · Groepen die naar het stadion willen lopen',
    acc_dallas_best:'Eerste bezoekers · Dallas verkennen · Fanzones',
    acc_fw_best:'Budgetbewuste reizigers · Gezinnen · Rustige uitvalsbasis',
    acc_arlington_price:'$150–350/nacht op wedstrijddagen · Vol snel — reserveer nu',
    acc_dallas_price:'$120–280/nacht · Meer hotelopties dan Arlington',
    acc_fw_price:'$80–180/nacht · Aanzienlijk goedkoper dan Dallas op wedstrijddagen',
    acc_price_range:'Prijsklasse',
    acc_best_for_lbl:'Geschikt voor',
    acc_book_early_body:'Dallas hotel prices during the World Cup are already 2–3× normal rates. Book refundable rates now and cancel later if plans change.',
    acc_free_cancel_body:'Book fully refundable rates even if they\'re slightly higher. Match schedules can shift. Booking.com and VRBO both offer strong cancellation options.',
    acc_checkout_body:'Many hotels require minimum stays around match days. Look for hotels with no minimum stay requirements — or book a full week even if you plan to arrive late.',
    acc_non_match_body:'Match days have surge pricing on Uber and chaotic traffic. Schedule your departure for a quiet Tuesday or Wednesday — easier airport journey and cheaper rideshare prices.',
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


// Close translate dropdown when clicking outside
document.addEventListener('click', function(e) {
  var wrap = document.getElementById('gt-dropdown-wrap');
  var menu = document.getElementById('gt-menu');
  if (wrap && menu && !wrap.contains(e.target)) {
    menu.style.display = 'none';
  }
});

// Google Translate redirect function
function gtGo(lang) {
  var menu = document.getElementById('gt-menu');
  if (menu) menu.style.display = 'none';
  var url = 'https://translate.google.com/translate?sl=en&tl=' + lang + '&u=' + encodeURIComponent(window.location.href);
  window.location.href = url;
}

// ── TRANSLATION HELPERS ───────────────────────────────────────
function t(key) {
  const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return lang[key] || TRANSLATIONS.en[key] || key;
}

// tr() — alias for t() that accepts an optional fallback string
function tr(key, fallback) {
  const lang = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  return lang[key] || TRANSLATIONS.en[key] || fallback || key;
}

function setLang(lang) {
  // Update html lang attribute for accessibility and SEO signals
  document.documentElement.lang = lang === 'en' ? 'en' :
    lang === 'es' ? 'es' :
    lang === 'fr' ? 'fr' :
    lang === 'nl' ? 'nl' : 'en';
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


// ── AIRPORT PAGE ─────────────────────────────────────────────────────────────
function renderAirportPage() {
  const $ = id => document.getElementById(id);
  const tl = (key, fb) => tr(key, fb) || fb;

  // Steps
  const steps = $('ap-steps');
  if (steps) steps.innerHTML = [
    ['01', tl('ap_step1_title','Immigration & Customs (Terminal D)'), tl('ap_step1_body','Allow 60–90 minutes.')],
    ['02', tl('ap_step2_title','Get a US SIM Card'), tl('ap_step2_body','AT&T and T-Mobile stores in Terminal D.')],
    ['03', tl('ap_step3_title','Take the Skylink to Your Terminal'), tl('ap_step3_body','Free automated train runs 24/7.')],
    ['04', tl('ap_step4_title','DART Orange Line to Downtown Dallas'), tl('ap_step4_body','~45 minutes. $2.50 per trip.')],
    ['05', tl('ap_step5_title','Getting to Arlington (Stadium)'), tl('ap_step5_body','TRE train on match days — free FIFA shuttle.')],
  ].map(([n,title,body]) => `<div style="background:var(--card);border:1px solid var(--border);padding:1.1rem;display:flex;gap:1rem;align-items:flex-start">
    <div style="font-family:var(--fh);font-size:1.8rem;font-weight:900;color:var(--red);flex-shrink:0;line-height:1">${n}</div>
    <div>
      <div style="font-family:var(--fh);font-size:.88rem;font-weight:700;text-transform:uppercase;margin-bottom:.3rem">${title}</div>
      <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
    </div>
  </div>`).join('');

  // Terminals
  const terms = $('ap-terminals');
  if (terms) terms.innerHTML = [
    ['A', tl('ap_term_a_airlines','American Airlines'), tl('ap_term_a_body','Domestic US flights. DART Orange Line at Terminal A South.'), false],
    ['B', tl('ap_term_b_airlines','American Airlines'), tl('ap_term_b_body','Domestic US flights.'), false],
    ['C', tl('ap_term_c_airlines','American Airlines'), tl('ap_term_c_body','Domestic and some international.'), false],
    ['D ★', tl('ap_term_d_airlines','International — Most visitors land here'), tl('ap_term_d_body','All international arrivals. Immigration, customs, SIM stores, currency exchange.'), true],
    ['E', tl('ap_term_e_airlines','Multiple Airlines'), tl('ap_term_e_body','Spirit, Frontier, United, and others.'), false],
  ].map(([letter, airlines, body, star]) => `<div style="background:var(--card);border:1px solid var(--border);${star?'border-left:3px solid var(--red);':''}padding:1.25rem">
    <div style="font-family:var(--fh);font-size:1.4rem;font-weight:900;color:var(--red);margin-bottom:.4rem">Terminal ${letter}</div>
    <div style="font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--muted);margin-bottom:.5rem">${airlines}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
  </div>`).join('');

  // Tips
  const tips = $('ap-tips');
  if (tips) tips.innerHTML = [
    [tl('ap_tip1_title',"Don't take a taxi from DFW"), tl('ap_tip1_body','Taxis cost $50–80. DART does it for $2.50.')],
    [tl('ap_tip2_title','Allow time for immigration'), tl('ap_tip2_body','Budget 90 minutes minimum.')],
    [tl('ap_tip3_title','Sort your ESTA before you fly'), tl('ap_tip3_body','Apply at esta.cbp.dhs.gov 72 hours before departure.')],
    [tl('ap_tip4_title','Download GoPass before arriving'), tl('ap_tip4_body','Buy transit tickets on your phone.')],
    [tl('ap_tip5_title','DFW is enormous — allow connection time'), tl('ap_tip5_body','Never book under 90 minutes for a connection.')],
    [tl('ap_tip6_title','Currency — get USD before you arrive'), tl('ap_tip6_body','Airport exchange rates are terrible.')],
  ].map(([title, body]) => `<div style="background:var(--card);border:1px solid var(--border);border-left:3px solid var(--red);padding:1.25rem">
    <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;margin-bottom:.4rem">${title}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
  </div>`).join('');
}

// ── BUDGET PAGE ───────────────────────────────────────────────────────────────
function renderBudgetPage() {
  const $ = id => document.getElementById(id);
  const tl = (key, fb) => tr(key, fb) || fb;

  // Tiers
  const tiers = $('bud-tiers');
  if (tiers) {
    const perDay = tl('bud_per_day', 'per day');
    const note = tl('bud_excl_note', 'Per person per day, excluding match tickets and accommodation. All prices in USD.');
    const tierData = [
      {key:'bud_budget_label', fb:'Budget', price:'$60', range:'–90', color:'var(--muted)', border:'', items:'bud_budget_items', arrow:'var(--red)'},
      {key:'bud_midrange_label', fb:'Mid-Range ★', price:'$150', range:'–220', color:'var(--gold)', border:'border-top:3px solid var(--gold);', items:'bud_mid_items', arrow:'var(--gold)'},
      {key:'bud_splurge_label', fb:'Splurge', price:'$350', range:'+', color:'var(--muted)', border:'', items:'bud_splurge_items', arrow:'var(--red)'},
    ];
    tiers.innerHTML = tierData.map(t => {
      const rawItems = tl(t.items, '');
      const items = rawItems ? rawItems.split('|') : [];
      return `<div style="background:var(--card);padding:1.5rem;${t.border}">
        <div style="font-family:var(--fh);font-size:1rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:${t.color};margin-bottom:.3rem">${tl(t.key, t.fb)}</div>
        <div style="font-family:var(--fh);font-size:3rem;font-weight:900;line-height:1;margin-bottom:.3rem">${t.price}<span style="font-size:1.5rem;color:var(--muted)">${t.range}</span></div>
        <div style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:1rem">${perDay}</div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:6px">
          ${items.map(i => `<li style="font-size:.78rem;color:var(--muted);font-weight:300;display:flex;gap:8px"><span style="color:${t.arrow};flex-shrink:0">→</span>${i}</li>`).join('')}
        </ul>
      </div>`;
    }).join('');
    const noteEl = $('bud-note');
    if (noteEl) noteEl.textContent = note;
  }

  // Tipping warning
  const tipWarn = $('bud-tip-warning');
  if (tipWarn) tipWarn.innerHTML = `<strong style="color:var(--text)">${tl('bud_tipping_warning','Tipping is not optional in the US.')}</strong> ${tl('bud_tipping_body','Service staff are often paid below minimum wage.')}`;

  // Price table headers
  const foodH = $('bud-food-header');
  if (foodH) foodH.textContent = tl('bud_food_drink','Food & Drink');
  const transH = $('bud-transport-header');
  if (transH) transH.textContent = tl('bud_transport_activities','Transport & Activities');

  // Save tips
  const saves = $('bud-save-cards');
  if (saves) saves.innerHTML = [
    ['🏛️', tl('bud_tip1_title','Dallas Museum of Art is Free'), tl('bud_tip1_body','General admission is free every day.')],
    ['🚆', tl('bud_tip2_title','DART saves $30–50 per day'), tl('bud_tip2_body','A DART day pass is $6.')],
    ['💳', tl('bud_tip3_title','Use Wise or Revolut'), tl('bud_tip3_body','Near-perfect exchange rates.')],
    ['🌮', tl('bud_tip4_title','Food trucks for lunch'), tl('bud_tip4_body','Tacos, BBQ for $10–14.')],
    ['🏟️', tl('bud_tip5_title','BYOW to the stadium (water)'), tl('bud_tip5_body','Empty bottles are permitted.')],
    ['🛒', tl('bud_tip6_title','Walmart / HEB for snacks'), tl('bud_tip6_body','Stock up at the grocery store.')],
  ].map(([icon, title, body]) => `<div style="background:var(--card);border:1px solid var(--border);padding:1.25rem">
    <div style="font-size:1.4rem;margin-bottom:.5rem">${icon}</div>
    <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;margin-bottom:.4rem">${title}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
  </div>`).join('');
}

// ── HALAL PAGE ────────────────────────────────────────────────────────────────
function renderHalalPage() {
  const $ = id => document.getElementById(id);
  const tl = (key, fb) => tr(key, fb) || fb;

  // Restaurants intro
  const restIntro = $('hal-rest-intro');
  if (restIntro) restIntro.textContent = tl('hal_rest_intro','Richardson is the heart of halal dining in DFW.');

  // Mosques
  const mosques = $('hal-mosques');
  if (mosques) mosques.innerHTML = [
    [tl('hal_mosque1_title','IANT'), tl('hal_mosque1_loc','Richardson · Main community mosque'), tl('hal_mosque1_body',"The largest Islamic centre in the Dallas area. Full Friday Jumu'ah services, daily prayers, halal food market on-site."), '840 Abrams Rd, Richardson, TX 75081'],
    [tl('hal_mosque2_title','Masjid Al-Islam'), tl('hal_mosque2_loc','Dallas · Near downtown'), tl('hal_mosque2_body',"Convenient for downtown visitors. Daily prayers. Friday Jumu'ah at 1:15pm. Accessible by DART."), 'South Dallas — search Google Maps'],
    [tl('hal_mosque3_title','Masjid Al-Hedaya'), tl('hal_mosque3_loc','Arlington · Near AT&T Stadium'), tl('hal_mosque3_body','Closest mosque to AT&T Stadium. ~5 minutes drive from the stadium.'), 'Arlington — search Google Maps'],
    [tl('hal_mosque4_title','Prayer Times App'), tl('hal_mosque4_loc','Digital tool'), tl('hal_mosque4_body','Download Muslim Pro or Athan app before travelling. Accurate Dallas prayer times, qibla direction, and mosque finder.'), ''],
  ].map(([title, loc, body, addr]) => `<div style="background:var(--card);border:1px solid var(--border);padding:1.4rem">
    <div style="font-family:var(--fh);font-size:1.1rem;font-weight:700;text-transform:uppercase;margin-bottom:.3rem">${title}</div>
    <div style="font-size:.72rem;color:var(--muted);font-weight:300;margin-bottom:.6rem">${loc}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65;margin-bottom:.6rem">${body}</div>
    ${addr ? `<div style="font-size:.68rem;color:var(--dim)">${addr}</div>` : ''}
  </div>`).join('');

  // Tips
  const htips = $('hal-tips');
  if (htips) htips.innerHTML = [
    [tl('hal_tip1_title','Verify halal certification'), tl('hal_tip1_body','Use Zabihah.com or Halal Trip app.')],
    [tl('hal_tip2_title','Halal grocery stores'), tl('hal_tip2_body','Al-Barakah Halal Meat Market in Richardson.')],
    [tl('hal_tip3_title','Wudu at the stadium'), tl('hal_tip3_body','Plan to perform wudu at your hotel before match day.')],
    [tl('hal_tip4_title','Qibla direction in Dallas'), tl('hal_tip4_body','Approximately 48–50° northeast. Use Muslim Pro or Athan app.')],
    [tl('hal_tip5_title','Alcohol is everywhere'), tl('hal_tip5_body','Simply decline when offered. Richardson is alcohol-free.')],
    [tl('hal_tip6_title','Richardson — your base'), tl('hal_tip6_body','15 min on DART to downtown, 30 min to the stadium on match days.')],
  ].map(([title, body]) => `<div style="background:var(--card);border:1px solid var(--border);padding:1.25rem">
    <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;margin-bottom:.4rem">${title}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
  </div>`).join('');
}

// ── ACCOMMODATION PAGE ───────────────────────────────────────────────────────
function renderAccommodationPage() {
  const $ = id => document.getElementById(id);
  const tl = (key, fb) => tr(key, fb) || fb;

  // Area comparison
  const areas = $('acc-areas');
  if (areas) areas.innerHTML = [
    {key:'acc_arlington_title', fb:'Arlington', sub_key:'acc_arlington_sub', sub_fb:'Walking distance to stadium', color:'var(--red)', body_key:'acc_arlington_body', body_fb:'Most convenient for attending multiple matches.', best_key:'acc_arlington_best', best_fb:'Attending 3+ matches', price_key:'acc_arlington_price', price_fb:'$150–350/night'},
    {key:'acc_dallas_title', fb:'Downtown Dallas', sub_key:'acc_dallas_sub', sub_fb:'Best all-round choice', color:'var(--gold)', body_key:'acc_dallas_body', body_fb:'Best balance of access and experience.', best_key:'acc_dallas_best', best_fb:'First-time visitors', price_key:'acc_dallas_price', price_fb:'$120–280/night'},
    {key:'acc_fw_title', fb:'Fort Worth', sub_key:'acc_fw_sub', sub_fb:'Budget-friendly, charming', color:'var(--muted)', body_key:'acc_fw_body', body_fb:'Often overlooked but genuinely great.', best_key:'acc_fw_best', best_fb:'Budget-conscious visitors', price_key:'acc_fw_price', price_fb:'$80–180/night'},
  ].map(a => `<div style="background:var(--card);padding:1.5rem;border-top:3px solid ${a.color}">
    <div style="font-family:var(--fh);font-size:1.3rem;font-weight:900;text-transform:uppercase;margin-bottom:.2rem">${tl(a.key, a.fb)}</div>
    <div style="font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${a.color};margin-bottom:1rem">${tl(a.sub_key, a.sub_fb)}</div>
    <div style="font-size:.8rem;color:var(--muted);font-weight:300;line-height:1.75;margin-bottom:1rem">${tl(a.body_key, a.body_fb)}</div>
    <div style="font-size:.72rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--text);margin-bottom:.4rem">${tl('acc_best_for_lbl','Best for')}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.6;margin-bottom:1rem">${tl(a.best_key, a.best_fb)}</div>
    <div style="border-top:1px solid var(--border);padding-top:1rem">
      <div style="font-size:.72rem;font-weight:700;color:var(--text);margin-bottom:.3rem">${tl('acc_price_range','Price range')}</div>
      <div style="font-size:.82rem;color:var(--muted);font-weight:300">${tl(a.price_key, a.price_fb)}</div>
    </div>
  </div>`).join('');

  // Booking tips
  const btips = $('acc-booking-tips');
  if (btips) btips.innerHTML = [
    [tl('acc_book_early_title','Book now — prices will double'), 'var(--red)', tl('acc_book_early_body','Dallas hotel prices are already 2–3× normal rates.')],
    [tl('acc_free_cancel_title','Free cancellation is your friend'), '', tl('acc_free_cancel_body','Book fully refundable rates even if slightly higher.')],
    [tl('acc_checkout_title','Check checkout day carefully'), '', tl('acc_checkout_body','Many hotels require minimum stays around match days.')],
    [tl('acc_non_match_title','Consider checking out on a non-match day'), '', tl('acc_non_match_body','Match days have surge pricing on Uber.')],
  ].map(([title, color, body]) => `<div style="background:var(--card);border:1px solid var(--border);padding:1.25rem">
    <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;${color?'color:'+color+';':''}margin-bottom:.4rem">${title}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
  </div>`).join('');
}

// ── PHRASES PAGE ──────────────────────────────────────────────────────────────
function renderPhrasesPage() {
  const $ = id => document.getElementById(id);
  const tl = (key, fb) => tr(key, fb) || fb;

  // Slang cards
  const slang = $('phr-slang');
  if (slang) slang.innerHTML = [
    [tl("phr_yall_title","Y'all"), tl('phr_yall_body',"You all / you plural. Use it freely.")],
    [tl("phr_fixin_title","Fixin' to"), tl('phr_fixin_body',"About to. Not broken, just Texas grammar.")],
    [tl('phr_bless_title','Bless your heart'), tl('phr_bless_body','On the surface sounds kind. Often means something else.')],
    [tl('phr_howdy_title','Howdy'), tl('phr_howdy_body','Hello. Yes, people actually say this.')],
    [tl('phr_check_title','Check / the check'), tl('phr_check_body','The bill at a restaurant.')],
    [tl('phr_restroom_title','Restroom'), tl('phr_restroom_body','Toilet / bathroom.')],
    [tl('phr_togo_title','To-go / take-out'), tl('phr_togo_body','"Take-away" in American English.')],
    [tl('phr_soccer_title','Soccer'), tl('phr_soccer_body',"What everyone calls football in the US.")],
  ].map(([title, body]) => `<div style="background:var(--card);padding:1.25rem">
    <div style="font-family:var(--fh);font-size:1.1rem;font-weight:700;color:var(--gold);margin-bottom:.3rem">${title}</div>
    <div style="font-size:.8rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
  </div>`).join('');

  // Cultural cards
  const cult = $('phr-cultural');
  if (cult) cult.innerHTML = [
    ['💵', tl('phr_cult1_title','Tipping is not optional'), tl('phr_cult1_body','18–20% at restaurants is standard.')],
    ['🌡️', tl('phr_cult2_title','Fahrenheit, not Celsius'), tl('phr_cult2_body','Dallas in June-July is 95–105°F (35–40°C).')],
    ['🚗', tl('phr_cult3_title','Everything requires a car'), tl('phr_cult3_body','Dallas is not a walking city.')],
    ['🥤', tl('phr_cult4_title','Free refills are real'), tl('phr_cult4_body','Unlimited free refills at almost every restaurant.')],
    ['🍖', tl('phr_cult5_title','How to order BBQ'), tl('phr_cult5_body','Order by weight at a counter.')],
    ['🍺', tl('phr_cult6_title','Always carry your passport'), tl('phr_cult6_body','US bars card everyone who looks under 40.')],
    ['💬', tl('phr_cult7_title','"How are you?" is a greeting'), tl('phr_cult7_body','It\'s a greeting, not a genuine enquiry.')],
    ['💊', tl('phr_cult8_title','Healthcare is very expensive'), tl('phr_cult8_body','Buy comprehensive travel insurance.')],
  ].map(([icon, title, body]) => `<div style="background:var(--card);border:1px solid var(--border);padding:1.4rem">
    <div style="font-size:1.5rem;margin-bottom:.5rem">${icon}</div>
    <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;margin-bottom:.4rem">${title}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
  </div>`).join('');

  // Column labels
  const restCol = $('phr-col-restaurant');
  if (restCol) restCol.textContent = tl('phr_col_restaurant','At a restaurant');
  const transCol = $('phr-col-transport');
  if (transCol) transCol.textContent = tl('phr_col_transport','Getting around');
}
function renderTicketsPage() {
  const $ = id => document.getElementById(id);

  // Warning banner
  const warn = $('tkt-warning');
  if (warn) warn.innerHTML = `<strong style="color:var(--text)">${tr('tkt_warning','Always buy official first.')}</strong> ${tr('tkt_warning_body','The only authorised source is FIFA.com/tickets.')}`;

  // Official info cards
  const info = $('tkt-official-info');
  if (info) info.innerHTML = [
    [tr('lbl_official_site','Official site'), `<a href="https://www.fifa.com/tickets" target="_blank" rel="noopener" class="ext-link">FIFA.com/tickets ↗</a><br>${tr('tkt_official_site_body','Register for a FIFA account first')}`],
    [tr('lbl_fifa_app','FIFA Ticketing App'), tr('tkt_app_body','Download the official FIFA app — all tickets are digital.')],
    [tr('lbl_sales_phases','Sales phases'), tr('tkt_phases_body','FIFA runs multiple sales phases.')],
    [tr('lbl_id_required','ID required'), tr('tkt_id_body','Tickets are tied to your ID.')],
  ].map(([label, body]) => `<div style="background:var(--card);padding:1.25rem">
    <div class="card-label">${label}</div>
    <div style="font-size:.85rem;color:var(--muted);font-weight:300">${body}</div>
  </div>`).join('');

  // Category cards
  const cats = $('tkt-categories');
  if (cats) cats.innerHTML = [
    [tr('tkt_cat4_title','Category 4'), tr('tkt_cat4_price','$50–80'), tr('tkt_cat4_body','Restricted view or upper tier.'), 'rgba(248,244,239,0.2)', ''],
    [tr('tkt_cat3_title','Category 3'), tr('tkt_cat3_price','$100–150'), tr('tkt_cat3_body','Upper tier with full pitch view.'), 'rgba(248,244,239,0.3)', ''],
    [tr('tkt_cat2_title','Category 2'), tr('tkt_cat2_price','$200–350'), tr('tkt_cat2_body','Lower tier, side stands.'), 'var(--gold)', 'color:var(--gold);'],
    [tr('tkt_cat1_title','Category 1'), tr('tkt_cat1_price','$400–800'), tr('tkt_cat1_body','Premium lower tier, behind goals or midfield.'), 'var(--red)', 'color:var(--red);'],
    [tr('tkt_semi_title','Semifinal'), tr('tkt_semi_price','$400–2,000'), tr('tkt_semi_body','Dallas hosts a Semifinal (July 14).'), 'var(--red)', 'color:var(--red);'],
  ].map(([title, price, body, border, color]) => `<div style="background:var(--card);padding:1.25rem;border-top:3px solid ${border}">
    <div style="font-family:var(--fh);font-size:1rem;font-weight:700;text-transform:uppercase;margin-bottom:.3rem;${color}">${title}</div>
    <div style="font-family:var(--fh);font-size:1.6rem;font-weight:900;color:var(--white);margin-bottom:.3rem">${price}</div>
    <div style="font-size:.72rem;color:var(--muted);font-weight:300">${body}</div>
  </div>`).join('');

  // Resale intro
  const resaleIntro = $('tkt-resale-intro');
  if (resaleIntro) resaleIntro.textContent = tr('tkt_resale_intro','FIFA runs an official resale platform.');

  // Resale cards
  const resale = $('tkt-resale-cards');
  if (resale) resale.innerHTML = [
    [tr('tkt_resale1_title','FIFA Official Resale'), tr('tkt_resale1_body','FIFA.com/tickets — official resale marketplace.'), 'var(--gold)', true],
    [tr('tkt_resale2_title','StubHub / Viagogo'), tr('tkt_resale2_body','Expect 3–10× face value.'), '', false],
    [tr('tkt_resale3_title','Supporters Club Allocation'), tr('tkt_resale3_body','National football associations receive allocations.'), '', false],
  ].map(([title, body, accent, gold]) => `<div style="background:var(--card);border:1px solid var(--border);${gold?'border-left:3px solid var(--gold);':''}padding:1.25rem">
    <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;margin-bottom:.4rem">${title}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
  </div>`).join('');

  // Scam cards
  const scams = $('tkt-scam-cards');
  if (scams) scams.innerHTML = [
    [tr('tkt_scam1_title','PDF tickets are fake'), tr('tkt_scam1_body','FIFA tickets are digital only.')],
    [tr('tkt_scam2_title','Bank transfer = no protection'), tr('tkt_scam2_body','Never pay by bank transfer.')],
    [tr('tkt_scam3_title','Social media sellers'), tr('tkt_scam3_body','Full of scammers during major tournaments.')],
    [tr('tkt_scam4_title','Fake FIFA websites'), tr('tkt_scam4_body','The only real FIFA ticketing URL is fifa.com.')],
  ].map(([title, body]) => `<div style="background:var(--card);border:1px solid var(--border);border-left:3px solid var(--red);padding:1.25rem">
    <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;color:var(--red);margin-bottom:.4rem">${title}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
  </div>`).join('');

  // Stadium cards
  const stad = $('tkt-stadium-cards');
  if (stad) stad.innerHTML = [
    [tr('tkt_stad1_title','Download the FIFA App'), tr('tkt_stad1_body','Your ticket lives in the FIFA app.')],
    [tr('tkt_stad2_title','Arrive 90 minutes early'), tr('tkt_stad2_body','AT&T Stadium is enormous.')],
    [tr('tkt_stad3_title','Clear bag policy'), tr('tkt_stad3_body','Only clear bags are permitted.')],
    [tr('tkt_stad4_title','Bring photo ID'), tr('tkt_stad4_body','Your passport must match the name on your ticket.')],
  ].map(([title, body]) => `<div style="background:var(--card);border:1px solid var(--border);padding:1.25rem">
    <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;margin-bottom:.4rem">${title}</div>
    <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${body}</div>
  </div>`).join('');
}

function renderGroupsPage() {
  const $ = id => document.getElementById(id);
  const hero = $('grp-hero-sub');
  if (hero) hero.textContent = tr('groups_hero_sub', hero.textContent);

  // Accommodation cards
  const accom = $('grp-accom-cards');
  if (accom) accom.innerHTML = `
    ${[
      [tr('grp_accom1_title','Hotel room blocks'), tr('grp_accom1_body','Contact hotels directly for group rates.')],
      [tr('grp_accom2_title','VRBO for large groups'), tr('grp_accom2_body','A large VRBO house fits 8–16 people.')],
      [tr('grp_accom3_title','Spread across nearby cities'), tr('grp_accom3_body','Large supporters clubs split accommodation.')],
    ].map(([t,b]) => `<div style="background:var(--card);border:1px solid var(--border);padding:1.4rem">
      <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;margin-bottom:.4rem">${t}</div>
      <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${b}</div>
    </div>`).join('')}`;

  // Transport cards
  const trans = $('grp-trans-cards');
  if (trans) trans.innerHTML = `
    ${[
      [tr('grp_trans1_title','TRE Train'), tr('grp_trans1_body','Runs from downtown Dallas.'), 'var(--gold)'],
      [tr('grp_trans2_title','Charter coach'), tr('grp_trans2_body','For groups of 40+.'), ''],
      [tr('grp_trans3_title','Rideshare convoy'), tr('grp_trans3_body','For groups of 8–20.'), ''],
      [tr('grp_trans4_title','Parking carpool'), tr('grp_trans4_body','Groups with rental cars.'), ''],
    ].map(([t,b,color]) => `<div style="background:var(--card);border:1px solid var(--border);${color?'border-left:3px solid '+color+';':''}padding:1.25rem">
      <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;${color?'color:'+color+';':''}margin-bottom:.4rem">${t}</div>
      <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${b}</div>
    </div>`).join('')}`;

  // Meeting columns
  const beforeEl = $('grp-before-match-label');
  if (beforeEl) beforeEl.textContent = tr('grp_before_match','Before the match');
  const spotsEl = $('grp-meetup-spots-label');
  if (spotsEl) spotsEl.textContent = tr('grp_meetup_spots','Best group meetup spots');

  const meetLeft = $('grp-meet-left');
  if (meetLeft) meetLeft.innerHTML = `
    ${[
      [tr('grp_meet1_title','Designate a meeting point'), tr('grp_meet1_body','outside AT&T Stadium.')],
      [tr('grp_meet2_title','WhatsApp group'), tr('grp_meet2_body','with all travellers.')],
      [tr('grp_meet3_title','US SIM or eSIM'), tr('grp_meet3_body','everyone needs a US number.')],
    ].map(([t,b]) => `<div style="font-size:.8rem;color:var(--muted);font-weight:300;line-height:1.6"><strong style="color:var(--text)">${t}</strong> ${b}</div>`).join('')}`;

  const meetRight = $('grp-meet-right');
  if (meetRight) meetRight.innerHTML = `
    ${[tr('grp_spot1','The Rustic...'), tr('grp_spot2','Klyde Warren Park...'), tr('grp_spot3','FIFA Fan Festival...')].map(
      t => `<div style="font-size:.8rem;color:var(--muted);font-weight:300;line-height:1.6">${t}</div>`
    ).join('')}`;

  // Clubs section
  const clubsIntro = $('grp-clubs-intro');
  if (clubsIntro) clubsIntro.textContent = tr('grp_clubs_intro','Most national team supporters clubs organise group travel packages.');

  const clubs = $('grp-clubs-cards');
  if (clubs) clubs.innerHTML = `
    ${[
      [tr('grp_club1_title','Oranje (Netherlands)'), tr('grp_club1_body','The Dutch national supporters club.')],
      [tr('grp_club2_title','La Albiceleste (Argentina)'), tr('grp_club2_body','Argentine supporters expected in huge numbers.')],
      [tr('grp_club3_title','Torcida (Brazil)'), tr('grp_club3_body','Brazilian fans bring the best atmosphere.')],
      [tr('grp_club4_title','American Outlaws (USA)'), tr('grp_club4_body','US national team supporters club.')],
    ].map(([t,b]) => `<div style="background:var(--card);border:1px solid var(--border);padding:1.25rem">
      <div style="font-family:var(--fh);font-size:.9rem;font-weight:700;text-transform:uppercase;margin-bottom:.4rem">${t}</div>
      <div style="font-size:.78rem;color:var(--muted);font-weight:300;line-height:1.65">${b}</div>
    </div>`).join('')}`;

  // Checklist columns
  const col6 = $('grp-6months-label');
  if (col6) col6.textContent = tr('grp_6months','6+ months before');
  const col1 = $('grp-1month-label');
  if (col1) col1.textContent = tr('grp_1month','1 month before');

  const checks6 = $('grp-checks-6months');
  if (checks6) checks6.innerHTML = [
    tr('grp_check1','Book hotel room block or VRBO house'),
    tr('grp_check2','Register all group members on FIFA.com'),
    tr('grp_check3','Apply for tickets via FIFA ballot together'),
    tr('grp_check4','Book flights (use same flight if possible)'),
    tr('grp_check5','Set up group WhatsApp or Telegram'),
  ].map(t => `<div style="font-size:.78rem;color:var(--muted);font-weight:300;display:flex;gap:8px"><span style="color:var(--gold)">☐</span>${t}</div>`).join('');

  const checks1 = $('grp-checks-1month');
  if (checks1) checks1.innerHTML = [
    tr('grp_check6','Confirm all tickets are in FIFA app'),
    tr('grp_check7','Arrange US Mobile eSIM for all members'),
    tr('grp_check8','Book group transport to stadium'),
    tr('grp_check9','Designate a group leader for match day'),
    tr('grp_check10','Agree on stadium meeting point'),
  ].map(t => `<div style="font-size:.78rem;color:var(--muted);font-weight:300;display:flex;gap:8px"><span style="color:var(--red)">☐</span>${t}</div>`).join('');
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
