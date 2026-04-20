import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import MediaPlayer from '@/components/MediaPlayer.jsx';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Calendar, Mic } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';
import { formatDate, getImageUrl } from '@/utils/helpers';

function CommunityVoiceDetailPage() {
  const { id } = useParams();
  const [voice, setVoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVoice = async () => {
      try {
        const record = await pb.collection('community_voices').getOne(id, { $autoCancel: false });
        setVoice(record);
      } catch (error) {
        console.error('Error fetching voice:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVoice();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Skeleton className="h-10 w-32 mb-10 rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <Skeleton className="aspect-[3/4] rounded-2xl" />
              <div className="md:col-span-2 space-y-6">
                <Skeleton className="h-12 w-3/4" />
                <Skeleton className="h-6 w-1/3" />
                <div className="space-y-3 pt-6">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!voice) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 bg-background flex items-center justify-center py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 font-serif">Voice not found</h2>
            <Link to="/community-voices">
              <Button size="lg">Return to Community Voices</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const portraitUrl = voice.portrait_image
    ? getImageUrl(voice, voice.portrait_image, { thumb: '800x1000' })
    : 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop';
  const videoUrl = voice.video_file ? pb.files.getUrl(voice, voice.video_file) : null;
  const audioUrl = voice.audio_file ? pb.files.getUrl(voice, voice.audio_file) : null;

  return (
    <>
      <Helmet>
        <title>{`${voice.name} - Community Voices`}</title>
        <meta name="description" content={voice.biography || `Listen to ${voice.name} share their story.`} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-background py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/community-voices" className="inline-block mb-10">
              <Button variant="ghost" className="hover:bg-muted -ml-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Voices
              </Button>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16 items-start">
              <div className="lg:col-span-1">
                <img
                  src={portraitUrl}
                  alt={voice.name}
                  className="w-full rounded-2xl shadow-xl sticky top-28"
                />
              </div>

              <div className="lg:col-span-2 space-y-10">
                <header>
                  <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-serif leading-tight">
                    {voice.name}
                  </h1>
                  {voice.title_role && (
                    <p className="text-xl font-medium text-primary mb-4">
                      {voice.title_role}
                    </p>
                  )}
                  {voice.date_recorded && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 w-fit px-4 py-2 rounded-full">
                      <Calendar className="w-4 h-4" />
                      <span>Recorded on {formatDate(voice.date_recorded)}</span>
                    </div>
                  )}
                </header>

                {voice.biography && (
                  <section className="prose prose-lg dark:prose-invert max-w-none">
                    <h2 className="text-2xl font-bold font-serif">Biography</h2>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
                      {voice.biography}
                    </p>
                  </section>
                )}

                <div className="space-y-8">
                  {videoUrl && (
                    <section>
                      <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">Video Interview</h2>
                      <MediaPlayer type="video" src={videoUrl} title={`Interview with ${voice.name}`} />
                    </section>
                  )}
                  {audioUrl && (
                    <section>
                      <h2 className="text-2xl font-bold text-foreground mb-6 font-serif">Audio Recording</h2>
                      <MediaPlayer type="audio" src={audioUrl} title={`Interview with ${voice.name}`} />
                    </section>
                  )}
                </div>

                {voice.story_testimony && (
                  <section className="bg-muted rounded-3xl p-8 md:p-10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-primary/10">
                      <Mic className="w-32 h-32" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-6 font-serif relative z-10">Story & Testimony</h2>
                    <blockquote className="text-foreground/90 leading-relaxed whitespace-pre-wrap text-lg md:text-xl font-serif italic relative z-10">
                      "{voice.story_testimony}"
                    </blockquote>
                  </section>
                )}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default CommunityVoiceDetailPage;