import {Header} from '@/components/site-header';
import {PageIntro,CTA,Footer} from '@/components/site-sections';
import {steps} from '@/lib/company';
export const metadata={title:'How we work | ZOLIG Consulting Limited'};
export default function How(){return <><Header/><main id="main"><PageIntro title="How we work" description="From the first conversation to the agreed project or supply, we keep your requirements at the centre of the process." image="procurement.png"/><section className="work-steps container"><h2>A clear process.<br/>A considered next step.</h2>{steps.map(([title,text],i)=><article key={title}><span className="step-number">0{i+1}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</section><CTA/></main><Footer/></>}
