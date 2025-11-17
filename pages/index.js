import { useState, useEffect, useRef } from "react";


/* ------------------------ SAMPLE DATA ------------------------ */
const NOTICES = [
  { id: 1, title: "Public Notice Regarding the Confirmation of Comrade Dai Linxuan", date: "2025-11-05", summary: "This notice confirms the candidacy of Comrade Dai Linxuan for Party Membership..." },
  { id: 2, title: "2025 National Student Financial Aid Award selection results", date: "2025-10-31", summary: "Recommended list for Boya International College financial awards..." },
  { id: 3, title: "Youth League recommendation announcement", date: "2025-10-29", summary: "Preliminary announcement regarding recommendation work..." }
];

const NEWS = [
  { id: 1, title: "Boya Hosts IELTS Writing Seminar", date: "2025-11-04", excerpt: "Our college successfully hosts IELTS writing teaching seminar..." },
  { id: 2, title: "Harmony builds dreams", date: "2025-11-01", excerpt: "Moral education and character development showcase youthful brilliance..." },
  { id: 3, title: "Mental Health Promotion Event", date: "2025-10-20", excerpt: "Mental health knowledge promotion activities..." }
];

const PARTNERS = ["Monash", "Coventry", "Queensland", "Bristol", "Western Australia", "Leeds", "Southampton", "UNSW"];





/* ----------------------------- ROOT ----------------------------- */
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
      <div className="block md:hidden"><MobileLayout /></div>
      <div className="hidden md:block"><DesktopLayout /></div>
    </div>
  );
}

/* ----------------------------- MOBILE ----------------------------- */
function MobileLayout() {
  return (
    <div className="max-w-md mx-auto px-4 pb-20">
      <HeaderMobile />
      <HeroMobile />
      <Section title="Notices"><NoticesAccordion items={NOTICES} /></Section>
      <Section title="College News"><NewsList items={NEWS} /></Section>
      <Section title="About Boya"><About /></Section>
      <Section title="Partner Universities"><PartnersCarousel logos={PARTNERS} /></Section>
      <FooterMobile />
    </div>
  );
}

/* ----------------------------- DESKTOP ----------------------------- */
function DesktopLayout() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-8">
      <HeaderDesktop />
      <HeroDesktop />

      <div className="grid grid-cols-3 gap-6 mt-10">
        <div className="col-span-2 space-y-8">
          <GlassCard><Section title="College News"><NewsList items={NEWS} /></Section></GlassCard>
          <GlassCard><Section title="About Boya"><About /></Section></GlassCard>
        </div>

        <div className="col-span-1 space-y-8">
          <GlassCard><Section title="Notices"><NoticesAccordion items={NOTICES} /></Section></GlassCard>
          <GlassCard><Section title="Partner Universities"><PartnersCarousel logos={PARTNERS} /></Section></GlassCard>
        </div>
      </div>

      <FooterDesktop />
    </div>
  );
}

/* ----------------------------- COMPONENTS ----------------------------- */
function HeaderMobile() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white/50 backdrop-blur-xl border-b border-blue-200/30 shadow-lg rounded-b-xl z-50">
      <div className="flex items-center justify-between py-3 m-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-full flex items-center justify-center font-bold shadow">TW</div>
          <div>
            <div className="text-sm font-semibold text-blue-900">Test Web</div>
            <div className="text-xs text-blue-600">Boya Int. College</div>
          </div>
        </div>

        <button onClick={() => setOpen(!open)} className="p-2 rounded-lg hover:bg-blue-50">
          <svg width="22" height="22" stroke="#2563eb" strokeWidth="2" fill="none"><path d="M3 6h16M3 12h16M3 18h16" /></svg>
        </button>
      </div>

      <div className={`transition-all overflow-hidden ${open ? "max-h-40 py-2" : "max-h-0"} bg-white/60 backdrop-blur-xl`}> 
        {["Home", "News", "Enrollment", "Downloads", "Contact"].map((i) => (
          <div key={i} className="px-4 py-2 text-blue-800 hover:bg-blue-50 border-b border-blue-100/30">{i}</div>
        ))}
      </div>
    </header>
  );
}

function HeaderDesktop() {
  return (
    <header className="backdrop-blur-xl bg-white/40 border border-blue-200/40 py-4 px-6 rounded-2xl shadow-lg flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl text-white flex items-center justify-center font-bold">TW</div>
        <h1 className="text-lg font-bold text-blue-900">Boya International College</h1>
      </div>

      <nav className="flex gap-6 text-blue-900 font-medium">
        {['Home', 'News', 'Enrollment', 'Downloads', 'Contact'].map((i) => (
          <div key={i} className="hover:text-blue-600 transition cursor-pointer">{i}</div>
        ))}
      </nav>
    </header>
  );
}

/* ----------------------------- HERO ----------------------------- */
function HeroMobile() {
  return (
    <section className="mt-4 overflow-hidden rounded-3xl shadow-xl border border-white/40 bg-white/20 backdrop-blur-xl relative">
      <div className="px-6 py-10 text-center">
        <h1 className="text-3xl font-extrabold text-blue-800 drop-shadow">Boya International College</h1>
        <p className="text-sm mt-2 text-blue-600">Fostering Global Excellence</p>

        {/* BUTTON WITH POPUP */}
        <div className="relative inline-block group">
          <button className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:scale-105 transition">
            Learn More
          </button>

          {/* POPUP */}
          <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-2 
            bg-white/90 text-blue-800 text-xs rounded-xl shadow-lg border border-blue-200/40
            opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300 whitespace-nowrap z-50">
            Click to explore programs
          </div>
        </div>
      </div>

      <img className="w-full h-40 object-cover"
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80"
      />
    </section>
  );
}


