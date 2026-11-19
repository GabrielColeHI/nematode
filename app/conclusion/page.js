import PageShell from "../../components/PageShell";
import Figure from "../../components/Figure";

export const metadata = { title: "What it means" };

export default function Conclusion() {
  return (
    <PageShell
      title="What it means"
      intro="Bigger slugs did have nematodes more often. We think that's mostly because the big slugs and small slugs were different kinds of slugs."
      next={{ href: "/references/", label: "References" }}
    >
      <h2>Back to our question</h2>
      <p>
        Our question was whether the number of nematodes in a slug is related to how big it is,
        and we predicted bigger slugs would have more. Our results only partly supported that.
        With all 148 slugs together, bigger slugs had nematodes more often, like we predicted.
        When we only looked at one kind of slug (Pacific banana slugs), size didn&rsquo;t matter at
        all.
      </p>
      <p>
        We think slug size and slug type got mixed up in our data. Most of the small slugs (40
        out of 49) weren&rsquo;t banana slugs. They were smaller kinds like field slugs, and none of
        the 9 field slugs had a single nematode. Banana slugs are big, and most of them had
        nematodes no matter how big they were. So it looks like the kind of slug matters more
        than the size. That means our hypothesis wasn&rsquo;t supported when we compared slugs of the
        same kind.
      </p>

      <Figure
        src="/images/conclusion-genus.png"
        alt="Bar chart of the percent of slugs carrying nematodes by kind: banana slugs 63%, roundback slugs 60%, keeled slugs 46%, field slugs 0%."
        caption="Figure 6. Percent of slugs with nematodes for each kind of slug we had at least 9 of. The kind of slug made more of a difference than size did."
      />

      <h2>How this fits with other research</h2>
      <p>
        Our results line up with what other scientists have found. In Hawaii, researchers checked
        16 kinds of slugs and snails for rat lungworm, which is a nematode. Whether an animal was
        infected depended on what kind it was and also how big it was, and size mattered
        differently for different kinds. They also found that once an animal was infected, the
        bigger ones weren&rsquo;t more packed with worms (Medeiros et al. 2020). We saw something
        similar. Among the slugs that had nematodes, the bigger ones didn&rsquo;t clearly have more.
      </p>
      <p>
        A study in Norway also showed that slug type matters. The invasive slug <em>Arion
        vulgaris</em> had nematodes 49% of the time, which was more than the native slugs and
        snails. It also had more nematodes than one of the native slugs (Antzée-Hyllseth et al.
        2020).
      </p>
      <p>
        Size can still matter sometimes, though. In a lab experiment, a slug-killing nematode
        hurt small slugs of one kind a lot but barely affected the big ones. For a second kind of
        slug, size didn&rsquo;t make a difference (Speiser et al. 2001). So whether size matters
        probably depends on which slug and which nematode you&rsquo;re looking at.
      </p>
      <p>
        We also found nematodes in way more of our slugs (54%) than the Norway survey did (about
        19%; Ross et al. 2016). That could be because of the location, the weather, the kinds of
        slugs, or how the nematodes were counted.
      </p>

      <h2>Limitations</h2>
      <ul>
        <li>Our study only shows a connection, not a cause. Something else, like the slug&rsquo;s age or where it lived, could explain it.</li>
        <li>About two-thirds of our slugs were banana slugs, so we didn&rsquo;t have many of the other kinds.</li>
        <li>Lots of different groups did the counting, so some counts are probably more accurate than others. We also had to throw out some entries.</li>
        <li>All the slugs were collected in the same month in the same part of Oregon.</li>
      </ul>
      <p>
        If we did this again, we&rsquo;d collect a lot of slugs of just one kind, from tiny to huge,
        all from the same spot. That way the kind of slug couldn&rsquo;t mess up the results.
      </p>
    </PageShell>
  );
}
