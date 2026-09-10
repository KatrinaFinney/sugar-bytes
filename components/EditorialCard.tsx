type EditorialCardProps = {
  eyebrow: string;
  title: string;
  copy: string;
  href: string;
  meta?: string;
};

export default function EditorialCard({ eyebrow, title, copy, href, meta }: EditorialCardProps) {
  return (
    <article className="program-card editorial-card">
      <p className="kicker">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{copy}</p>
      {meta ? <p className="editorial-meta">{meta}</p> : null}
      <a className="text-link" href={href}>Open →</a>
    </article>
  );
}
