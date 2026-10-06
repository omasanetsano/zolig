import type { Metadata } from "next";
import "./globals.css";
import {Reveal} from '@/components/reveal';
export const metadata: Metadata = {
 title: "ZOLIG Consulting Limited | Construction, Procurement & Protection",
 description: "Construction, procurement, general supplies and protective equipment from Zolig Consulting Limited, Maitama, Abuja.",
 icons: {icon:"/assets/z-symbol.png",shortcut:"/assets/z-symbol.png"},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}<Reveal/></body></html>}
