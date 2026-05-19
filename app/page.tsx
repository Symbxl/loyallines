import Image from "next/image";
import LeadForm from "./components/LeadForm";

export default function Home() {
  return (
    <main className="flex-1">
      <Nav />
      <Hero />
      <MobileLeadSection />
      <AvailablePuppies />
      <Gallery />
      <WhyChoose />
      <PhotoBreak />
      <Testimonials />
      <About />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}

/* ---------------------------- Nav --------------------------- */

function Nav() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-5 sm:px-8 pt-4 sm:pt-5">
      <div className="max-w-7xl mx-auto pl-6 pr-4 sm:pl-8 sm:pr-5 py-4 flex items-center justify-between rounded-full bg-white/40 backdrop-blur-md border border-white/50 shadow-lg shadow-stone-900/5">
        <a href="#" className="flex items-center gap-3">
          <span className="w-12 h-12 rounded-full bg-gradient-to-br from-[#c8924a] to-[#7c5320] flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg">
            L
          </span>
          <span className="font-display text-stone-900 text-[24px] tracking-tight leading-none">
            Loyal Lines
            <span className="block text-[12px] uppercase tracking-[0.22em] text-[#8a5a1c] mt-1.5">
              Shepherds
            </span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[17px] font-medium text-stone-700">
          <a href="#puppies" className="hover:text-stone-900 transition">Puppies</a>
          <a href="#gallery" className="hover:text-stone-900 transition">Gallery</a>
          <a href="#about" className="hover:text-stone-900 transition">About</a>
          <a href="#faq" className="hover:text-stone-900 transition">FAQ</a>
        </nav>
        <a
          href="#reserve"
          className="hidden sm:inline-flex items-center gap-2 h-13 px-6 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-[15px] transition shadow-lg shadow-stone-900/20"
        >
          <PawIcon className="w-5 h-5 text-[#ffd28a]" />
          Reserve a puppy
        </a>
      </div>
    </header>
  );
}

