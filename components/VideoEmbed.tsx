type VideoEmbedProps = {
  url?: string;
  title: string;
};

function getEmbedUrl(url?: string) {
  if (!url) return null;
  if (url.includes("youtube.com/watch?v=")) {
    const id = new URL(url).searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }
  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1]?.split(/[?&]/)[0];
    return id ? `https://www.youtube.com/embed/${id}` : null;
  }
  return url;
}

export default function VideoEmbed({ url, title }: VideoEmbedProps) {
  const embedUrl = getEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className="video-placeholder" role="status">
        <p className="kicker">VIDEO</p>
        <h3>Episode video will appear here.</h3>
        <p>Once a YouTube or supported embed URL is added to the episode data, this block becomes the player.</p>
      </div>
    );
  }

  return (
    <div className="video-frame">
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
