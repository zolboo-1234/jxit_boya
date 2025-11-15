import { useState } from "react";

// Sample data
const NOTICES = [
  { id: 1, title: "Public Notice Regarding the Confirmation of Comrade Dai Linxuan", date: "2025-11-05", summary: "This notice confirms the candidacy of Comrade Dai Linxuan for Party Membership..." },
  { id: 2, title: "Regarding the 2025 National Student Financial Aid Award selection results", date: "2025-10-31", summary: "Recommended list for Boya International College financial awards..." },
  { id: 3, title: "Jiangxi University of Science and Technology Boya Int...", date: "2025-10-29", summary: "Preliminary announcement regarding the Youth League recommendation..." }
];

const NEWS = [
  { id: 1, title: "Boya Hosts IELTS Writing Seminar", date: "2025-11-04", excerpt: "Our college successfully hosts IELTS writing teaching seminar and promotion meeting..." },
  { id: 2, title: "Harmony builds dreams and solidifies initial aspirations", date: "2025-11-01", excerpt: "Moral education and character development showcase youthful brilliance..." },
  { id: 3, title: "Knowledge as a bridge: Mental Health Promotion Event", date: "2025-10-20", excerpt: "Mental health knowledge promotion and activities for students..." }
];

const PARTNERS = ["Monash", "Coventry", "Queensland", "Bristol", "Western Australia", "Leeds", "Southampton", "UNSW"];

// Hover popup component
function HoverPopup({ text }) {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-2
                    bg-white shadow-lg border border-blue-200 px-3 py-2 rounded-lg
                    text-xs text-gray-700 opacity-0 group-hover:opacity-100
                    pointer-events-none transition-all duration-300 w-max z-50">
      {text}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50 text-gray-800">
      <div className="max-w-md md:max-w-4xl mx-auto px-4">
        <Header />
        <main className="pb-20">
          <Hero />
          <Section title="Notices"><NoticesAccordion items={NOTICES} /></Section>
          <Section title="College News"><NewsList items={NEWS} /></Section>
          <Section title="About Boya"><About /></Section>
          <Section title="Partner Universities"><PartnersCarousel logos={PARTNERS} /></Section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// Header with menu hover popup
function Header() {
  return (
    <header className="sticky top-0 bg-white/60 backdrop-blur-xl z-50 border-b border-blue-200/40 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 max-w-4xl mx-auto relative group">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold shadow-md">TW</div>
          <div>
            <div className="text-base font-semibold text-blue-900">Test Web</div>
            <div className="text-xs text-blue-500">Boya Int. College</div>
          </div>
        </div>
        <div className="relative">
          <button aria-label="Open menu" className="p-2 rounded-md hover:bg-blue-50 transition">
            <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#2563eb">
              <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Menu Hover Popup */}
          <div className="absolute right-0 mt-2 w-40 bg-white/95 backdrop-blur-xl border border-blue-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 z-50">
            <ul className="flex flex-col text-sm text-blue-700">
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Home</li>
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">News</li>
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Enrollment</li>
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Downloads</li>
              <li className="px-4 py-2 hover:bg-blue-50 cursor-pointer">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

// Hero
function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-blue-100 shadow-[0_4px_15px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.12)] transition-all duration-300 bg-white/80 backdrop-blur-xl mt-4">
      <div className="h-44 md:h-56 w-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-sky-100">
        <div className="px-4 text-center md:px-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-700 tracking-tight">Boya International College</h1>
          <p className="mt-2 text-sm md:text-base text-blue-500">Fostering Global Excellence in Education</p>
          <button className="mt-4 inline-block px-5 py-2 bg-gradient-to-r from-blue-600 to-cyan-400 text-white rounded-lg text-sm font-medium shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300" onClick={() => alert("Learn more clicked")}>Learn More</button>
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop" alt="Campus" className="w-full h-36 object-cover mt-3 rounded-b-2xl" />
    </section>
  );
}

// Section wrapper
function Section({ title, children }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold text-blue-700 mb-3">{title}</h2>
      {children}
    </section>
  );
}

