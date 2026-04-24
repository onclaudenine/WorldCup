// ── AFFILIATE CONFIGURATION ───────────────────────────────────
// Replace placeholder IDs with your real affiliate IDs after signing up.
// Sign-up links are in the comments next to each ID.

const AFF = {
  // Booking.com — sign up at partners.booking.com
  booking: {
    id: 'YOUR_BOOKING_AFF_ID',          // e.g. "1234567"
    baseUrl: 'https://www.booking.com/searchresults.html',
    hotelUrl: 'https://www.booking.com/hotel/',
  },

  // Skyscanner — sign up at partners.skyscanner.net
  skyscanner: {
    id: 'YOUR_SKYSCANNER_AFF_ID',       // e.g. "ds1234567"
    baseUrl: 'https://www.skyscanner.com/transport/flights/',
  },

  // Rentalcars.com — sign up at rentalcars.com/affiliates
  rentalcars: {
    id: 'YOUR_RENTALCARS_AFF_ID',       // e.g. "affiliate_id=12345"
    baseUrl: 'https://www.rentalcars.com/',
  },

  // Kayak — sign up at kayak.com/affiliate
  kayak: {
    id: 'YOUR_KAYAK_AFF_ID',
    baseUrl: 'https://www.kayak.com/flights/',
  },

  // FlixBus / Greyhound — sign up at impact.com → search FlixBus
  flixbus: {
    id: 'YOUR_FLIXBUS_AFF_ID',
    baseUrl: 'https://www.flixbus.com/',
  },

  // Turo — sign up at turo.com/affiliates
  turo: {
    id: 'YOUR_TURO_AFF_ID',
    baseUrl: 'https://turo.com/us/en/',
  },

  // Viator — sign up at viator.com/partner
  viator: {
    id: 'YOUR_VIATOR_AFF_ID',
    baseUrl: 'https://www.viator.com/Dallas/d673-ttd',
  },

  // VRBO — Expedia Group / Partnerize affiliate
  // Commission: up to 6% per completed booking, 7-30 day cookie
  vrbo: {
    id: '1100l426249',                  // Partnerize Publisher ID
    baseUrl: 'https://www.vrbo.com/vacation-rentals/usa/texas/dallas',
    directLink: 'https://vrbo.com/affiliate/teCuJ9x', // Direct affiliate tracking link
  },

  // Uber Eats — sign up at impact.com → search "Uber Eats"
  // Commission: 5–8% of first order OR flat fee per new signup
  ubereats: {
    id: 'YOUR_UBEREATS_AFF_ID',         // from Impact.com dashboard
    baseUrl: 'https://www.ubereats.com/city/dallas-tx',
  },

  // Uber rides — same Impact.com account as Uber Eats
  // Commission: flat fee per new rider signup
  uber: {
    id: 'YOUR_UBER_AFF_ID',             // from Impact.com dashboard (same as Uber Eats app)
    baseUrl: 'https://www.uber.com/global/en/sign-up/rider/',
  },

  // US Mobile eSIM — sign up at usmobile.com/affiliate → runs through Impact.com
  // Commission: $30 flat fee per new customer signup
  // Perfect for international visitors needing a US eSIM on arrival
  usmobile: {
    id: 'YOUR_USMOBILE_AFF_ID',         // from Impact.com dashboard
    baseUrl: 'https://www.usmobile.com',
  },
};

// ── AFFILIATE RE-RENDER REGISTRY ─────────────────────────────
// Tracks all render calls so they re-execute on language change
const _affRegistry = [];
let _affRendering = false;

function _affRegister(fn, args) {
  if (_affRendering) return;
  const id = args[0];
  const existing = _affRegistry.findIndex(r => r.args[0] === id && r.fn === fn);
  if (existing >= 0) {
    _affRegistry[existing] = { fn, args };
  } else {
    _affRegistry.push({ fn, args });
  }
}

function _affReRenderAll() {
  _affRendering = true;
  _affRegistry.forEach(({ fn, args }) => {
    try { fn(...args); } catch(e) { console.warn('Affiliate re-render error:', e); }
  });
  _affRendering = false;
}

document.addEventListener('langchange', _affReRenderAll);


// ── LINK BUILDERS ─────────────────────────────────────────────
// Each function returns a full affiliate URL for a specific search context.

