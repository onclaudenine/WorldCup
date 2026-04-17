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
};

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
  const el = document.getElementById(containerId);
  if (!el) return;

  const {
    title = 'Book Your Trip',
    subtitle = 'Find the best deals on hotels, flights, and transport to Dallas.',
    context = 'dallas',
    showHotels = true,
    showFlights = true,
    showCars = true,
    showBus = true,
    showTuro = false,
    showActivities = false,
    hotelLocation = 'Dallas, Texas',
    compact = false,
  } = options;

  const cards = [];

  if (showHotels) cards.push({
    icon: '🏨',
    label: 'Hotels',
    partner: 'via Booking.com',
    desc: compact ? 'Best rates, free cancellation on most rooms.' : 'Compare 500+ Dallas & Arlington hotels. Free cancellation on most rooms. Best price guarantee.',
    cta: 'Search Hotels',
    url: bookingHotelsUrl(hotelLocation),
    badge: 'Most Popular',
    badgeColor: 'rgba(0,40,104,0.25)',
    badgeText: '#F0EDE8',
  });

  if (showFlights) cards.push({
    icon: '✈️',
    label: 'Flights to DFW',
    partner: 'via Skyscanner',
    desc: compact ? 'Search every airline. Best prices for June 2026.' : 'Search every airline flying into Dallas Fort Worth (DFW). Set fare alerts for World Cup dates in June–July 2026.',
    cta: 'Search Flights',
    url: skyscannerUrl(),
    badge: 'Best for Intl',
    badgeColor: 'rgba(191,10,48,0.15)',
    badgeText: '#F0EDE8',
  });

  if (showCars) cards.push({
    icon: '🚗',
    label: 'Rental Cars',
    partner: 'via Rentalcars.com',
    desc: compact ? 'Pick up at DFW Airport. Essential for Arlington.' : 'Pick up at DFW Airport or downtown Dallas. Essential for reaching AT&T Stadium — Arlington has no direct rail service.',
    cta: 'Compare Cars',
    url: rentalcarsUrl(),
    badge: 'Stadium Essential',
    badgeColor: 'rgba(191,10,48,0.1)',
    badgeText: '#ff4d6d',
  });

  if (showBus) cards.push({
    icon: '🚌',
    label: 'Bus Tickets',
    partner: 'via FlixBus / Greyhound',
    desc: compact ? 'Budget routes from Houston, Austin & OKC.' : 'Budget-friendly bus routes from Houston, Austin, San Antonio, and Oklahoma City. From $15 one-way.',
    cta: 'Find Bus Routes',
    url: flixbusUrl(),
    badge: 'Budget Option',
    badgeColor: 'rgba(240,237,232,0.1)',
    badgeText: '#F0EDE8',
  });

  if (showTuro) cards.push({
    icon: '🔑',
    label: 'Turo Car Sharing',
    partner: 'via Turo',
    desc: compact ? 'Rent unique cars from local hosts.' : 'Rent from local car owners — often cheaper than traditional rentals. Pickup near your hotel.',
    cta: 'Browse Turo',
    url: turoUrl(),
    badge: 'Trending',
    badgeColor: 'rgba(0,40,104,0.2)',
    badgeText: '#F0EDE8',
  });

  if (showActivities) cards.push({
    icon: '🎟️',
    label: 'Tours & Activities',
    partner: 'via Viator',
    desc: compact ? 'Stadium tours, Stockyards, Dallas experiences.' : 'Stadium tours, Stockyards rodeos, Dallas food tours, and cultural experiences. Book ahead — World Cup dates sell out fast.',
    cta: 'Browse Activities',
    url: viatorUrl(),
    badge: 'Experiences',
    badgeColor: 'rgba(240,237,232,0.1)',
    badgeText: '#F0EDE8',
  });

  const cardSize = compact ? '200px' : '240px';

  el.innerHTML = `
    <div style="margin:3rem 0 0.5rem">
      <div style="font-family:var(--fh);font-size:.7rem;font-weight:700;letter-spacing:.22em;text-transform:uppercase;
        color:var(--white);margin-bottom:.4rem;display:flex;align-items:center;gap:8px">
        <span style="width:16px;height:2px;background:var(--red);display:inline-block"></span>
        Book Your Trip
      </div>
      <div style="font-family:var(--fh);font-weight:900;font-size:clamp(1.6rem,4vw,2.4rem);
        text-transform:uppercase;line-height:.92;margin-bottom:.6rem">
        ${title} <span style="color:var(--red)">Deals</span>
      </div>
      <p style="font-size:.82rem;color:var(--muted);font-weight:300;max-width:540px;line-height:1.65;margin-bottom:1.5rem">${subtitle}</p>
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
      ℹ️ Affiliate links — we earn a small commission if you book, at no extra cost to you.
      <a href="#affiliate-disclosure" style="color:var(--dim);text-decoration:underline;text-underline-offset:2px">Learn more</a>
    </div>`;
}

// ── MATCH-DATE FLIGHT WIDGET ──────────────────────────────────
// Shows flight CTAs tailored to a specific match date on matches.html
function renderMatchFlightCTA(containerId, matchDate, matchLabel) {
  const el = document.getElementById(containerId);
  if (!el) return;
  // matchDate format: "2026-06-15" → arrival day before = "2026-06-14"
  const arrive = matchDate; // simplified
  el.innerHTML = `
    <div style="background:rgba(240,237,232,0.06);border:1px solid rgba(240,237,232,0.2);
      border-left:3px solid var(--gold);padding:.85rem 1.1rem;margin-top:.5rem;
      display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.75rem">
      <div>
        <div style="font-size:.65rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
          color:var(--white);margin-bottom:2px">Flying in for this match?</div>
        <div style="font-size:.78rem;color:var(--muted);font-weight:300">Find flights arriving ${matchLabel}</div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <a href="${skyscannerUrl('','DFW',arrive.replace(/-/g,''))}" target="_blank" rel="noopener sponsored"
          style="font-family:var(--fh);font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
            color:var(--white);border:1px solid rgba(240,237,232,0.3);background:rgba(240,237,232,0.07);
            padding:6px 12px;text-decoration:none;white-space:nowrap;transition:background .15s"
          onmouseover="this.style.background='rgba(240,237,232,0.14)'"
          onmouseout="this.style.background='rgba(240,237,232,0.07)'">Flights on Skyscanner ↗</a>
        <a href="${bookingHotelsUrl('Arlington Texas', arrive, '')}" target="_blank" rel="noopener sponsored"
          style="font-family:var(--fh);font-size:.68rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
            color:var(--muted);border:1px solid var(--border2);background:transparent;
            padding:6px 12px;text-decoration:none;white-space:nowrap;transition:all .15s"
          onmouseover="this.style.color='var(--text)';this.style.borderColor='var(--border)'"
          onmouseout="this.style.color='var(--muted)';this.style.borderColor='var(--border2)'">Hotels near Stadium ↗</a>
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
