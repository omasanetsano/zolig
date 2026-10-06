import {Header} from '@/components/site-header';
import {PageIntro,CTA,Footer} from '@/components/site-sections';
import {contentRecords} from '@/lib/content';
export const dynamic='force-dynamic';
export const metadata={title:'Our team | ZOLIG Consulting Limited'};
export default async function Team(){const records=await contentRecords('team');return <><Header/><main id="main"><PageIntro title="Our team" description="The people behind our construction, procurement and protective equipment services." image="construction.png"/>{records.length?<section className="team-grid container">{records.map(r=><article key={r.id}>{r.image&&<img src={r.image} alt={r.title}/>}<h3>{r.title}</h3><p className="eyebrow">{r.category}</p><p>{r.excerpt}</p></article>)}</section>:<section className="team-intro container"><h2>Working together around your requirements.</h2><p>Meet the team through a conversation about your project. Individual profiles will be added here as they become available.</p><a className="text-link" href="/contact-us">Speak with our team</a></section>}<CTA/></main><Footer/></>}
