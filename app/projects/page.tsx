import {Header} from '@/components/site-header';
import {PageIntro,CTA,Footer} from '@/components/site-sections';
import {contentRecords} from '@/lib/content';
export const dynamic='force-dynamic';
export const metadata={title:'Projects & supplies | ZOLIG Consulting Limited'};
export default async function Projects(){
 const records=await contentRecords('projects');
 return <><Header/><main id="main"><PageIntro title="Projects" description="Explore construction projects, equipment procurement and supply requirements." image="construction.png"/><section className="project-list container"><div className="gallery-intro"><h2>Practical capabilities.<br/>Considered from the start.</h2><p>Illustrative profiles are marked below. Contact us for completed and ongoing project references relevant to your requirements.</p></div>{records.map(r=>{
 const meta=JSON.parse(r.meta);
 return <article className="project-showcase" key={r.id}>
  {r.image&&<img className="project-showcase-image" src={r.image} alt={r.title} loading="lazy"/>}
  <div className="project-showcase-title"><h2>{r.title}</h2>{meta.illustrative&&<p>Illustrative profile</p>}</div>
  <div className="project-showcase-info"><dl><div><dt>Service</dt><dd>{r.category}</dd></div>{meta.location&&<div><dt>Location</dt><dd>{meta.location}</dd></div>}<div><dt>Project scope</dt><dd>{meta.scope||r.excerpt}</dd></div>{meta.status&&<div><dt>Status</dt><dd>{meta.status}</dd></div>}</dl><a className="project-case-link" href={'/projects/'+r.slug}>View project details<span className="sr-only">: {r.title}</span></a></div>
 </article>;
 })}</section><CTA/></main><Footer/></>;
}