// Notices Accordion
function NoticesAccordion({ items }) {
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  return (
    <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
      {items.map((it) => {
        const isOpen = it.id === openId;
        return (
          <div key={it.id} className="overflow-hidden border-b last:border-0 border-blue-100">
            <button onClick={() => setOpenId(isOpen ? null : it.id)} className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-blue-50 transition-all">
              <div className="flex-1">
                <div className="font-medium text-blue-800">{it.title}</div>
                <div className="text-xs text-blue-500 mt-1">{it.date}</div>
              </div>
              <svg className={`w-5 h-5 text-blue-500 transition-transform ${isOpen ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} overflow-hidden transition-all duration-300 px-4 text-sm text-gray-700 bg-blue-50/40`}>
              {isOpen && <div className="py-3">{it.summary}<div className="mt-3"><button className="text-blue-600 hover:text-blue-500 text-sm font-medium transition" onClick={() => alert("Read more clicked")}>Read more →</button></div></div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// News List
function NewsList({ items = [] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((n) => (
        <article key={n.id} className="bg-white/90 backdrop-blur-lg border border-blue-100 rounded-xl p-3 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
          <h3 className="text-sm font-semibold text-blue-800">{n.title}</h3>
          <p className="text-xs text-blue-500 mt-2">{n.date}</p>
          <p className="text-xs text-gray-700 mt-2 line-clamp-3">{n.excerpt}</p>
        </article>
      ))}
    </div>
  );
}

// About Section
function About() {
  return (
    <div className="relative group bg-white/80 backdrop-blur-xl border border-blue-100 rounded-xl p-4 shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full max-w-xl mx-auto mb-8">
      <HoverPopup text="About Boya International College" />
      <div className="flex flex-col sm:flex-row gap-3 items-start">
        <img src="https://images.unsplash.com/photo-1581093588401-4e6f62b1a2be?q=80&w=800&auto=format&fit=crop" alt="About" className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg object-cover border border-blue-200 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-sm sm:text-base text-gray-700">
            Established in May 2020, Boya International College serves as a window for Jiangxi University of Science and Technology to conduct international education.
          </p>
          <button className="mt-3 text-blue-600 font-semibold text-sm hover:text-blue-500 transition" onClick={() => alert("Read more about Boya")}>
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
}

// Partners Carousel
function PartnersCarousel({ logos = [] }) {
  return (
    <div className="overflow-x-auto no-scrollbar -mx-4 px-4 py-2 mb-8">
      <div className="flex gap-4 snap-x snap-mandatory">
        {logos.map((l, idx) => (
          <div key={idx} className="relative group shrink-0 snap-start w-28 h-28 sm:w-32 sm:h-32 bg-white/90 backdrop-blur-lg border border-blue-100 rounded-xl flex flex-col items-center justify-center shadow-md hover:shadow-2xl hover:scale-[1.08] transition-all duration-300">
            <HoverPopup text={`${l} — Partner University`} />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mb-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-xs sm:text-sm font-semibold text-blue-600 text-center px-2">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 py-5 rounded-t-xl mt-8 shadow-inner">
      <div className="px-4 text-sm max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">Boya International College</div>
            <div className="text-xs mt-1 text-blue-600">Jiangxi University of Science and Technology</div>
          </div>
          <div className="text-xs text-blue-700">Visitors: 066690</div>
        </div>
        <div className="mt-4 flex gap-3">
          <a className="flex-1 bg-blue-50 hover:bg-blue-100 rounded-md py-2 text-center text-xs transition" href="#" onClick={(e)=>e.preventDefault()}>Contact</a>
          <a className="flex-1 bg-blue-50 hover:bg-blue-100 rounded-md py-2 text-center text-xs transition" href="#" onClick={(e)=>e.preventDefault()}>Downloads</a>
        </div>
        <div className="mt-4 text-xs text-blue-600">© {new Date().getFullYear()} Boya International College</div>
      </div>
    </footer>
  );
}