function bookingHotelsUrl(location = 'Arlington, Texas', checkin = '', checkout = '') {
  const params = new URLSearchParams({
    ss: location,
    aid: AFF.booking.id,
    lang: 'en-us',
    sb: 1,
  });
  if (checkin)  params.set('checkin',  checkin);
  if (checkout) params.set('checkout', checkout);
  return `${AFF.booking.baseUrl}?${params}`;
}

function skyscannerUrl(origin = '', dest = 'DFW', date = '') {
  // Deep-link to flight search: skyscanner.com/transport/flights/LON/DFW/20260614/
  if (origin && dest && date) {
    return `${AFF.skyscanner.baseUrl}${origin}/${dest}/${date}/?affilid=${AFF.skyscanner.id}`;
  }
  return `https://www.skyscanner.com/flights-to/dfw/cheap-flights-to-dallas-fort-worth-airport.html?affilid=${AFF.skyscanner.id}`;
}

function kayakFlightsUrl(dest = 'DFW', date = '2026-06-01') {
  return `${AFF.kayak.baseUrl}-/${dest}/${date}?a=${AFF.kayak.id}`;
}

function rentalcarsUrl(location = 'Dallas Fort Worth Airport', pickup = '2026-06-14', dropoff = '2026-06-20') {
  return `${AFF.rentalcars.baseUrl}?affilid=${AFF.rentalcars.id}&location=${encodeURIComponent(location)}&puDay=${pickup}&doDay=${dropoff}`;
}

function flixbusUrl(dest = 'dallas') {
  return `${AFF.flixbus.baseUrl}?affiliateId=${AFF.flixbus.id}#search`;
}

function turoUrl() {
  return `${AFF.turo.baseUrl}search?country=US&defaultZoom=11&deliveryRadius=25&endDate=2026-07-06&endTime=10%3A00&isDelivery=false&latitude=32.7767&longitude=-96.797&pickupType=ALL&startDate=2026-06-14&startTime=10%3A00&affiliateId=${AFF.turo.id}`;
}

function viatorUrl() {
  return `${AFF.viator.baseUrl}?pid=${AFF.viator.id}`;
}

function usMobileUrl() {
  return `${AFF.usmobile.baseUrl}?ref=${AFF.usmobile.id}`;
}

function vrboUrl(location = 'dallas-tx') {
  // Use the direct VRBO affiliate tracking link
  return AFF.vrbo.directLink;
}

function uberEatsUrl(restaurant = '') {
  const base = restaurant
    ? `https://www.ubereats.com/store/${restaurant}`
    : AFF.ubereats.baseUrl;
  return `${base}?affiliate_id=${AFF.ubereats.id}`;
}

function uberRideUrl() {
  return `${AFF.uber.baseUrl}?referral=${AFF.uber.id}`;
}


// ── UBER EATS RESTAURANT CARD ─────────────────────────────────
// Render a compact Uber Eats delivery card on a restaurant page.
// restaurantQuery: search term for Uber Eats (e.g. "Pecan Lodge Dallas")
function renderUberEatsCard(containerId, restaurantName, restaurantQuery) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const url = `https://www.ubereats.com/search?q=${encodeURIComponent(restaurantQuery)}&affiliate_id=${AFF.ubereats.id}`;
  el.innerHTML = `
    <div style="padding:.85rem 2rem;display:flex;align-items:center;gap:1rem;flex-wrap:wrap;
      border-left:4px solid var(--red)">
      <div style="font-size:1.3rem;flex-shrink:0">🛵</div>
      <div style="flex:1;min-width:160px">
        <div style="font-family:var(--fh);font-size:.82rem;font-weight:700;text-transform:uppercase;
          letter-spacing:.04em;color:var(--text)">Order ${restaurantName} for delivery</div>
        <div style="font-size:.72rem;color:var(--muted);font-weight:300;margin-top:1px">
          Available on Uber Eats — delivered to your hotel
        </div>
      </div>
      <a href="${url}" target="_blank" rel="noopener sponsored"
        style="font-family:var(--fh);font-size:.68rem;font-weight:700;letter-spacing:.08em;
          text-transform:uppercase;background:var(--red);color:#fff;padding:8px 18px;
          text-decoration:none;white-space:nowrap;flex-shrink:0;transition:background .15s"
        onmouseover="this.style.background='#960822'"
        onmouseout="this.style.background='var(--red)'">
        Order on Uber Eats ↗
      </a>
    </div>`;
}

