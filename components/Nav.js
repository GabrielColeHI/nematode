"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pages, samePage } from "../lib/pages";

export default function Nav() {
  const pathname = usePathname() || "/";
  return (
    <header className="site-header">
      <Link href="/" className="brand">Do bigger slugs carry more worms?</Link>
      <nav aria-label="Main">
        <ul>
          {pages.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} aria-current={samePage(pathname, href) ? "page" : undefined}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
