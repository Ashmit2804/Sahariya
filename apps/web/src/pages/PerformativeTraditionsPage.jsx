import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

function PerformativeTraditionsPage() {
  return (
    <>
      <Helmet>
        <title>Performative Traditions - Sahariya Digital Archive</title>
        <meta name="description" content="Experience the vibrant Swang theatre and oral narratives of the Sahariya community." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-serif leading-tight">
                  Performative & Oral Traditions
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                  Sahariya culture is equally expressed through performance, oral storytelling, and ritual enactments. These traditions carry collective memory, ethical values, and ecological knowledge across generations.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif leading-tight">
                    Swang Theatre
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Swang is a performative tradition combining drama, music, and storytelling. It reflects the community's social realities, mythological narratives, and moral teachings.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=80"
                    alt="Traditional Swang theatre performance"
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80"
                    alt="Elder sharing oral narratives"
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif leading-tight">
                    Folk Songs and Oral Narratives
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Songs and stories serve as repositories of history, belief systems, and lived experiences. They are performed during rituals, festivals, and communal gatherings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif leading-tight">
                    Ritual Performances and Festivals
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Events such as local fairs and seasonal celebrations bring together performance, art, and community participation, reinforcing social bonds and cultural continuity.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1564462359630-3f49f5c01ee4?q=80&w=2338&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0"
                    alt="Traditional Swang theatre performance"
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-32 bg-secondary/5 text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-serif">
                Explore Performance Archive
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                Access recordings of Swang performances, oral narratives, and musical traditions.
              </p>
              <Link to="/archive?category=Performance">
                <Button size="lg" className="h-14 px-10 text-lg shadow-lg hover:scale-105 transition-all bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  View Performances
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default PerformativeTraditionsPage;