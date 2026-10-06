/** The original export used Cloudflare D1. Public Vercel pages fall back to
 * bundled content until a persistent CMS adapter is connected. */
export type PreparedStatement={bind:(...values:unknown[])=>PreparedStatement;first:<T=Record<string,unknown>>()=>Promise<T|null>;all:<T=Record<string,unknown>>()=>Promise<{results:T[]}>;run:()=>Promise<unknown>};
export type ContentDatabase={prepare:(query:string)=>PreparedStatement;batch:(statements:PreparedStatement[])=>Promise<unknown>};
export function database():ContentDatabase{throw new Error('A persistent CMS database has not been configured for this Vercel deployment.')}
