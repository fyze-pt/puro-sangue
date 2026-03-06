import { motion, useScroll, useTransform } from "motion/react";
import { Menu as MenuIcon, X, Instagram, MapPin, Phone, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, createContext, useContext } from "react";
import logoPuroSangue from "./assets/logo-puro-sangue.png";
import instaSala from "./assets/Captura de tela 2026-03-05 184226.png";
import instaArmario from "./assets/Captura de tela 2026-03-05 184234.png";
import instaGuardanapo from "./assets/Captura de tela 2026-03-05 184244.png";
import instaQueijos from "./assets/Captura de tela 2026-03-05 184253.png";
import historyImg from "./assets/Captura de tela 2026-03-05 184305.png";
import arteReceber from "./assets/Captura de tela 2026-03-05 193330.png";
import heroBg from "./assets/WhatsApp Image 2026-03-05 at 19.11.42.jpeg";

// --- Language ---

type Lang = "pt" | "en";
const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({ lang: "pt", setLang: () => {} });
const useLanguage = () => useContext(LanguageContext);

const translations = {
  pt: {
    nav: ["Início", "História", "Menu", "Galeria", "Reservas"],
    hero: { location: "Graça, Lisboa", menu: "Ver Menu", reserve: "Reservar Mesa" },
    history: {
      tag: "A Nossa Alma",
      title: "Uma Alma Equestre no",
      highlight: "Coração da Graça",
      p1: "Localizado no emblemático edifício Vila Sousa, datado de 1890, o Puro Sangue ocupa um antigo armazém de transportes públicos onde outrora se guardavam cavalos e carruagens.",
      p2: "A alma do projeto é Dora Lourenço, que restaurou à mão cada detalhe deste refúgio. No centro da sala, ergue-se um cavalo de metal com 3,5 metros, símbolo da força e da tradição que definem a nossa casa.",
      quote: '"Sempre a cozinha portuguesa, em doses de cavalo."',
    },
    parallax: { title: "A Arte de Bem Receber", sub: "O requinte do campo no coração de Lisboa" },
    menu: {
      tag: "Sabores Nobres",
      title: ["A Nossa", "Menu"],
      cats: { entradas: "Entradas", principais: "Principais", sobremesas: "Sobremesas" },
      items: {
        entradas: [
          { name: "Gaspacho Alentejano", price: "4€", desc: "Fresco e tradicional, o sabor do sul num tacho." },
          { name: "Carapaus Alimados", price: "7.5€", desc: "Uma iguaria algarvia preparada com mestria." },
          { name: "Ovos com Farinheira", price: "8€", desc: "Servidos com pão torrado, um clássico reconfortante." },
        ],
        principais: [
          { name: "Raia Frita com Escabeche", price: "14€", desc: "Um dos favoritos da casa, crocante e acidulado." },
          { name: "Rancho à Transmontana", price: "15€", desc: "Comida de tacho rica e generosa, como manda a tradição." },
          { name: "Polvo Guisado à Açoriana", price: "17€", desc: "Lentamente cozinhado com os sabores das ilhas." },
          { name: "Massada de Garoupa", price: "16€", desc: "Com camarão, um prato de mar cheio de alma." },
          { name: "Mão de Vaca com Grão", price: "15€", desc: "Servida com arroz branco, para os verdadeiros apreciadores." },
        ],
        sobremesas: [
          { name: "Trilogia do Algarve", price: "7€", desc: "Uma tábua de partilha com os melhores doces da região." },
          { name: "Pudim de Pão", price: "9€", desc: "Finalizado à mesa, uma experiência doce e inesquecível." },
        ],
      },
    },
    gallery: { tag: "Galeria", follow: "Seguir no Instagram" },
    reservation: {
      tag: "Reservas",
      title: ["Prepare a sua", "montaria."],
      date: "Data", guests: "Pessoas", name: "Nome", notes: "Observações",
      namePlaceholder: "Como devemos tratá-lo?",
      notesPlaceholder: "Ex: Mesa na Charrete",
      guestOptions: ["2 Convidados", "4 Convidados", "6 Convidados", "8+ Convidados"],
      confirm: "Confirmar Reserva",
      successTitle: "A sua mesa está reservada.",
      successSub: "Aguardamos a sua chegada com toda a elegância que merece.\nAté breve, no coração da Graça.",
      newReservation: "Fazer nova reserva",
      findUs: "Onde nos Encontrar",
    },
    footer: {
      desc: "Um refúgio de tradição equestre e sabor no coração da Graça, em Lisboa.",
      explore: "Explorar", social: "Social",
      links: ["História", "Menu", "Reservas"],
      bottom: ["Privacidade", "Termos"],
      copyright: "© 2026 Restaurante Puro Sangue",
    },
  },
  en: {
    nav: ["Home", "History", "Menu", "Gallery", "Reservations"],
    hero: { location: "Graça, Lisbon", menu: "View Menu", reserve: "Book a Table" },
    history: {
      tag: "Our Soul",
      title: "An Equestrian Soul in the",
      highlight: "Heart of Graça",
      p1: "Located in the emblematic Vila Sousa building, dating from 1890, Puro Sangue occupies a former public transport warehouse where horses and carriages were once kept.",
      p2: "The soul of the project is Dora Lourenço, who hand-restored every detail of this refuge. At the centre of the room stands a 3.5-metre metal horse, a symbol of the strength and tradition that define our home.",
      quote: '"Always Portuguese cuisine, in horse-sized portions."',
    },
    parallax: { title: "The Art of Hospitality", sub: "The refinement of the countryside in the heart of Lisbon" },
    menu: {
      tag: "Noble Flavours",
      title: ["Our", "Menu"],
      cats: { entradas: "Starters", principais: "Mains", sobremesas: "Desserts" },
      items: {
        entradas: [
          { name: "Gaspacho Alentejano", price: "4€", desc: "Fresh and traditional, the flavour of the south in a pot." },
          { name: "Carapaus Alimados", price: "7.5€", desc: "An Algarve delicacy prepared with great skill." },
          { name: "Ovos com Farinheira", price: "8€", desc: "Served with toasted bread — a comforting classic." },
        ],
        principais: [
          { name: "Raia Frita com Escabeche", price: "14€", desc: "One of the house favourites — crispy and tangy." },
          { name: "Rancho à Transmontana", price: "15€", desc: "A rich and generous stew, as tradition demands." },
          { name: "Polvo Guisado à Açoriana", price: "17€", desc: "Slowly braised with the flavours of the Azores islands." },
          { name: "Massada de Garoupa", price: "16€", desc: "With prawns, a soulful dish from the sea." },
          { name: "Mão de Vaca com Grão", price: "15€", desc: "Served with white rice, for the true connoisseur." },
        ],
        sobremesas: [
          { name: "Trilogia do Algarve", price: "7€", desc: "A sharing board with the finest sweets from the region." },
          { name: "Pudim de Pão", price: "9€", desc: "Finished at the table — a sweet and unforgettable experience." },
        ],
      },
    },
    gallery: { tag: "Gallery", follow: "Follow on Instagram" },
    reservation: {
      tag: "Reservations",
      title: ["Saddle up", "for your visit."],
      date: "Date", guests: "Guests", name: "Name", notes: "Notes",
      namePlaceholder: "How shall we address you?",
      notesPlaceholder: "Ex: Table by the Carriage",
      guestOptions: ["2 Guests", "4 Guests", "6 Guests", "8+ Guests"],
      confirm: "Confirm Reservation",
      successTitle: "Your table is reserved.",
      successSub: "We await your arrival with all the elegance you deserve.\nSee you soon, in the heart of Graça.",
      newReservation: "Make a new reservation",
      findUs: "Find Us",
    },
    footer: {
      desc: "A refuge of equestrian tradition and flavour in the heart of Graça, Lisbon.",
      explore: "Explore", social: "Social",
      links: ["History", "Menu", "Reservations"],
      bottom: ["Privacy", "Terms"],
      copyright: "© 2026 Puro Sangue Restaurant",
    },
  },
};

