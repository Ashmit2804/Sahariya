import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ImageGallery from '@/components/ImageGallery.jsx';
import MediaPlayer from '@/components/MediaPlayer.jsx';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, MapPin, User, Calendar } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { formatDate } from '@/utils/helpers';

function ArchiveDetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const record = await pb.collection('archive_items').getOne(id, { $autoCancel: false });
        setItem(record);
      } catch (error) {
        console.error('Error fetching archive item:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchItem();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-10 w-32 mb-10 rounded-lg" />
            <Skeleton className="h-12 w-3/4 mb-6 rounded-lg" />
            <Skeleton className="h-6 w-1/3 mb-10 rounded-lg" />
            <Skeleton className="aspect-video rounded-2xl mb-8" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background flex items-center justify-center py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">Item not found</h2>
            <Link to="/archive">
              <Button size="lg">Return to Archive</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const imageUrls = item.images?.map(img => pb.files.getUrl(item, img)) || [];
  const audioUrl = item.audio_file ? pb.files.getUrl(item, item.audio_file) : null;
  const categoryColors = {
    'Visual Art': 'bg-primary text-primary-foreground',
    'Performance': 'bg-secondary text-secondary-foreground',
    'Oral History': 'bg-accent text-accent-foreground'
  };

  return (
    <>
      <Helmet>
        <title>{`${item.title} - Sahariya Digital Archive`}</title>
        <meta name="description" content={item.description} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/archive" className="inline-block mb-10">
              <Button variant="ghost" className="hover:bg-muted -ml-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Archive
              </Button>
            </Link>

            <header className="mb-10">
              <Badge className={`${categoryColors[item.category] || 'bg-muted text-foreground'} mb-5 text-sm px-3 py-1`}>
                {item.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif leading-tight text-balance">
                {item.title}
              </h1>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground bg-muted/50 p-4 rounded-xl border border-border/50">
                {item.location && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-medium">{item.location}</span>
                  </div>
                )}
                {item.participant_name && (
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    <span className="font-medium">{item.participant_name}</span>
                  </div>
                )}
                {item.date && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="font-medium">{formatDate(item.date)}</span>
                  </div>
                )}
              </div>
            </header>

            <div className="space-y-12">
              {imageUrls.length > 0 && <ImageGallery images={imageUrls} alt={item.title} />}
              {item.video_url && <MediaPlayer type="video" src={item.video_url} title={item.title} />}
              {audioUrl && <MediaPlayer type="audio" src={audioUrl} title={item.title} />}

              <article className="prose prose-lg max-w-none dark:prose-invert">
                <h2 className="text-2xl font-bold text-foreground font-serif">Description</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                  {item.description}
                </p>
              </article>

              {item.metadata && (
                <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
                  <h3 className="text-xl font-bold text-foreground mb-4 font-serif">Additional Information</h3>
                  <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap">
                    {item.metadata}
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ArchiveDetailPage;