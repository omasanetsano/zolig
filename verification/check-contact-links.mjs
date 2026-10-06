import assert from 'node:assert/strict';
const base='http://localhost:5173';
const login=await fetch(base+'/signin-with-chatgpt?return_to=/admin/contact',{redirect:'manual'});
const cookie=login.headers.getSetCookie().map(value=>value.split(';')[0]).join('; ');
const headers={Cookie:cookie,Origin:base,'Content-Type':'application/json'};
const empty={whatsapp:'',linkedin:'',facebook:'',instagram:'',x:''};
const sample={...empty,whatsapp:'+2349119970399',linkedin:'https://www.linkedin.com/company/local-verification-only'};
const save=(body,extra={})=>fetch(base+'/api/cms/contact-links',{method:'POST',headers:{...headers,...extra},body:JSON.stringify(body)});
let passed=0;
try{
  assert.equal((await save(sample,{Cookie:''})).status,403);passed++;
  assert.equal((await save(sample,{Origin:'https://example.invalid'})).status,403);passed++;
  assert.equal((await save({...sample,linkedin:'javascript:alert(1)'})).status,400);passed++;
  assert.equal((await save({...sample,facebook:'https://facebook.com.example.invalid/profile'})).status,400);passed++;
  assert.equal((await save({...sample,whatsapp:'09119970399'})).status,400);passed++;
  assert.equal((await save(sample)).status,200);passed++;
  const page=await (await fetch(base+'/contact-us')).text();
  assert.ok(page.includes('https://wa.me/2349119970399'));passed++;
  assert.ok(page.includes(sample.linkedin));passed++;
  assert.ok((await (await fetch(base+'/admin/contact',{headers:{Cookie:cookie}})).text()).includes(sample.whatsapp));passed++;
}finally{
  assert.equal((await save(empty)).status,200);
}
assert.ok(!(await (await fetch(base+'/contact-us')).text()).includes(sample.linkedin));passed++;
console.log(JSON.stringify({passed,total:10,localTestValuesRemoved:true}));
