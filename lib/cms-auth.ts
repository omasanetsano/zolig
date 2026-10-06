import {env} from 'cloudflare:workers';
import {getChatGPTUser} from '@/app/chatgpt-auth';
export async function cmsUser(){const user=await getChatGPTUser();if(!user)return null;const allowed=((env as {CMS_ADMIN_EMAILS?:string}).CMS_ADMIN_EMAILS||'').split(',').map(s=>s.trim().toLowerCase()).filter(Boolean);return allowed.includes(user.email.toLowerCase())?user:null}
