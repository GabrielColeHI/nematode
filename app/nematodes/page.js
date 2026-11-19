import PageShell from "../../components/PageShell";
import Figure from "../../components/Figure";

export const metadata = { title: "Nematodes and slugs" };

export default function Nematodes() {
  return (
    <PageShell
      title="Nematodes and slugs"
      next={{ href: "/question/", label: "Our question" }}
    >
      <h2>What is a nematode?</h2>
      <p>
        Nematodes are roundworms. They are really small organisms usually seen under a
        microscope. They live pretty much everywhere, including soil, water, plants, and even
        inside of other animals. A lot of them are harmless, while some are parasites and live
        off of another animal. That animal is called the host.
      </p>

      <Figure
        src="/images/nematode-micrograph.jpg"
        alt="Microscope photo of a thin, curved, see-through worm on a gray background, with a 150 micrometer scale bar."
        caption="Figure 1. A male nematode (Phasmarhabditis zhejiangensis) that scientists collected from a slug in China, seen under a microscope. The scale bar is 150 micrometers, which is about the width of two human hairs. Photo from Zhang and Liu (2020), Figure 2A, CC BY 4.0."
      />

      <h2>Nematodes that live in slugs</h2>
      <p>
        Slugs can have nematodes more often than you would think. A team in Norway checked 611
        wild slugs and found nematodes in about 1 out of every 5. They found five different kinds
        of nematodes too (Ross et al. 2016). Some slugs get them more than others. Another study
        done in Norway found that an invasive slug had nematodes more often than the native slugs and
        snails living near it (Antzée-Hyllseth et al. 2020).
      </p>

      <h2>Why do they matter?</h2>
      <p>
        Slugs are a big problem for farms and gardens because they eat plants. One nematode,
        <em> Phasmarhabditis hermaphrodita</em>, kills slugs. Many people buy it and use it to
        get rid of them (Speiser et al. 2001; Antzée-Hyllseth et al. 2020).
      </p>
      <p>
        While nematodes usually are not harmful, some are able to hurt humans and animals as
        well. Rat lungworm lives inside slugs and snails for part of its life. If someone eats an
        infected slug or snail, it can cause a serious illness (Medeiros et al. 2020).
      </p>
      <p>
        It is very useful to know which slugs have the most nematodes. It could help predict
        where these worms will show up most as well as which of these slugs the slug-killing
        nematodes will work on.
      </p>
    </PageShell>
  );
}
