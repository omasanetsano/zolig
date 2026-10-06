"use client";

import {useEffect, useState} from "react";
import Image from "next/image";

export function Reveal(){
  const [transitionState,setTransitionState]=useState<"entering"|"idle"|"leaving">("entering");

  useEffect(()=>{
    const reduce=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finishTimer=window.setTimeout(()=>setTransitionState("idle"),reduce?0:120);
    const onScroll=()=>document.querySelector<HTMLElement>("[data-site-header]")?.classList.toggle("is-scrolled",window.scrollY>24);
    const onClick=(event:MouseEvent)=>{
      if(reduce||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
      const anchor=(event.target as Element).closest<HTMLAnchorElement>("a[href]");
      if(!anchor||anchor.target==="_blank"||anchor.hasAttribute("download"))return;
      const url=new URL(anchor.href,window.location.href);
      if(url.origin!==window.location.origin||url.protocol!==window.location.protocol||(url.pathname===window.location.pathname&&url.hash))return;
      event.preventDefault();
      setTransitionState("leaving");
      window.setTimeout(()=>window.location.assign(url.href),520);
    };
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    document.addEventListener("click",onClick);
    return()=>{
      window.clearTimeout(finishTimer);
      window.removeEventListener("scroll",onScroll);
      document.removeEventListener("click",onClick);
    };
  },[]);

  return <>
    <div className="scroll-progress" aria-hidden="true"/>
    <div className={`site-transition ${transitionState}`} aria-hidden="true">
      <div className="transition-mark"><Image src="/assets/z-symbol-full.png" alt="" width={82} height={82} priority/></div>
      <p><span>Build</span><span>Supply</span><span>Protect</span></p>
      <div className="transition-line"/>
    </div>
  </>;
}
