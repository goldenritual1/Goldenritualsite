const IMG = {
  logoDark: 'images/logo-dark.png',
  logoLight: 'images/logo-light.png',
  hand: 'images/hand.jpg',
  open: 'images/open.jpg',
  board: 'images/board.jpg'
};

/* ===== Config: change these to retune the store ===== */
const BRAND = 'Golden Ritual';
const SALE_PCT = 20;      // sitewide sale, 0 turns it off
const SUB_PCT = 10;       // extra discount for Subscribe & Save
const FREE_SHIP = 40;     // free shipping threshold in dollars
const SHIP_FEE = 4.95;
const CODES = { FIRST10: 10 };   // discount codes, percent off
const BUNDLE_TIERS = [[3, 10], [5, 15], [8, 20]]; // [bars, percent off]

/* ===== Helpers ===== */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const money = n => '$' + n.toFixed(2);
const IC = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  bag: '<path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  check: '<path d="m5 12 5 5 9-10"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  truck: '<path d="M3 6h11v10H3zM14 10h4l3 3v3h-7"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  repeat: '<path d="M17 3l3 3-3 3M4 11V9a3 3 0 0 1 3-3h13M7 21l-3-3 3-3M20 13v2a3 3 0 0 1-3 3H4"/>',
  drop: '<path d="M12 3s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11Z"/>',
  spark: '<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z"/>',
  heart: '<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z"/>',
  leaf: '<path d="M5 19c0-9 5-14 15-14 0 10-5 15-14 15"/><path d="M5 19c3-5 6-8 10-10"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3Z"/>',
  shield: '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
  flask: '<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3"/><path d="m4 4 16 16"/>',
  box: '<path d="M4 8l8-4 8 4v8l-8 4-8-4V8Z"/><path d="m4 8 8 4 8-4M12 12v8"/>'
};
const icon = (n, s = 22, sw = 2) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n]}</svg>`;

/* ===== Catalog (edit prices and copy to match your store) ===== */
const IMGPOS = { hand: '50% 42%', open: '56% 50%', board: '84% 50%' };
const PRODUCTS = [
  { id: 'turmeric-soap', name: 'Turmeric Soap', tagline: 'For melanin-rich skin', price: 16.00, size: '50 g / 1.76 oz', variants: ['Original'], imgs: ['hand', 'open', 'board'], best: true,
    blurb: 'A turmeric soap bar made for melanin-rich skin and your routine for dark spots.',
    bullets: ['No bleaching agents', '100% natural', 'Sulfate free', '50 g bar in a paper tube'],
    use: 'Wet the bar and your skin, then lather and massage gently for about 30 seconds. Rinse well and pat dry. Use once or twice a day, follow with moisturizer and wear sunscreen in the daytime. Patch test before first use.',
    ing: 'Add your full ingredient list here.' }
];

/* ===== Blog and rituals ===== */
const POSTS = [
  { id: 'how-to-use-turmeric-soap', cat: 'Rituals', title: 'How to use turmeric soap in your routine', date: 'Nov 6, 2026', mins: 4,
    excerpt: 'A simple four-step way to add the bar to your morning or evening.',
    body: ['A simple routine works best. Here is an easy way to add turmeric soap to your day.', '## Wet your skin', 'Use warm water, not hot. Hot water can leave skin feeling tight and dry.', '## Lather and massage', 'Work the bar between wet hands or directly on your skin. Massage gently for about 30 seconds.', '## Rinse well', 'Rinse until no residue is left, then pat dry with a clean towel.', '## Moisturize and protect', 'Follow with moisturizer. In the daytime, finish with sunscreen.', 'Turmeric can leave a yellow tint on light fabrics and surfaces, so rinse well and keep a towel nearby that you do not mind staining.'] },
  { id: 'understanding-dark-spots', cat: 'Skin basics', title: 'Understanding dark spots', date: 'Nov 1, 2026', mins: 5,
    excerpt: 'What causes dark spots, and the habits that help them fade over time.',
    body: ['Dark spots, also called hyperpigmentation, happen when skin makes extra melanin in one area. Common triggers include sun exposure, breakouts, irritation and hormonal changes.', '## Why sunscreen matters', 'Sun exposure can darken spots and make them last longer. A daily sunscreen is one of the most useful steps in any routine for dark spots.', '## Be gentle', 'Picking or scrubbing at skin can cause new marks. Choose gentle cleansers and give your skin time.', '## Be patient', 'Changes in dark spots usually take weeks or months. If a spot is changing in shape or color, see a dermatologist.'] },
  { id: 'melanin-rich-skincare-habits', cat: 'Skin basics', title: 'Five skincare habits for melanin-rich skin', date: 'Oct 24, 2026', mins: 4,
    excerpt: 'Small, steady habits that keep your skin comfortable and your routine simple.',
    body: ['You do not need a long routine. These five habits cover the basics.', '## Wear sunscreen every day', 'Sunscreen is recommended for every skin tone, and it helps keep dark spots from getting darker.', '## Treat breakouts gently', 'Squeezing a breakout can leave a mark behind. Cleanse gently and leave spots alone.', '## Moisturize', 'Apply moisturizer while skin is still slightly damp so it stays comfortable through the day.', '## Add one product at a time', 'If something causes irritation, you will know which product it was.', '## Stay consistent', 'Give any new routine a few weeks before deciding whether it works for you.'] },
  { id: 'evening-wind-down', cat: 'Rituals', title: 'A five-minute evening ritual', date: 'Oct 15, 2026', mins: 3,
    excerpt: 'Wash off the day and wind down with a short routine you can keep.',
    body: ['Evenings are a good time to slow down. This routine takes about five minutes.', '## Set the mood', 'Dim the lights and put your phone down. Make it a moment that is yours.', '## Cleanse', 'Lather the bar with warm water and take your time. Rinse well.', '## Finish soft', 'Pat dry, apply moisturizer and take a few slow breaths before bed.'] }
];
const RITUALS = [
  { id: 'morning-reset', title: 'Morning reset', time: '3 min', icon: 'sun', need: ['Turmeric soap', 'Warm water', 'Clean towel', 'Moisturizer', 'Sunscreen'],
    steps: ['Wet your skin with warm water.', 'Lather the bar and massage gently for about 30 seconds.', 'Rinse well and pat dry.', 'Apply moisturizer, then finish with sunscreen.'] },
  { id: 'evening-wind-down', title: 'Evening wind-down', time: '5 min', icon: 'moon', need: ['Turmeric soap', 'Warm water', 'Soft towel', 'Moisturizer'],
    steps: ['Dim the lights and put your phone down.', 'Lather the bar with warm water and cleanse slowly.', 'Rinse well and pat dry.', 'Moisturize and take a few slow breaths before bed.'] },
  { id: 'weekend-slow-ritual', title: 'Weekend slow ritual', time: '10 min', icon: 'leaf', need: ['Turmeric soap', 'Warm water', 'Clean towel', 'Moisturizer', 'A favorite playlist'],
    steps: ['Put on something you like and run the water warm.', 'Take two minutes to lather and cleanse, focusing on areas you care about most.', 'Rinse well and pat dry.', 'Apply moisturizer and take your time. This one is for you.'] }
];

/* ===== Static copy ===== */
const FAQS = [
  ['Product', 'How do I use the soap?', 'Wet the bar and your skin, lather and massage gently for about 30 seconds, then rinse well. Use once or twice a day and follow with moisturizer. Wear sunscreen in the daytime.'],
  ['Product', 'Can turmeric stain my skin or towels?', 'Turmeric can leave a faint yellow tint on light fabrics and sinks, and sometimes on skin. Rinse well and keep a darker towel nearby.'],
  ['Product', 'Is it safe for sensitive skin?', 'Patch test first. Lather a small amount on your inner arm, rinse and wait 24 hours. Stop using it if you notice irritation, and talk to your healthcare provider if you have a skin condition.'],
  ['Product', 'How long until I see a difference?', 'Results vary from person to person. Most people use a product consistently for several weeks, along with daily sunscreen, before judging.'],
  ['Subscriptions', 'How does Subscribe & Save work?', `Choose Subscribe & Save on the product page, pick how often you want your bar and save ${SUB_PCT}%. You can skip, change or cancel before the next shipment.`],
  ['Shipping', 'When will my order arrive?', 'Orders ship within 1 to 2 business days. Standard delivery takes 3 to 7 business days in the contiguous US.'],
  ['Shipping', 'Do you offer free shipping?', `Yes. Orders over $${FREE_SHIP} ship free in the contiguous US.`],
  ['Orders', 'Can I return something?', 'Unopened items can be returned within 30 days. Contact us to start a return or exchange.']
];
const POLICIES = {
  shipping: ['Shipping policy', ['Orders ship within 1 to 2 business days of purchase.', `Shipping is free on orders over $${FREE_SHIP} in the contiguous US. Smaller orders ship for ${money(SHIP_FEE)}.`, 'Standard delivery takes 3 to 7 business days. You will receive tracking details by email.']],
  terms: ['Terms of use', ['By using this website you agree to these terms. Product information is provided for general education and is not medical advice.', 'We may update prices, products and policies at any time. Orders are confirmed when payment is accepted.', 'All content on this site belongs to the store owner and may not be copied without permission.']],
  privacy: ['Privacy policy', ['We collect the information you give us at checkout and when you sign up for email, such as your name, address and email address.', 'We use it to fulfill orders, answer questions and send updates you asked for. You can unsubscribe from email at any time.', 'We do not sell your personal information.']],
  refund: ['Refund policy', ['Unopened products can be returned within 30 days of delivery for a refund to your original payment method.', 'To start a return or exchange, contact us with your order number. We will send return instructions.', 'Refunds are issued within 5 to 10 business days after we receive your return.']]
};
const PAGES = [['FAQ', 'faq'], ['Rewards', 'rewards'], ['Track your order', 'tracking'], ['Contact us', 'contact'], ['Our story', 'our-story'], ['Build a set', 'bundle-builder'], ['Take the skin quiz', 'quiz'], ['Rituals', 'rituals'], ['Blog', 'blog'], ['Wholesale', 'wholesale'], ['Join the community', 'community'], ['Meet the team', 'team']];

/* ===== Pricing and shared pieces ===== */
const P = id => PRODUCTS.find(p => p.id === id);
const salePrice = p => SALE_PCT ? +(p.price * (1 - SALE_PCT / 100)).toFixed(2) : p.price;
const subPrice = p => +(salePrice(p) * (1 - SUB_PCT / 100)).toFixed(2);
const unitOf = it => { const p = P(it.pid); let v = it.sub ? subPrice(p) : salePrice(p); if (it.bundle) v = v * (1 - it.bundle / 100); return +v.toFixed(2); };
Object.assign(IC, {
  percent: '<path d="M19 5 5 19"/><circle cx="7.5" cy="7.5" r="2.5"/><circle cx="16.5" cy="16.5" r="2.5"/>',
  cancel: '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>',
  'arrow-l': '<path d="M19 12H5m6-6-6 6 6 6"/>'
});
const SOC = {
  x: '<path fill="currentColor" stroke="none" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
  facebook: '<path fill="currentColor" stroke="none" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>',
  pinterest: '<circle cx="12" cy="12" r="9.500"/><path d="M10.500 18l1.400-6.200M9.500 11.200c0-1.800 1.400-3 3-3 1.900 0 2.900 1.200 2.900 2.700 0 2-1.100 3.300-2.500 3.300-.8 0-1.400-.5-1.600-1"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.500 6.500h.01"/>',
  tiktok: '<path fill="currentColor" stroke="none" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>',
  youtube: '<path fill="currentColor" stroke="none" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>'
};
/* Replace these links with your own social pages */
const SOCIAL = [['X', 'x', 'https://x.com/'], ['Facebook', 'facebook', 'https://www.facebook.com/'], ['Pinterest', 'pinterest', 'https://www.pinterest.com/'], ['Instagram', 'instagram', 'https://www.instagram.com/'], ['TikTok', 'tiktok', 'https://www.tiktok.com/'], ['YouTube', 'youtube', 'https://www.youtube.com/']];
const socialIcon = k => `<svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SOC[k]}</svg>`;

const rawimg = (k, alt, cls = '', pos) => `<img ${cls ? `class="${cls}" ` : ''}src="${IMG[k]}" alt="${esc(alt)}" style="object-position:${pos || IMGPOS[k] || '50% 50%'}">`;
const pimg = (p, i = 0) => rawimg(p.imgs[i], p.name);
const stars = n => `<span class="stars" role="img" aria-label="${n} out of 5">${[1, 2, 3, 4, 5].map(i => `<svg width="16" height="16" viewBox="0 0 24 24" fill="${i <= n ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true">${IC.star}</svg>`).join('')}</span>`;
const priceHtml = p => `<div class="price">${money(salePrice(p))}${SALE_PCT ? `<s>${money(p.price)}</s>` : ''}</div>`;
const head = (eyebrow, title, text, cls = '') => `<div class="sec-head ${cls}">${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}<h2>${title}</h2>${text ? `<p class="muted">${text}</p>` : ''}</div>`;
const pageHead = (title, text, crumb) => `<section class="page-head"><div class="wrap"><div class="crumbs"><a href="#home">Home</a> / ${crumb || esc(title)}</div><h1 style="font-size:clamp(2.2rem,7vw,4rem)">${title}</h1>${text ? `<p class="lead">${text}</p>` : ''}</div></section>`;
const field = (id, label, type = 'text', extra = '') => `<div class="field"><label for="${id}">${label}</label><input id="${id}" name="${id}" type="${type}" ${extra}></div>`;
const MAIN = 'turmeric-soap';
const FREQ_OPTS = ['4', '6', '8'].map(w => `<option value="${w}">Every ${w} weeks</option>`).join('');
let uidN = 0;

/* ===== Product cards (bordered card, purchase options, add button) ===== */
function pcard(p) {
  const id = 'pt' + (++uidN), rv = REVIEWS[p.id] || [];
  const avg = rv.length ? Math.round(rv.reduce((a, x) => a + x.s, 0) / rv.length) : 0;
  return `<article class="pcard" data-pid="${p.id}">${p.best ? '<span class="ctag">#1 Best seller</span>' : ''}
  <a class="pimgw" href="#p-${p.id}" aria-label="${esc(p.name)}">${pimg(p, 0)}${SALE_PCT ? `<span class="seal">${SALE_PCT}%<small>off</small></span>` : ''}</a>${rv.length ? `<div class="rate">${stars(avg)}<span>(${rv.length})</span></div>` : ''}
  <h3 class="pt"><a href="#p-${p.id}">${esc(p.name)}</a></h3><p class="pd">${esc(p.blurb)}</p>
  <div class="popts"><div class="popt-wrap sel"><label class="popt"><input type="radio" name="${id}" value="0" checked><span class="dot"></span>One-time purchase</label></div>
    <div class="popt-wrap"><label class="popt"><input type="radio" name="${id}" value="1"><span class="dot"></span>Autoship (${SUB_PCT}% off)</label><div class="fsel-wrap"><select class="fsel" aria-label="Delivery frequency">${FREQ_OPTS}</select></div></div></div>
  <button class="btn btn-fill full" data-act="card-add" data-pid="${p.id}">Add <i>&bull;</i> ${money(salePrice(p))}</button></article>`;
}
const soonCard = () => `<article class="pcard soon"><span class="eyebrow">Coming soon</span><h3>More rituals on the way</h3><p class="pd" style="flex:none">Join the community list and hear about new products first.</p><a class="btn btn-line sm" href="#community">Get notified</a></article>`;
const setCard = ([n, pct]) => {
  const p = P(MAIN), price = +(salePrice(p) * n * (1 - pct / 100)).toFixed(2);
  return `<article class="pcard"><span class="ctag">Save ${pct}%</span><a class="pimgw" href="#bundle-builder" aria-label="Set of ${n} bars">${pimg(p, 0)}<span class="mult">&times;${n}</span></a>
  <h3 class="pt">Set of ${n} bars</h3><p class="pd">Stock up on ${esc(p.name)} and save ${pct}% on every bar.</p>
  <button class="btn btn-fill full" data-act="set-add" data-n="${n}" data-pct="${pct}">Add <i>&bull;</i> ${money(price)}</button></article>`;
};
const rcard = r => `<article class="pcard"><a class="pimgw icon" href="#ritual-${r.id}" aria-label="${esc(r.title)}">${icon(r.icon, 84)}</a><h3 class="pt">${esc(r.title)}</h3><p class="pd">${esc(r.time)}. ${esc(r.steps[0])}</p><a class="btn btn-line full" href="#ritual-${r.id}">View ritual</a></article>`;
let homeTab = 'soap';
function railBlock(tab) {
  const cards = tab === 'soap' ? pcard(P(MAIN)) + soonCard() : tab === 'sets' ? BUNDLE_TIERS.map(setCard).join('') : RITUALS.map(rcard).join('');
  return `<div class="rail">${cards}</div><div class="prog"><i></i></div>`;
}

/* ===== Home ===== */
function viewHome() {
  const post = POSTS[0];
  const tick = [['Made for melanin-rich skin', 'heart'], ['No bleaching', 'flask'], ['100% natural', 'leaf'], ['Sulfate free', 'drop'], ['Community first', 'user']];
  const row = tick.map(t => `<span>${icon(t[1], 28)}${t[0]}</span>`).join('');
  const goals = [['Shop Turmeric Soap', '#p-' + MAIN, 'hand', '50% 40%'], ['Build a Set', '#bundle-builder', 'board', '88% 50%'], ['Find Your Ritual', '#quiz', 'open', '58% 50%'], ['Try a Ritual', '#rituals', 'hand', '30% 70%']];
  const learn = [['Understanding dark spots', 'What causes them and the habits that help.', '#post-understanding-dark-spots', 'hand', '50% 40%'], ['How to use turmeric soap', 'Four simple steps for your routine.', '#post-how-to-use-turmeric-soap', 'open', '56% 50%'], ['Skincare habits that last', 'Five small habits for melanin-rich skin.', '#post-melanin-rich-skincare-habits', 'board', '86% 50%'], ['An evening wind-down', 'A five-minute ritual to end the day.', '#ritual-evening-wind-down', 'hand', '30% 70%']];
  const badges = [['No bleaching', 'flask'], ['100% natural', 'leaf'], ['Sulfate free', 'drop'], ['For melanin-rich skin', 'heart'], ['Paper tube', 'box']];
  const vids = [['hand', '50% 40%'], ['open', '56% 50%'], ['board', '86% 50%']];
  return `
  <section class="hero"><div class="hero-in">
    ${SALE_PCT ? `<h1 class="hero-h"><span class="h-out">Holiday</span><span class="h-script">Sale</span><span class="h-big">${SALE_PCT}% off</span></h1><p class="h-tag">Turmeric soap + free shipping over $${FREE_SHIP}</p><p class="h-small">Limited time only, while supplies last</p><a class="btn btn-sun" href="#p-${MAIN}">Shop the sale ${icon('arrow', 22, 3)}</a>`
      : `<h1 class="hero-h"><span class="h-big" style="font-size:clamp(3rem,14vw,7rem)">Your daily golden ritual</span></h1><p class="h-tag">Turmeric soap for melanin-rich skin</p><a class="btn btn-sun" href="#p-${MAIN}">Shop turmeric soap ${icon('arrow', 22, 3)}</a>`}
    <div class="fan">${rawimg('open', '')}${rawimg('hand', '')}${rawimg('board', '')}</div></div></section>
  <div class="ticker" aria-hidden="true"><div class="ticker-track">${row}${row}${row}${row}</div></div>
  <section class="goals"><div class="wrap"><div class="goal-grid">${goals.map((g, i) => `<a class="goal g${i + 1}" href="${g[1]}"><h3>${g[0]}</h3>${rawimg(g[2], '', '', g[3])}<span class="go">${icon('arrow', 24)}</span></a>`).join('')}</div></div></section>
  <section class="sect"><div class="wrap hd"><h2>Your daily ritual:<span>simple &amp; golden</span></h2><div class="tabs" role="tablist" aria-label="Browse">${[['soap', 'Soap'], ['sets', 'Sets'], ['rituals', 'Rituals']].map(t => `<button class="tab" role="tab" data-act="home-tab" data-tab="${t[0]}" aria-selected="${t[0] === homeTab}">${t[1]}</button>`).join('')}</div></div><div id="home-rail">${railBlock(homeTab)}</div></section>
  <section class="sect" style="padding-top:0"><div class="wrap narrow hd"><p class="eyebrow">What makes us different</p><h2>&ldquo;Made for melanin-rich skin!&rdquo;</h2><p class="lead">A turmeric soap bar with no bleaching agents, 100% natural ingredients and a gentle lather you can use every day.</p><a class="btn btn-line" href="#p-${MAIN}">Shop turmeric soap</a></div>
    <div class="wrap" style="margin-top:34px"><div class="ri">${rawimg('open', 'Opening the Golden Ritual tube to show the soap bar')}</div></div></section>
  <section class="sect" style="padding-top:0"><div class="wrap narrow hd"><h2>Find your ritual</h2><p class="lead">Tell us a little about your skin and your day. We will suggest a routine to go with your bar.</p><a class="btn btn-line" href="#quiz">Take the quiz</a></div></section>
  <section class="sect" style="padding-top:0"><div class="wrap"><div class="ri-wrap"><div class="ri">${rawimg('board', 'Golden Ritual brand and packaging')}</div><i class="deco d-sun"></i><i class="deco d-sage"></i></div>
    <div class="hd" style="margin-top:64px"><h2>Simple by design</h2></div><div class="ibadges">${badges.map(b => `<div class="ibd"><i>${icon(b[1], 44)}</i>${b[0]}</div>`).join('')}</div></div></section>
  <section class="sect" style="padding-bottom:0"><div class="wrap narrow hd"><p class="eyebrow">You&rsquo;re in good company</p><h2>Join the Golden Ritual community</h2><a class="btn btn-line" href="#community">Join the community</a></div>
    <div class="wrap" style="margin-top:34px"><div class="ri" style="border-radius:var(--r) var(--r) 0 0;aspect-ratio:4/3">${rawimg('hand', 'Golden Ritual turmeric soap in hand', '', '50% 36%')}</div></div></section>
  <section class="subs"><div class="wrap subs-grid"><div class="stack-lg"><h2>Subscribe &amp; save ${SUB_PCT}%!</h2><p class="lead">Keep your bar stocked and enjoy a lower price on every order. Skip, change or cancel whenever you like.</p>
      <ul class="plist"><li>${icon('percent', 30)} Save ${SUB_PCT}% on every order</li><li>${icon('truck', 30)} Free shipping over $${FREE_SHIP}</li><li>${icon('cancel', 30)} No commitment, cancel anytime</li></ul><a class="btn btn-fill full" href="#p-${MAIN}">Subscribe &amp; save ${SUB_PCT}%</a></div>
    <div class="ri">${rawimg('hand', 'Golden Ritual turmeric soap in hand', '', '50% 40%')}</div></div>
    <div id="learn-block"><div class="rail">${learn.map(l => `<a class="lcard" href="${l[2]}"><div class="lc-img">${rawimg(l[3], '', '', l[4])}</div><h3>${l[0]}</h3><p>${l[1]}</p></a>`).join('')}</div><div class="prog"><i></i></div></div><div style="height:48px"></div></section>
  <section class="sect"><div class="wrap feat"><div class="ri">${rawimg('open', 'Opening the Golden Ritual tube to show the soap bar')}</div><div class="stack-lg"><p class="eyebrow">${esc(post.cat)}</p><h2>${esc(post.title)}</h2><p class="lead">${esc(post.excerpt)}</p><div class="row"><a class="btn btn-fill" href="#post-${post.id}">Read blog</a><a class="btn btn-line" href="#blog">All blogs</a></div></div></div></section>
  <section class="sect" style="padding-top:0"><div class="wrap hd"><h2>See Golden Ritual in action!</h2></div>
    <div class="rail cover" id="cover">${vids.map(v => `<div class="vcard">${rawimg(v[0], 'Golden Ritual turmeric soap', 'v', v[1])}<div class="vf">${rawimg('hand', '', '', '50% 22%')}Turmeric soap</div></div>`).join('')}</div>
    <div class="arrows"><button class="arr" data-act="rail-prev" aria-label="Previous">${icon('arrow-l', 26, 2.5)}</button><button class="arr" data-act="rail-next" aria-label="Next">${icon('arrow', 26, 2.5)}</button></div></section>`;
}

/* ===== Shop ===== */
function viewCollection() {
  return `${pageHead('Shop all', 'Everything we make, all in one place.')}<section class="sect" style="padding-top:20px"><div class="wrap"><div class="cgrid">${PRODUCTS.map(pcard).join('')}${soonCard()}</div></div></section>
    <section class="band band-soft"><div class="wrap split"><div class="stack-lg"><h2>Not sure what fits?</h2><p class="lead">Take the three-question quiz or build a set and save up to ${BUNDLE_TIERS[BUNDLE_TIERS.length - 1][1]}%.</p></div><div class="row"><a class="btn btn-fill" href="#quiz">Take the quiz</a><a class="btn btn-line" href="#bundle-builder">Build a set</a></div></div></section>`;
}

/* ===== Product page ===== */
let pd = null;
const REVIEWS = {};
let rvStar = 5;
const GAL = [{ n: 'Tube in hand', k: 'hand' }, { n: 'Inside the tube', k: 'open' }, { n: 'Brand and packaging', k: 'board' }, { n: 'How to use' }];
function pdpHtml() {
  const p = P(pd.pid);
  const unit = pd.sub ? subPrice(p) : salePrice(p);
  const g = GAL[pd.img];
  const main = g.k ? rawimg(g.k, `${p.name}: ${g.n}`) : `<div class="gpanel"><h3>How to use</h3><p>${esc(p.use)}</p><ul>${p.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul></div>`;
  return `<div class="gal"><div class="gal-main">${main}</div><div class="thumbs">${GAL.map((v, i) => `<button class="thumb" data-act="thumb" data-i="${i}" aria-pressed="${i === pd.img}" aria-label="${v.n}">${v.k ? rawimg(v.k, '') : '<span>How to use</span>'}</button>`).join('')}</div></div>
  <div class="buy"><div class="stack"><p class="eyebrow" style="color:var(--accent)">${esc(p.tagline)}</p><h1>${esc(p.name)}</h1><p class="muted">${esc(p.blurb)}</p>
    <div class="bigprice">${money(unit)}${SALE_PCT || pd.sub ? `<s>${money(p.price)}</s>` : ''}<span class="fine" style="margin-left:10px;font-family:var(--font-body);font-weight:400">${esc(p.size)}</span></div></div>
    <ul class="perks" style="gap:8px">${p.bullets.map(b => `<li style="font-weight:500">${icon('check', 18)} ${esc(b)}</li>`).join('')}</ul>
    <div class="opt-group"><span class="opt-label">Purchase type</span><div class="ptypes" role="radiogroup" aria-label="Purchase type">
      <button class="ptype" role="radio" aria-checked="${!pd.sub}" data-act="ptype" data-sub="0"><span><b>One-time purchase</b><small>Ships once</small></span><b>${money(salePrice(p))}</b></button>
      <button class="ptype" role="radio" aria-checked="${pd.sub}" data-act="ptype" data-sub="1"><span><b>Subscribe &amp; save ${SUB_PCT}%</b><small>Skip or cancel anytime</small></span><b>${money(subPrice(p))}</b></button></div>
      ${pd.sub ? `<div class="field"><label for="freq">Deliver every</label><select id="freq" data-change="freq">${[['4', '4 weeks'], ['6', '6 weeks'], ['8', '8 weeks']].map(o => `<option value="${o[0]}" ${o[0] === pd.freq ? 'selected' : ''}>${o[1]}</option>`).join('')}</select></div>` : ''}</div>
    <div class="buyrow"><div class="qty" role="group" aria-label="Quantity"><button data-act="pqty" data-d="-1" aria-label="Decrease quantity">${icon('minus', 18)}</button><output>${pd.qty}</output><button data-act="pqty" data-d="1" aria-label="Increase quantity">${icon('plus', 18)}</button></div>
      <button class="btn btn-accent" data-act="pdp-add">Add to cart &middot; ${money(unit * pd.qty)}</button></div>
    <div class="assure"><span>${icon('truck', 18)} Free shipping over $${FREE_SHIP}</span><span>${icon('repeat', 18)} Cancel subscription anytime</span></div></div>
  <div class="buybar"><div><b>${money(unit * pd.qty)}</b><div class="fine">${esc(p.name)}</div></div><button class="btn btn-accent sm" data-act="pdp-add">Add to cart</button></div>`;
}
function reviewsHtml(id) {
  const r = REVIEWS[id] || [];
  const avg = r.length ? r.reduce((a, x) => a + x.s, 0) / r.length : 0;
  return `<div class="row-between"><h2 style="font-size:1.8rem">Reviews</h2>${r.length ? `<span class="row">${stars(Math.round(avg))}<b>${avg.toFixed(1)}</b><span class="fine">(${r.length})</span></span>` : ''}</div>
  ${r.length ? r.map(x => `<div class="rev">${stars(x.s)}<b>${esc(x.n)}</b><p>${esc(x.t)}</p></div>`).join('') : '<p class="muted" style="margin-top:12px">No reviews yet. Connect a review app to show real customer reviews here. You can try the form to see how a new review appears.</p>'}`;
}
const ritualCard = r => `<a class="pc" href="#ritual-${r.id}"><div class="thumbp">${icon(r.icon, 64)}</div><h3>${esc(r.title)}</h3><span class="meta-line">${esc(r.time)}</span></a>`;
function viewProduct(id) {
  const p = P(id);
  if (!p) return view404();
  pd = { pid: id, variant: p.variants[0], sub: false, freq: '4', qty: 1, img: 0 };
  return `<section class="band-surface" style="padding-block:24px 64px"><div class="wrap"><div class="crumbs"><a href="#home">Home</a> / <a href="#shop-all">Shop all</a> / ${esc(p.name)}</div><div class="pdp" id="pdp">${pdpHtml()}</div>
    <div style="margin-top:48px;max-width:760px">
      <details class="acc" open><summary>Details</summary><div class="acc-body">${esc(p.blurb)}<ul>${p.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul></div></details>
      <details class="acc"><summary>How to use</summary><div class="acc-body">${esc(p.use)}<p style="margin-top:8px">Turmeric can leave a yellow tint on light fabrics, so rinse well.</p></div></details>
      <details class="acc"><summary>Ingredients</summary><div class="acc-body">${esc(p.ing)}<p class="fine" style="margin-top:8px">Placeholder text. Add your full ingredient list.</p></div></details>
      <details class="acc"><summary>Shipping and returns</summary><div class="acc-body">Free shipping over $${FREE_SHIP}. Unopened items can be returned within 30 days. See the <a href="#policy-shipping">shipping policy</a> and <a href="#policy-refund">refund policy</a>.</div></details></div></div></section>
  <section class="band"><div class="wrap">${head('', 'Build a ritual around it')}<div class="postgrid">${RITUALS.map(ritualCard).join('')}</div></div></section>
  <section class="band band-soft"><div class="wrap two"><div id="reviews">${reviewsHtml(id)}</div>
    <form class="form card" data-form="review" data-pid="${id}"><h3>Write a review</h3><div class="field"><span class="opt-label">Rating</span><div class="row" id="rv-stars" role="group" aria-label="Rating">${starPicker()}</div></div>${field('rv-name', 'Name')}<div class="field"><label for="rv-text">Review</label><textarea id="rv-text" name="text" required></textarea></div><button class="btn btn-dark" type="submit">Post review</button></form></div></section>`;
}
function starPicker() {
  return [1, 2, 3, 4, 5].map(i => `<button type="button" class="starbtn" data-act="star" data-s="${i}" aria-label="${i} star${i > 1 ? 's' : ''}" aria-pressed="${i <= rvStar}"><svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true">${IC.star}</svg></button>`).join('');
}

/* ===== Quiz ===== */
const QUIZ = [
  { k: 'goal', q: 'What is your main skin goal?', o: [['spots', 'Dark spots', 'Routine support for the look of dark spots'], ['tone', 'Even-looking tone', ''], ['glow', 'Everyday glow', ''], ['clean', 'Simple, gentle cleansing', '']] },
  { k: 'skin', q: 'How does your skin usually feel?', o: [['dry', 'Dry or tight'], ['oily', 'Oily'], ['combo', 'Combination'], ['sensitive', 'Sensitive']] },
  { k: 'time', q: 'When will you use your ritual?', o: [['morning', 'Morning'], ['evening', 'Evening'], ['both', 'Morning and evening']] }
];
const TIPS = {
  goal: { spots: 'Be consistent for several weeks and wear sunscreen every day. Sun exposure can darken spots again.', tone: 'Keep your routine simple and give it a few weeks before judging results.', glow: 'Pair your bar with plenty of water and a moisturizer you like.', clean: 'One bar at your sink or shower is all you need.' },
  skin: { dry: 'Moisturize while your skin is still slightly damp.', oily: 'Use once or twice a day and rinse well.', combo: 'Lather where you need it most and rinse well.', sensitive: 'Patch test first and start with once a day.' },
  time: { morning: 'Finish your morning ritual with sunscreen.', evening: 'Cleanse at night to wash off the day, then moisturize.', both: 'Using it morning and night? A set of bars keeps you stocked.' }
};
let qz = { i: 0, a: {} };
function quizHtml() {
  if (qz.i >= QUIZ.length) {
    const a = qz.a, p = P(MAIN);
    const tips = [TIPS.goal[a.goal], TIPS.skin[a.skin], TIPS.time[a.time]];
    return `<div class="bar"><i style="width:100%"></i></div><p class="eyebrow">Your match</p><h2>Start with ${esc(p.name)}</h2>
    <div class="result"><a class="art" href="#p-${p.id}">${pimg(p, 0)}</a><div><a class="pname" href="#p-${p.id}">${esc(p.name)}</a><div class="psub">${esc(p.size)}</div>${priceHtml(p)}</div><button class="btn btn-accent sm" data-act="quick-add" data-pid="${p.id}">Add to cart</button></div>
    <div class="card"><h3>Your ritual</h3><ol class="steps">${tips.map(t => `<li>${esc(t)}</li>`).join('')}</ol></div>
    <div class="row">${a.time === 'both' ? '<a class="btn btn-dark" href="#bundle-builder">Build a set</a>' : ''}<button class="btn btn-line" data-act="quiz-restart">Retake quiz</button></div>
    <p class="fine">Suggestions are general and not medical advice. Patch test before first use and talk to your healthcare provider about any skin condition.</p>`;
  }
  const q = QUIZ[qz.i];
  return `<div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="${QUIZ.length}" aria-valuenow="${qz.i}"><i style="width:${qz.i / QUIZ.length * 100}%"></i></div><p class="eyebrow">Question ${qz.i + 1} of ${QUIZ.length}</p><h2>${q.q}</h2>
  <div class="opts">${q.o.map(o => `<button class="opt" data-act="quiz-pick" data-v="${o[0]}"><span>${o[1]}${o[2] ? `<small>${o[2]}</small>` : ''}</span>${icon('arrow', 18)}</button>`).join('')}</div>${qz.i ? '<div><button class="link" data-act="quiz-back">Back</button></div>' : ''}`;
}
function viewQuiz() {
  qz = { i: 0, a: {} };
  return `${pageHead('Find your ritual', 'Three questions, then a simple routine to go with your bar.', 'Skin quiz')}<section class="band"><div class="wrap"><div class="quiz-box" id="quiz">${quizHtml()}</div></div></section>`;
}

/* ===== Bundle builder ===== */
let bd = {};
const bdCount = () => Object.values(bd).reduce((a, b) => a + b, 0);
const bdPct = () => BUNDLE_TIERS.reduce((pct, [n, p]) => bdCount() >= n ? p : pct, 0);
function bundleHtml() {
  const n = bdCount(), pct = bdPct();
  const next = BUNDLE_TIERS.find(([c]) => n < c);
  const sub = Object.entries(bd).reduce((s, [id, q]) => s + salePrice(P(id)) * q, 0);
  const disc = sub * pct / 100;
  const top = BUNDLE_TIERS[BUNDLE_TIERS.length - 1][0];
  return `<div class="bundle-list">${PRODUCTS.map(p => { const q = bd[p.id] || 0; return `<div class="bcard ${q ? 'on' : ''}"><a class="art" href="#p-${p.id}" aria-label="${esc(p.name)}">${pimg(p, 0)}</a><div><b>${esc(p.name)}</b><div class="psub">${esc(p.size)}</div>${priceHtml(p)}</div>
    ${q ? `<div class="qty" role="group" aria-label="Quantity of ${esc(p.name)}"><button data-act="bundle-step" data-pid="${p.id}" data-d="-1" aria-label="Remove one">${icon('minus', 18)}</button><output>${q}</output><button data-act="bundle-step" data-pid="${p.id}" data-d="1" aria-label="Add one">${icon('plus', 18)}</button></div>` : `<button class="btn btn-line sm" data-act="bundle-step" data-pid="${p.id}" data-d="1">Add to set</button>`}</div>`; }).join('')}</div>
  <aside class="bsum"><h3>Your set</h3><div class="bar"><i style="width:${Math.min(100, n / top * 100)}%"></i></div><div class="tiers">${BUNDLE_TIERS.map(([c, p]) => `<span>${c}+ bars: ${p}% off</span>`).join('')}</div>
    <p class="fine">${next ? `Add ${next[0] - n} more bar${next[0] - n > 1 ? 's' : ''} for ${next[1]}% off.` : `You unlocked the best tier: ${pct}% off.`}</p>
    ${n ? Object.entries(bd).map(([id, q]) => `<div class="line-item"><span>${q} &times; ${esc(P(id).name)}</span><span>${money(salePrice(P(id)) * q)}</span></div>`).join('') : `<p class="muted">Choose at least ${BUNDLE_TIERS[0][0]} bars to start saving.</p>`}
    <div class="tot"><span>Subtotal</span><span>${money(sub)}</span></div><div class="tot"><span>Set savings</span><span>-${money(disc)}</span></div><div class="tot big"><span>Total</span><span>${money(sub - disc)}</span></div>
    <button class="btn btn-accent full" data-act="bundle-add" ${n < BUNDLE_TIERS[0][0] ? 'disabled' : ''}>Add set to cart</button></aside>`;
}
function viewBundle() {
  bd = {};
  return `${pageHead('Build a set', `Stock up on ${BUNDLE_TIERS[0][0]} or more bars and save up to ${BUNDLE_TIERS[BUNDLE_TIERS.length - 1][1]}%.`, 'Build a set')}<section class="band" style="padding-top:32px"><div class="wrap bundle" id="bundle">${bundleHtml()}</div></section>`;
}

/* ===== Blog and rituals ===== */
const postBody = body => body.map(b => b.startsWith('## ') ? `<h2>${esc(b.slice(3))}</h2>` : `<p>${esc(b)}</p>`).join('');
const postCard = x => `<a class="pc" href="#post-${x.id}"><div class="thumbp">${icon(x.cat === 'Rituals' ? 'spark' : 'leaf', 64)}</div><span class="eyebrow" style="color:var(--accent)">${esc(x.cat)}</span><h3>${esc(x.title)}</h3><p class="muted">${esc(x.excerpt)}</p><span class="meta-line">${esc(x.date)} &middot; ${x.mins} min read</span></a>`;
function viewBlog() {
  return `${pageHead('Blog', 'Skin basics, simple rituals and how to get the most from your bar.')}<section class="band" style="padding-top:32px"><div class="wrap"><div class="chips" style="margin-bottom:24px" id="blog-chips">${['All', ...new Set(POSTS.map(x => x.cat))].map((c, i) => `<button class="chip" data-act="blog-chip" data-c="${c}" aria-pressed="${i === 0}">${c}</button>`).join('')}</div><div class="postgrid" id="posts">${POSTS.map(postCard).join('')}</div></div></section>`;
}
function viewPost(id) {
  const x = POSTS.find(p => p.id === id);
  if (!x) return view404();
  const more = POSTS.filter(p => p.id !== id).slice(0, 3);
  return `<section class="band-surface" style="padding-block:32px 64px"><div class="wrap"><div class="crumbs"><a href="#home">Home</a> / <a href="#blog">Blog</a> / ${esc(x.cat)}</div><div class="prose"><p class="eyebrow" style="color:var(--accent)">${esc(x.cat)}</p><h1 style="font-size:clamp(2rem,6vw,3.4rem)">${esc(x.title)}</h1><p class="meta-line">${esc(x.date)} &middot; ${x.mins} min read</p>${postBody(x.body)}
    <div class="notice">Information here is general and not medical advice. Talk to a dermatologist or your healthcare provider about any skin concern.</div><div class="row"><a class="btn btn-accent" href="#p-${MAIN}">Shop turmeric soap</a><a class="btn btn-line" href="#blog">More articles</a></div></div></div></section>
  <section class="band band-soft"><div class="wrap">${head('', 'Keep reading')}<div class="postgrid">${more.map(postCard).join('')}</div></div></section>`;
}
function viewRituals() {
  return `${pageHead('Rituals', 'Short routines that turn washing up into a moment for yourself.')}<section class="band" style="padding-top:32px"><div class="wrap"><div class="postgrid">${RITUALS.map(ritualCard).join('')}</div></div></section>`;
}
function viewRitual(id) {
  const r = RITUALS.find(x => x.id === id);
  if (!r) return view404();
  const p = P(MAIN);
  return `${pageHead(esc(r.title), esc(r.time), `<a href="#rituals">Rituals</a> / ${esc(r.title)}`)}<section class="band"><div class="wrap two"><div class="stack-lg"><h2 style="font-size:1.6rem">What you need</h2><ul class="recipe-list">${r.need.map(n => `<li><span>${esc(n)}</span>${icon('check', 18)}</li>`).join('')}</ul></div>
    <div class="stack-lg"><h2 style="font-size:1.6rem">Steps</h2><ol class="steps">${r.steps.map(s => `<li>${esc(s)}</li>`).join('')}</ol>
      <div class="result"><a class="art" href="#p-${p.id}">${pimg(p, 0)}</a><div><span class="eyebrow">Used in this ritual</span><br><a class="pname" href="#p-${p.id}">${esc(p.name)}</a>${priceHtml(p)}</div><button class="btn btn-line sm" data-act="quick-add" data-pid="${p.id}">Add to cart</button></div></div></div></section>`;
}

/* ===== Content pages ===== */
function viewAbout() {
  return `${pageHead('Our story', 'Why we started, and what we care about.')}<section class="band"><div class="wrap split"><div class="prose"><p>Golden Ritual makes turmeric soap for melanin-rich skin. Every bar is made without bleaching agents, with natural ingredients and no sulfates.</p><p>Replace this text with your own story. Tell people who you are, what problem you set out to solve and what makes your soap different.</p><div class="row"><a class="btn btn-accent" href="#p-${MAIN}">Shop turmeric soap</a><a class="btn btn-line" href="#team">Meet the team</a></div></div>
    <div class="art-box">${rawimg('board', 'Golden Ritual brand and packaging')}</div></div></section>
  <section class="band band-soft"><div class="wrap">${head('', 'What we stand for')}<div class="cards3">${[['Made for melanin-rich skin', 'Designed with your skin in mind from the first idea.', 'heart'], ['Simple and natural', 'Short ingredient lists you can read and understand.', 'leaf'], ['Community first', 'We build with the people who use our products.', 'shield']].map(c => `<div class="card"><span style="color:var(--accent)">${icon(c[2], 32)}</span><h3>${c[0]}</h3><p class="muted">${c[1]}</p></div>`).join('')}</div></div></section>`;
}
function viewTeam() {
  return `${pageHead('Meet the team', 'The people behind the bar.')}<section class="band"><div class="wrap"><div class="cards3" style="grid-template-columns:repeat(auto-fill,minmax(220px,1fr))">${[['Founder', 'FN'], ['Product', 'PR'], ['Community', 'CM'], ['Customer care', 'CC']].map(m => `<div class="card"><div class="avatar" aria-hidden="true">${m[1]}</div><h3>Team member</h3><p class="muted">${m[0]}</p><p class="fine">Add a name, photo and short bio.</p></div>`).join('')}</div></div></section>`;
}
function viewFaq() {
  const cats = ['All', ...new Set(FAQS.map(f => f[0]))];
  return `${pageHead('Frequently asked questions', 'Quick answers about the soap, orders and shipping.', 'FAQ')}<section class="band" style="padding-top:32px"><div class="wrap"><div class="chips" style="margin-bottom:20px">${cats.map((c, i) => `<button class="chip" data-act="faq-chip" data-c="${c}" aria-pressed="${i === 0}">${c}</button>`).join('')}</div><div style="max-width:780px" id="faqs">${faqHtml('All')}</div>
    <p class="muted" style="margin-top:32px">Still need help? <a href="#contact">Contact us</a>.</p></div></section>`;
}
const faqHtml = c => FAQS.filter(f => c === 'All' || f[0] === c).map(f => `<details class="acc"><summary>${esc(f[1])}</summary><div class="acc-body">${esc(f[2])}</div></details>`).join('');
function viewContact() {
  return `${pageHead('Contact us', 'Questions about an order or the soap? Send a note and we will reply within two business days.')}<section class="band"><div class="wrap two"><form class="form" data-form="contact">${field('c-name', 'Name', 'text', 'required')}${field('c-email', 'Email', 'email', 'required')}<div class="field"><label for="c-topic">Topic</label><select id="c-topic" name="topic"><option>Order question</option><option>Product question</option><option>Return or exchange</option><option>Something else</option></select></div><div class="field"><label for="c-msg">Message</label><textarea id="c-msg" name="msg" required></textarea></div><button class="btn btn-accent" type="submit">Send message</button></form>
    <div class="stack-lg"><div class="card"><h3>Start a return or exchange</h3><p class="muted">Choose "Return or exchange" as the topic and include your order number.</p></div><div class="card"><h3>Track an order</h3><p class="muted">Have your order number and email ready.</p><a class="btn btn-line sm" href="#tracking">Track your order</a></div></div></div></section>`;
}
function viewRewards() {
  return `${pageHead('Rewards', 'Earn points on every order and trade them for savings.')}<section class="band"><div class="wrap">${head('', 'How it works')}<div class="cards3">${[['Join', 'Create a free account to start earning.', 'user'], ['Earn', 'Collect 1 point for every $1 you spend.', 'star'], ['Redeem', 'Trade 100 points for $5 off a future order.', 'bag']].map(c => `<div class="card"><span style="color:var(--accent)">${icon(c[2], 32)}</span><h3>${c[0]}</h3><p class="muted">${c[1]}</p></div>`).join('')}</div></div></section>
  <section class="band band-soft"><div class="wrap">${head('', 'Reward tiers')}<div class="scroll-x"><table class="table"><thead><tr><th>Tier</th><th>Points needed</th><th>Perks</th></tr></thead><tbody><tr><td>Member</td><td>0</td><td>Earn 1 point per $1</td></tr><tr><td>Insider</td><td>200</td><td>Birthday gift, early sale access</td></tr><tr><td>VIP</td><td>500</td><td>Free shipping on every order</td></tr></tbody></table></div><p class="fine" style="margin-top:12px">Sample program. Edit the rules to match your own rewards app.</p><div style="margin-top:24px"><a class="btn btn-accent" href="#account">Create account</a></div></div></section>`;
}
function viewTracking() {
  return `${pageHead('Track your order', 'Enter your order number and email to see where your package is.')}<section class="band"><div class="wrap two"><form class="form" data-form="tracking">${field('t-order', 'Order number', 'text', 'required placeholder="GR1234"')}${field('t-email', 'Email', 'email', 'required')}<button class="btn btn-accent" type="submit">Track order</button></form><div id="track-out"><p class="muted">Tracking details will appear here.</p></div></div></section>`;
}
function viewWholesale() {
  return `${pageHead('Wholesale', 'Carry Golden Ritual in your store, spa or salon.')}<section class="band"><div class="wrap two"><div class="prose"><p>Tell us about your business and we will send pricing and minimums.</p><ul><li>Volume pricing</li><li>Display and marketing assets</li><li>Dedicated account support</li></ul></div><form class="form" data-form="wholesale">${field('w-biz', 'Business name', 'text', 'required')}${field('w-name', 'Your name', 'text', 'required')}${field('w-email', 'Email', 'email', 'required')}${field('w-site', 'Website', 'text')}<div class="field"><label for="w-msg">Tell us about your business</label><textarea id="w-msg" name="msg"></textarea></div><button class="btn btn-accent" type="submit">Request pricing</button></form></div></section>`;
}
function viewCareers() {
  return `${pageHead('Careers', 'Help us make skincare simpler.')}<section class="band"><div class="wrap two"><div class="prose"><h2>Open roles</h2><p class="muted">There are no open roles listed right now. Send your details and we will keep them on file.</p></div><form class="form" data-form="careers">${field('r-name', 'Name', 'text', 'required')}${field('r-email', 'Email', 'email', 'required')}${field('r-link', 'Portfolio or LinkedIn link', 'text')}<div class="field"><label for="r-msg">What would you like to work on?</label><textarea id="r-msg" name="msg"></textarea></div><button class="btn btn-accent" type="submit">Send details</button></form></div></section>`;
}
function viewCommunity() {
  return `${pageHead('Join the community', 'Rituals, routine tips and first access to new products.', 'Community')}<section class="band"><div class="wrap two"><div class="stack-lg"><ul class="perks">${['Weekly rituals and routine ideas', 'First look at new products', 'Members-only sales', 'A friendly group to share your routine with'].map(t => `<li>${icon('check')} ${t}</li>`).join('')}</ul></div><form class="form card" data-form="community"><h3>Count me in</h3>${field('m-name', 'First name', 'text', 'required')}${field('m-email', 'Email', 'email', 'required')}<button class="btn btn-accent" type="submit">Join the community</button></form></div></section>`;
}
function viewPolicy(slug) {
  const x = POLICIES[slug];
  if (!x) return view404();
  return `${pageHead(x[0], '', x[0])}<section class="band"><div class="wrap"><div class="prose"><div class="notice">Sample policy text. Replace it with your own before you launch.</div>${x[1].map(t => `<p>${esc(t)}</p>`).join('')}</div></div></section>`;
}
let acctTab = 'in';
function acctHtml() {
  return `<div class="chips" role="tablist"><button class="chip" role="tab" data-act="acct-tab" data-t="in" aria-pressed="${acctTab === 'in'}">Sign in</button><button class="chip" role="tab" data-act="acct-tab" data-t="up" aria-pressed="${acctTab === 'up'}">Create account</button></div>
  <form class="form" data-form="account">${acctTab === 'up' ? field('a-name', 'Name', 'text', 'required') : ''}${field('a-email', 'Email', 'email', 'required')}${field('a-pass', 'Password', 'password', 'required minlength="6" autocomplete="off"')}<button class="btn btn-accent" type="submit">${acctTab === 'in' ? 'Sign in' : 'Create account'}</button></form>`;
}
function viewAccount() {
  acctTab = 'in';
  return `${pageHead('Account', 'Sign in to see orders, manage subscriptions and track rewards.')}<section class="band"><div class="wrap"><div class="stack-lg" id="acct" style="max-width:560px">${acctHtml()}</div></div></section>`;
}
function view404() {
  return `<section class="band"><div class="wrap center stack-lg" style="justify-items:center"><p class="eyebrow">Page not found</p><h1>Nothing here</h1><p class="muted">The page you wanted may have moved.</p><a class="btn btn-accent" href="#home">Back to home</a></div></section>`;
}

/* ===== Cart state ===== */
let cart = [];
let promo = null;
const CART_KEY = 'gr-cart-2';
try { const s = JSON.parse(localStorage.getItem(CART_KEY) || '[]'); if (Array.isArray(s)) cart = s.filter(i => P(i.pid) && i.qty > 0); } catch (e) { cart = []; }
const saveCart = () => { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ } };
const keyOf = it => `${it.pid}|${it.sub ? it.freq : '-'}|${it.bundle || 0}`;
const cartCount = () => cart.reduce((a, i) => a + i.qty, 0);
const FIRST_CODE = Object.keys(CODES)[0];
function totals() {
  const sub = cart.reduce((s, i) => s + unitOf(i) * i.qty, 0);
  const disc = promo ? sub * CODES[promo] / 100 : 0;
  const net = sub - disc;
  const ship = cart.length ? (net >= FREE_SHIP ? 0 : SHIP_FEE) : 0;
  return { sub, disc, net, ship, total: net + ship };
}
function addToCart(pid, qty = 1, o = {}) {
  const it = { pid, qty, sub: !!o.sub, freq: o.freq || '4', bundle: o.bundle || 0 };
  const hit = cart.find(c => keyOf(c) === keyOf(it));
  if (hit) hit.qty += qty; else cart.push(it);
  saveCart(); updateBadge(); openDrawer();
}
function updateBadge() {
  const b = $('#cart-count'); if (!b) return;
  const n = cartCount(); b.textContent = n; b.hidden = n === 0;
}

