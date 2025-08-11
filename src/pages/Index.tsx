import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ContactForm from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";

const Index = () => {
  const location = useLocation();
  const canonicalUrl = typeof window !== "undefined" ? `${window.location.origin}${location.pathname}` : "";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ahmed Hasanovic — Influencer Marketing Agency",
    url: canonicalUrl,
    sameAs: [
      "#", // LinkedIn
      "#", // Instagram
      "#", // Twitter/X
    ],
  };

  return (
    <div>
      <Helmet>
        <title>Ahmed Hasanovic | Influencer Marketing Agency</title>
        <meta
          name="description"
          content="Influencer marketing agency helping brands connect with creators on commission. Contact Ahmed Hasanovic."
        />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Header />

      <main id="home">
        {/* Hero */}
        <section className="section">
          <div className="container grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-3">Influencer Marketing Agency</p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                <span className="text-gradient">Connecting brands</span> to the right creators
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                I’m Ahmed Hasanovic. I run a lean IMA focused on one thing: pairing brands with creators who drive measurable results — on a commission basis.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button asChild>
                  <a href="#contact" aria-label="Start a conversation">Start a conversation</a>
                </Button>
                <a href="#services" className="text-sm hover:underline">See services</a>
              </div>
            </div>
            <div className="hidden md:block" aria-hidden>
              <div className="rounded-lg border border-border bg-card p-10 shadow-[var(--shadow-elegant)]">
                <div className="space-y-4">
                  <div className="h-3 w-2/3 rounded bg-secondary" />
                  <div className="h-3 w-1/2 rounded bg-secondary" />
                  <div className="h-3 w-4/5 rounded bg-secondary" />
                  <div className="h-3 w-3/5 rounded bg-secondary" />
                </div>
                <p className="sr-only">Sleek placeholder illustrating minimal design.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section border-t border-border">
          <div className="container grid md:grid-cols-3 gap-8 items-start">
            <h2 className="text-2xl font-semibold md:col-span-1">About the agency</h2>
            <div className="space-y-4 text-muted-foreground md:col-span-2">
              <p>
                I help brands tap into trusted creator audiences. From sourcing and vetting to negotiations and tracking, I manage the full pipeline so you pay for outcomes — not promises.
              </p>
              <p>
                Lean, transparent, and aligned incentives. That’s how influencer marketing should work.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-8">Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <article className="rounded-lg border border-border bg-card p-6 transition-transform hover:-translate-y-0.5 shadow-[var(--shadow-elegant)]">
                <h3 className="font-medium mb-2">Creator matchmaking</h3>
                <p className="text-muted-foreground">Identify, vet, and shortlist creators that fit your audience and brand goals.</p>
              </article>
              <article className="rounded-lg border border-border bg-card p-6 transition-transform hover:-translate-y-0.5 shadow-[var(--shadow-elegant)]">
                <h3 className="font-medium mb-2">Deal structuring</h3>
                <p className="text-muted-foreground">Commission-based partnerships with clear deliverables and performance terms.</p>
              </article>
              <article className="rounded-lg border border-border bg-card p-6 transition-transform hover:-translate-y-0.5 shadow-[var(--shadow-elegant)]">
                <h3 className="font-medium mb-2">Tracking & reporting</h3>
                <p className="text-muted-foreground">Clean attribution and simple reports so you can scale what works.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section border-t border-border">
          <div className="container grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 id="contact-heading" className="text-2xl font-semibold mb-2">Let’s talk</h2>
              <p className="text-muted-foreground">Email placeholder for now. Use the form — I’ll reply within 24–48 hours. Or reach me via socials below.</p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <a href="#" className="hover:underline">LinkedIn</a>
                <a href="#" className="hover:underline">Instagram</a>
                <a href="#" className="hover:underline">Twitter/X</a>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
