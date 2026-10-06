"use client";
import {useState} from 'react';
import type {ContactLinks} from '@/lib/contact-links';

export function ContactLinksEditor({initial}:{initial:ContactLinks}){
  const [links,setLinks]=useState(initial);
  const [busy,setBusy]=useState(false);
  const [message,setMessage]=useState('');
  async function save(event:React.FormEvent){
    event.preventDefault();setBusy(true);setMessage('');
    try{
      const response=await fetch('/api/cms/contact-links',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(links)});
      const data=await response.json() as {error?:string};
      if(!response.ok)throw new Error(data.error||'Unable to save.');
      setMessage('Saved. Your contact links are updated on the website.');
    }catch(error){setMessage(error instanceof Error?error.message:'Unable to save. Your changes are still here.');}finally{setBusy(false);}
  }
  return <form className="cms-form contact-links-editor" onSubmit={save}>
    <p>Add the company’s official links. Leave a field empty to keep it off the website.</p>
    <label>WhatsApp number<input type="tel" autoComplete="off" placeholder="+234…" value={links.whatsapp} onChange={event=>setLinks({...links,whatsapp:event.target.value})}/><small>Use the country code and omit the first zero. Only add a number that uses WhatsApp.</small></label>
    {([['linkedin','LinkedIn'],['facebook','Facebook'],['instagram','Instagram'],['x','X']] as const).map(([key,label])=><label key={key}>{label}<input type="url" placeholder="https://…" maxLength={500} value={links[key]} onChange={event=>setLinks({...links,[key]:event.target.value})}/></label>)}
    <button className="button" disabled={busy}>{busy?'Saving…':'Save contact links'}</button>
    {message&&<p role="status">{message}</p>}
  </form>;
}