/* ===== Toast ===== */
let toastT;
function toast(msg) {
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ===== Header, footer, floating offer ===== */
function renderTop() {
  const ann = $('#ann');
  ann.outerHTML = `<a class="ann" id="ann" href="#p-${MAIN}">${SALE_PCT ? `Holiday sale: ${SALE_PCT}% off turmeric soap` : `Free shipping over $${FREE_SHIP}`} ${icon('arrow', 18, 2.5)}</a>`;
  const mega = (id, a, b, feat) => `<div class="mega" id="mega-${id}"><div class="mega-grid"><div><h4>${a[0]}</h4>${a[1].map(l => `<a class="ml" href="${l[1]}">${l[0]}</a>`).join('')}</div><div><h4>${b[0]}</h4>${b[1].map(l => `<a class="ml" href="${l[1]}">${l[0]}</a>`).join('')}</div>
    <a class="mega-feat" href="${feat[0]}">${rawimg(feat[1], '', '', feat[4])}<span><b style="font-family:var(--f);font-size:1.1rem;display:block;text-transform:uppercase">${feat[2]}</b><span class="muted" style="font-size:15px">${feat[3]}</span></span></a></div></div>`;
  $('#hdr').innerHTML = `<div class="hdr-in"><div class="bar-pill">
    <div class="bp-l"><button class="ib hamb" data-act="mnav" aria-label="Open menu" aria-expanded="false" aria-controls="mnav">${icon('menu', 30, 3)}</button>
      <nav class="nav" aria-label="Main"><button class="nbtn" data-act="mega" data-m="shop" aria-expanded="false" aria-controls="mega-shop">Shop ${icon('chev', 14, 3)}</button><button class="nbtn" data-act="mega" data-m="learn" aria-expanded="false" aria-controls="mega-learn">Learn ${icon('chev', 14, 3)}</button><a class="nbtn" href="#blog">Blog</a><a class="nbtn" href="#rituals">Rituals</a></nav></div>
    <a class="logo" href="#home" aria-label="${BRAND} home"><img src="${IMG.logoDark}" alt="${BRAND}"></a>
    <div class="bp-r"><button class="ib ring" data-act="search-open" aria-label="Search">${icon('search', 22, 2.5)}</button><a class="ib acct" href="#account" aria-label="Account">${icon('user', 24, 2.5)}</a><button class="ib" data-act="cart-open" aria-label="Open cart">${icon('bag', 26, 2.5)}<span class="cnt" id="cart-count" hidden>0</span></button></div></div>
  ${mega('shop', ['Shop', [['Shop all', '#shop-all'], ['Turmeric soap', '#p-' + MAIN], ['Build a set', '#bundle-builder']]], ['Find your fit', [['Skin quiz', '#quiz'], ['Rituals', '#rituals']]], ['#p-' + MAIN, 'hand', 'Turmeric Soap', `${money(salePrice(P(MAIN)))} &middot; For melanin-rich skin`, '50% 40%'])}
  ${mega('learn', ['Learn', [['Our story', '#our-story'], ['Meet the team', '#team'], ['Join the community', '#community']]], ['Read', [['Blog', '#blog'], ['Rituals', '#rituals'], ['FAQ', '#faq']]], ['#our-story', 'board', 'Our story', 'Why we make it the way we do', '86% 50%'])}
  <div class="mnav" id="mnav">
    <details><summary>Shop ${icon('chev', 18, 3)}</summary><div class="sub"><a href="#shop-all">Shop all</a><a href="#p-${MAIN}">Turmeric soap</a><a href="#bundle-builder">Build a set</a><a href="#quiz">Skin quiz</a></div></details>
    <details><summary>Learn ${icon('chev', 18, 3)}</summary><div class="sub"><a href="#our-story">Our story</a><a href="#team">Meet the team</a><a href="#community">Join the community</a><a href="#faq">FAQ</a></div></details>
    <a href="#blog">Blog</a><a href="#rituals">Rituals</a><a href="#account">Account</a></div></div>`;
  updateBadge();
}
let ctaGone = false;
function renderCta() {
  const c = $('#cta');
  c.innerHTML = `<button class="cta-go" data-act="cta-go">Claim ${CODES[FIRST_CODE]}% off</button><button class="cta-x" data-act="cta-close" aria-label="Dismiss offer">${icon('close', 20, 3)}</button>`;
  c.hidden = ctaGone;
}
function renderFooter() {
  const shop = [['Shop all', 'shop-all'], ['Turmeric soap', 'p-' + MAIN], ['Build a set', 'bundle-builder'], ['Skin quiz', 'quiz']];
  const learn = [['Our story', 'our-story'], ['Meet the team', 'team'], ['Rituals', 'rituals'], ['Blog', 'blog'], ['Join the community', 'community'], ['FAQ', 'faq']];
  const sup = [['Rewards', 'rewards'], ['Contact us', 'contact'], ['Careers', 'careers'], ['Wholesale', 'wholesale'], ['Track your order', 'tracking'], ['Start a return or exchange', 'contact']];
  const lk = l => `<a href="#${l[1]}">${l[0]}</a>`;
  const groups = [['Shop', shop], ['Learn', learn], ['Support', sup]];
  $('#footer').innerHTML = `<div class="wrap"><div class="f-sign" id="signup"><h2>Join the list and get ${CODES[FIRST_CODE]}% off your first order</h2>
      <form class="signup" data-form="newsletter"><input id="nl-email" name="email" type="email" required placeholder="Email address" aria-label="Email address"><button class="btn btn-inv" type="submit">Sign up</button></form>
      <div class="social">${SOCIAL.map(s => `<a href="${s[2]}" target="_blank" rel="noopener noreferrer" aria-label="${s[0]}">${socialIcon(s[1])}</a>`).join('')}</div></div>
    <div class="f-acc">${groups.map(g => `<details><summary>${g[0]}</summary><div class="sub">${g[1].map(lk).join('')}</div></details>`).join('')}</div>
    <div class="f-cols">${groups.map(g => `<div><h4>${g[0]}</h4>${g[1].map(lk).join('')}</div>`).join('')}</div>
    <div class="f-fda"><h3>Good to know</h3><p>Information on this site is general and not medical advice. Results vary. Patch test before first use and talk to your healthcare provider about any skin condition.</p></div></div>
    <div class="f-strip"><div class="links"><a href="#policy-shipping">Shipping Policy</a><a href="#policy-terms">Terms Of Use</a><a href="#policy-privacy">Privacy Policy</a><a href="#policy-refund">Refund Policy</a></div><p>&copy; 2026 ${BRAND}</p></div>`;
}

/* ===== Rails (carousels) ===== */
function syncRail(r) {
  const par = r.parentElement;
  const prog = par && Array.from(par.children).find(c => c.classList.contains('prog'));
  if (prog) {
    const fits = r.scrollWidth <= r.clientWidth + 2;
    prog.hidden = fits;
    if (!fits) { const i = prog.firstElementChild; i.style.width = (r.clientWidth / r.scrollWidth * 100) + '%'; i.style.marginLeft = (r.scrollLeft / r.scrollWidth * 100) + '%'; }
  }
  if (r.classList.contains('cover')) {
    const mid = r.scrollLeft + r.clientWidth / 2;
    let best = null, bd = 1e9;
    Array.from(r.children).forEach(c => { const d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid); if (d < bd) { bd = d; best = c; } });
    Array.from(r.children).forEach(c => c.classList.toggle('on', c === best));
  }
}
function syncRails() {
  const cv = $('#cover');
  if (cv && !cv.dataset.init && cv.children[1]) { cv.dataset.init = '1'; const c = cv.children[1]; cv.scrollLeft = c.offsetLeft + c.offsetWidth / 2 - cv.clientWidth / 2; }
  $$('.rail').forEach(syncRail);
}
document.addEventListener('scroll', e => { const r = e.target; if (r && r.classList && r.classList.contains('rail')) syncRail(r); }, true);
window.addEventListener('resize', syncRails);