// ── US MOBILE eSIM CARD ──────────────────────────────────
// Render a US Mobile eSIM card — ideal for airport and survival pages
function renderUsMobileCard(containerId) {
  _affRegister(renderUsMobileCard, [containerId]);
  const el = document.getElementById(containerId);
  if (!el) return;
  const url = usMobileUrl();
  el.innerHTML = `
    <a href="${url}" target="_blank" rel="noopener sponsored"
      style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;padding:1rem 1.25rem;
        background:var(--card);border:1px solid var(--border);text-decoration:none;
        color:inherit;transition:border-color .18s;border-left:4px solid var(--gold)"
      onmouseover="this.style.borderLeftColor='var(--red)'"
      onmouseout="this.style.borderLeftColor='var(--gold)'">
      <div style="font-size:1.6rem;flex-shrink:0">📱</div>
      <div style="flex:1;min-width:160px">
        <div style="font-family:var(--fh);font-size:.82rem;font-weight:700;text-transform:uppercase;
          letter-spacing:.04em;color:var(--text);margin-bottom:2px">US Mobile eSIM — Stay Connected in the USA</div>
        <div style="font-size:.72rem;color:var(--muted);font-weight:300;line-height:1.55">
          Activate a US eSIM before you land. No physical SIM needed — works on iPhone XR/XS and newer, and most Android devices. Access to all 3 major US networks.
        </div>
      </div>
      <div style="font-family:var(--fh);font-size:.68rem;font-weight:700;letter-spacing:.08em;
        text-transform:uppercase;color:var(--gold);white-space:nowrap;flex-shrink:0">Get eSIM ↗</div>
    </a>`;
}

// ── UBER RIDE CARD ────────────────────────────────────────────
function renderUberCard(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <a href="${uberRideUrl()}" target="_blank" rel="noopener sponsored"
      style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;padding:1rem 1.25rem;
        background:var(--card);border:1px solid var(--border);text-decoration:none;
        color:inherit;transition:border-color .18s"
      onmouseover="this.style.borderColor='rgba(240,237,232,.4)'"
      onmouseout="this.style.borderColor='var(--border)'">
      <div style="font-size:1.6rem">🚕</div>
      <div style="flex:1;min-width:140px">
        <div style="font-family:var(--fh);font-size:.78rem;font-weight:700;text-transform:uppercase;
          letter-spacing:.04em;color:var(--text);margin-bottom:2px">Get an Uber to the Stadium</div>
        <div style="font-size:.72rem;color:var(--muted);font-weight:300">New to Uber? Sign up before match day. Note: expect 3–5× surge pricing on match days — TRE + shuttle is usually faster and cheaper.</div>
      </div>
      <div style="font-family:var(--fh);font-size:.68rem;font-weight:700;letter-spacing:.08em;
        text-transform:uppercase;color:var(--white);white-space:nowrap">Sign Up ↗</div>
    </a>`;
}

// ── VIATOR FOOD TOUR CARDS ────────────────────────────────────
// Specific Dallas food/restaurant tours on Viator.
// Replace YOUR_VIATOR_AFF_ID in the AFF object above with your real ID.
const VIATOR_FOOD_TOURS = [
  {
    name: 'Dallas Food Tour — Deep Ellum',
    desc: "Walk Deep Ellum's best food stops with a local guide. BBQ, tacos, street food, and live music district. 3 hrs.",
    url: `https://www.viator.com/tours/Dallas/Deep-Ellum-Food-Tour/d673-3498DEEPELLUM?pid=${AFF.viator.id}&mcid=42383`,
    price: 'From $65',
    duration: '3 hrs',
    icon: '🍖',
  },

  {
    name: 'Tex-Mex Food & Culture Walk',
    desc: "Taste authentic Tex-Mex across Dallas's best taquerias. Includes tastings at 4–5 spots in Bishop Arts and Oak Cliff.",
    url: `https://www.viator.com/tours/Dallas/Tex-Mex-Food-Tour/d673-3498TEXMEX?pid=${AFF.viator.id}&mcid=42383`,
    price: 'From $59',
    duration: '3.5 hrs',
    icon: '🌮',
  },
  {
    name: 'Dallas Dining Experiences',
    desc: 'Browse all Dallas food tours, cooking classes, and restaurant experiences available during the World Cup.',
    url: `https://www.viator.com/Dallas-restaurants-and-food-tours/d673-g9?pid=${AFF.viator.id}&mcid=42383`,
    price: 'From $49',
    duration: 'Various',
    icon: '🎟️',
  },
];

