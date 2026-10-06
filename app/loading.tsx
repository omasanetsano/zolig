import Image from "next/image";

export default function Loading(){
  return <div className="route-loader" role="status" aria-live="polite">
    <div className="route-loader-mark"><Image src="/assets/z-symbol-full.png" alt="" width={82} height={82} priority/></div>
    <p>Preparing the next view</p>
    <div className="route-loader-track"><span/></div>
  </div>;
}
