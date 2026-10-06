import {handleEnquiry,type MailConfig} from '@/lib/enquiry';
export const runtime='nodejs';
export async function POST(request:Request){const config:MailConfig={RESEND_API_KEY:process.env.RESEND_API_KEY,ENQUIRY_FROM:process.env.ENQUIRY_FROM};return handleEnquiry(request,config)}
