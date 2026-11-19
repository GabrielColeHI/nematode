"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages, samePage } from "../lib/pages";

// previous / next buttons shown at the top of each page
export default function PageNav() {
  const pathname = usePathname() || "/";
  const i = pages.findIndex((p) => samePage(p.href, pathname));
  if (i === -1) return null;
  const prev = pages[i - 1];
  const next = pages[i + 1];
  return (
    <nav className="page-nav" aria-label="Page">
      {prev ? <Link href={prev.href} className="btn">&larr; {prev.label}</Link> : <span />}
      <span className="page-count">Page {i} of {pages.length - 1}</span>
      {next ? <Link href={next.href} className="btn btn-primary">{next.label} &rarr;</Link> : <span />}
    </nav>
  );
}
