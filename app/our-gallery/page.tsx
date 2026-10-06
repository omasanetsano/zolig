import {Header} from '@/components/site-header';
import {PageIntro,CTA,Footer} from '@/components/site-sections';
import {contentRecords} from '@/lib/content';
export const dynamic='force-dynamic';
export const metadata={title:'Our gallery | ZOLIG Consulting Limited'};
export default async function Gallery(){const records=await contentRecords('gallery');return <><Header/><main id="main"><PageIntro title="Our gallery" description="A closer look at our construction, supply and protective equipment capabilities." image="procurement.png"/><section className="gallery-section container"><div className="gallery-intro"><h2>Projects, equipment and the details that bring them together.</h2><p>Illustrative images are shown while company project and activity photographs are being prepared.</p></div><div className="gallery-grid">{records.map(r=><figure className="gallery-card" key={r.id}>{r.image&&<img src={r.image} alt={r.title} loading="lazy"/>}<figcaption><h3>{r.title}</h3><p>{r.excerpt}</p></figcaption></figure>)}</div></section><CTA/></main><Footer/></>}
