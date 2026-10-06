import {cmsUser} from '@/lib/cms-auth';
import {contactLinksSchema} from '@/lib/contact-links';
import {database} from '@/db';

export async function POST(request:Request){
  if(!await cmsUser())return Response.json({error:'Administrator access is required.'},{status:403});
  if(request.headers.get('origin')!==new URL(request.url).origin)return Response.json({error:'Invalid request origin.'},{status:403});
  let raw;
  try{const text=await request.text();if(text.length>4000)return Response.json({error:'These links are too long.'},{status:413});raw=JSON.parse(text);}catch{return Response.json({error:'Check the contact links and try again.'},{status:400});}
  const result=contactLinksSchema.safeParse(raw);
  if(!result.success)return Response.json({error:result.error.issues.map(issue=>`${issue.path[0]}: ${issue.message}`).join(' ')},{status:400});
  try{
    await database().prepare('INSERT INTO cms_state (key,value) VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind('contact_links',JSON.stringify(result.data)).run();
    return Response.json({ok:true});
  }catch{return Response.json({error:'Your links could not be saved. Please try again.'},{status:503});}
}
