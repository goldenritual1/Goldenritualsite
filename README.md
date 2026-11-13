# Golden Ritual

The Golden Ritual store as a plain static site. There are no frameworks, no build step and nothing to install. Open `index.html` in a browser, or upload the folder to any static host.

## Files

| File | What it holds |
| --- | --- |
| `index.html` | The empty page shell. The script fills in the header, footer and each page. |
| `styles.css` | All styling. The colors and fonts are at the top. |
| `app.js` | Everything else: store settings, products, blog posts, rituals, FAQ and policy text, the cart, the quiz and the bundle builder. |
| `images/` | The logo and the product photos. |

Pages use hash links such as `#home`, `#shop-all`, `#p-turmeric-soap`, `#quiz` and `#bundle-builder`. The `route()` function in `app.js` maps each hash to a page.

To preview locally with working links, run a simple server from this folder, for example `python3 -m http.server`, then open http://localhost:8000.

## Common edits

### Prices
In `app.js`, find `const PRODUCTS` (in the "Catalog" section). Each product has a `price` in dollars, for example `price: 16.00`. Set the full price here. The sale price is calculated from it.

The settings that change prices are at the top of `app.js` in the "Config" section:

- `SALE_PCT`: the sitewide sale, as a percentage. `20` means 20% off. Set it to `0` to end the sale. This also hides the sale banner and badges.
- `SUB_PCT`: the extra discount for Subscribe & Save.
- `FREE_SHIP`: the order total that gets free shipping. `SHIP_FEE` is the shipping cost below that total.
- `BUNDLE_TIERS`: the discounts in the bundle builder. Each pair is `[number of bars, percent off]`.

### Discount codes
In the "Config" section of `app.js`:

```js
const CODES = { FIRST10: 10 };   // code: percent off
```

To add a code, add another pair, for example `{ FIRST10: 10, FRIENDS15: 15 }`. Write codes in capital letters. Customers type them in the cart, and capitalization doesn't matter there. The first code in the list is the one advertised in the "Claim 10% off" button, the footer sign-up and the cart hint.

### Colors
At the top of `styles.css`, the `:root { ... }` block lists every color as a variable. The main ones:

- `--bg`: page background
- `--ink`: main text color
- `--brand`: the main orange-brown used for buttons, bands and links
- `--pink`, `--pink-2`, `--pink-3`: card borders and soft backgrounds
- `--sun`: the yellow highlights
- `--night`: the dark hero background
- `--c1` to `--c4`: the backgrounds of the four colored cards on the home page

Change a value there and it changes everywhere it's used.

### Photos and logo
Images are in `images/`, and the list that points to them is at the very top of `app.js`:

```js
const IMG = {
  logoDark: 'images/logo-dark.png',
  logoLight: 'images/logo-light.png',
  hand: 'images/hand.jpg',
  open: 'images/open.jpg',
  board: 'images/board.jpg'
};
```

The simplest way to swap a photo is to replace the file in `images/` with a new one of the same name. If the new file has a different name or type, update its path in `IMG`.

Photos are cropped to fit their frames. If the subject sits off-center, adjust its focus point in `IMGPOS` (in the "Catalog" section of `app.js`). The values are horizontal and vertical positions, for example `'50% 42%'`.

A product's photo gallery is set by its `imgs` list in `PRODUCTS`, using the names from `IMG`.

### Text
Product names and descriptions are in `PRODUCTS`. Blog posts are in `POSTS`, rituals in `RITUALS`, and FAQ answers in `FAQS`, all in `app.js`. Page text such as the home page and the story page is in the `view...` functions further down the same file.
