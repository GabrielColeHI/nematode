import PageShell from "../../components/PageShell";

export const metadata = { title: "References" };

const references = [
  "Antzée-Hyllseth H, Trandem N, Torp T, Haukeland S. 2020. Prevalence and parasite load of nematodes and trematodes in an invasive slug and its susceptibility to a slug parasitic nematode compared to native gastropods. Journal of Invertebrate Pathology 173:107372. doi:10.1016/j.jip.2020.107372",
  "BI 221 Lab Manual. 2026. BI 221Z Principles of Biology: Cells laboratory manual. Corvallis (OR): Oregon State University.",
  "BI 221Z Fall 2026 class. 2026. BI221Z F26 Nematode Data Entry (Responses), Slug Data [unpublished class data set]. Corvallis (OR): Oregon State University.",
  "Medeiros MCI, Rollins RL, Echaluse MV, Cowie RH. 2020. Species identity and size are associated with rat lungworm infection in gastropods. EcoHealth 17(2):183–193. doi:10.1007/s10393-020-01484-x",
  "Ross JL, Ivanova ES, Hatteland BA, Brurberg MB, Haukeland S. 2016. Survey of nematodes associated with terrestrial slugs in Norway. Journal of Helminthology 90(5):583–587. doi:10.1017/S0022149X15000784",
  "Speiser B, Zaller JG, Neudecker A. 2001. Size-specific susceptibility of the pest slugs Deroceras reticulatum and Arion lusitanicus to the nematode biocontrol agent Phasmarhabditis hermaphrodita. BioControl 46(3):311–320. doi:10.1023/A:1011469730322",
  "Zhang C-n, Liu Q-z. 2020. Phasmarhabditis zhejiangensis sp. nov. (Nematoda: Rhabditidae), a new rhabditid nematode from Zhejiang, China. PLoS ONE 15(11):e0241413. doi:10.1371/journal.pone.0241413 (Figure 1 photo, from Figure 2A, CC BY 4.0)",
  "Figure 2 photos: gray field slug, by jemmamontgomery, iNaturalist observation 120907957 (Portland, OR), CC0, https://www.inaturalist.org/observations/120907957. Pacific banana slug, by rappman, iNaturalist observation 39829423 (Lincoln City, OR), CC BY, https://www.inaturalist.org/observations/39829423.",
  "Homepage photo: Pacific banana slug, by hasfitz5, iNaturalist observation 12128171 (Tualatin River National Wildlife Refuge, OR), CC0, https://www.inaturalist.org/observations/12128171. The homepage nematode photo is the same as Figure 1 (Zhang and Liu 2020).",
  "Figure 3 photo: Cordoba M. 2016. Scouting for slugs. Oregon State University, Flickr, CC BY-SA 2.0. https://www.flickr.com/photos/oregonstateuniversity/50584991343/",
  "Figures 4–6 were made by our group from the class data set.",
];

export default function References() {
  return (
    <PageShell title="References">
      <ol className="refs">
        {references.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ol>
    </PageShell>
  );
}
