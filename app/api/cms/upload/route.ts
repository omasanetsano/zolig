import {cmsUser} from '@/lib/cms-auth';

export const runtime='nodejs';

export async function POST(){
  if(!await cmsUser())return Response.json({error:'Administrator access is required.'},{status:403});
  return Response.json({error:'CMS uploads require a Vercel Blob integration. The public website is fully deployable without it.'},{status:503});
}
