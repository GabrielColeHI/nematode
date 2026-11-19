export const pages = [
  { href: "/", label: "Home" },
  { href: "/nematodes/", label: "Nematodes and slugs" },
  { href: "/question/", label: "Our question" },
  { href: "/design/", label: "How we tested it" },
  { href: "/results/", label: "What we found" },
  { href: "/conclusion/", label: "What it means" },
  { href: "/references/", label: "References" },
];

// usePathname may or may not include the trailing slash
export const samePage = (a, b) => a.replace(/\/$/, "") === b.replace(/\/$/, "");
