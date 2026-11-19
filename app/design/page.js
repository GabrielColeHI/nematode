import PageShell from "../../components/PageShell";
import Figure from "../../components/Figure";

export const metadata = { title: "How we tested it" };

export default function Design() {
  return (
    <PageShell
      title="How we tested it"
      intro="We compared the sizes of the slugs to the amount of nematodes found on their plates."
      next={{ href: "/results/", label: "What we found" }}
    >
      <h2>The setup</h2>
      <p>
        In October 2026, every lab group in BI 221 (33 sections in total) went out and found a
        wild slug, either on campus or off campus. Most came from forests, yards, or around town
        (BI 221 Lab Manual 2026). After that, each group:
      </p>
      <ol className="steps">
        <li>Wrote down where they found the slug and what kind it was.</li>
        <li>Weighed it in grams and measured how long it was in centimeters.</li>
        <li>Put the slug on a plate so the nematodes inside could come out.</li>
        <li>Counted the nematodes under a microscope, plus how many different kinds there were.</li>
        <li>Put everything into a shared class spreadsheet.</li>
      </ol>

      <Figure
        src="/images/slug-scouting.jpg"
        alt="A researcher in a blue jacket bends over in a foggy farm field next to a small flag and a black square of plastic laid on the ground."
        caption="Figure 3. Rory Mc Donnell, a slug researcher at Oregon State University, looking for slugs in a field. Photo by Maria Cordoba, Oregon State University, on Flickr, CC BY-SA 2.0."
      />

      <h2>Our conditions</h2>
      <p>
        This was an observational study, so we didn't give the slugs different treatments. We
        also split the slugs into small,
        medium, and large groups by weight, with the same number of slugs in each group. That
        made it easier to compare.
      </p>

      <h2>What we measured</h2>
      <ul>
        <li>Slug size, which was weight (grams) and length (centimeters)</li>
        <li>Nematode abundance, meaning the total number of nematodes on the slug&rsquo;s plate</li>
        <li>What kind of slug it was, if it was found on or off campus, and the habitat</li>
      </ul>

      <h2>Cleaning up the data</h2>
      <p>
        The class spreadsheet had some problems, so we had to clean it up first. We took out
        entries that didn&rsquo;t have a slug or a count. We also took out sizes that couldn&rsquo;t
        be right, like a 283 gram garden slug (that&rsquo;s heavier than a baseball). Sometimes the
        same slug was entered twice or shared between tables, so we only counted it once. After
        all that we had 148 slugs.
      </p>
      <p>
        To see if size and nematode count were connected, we used a Spearman correlation.
        Basically it tells you if one number tends to go up when the other one goes up. It goes
        from &minus;1 (they go in opposite directions) to 0 (no connection) to +1 (they always go
        up together).
      </p>
    </PageShell>
  );
}