// Render a Viator food tour section. Call on restaurant pages and Explore page.
// containerId: the element to render into
// highlightTour: index from VIATOR_FOOD_TOURS to feature (0=deep ellum, 1=bbq, 2=texmex, 3=all)
// Defaults to showing all 4 in a compact grid.
function renderViatorFoodTours(containerId, highlightTour = null) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const tours = highlightTour !== null
    ? [VIATOR_FOOD_TOURS[highlightTour], VIATOR_FOOD_TOURS[3]] // featured + browse all
    : VIATOR_FOOD_TOURS;

  el.innerHTML = `
    <div style="margin-top:2rem;padding-top:2rem;border-top:1px solid var(--border)">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:.4rem">
        <span style="width:16px;height:2px;background:var(--red);display:inline-block"></span>
        <span style="font-family:var(--fh);font-size:.68rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--white)">Book a Food Experience</span>
      </div>
      <div style="font-family:var(--fh);font-weight:900;font-size:clamp(1.4rem,3vw,2rem);text-transform:uppercase;line-height:.92;margin-bottom:.3rem">
        Dallas <em style="color:var(--red);font-style:normal">Food Tours</em>
      </div>
      <p style="font-size:.78rem;color:var(--muted);font-weight:300;margin-bottom:1.25rem;line-height:1.6">
        Guided food tours let you taste Dallas beyond the tourist trail. Book ahead — World Cup dates sell out fast.
      </p>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px">
        ${tours.map(tour => `
          <a href="${tour.url}" target="_blank" rel="noopener sponsored"
             style="display:block;background:var(--card);border:1px solid var(--border);padding:1.1rem;
                    text-decoration:none;color:inherit;transition:border-color .18s"
             onmouseover="this.style.borderColor='rgba(191,10,48,.5)'"
             onmouseout="this.style.borderColor='var(--border)'">
            <div style="font-size:1.4rem;margin-bottom:.5rem">${tour.icon}</div>
            <div style="font-family:var(--fh);font-weight:700;font-size:.88rem;text-transform:uppercase;
                        letter-spacing:.02em;margin-bottom:.35rem;color:var(--text)">${tour.name}</div>
            <div style="font-size:.74rem;color:var(--muted);line-height:1.6;font-weight:300;margin-bottom:.6rem">${tour.desc}</div>
            <div style="display:flex;justify-content:space-between;align-items:center">
              <span style="font-family:var(--fh);font-size:.8rem;font-weight:700;color:var(--white)">${tour.price}</span>
              <span style="font-size:.65rem;color:var(--muted)">${tour.duration}</span>
            </div>
            <div style="margin-top:.6rem;font-family:var(--fh);font-size:.65rem;font-weight:700;
                        letter-spacing:.08em;text-transform:uppercase;color:var(--red)">Book on Viator ↗</div>
          </a>`).join('')}
      </div>
      <p style="font-size:.65rem;color:var(--dim);margin-top:.75rem;line-height:1.5">
        Affiliate links — we earn a small commission at no extra cost to you. Prices shown are starting rates and may vary.
      </p>
    </div>`;
}

// ── DISCLOSURE BANNER ─────────────────────────────────────────
// FTC-required disclosure. Injected on every page that has affiliate links.
function renderDisclosure() {
  const el = document.getElementById('affiliate-disclosure');
  if (!el) return;
  el.innerHTML = `
    <div style="background:rgba(240,237,232,0.07);border-top:1px solid rgba(240,237,232,0.2);
      padding:0.6rem 2rem;font-size:0.72rem;color:#6B7E9F;line-height:1.5;text-align:center">
      <strong style="color:#E8EAF2">Affiliate disclosure:</strong>
      Some links on this page are affiliate links. If you book through them, we may earn a small commission
      at no extra cost to you. This helps keep the guide free. We only link to services we genuinely recommend.
    </div>`;
}

