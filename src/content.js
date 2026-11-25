// Everything you would want to change lives in this file.
// Copy, prices, WhatsApp number and images are all set here.

export const site = {
  brand: "Digital Kadai",
  // Your WhatsApp number with country code, digits only, e.g. "919876543210".
  // Until it is set, buttons open WhatsApp with the message but no recipient.
  whatsapp: "91XXXXXXXXXX",
  tagline: "Online presence for shops and small businesses, wherever they are.",
};

// Prefilled WhatsApp messages. {brand} is replaced with site.brand.
export const messages = {
  check: "Hi {brand}, I’d like a free online check for my shop. Shop name: ",
  starter: "Hi {brand}, I’d like to know more about the Starter plan for my shop.",
  growth: "Hi {brand}, I’d like to know more about the Growth plan for my shop.",
  full: "Hi {brand}, I’d like to know more about the Full plan for my business.",
  founding: "Hi {brand}, I’d like to be one of your founding shops.",
  custom: "Hi {brand}, I’d like a custom plan. Here’s what I need: ",
};

export const nav = [
  { id: "services", label: "Services" },
  { id: "how", label: "How it works" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

export const hero = {
  badge: "Founding offer: our first 3 shops pay half for 3 months",
  titleLines: ["Get found on Google, WhatsApp and Instagram", "without doing it\u00a0yourself"],
  subtitle:
    "We set up and run the online side of shops and small businesses, wherever they are, for one fixed monthly fee starting at ₹2,999.",
  cta: "Get a free online check",
  promise: "More calls in 30 days, or don’t pay for month\u00a0two.",
  image: { src: "images/hero.webp", alt: "A shop owner smiling at a customer message on her phone at the counter of a small neighbourhood store" },
};

// The example listing in the hero phone. The shop is imaginary.
export const listing = {
  name: "The Corner Store",
  note: "An example listing for an imaginary shop",
  before: {
    rating: "3.8",
    reviews: 11,
    category: "Store",
    issues: ["Hours not added", "No website"],
    update: "Nothing posted yet",
    review: "“Good stuff, but nobody picks up the phone.”",
    reply: null,
  },
  after: {
    rating: "4.6",
    reviews: 138,
    category: "Neighbourhood store",
    open: "Open now, closes 9:30 pm",
    update: { title: "Latest update, 2 days ago", text: "Weekend offer: 10% off on all fresh bakes." },
    review: "“Friendly staff, and they reply on WhatsApp quickly.”",
    reply: "Thank you! See you again this weekend.",
    photo: "images/maps.webp",
  },
};

export const problem = {
  title: "Customers check your shop online before they walk in",
  subtitle: "If your shop looks empty or outdated there, they choose the next one on the list.",
  items: [
    { icon: "pin", title: "On Google Maps", text: "They search to find you, check your hours and read your reviews." },
    { icon: "wa", title: "On WhatsApp", text: "They message to ask the price, the timings and whether it’s in stock." },
    { icon: "ig", title: "On Instagram", text: "They scroll to see what’s new before they make the trip." },
  ],
};

export const taglineLines = ["You run the shop.", "We run your online side."];

export const services = {
  title: "What we look after for you",
  subtitle: "One team for every place your customers look, so you never have to post, reply or update anything yourself.",
  items: [
    {
      title: "Show up properly on Google Maps",
      text: "Photos, correct hours, weekly offers and a reply to every review within 48 hours.",
      image: "images/maps.webp",
      alt: "A passerby checking his phone outside a small green shopfront with plants by the door",
    },
    {
      title: "Answer customers on WhatsApp instantly",
      text: "A product catalogue with prices, greeting and quick replies, and offers sent to your customer lists.",
      image: "images/whatsapp.webp",
      alt: "A salon owner replying to a customer on her phone at the reception desk, beside an appointment book",
    },
    {
      title: "Post on Instagram every week",
      text: "12 posts and 4 reels planned every month in the language your customers speak, built around your sales and festivals.",
      image: "images/instagram.webp",
      alt: "Handmade products laid out on a table and photographed on a phone mounted on a small tripod",
    },
    {
      title: "Have a website you can share with anyone",
      text: "Your products, location and a WhatsApp button, on a domain registered in your name.",
      image: "images/website.webp",
      alt: "A café owner smiling at her laptop at the counter, with pastries in the display case behind her",
    },
    {
      tag: "For exporters and B2B",
      title: "Win buyers on LinkedIn and B2B marketplaces",
      text: "A LinkedIn profile buyers take seriously, and marketplace listings like IndiaMART or Alibaba rewritten to bring better enquiries.",
      image: "images/b2b.webp",
      alt: "A manufacturer showing a product sample to a buyer in a small warehouse stacked with boxed goods",
    },
    {
      title: "Festival and sale campaigns",
      text: "Ready to send posters, WhatsApp messages and posts for every festival and season sale, so you never scramble at the last minute.",
      image: "images/festival.webp",
      alt: "A shopkeeper setting up a festive display in a store lit with string lights for a seasonal sale",
    },
  ],
};

export const steps = {
  title: "How it works",
  subtitle: "About ten minutes of your time a month after the first week.",
  items: [
    { title: "Send your shop name", text: "Message us on WhatsApp. Within 24 hours you get screenshots of what customers see today and what’s missing." },
    { title: "Onboarding in week one", text: "On a video call or a visit, we collect your photos and details and set up your Google listing and WhatsApp in the first week." },
    { title: "Approve and relax every month", text: "You approve posts on WhatsApp. We publish them and send you a one screen report of calls and views." },
  ],
};

export const pricing = {
  title: "Simple monthly plans",
  subtitle:
    "Fixed prices in Indian rupees, with a three month minimum, then month to month. Need something else, or based outside India? Ask for a custom plan.",
  plans: [
    {
      key: "starter",
      name: "Starter",
      forWho: "For shops that aren’t online yet",
      price: "₹2,999",
      setup: "+ ₹4,999 one time setup",
      features: ["Google Maps listing set up and kept fresh", "WhatsApp Business catalogue and quick replies", "A reply to every review", "2 offer posters a month"],
      cta: "Ask about Starter",
    },
    {
      key: "growth",
      name: "Growth",
      forWho: "For retail shops, cafés, salons and clinics",
      price: "₹7,999",
      setup: "+ ₹7,999 one time setup",
      features: ["Everything in Starter", "12 Instagram posts a month", "4 reels planned and scripted", "A monthly content plan in your customers’ languages"],
      cta: "Ask about Growth",
      highlight: true,
    },
    {
      key: "full",
      name: "Full",
      forWho: "For manufacturers, exporters and established businesses",
      price: "₹14,999",
      setup: "+ ₹14,999 one time setup",
      features: ["Everything in Growth", "A website on your own domain", "LinkedIn for the owner, 8 posts a month", "Every festival campaign pack"],
      cta: "Ask about Full",
    },
    {
      key: "custom",
      name: "Custom",
      forWho: "For needs the plans don’t cover",
      price: "On request",
      setup: "Quoted for exactly what you need, in your currency",
      features: ["Pick any mix of our services", "Several branches or locations", "One time projects, like a website only", "Businesses outside India"],
      cta: "Request a custom plan",
      custom: true,
    },
  ],
  founding: {
    title: "Be one of our founding shops",
    text: "Our first 3 shops pay half the monthly fee for three months, in return for a before and after story we can share.",
    cta: "Claim a founding spot",
  },
  addons:
    "Also available on their own: a website from ₹9,999, a B2B marketplace listing rewrite at ₹4,999 for 25 listings, and festival campaign packs at ₹2,499 each.",
};

export const faqs = [
  { q: "Do I have to give you my passwords?", a: "No. You add us as a manager on your Google listing, Instagram and WhatsApp catalogue. The accounts stay in your name, and you can remove us any time." },
  { q: "I’m busy running the shop. How much of my time does this take?", a: "One onboarding call or visit in the first week for photos and details. After that, about ten minutes a month to approve posts on WhatsApp." },
  { q: "What if it doesn’t work?", a: "We start with your Google listing. If you don’t see more calls and direction requests within 30 days, you don’t pay for the second month." },
  { q: "Which languages do you post in?", a: "English and Tamil as standard, and other languages on request. We write in whichever language your customers respond to." },
  { q: "Do you work with businesses outside India?", a: "Yes. We work over WhatsApp and video calls, so location doesn’t matter. Ask for a custom plan and we’ll quote in your currency." },
  { q: "I already have an Instagram page. Can you take it over?", a: "Yes. We keep your followers and old posts, tidy up the profile and start posting regularly." },
  { q: "Can I cancel?", a: "After the first three months, you can stop in any month with a WhatsApp message." },
  { q: "Is advertising included?", a: "No. Our fee covers setup, content and upkeep. If you run Google or Instagram ads, you pay the platform directly, so you always see where the money goes." },
  { q: "Who owns the website and domain?", a: "You do. The domain is registered in your name and stays yours if you stop working with us." },
  { q: "How do I pay?", a: "Monthly, by UPI or bank transfer in India, or international bank transfer from elsewhere. The setup fee is paid when we start." },
];

export const finalCta = {
  title: "See what customers see when they search for your shop",
  text: "Send your shop name on WhatsApp. Within 24 hours we’ll reply with screenshots and the three things to fix first, free.",
};

export const legal = {
  privacy: "We use the details you share only to run your accounts. We never sell or share your customers’ information.",
  terms: "Plans have a three month minimum, then continue month to month. Advertising spend is billed by the platform directly. Full terms are shared in writing before work starts.",
};