/* ===== Router ===== */
function route() {
  const h = (location.hash || '#home').slice(1) || 'home';
  let html;
  const m = pre => h.startsWith(pre) ? h.slice(pre.length) : null;
  if (h === 'home') html = viewHome();
  else if (h === 'shop-all') html = viewCollection();
  else if (m('p-') !== null) html = viewProduct(m('p-'));
  else if (h === 'quiz') html = viewQuiz();
  else if (h === 'bundle-builder') html = viewBundle();
  else if (h === 'blog') html = viewBlog();
  else if (m('post-') !== null) html = viewPost(m('post-'));
  else if (h === 'rituals') html = viewRituals();
  else if (m('ritual-') !== null) html = viewRitual(m('ritual-'));
  else if (h === 'our-story') html = viewAbout();
  else if (h === 'team') html = viewTeam();
  else if (h === 'faq') html = viewFaq();
  else if (h === 'contact') html = viewContact();
  else if (h === 'rewards') html = viewRewards();
  else if (h === 'tracking') html = viewTracking();
  else if (h === 'wholesale') html = viewWholesale();
  else if (h === 'careers') html = viewCareers();
  else if (h === 'community') html = viewCommunity();
  else if (h === 'account') html = viewAccount();
  else if (m('policy-') !== null) html = viewPolicy(m('policy-'));
  else html = view404();
  $('#view').innerHTML = html;
  document.body.classList.toggle('has-buybar', h.startsWith('p-') && !!P(m('p-')));
  closeAll();
  window.scrollTo(0, 0);
  syncRails();
}

