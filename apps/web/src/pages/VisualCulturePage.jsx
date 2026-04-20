import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { Button } from '@/components/ui/button';

function VisualCulturePage() {
  return (
    <>
      <Helmet>
        <title>Visual Culture - Sahariya Digital Archive</title>
        <meta name="description" content="Explore the intricate Mandana wall paintings and ecological art techniques of the Sahariya community." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-serif leading-tight">
                  Visual Culture: Art as Living Knowledge
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                  Sahariya visual culture is embedded in everyday life, ritual practice, and ecological relationships. Created primarily by women, these art forms are not decorative but symbolic, expressing cosmology, morality, and social structure.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif leading-tight">
                    Mandana Paintings
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Mandana are ritual wall and floor paintings created using natural materials such as clay, lime, and plant pigments. These geometric and symbolic designs are closely tied to festivals, agricultural cycles, and life events.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="https://images.unsplash.com/photo-1696200278228-a1aaceaa0a3b?auto=format&fit=crop&w=1000&q=80"
                    alt="Traditional Sahariya Mandana wall painting"
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
                    src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&w=1000&q=80"
                    alt="Natural pigments used in Sahariya art"
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif leading-tight">
                    Materials and Techniques
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Colours are derived from locally available materials—red ochre, white lime, black carbon, and plant-based dyes—reflecting a sustainable, ecological approach to art-making.
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
                    Symbolism and Meaning
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Motifs often represent fertility, protection, harmony, and cosmic order. These visual forms function as a cultural language through which the community expresses its worldview.
                  </p>
                </div>
                <div className="order-1 lg:order-2">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1674898512373-21774d56f12c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D$0"
                    alt="Traditional Sahariya Mandana wall painting"
                    className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="py-32 bg-primary/5 text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-serif">
                Explore the Visual Archive
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                Browse our collection of documented Mandana paintings, ecological art techniques, and contemporary expressions.
              </p>
              <Link to="/archive?category=Visual+Art">
                <Button size="lg" className="h-14 px-10 text-lg shadow-lg hover:scale-105 transition-all">
                  View Visual Art
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

export default VisualCulturePage;