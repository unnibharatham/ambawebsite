/* Amba Naturals catalogue data. Descriptions remain intentionally modest where the catalogue brief supplied no detailed copy. */
const PRODUCT_GROUPS = {
  'Face Wash':'Skin Care','Lip Care & Kajal':'Lip Care','Soaps':'Body Care','Shampoo & Conditioner':'Hair Care',
  'Toners & Waters':'Skin Care','Body Care':'Body Care','Creams, Gels & Serums':'Skin Care',
  'Scrubs & Face Packs':'Face Packs','Herbal Hair Care':'Hair Care','Tailams & Oils':'Oils'
};

const RAW_PRODUCTS = [
  ['Shankupushpam Face Wash','Face Wash',230,true],['Kumkumapoo Face Wash','Face Wash',250],['Kumkumamadi Face Wash With Beads','Face Wash',300],['Anti Acne Face Wash','Face Wash',250,true],
  ['Mini Lipstick','Lip Care & Kajal',150],['Kumkumamadi Lip Balm','Lip Care & Kajal',200],['Rose Lip Balm','Lip Care & Kajal',150],['Beetroot Lip Balm','Lip Care & Kajal',150],['Kajal','Lip Care & Kajal',150],
  ['Goat Milk Soap','Soaps',null],['Aloe Vera Soap','Soaps',null],['Honey Soap','Soaps',null],['Saffron Soap','Soaps',null],
  ['Nalikerapaal Shampoo','Shampoo & Conditioner',250,true],['Nalikerapaal Conditioner','Shampoo & Conditioner',270],['Anti Dandruff Shampoo','Shampoo & Conditioner',250],['Hibiscus Shampoo','Shampoo & Conditioner',250],['Baby Shampoo','Shampoo & Conditioner',270],['Rice Water Shampoo','Shampoo & Conditioner',270],
  ['Rosemary Water','Toners & Waters',200],['Anti Acne Toner','Toners & Waters',200],['Rose Beetroot Toner','Toners & Waters',250,true],
  ['Nalpamaradi Body Wash','Body Care',250],['Jasmine Body Butter','Body Care',400,true],['Lakshadi Body Butter','Body Care',350],['Jasmine Face & Body Yogurt','Body Care',400],
  ['Kumkumamadi Raktachandanam Night Cream','Creams, Gels & Serums',500,true],['Psora Smoothening Cream','Creams, Gels & Serums',500],['Under Arm Whitening Cream','Creams, Gels & Serums',350],['Rose Anti Ageing Gel','Creams, Gels & Serums',350],['Kumkumamadi Gel','Creams, Gels & Serums',350],['Saffron Manjista Gel','Creams, Gels & Serums',350],['Under Eye Gel','Creams, Gels & Serums',250],['Aloe Vera Gel','Creams, Gels & Serums',200],['Shankupushpam Serum','Creams, Gels & Serums',250],
  ['Nalpamaradi Scrub','Scrubs & Face Packs',350],['Charcoal Scrub','Scrubs & Face Packs',350],['D-Tan Pack','Scrubs & Face Packs',200],['Beetroot Ubtan','Scrubs & Face Packs',200],['Njavara Face Pack','Scrubs & Face Packs',250],['Nimba Tulasyadi Choornam','Scrubs & Face Packs',200],
  ['Kesha Thali','Herbal Hair Care',200],['Chemparathyadi Hair Mask','Herbal Hair Care',500],['Neelibringadi Hair Mask','Herbal Hair Care',500],['Keshavridhi Hair Oil','Herbal Hair Care',250,true],
  ['Kumkumadi Tailam','Tailams & Oils',500,true],['Swarna Varnyaka Tailam','Tailams & Oils',500],['Carrot Oil','Tailams & Oils',250],['Under Eye Oil','Tailams & Oils',250]
];

/* Verified product photography available in assets/images/products. Unmatched catalogue
   items intentionally retain the branded fallback instead of showing a different product. */
const PRODUCT_IMAGES = {
  'Shankupushpam Face Wash':'Shankupushpam face wash.png',
  'Anti Acne Face Wash':'Anti acne face wash.png',
  'Mini Lipstick':'Natural lipstick.png',
  'Kumkumamadi Lip Balm':'Kumkumadi lip balm.png',
  'Rose Lip Balm':'Rose lip balm.png',
  'Kajal':'Herbal kajal.png',
  'Nalikerapaal Shampoo':'Nalikera paal shampoo.png',
  'Nalikerapaal Conditioner':'Nalikera paal conditioner.png',
  'Anti Dandruff Shampoo':'Anti dandruff shampoo.png',
  'Hibiscus Shampoo':'Hibiscus shampoo.png',
  'Baby Shampoo':'Baby shampoo.png',
  'Rosemary Water':'Rosemary water.png',
  'Anti Acne Toner':'Anti acne toner.png',
  'Rose Beetroot Toner':'Rose beetroot toner.png',
  'Nalpamaradi Body Wash':'Nalpamaradi body wash.png',
  'Jasmine Body Butter':'Jasmine body butter.png',
  'Kumkumamadi Raktachandanam Night Cream':'Kumkumadi Raktachandanam night cream.png',
  'Rose Anti Ageing Gel':'Anti ageing gel.png',
  'Kumkumamadi Gel':'Kumkumadi gel.png',
  'Under Eye Gel':'Under eye gel.png',
  'Aloe Vera Gel':'Alovera gel.png',
  'Shankupushpam Serum':'Shankupushpam face serum.png',
  'Nalpamaradi Scrub':'Nalpamaradi body scrub.png',
  'Charcoal Scrub':'Charcoal scrub.png',
  'D-Tan Pack':'Dtan pack.png',
  'Beetroot Ubtan':'Beetroot ubtan pack.png',
  'Njavara Face Pack':'Njavara face pack.png',
  'Nimba Tulasyadi Choornam':'Nimba tulasyadi mukhalepa choornam.png',
  'Kumkumadi Tailam':'Kumkumadi tailam.png',
  'Carrot Oil':'Carrot oil.png',
  'Under Eye Oil':'Under eye oil.png'
};

function slugify(value){return value.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');}
const PRODUCTS = RAW_PRODUCTS.map((p,i)=>({
  id:i+1,name:p[0],slug:slugify(p[0]),category:p[1],group:PRODUCT_GROUPS[p[1]],price:p[2],currency:'₹',featured:!!p[3],
  image:PRODUCT_IMAGES[p[0]] ? `assets/images/products/${PRODUCT_IMAGES[p[0]]}` : 'assets/images/products/product-placeholder.svg',
  shortDescription:`A thoughtfully crafted ${p[1].toLowerCase()} essential from Amba Naturals.`,
  description:`Part of Dr. Priya's Amba Naturals ${p[1].toLowerCase()} collection, thoughtfully designed with carefully selected herbal ingredients and Ayurveda-inspired care.`,
  howToUse:'Use as directed on the product label. Contact Amba Naturals for product-specific guidance.'
}));

window.AMBA_PRODUCTS=PRODUCTS;
window.AMBA_CATEGORIES=[...new Set(PRODUCTS.map(p=>p.category))];