function HeroDesktop() {
  return (
    <section className="mt-8 relative overflow-hidden rounded-3xl shadow-xl border border-blue-200/50 bg-white/30 backdrop-blur-xl">
      <img
        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80"
        className="w-full h-72 object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-blue-600/20 flex items-center px-12">
        <div>
          <h1 className="text-4xl text-white font-extrabold drop-shadow-lg">
            Boya International College
          </h1>
          <p className="text-blue-100 mt-2 text-lg">
            Training Global Talent • Preparing Future Leaders
          </p>

          {/* BUTTON WITH POPUP */}
          <div className="relative inline-block group">
            <button className="mt-5 px-6 py-3 bg-white/20 border border-white/30 text-white rounded-xl backdrop-blur-md hover:bg-white/30 transition">
              Explore Programs
            </button>

            {/* POPUP */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-2
              bg-white/90 text-blue-900 text-xs rounded-xl shadow-lg border border-blue-200/50
              opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300 whitespace-nowrap z-50">
              View all majors & pathways
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


/* ----------------------------- GENERAL UI ----------------------------- */
function Section({ title, children }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold text-blue-800 mb-3">{title}</h2>
      {children}
    </div>
  );
}

function GlassCard({ children }) {
  return (
    <div className="p-6 bg-white/30 backdrop-blur-xl border border-blue-200/40 rounded-2xl shadow-lg">{children}</div>
  );
}

/* ----------------------------- NOTICES ----------------------------- */
function NoticesAccordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {items.map((e) => (
        <div key={e.id} className="bg-white/40 backdrop-blur-lg border border-blue-100/40 rounded-xl p-3 shadow  hover:scale-105 transition">
          <div className="flex justify-between items-center cursor-pointer" onClick={() => setOpen(open === e.id ? null : e.id)}>
            <div>
              <h3 className="font-semibold text-blue-900">{e.title}</h3>
              <p className="text-xs text-blue-600">{e.date}</p>
            </div>
            <span className="text-blue-700 text-lg">{open === e.id ? "−" : "+"}</span>
          </div>
          {open === e.id && <p className="mt-2 text-sm text-blue-700">{e.summary}</p>}
        </div>
      ))}
    </div>
  );
}

/* ----------------------------- NEWS ----------------------------- */
function NewsList({ items }) {
  return (
    <div className="space-y-4">
      {items.map((n) => (
        <div key={n.id} className="p-4 bg-white/40 backdrop-blur-xl border border-blue-100/40 rounded-xl shadow  hover:scale-105 transition">
          <h3 className="font-semibold text-blue-900">{n.title}</h3>
          <p className="text-xs text-blue-600">{n.date}</p>
          <p className="text-sm mt-2 text-blue-700">{n.excerpt}</p>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------- ABOUT ----------------------------- */
function About() {
  return (
    <p className="text-blue-800 leading-relaxed bg-white/40 backdrop-blur-xl p-4 rounded-xl border border-blue-100/40 shadow  hover:scale-105 transition">
      Boya International College is committed to developing globally competent students with strong academic foundations and international vision.
    </p>
  );
}

/* ----------------------------- PARTNERS ----------------------------- */

export function PartnersCarousel({ logos }) {
  const scrollRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    let animation;

    const autoScroll = () => {

      if (!isPaused.current) {
        scrollEl.scrollLeft += 1.3;

        if (scrollEl.scrollLeft >= scrollEl.scrollWidth / 2) {
          scrollEl.scrollLeft = 0;
        }
      }

      animation = requestAnimationFrame(autoScroll);
    };

    animation = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animation);
  }, []);

  const doubled = [...logos, ...logos];

  return (
    <div
      ref={scrollRef}
      className="flex gap-3 overflow-x-auto no-scrollbar py-2 scroll-smooth"
      style={{ width: "100%", whiteSpace: "nowrap" }}
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      {doubled.map((l, i) => (
        <div
          key={i}
          className="hover:scale-105 transition flex-none h-32 w-32 flex items-center justify-center bg-white/50 backdrop-blur-xl border border-blue-100 rounded-xl shadow text-blue-800 font-semibold text-center p-2 hover:scale-105 transition"
        >
          <span
            className="block text-blue-800 font-semibold text-center leading-tight"
            style={{ fontSize: "clamp(10px, 2.5vw, 16px)" }}
          >
            {l}
          </span>
        </div>
      ))}
    </div>
  );
}




/* ----------------------------- FOOTERS ----------------------------- */
function FooterMobile() {
  return (
    <div className="text-center text-xs text-blue-700 mt-10 pb-6 opacity-70">
      © 2025 Boya International College — All Rights Reserved
    </div>
  );
}

function FooterDesktop() {
  return (
    <div className="text-center text-sm text-blue-700 mt-16 pb-10 opacity-80">
      © 2025 Boya International College — All Rights Reserved
    </div>
  );
}
