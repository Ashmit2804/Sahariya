import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import InteractiveMap from '@/components/InteractiveMap.jsx';

function ResearchPage() {
  return (
    <>
      <Helmet>
        <title>Research & Map - Sahariya Digital Archive</title>
        <meta name="description" content="Explore academic research on Sahariya cultural preservation and an interactive map of village locations." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 font-serif leading-tight">
                  Research & Map
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                  Explore the geographic distribution of Sahariya villages and access collaborative research methodologies.
                </p>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 font-serif">
                  Interactive Village Map
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This map shows the geographic distribution of Sahariya villages in the Baran district of Rajasthan. Explore related archive items from each location.
                </p>
              </div>
              <InteractiveMap />
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 font-serif text-center">
                Methodology & Ethics
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground font-serif">Collaborative Documentation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Built on principles of collaborative ethnography, we work alongside community members as co-creators of the archive. The archive prioritizes indigenous methodologies over external academic frameworks.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground font-serif">Digital Preservation</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We employ high-resolution photography, professional audio, and detailed metadata. All files are stored in open formats to ensure long-term accessibility for future generations.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-3xl p-10 md:p-12 border border-border/50">
                <h3 className="text-2xl font-bold text-foreground mb-6 font-serif">Ethical Principles</h3>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Community members have final authority over what is documented and how it is presented.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>Sacred or restricted knowledge is completely excluded from the public archive.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0"></span>
                    <span>The archive is designed to serve community needs first, academic research second.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ResearchPage;