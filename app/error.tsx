"use client";
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="not-found"><h1>We couldn’t load this page.</h1><p>Please try again in a moment.</p><button className="button" onClick={reset}>Try again</button><p><a className="text-link" href="/">Back to home</a></p></main>}
