import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Palette, Music, Users, Map } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
function HomePage() {
  return <>
      <Helmet>
        <title>Sahariya Digital Archive - Preserving Indigenous Knowledge</title>
        <meta name="description" content="A living archive of Sahariya art, culture, and indigenous knowledge. Explore visual culture, performative traditions, and community voices." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1607063696672-9dbc90ef3ebf?auto=format&fit=crop&w=2000&q=80" alt="Traditional Sahariya art and culture" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-background"></div>
            </div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16 md:mt-0">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 font-serif leading-tight text-balance" style={{
              letterSpacing: '-0.02em'
            }}>
                A Living Archive of Art & Indigenous Knowledge
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed text-balance font-medium">
                Preserving and celebrating the cultural heritage of the Sahariya community, a Particularly Vulnerable Tribal Group in Rajasthan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/visual-culture">
                  <Button size="lg" className="h-14 px-8 text-base shadow-lg transition-all duration-300 hover:scale-105 active:scale-95">
                    Explore Visual Culture
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/archive">
                  <Button size="lg" variant="secondary" className="h-14 px-8 text-base shadow-lg bg-white/10 text-white hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95">
                    Visit the Archive
                  </Button>
                </Link>
              </div>
            </div>
          </section>
          
          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground font-serif leading-tight text-balance">
                    About the Sahariya Community
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The Sahariya are the only Particularly Vulnerable Tribal Group (PVTG) in Rajasthan, primarily residing in Baran district, particularly in Shahabad and Kishanganj. Historically dependent on forest ecosystems, the community has developed a deeply interconnected system of life in which art, ecology, and spirituality coexist.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Their cultural practices—ranging from Mandana wall paintings to Swang performances—reflect a worldview grounded in balance between human life, nature, and the divine. These traditions are not merely aesthetic forms, but constitute a living system of knowledge, memory, and identity.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Despite their rich cultural heritage, the Sahariya remain largely absent from digital and academic representation. This platform seeks to address that absence by documenting and sharing its knowledge systems in collaboration with the community itself.
                </p>
                </div>
                <div className="order-1 lg:order-2 relative">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] transform rotate-3"></div>
                  <img src="https://images.unsplash.com/photo-1696200278228-a1aaceaa0a3b?auto=format&fit=crop&w=800&q=80" alt="Traditional Sahariya Mandana wall art" className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
                </div>
              </div>
            </div>
          </section>
          
          <section className="py-24 bg-muted border-t border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center font-serif leading-tight">
                Explore the Archive
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <Link to="/visual-culture" className="group outline-none">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-card border-border/40 rounded-2xl overflow-hidden">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Palette className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 font-serif group-hover:text-primary transition-colors">Visual Culture</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-lg">
                        Discover intricate Mandana wall paintings and ecological art techniques transforming homes into living canvases.
                      </p>
                      <span className="text-primary font-semibold inline-flex items-center text-sm tracking-wide uppercase">
                        Explore Visual Art
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/performative-traditions" className="group outline-none">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-card border-border/40 rounded-2xl overflow-hidden">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Music className="w-7 h-7 text-secondary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 font-serif group-hover:text-secondary transition-colors">Performative Traditions</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-lg">
                        Experience the vibrant Swang theatre and oral narratives bringing stories, history, and wisdom to life.
                      </p>
                      <span className="text-secondary font-semibold inline-flex items-center text-sm tracking-wide uppercase">
                        Explore Performances
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/community-voices" className="group outline-none">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-card border-border/40 rounded-2xl overflow-hidden">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Users className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 font-serif group-hover:text-accent transition-colors">Community Voices</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-lg">
                        Listen to elders, artists, and community members share their knowledge and perspectives in their own words.
                      </p>
                      <span className="text-accent font-semibold inline-flex items-center text-sm tracking-wide uppercase">
                        Hear Their Stories
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
                
                <Link to="/research" className="group outline-none">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 bg-card border-border/40 rounded-2xl overflow-hidden">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Map className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 font-serif group-hover:text-primary transition-colors">Research & Map</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1 text-lg">
                        Explore the geographic distribution of villages and access academic research on preservation methodologies.
                      </p>
                      <span className="text-primary font-semibold inline-flex items-center text-sm tracking-wide uppercase">
                        View Research
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>;
}
export default HomePage;