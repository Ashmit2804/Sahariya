import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CommunityVoiceCard from '@/components/CommunityVoiceCard.jsx';
import { Skeleton } from '@/components/ui/skeleton';
import pb from '@/lib/pocketbaseClient';
import { Mic } from 'lucide-react';

function CommunityVoicesPage() {
  const [voices, setVoices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const records = await pb.collection('community_voices').getFullList({
          sort: '-created',
          $autoCancel: false
        });
        setVoices(records);
      } catch (error) {
        console.error('Error fetching voices:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchVoices();
  }, []);

  return (
    <>
      <Helmet>
        <title>Community Voices - Sahariya Digital Archive</title>
        <meta name="description" content="Listen to elders, artists, and community members share their stories." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif leading-tight">
                Voices from the Community
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This section foregrounds the perspectives of Sahariya artists, elders, and youth. Their narratives provide insight into lived experiences, creative practices, and changing cultural landscapes.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through interviews, stories, and recorded testimonies, the community speaks in its own voice—sharing knowledge, memory, and reflections on tradition and change.
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Skeleton key={i} className="w-full aspect-[3/4] rounded-2xl" />
                ))}
              </div>
            ) : voices.length === 0 ? (
              <div className="text-center py-24 bg-muted/50 rounded-3xl border border-border border-dashed">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Mic className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 font-serif">No voices yet</h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  Community voice recordings will appear here once they are added to the archive.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {voices.map((voice) => (
                  <CommunityVoiceCard key={voice.id} voice={voice} />
                ))}
              </div>
            )}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default CommunityVoicesPage;