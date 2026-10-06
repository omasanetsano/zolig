import {Header} from '@/components/site-header';
import {PageIntro,CTA,Footer} from '@/components/site-sections';
import {contentRecords} from '@/lib/content';
export const dynamic='force-dynamic';
export const metadata={title:'Insights & updates | ZOLIG Consulting Limited'};
export default async function Blog(){const records=await contentRecords('blog');return <><Header/><main id="main"><PageIntro title="Blog" description="Practical perspectives on construction, procurement and the requirements that help a project move forward." image="construction.png"/><section className="blog-grid container">{records.map(r=><a href={'/blog/'+r.slug} key={r.id} className="blog-card">{r.image&&<img src={r.image} alt={r.title} loading="lazy"/>}<p className="eyebrow">{r.category}</p><h2>{r.title}</h2><p>{r.excerpt}</p><span className="text-link">Read article</span></a>)}</section><CTA/></main><Footer/></>}

