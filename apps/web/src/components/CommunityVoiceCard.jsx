import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { getImageUrl } from '@/utils/helpers';

/**
 * Displays a portrait card for a community voice entry.
 * @param {Object} props - Component props.
 * @param {Object} props.voice - Voice data.
 */
function CommunityVoiceCard({ voice }) {
  const portraitUrl = voice.portrait_image
    ? getImageUrl(voice, voice.portrait_image, { thumb: '400x500' })
    : 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop';

  return (
    <Link to={`/community-voices/${voice.id}`} className="block h-full focus-visible:ring-2 focus-visible:ring-primary rounded-2xl outline-none">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border-border/50 group rounded-2xl">
        <div className="aspect-[3/4] overflow-hidden bg-muted relative">
          <img
            src={portraitUrl}
            alt={`Portrait of ${voice.name}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute bottom-0 left-0 w-full p-5 text-white">
            <h3 className="font-serif font-semibold text-xl mb-1 drop-shadow-sm">
              {voice.name}
            </h3>
            {voice.title_role && (
              <p className="text-sm font-medium text-white/90 drop-shadow-sm">
                {voice.title_role}
              </p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default CommunityVoiceCard;