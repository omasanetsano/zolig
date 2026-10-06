import {Header} from '@/components/site-header';
import {PageIntro,ServiceCards,CTA,Footer,Feature} from '@/components/site-sections';
export const metadata={title:'Our services | ZOLIG Consulting Limited'};
export default function Services(){return <><Header/><main id="main"><PageIntro title="Services" description="Construction, procurement and protective equipment services, with practical support shaped around your requirements." image="procurement.png"/><ServiceCards full/><Feature/><CTA/></main><Footer/></>}

