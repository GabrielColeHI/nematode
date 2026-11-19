import PageShell from "../../components/PageShell";
import Figure from "../../components/Figure";

export const metadata = { title: "What we found" };

export default function Results() {
  return (
    <PageShell
      title="What we found"
      intro="The numbers varied a lot, as some slugs had zero nematodes and one had 2,660."
      next={{ href: "/conclusion/", label: "What it means" }}
    >
      <div className="callout">
        <p>148 slugs total, and about two-thirds of them were Pacific banana slugs</p>
        <p>80 slugs (54%) had at least one nematode</p>
        <p>Half of the slugs had 3 nematodes or fewer</p>
      </div>

      <h2>All slugs together</h2>
      <p>
        When we looked at all the slugs together, heavier slugs had a few more nematodes. The
        connection was weak, but it was statistically significant. Only about a third of the
        small slugs had any nematodes, while about two-thirds of the medium and large slugs did.
        Slug length showed the same weak pattern.
      </p>

      <Figure
        src="/images/results-scatterplot.png"
        alt="Scatterplot of slug weight from 0.08 to 54 grams against nematode count from 0 to 2,660. Small orange dots for other slugs sit mostly at zero on the left. Blue dots for banana slugs cluster between 7 and 54 grams and are spread from zero to over 2,000 at every weight."
        caption="Figure 4. Each dot is one slug (148 total). Blue dots are Pacific banana slugs and orange dots are every other kind. We stretched both axes so the small numbers are easier to see, so each grid line is 10 times the one before it. Dots on the bottom line had zero nematodes."
      />

      <h2>Banana slugs only</h2>
      <p>
        Then we looked at just the Pacific banana slugs (99 slugs). This time the pattern went
        away. Small, medium, and large banana slugs all had nematodes about the same amount of
        the time (61 to 64%), and the big ones didn&rsquo;t have higher counts. You can see it in
        Figure 4, where the blue dots go from zero to over 2,000 at pretty much every weight.
      </p>

      <Figure
        src="/images/results-size-groups.png"
        alt="Two bar charts. Left, all slugs: 35% of small, 67% of medium, and 60% of large slugs carried nematodes. Right, banana slugs only: 64% of small, 64% of medium, and 61% of large slugs carried nematodes."
        caption="Figure 5. Percent of slugs that had at least one nematode. We split the slugs into three groups by weight with the same number in each. The left side is all slugs (148) and the right side is only banana slugs (99)."
      />

      <div className="callout">
        <p>Our test results (Spearman correlation between slug weight and nematode count)</p>
        <p>All slugs: &rho; = 0.25, p = 0.002, a weak positive connection</p>
        <p>Banana slugs only: &rho; = 0.04, p = 0.67, no connection</p>
        <p>Only slugs that had nematodes: &rho; = 0.18, p = 0.11, no clear connection</p>
      </div>
    </PageShell>
  );
}
