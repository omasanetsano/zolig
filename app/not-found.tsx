import Link from 'next/link';
import {Header} from '@/components/site-header';
import {Footer} from '@/components/site-sections';
export default function NotFound(){return <><Header/><main id="main" className="not-found"><p className="eyebrow">404</p><h1>Page not found.</h1><p>This page may have moved. Explore our services or get in touch with the ZOLIG team.</p><Link className="button" href="/">Back to home</Link></main><Footer/></>}
