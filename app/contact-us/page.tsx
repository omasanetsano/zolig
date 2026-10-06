import {Header} from '@/components/site-header';
import {PageIntro,ContactDetails,Footer,ServiceCards} from '@/components/site-sections';
import {EnquiryForm} from '@/components/enquiry-form';
export const metadata={title:'Contact & enquiries | ZOLIG Consulting Limited'};
export default function Contact(){return <><Header/><main id="main"><PageIntro title="Contact us" description="Whether you need construction support, a supply quotation or protective equipment, start a conversation with our team." image="procurement.png"/><section className="contact-layout container"><div><h2>Get in touch with ZOLIG</h2><p>Tell us about your requirements. Include the project location, quantities, specifications and preferred timeframe where possible, so we can respond with useful next steps.</p><ContactDetails/></div><EnquiryForm/></section><ServiceCards/></main><Footer/></>}