// ── BOOKING WIDGET RENDERER ───────────────────────────────────
// Call renderBookingSection(containerId, options) on any page.
// options: { title, subtitle, context, showHotels, showFlights, showCars, showBus, showTuro, showActivities }

function renderBookingSection(containerId, options = {}) {
  _affRegister(renderBookingSection, [containerId, options]);
  const el = document.getElementById(containerId);
  if (!el) return;

  const {
    title = null,
    subtitle = null,
    context = 'dallas',
    showHotels = true,
    showFlights = true,
    showCars = true,
    showBus = true,
    showTuro = false,
    showActivities = false,
    showVrbo = false,
    showUberEats = false,
    showUber = false,
    showUsMobile = false,
    hotelLocation = 'Dallas, Texas',
    compact = false,
  } = options;

  // Use t() if available (loaded from site.js), otherwise fall back to English
  const tr = (key, fallback) => (typeof t === 'function' && t(key)) ? t(key) : fallback;

  const sectionTitle    = title    || tr('book_your_trip', 'Book Your Trip');
  const sectionSubtitle = subtitle || tr('booking_sub',    'Find the best deals on hotels, flights, and transport to Dallas.');

  const cards = [];

  if (showHotels) cards.push({
    icon: '🏨',
    label: tr('bk_hotels_label', 'Hotels'),
    partner: 'via Booking.com',
    desc: compact
      ? tr('bk_hotels_desc_s', 'Best rates, free cancellation on most rooms.')
      : tr('bk_hotels_desc',   'Compare 500+ Dallas & Arlington hotels. Free cancellation on most rooms. Best price guarantee.'),
    cta: tr('bk_hotels_cta', 'Search Hotels'),
    url: bookingHotelsUrl(hotelLocation),
    badge: tr('bk_hotels_badge', 'Most Popular'),
    badgeColor: 'rgba(0,40,104,0.25)', badgeText: '#F0EDE8',
  });

  if (showFlights) cards.push({
    icon: '✈️',
    label: tr('bk_flights_label', 'Flights to DFW'),
    partner: 'via Skyscanner',
    desc: compact
      ? tr('bk_flights_desc_s', 'Search every airline. Best prices for June 2026.')
      : tr('bk_flights_desc',   'Search every airline flying into Dallas Fort Worth (DFW). Set fare alerts for World Cup dates in June–July 2026.'),
    cta: tr('bk_flights_cta', 'Search Flights'),
    url: skyscannerUrl(),
    badge: tr('bk_flights_badge', 'Best for Intl'),
    badgeColor: 'rgba(191,10,48,0.15)', badgeText: '#F0EDE8',
  });

  if (showCars) cards.push({
    icon: '🚗',
    label: tr('bk_cars_label', 'Rental Cars'),
    partner: 'via Rentalcars.com',
    desc: compact
      ? tr('bk_cars_desc_s', 'Pick up at DFW Airport. Essential for Arlington.')
      : tr('bk_cars_desc',   'Pick up at DFW Airport or downtown Dallas. Essential for reaching AT&T Stadium — Arlington has no direct rail service.'),
    cta: tr('bk_cars_cta', 'Compare Cars'),
    url: rentalcarsUrl(),
    badge: tr('bk_cars_badge', 'Stadium Essential'),
    badgeColor: 'rgba(191,10,48,0.1)', badgeText: '#ff4d6d',
  });

  if (showBus) cards.push({
    icon: '🚌',
    label: tr('bk_bus_label', 'Bus Tickets'),
    partner: 'via FlixBus / Greyhound',
    desc: compact
      ? tr('bk_bus_desc_s', 'Budget routes from Houston, Austin & OKC.')
      : tr('bk_bus_desc',   'Budget-friendly bus routes from Houston, Austin, San Antonio, and Oklahoma City. From $15 one-way.'),
    cta: tr('bk_bus_cta', 'Find Bus Routes'),
    url: flixbusUrl(),
    badge: tr('bk_bus_badge', 'Budget Option'),
    badgeColor: 'rgba(240,237,232,0.1)', badgeText: '#F0EDE8',
  });

  if (showTuro) cards.push({
    icon: '🔑',
    label: tr('bk_turo_label', 'Turo Car Sharing'),
    partner: 'via Turo',
    desc: compact
      ? tr('bk_turo_desc_s', 'Rent unique cars from local hosts.')
      : tr('bk_turo_desc',   'Rent from local car owners — often cheaper than traditional rentals. Pickup near your hotel.'),
    cta: tr('bk_turo_cta', 'Browse Turo'),
    url: turoUrl(),
    badge: tr('bk_turo_badge', 'Trending'),
    badgeColor: 'rgba(0,40,104,0.2)', badgeText: '#F0EDE8',
  });

  if (showActivities) cards.push({
    icon: '🎟️',
    label: tr('bk_act_label', 'Tours & Activities'),
    partner: 'via Viator',
    desc: compact
      ? tr('bk_act_desc_s', 'Stadium tours, Stockyards, Dallas experiences.')
      : tr('bk_act_desc',   'Stadium tours, Stockyards rodeos, Dallas food tours, and cultural experiences. Book ahead — World Cup dates sell out fast.'),
    cta: tr('bk_act_cta', 'Browse Activities'),
    url: viatorUrl(),
    badge: tr('bk_act_badge', 'Experiences'),
    badgeColor: 'rgba(240,237,232,0.1)', badgeText: '#F0EDE8',
  });

  if (showVrbo) cards.push({
    icon: '🏠',
    label: tr('bk_airbnb_label', 'VRBO Vacation Rentals'),
    partner: 'via VRBO',
    desc: compact
      ? tr('bk_airbnb_desc_s', 'Apartments, houses & rooms near Dallas.')
      : tr('bk_airbnb_desc',   'Entire homes and apartments near AT&T Stadium on VRBO. Great for groups — often cheaper than hotels for 4+.'),
    cta: tr('bk_airbnb_cta', 'Search VRBO'),
    url: vrboUrl(),
    badge: tr('bk_airbnb_badge', 'Homes'),
    badgeColor: 'rgba(255,90,95,0.15)', badgeText: '#FF5A5F',
  });

  if (showUberEats) cards.push({
    icon: '🛵',
    label: tr('bk_eats_label', 'Food Delivery'),
    partner: 'via Uber Eats',
    desc: compact
      ? tr('bk_eats_desc_s', 'Dallas restaurants delivered to your hotel.')
      : tr('bk_eats_desc',   "Get Dallas's best restaurants delivered to your hotel. Pecan Lodge, Heim BBQ, and more."),
    cta: tr('bk_eats_cta', 'Order Food'),
    url: uberEatsUrl(),
    badge: tr('bk_eats_badge', 'Delivery'),
    badgeColor: 'rgba(6,202,106,0.12)', badgeText: '#06CA6A',
  });

  if (showUsMobile) cards.push({
    icon: '📱',
    label: tr('bk_esim_label', 'US eSIM'),
    partner: 'via US Mobile',
    desc: compact
      ? tr('bk_esim_desc_s', 'Activate a US eSIM before you land.')
      : tr('bk_esim_desc', 'Stay connected from the moment you land. US Mobile eSIM works on all major networks — activate before you fly, no SIM swap needed.'),
    cta: tr('bk_esim_cta', 'Get US eSIM'),
    url: usMobileUrl(),
    badge: tr('bk_esim_badge', 'Essential'),
    badgeColor: 'rgba(201,168,76,0.15)', badgeText: '#C9A84C',
  });

  if (showUber) cards.push({
    icon: '🚕',
    label: tr('bk_uber_label', 'Ride to the Stadium'),
    partner: 'via Uber',
    desc: compact
      ? tr('bk_uber_desc_s', 'Uber rides to AT&T Stadium on match days.')
      : tr('bk_uber_desc',   'New to Uber? Sign up before match day. Surge pricing on match days — TRE + shuttle is cheaper.'),
    cta: tr('bk_uber_cta', 'Get Uber'),
    url: uberRideUrl(),
    badge: tr('bk_uber_badge', 'Rides'),
    badgeColor: 'rgba(0,0,0,0.1)', badgeText: '#F0EDE8',
  });

  const cardSize = compact ? '200px' : '240px';

  el.innerHTML = `
    <div style="margin:3rem 0 0.5rem">
      <div style="font-family:var(--fh);font-size:.7rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;
        color:var(--white);margin-bottom:.4rem;display:flex;align-items:center;gap:8px">
        <span style="width:16px;height:2px;background:var(--red);display:inline-block"></span>
        ${tr('book_your_trip', 'Book Your Trip')}
      </div>
      <div style="font-family:var(--fh);font-weight:900;font-size:clamp(1.6rem,4vw,2.4rem);
        text-transform:uppercase;line-height:.92;margin-bottom:.6rem">
        ${sectionTitle} <span style="color:var(--red)">${tr('bk_deals', 'Deals')}</span>
      </div>
      <p style="font-size:.82rem;color:var(--muted);font-weight:300;max-width:540px;line-height:1.65;margin-bottom:1.5rem">${sectionSubtitle}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(${cardSize},1fr));gap:10px;margin-bottom:1rem">
      ${cards.map(c => `
        <a href="${c.url}" target="_blank" rel="noopener sponsored"
          style="background:var(--card);border:1px solid var(--border);padding:1.25rem;
            text-decoration:none;color:inherit;display:block;transition:border-color .18s,transform .15s"
          onmouseover="this.style.borderColor='rgba(240,237,232,0.4)';this.style.transform='translateY(-3px)'"
          onmouseout="this.style.borderColor='rgba(255,255,255,0.07)';this.style.transform=''">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:.6rem">
            <span style="font-size:1.4rem">${c.icon}</span>
            <span style="font-size:.58rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
              padding:2px 7px;border-radius:1px;background:${c.badgeColor};color:${c.badgeText}">${c.badge}</span>
          </div>
          <div style="font-family:var(--fh);font-weight:700;font-size:.95rem;text-transform:uppercase;
            letter-spacing:.02em;margin-bottom:1px">${c.label}</div>
          <div style="font-size:.65rem;color:var(--white);font-weight:600;letter-spacing:.08em;
            text-transform:uppercase;margin-bottom:.5rem">${c.partner}</div>
          <div style="font-size:.78rem;color:var(--muted);line-height:1.6;font-weight:300;margin-bottom:1rem">${c.desc}</div>
          <div style="font-family:var(--fh);font-size:.72rem;font-weight:700;letter-spacing:.1em;
            text-transform:uppercase;color:var(--white);display:flex;align-items:center;gap:5px">
            ${c.cta} <span style="transition:transform .15s">↗</span>
          </div>
        </a>`).join('')}
    </div>
    <div style="font-size:.65rem;color:var(--dim);font-weight:300;line-height:1.5">
      ℹ️ ${tr('affiliate_note', 'Affiliate links — we earn a small commission if you book, at no extra cost to you.')}
      <a href="#affiliate-disclosure" style="color:var(--dim);text-decoration:underline;text-underline-offset:2px">Learn more</a>
    </div>`;
}

