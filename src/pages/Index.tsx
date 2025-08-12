import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
// import ContactForm from "@/components/site/ContactForm";
import { Button } from "@/components/ui/button";
import logo from "@/assets/hasbytes-logo-new.png";
const Index = () => {
  const location = useLocation();
  const siteDomain = "https://hasbytes.com";
  const canonicalUrl = `${siteDomain}${location.pathname}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HasBytes — Influencer Marketing Agency",
    url: siteDomain,
    sameAs: ["https://www.linkedin.com/in/ahmed-hasanovic-15905437a/", "https://instagram.com/hasbytes", "https://x.com/hasbytes", "https://www.tiktok.com/@has_bytes"]
  };
  return <div>
      <Helmet>
        <title>HasBytes | Influencer Marketing Agency</title>
        <meta name="description" content="HasBytes is an influencer marketing agency connecting brands with creators on commission. Contact us at ahmed.hasanovic@hasbytes.com." />
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
              <div className="flex items-center gap-4 mb-4">
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
                  <span className="text-gradient">Connecting brands</span> to the right creators
                </h1>
                
              </div>
              <p className="mt-4 text-lg text-muted-foreground">
                We’re HasBytes. We run a lean influencer marketing agency focused on one thing: pairing brands with creators who drive measurable results — on a commission basis.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Button asChild>
                  <a href="#contact" aria-label="Start a conversation">Start a conversation</a>
                </Button>
                <a href="#services" className="text-sm hover:underline">See services</a>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center" aria-hidden>
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center backdrop-blur-sm border border-border/50">
                <img src={logo} alt="" className="w-32 h-32 object-contain opacity-60" />
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
                We help brands tap into trusted creator audiences. From sourcing and vetting to negotiations and tracking, we manage the full pipeline so you pay for outcomes — not promises.
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
              <p className="text-muted-foreground">Brands and influencers can contact us at <a href="mailto:ahmed.hasanovic@hasbytes.com" className="underline underline-offset-4">ahmed.hasanovic@hasbytes.com</a>. We typically reply within 24–48 hours. You can also reach us via the socials below.</p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <a href="https://www.linkedin.com/in/ahmed-hasanovic-15905437a/" className="hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://instagram.com/hasbytes" className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://x.com/hasbytes" className="hover:underline" target="_blank" rel="noopener noreferrer">X</a>
                <a href="https://www.tiktok.com/@has_bytes" className="hover:underline" target="_blank" rel="noopener noreferrer">TikTok</a>
              </div>
            </div>
            <div>
              <div className="rounded-lg border border-border bg-card p-6 shadow-[var(--shadow-elegant)]">
                <h3 className="font-medium mb-2">Get in touch</h3>
                <p className="text-sm text-muted-foreground">Prefer email? We’re just one message away.</p>
                <div className="mt-4">
                  <Button asChild>
                    <a href="mailto:ahmed.hasanovic@hasbytes.com" aria-label="Email HasBytes">Email us</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;