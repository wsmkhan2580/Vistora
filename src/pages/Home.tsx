import { Link } from 'react-router-dom'
import { ArrowRight, Film, ListChecks, MessageSquare, Send, Sparkles, Target } from 'lucide-react'
import Seo from '../components/Seo'
import { FinalCta, LinkBtn, Section } from '../components/ui'
import PricingCards from '../components/PricingCards'
import FaqList from '../components/FaqList'
import { FAQS, SERVICES, VIDEOS } from '../data/content'
import { AI_NOTE, SITE } from '../data/site'
import { msg } from '../lib/whatsapp'

const why = [
  { icon: Target, t: 'Built around your offer', d: 'Inclusions, dates, prices and a clear enquiry CTA on every video.' },
  { icon: Sparkles, t: 'AI-assisted, human-edited', d: 'Faster visuals, with thoughtful editing and captions.' },
  { icon: ListChecks, t: 'Clear pricing and scope', d: 'Defined deliverables and payment terms before work begins.' },
]
const steps = [
  { icon: MessageSquare, t: 'Message us on WhatsApp', d: 'Tell us your offer, destination or product.' },
  { icon: Film, t: 'Share assets and approve', d: 'Send your logo and details, then confirm the concept.' },
  { icon: Send, t: 'Review and receive', d: 'Review the draft, send one revision, get your final video.' },
]
const ld = [
  { '@context': 'https://schema.org', '@type': 'Organization', name: SITE.name, url: SITE.url, logo: `${SITE.url}/icon-512.png`, email: SITE.email, telephone: SITE.phone },
  { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.name, url: SITE.url },
]

export default function Home() {
  return (
    <>
      <Seo path="/" jsonLd={ld} title="Vistora Creative | Promotional Video Ads for Businesses"
        description="Create engaging promotional videos for travel agencies and businesses with Vistora Creative. Explore video services and packages starting at ₹999." />
      <section className="on-dark overflow-hidden bg-deep text-white">
        <div className="wrap grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2">
          <div>
            <h1>Turn Your Business Offers Into Videos People Want to Watch.</h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">Professional, AI-assisted promotional videos designed to help businesses present their offers with clarity and creativity.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkBtn to="/pricing" variant="primary">Explore Packages</LinkBtn>
              <LinkBtn to="/portfolio" variant="light">Watch Our Work</LinkBtn>
            </div>
            <p className="mt-5 text-sm text-slate-400">Clear pricing. Defined deliverables. Trial starts at ₹999.</p>
          </div>
          <figure className="mx-auto w-full max-w-[16rem]">
            <div className="rounded-[2rem] border-4 border-slate-600 bg-slate-900 p-2 shadow-2xl">
              <div className="relative flex aspect-[9/16] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-sky-500 via-teal-600 to-indigo-800 p-4">
                <span className="w-fit rounded-full bg-black/40 px-3 py-1 text-xs">Illustrative preview</span>
                <p className="font-heading text-2xl font-extrabold leading-tight">Your tour package, in motion.</p>
                <div aria-hidden="true" className="h-1.5 rounded-full bg-white/30"><div className="h-full w-2/5 rounded-full bg-white" /></div>
              </div>
            </div>
            <figcaption className="mt-3 text-center text-xs text-slate-400">Illustrative mockup, not a client video.</figcaption>
          </figure>
        </div>
      </section>

      <Section>
        <h2>Videos for the offers you promote</h2>
        <p className="mt-3 max-w-2xl text-muted">Travel first, plus skincare, fashion, restaurants and cafes.</p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 6).map((s) => (
            <li key={s.id} className="rounded-2xl border border-line bg-white p-5"><h3 className="text-lg font-bold">{s.title}</h3><p className="mt-2 text-sm text-muted">{s.audience}</p></li>
          ))}
        </ul>
        <Link to="/services" className="mt-6 inline-flex items-center gap-1 font-semibold text-brand hover:underline">All services <ArrowRight size={16} aria-hidden="true" /></Link>
      </Section>

      <Section className="bg-white">
        <h2>Featured sample videos</h2>
        <p className="mt-3 text-muted">Demo placeholders for our four sample videos. They are not client projects.</p>
        <ul className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {VIDEOS.map((v) => (
            <li key={v.id}><Link to="/portfolio" className="block rounded-xl border border-line p-4 hover:bg-slate-50"><span className="text-sm font-semibold text-teal-700">{v.category}</span><span className="mt-1 block font-bold">{v.title}</span></Link></li>
          ))}
        </ul>
        <LinkBtn to="/portfolio" variant="primary" className="mt-6">View portfolio</LinkBtn>
      </Section>

      <Section>
        <h2>Why Vistora Creative</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {why.map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-2xl border border-line bg-white p-6 shadow-sm"><I className="text-brand" aria-hidden="true" /><h3 className="mt-3 text-lg font-bold">{t}</h3><p className="mt-2 text-sm text-muted">{d}</p></div>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">{AI_NOTE} We do not promise leads, sales or virality.</p>
      </Section>

      <Section className="bg-white">
        <h2>How it works</h2>
        <ol className="mt-8 grid gap-5 md:grid-cols-3">
          {steps.map(({ icon: I, t, d }, i) => (
            <li key={t} className="rounded-2xl bg-bg p-6"><I className="text-teal" aria-hidden="true" /><h3 className="mt-3 text-lg font-bold">{i + 1}. {t}</h3><p className="mt-2 text-sm text-muted">{d}</p></li>
          ))}
        </ol>
      </Section>

      <Section>
        <h2>Pricing</h2>
        <p className="mt-3 mb-8 text-muted">Start with a ₹999 trial video, or pick a monthly plan.</p>
        <PricingCards />
        <LinkBtn to="/pricing" className="mt-6">Full pricing details</LinkBtn>
      </Section>

      <Section className="bg-white">
        <h2 className="mb-6">Common questions</h2>
        <FaqList items={FAQS.slice(0, 4)} />
        <LinkBtn to="/faq" className="mt-6">More FAQs</LinkBtn>
      </Section>
      <FinalCta message={msg.general} />
    </>
  )
}
