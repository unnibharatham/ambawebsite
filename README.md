# Dr. Priya's Amba Naturals website

A responsive, static Bootstrap 5 product showcase for Amba Naturals. It runs without a build step or backend.

## Run locally

Open `index.html` directly, or open this folder in VS Code and choose **Open with Live Server**. An internet connection is needed for the Bootstrap, jQuery, Bootstrap Icons, and Google Fonts CDNs.

## Main folders

- `assets/css/` — site styles and responsive rules
- `assets/js/products.js` — the complete product catalogue and prices
- `assets/js/main.js` — shared navigation, footer, interactions, WhatsApp form, and animations
- `assets/js/pages.js` — page-specific product rendering, search, filtering, sorting, and details
- `assets/images/logo/` — replace the logo here
- `assets/images/products/` — add product images here

## Editing content

- Replace `assets/images/logo/amba-logo.jpg` with the final extracted logo using the same filename, or update its path in `assets/js/main.js` and the page metadata.
- Product images are expected at `assets/images/products/[product-slug].svg`. Missing files automatically display `product-placeholder.svg`. Add extracted catalogue images and update each `image` value in `assets/js/products.js` if using PNG or WebP.
- Edit product names, prices, descriptions, usage, or featured status in `assets/js/products.js`. Use `price: null` for products such as soaps whose price varies.
- Update the WhatsApp number in `assets/js/main.js` (`PHONE`) and any direct `wa.me` links in the HTML pages.
- Replace the clearly labelled address, email, map, and social placeholders only when verified details are supplied.
- Add a category by adding products with a matching `category` and `group`, then add the group to the filter list in `assets/js/pages.js` if it needs its own filter.

## Deployment

For GitHub Pages, commit the folder, enable Pages for the repository branch, and set the source to the repository root. For shared hosting, upload the full folder contents to `public_html` or the host's web root. Update canonical URLs from `https://example.com/` to the live domain before launch.

## Source asset note

The supplied PDFs remain in the project root. The current environment could not extract their embedded images, so the website includes a branded, clearly replaceable SVG fallback system. Replace fallbacks with approved catalogue exports before production photography is required.
