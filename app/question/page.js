import PageShell from "../../components/PageShell";
import Figure from "../../components/Figure";

export const metadata = { title: "Our question" };

export default function Question() {
  return (
    <PageShell
      title="Our question"
      intro="Some of the slugs we found were smaller than a fingernail and some were longer than a hand. We wondered if the size of the slug changes how many worms that they have."
      next={{ href: "/design/", label: "How we tested it" }}
    >
      <h2>Question</h2>
      <p>Is the number of nematodes in a slug related to how big the slug is?</p>

      <h2>Hypothesis</h2>
      <p>
        Slug size affects how many nematodes a slug has. Bigger slugs have more body for
        nematodes to live in. They've also usually been alive longer, so they've had more time to
        pick up nematodes from the soil and plants around them.
      </p>

      <h2>Prediction</h2>
      <p>
        If slug size affects how many nematodes a slug has, then heavier and longer slugs will
        have more nematodes than lighter and shorter slugs.
      </p>

      <Figure
        src="/images/slug-sizes.jpg"
        alt="Two photos side by side. Left, a close-up of a small pale gray slug on pavement. Right, a long yellow-green banana slug on gravel."
        caption="Figure 2. A small slug and a big slug. Left is a gray field slug (Deroceras reticulatum) from Portland, OR, photo by jemmamontgomery on iNaturalist, CC0. The right slug is a Pacific banana slug (Ariolimax columbianus) from Lincoln City, OR, photo by rappman on iNaturalist, CC BY. In our data, the typical field slug weighed 0.6 grams and the typical banana slug weighed 17 grams."
      />
    </PageShell>
  );
}
