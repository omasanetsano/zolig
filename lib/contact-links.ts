import {database} from '@/db';
import {z} from 'zod';

function socialUrl(hosts:string[]){
  return z.string().trim().max(500).refine(value=>{
    if(!value)return true;
    try{const url=new URL(value);return url.protocol==='https:'&&!url.username&&!url.password&&hosts.includes(url.hostname.toLowerCase());}catch{return false;}
  },'Use the full HTTPS address of the official profile.');
}
export const contactLinksSchema=z.object({
  whatsapp:z.string().trim().refine(value=>!value||/^\+?[1-9][0-9]{7,14}$/.test(value),'Use international format, for example +234 followed by the number without its leading zero.'),
  linkedin:socialUrl(['linkedin.com','www.linkedin.com']),
  facebook:socialUrl(['facebook.com','www.facebook.com']),
  instagram:socialUrl(['instagram.com','www.instagram.com']),
  x:socialUrl(['x.com','www.x.com','twitter.com','www.twitter.com']),
});
export type ContactLinks=z.infer<typeof contactLinksSchema>;
export const emptyContactLinks:ContactLinks={whatsapp:'',linkedin:'',facebook:'',instagram:'',x:''};
export async function getContactLinks():Promise<ContactLinks>{
  const row=await database().prepare('SELECT value FROM cms_state WHERE key = ?').bind('contact_links').first<{value:string}>();
  if(!row)return emptyContactLinks;
  try{const parsed=contactLinksSchema.safeParse(JSON.parse(row.value));return parsed.success?parsed.data:emptyContactLinks;}catch{return emptyContactLinks;}
}
export function contactLinkItems(links:ContactLinks){
  return [
    {label:'WhatsApp',url:links.whatsapp?'https://wa.me/'+links.whatsapp.replace(/^\+/,''):''},
    {label:'LinkedIn',url:links.linkedin},
    {label:'Facebook',url:links.facebook},
    {label:'Instagram',url:links.instagram},
    {label:'X',url:links.x},
  ].filter(link=>link.url);
}
