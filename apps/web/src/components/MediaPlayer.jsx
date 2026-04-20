import React from 'react';

/**
 * Standardized media player for video and audio.
 * @param {Object} props - Component props.
 * @param {'video'|'audio'} props.type - Media type.
 * @param {string} props.src - Media URL.
 * @param {string} [props.title] - Media title.
 */
function MediaPlayer({ type, src, title }) {
  if (!src) return null;

  if (type === 'video') {
    return (
      <div className="rounded-2xl overflow-hidden bg-black shadow-lg border border-border/50">
        <video
          controls
          className="w-full aspect-video object-contain"
          preload="metadata"
          aria-label={title || 'Video player'}
        >
          <source src={src} type="video/mp4" />
          <source src={src} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (type === 'audio') {
    return (
      <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
        <p className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          {title || 'Audio Recording'}
        </p>
        <audio
          controls
          className="w-full h-12"
          preload="metadata"
          aria-label={title || 'Audio player'}
        >
          <source src={src} type="audio/mpeg" />
          <source src={src} type="audio/wav" />
          <source src={src} type="audio/ogg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    );
  }

  return null;
}

export default MediaPlayer;