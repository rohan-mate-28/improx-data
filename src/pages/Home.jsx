import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaAward,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import { departments } from "../data/departments";
import { siteConfig } from "../data/siteConfig";

const stats = [
  { label: "Projects Delivered", value: "500+" },
  { label: "Happy Clients", value: "120+" },
  { label: "Team Experts", value: "30+" },
  { label: "Years of Experience", value: "5+" },
];

const whyUs = [
  {
    icon: FaShieldAlt,
    title: "Data Security & Confidentiality",
    desc: "Your data is handled with strict confidentiality agreements and secure systems at every step.",
  },
  {
    icon: FaClock,
    title: "On-Time Delivery",
    desc: "We respect deadlines and deliver projects on schedule, every single time.",
  },
  {
    icon: FaUsers,
    title: "Skilled & Trained Team",
    desc: "Our experts are trained across multiple tools, platforms, and industries.",
  },
  {
    icon: FaAward,
    title: "Quality Assurance",
    desc: "Multi-level quality checks ensure top accuracy across every deliverable.",
  },
];

const testimonials = [
  {
    name: "Michael Johnson",
    role: "E-commerce Business Owner",
    text: "ImproxData handled our product catalog data entry flawlessly. Accurate, fast, and very professional team.",
  },
  {
    name: "Sarah Williams",
    role: "Marketing Manager",
    text: "The web scraping solution they built saves us hours every week. Highly recommend their services.",
  },
  {
    name: "David Lee",
    role: "Operations Head",
    text: "Their administrative assistant support has been a game changer for our daily operations.",
  },
];

