import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ArchiveCard from '@/components/ArchiveCard.jsx';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import pb from '@/lib/pocketbaseClient';
import { ArchiveX } from 'lucide-react';

function ArchivePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'All');

  const categories = ['All', 'Visual Art', 'Performance', 'Oral History'];

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const filter = activeCategory !== 'All' ? `category = "${activeCategory}"` : '';
        const records = await pb.collection('archive_items').getFullList({
          filter,
          sort: '-created',
          $autoCancel: false
        });
        setItems(records);
      } catch (error) {
        console.error('Error fetching archive items:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [activeCategory]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <>
      <Helmet>
        <title>Archive - Sahariya Digital Archive</title>
        <meta name="description" content="Browse the complete archive of Sahariya visual art, performances, and oral histories." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 bg-background py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif leading-tight">
                The Archive: Preserving a Living Heritage
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This digital archive is a curated collection of visual, audio, and textual materials documenting Sahariya cultural practices. It is designed as an open-access resource while maintaining ethical responsibility and community consent.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  onClick={() => handleCategoryChange(category)}
                  className="rounded-full px-6 transition-all duration-200"
                >
                  {category}
                </Button>
              ))}
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="flex flex-col space-y-4">
                    <Skeleton className="aspect-[4/3] rounded-2xl" />
                    <Skeleton className="h-6 w-3/4 rounded-md" />
                    <Skeleton className="h-4 w-full rounded-md" />
                    <Skeleton className="h-4 w-2/3 rounded-md" />
                  </div>
                ))}
              </div>
            ) : items.length === 0 ? (
              <div className="text-center py-24 bg-muted/50 rounded-3xl border border-border border-dashed">
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <ArchiveX className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 font-serif">No items found</h3>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  {activeCategory === 'All'
                    ? 'Archive items will appear here once they are added.'
                    : `No ${activeCategory} items found. Try selecting a different category.`}
                </p>
                {activeCategory !== 'All' && (
                  <Button variant="outline" className="mt-8" onClick={() => handleCategoryChange('All')}>
                    Clear Filter
                  </Button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item) => (
                  <ArchiveCard key={item.id} item={item} />
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

export default ArchivePage;