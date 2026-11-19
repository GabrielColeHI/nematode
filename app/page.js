import Link from "next/link";
import { asset } from "../lib/basePath";

const topics = [
  { href: "/nematodes/", title: "Nematodes and slugs", blurb: "What nematodes are and why anyone cares about them." },
  { href: "/question/", title: "Our question", blurb: "Do bigger slugs have more nematodes?" },
  { href: "/design/", title: "How we tested it", blurb: "How our class collected slugs and counted the worms." },
  { href: "/results/", title: "What we found", blurb: "Bigger slugs had nematodes more often, but it's more complicated than that." },
  { href: "/conclusion/", title: "What it means", blurb: "What we think our results mean." },
];

export default function Home() {
  return (
    <>
      <div className="home-photos">
        <img
          src={asset("/images/home-banana-slug.jpg")}
          alt="A Pacific banana slug with black spots crawling over dry grass and dirt."
        />
        <img
          src={asset("/images/nematode-micrograph.jpg")}
          alt="Microscope photo of a thin, curved, see-through nematode."
        />
      </div>

      <section className="hero">
        <h1>Do bigger slugs carry more worms?</h1>
        <p className="intro">
          A lot of slugs have tiny worms called nematodes living inside them. Our BI 221 class
          collected 148 slugs this fall, and we wanted to see if the bigger ones had more worms.
        </p>
      </section>

      <h2>Pages</h2>
      <ol className="topic-list">
        {topics.map((t) => (
          <li key={t.href}>
            <Link href={t.href}>
              <strong>{t.title}</strong>
            </Link>
            <span>{t.blurb}</span>
          </li>
        ))}
      </ol>
    </>
  );
}
