import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getImageUrl, truncateText } from '@/utils/helpers';

/**
 * Displays a summary card for an archive item.
 * @param {Object} props - Component props.
 * @param {Object} props.item - Archive item data.
 */
function ArchiveCard({ item }) {
  const thumbnailUrl = item.images?.length > 0
    ? getImageUrl(item, item.images[0], { thumb: '400x400' })
    : 'https://images.unsplash.com/photo-1607063696672-9dbc90ef3ebf?w=400&h=400&fit=crop';

  const categoryColors = {
    'Visual Art': 'bg-primary text-primary-foreground',
    'Performance': 'bg-secondary text-secondary-foreground',
    'Oral History': 'bg-accent text-accent-foreground'
  };

  return (
    <Link to={`/archive/${item.id}`} className="block h-full focus-visible:ring-2 focus-visible:ring-primary rounded-2xl outline-none">
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border-border/50 bg-card rounded-2xl group">
        <div className="aspect-[4/3] overflow-hidden bg-muted relative">
          <img
            src={thumbnailUrl}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <CardContent className="p-5 flex-1 flex flex-col">
          <Badge className={`${categoryColors[item.category] || 'bg-muted text-foreground'} mb-3 w-fit text-xs font-medium`}>
            {item.category}
          </Badge>
          <h3 className="font-serif font-semibold text-lg mb-2 line-clamp-2 text-foreground leading-snug group-hover:text-primary transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">
            {truncateText(item.description, 100)}
          </p>
          {item.location && (
            <p className="text-xs font-medium text-muted-foreground mt-4 pt-4 border-t border-border/40 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
              {item.location}
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}

export default ArchiveCard;