/* --------------------------- Hero --------------------------- */

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end lg:items-center pt-56 pb-12 sm:pt-32 sm:pb-20 overflow-hidden bg-[#fdf6ec]">
      <Image
        src="/images/snow-forest.jpg"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-[1.05fr_minmax(0,460px)] gap-12 lg:gap-16 items-center">
        <div className="max-w-2xl rounded-3xl bg-white/40 backdrop-blur-md border border-white/50 shadow-xl shadow-stone-900/5 p-7 sm:p-9 lg:-translate-y-32">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur border border-[#e9c891] text-[11px] uppercase tracking-[0.22em] text-[#8a5a1c] mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#c8924a] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c8924a]" />
            </span>
            New puppies just arrived
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-stone-900">
            Meet your<br />
            new <span className="relative inline-block">
              <span className="relative z-10">best friend</span>
              <span className="absolute left-0 right-0 bottom-1 h-3 bg-[#ffd28a]/70 -z-0 rounded-full" />
            </span>
            <span className="block mt-2 text-[#b07c30] italic font-normal text-4xl sm:text-5xl lg:text-6xl">
              with a wagging tail.
            </span>
          </h1>
          <p className="mt-6 text-lg text-stone-700 max-w-xl leading-relaxed">
            Sweet, snuggly, brown & black German Shepherd puppies — raised on
            our living-room rug with kids, cuddles, and a whole lot of love.
            Healthy, happy, and ready to come home with you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-stone-700">
            <Bullet>Health tested</Bullet>
            <Bullet>AKC registered</Bullet>
            <Bullet>Family raised</Bullet>
            <Bullet>Lifetime support</Bullet>
          </div>

          <div className="mt-9 flex items-center gap-5">
            <div className="flex -space-x-3">
              {[
                "/images/puppy-1.jpg",
                "/images/puppy-2.jpg",
                "/images/puppy-basket.jpg",
                "/images/puppy-brown-black.jpg",
              ].map((src) => (
                <span
                  key={src}
                  className="relative w-11 h-11 rounded-full overflow-hidden ring-4 ring-[#fdf6ec] shadow-md"
                >
                  <Image src={src} alt="" fill sizes="44px" className="object-cover" />
                </span>
              ))}
            </div>
            <p className="text-sm text-stone-600 leading-snug">
              <span className="font-semibold text-stone-900">12 happy families</span> brought a Loyal Lines puppy home this season.
            </p>
          </div>
        </div>

        <div id="reserve" className="relative hidden lg:block lg:justify-self-end w-full lg:max-w-[460px] lg:translate-y-56">
          <div className="absolute -top-6 -left-6 hidden lg:block">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#c8924a] text-white text-xs font-semibold px-4 py-2 shadow-lg shadow-[#c8924a]/30 rotate-[-6deg]">
              <PawIcon className="w-4 h-4" />
              Reserve yours
            </span>
          </div>
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-[#ffd9a1] via-white/60 to-[#c8924a] shadow-[0_30px_60px_-20px_rgba(124,83,32,0.45)]">
            <LeadForm variant="hero" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-stone-950" />
    </section>
  );
}

function MobileLeadSection() {
  return (
    <section id="reserve" className="relative lg:hidden py-16 px-5 sm:px-8 overflow-hidden">
      <Image
        src="/willow-sophia.avif"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-stone-950/55" />
      <div className="relative z-10 max-w-md mx-auto">
        <div className="text-center mb-6">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#ffd28a] mb-3">
            Reserve yours
          </p>
          <h2 className="font-display text-3xl sm:text-4xl text-stone-50 leading-tight">
            Bring a puppy home.
          </h2>
        </div>
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-br from-[#ffd9a1] via-white/60 to-[#c8924a] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.55)]">
          <LeadForm variant="hero" />
        </div>
      </div>
    </section>
  );
}

function PawIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <ellipse cx="5" cy="11" rx="1.8" ry="2.4" />
      <ellipse cx="9.5" cy="7.5" rx="1.8" ry="2.4" />
      <ellipse cx="14.5" cy="7.5" rx="1.8" ry="2.4" />
      <ellipse cx="19" cy="11" rx="1.8" ry="2.4" />
      <path d="M12 12.2c-3 0-5.5 2.4-5.5 5 0 1.7 1.4 2.8 3 2.8 1.1 0 1.7-.5 2.5-.5s1.4.5 2.5.5c1.6 0 3-1.1 3-2.8 0-2.6-2.5-5-5.5-5z" />
    </svg>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-[#c8924a]" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
      {children}
    </span>
  );
}

/* ---------------------- Available puppies ------------------- */

function AvailablePuppies() {
  const litter = [
    {
      img: "/ranger.avif",
      name: "Ranger",
      sex: "Male",
      age: "8 weeks",
      color: "Black & tan, brown saddle",
      status: "Available",
    },
    {
      img: "/images/puppy-1.jpg",
      name: "Willow",
      sex: "Female",
      age: "9 weeks",
      color: "Rich black & tan",
      status: "Available",
    },
    {
      img: "/images/puppy-basket.jpg",
      name: "Atlas",
      sex: "Male",
      age: "10 weeks",
      color: "Solid black",
      status: "Reserved",
    },
  ];
  return (
    <section id="puppies" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          eyebrow="Current litter"
          title="This week's available puppies"
          sub="New litters come and go fast. Reserve your spot — we only release puppies to vetted homes."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {litter.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-stone-700 transition"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={p.img}
                  alt={`${p.name} — ${p.color} German Shepherd puppy`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] uppercase tracking-[0.18em] font-medium bg-stone-950/70 backdrop-blur border border-stone-700 text-stone-100">
                  {p.status === "Reserved" ? (
                    <span className="text-stone-400">{p.status}</span>
                  ) : (
                    <span className="text-[#e0bc7e]">{p.status}</span>
                  )}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between mb-1">
                  <h3 className="font-display text-2xl text-stone-50">{p.name}</h3>
                  <span className="text-xs uppercase tracking-[0.2em] text-stone-400">{p.sex}</span>
                </div>
                <p className="text-sm text-stone-400">
                  {p.age} · {p.color}
                </p>
                <a
                  href="#reserve"
                  className="mt-4 inline-flex items-center text-sm font-medium text-[#c8924a] hover:text-[#e0bc7e] transition"
                >
                  Reserve {p.name} →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- Gallery ------------------------ */

function Gallery() {
  // Varied-height grid using CSS columns for a magazine feel
  const photos = [
    { src: "/images/beach-walk.jpg", alt: "Black German Shepherd walking on beach" },
    { src: "/images/autumn.jpg", alt: "German Shepherd in autumn leaves" },
    { src: "/images/snow-forest.jpg", alt: "German Shepherd in a snowy forest" },
    { src: "/images/friendly.jpg", alt: "Friendly German Shepherd portrait" },
    { src: "/images/brown-gsd.jpg", alt: "Brown German Shepherd" },
    { src: "/images/forest-field.jpg", alt: "Shepherd standing in a forest field" },
    { src: "/images/tongue-out.jpg", alt: "German Shepherd with tongue out" },
    { src: "/images/resting.jpg", alt: "German Shepherd resting" },
    { src: "/images/beach-action.jpg", alt: "German Shepherd at the beach" },
    { src: "/images/dusk.jpg", alt: "German Shepherd at dusk" },
  ];
  return (
    <section id="gallery" className="py-20 sm:py-28 bg-stone-950 border-y border-stone-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          eyebrow="The pack"
          title="A glimpse of our lines"
          sub="Confident, structurally sound, and unmistakably loyal. These are dogs we'd bring home — because we already have."
        />
        <div className="mt-12 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {photos.map((p, idx) => (
            <div
              key={p.src}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-stone-900"
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={800}
                height={1000}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full h-auto object-cover hover:scale-[1.02] transition duration-500"
                priority={idx < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------ Why Choose Us --------------------- */

function WhyChoose() {
  const items = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Bred for temperament first",
      body: "Loyalty, stable nerves, and family-safe drive. We never breed dogs that aren't sound in mind and body.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3z" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      title: "Health-tested parents",
      body: "OFA hips & elbows, DM clear, eye exams, and full genetic panels. You get the paperwork, not just our word.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M3 12h4l3-9 4 18 3-9h4" />
        </svg>
      ),
      title: "Raised inside our home",
      body: "Puppies are socialized with kids, other dogs, household noise, and early neurological stimulation from day three.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
        </svg>
      ),
      title: "2-year health guarantee",
      body: "Full written guarantee against genetic defects. If anything happens, we make it right — that's the deal.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      title: "Lifetime breeder support",
      body: "Training questions at 3am? Feeding advice at 3 years? You'll have my cell. We don't ghost our puppy families.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      title: "Take-back promise",
      body: "If life changes and you can't keep your dog — ever — we take them back. No Loyal Lines dog ever sees a shelter.",
    },
  ];
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          eyebrow="Why Loyal Lines"
          title="The right Shepherd, raised the right way."
          sub="There are a lot of breeders out there. This is what makes ours different."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-7 rounded-2xl border border-stone-800 bg-stone-900/40 hover:border-stone-700 hover:bg-stone-900/70 transition">
              <div className="w-12 h-12 rounded-xl bg-[#c8924a]/10 border border-[#c8924a]/30 flex items-center justify-center text-[#c8924a] mb-5">
                {it.icon}
              </div>
              <h3 className="font-display text-xl text-stone-50 mb-2">{it.title}</h3>
              <p className="text-stone-400 text-[15px] leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Photo break ---------------------- */

function PhotoBreak() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
      <Image
        src="/images/snow-forest.jpg"
        alt="German Shepherd in snowy forest"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-stone-950/60" />
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <blockquote className="max-w-3xl text-center">
          <p className="font-display text-3xl sm:text-5xl text-stone-50 leading-tight italic">
            "A Loyal Lines Shepherd doesn't just live in your house —
            <span className="text-[#e0bc7e]"> it watches the door for you."</span>
          </p>
          <footer className="mt-6 text-sm uppercase tracking-[0.25em] text-stone-300">
            — The breeders behind every litter
          </footer>
        </blockquote>
      </div>
    </section>
  );
}

/* ----------------------- Testimonials ----------------------- */

function Testimonials() {
  const reviews = [
    {
      quote: "Our boy Koda is everything they promised. Confident with our kids, calm in the house, sharp when something's off in the yard. Worth every cent and every mile of the drive.",
      who: "Marcus & Lily R.",
      where: "Dallas, TX",
    },
    {
      quote: "I've owned Shepherds for 20 years. Loyal Lines is the real deal — health-tested parents, proper temperament, and they actually pick up the phone after the sale.",
      who: "Diane K.",
      where: "Atlanta, GA",
    },
    {
      quote: "We waited four months for our girl and would do it again. Their puppies come socialized, leash-introduced, and crate-started. We didn't bring home a project, we brought home a partner.",
      who: "James & Priya M.",
      where: "Phoenix, AZ",
    },
  ];
  return (
    <section className="py-20 sm:py-28 bg-stone-950 border-y border-stone-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHead
          eyebrow="Families we've placed with"
          title="They didn't take our word for it."
          sub="And they don't have to. Here's what Loyal Lines puppy families say."
        />
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.who} className="p-7 rounded-2xl bg-stone-900 border border-stone-800">
              <div className="flex gap-1 text-[#c8924a] mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <blockquote className="text-stone-200 leading-relaxed">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-5 text-sm text-stone-400">
                <span className="block font-medium text-stone-200">{r.who}</span>
                {r.where}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

/* --------------------------- About -------------------------- */

function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image src="/images/grass-puppy.jpg" alt="Loyal Lines puppy in grass" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-10">
            <Image src="/images/brown-gsd.jpg" alt="Brown German Shepherd" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </div>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#c8924a] mb-4">
            Our story
          </p>
          <h2 className="font-display text-4xl sm:text-5xl text-stone-50 leading-[1.05]">
            We breed dogs we'd<br />
            trust with our kids.
          </h2>
          <div className="mt-7 space-y-5 text-stone-300 text-[17px] leading-relaxed">
            <p>
              Loyal Lines started with a single German Shepherd who changed everything
              about how our family thought about dogs. Years later, we still breed for
              the same thing: a Shepherd that's stable, sharp, and unmistakably loyal.
            </p>
            <p>
              We focus on the brown and black classic working lines — strong bone,
              correct angulation, calm in the house, switched-on in the yard. Every
              litter is raised in our living room, not a kennel. Every puppy goes home
              with a written guarantee and a breeder you can actually call.
            </p>
            <p>
              We're not the biggest breeder. We're not the cheapest. We're the one
              you'll come back to for your second Shepherd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- FAQ --------------------------- */

function Faq() {
  const items = [
    {
      q: "What does a Loyal Lines puppy cost?",
      a: "Puppies range from $2,800 to $3,800 depending on the litter and color. A non-refundable $500 deposit holds your spot on the reservation list and is applied to the final price.",
    },
    {
      q: "Where are you located? Do you ship?",
      a: "We're based in the Southeast and welcome in-person pickups. For families farther away, we offer ground transport with a vetted pet courier or can meet at major airports. We don't cargo-ship puppies.",
    },
    {
      q: "What's included with each puppy?",
      a: "AKC paperwork, age-appropriate vaccines, dewormings, a full vet exam within 72 hours of pickup, microchip, starter food, a blanket with the litter's scent, and a 2-year written health guarantee.",
    },
    {
      q: "Do you do protection or working line dogs?",
      a: "Our lines have working-dog drive but stable, family-friendly temperaments. We can recommend whether a particular puppy is better suited for a working home, a sport home, or a family companion.",
    },
    {
      q: "When can I pick up my puppy?",
      a: "Puppies go home at 8 weeks. We don't release earlier — those last weeks with mom and littermates are critical for temperament.",
    },
    {
      q: "What if something happens and I can't keep my dog?",
      a: "Call us first. No matter what, no matter when, we take our dogs back. No Loyal Lines puppy ever ends up in a shelter or rescue.",
    },
  ];
  return (
    <section id="faq" className="py-20 sm:py-28 bg-stone-950 border-y border-stone-900">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHead
          eyebrow="Common questions"
          title="Things people ask before they reserve."
        />
        <div className="mt-10 divide-y divide-stone-800 border-y border-stone-800">
          {items.map((it) => (
            <details key={it.q} className="group py-5">
              <summary className="flex items-start justify-between cursor-pointer list-none gap-6">
                <span className="font-display text-lg sm:text-xl text-stone-50 leading-snug">
                  {it.q}
                </span>
                <span className="mt-1 flex-shrink-0 w-7 h-7 rounded-full border border-stone-700 flex items-center justify-center text-stone-400 group-open:rotate-45 transition">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="w-3.5 h-3.5">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-stone-300 text-[15px] leading-relaxed pr-12">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- Final CTA ------------------------ */

function FinalCta() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <Image
        src="/images/beach-stand.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-stone-950/85" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#c8924a] mb-4">
            Ready when you are
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-stone-50 leading-[1.05]">
            Your Shepherd is in<br /> the next litter.
          </h2>
          <p className="mt-6 text-lg text-stone-300 max-w-lg leading-relaxed">
            Send us a quick note and we'll text or call you within 24 hours with
            the current litter, prices, and how to lock in your spot.
          </p>
          <div className="mt-8 space-y-2 text-stone-300 text-sm">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 text-[#c8924a]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.88.33 1.74.63 2.57a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.51-1.51a2 2 0 0 1 2.11-.45c.83.3 1.69.51 2.57.63A2 2 0 0 1 22 16.92z" />
              </svg>
              Talk to us: <span className="text-stone-100">(555) 010-LINE</span>
            </div>
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4 text-[#c8924a]">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@loyallines.com
            </div>
          </div>
        </div>
        <div className="w-full max-w-md lg:justify-self-end">
          <LeadForm variant="section" />
        </div>
      </div>
    </section>
  );
}

/* -------------------------- Footer -------------------------- */

function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c8924a] to-[#7c5320] flex items-center justify-center text-stone-950 font-display font-bold text-lg">
              L
            </span>
            <span className="font-display text-stone-50 text-[17px] leading-none">
              Loyal Lines
              <span className="block text-[10px] uppercase tracking-[0.22em] text-[#c8924a] mt-1">
                Shepherds
              </span>
            </span>
          </div>
          <p className="text-stone-400 text-sm leading-relaxed">
            Brown & black German Shepherds, raised in our home and bred for the
            families they'll guard.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-4">Visit</h4>
          <ul className="space-y-2 text-sm text-stone-300">
            <li><a href="#puppies" className="hover:text-stone-50">Available Puppies</a></li>
            <li><a href="#gallery" className="hover:text-stone-50">Gallery</a></li>
            <li><a href="#about" className="hover:text-stone-50">Our Story</a></li>
            <li><a href="#faq" className="hover:text-stone-50">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-4">Get in touch</h4>
          <ul className="space-y-2 text-sm text-stone-300">
            <li>hello@loyallines.com</li>
            <li>(555) 010-LINE</li>
            <li>Mon–Sat · 9am–7pm CT</li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-stone-500 mb-4">Reserve</h4>
          <a
            href="#reserve"
            className="inline-flex items-center h-11 px-5 rounded-full bg-[#c8924a] hover:bg-[#b07c30] text-stone-950 font-semibold text-sm transition"
          >
            See available puppies →
          </a>
        </div>
      </div>
      <div className="border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Loyal Lines Shepherds. All rights reserved.</p>
          <p>AKC Registered · Health Guaranteed · Family Raised</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------------------- Section header ---------------------- */

function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] uppercase tracking-[0.25em] text-[#c8924a] mb-3">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl sm:text-5xl text-stone-50 leading-[1.05]">
        {title}
      </h2>
      {sub && <p className="mt-4 text-stone-400 text-[17px] leading-relaxed">{sub}</p>}
    </div>
  );
}
