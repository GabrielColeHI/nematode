import Link from "next/link";
import PageNav from "./PageNav";

export default function PageShell({ title, intro, next, children }) {
  return (
    <article className="page">
      <PageNav />
      <h1>{title}</h1>
      {intro && <p className="intro">{intro}</p>}
      {children}
      {next && (
        <p className="next">
          <Link href={next.href}>Next: {next.label}</Link>
        </p>
      )}
    </article>
  );
}
