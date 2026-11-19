import { asset } from "../lib/basePath";

// <Figure src="/images/results.png" alt="..." caption="Figure 1. ..." />
export default function Figure({ src, alt, caption }) {
  return (
    <figure>
      <img src={asset(src)} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
