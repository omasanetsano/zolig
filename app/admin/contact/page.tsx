import Link from 'next/link';
import {getChatGPTUser,chatGPTSignInPath} from '@/app/chatgpt-auth';
import {cmsUser} from '@/lib/cms-auth';
import {getContactLinks} from '@/lib/contact-links';
import {ContactLinksEditor} from '@/components/contact-links-editor';
export const dynamic='force-dynamic';
export const metadata={title:'Contact links | ZOLIG',robots:{index:false,follow:false}};
export default async function ContactSettings(){
  if(!await getChatGPTUser())return <main className="not-found"><h1>Contact links</h1><a className="button" href={chatGPTSignInPath('/admin/contact')} target="_top">Sign in with ChatGPT</a></main>;
  if(!await cmsUser())return <main className="not-found"><h1>Administrator access required.</h1><Link href="/" className="button">View website</Link></main>;
  return <main className="cms"><header><div><p className="eyebrow">ZOLIG</p><h1>Contact links</h1></div><Link href="/admin" className="text-link">Back to content manager</Link></header><ContactLinksEditor initial={await getContactLinks()}/></main>;
}
