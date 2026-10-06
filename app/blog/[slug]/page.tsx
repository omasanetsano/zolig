import {notFound} from 'next/navigation';
import {Header} from '@/components/site-header';
import {CTA,Footer} from '@/components/site-sections';
import {contentRecords} from '@/lib/content';
export const dynamic='force-dynamic';
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const r=(await contentRecords('blog')).find(r=>r.slug===slug);return {title:(r?.title||'Article')+' | ZOLIG'}}
export default async function Article({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const r=(await contentRecords('blog')).find(r=>r.slug===slug);if(!r)notFound();return <><div className="detail-hero editorial-hero" style={{backgroundImage:`linear-gradient(#00291fa6,#00291fa6),url(${r.image})`}}><Header/><header className="article-title container"><a className="text-link" href="/blog">Back to insights</a><p className="eyebrow">{r.category}</p><h1>{r.title}</h1></header></div><main id="main"><article className="article-body"><h2>{r.excerpt}</h2>{r.body.split(/\n\s*\n/).map((p,i)=><p key={i}>{p}</p>)}</article><CTA/></main><Footer/></>}

