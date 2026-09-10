import { notFound } from "next/navigation";
import EpisodePage from "../../../components/EpisodePage";
import { episodes, getEpisode } from "../../../lib/editorial";

export function generateStaticParams() {
  return episodes.filter((episode) => episode.series === "Developer Tea").map((episode) => ({ slug: episode.slug }));
}

export default async function DeveloperTeaEpisodePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const episode = getEpisode(slug);
  if (!episode || episode.series !== "Developer Tea") notFound();
  return <EpisodePage episode={episode} />;
}
