import {z} from 'zod';
import {company} from './company';
const schema=z.object({name:z.string().trim().min(2).max(100),email:z.string().trim().email().max(254),phone:z.string().trim().max(40).default(''),organisation:z.string().trim().max(150).default(''),category:z.string().trim().min(1).max(100),message:z.string().trim().min(10).max(5000),website:z.string().max(200).optional()});
export type MailConfig={RESEND_API_KEY?:string;ENQUIRY_FROM?:string};
export async function handleEnquiry(request:Request,config:MailConfig,send:typeof fetch=fetch){
 const origin=request.headers.get('origin');if(!origin||origin!==new URL(request.url).origin)return Response.json({error:'Please submit your enquiry from this website.'},{status:403});
 if(!request.headers.get('content-type')?.includes('application/json'))return Response.json({error:'Invalid request format.'},{status:415});
 if(Number(request.headers.get('content-length')||0)>16384)return Response.json({error:'Your message is too long.'},{status:413});
 let raw;try{const text=await request.text();if(text.length>16384)return Response.json({error:'Your message is too long.'},{status:413});raw=JSON.parse(text)}catch{return Response.json({error:'Please check your enquiry and try again.'},{status:400})}
 const parsed=schema.safeParse(raw);if(!parsed.success)return Response.json({error:'Please enter your name, a valid email and a message of at least 10 characters.'},{status:400});
 const data=parsed.data;if(data.website)return Response.json({error:'Your enquiry could not be submitted.'},{status:400});
 if(!config.RESEND_API_KEY||!config.ENQUIRY_FROM)return Response.json({error:'Online enquiries are temporarily unavailable. Please email or call our team.'},{status:503});
 try{const response=await send('https://api.resend.com/emails',{method:'POST',headers:{Authorization:`Bearer ${config.RESEND_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify({from:config.ENQUIRY_FROM,to:[company.email],reply_to:data.email,subject:'Website enquiry: '+data.category.replace(/[\r\n]/g,' '),text:`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone||'Not supplied'}\nOrganisation: ${data.organisation||'Not supplied'}\nCategory: ${data.category}\n\n${data.message}`}),signal:AbortSignal.timeout(15000)});if(!response.ok)return Response.json({error:'Your enquiry could not be sent. Please try again or email our team.'},{status:502});const result=await response.json() as {id?:string};if(!result.id)throw new Error('No delivery identifier');return Response.json({ok:true})}catch{return Response.json({error:'We could not confirm your enquiry was sent. Please contact our team by email.'},{status:502})}
}