// ── MATCH-DATE FLIGHT WIDGET ──────────────────────────────────
// Shows flight CTAs tailored to a specific match date on matches.html
function renderMatchFlightCTA(containerId, matchDate, matchLabel, labels) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const arrive = matchDate;
  // labels can be passed in for translation; fallback to English
  const flyingIn   = (labels && labels.flyingIn)   || 'Flying in for this match?';
  const findFlights = (labels && labels.findFlights) || 'Find flights arriving';
  const flightsBtn  = (labels && labels.flightsBtn)  || 'Flights on Skyscanner ↗';
  const hotelsBtn   = (labels && labels.hotelsBtn)   || 'Hotels near Stadium ↗';
  el.innerHTML = `
    <div style="background:rgba(240,237,232,0.06);border:1px solid rgba(240,237,232,0.2);
      border-left:3px solid var(--gold);padding:.85rem 1.1rem;margin-top:.5rem;
      display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.75rem">
      <div>
        <div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:var(--white);margin-bottom:2px">${flyingIn}</div>
        <div style="font-size:.78rem;color:var(--muted);font-weight:300">${findFlights} ${matchLabel}</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a href="${skyscannerUrl('','DFW',arrive.replace(/-/g,''))}" target="_blank" rel="noopener sponsored"
          style="font-family:var(--fh);font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
            color:var(--white);border:1px solid rgba(240,237,232,0.3);background:rgba(240,237,232,0.07);
            padding:6px 12px;text-decoration:none;white-space:nowrap;transition:background .15s"
          onmouseover="this.style.background='rgba(240,237,232,0.14)'"
          onmouseout="this.style.background='rgba(240,237,232,0.07)'">${flightsBtn}</a>
        <a href="${bookingHotelsUrl('Arlington Texas', arrive, '')}" target="_blank" rel="noopener sponsored"
          style="font-family:var(--fh);font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
            color:var(--muted);border:1px solid var(--border2);background:transparent;
            padding:6px 12px;text-decoration:none;white-space:nowrap;transition:all .15s"
          onmouseover="this.style.color='var(--text)';this.style.borderColor='var(--border)'"
          onmouseout="this.style.color='var(--muted)';this.style.borderColor='var(--border2)'">${hotelsBtn}</a>
      </div>
    </div>`;
}

