# Dallas 2026 — FIFA World Cup Visitor Guide

A fully static multi-page website with integrated affiliate monetization.
No build step, no server required. Works on Netlify, GitHub Pages, or any static host.

---

## 🚀 Deploy in 30 Seconds (Netlify)
1. Unzip this folder
2. Go to https://app.netlify.com/drop
3. Drag the `dallas2026` folder onto the page
4. Done — you get a live URL instantly

## 🐙 Deploy to GitHub Pages
1. Push this folder to a GitHub repo
2. Settings → Pages → source: main branch / root
3. Live at https://yourusername.github.io/repo-name/

---

## 💰 Activating Affiliate Links

All affiliate links are managed in ONE file: `js/affiliate.js`

Open it and replace the placeholder IDs at the top:

```js
const AFF = {
  booking:     { id: 'YOUR_BOOKING_AFF_ID' },      // → partners.booking.com
  skyscanner:  { id: 'YOUR_SKYSCANNER_AFF_ID' },   // → partners.skyscanner.net
  rentalcars:  { id: 'YOUR_RENTALCARS_AFF_ID' },   // → rentalcars.com/affiliates
  kayak:       { id: 'YOUR_KAYAK_AFF_ID' },         // → kayak.com/affiliate
  flixbus:     { id: 'YOUR_FLIXBUS_AFF_ID' },       // → impact.com (search FlixBus)
  turo:        { id: 'YOUR_TURO_AFF_ID' },          // → turo.com/affiliates
  viator:      { id: 'YOUR_VIATOR_AFF_ID' },        // → viator.com/partner
};
```

All 22 pages automatically pick up the new IDs — you only edit one file.

### Affiliate Program Sign-Up Priority
1. **Booking.com** — partners.booking.com (approved in 1–3 days)
2. **Skyscanner** — partners.skyscanner.net (approved in 2–5 days)
3. **Rentalcars.com** — rentalcars.com/affiliates (approved in 1–2 days)
4. **FlixBus** — impact.com → search "FlixBus" (approved in 3–7 days)
5. **Turo** — turo.com/affiliates (approved in 1–3 days)
6. **Viator** — viator.com/partner (approved in 1–2 days)
7. **Kayak** — kayak.com/affiliate (approved in 5–10 days)

---

## 📄 Affiliate Disclosure
The FTC-required disclosure banner is automatically rendered on every page
via `renderDisclosure()` in `js/affiliate.js`. It appears above the nav.
Do not remove it — it's legally required in the US and by most affiliate programs.

---

## 📁 File Structure
```
dallas2026/
├── index.html            Homepage + full booking widget
├── matches.html          Fixtures + per-match flight CTAs
├── explore.html          Neighborhoods + restaurants listing
├── map.html              Interactive visitor map
├── logistics.html        Stadium transport + transport booking
├── checklist.html        Interactive match day checklist
├── survival.html         International visitor guide
├── neighborhoods/        6 neighborhood detail pages (each with hotel/car widget)
├── restaurants/          9 restaurant detail pages (each with hotel widget)
├── css/style.css         Shared styles
├── js/site.js            Shared data + nav/footer/weather/countdown
└── js/affiliate.js       ⭐ ALL affiliate links + widget renderers
```

---

## 🗓 Monetization Timeline
- **Now → Jan 2026**: Build traffic with SEO content
- **Jan–May 2026**: Affiliate bookings begin as fans plan trips
- **Peak earning window**: April–July 2026 (highest search volume)
- **Tournament**: June 11 – July 19, 2026

## 🎡 Family Activities Section (new)
- `families.html` — Main listing of 10 family activities with filters
- `activities/*.html` — 10 individual detail pages with:
  - Full transit directions (DART, driving, rideshare)
  - Admission prices per age group
  - Insider tips
  - Viator booking links (affiliate)
  - Hotel and car rental widgets

Activities covered:
1. Perot Museum of Nature & Science (DART accessible)
2. Dallas Zoo (DART accessible)
3. LEGOLAND Discovery Center Grapevine (car required)
4. SEA LIFE Grapevine Aquarium (car required)
5. Reunion Tower GeO-Deck (DART accessible)
6. Six Flags Over Texas (car required, near stadium)
7. Fort Worth Stockyards cattle drive (TRE + rideshare)
8. Hawaiian Falls Water Park (car required)
9. Globe Life Field Stadium Tour (car required, near stadium)
10. Dallas Arboretum & Children's Garden (DART + bus)
