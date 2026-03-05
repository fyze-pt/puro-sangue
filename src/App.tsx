import { motion, useScroll, useTransform } from "motion/react";
import { Menu, X, Instagram, Facebook, MapPin, Calendar, Phone, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import woodHorse from "../src/assets/img/woodHorse.png";

// --- Custom Equestrian Icons/Dividers ---

const HorseshoeDivider = () => (
  <div className="flex items-center justify-center py-20 bg-equestrian-cream">
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

const StirrupDivider = () => (
  <div className="flex items-center justify-center py-20 bg-equestrian-cream">
    <div className="h-[1px] bg-equestrian-dark/10 w-full max-w-[150px]"></div>
    <div className="mx-8 text-equestrian-wood opacity-40">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v4" />
        <path d="M5 10c0-2 2-3 7-3s7 1 7 3v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8z" />
        <path d="M5 15h14" />
      </svg>
    </div>
    <div className="h-[1px] bg-equestrian-dark/10 w-full max-w-[150px]"></div>
  </div>
);

const LeatherStrapDivider = () => (
  <div className="w-full flex justify-center py-16 bg-equestrian-cream overflow-hidden">
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#home" },
    { name: "História", href: "#history" },
    { name: "Cardápio", href: "#menu" },
    { name: "Galeria", href: "#gallery" },
    { name: "Reservas", href: "#reservation" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-equestrian-dark/95 py-4 shadow-2xl backdrop-blur-md" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <a href="#home" className="group flex items-center space-x-3">
          <div className="w-10 h-10 border border-equestrian-red flex items-center justify-center rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <span className="text-white font-serif -rotate-45 group-hover:rotate-0 transition-transform">PS</span>
          </div>
          <span className="text-xl font-serif font-bold text-white tracking-[0.2em] uppercase">
            Puro <span className="text-equestrian-red">Sangue</span>
          </span>
        </a>

        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] text-white/70 hover:text-white transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-equestrian-red transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-serif italic text-white hover:text-equestrian-red transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-equestrian-dark">
      {/* Parallax Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          img src={woodHorse} alt="Logo com nome" />
          alt="Equestrian Theme"
          className="w-full h-full object-cover scale-110 brightness-[0.3]"
          referrerPolicy="no-referrer"
        
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-equestrian-red uppercase tracking-[0.5em] text-xs font-bold mb-6 block">Santarém, Portugal</span>
          <h1 className="text-6xl md:text-[120px] font-serif text-white mb-8 leading-none tracking-tighter italic">
            Puro Sangue
          </h1>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <div className="h-[1px] w-12 bg-white/20"></div>
            <p className="text-white/60 text-sm uppercase tracking-[0.3em] font-light">
              Gastronomia & Tradição Equestre
            </p>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="#menu"
              className="px-10 py-4 border border-white/20 text-white uppercase tracking-widest text-xs hover:bg-white hover:text-equestrian-dark transition-all duration-500 min-w-[200px]"
            >
              Ver Cardápio
            </a>
            <a
              href="#reservation"
              className="px-10 py-4 bg-equestrian-red text-white uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-equestrian-red transition-all duration-500 min-w-[200px]"
            >
              Reservar Mesa
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 hidden lg:block">
        <div className="flex flex-col space-y-4 text-white/30 text-[10px] uppercase tracking-[0.4em] [writing-mode:vertical-rl] rotate-180">
          <span>Est. 1985</span>
          <div className="h-12 w-[1px] bg-white/20 mx-auto"></div>
          <span>Santarém</span>
        </div>
      </div>
    </section>
  );
};

const History = () => {
  return (
    <section id="history" className="relative py-32 bg-equestrian-cream overflow-hidden">
      {/* Decorative Stirrup Background */}
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
                <img
                  src="https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&q=80&w=1000"
                  alt="Restaurante Interior"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            {/* Floating element - Saddle leather texture feel */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-equestrian-wood/10 -z-10 rounded-full blur-3xl"></div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-equestrian-red uppercase tracking-[0.4em] text-[10px] font-bold mb-6">A Nossa Alma</h4>
              <h2 className="text-5xl md:text-7xl font-serif mb-10 leading-[1.1] italic">
                Onde o tempo pára e a <span className="text-equestrian-wood">tradição</span> galopa.
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 text-equestrian-dark/70 leading-relaxed">
                <p>
                  O Puro Sangue não é apenas um restaurante; é um santuário dedicado à cultura equestre. 
                  Cada sela pendurada, cada bota de couro e o majestoso cavalo de madeira contam uma história de paixão e respeito pela terra.
                </p>
                <p>
                  Nascemos do desejo de unir a rusticidade de um estábulo com a sofisticação da alta gastronomia portuguesa. 
                  Aqui, o aroma do feno mistura-se com o do pão acabado de cozer.
                </p>
              </div>

              <div className="mt-16 flex items-center space-x-8">
                <div className="w-16 h-[1px] bg-equestrian-red"></div>
                <Quote className="text-equestrian-red italic" size={32} />
                <p className="font-serif italic text-xl text-equestrian-dark/90">
                  "A elegância de um puro-sangue em cada prato."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      <HorseshoeDivider />
    </section>
  );
};

const StaticParallaxSection = ({ image, title, subtitle }: { image: string, title: string, subtitle: string }) => {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <div 
        className="absolute inset-0 bg-fixed bg-center bg-cover brightness-[0.4]"
        style={{ backgroundImage: `url('${image}')` }}
      ></div>
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
};

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("carne");

  const menuData = {
    entradas: [
      { name: "Alheira de Caça", price: "12€", desc: "Com ovo de codorniz e grelos salteados." },
      { name: "Chouriço Assado", price: "9€", desc: "Assado na brasa com pão rústico de lenha." },
      { name: "Queijo de Azeitão", price: "14€", desc: "Servido com compota de abóbora e nozes." },
    ],
    carne: [
      { name: "Posta Mirandesa", price: "28€", desc: "Grelhada com sal grosso e batata a murro." },
      { name: "Bife do Picadeiro", price: "25€", desc: "Lombo com molho de pimentas e batata gratinada." },
      { name: "Arroz de Pato", price: "22€", desc: "À antiga, tostado com chouriço regional." },
    ],
    peixe: [
      { name: "Bacalhau à Puro Sangue", price: "24€", desc: "Lombo confitado com crosta de broa." },
      { name: "Polvo à Lagareiro", price: "26€", desc: "Assado com azeite virgem e alho." },
    ],
  };

  return (
    <section id="menu" className="py-32 bg-equestrian-dark text-white overflow-hidden relative">
      {/* Decorative element - Stable bars */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-equestrian-red to-transparent opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h4 className="text-equestrian-red uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Sabores Nobres</h4>
              <h2 className="text-5xl md:text-7xl font-serif mb-12 italic leading-none">O Nosso <br /> Cardápio</h2>
              
              <div className="flex flex-col space-y-6 items-start">
                {Object.keys(menuData).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm uppercase tracking-[0.3em] transition-all duration-500 flex items-center group ${activeCategory === cat ? "text-equestrian-red" : "text-white/40 hover:text-white"}`}
                  >
                    <span className={`w-8 h-[1px] mr-4 transition-all ${activeCategory === cat ? "bg-equestrian-red w-12" : "bg-white/10 group-hover:w-12"}`}></span>
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              {menuData[activeCategory as keyof typeof menuData].map((item, idx) => (
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
  const images = [
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=600",
  ];

  return (
    <section id="gallery" className="py-32 bg-equestrian-cream">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h4 className="text-equestrian-red uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Galeria</h4>
            <h2 className="text-5xl md:text-7xl font-serif italic">@puro_sangue</h2>
          </div>
          <a href="#" className="mt-8 md:mt-0 group flex items-center space-x-4 text-[10px] uppercase tracking-[0.3em] font-bold">
            <span className="group-hover:text-equestrian-red transition-colors">Seguir no Instagram</span>
            <div className="w-10 h-10 border border-equestrian-dark/10 flex items-center justify-center group-hover:border-equestrian-red transition-colors">
              <Instagram size={16} />
            </div>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="aspect-[3/4] overflow-hidden relative group shadow-xl"
            >
              <img
                src={img}
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-equestrian-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <HorseshoeDivider />
    </section>
  );
};

const Reservation = () => {
  return (
    <section id="reservation" className="py-32 bg-equestrian-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h4 className="text-equestrian-red uppercase tracking-[0.4em] text-[10px] font-bold mb-6">Reservas</h4>
            <h2 className="text-5xl md:text-7xl font-serif mb-12 italic leading-tight">Prepare a sua <br /> montaria.</h2>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="border-b border-equestrian-dark/10 pb-4 focus-within:border-equestrian-red transition-colors">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-40">Data</label>
                  <input type="date" className="bg-transparent w-full outline-none font-serif text-lg" />
                </div>
                <div className="border-b border-equestrian-dark/10 pb-4 focus-within:border-equestrian-red transition-colors">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-40">Pessoas</label>
                  <select className="bg-transparent w-full outline-none font-serif text-lg appearance-none">
                    <option>2 Convidados</option>
                    <option>4 Convidados</option>
                    <option>6 Convidados</option>
                    <option>8+ Convidados</option>
                  </select>
                </div>
              </div>
              
              <div className="border-b border-equestrian-dark/10 pb-4 focus-within:border-equestrian-red transition-colors">
                <label className="block text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-40">Nome</label>
                <input type="text" placeholder="Como devemos tratá-lo?" className="bg-transparent w-full outline-none font-serif text-lg placeholder:opacity-20" />
              </div>

              <button className="group flex items-center space-x-6 text-equestrian-red uppercase tracking-[0.4em] text-xs font-bold">
                <span>Confirmar Reserva</span>
                <div className="w-12 h-12 rounded-full border border-equestrian-red flex items-center justify-center group-hover:bg-equestrian-red group-hover:text-white transition-all">
                  <ChevronRight size={20} />
                </div>
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-end">
            <div className="bg-equestrian-dark p-12 text-white shadow-2xl relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 border border-equestrian-red/20"></div>
              <h3 className="text-3xl font-serif italic mb-8">Onde nos Encontrar</h3>
              <div className="space-y-8 text-white/60 text-sm leading-loose">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-equestrian-red shrink-0" size={20} />
                  <p className="uppercase tracking-widest">Rua do Picadeiro, 124 <br /> Santarém, Portugal</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="text-equestrian-red shrink-0" size={20} />
                  <p className="uppercase tracking-widest">+351 243 123 456</p>
                </div>
              </div>
              
              <div className="mt-12 aspect-video grayscale opacity-50 hover:opacity-100 transition-opacity duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Map" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-equestrian-dark text-white py-32 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-16">
          <div className="max-w-md">
            <h2 className="text-4xl font-serif italic mb-8">Puro Sangue</h2>
            <p className="text-white/40 text-sm leading-relaxed uppercase tracking-widest">
              A elegância do hipismo encontra a alma da cozinha portuguesa. Um refúgio de tradição e sabor no coração do Ribatejo.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-24">
            <div>
              <h5 className="text-equestrian-red text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Explorar</h5>
              <ul className="space-y-4 text-xs uppercase tracking-[0.2em] text-white/40">
                <li><a href="#history" className="hover:text-white transition-colors">História</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Cardápio</a></li>
                <li><a href="#reservation" className="hover:text-white transition-colors">Reservas</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-equestrian-red text-[10px] uppercase tracking-[0.4em] font-bold mb-8">Social</h5>
              <ul className="space-y-4 text-xs uppercase tracking-[0.2em] text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] text-white/20">
          <p>&copy; 2026 Restaurante Puro Sangue</p>
          <div className="flex space-x-12">
            <span>Privacidade</span>
            <span>Termos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-equestrian-red selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <History />
        <LeatherStrapDivider />
        <StaticParallaxSection 
          image="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&q=80&w=1920"
          title="A Arte de Bem Receber"
          subtitle="O requinte do campo no coração de Santarém"
        />
        <MenuSection />
        <StirrupDivider />
        <StaticParallaxSection 
          image="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          title="Vinhos de Castas Nobres"
          subtitle="Uma seleção rigorosa para acompanhar a sua jornada"
        />
        <InstagramMosaic />
        <HorseshoeDivider />
        <Reservation />
        <LeatherStrapDivider />
      </main>
      <Footer />
    </div>
  );
}
