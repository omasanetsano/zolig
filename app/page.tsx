import { Header } from "@/components/site-header";
import {Values,ServiceCards,Process,WhyUs,Feature,CTA,Footer} from '@/components/site-sections';
export default function Home() {
 return <><Header/><main id="main"><section className="home-hero container">
 <div className="hero-copy"><p className="eyebrow">Construction. Procurement. Protection.</p><h1>Building projects. Supplying progress.</h1><p className="intro">From construction and project delivery to procurement and protective equipment, ZOLIG brings practical solutions to your business needs.</p><a className="button" href="/contact-us">Let’s get in touch</a></div>
 <div className="hero-facts"><div><strong>Build</strong><span>Construction & projects</span></div><div><strong>Supply</strong><span>Procurement & equipment</span></div><div><strong>Protect</strong><span>Security & protective gear</span></div></div>
 <div className="hero-images"><img className="hero-background" src="/assets/construction.png" alt="Illustrative contemporary construction project"/><img className="hero-person" src="/assets/hero-engineer.png" alt="Illustrative portrait of an engineer on a construction site"/></div>
 </section><Values/><ServiceCards/><Process/><WhyUs/><Feature/><CTA/></main><Footer/></>;
}
