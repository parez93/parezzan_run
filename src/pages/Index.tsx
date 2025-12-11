
import React from 'react';
import Header from '@/components/Header';
import CtaButton from '@/components/CtaButton';
import StatsSection from '@/components/StatsSection';
import MedalsSection from '@/components/MedalsSection';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import TimesSection from "@/components/TimesSection.tsx";


const Index = () => {
    return (
        <>
            <Helmet>
                <title>Federico Parezzan.Run</title>
                <link rel="icon" type="image/png" href="/favicon.png"/>
                <meta name="description"
                      content="Storia di un maratoneta italiano. Scopri il percorso di Federico Parezzan, gare, medaglie e risultati."/>
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Federico Parezzan",
              "url": "https://parezzan-run.web.app",
              "image": "/src/assets/profile-image.png",
              "sameAs": [
                "https://instagram.com/parezzan.run",
                "https://twitter.com/parezzan.run"
              ],
              "jobTitle": "Maratoneta",
              "description": "Ero sempre l’ultimo. Ho iniziato camminando, poi correndo. Ora corro la mezza maratona con orgoglio!"
            }
          `}
                </script>
            </Helmet>
            <div className="min-h-screen flex flex-col bg-gray-50">
                <Header />
                <main className="flex-grow">
                    <article className="relative">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-runner-dark-blue/10 to-runner-light-pink/20 -z-10"></div>
                        <section aria-labelledby="cta-section">
                            <CtaButton/>
                        </section>
                        <section aria-labelledby="stats-section">
                            <StatsSection/>
                        </section>
                        <section aria-labelledby="times-section">
                            <TimesSection/>
                        </section>
{/*                        <section aria-labelledby="medals-section">
                            <MedalsSection/>
                        </section>*/}
                    </article>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default Index;
