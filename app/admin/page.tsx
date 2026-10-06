import {getChatGPTUser,chatGPTSignInPath} from '@/app/chatgpt-auth';
import {cmsUser} from '@/lib/cms-auth';
import {CMSEditor} from '@/components/cms-editor';
export const dynamic='force-dynamic';
export const metadata={title:'Content manager | ZOLIG',robots:{index:false,follow:false}};
export default async function Admin(){const user=await getChatGPTUser();if(!user)return <main className="not-found"><h1>Content manager</h1><p>Sign in to manage ZOLIG website content.</p><a className="button" href={chatGPTSignInPath('/admin')} target="_top">Sign in with ChatGPT</a></main>;if(!await cmsUser())return <main className="not-found"><h1>Administrator access required.</h1><p>This account has not been authorised to edit the website.</p><a href="/" className="button">View website</a></main>;return <main className="cms"><header><div><p className="eyebrow">ZOLIG</p><h1>Content manager</h1></div><a className="text-link" href="/" target="_blank" rel="noopener">View website</a></header><p className="cms-settings-link"><a href="/admin/contact" className="text-link">WhatsApp & social links</a></p><CMSEditor/></main>}

