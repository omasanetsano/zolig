export const runtime='nodejs';

export async function GET(){
  return new Response('Media storage has not been configured for this deployment.',{
    status:404,
    headers:{'Cache-Control':'public, max-age=300','X-Content-Type-Options':'nosniff'},
  });
}