/* ===== Overlays ===== */
let lastFocus = null;
function lockScroll(on) { document.body.style.overflow = on ? 'hidden' : ''; }
function closeMega() { $$('.mega').forEach(x => x.classList.remove('open')); $$('[data-act="mega"]').forEach(b => b.setAttribute('aria-expanded', 'false')); }
function closeMnav() { const n = $('#mnav'); if (n) n.classList.remove('open'); const b = $('[data-act="mnav"]'); if (b) b.setAttribute('aria-expanded', 'false'); }
function closeAll() {
  closeMega(); closeMnav();
  $('#drawer').hidden = true; $('#search').hidden = true; $('#overlay').hidden = true; lockScroll(false);
}
function openDrawer() {
  closeMega(); closeMnav(); $('#search').hidden = true;
  lastFocus = document.activeElement;
  renderDrawer();
  $('#drawer').hidden = false; $('#overlay').hidden = false; lockScroll(true);
  const c = $('[data-act="cart-close"]', $('#drawer')); if (c) c.focus();
}
function closeDrawer() { $('#drawer').hidden = true; $('#overlay').hidden = true; lockScroll(false); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
function renderDrawer() {
  const t = totals(), n = cartCount();
  const left = FREE_SHIP - t.net;
  $('#drawer').innerHTML = `<div class="dr-head"><h3>Your cart${n ? ` (${n})` : ''}</h3><button class="ib" data-act="cart-close" aria-label="Close cart">${icon('close', 24, 3)}</button></div>
  <div class="dr-body">${cart.length ? `<div class="stack"><div class="bar"><i style="width:${Math.min(100, t.net / FREE_SHIP * 100)}%"></i></div><p class="fine">${left > 0 ? `Add ${money(left)} more for free shipping.` : 'You get free shipping.'}</p></div>` : ''}
    ${cart.length ? cart.map(it => { const p = P(it.pid); return `<div class="citem"><a class="art" href="#p-${p.id}" data-act="cart-close" aria-label="${esc(p.name)}">${pimg(p, 0)}</a><div class="stack" style="gap:8px"><h4>${esc(p.name)}</h4><div class="meta">${it.sub ? `Autoship, every ${it.freq} weeks` : 'One-time purchase'}${it.bundle ? ` &middot; Set discount ${it.bundle}%` : ''}</div>
      <div class="row-between"><div class="qty" role="group" aria-label="Quantity of ${esc(p.name)}"><button data-act="cart-qty" data-key="${esc(keyOf(it))}" data-d="-1" aria-label="Decrease quantity">${icon('minus', 16, 3)}</button><output>${it.qty}</output><button data-act="cart-qty" data-key="${esc(keyOf(it))}" data-d="1" aria-label="Increase quantity">${icon('plus', 16, 3)}</button></div><b>${money(unitOf(it) * it.qty)}</b></div>
      <button class="link fine" style="justify-self:start" data-act="cart-remove" data-key="${esc(keyOf(it))}">Remove</button></div></div>`; }).join('')
      : `<div class="stack center" style="justify-items:center;padding:40px 0"><span style="color:var(--brand)">${icon('bag', 44, 2.5)}</span><h3>Your cart is empty</h3><p class="muted">Add your first bar and start your ritual.</p><a class="btn btn-fill" href="#p-${MAIN}" data-act="cart-close">Shop turmeric soap</a></div>`}</div>
  ${cart.length ? `<div class="dr-foot"><div class="code-row"><label class="fine" for="promo" style="position:absolute;left:-9999px">Discount code</label><input id="promo" placeholder="Discount code" autocomplete="off" value="${promo ? esc(promo) : ''}"><button class="btn btn-line sm" data-act="apply-code">Apply</button></div><div id="promo-msg" class="fine">${promo ? `Code ${esc(promo)} applied.` : `Try ${FIRST_CODE} for ${CODES[FIRST_CODE]}% off.`}</div>
    <div class="tot"><span>Subtotal</span><span>${money(t.sub)}</span></div>${t.disc ? `<div class="tot"><span>Discount</span><span>-${money(t.disc)}</span></div>` : ''}<div class="tot"><span>Shipping</span><span>${t.ship ? money(t.ship) : 'Free'}</span></div><div class="tot big"><span>Total</span><span>${money(t.total)}</span></div>
    <button class="btn btn-fill full" data-act="checkout">Checkout</button><p class="fine" id="co-note"></p></div>` : ''}`;
}
function openSearch() {
  closeMega(); closeMnav(); $('#drawer').hidden = true;
  lastFocus = document.activeElement;
  $('#search').innerHTML = `<div class="wrap"><div class="row-between" style="gap:12px;flex-wrap:nowrap"><label class="fine" for="q" style="position:absolute;left:-9999px">Search</label><input id="q" type="search" placeholder="Search products, rituals and articles" autocomplete="off" style="font-size:18px;min-height:56px"><button class="ib" data-act="search-close" aria-label="Close search">${icon('close', 24, 3)}</button></div><div class="sresults" id="sres"></div></div>`;
  $('#search').hidden = false; $('#overlay').hidden = false; lockScroll(true);
  renderSearch(''); $('#q').focus();
}
function closeSearch() { $('#search').hidden = true; $('#overlay').hidden = true; lockScroll(false); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
function renderSearch(q) {
  q = q.trim().toLowerCase();
  const items = [
    ...PRODUCTS.map(p => ({ t: p.name, s: `Product &middot; ${money(salePrice(p))}`, h: '#p-' + p.id, k: `${p.name} ${p.tagline} ${p.blurb} soap turmeric`, img: pimg(p, 0) })),
    ...RITUALS.map(r => ({ t: r.title, s: `Ritual &middot; ${r.time}`, h: '#ritual-' + r.id, k: `${r.title} ${r.steps.join(' ')}` })),
    ...POSTS.map(x => ({ t: x.title, s: `Blog &middot; ${x.cat}`, h: '#post-' + x.id, k: `${x.title} ${x.excerpt} ${x.cat}` })),
    ...PAGES.map(g => ({ t: g[0], s: 'Page', h: '#' + g[1], k: g[0] }))
  ];
  const res = q ? items.filter(i => i.k.toLowerCase().includes(q)).slice(0, 8) : items.slice(0, 5);
  $('#sres').innerHTML = (q ? '' : '<p class="eyebrow" style="margin-top:6px">Popular</p>') + (res.length ? res.map(i => `<a href="${i.h}">${i.img ? `<span class="mini art" style="aspect-ratio:1;border-radius:12px">${i.img}</span>` : `<span class="mini" style="display:grid;place-items:center;height:48px;border-radius:12px;background:var(--pink-3);color:var(--brand)">${icon('arrow', 18, 2.5)}</span>`}<span><b style="font-weight:800">${esc(i.t)}</b><br><span class="fine">${i.s}</span></span></a>`).join('') : `<p class="muted" style="padding:12px 0">No results for "${esc(q)}". Try "soap", "ritual" or "shipping".</p>`);
}
function syncCard(card) {
  const p = P(card.dataset.pid); if (!p) return;
  const sub = card.querySelector('input[type="radio"][value="1"]').checked;
  $$('.popt-wrap', card).forEach(w => w.classList.toggle('sel', w.querySelector('input').checked));
  const b = $('[data-act="card-add"]', card);
  if (b) b.innerHTML = `Add <i>&bull;</i> ${money(sub ? subPrice(p) : salePrice(p))}`;
}

/* ===== Events ===== */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-act]');
  if (!t) { if (!e.target.closest('.hdr')) closeMega(); return; }
  const a = t.dataset.act, d = t.dataset;
  switch (a) {
    case 'mega': { const id = 'mega-' + d.m, el = $('#' + id), open = !el.classList.contains('open'); closeMega(); closeMnav(); if (open) { el.classList.add('open'); t.setAttribute('aria-expanded', 'true'); } break; }
    case 'mnav': { const n = $('#mnav'), open = !n.classList.contains('open'); closeMega(); n.classList.toggle('open', open); t.setAttribute('aria-expanded', String(open)); break; }
    case 'search-open': openSearch(); break;
    case 'search-close': closeSearch(); break;
    case 'cart-open': openDrawer(); break;
    case 'cart-close': closeDrawer(); break;
    case 'overlay': if (!$('#search').hidden) closeSearch(); else closeDrawer(); break;
    case 'cta-go': { const s = $('#signup'); if (s) { s.scrollIntoView({ behavior: 'smooth', block: 'center' }); setTimeout(() => { const i = $('#nl-email'); if (i) i.focus({ preventScroll: true }); }, 450); } break; }
    case 'cta-close': ctaGone = true; $('#cta').hidden = true; break;
    case 'home-tab': homeTab = d.tab; $('#home-rail').innerHTML = railBlock(homeTab); $$('[data-act="home-tab"]').forEach(b => b.setAttribute('aria-selected', String(b === t))); syncRails(); break;
    case 'rail-prev': case 'rail-next': { const r = t.closest('section').querySelector('.rail'); if (r) { const c = r.children[0]; r.scrollBy({ left: (a === 'rail-next' ? 1 : -1) * (c ? c.offsetWidth + 18 : 300), behavior: 'smooth' }); } break; }
    case 'card-add': { const card = t.closest('.pcard'), sub = card.querySelector('input[type="radio"][value="1"]').checked, f = $('.fsel', card); addToCart(d.pid, 1, { sub, freq: f ? f.value : '4' }); break; }
    case 'set-add': addToCart(MAIN, +d.n, { bundle: +d.pct }); break;
    case 'thumb': pd.img = +d.i; $('#pdp').innerHTML = pdpHtml(); { const b = $(`.thumb[data-i="${d.i}"]`); if (b) b.focus(); } break;
    case 'ptype': pd.sub = d.sub === '1'; $('#pdp').innerHTML = pdpHtml(); { const b = $(`.ptype[data-sub="${d.sub}"]`); if (b) b.focus(); } break;
    case 'pqty': pd.qty = Math.max(1, Math.min(20, pd.qty + +d.d)); $('#pdp').innerHTML = pdpHtml(); { const b = $(`[data-act="pqty"][data-d="${d.d}"]`); if (b) b.focus(); } break;
    case 'pdp-add': addToCart(pd.pid, pd.qty, { sub: pd.sub, freq: pd.freq }); break;
    case 'quick-add': addToCart(d.pid, 1); break;
    case 'star': rvStar = +d.s; $('#rv-stars').innerHTML = starPicker(); { const b = $(`.starbtn[data-s="${d.s}"]`); if (b) b.focus(); } break;
    case 'cart-qty': { const it = cart.find(c => keyOf(c) === d.key); if (it) { it.qty += +d.d; if (it.qty <= 0) cart = cart.filter(c => c !== it); saveCart(); updateBadge(); renderDrawer(); const b = $(`#drawer [data-act="cart-qty"][data-key="${CSS.escape(d.key)}"][data-d="${d.d}"]`); if (b) b.focus(); } break; }
    case 'cart-remove': cart = cart.filter(c => keyOf(c) !== d.key); saveCart(); updateBadge(); renderDrawer(); break;
    case 'apply-code': {
      const v = ($('#promo').value || '').trim().toUpperCase();
      if (CODES[v]) { promo = v; renderDrawer(); toast(`Code ${v} applied`); }
      else { promo = null; renderDrawer(); const m = $('#promo-msg'); m.textContent = v ? 'That code is not valid. Check the spelling and try again.' : 'Enter a code first.'; m.style.color = 'var(--bad)'; }
      break;
    }
    case 'checkout': $('#co-note').textContent = 'Checkout is a demo. Connect your store platform or a payment service to take real orders.'; break;
    case 'quiz-pick': qz.a[QUIZ[qz.i].k] = d.v; qz.i++; $('#quiz').innerHTML = quizHtml(); { const h = $('#quiz h2'); if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); } } break;
    case 'quiz-back': qz.i = Math.max(0, qz.i - 1); $('#quiz').innerHTML = quizHtml(); break;
    case 'quiz-restart': qz = { i: 0, a: {} }; $('#quiz').innerHTML = quizHtml(); break;
    case 'bundle-step': { const n = (bd[d.pid] || 0) + +d.d; if (n <= 0) delete bd[d.pid]; else bd[d.pid] = Math.min(n, 20); $('#bundle').innerHTML = bundleHtml(); const b = $(`#bundle [data-pid="${d.pid}"][data-d="${d.d}"]`) || $('#bundle [data-act="bundle-step"]'); if (b) b.focus(); break; }
    case 'bundle-add': { const pct = bdPct(); Object.entries(bd).forEach(([id, q]) => addToCart(id, q, { bundle: pct })); bd = {}; $('#bundle').innerHTML = bundleHtml(); break; }
    case 'blog-chip': $$('#blog-chips .chip').forEach(c => c.setAttribute('aria-pressed', String(c === t))); $('#posts').innerHTML = POSTS.filter(x => d.c === 'All' || x.cat === d.c).map(postCard).join(''); break;
    case 'faq-chip': $$('[data-act="faq-chip"]').forEach(c => c.setAttribute('aria-pressed', String(c === t))); $('#faqs').innerHTML = faqHtml(d.c); break;
    case 'acct-tab': acctTab = d.t; $('#acct').innerHTML = acctHtml(); break;
  }
});
document.addEventListener('change', e => {
  const t = e.target;
  if (t.dataset.change === 'freq') pd.freq = t.value;
  if (t.matches && t.matches('.pcard input[type="radio"]')) syncCard(t.closest('.pcard'));
});
document.addEventListener('input', e => { if (e.target.id === 'q') renderSearch(e.target.value); });
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (!$('#search').hidden) closeSearch();
  else if (!$('#drawer').hidden) closeDrawer();
  else { closeMega(); closeMnav(); }
});
document.addEventListener('submit', e => {
  const f = e.target.closest('form[data-form]');
  if (!f) return;
  e.preventDefault();
  const k = f.dataset.form, v = n => (f.elements[n] ? f.elements[n].value.trim() : '');
  const done = msg => { f.innerHTML = `<div class="notice ok" role="status">${msg}</div>`; };
  switch (k) {
    case 'newsletter': done(`Thanks for signing up. Use code <b>${FIRST_CODE}</b> at checkout for ${CODES[FIRST_CODE]}% off your first order.`); break;
    case 'community': done(`Welcome${v('m-name') ? ', ' + esc(v('m-name')) : ''}. Check your inbox for your first ritual.`); break;
    case 'contact': done('Thanks. Your message is ready to send. Connect a form service to deliver messages to your inbox.'); break;
    case 'wholesale': done('Thanks. Your request is noted. Connect a form service to receive wholesale inquiries.'); break;
    case 'careers': done('Thanks. Your details are noted. Connect a form service to receive applications.'); break;
    case 'account': done('Account sign-in is a demo on this page. Connect your store platform to enable real accounts, orders and subscriptions.'); break;
    case 'review': {
      const id = f.dataset.pid; (REVIEWS[id] = REVIEWS[id] || []).unshift({ s: rvStar, n: v('rv-name') || 'Anonymous', t: v('text') });
      $('#reviews').innerHTML = reviewsHtml(id); f.reset(); toast('Review added'); break;
    }
    case 'tracking': {
      const o = esc(v('t-order'));
      $('#track-out').innerHTML = `<div class="card"><p class="eyebrow">Sample result for order ${o}</p><h3>Out for delivery</h3><ul class="timeline">${[['Order placed', 1], ['Packed', 1], ['Shipped', 1], ['Out for delivery', 1], ['Delivered', 0]].map(s => `<li class="${s[1] ? 'done' : ''}"><i>${s[1] ? icon('check', 14, 3) : ''}</i><span>${s[0]}</span></li>`).join('')}</ul><p class="fine">This is an example. Connect your shipping provider to show real tracking.</p></div>`;
      break;
    }
  }
});
window.addEventListener('hashchange', route);

/* ===== Boot ===== */
renderTop();
renderFooter();
renderCta();
route();
