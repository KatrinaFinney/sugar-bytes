export type Guest = {
  name: string;
  role: string;
  company?: string;
  bio?: string;
  image?: string;
  links?: { label: string; href: string }[];
};

export type Episode = {
  slug: string;
  series: "Dev Voices" | "Developer Tea";
  title: string;
  dek: string;
  date: string;
  guest?: Guest;
  event?: string;
  location?: string;
  videoUrl?: string;
  duration?: string;
  topics: string[];
  questions?: string[];
  takeaways?: string[];
};

export type DxCheck = {
  slug: string;
  product: string;
  title: string;
  dek: string;
  date: string;
  url?: string;
  timeToFirstSuccess?: string;
  criteria: { label: string; observation: string }[];
  wins: string[];
  friction: string[];
  recommendations: string[];
};

// Add real published interviews here after guest approval.
export const episodes: Episode[] = [];

// Add real DX Checks here after completing the hands-on developer journey.
export const dxChecks: DxCheck[] = [];

export function getEpisode(slug: string) {
  return episodes.find((episode) => episode.slug === slug);
}

export function getDxCheck(slug: string) {
  return dxChecks.find((check) => check.slug === slug);
}
