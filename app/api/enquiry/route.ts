import {env} from 'cloudflare:workers';
import {handleEnquiry,type MailConfig} from '@/lib/enquiry';
export async function POST(request:Request){return handleEnquiry(request,env as MailConfig)}
