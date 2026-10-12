import type { FaqItem, Plan, Service, Video } from '../types'
import { msg } from '../lib/whatsapp'

const mk = (n: string, v: string, b: string) => `Hi Vistora Creative! I’m interested in the ${n} package: ${v} for ${b}. Please share the next steps.`
const monthly = 'Monthly: 50% advance and 50% before final watermark-free delivery.'
const common = ['15–25 seconds per video', 'Branding, captions, and CTA', 'One revision per video']

export const PLANS: Plan[] = [
  { id: 'trial', name: 'Trial Video', price: '₹999', period: 'one-time', cta: 'Get Started — ₹999',
    message: 'Hi Vistora Creative! I’m interested in the ₹999 Trial Video package. Please share the next steps.',
    payment: 'Trial: 100% advance.',
    features: ['One custom promotional video', '15–25 seconds', 'One agreed offer or destination', 'AI-assisted visuals and editing', 'Captions, logo placement, and CTA', 'One revision', 'Target delivery: 3 business days after required assets and approvals'] },
  { id: 'starter', name: 'Starter', price: '₹5,999', period: '/month', cta: 'Choose Starter', message: mk('Starter', '4 videos/month', '₹5,999'), payment: monthly,
    features: ['4 promotional videos per month', ...common] },
  { id: 'growth', name: 'Growth', price: '₹9,999', period: '/month', cta: 'Choose Growth', recommended: true, message: mk('Growth', '8 videos/month', '₹9,999'), payment: monthly,
    features: ['8 promotional videos per month', ...common] },
  { id: 'premium', name: 'Premium', price: '₹14,999', period: '/month', cta: 'Choose Premium', message: mk('Premium', '12 videos/month', '₹14,999'), payment: monthly,
    features: ['12 promotional videos per month', ...common] },
]

export const SERVICES: Service[] = [
  { id: 'travel', title: 'Travel agency promotional videos', audience: 'Travel agencies, tour operators and destination businesses.', deliverables: ['Vertical 9:16 package or destination videos', 'Inclusions, dates and price callouts', 'Enquiry CTA'], scope: 'Inclusions and itineraries must be verified by the agency before publishing.' },
  { id: 'product', title: 'Product promotional videos', audience: 'Brands and sellers launching or promoting a product.', deliverables: ['Short product-focused videos', 'Feature and offer highlights', 'Captions and CTA'], scope: 'Product details come from the information and assets you share.' },
  { id: 'skincare', title: 'Skincare and beauty creatives', audience: 'Skincare, beauty and wellness brands.', deliverables: ['Product showcase videos', 'Routine and offer announcements', 'Branded captions'], scope: 'We do not write medical or results claims; copy follows the claims you approve.' },
  { id: 'fashion', title: 'Fashion and clothing promotional videos', audience: 'Clothing, accessories and boutique brands.', deliverables: ['Collection and drop videos', 'Sale and festive offers', 'Logo and CTA'], scope: 'Visuals depend on supplied photos or agreed AI-assisted imagery.' },
  { id: 'food', title: 'Restaurant and food promotional videos', audience: 'Restaurants, cafes and cloud kitchens.', deliverables: ['Menu and dish highlight videos', 'Offer and combo announcements', 'Ordering CTA'], scope: 'Menu items and prices are confirmed by you before delivery.' },
  { id: 'social', title: 'Short-form vertical social-media creatives', audience: 'Any business posting on Reels, Shorts or WhatsApp.', deliverables: ['9:16 videos sized for social platforms', 'Hooks and captions', 'Final watermark-free file'], scope: 'We deliver the video file. Posting is not included.' },
  { id: 'offers', title: 'Offer and campaign announcement videos', audience: 'Businesses with a sale, launch or seasonal offer.', deliverables: ['Offer-led promo videos', 'Dates, terms and CTA on screen', 'Multiple creative angles on monthly plans'], scope: 'Offer terms are supplied and approved by you.' },
]

export const VIDEOS: Video[] = [
  // To show a real video, set `src` (e.g. '/videos/travel.mp4') and optionally `poster`. Put files in /public/videos.
  { id: 'v1', title: 'Sample video 1 — Travel', description: 'Demo vertical promo for a tour package.', category: 'Travel' },
  { id: 'v2', title: 'Sample video 2 — Skincare', description: 'Demo vertical promo for a skincare product.', category: 'Skincare' },
  { id: 'v3', title: 'Sample video 3 — Fashion', description: 'Demo vertical promo for a clothing collection.', category: 'Fashion' },
  { id: 'v4', title: 'Sample video 4 — Food', description: 'Demo vertical promo for a restaurant offer.', category: 'Food' },
]

export const FAQS: FaqItem[] = [
  { q: 'What is included in a promotional video?', a: 'Each video is a vertical 15–25 second edit with AI-assisted visuals, captions, your logo and an enquiry CTA. Exact content is agreed before work starts.' },
  { q: 'How does the ₹999 trial work?', a: 'You get one custom video for one agreed offer or destination, with one revision. Trial is 100% payment in advance.', message: PLANS[0].message },
  { q: 'How long does delivery take?', a: 'The trial targets delivery within three business days after we receive the required assets and approvals. Monthly timelines are confirmed before work begins.', message: msg.delivery },
  { q: 'What counts as a revision?', a: 'One round of consolidated feedback on the draft. Please send all changes together so they can be applied in one pass.', message: msg.delivery },
  { q: 'What assets should a client provide?', a: 'Your logo, offer details (inclusions, dates, prices), your contact CTA and any photos or clips you want used. Share brand colours if you have them.' },
  { q: 'Can a client request specific branding?', a: 'Yes. Share your logo and brand colours and we will apply them within the agreed scope.' },
  { q: 'Are AI-generated visuals used?', a: 'Yes. Visuals are AI-assisted and may be illustrative. Please verify actual inclusions and details before publishing.' },
  { q: 'Are advertising budgets included?', a: 'No. Ad spend is paid by you directly to the ad platform.' },
  { q: 'Are posting and ad management included?', a: 'No. We deliver finished videos. Posting and ad-account management are not included unless separately agreed.' },
  { q: 'How do monthly packages work?', a: 'Starter, Growth and Premium provide 4, 8 or 12 videos per month. Topics are planned with you by message.', message: PLANS[2].message },
  { q: 'How do payments work?', a: 'Trial: 100% advance. Monthly packages: 50% advance and 50% before final watermark-free delivery.' },
  { q: 'How can someone start a project?', a: 'Message us on WhatsApp. We confirm scope and next steps there. A prefilled draft opens and you press send yourself.', message: PLANS[0].message },
]