// ── NEIGHBORHOOD HOTEL WIDGET ─────────────────────────────────
// Compact hotel + car CTA for neighborhood detail pages
function renderNeighborhoodBooking(containerId, neighborhoodName, needsCar = false) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px;margin-top:1.5rem">
      <a href="${bookingHotelsUrl(neighborhoodName + ', Dallas Texas')}" target="_blank" rel="noopener sponsored"
        style="background:var(--card);border:1px solid var(--border);padding:1.1rem;
          text-decoration:none;color:inherit;display:block;transition:border-color .18s"
        onmouseover="this.style.borderColor='rgba(240,237,232,0.4)'"
        onmouseout="this.style.borderColor=''">
        <div style="font-size:1.2rem;margin-bottom:.5rem">🏨</div>
        <div style="font-family:var(--fh);font-weight:700;font-size:.88rem;text-transform:uppercase;margin-bottom:.25rem">Hotels Nearby</div>
        <div style="font-size:.65rem;color:var(--white);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.4rem">via Booking.com</div>
        <div style="font-size:.75rem;color:var(--muted);font-weight:300">Hotels in ${neighborhoodName} with free cancellation.</div>
        <div style="font-family:var(--fh);font-size:.68rem;font-weight:700;color:var(--white);margin-top:.75rem;letter-spacing:.08em;text-transform:uppercase">Search Hotels ↗</div>
      </a>
      ${needsCar ? `
      <a href="${rentalcarsUrl()}" target="_blank" rel="noopener sponsored"
        style="background:var(--card);border:1px solid var(--border);padding:1.1rem;
          text-decoration:none;color:inherit;display:block;transition:border-color .18s"
        onmouseover="this.style.borderColor='rgba(240,237,232,0.4)'"
        onmouseout="this.style.borderColor=''">
        <div style="font-size:1.2rem;margin-bottom:.5rem">🚗</div>
        <div style="font-family:var(--fh);font-weight:700;font-size:.88rem;text-transform:uppercase;margin-bottom:.25rem">Rent a Car</div>
        <div style="font-size:.65rem;color:var(--white);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.4rem">via Rentalcars.com</div>
        <div style="font-size:.75rem;color:var(--muted);font-weight:300">No rail to this area. Pick up at DFW Airport.</div>
        <div style="font-family:var(--fh);font-size:.68rem;font-weight:700;color:var(--white);margin-top:.75rem;letter-spacing:.08em;text-transform:uppercase">Compare Cars ↗</div>
      </a>` : ''}
      <a href="${viatorUrl()}" target="_blank" rel="noopener sponsored"
        style="background:var(--card);border:1px solid var(--border);padding:1.1rem;
          text-decoration:none;color:inherit;display:block;transition:border-color .18s"
        onmouseover="this.style.borderColor='rgba(240,237,232,0.4)'"
        onmouseout="this.style.borderColor=''">
        <div style="font-size:1.2rem;margin-bottom:.5rem">🎟️</div>
        <div style="font-family:var(--fh);font-weight:700;font-size:.88rem;text-transform:uppercase;margin-bottom:.25rem">Tours & Experiences</div>
        <div style="font-size:.65rem;color:var(--white);font-weight:600;letter-spacing:.08em;text-transform:uppercase;margin-bottom:.4rem">via Viator</div>
        <div style="font-size:.75rem;color:var(--muted);font-weight:300">Local tours, food walks, and cultural experiences.</div>
        <div style="font-family:var(--fh);font-size:.68rx;font-weight:700;color:var(--white);margin-top:.75rem;letter-spacing:.08em;text-transform:uppercase">Browse Experiences ↗</div>
      </a>
    </div>
    <div style="font-size:.63rem;color:var(--dim);margin-top:.75rem;font-weight:300">
      Affiliate links — we earn a small commission at no cost to you if you book.
    </div>`;
}