// --- Custom Equestrian Icons/Dividers ---

const HorseshoeDivider = () => (
  <div className="flex items-center justify-center py-4 bg-equestrian-cream">
    <div className="h-[1px] bg-equestrian-dark/10 w-full max-w-[150px]"></div>
    <div className="mx-8 text-equestrian-red opacity-40">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 4a5 5 0 0 0-3 4.5V17a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8.5a5 5 0 0 0-3-4.5" />
        <circle cx="8" cy="14" r="0.5" fill="currentColor" />
        <circle cx="16" cy="14" r="0.5" fill="currentColor" />
        <circle cx="10" cy="17" r="0.5" fill="currentColor" />
        <circle cx="14" cy="17" r="0.5" fill="currentColor" />
      </svg>
    </div>
    <div className="h-[1px] bg-equestrian-dark/10 w-full max-w-[150px]"></div>
  </div>
);

const LeatherStrapDivider = () => (
  <div className="w-full flex justify-center py-4 bg-equestrian-cream overflow-hidden">
    <div className="relative w-full max-w-4xl h-8 flex items-center">
      <div className="absolute inset-0 border-y border-equestrian-wood/20"></div>
      <div className="absolute left-0 right-0 h-[2px] bg-equestrian-wood/10 top-1/2 -translate-y-1/2"></div>
      <div className="absolute left-1/4 w-4 h-8 bg-equestrian-wood/30 border-x border-equestrian-wood/50"></div>
      <div className="absolute right-1/4 w-4 h-8 bg-equestrian-wood/30 border-x border-equestrian-wood/50"></div>
      <div className="mx-auto bg-equestrian-cream px-6 z-10">
        <span className="text-[10px] uppercase tracking-[0.6em] font-bold text-equestrian-wood/40 italic">Puro Sangue</span>
      </div>
    </div>
  </div>
);

const StirrupIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v4" />
    <path d="M5 10c0-2 2-3 7-3s7 1 7 3v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8z" />
    <path d="M5 15h14" />
  </svg>
);

// --- Components ---

const Navbar = () => {
  const { lang, setLang } = useLanguage();
  const T = translations[lang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navHrefs = ["#home", "#history", "#menu", "#gallery", "#reservation"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-equestrian-dark/95 py-4 shadow-2xl backdrop-blur-md" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#home" className="group flex items-center space-x-3">
          <span className="text-xl font-serif font-bold text-white tracking-[0.2em] uppercase">
            Puro <span className="text-equestrian-red">Sangue</span>
          </span>
        </a>

        <div className="hidden md:flex items-center space-x-12">
          {T.nav.map((name, i) => (
            <a
              key={name}
              href={navHrefs[i]}
              className="text-[10px] uppercase tracking-[0.3em] text-white/70 hover:text-white transition-all relative group"
            >
              {name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-equestrian-red transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-equestrian-red transition-colors border border-white/10 hover:border-equestrian-red px-3 py-1"
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          className="md:hidden fixed inset-0 bg-equestrian-dark z-50 flex flex-col items-center justify-center space-y-8"
        >
          <button className="absolute top-8 right-8 text-white" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="mb-4">
            <img src={logoPuroSangue} alt="Logomarca Puro Sangue" className="h-20 w-auto object-contain brightness-0 invert" />
          </a>
          {T.nav.map((name, i) => (
            <a
              key={name}
              href={navHrefs[i]}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-serif italic text-white hover:text-equestrian-red transition-colors"
            >
              {name}
            </a>
          ))}
          <button
            onClick={() => { setLang(lang === "pt" ? "en" : "pt"); setMobileMenuOpen(false); }}
            className="text-sm uppercase tracking-[0.3em] text-white/40 hover:text-equestrian-red transition-colors mt-4"
          >
            {lang === "pt" ? "English" : "Português"}
          </button>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { lang } = useLanguage();
  const T = translations[lang];
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-equestrian-dark">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img src={heroBg} alt="Equestrian Theme" className="w-full h-full object-cover scale-110 brightness-[0.3]" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={logoPuroSangue}
            alt="Logomarca Puro Sangue"
            className="h-64 md:h-80 w-auto object-contain mx-auto mb-8 brightness-0 invert"
          />
          <span className="text-equestrian-red uppercase tracking-[0.5em] text-xs font-bold mb-12 block">{T.hero.location}</span>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#menu" className="px-10 py-4 border border-white/20 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-equestrian-dark transition-all duration-500 min-w-[200px]">
              {T.hero.menu}
            </a>
            <a href="#reservation" className="px-10 py-4 bg-equestrian-red text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-equestrian-red transition-all duration-500 min-w-[200px]">
              {T.hero.reserve}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="flex flex-col space-y-4 text-white/30 text-[10px] uppercase tracking-[0.4em] [writing-mode:vertical-rl] rotate-180">
          <span>Est. 2025</span>
          <div className="h-12 w-[1px] bg-white/20 mx-auto"></div>
          <span>Lisboa</span>
        </div>
      </div>
    </section>
  );
};

const History = () => {
  const { lang } = useLanguage();
  const T = translations[lang].history;

  return (
    <section id="history" className="relative py-16 bg-equestrian-cream overflow-hidden">
      <StirrupIcon className="absolute -right-12 top-1/4 text-equestrian-wood/5 w-64 h-64 -rotate-12" />

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="aspect-[3/4] overflow-hidden shadow-2xl border-[16px] border-white">
                <img src={historyImg} alt="Restaurante Interior" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </motion.div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-equestrian-wood/10 -z-10 rounded-full blur-3xl"></div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-equestrian-red uppercase tracking-[0.4em] text-[10px] font-bold mb-6">{T.tag}</h4>
              <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] italic">
                {T.title} <span className="text-equestrian-wood">{T.highlight}</span>.
              </h2>

              <div className="grid md:grid-cols-2 gap-12 text-equestrian-dark/70 leading-relaxed">
                <p>{T.p1}</p>
                <p>{T.p2}</p>
              </div>

              <div className="mt-16 flex items-center space-x-8">
                <div className="w-16 h-[1px] bg-equestrian-red"></div>
                <Quote className="text-equestrian-red italic" size={32} />
                <p className="font-serif italic text-xl text-equestrian-dark/90">{T.quote}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StaticParallaxSection = ({ image, title, subtitle }: { image: string; title: string; subtitle: string }) => (
  <div className="relative h-[70vh] overflow-hidden">
    <div className="absolute inset-0 bg-fixed bg-center bg-cover brightness-[0.4]" style={{ backgroundImage: `url('${image}')` }}></div>
    <div className="absolute inset-0 flex items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-white text-5xl md:text-7xl font-serif italic mb-6 tracking-tight">{title}</h3>
        <div className="flex items-center justify-center space-x-4">
          <div className="h-[1px] w-8 bg-equestrian-red"></div>
          <p className="text-white/70 uppercase tracking-[0.5em] text-[10px] font-bold">{subtitle}</p>
          <div className="h-[1px] w-8 bg-equestrian-red"></div>
        </div>
      </motion.div>
    </div>
  </div>
);

const MenuSection = () => {
  const { lang } = useLanguage();
  const T = translations[lang].menu;
  const categoryKeys = ["entradas", "principais", "sobremesas"] as const;
  const [activeCategory, setActiveCategory] = useState<typeof categoryKeys[number]>("principais");

  return (
    <section id="menu" className="py-16 bg-equestrian-dark text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-equestrian-red to-transparent opacity-30"></div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h4 className="text-equestrian-red uppercase tracking-[0.4em] text-[10px] font-bold mb-6">{T.tag}</h4>
              <h2 className="text-5xl md:text-7xl font-serif mb-12 italic leading-none">{T.title[0]} <br /> {T.title[1]}</h2>

              <div className="flex flex-col space-y-6 items-start">
                {categoryKeys.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm uppercase tracking-[0.3em] transition-all duration-500 flex items-center group ${activeCategory === cat ? "text-equestrian-red" : "text-white/40 hover:text-white"}`}
                  >
                    <span className={`w-8 h-[1px] mr-4 transition-all ${activeCategory === cat ? "bg-equestrian-red w-12" : "bg-white/10 group-hover:w-12"}`}></span>
                    {T.cats[cat]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              key={`${lang}-${activeCategory}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {T.items[activeCategory].map((item, idx) => (
                <div key={idx} className="group border-b border-white/5 pb-8">
                  <div className="flex justify-between items-baseline mb-4">
                    <h3 className="text-2xl md:text-3xl font-serif group-hover:text-equestrian-red transition-colors duration-500 italic">{item.name}</h3>
                    <span className="text-equestrian-red font-serif text-xl">{item.price}</span>
                  </div>
                  <p className="text-white/50 text-sm max-w-md leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InstagramMosaic = () => {
  const { lang } = useLanguage();
  const T = translations[lang].gallery;
  const images = [instaSala, instaArmario, instaGuardanapo, instaQueijos];

  return (
    <section id="gallery" className="py-16 bg-equestrian-cream">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h4 className="text-equestrian-red uppercase tracking-[0.4em] text-[10px] font-bold mb-6">{T.tag}</h4>
            <h2 className="text-5xl md:text-7xl font-serif italic">@puro_sangue</h2>
          </div>
          <a href="https://www.instagram.com/purosangue.lx/" className="mt-8 md:mt-0 group flex items-center space-x-4 text-[10px] uppercase tracking-[0.3em] font-bold">
            <span className="group-hover:text-equestrian-red transition-colors">{T.follow}</span>
            <div className="w-10 h-10 border border-equestrian-dark/10 flex items-center justify-center group-hover:border-equestrian-red transition-colors">
              <Instagram size={16} />
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div key={idx} whileHover={{ y: -10 }} className="aspect-[3/4] overflow-hidden relative group shadow-xl">
              <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-equestrian-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reservation = () => {
  const { lang } = useLanguage();
  const T = translations[lang].reservation;
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="reservation" className="py-16 bg-equestrian-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h4 className="text-equestrian-red uppercase tracking-[0.4em] text-[10px] font-bold mb-6">{T.tag}</h4>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 italic leading-tight">{T.title[0]} <br /> {T.title[1]}</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="w-16 h-[1px] bg-equestrian-red"></div>
                <p className="font-serif italic text-4xl text-equestrian-dark leading-snug">{T.successTitle}</p>
                <p className="text-equestrian-dark/50 text-sm uppercase tracking-[0.3em] leading-relaxed">
                  {T.successSub.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
                </p>
                <button onClick={() => setSubmitted(false)} className="text-[10px] uppercase tracking-[0.4em] text-equestrian-red font-bold hover:underline">
                  {T.newReservation}
                </button>
              </motion.div>
            ) : (
              <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="border-b border-equestrian-dark/10 pb-4 focus-within:border-equestrian-red transition-colors">
                    <label className="block text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-40">{T.date}</label>
                    <input type="date" className="bg-transparent w-full outline-none font-serif text-lg" />
                  </div>
                  <div className="border-b border-equestrian-dark/10 pb-4 focus-within:border-equestrian-red transition-colors">
                    <label className="block text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-40">{T.guests}</label>
                    <select className="bg-transparent w-full outline-none font-serif text-lg appearance-none">
                      {T.guestOptions.map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div className="border-b border-equestrian-dark/10 pb-4 focus-within:border-equestrian-red transition-colors">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-40">{T.name}</label>
                  <input type="text" placeholder={T.namePlaceholder} className="bg-transparent w-full outline-none font-serif text-lg placeholder:opacity-20" />
                </div>

                <div className="border-b border-equestrian-dark/10 pb-4 focus-within:border-equestrian-red transition-colors">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-40">{T.notes}</label>
                  <input type="text" placeholder={T.notesPlaceholder} className="bg-transparent w-full outline-none font-serif text-lg placeholder:opacity-20" />
                </div>

                <button type="submit" className="group flex items-center space-x-6 text-equestrian-red uppercase tracking-[0.4em] text-xs font-bold">
                  <span>{T.confirm}</span>
                  <div className="w-12 h-12 rounded-full border border-equestrian-red flex items-center justify-center group-hover:bg-equestrian-red group-hover:text-white transition-all">
                    <ChevronRight size={20} />
                  </div>
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-end">
            <div className="bg-equestrian-dark p-12 text-white shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-equestrian-red/20"></div>
              <h3 className="text-3xl font-serif italic mb-8">{T.findUs}</h3>
              <div className="space-y-8 text-white/60 text-sm leading-loose">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-equestrian-red shrink-0" size={20} />
                  <p className="uppercase tracking-widest">Travessa das Mónicas 28, 1100-265 Lisboa, Portugal</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-equestrian-red shrink-0" size={20} />
                  <p className="uppercase tracking-widest">+351 965 271 777</p>
                </div>
              </div>

              <div className="mt-12 aspect-video grayscale opacity-50 hover:opacity-100 transition-opacity duration-700">
                <iframe
                  src="https://maps.google.com/maps?q=Travessa+das+M%C3%B4nicas+28,+1100-265+Lisboa,+Portugal&hl=pt&z=16&output=embed"
                  width="100%" height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Mapa do Restaurante"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { lang } = useLanguage();
  const T = translations[lang].footer;
  const footerHrefs = ["#history", "#menu", "#reservation"];

  return (
    <footer className="bg-equestrian-dark text-white py-16 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-16">
          <div className="max-w-md">
            <h2 className="text-4xl font-serif italic mb-8">Puro Sangue</h2>
            <p className="text-white/40 text-sm leading-relaxed uppercase tracking-widest">{T.desc}</p>
          </div>

          <div className="grid grid-cols-2 gap-24">
            <div>
              <h5 className="text-equestrian-red text-[10px] uppercase tracking-[0.4em] font-bold mb-8">{T.explore}</h5>
              <ul className="space-y-4 text-xs uppercase tracking-[0.2em] text-white/40">
                {T.links.map((name, i) => (
                  <li key={name}><a href={footerHrefs[i]} className="hover:text-white transition-colors">{name}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-equestrian-red text-[10px] uppercase tracking-[0.4em] font-bold mb-8">{T.social}</h5>
              <ul className="space-y-4 text-xs uppercase tracking-[0.2em] text-white/40">
                <li><a href="https://www.instagram.com/purosangue.lx/" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.instagram.com/purosangue.lx/" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-white/20">
          <p>{T.copyright}</p>
          <div className="flex space-x-12">
            {T.bottom.map(label => <span key={label}>{label}</span>)}
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Lang>("pt");

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="selection:bg-equestrian-red selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <History />
          <LeatherStrapDivider />
          <StaticParallaxSection
            image={arteReceber}
            title={translations[lang].parallax.title}
            subtitle={translations[lang].parallax.sub}
          />
          <MenuSection />
          <InstagramMosaic />
          <HorseshoeDivider />
          <Reservation />
          <LeatherStrapDivider />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