const heroShowcase = [
  {
    img: "/data-analytics.webp",
    title: "Data Analytics",
    desc: "Business Intelligence & Reporting",
  },
  {
    img: "/web-scrapping.webp",
    title: "Web Scraping",
    desc: "Automated Data Extraction",
  },
  {
    img: "/data-entry.webp",
    title: "Data Entry",
    desc: "Fast & Accurate Processing",
  },
  {
    img: "/Administrative-Assistant.webp",
    title: "Admin Support",
    desc: "Virtual Administrative Assistance",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden w-full bg-white antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white">
        {/* Animated blobs */}
        <div className="absolute top-0 right-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 left-0 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT CONTENT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 mb-6">
                Trusted Data & Admin Outsourcing Partner
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
                Smart Data Solutions for a{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-1 sm:mt-2">
                  Growing Business
                </span>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                From data entry and web scraping to analytics and virtual
                administrative support &mdash; {siteConfig.name} delivers
                accurate, scalable, and affordable outsourcing solutions
                tailored to your business needs.
              </p>

              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 w-full sm:w-auto">
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-center shadow-lg shadow-blue-600/20 transition-all text-sm sm:text-base"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="#departments"
                  className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/20 rounded-xl font-medium text-center transition-all text-sm sm:text-base"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* RIGHT VISUAL - Desktop only layout */}
            <div className="hidden lg:block relative h-[550px] xl:h-[600px] w-full max-w-[500px] mx-auto perspective-1000">
              {/* Premium Smooth Float Animations */}
              <style>{`
                @keyframes premiumFloatFirst {
                  0%, 100% { transform: translateY(0px) rotate(-1deg); }
                  50% { transform: translateY(-15px) rotate(1deg); }
                }
                @keyframes premiumFloatSecond {
                  0%, 100% { transform: translateY(0px) rotate(2deg); }
                  50% { transform: translateY(-20px) rotate(-0.5deg); }
                }
                @keyframes premiumFloatThird {
                  0%, 100% { transform: translateY(0px) rotate(-2deg); }
                  50% { transform: translateY(-12px) rotate(0.5deg); }
                }
                @keyframes premiumFloatFourth {
                  0%, 100% { transform: translateY(0px) rotate(1deg); }
                  50% { transform: translateY(-18px) rotate(-1deg); }
                }

                .animate-float-1 { animation: premiumFloatFirst 6s ease-in-out infinite; }
                .animate-float-2 { animation: premiumFloatSecond 5s ease-in-out infinite; }
                .animate-float-3 { animation: premiumFloatThird 6.5s ease-in-out infinite; }
                .animate-float-4 { animation: premiumFloatFourth 5.5s ease-in-out infinite; }
                
                /* Premium shadow pop + subtle scale layer boost */
                .premium-hover-shadow:hover {
                  box-shadow: 0 30px 60px -15px rgba(15, 23, 42, 0.3), 0 20px 40px -20px rgba(59, 130, 246, 0.3);
                }
              `}</style>

              {/* 1. Analytics (Top Left - Mid Layer) */}
              <div className="absolute top-4 left-0 w-56 xl:w-64 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/10 transition-all duration-500 ease-out hover:scale-105 hover:z-50 premium-hover-shadow animate-float-1 z-20">
                <img
                  src={heroShowcase[0].img}
                  alt={heroShowcase[0].title}
                  className="w-full h-36 object-cover rounded-xl"
                />
                <h3 className="font-bold text-slate-900 mt-3.5 text-sm xl:text-base tracking-tight">
                  {heroShowcase[0].title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {heroShowcase[0].desc}
                </p>
              </div>

              {/* 2. Web Scraping (Top Right - Back Layer, Overlapped by Analytics & Admin) */}
              <div className="absolute top-16 -right-4 w-56 xl:w-64 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/10 transition-all duration-500 ease-out hover:scale-105 hover:z-50 premium-hover-shadow animate-float-2 z-10">
                <img
                  src={heroShowcase[1].img}
                  alt={heroShowcase[1].title}
                  className="w-full h-36 object-cover rounded-xl"
                />
                <h3 className="font-bold text-slate-900 mt-3.5 text-sm xl:text-base tracking-tight">
                  {heroShowcase[1].title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {heroShowcase[1].desc}
                </p>
              </div>

              {/* 3. Data Entry (Bottom Left - Front Layer, Overlaps Analytics) */}
              <div className="absolute bottom-12 -left-4 w-56 xl:w-64 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/10 transition-all duration-500 ease-out hover:scale-105 hover:z-50 premium-hover-shadow animate-float-3 z-30">
                <img
                  src={heroShowcase[2].img}
                  alt={heroShowcase[2].title}
                  className="w-full h-36 object-cover rounded-xl"
                />
                <h3 className="font-bold text-slate-900 mt-3.5 text-sm xl:text-base tracking-tight">
                  {heroShowcase[2].title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {heroShowcase[2].desc}
                </p>
              </div>

              {/* 4. Admin Support (Bottom Right - Foreground Layer, Overlaps Web Scraping) */}
              <div className="absolute bottom-0 right-0 w-56 xl:w-64 bg-white rounded-2xl p-4 shadow-2xl border border-slate-100 transition-all duration-500 ease-out hover:scale-105 hover:z-50 premium-hover-shadow animate-float-4 z-40">
                <img
                  src={heroShowcase[3].img}
                  alt={heroShowcase[3].title}
                  className="w-full h-36 object-cover rounded-xl"
                />
                <h3 className="font-bold text-slate-900 mt-3.5 text-sm xl:text-base tracking-tight">
                  {heroShowcase[3].title}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  {heroShowcase[3].desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-4 sm:p-6 bg-slate-50 rounded-2xl flex flex-col items-center justify-center border border-slate-100"
              >
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600">
                  {stat.value}
                </span>
                <span className="text-slate-500 text-xs sm:text-sm mt-2 font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section
        id="departments"
        className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
            Our Departments
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Explore our specialized departments designed to handle every aspect
            of your data and administrative needs under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {departments.map((dept, idx) => (
            <Link
              key={dept.slug}
              to={`/departments/${dept.slug}`}
              className="bg-white border border-slate-100 shadow-sm rounded-2xl p-5 sm:p-6 flex flex-col group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="overflow-hidden rounded-xl mb-5 aspect-[16/10]">
                <img
                  src={dept.cardImage || dept.heroImage}
                  alt={dept.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-xl mb-4 shadow-md shrink-0">
                <dept.icon />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {dept.title}
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5 flex-grow">
                {dept.shortDesc}
              </p>
              <span className="inline-flex items-center gap-2 text-blue-600 font-semibold text-xs sm:text-sm group-hover:gap-3 transition-all">
                Learn More <FaArrowRight className="text-xs" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Built On Trust & Accuracy
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
              We combine skilled professionals, proven processes, and the latest
              tools to deliver results that help your business grow faster.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600 text-xl mb-5">
                  <item.icon />
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / HOW WE WORK */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight mb-4">
              How We Work With You
            </h2>
            <p className="text-slate-600 mb-8 text-sm sm:text-base">
              We follow a simple, transparent process to ensure every project is
              delivered with accuracy, speed, and complete client satisfaction.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Share Your Requirements",
                  desc: "Tell us about your project, data, and expectations.",
                },
                {
                  title: "Get a Custom Plan & Quote",
                  desc: "We analyze your needs and propose the best approach and pricing.",
                },
                {
                  title: "Project Kickoff",
                  desc: "Our team starts work with a pilot batch for your approval.",
                },
                {
                  title: "Ongoing Delivery & Support",
                  desc: "Receive regular updates, quality checks, and final delivery.",
                },
              ].map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold shadow-md shadow-blue-600/20">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 p-1.5 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
                alt="Team analyzing data"
                className="h-full w-full object-cover rounded-[1.3rem]"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100 max-w-[90%]">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 text-base">
                <FaCheck />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-xs sm:text-sm">
                  99.9% Accuracy
                </p>
                <p className="text-[11px] sm:text-xs text-slate-500">
                  Across all delivered projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <FaQuoteLeft className="text-blue-100 text-2xl mb-4" />
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2 pt-4 border-t border-slate-100">
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      {t.role}
                    </p>
                  </div>
                  <div className="flex text-amber-400 text-xs gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-cyan-600 text-white">
        <div className="absolute -top-10 -right-10 h-48 w-48 sm:h-60 sm:w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Ready to Streamline Your Data Operations?
          </h2>
          <p className="text-slate-100 max-w-2xl mx-auto mb-8 text-xs sm:text-sm md:text-base opacity-90">
            Get in touch with our team today and discover how {siteConfig.name}{" "}
            can help your business save time, reduce costs, and scale
            efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-700 hover:bg-slate-50 font-semibold rounded-xl shadow-lg transition-all text-sm sm:text-base"
            >
              Contact Us Today <FaArrowRight className="text-xs" />
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold rounded-xl transition-all text-sm sm:text-base"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}