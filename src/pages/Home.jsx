import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaCheck,
  FaShieldAlt,
  FaClock,
  FaUsers,
  FaAward,
  FaQuoteLeft,
  FaStar,
} from 'react-icons/fa'
import { departments } from '../data/departments'
import { siteConfig } from '../data/siteConfig'

const stats = [
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Happy Clients', value: '120+' },
  { label: 'Team Experts', value: '30+' },
  { label: 'Years of Experience', value: '5+' },
]

const whyUs = [
  {
    icon: FaShieldAlt,
    title: 'Data Security & Confidentiality',
    desc: 'Your data is handled with strict confidentiality agreements and secure systems at every step.',
  },
  {
    icon: FaClock,
    title: 'On-Time Delivery',
    desc: 'We respect deadlines and deliver projects on schedule, every single time.',
  },
  {
    icon: FaUsers,
    title: 'Skilled & Trained Team',
    desc: 'Our experts are trained across multiple tools, platforms, and industries.',
  },
  {
    icon: FaAward,
    title: 'Quality Assurance',
    desc: 'Multi-level quality checks ensure top accuracy across every deliverable.',
  },
]

const testimonials = [
  {
    name: 'Michael Johnson',
    role: 'E-commerce Business Owner',
    text: 'ImproxData handled our product catalog data entry flawlessly. Accurate, fast, and very professional team.',
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Manager',
    text: 'The web scraping solution they built saves us hours every week. Highly recommend their services.',
  },
  {
    name: 'David Lee',
    role: 'Operations Head',
    text: 'Their administrative assistant support has been a game changer for our daily operations.',
  },
]

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600 text-white">
        {/* animated blobs */}
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-primary-400/20 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-white/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-3xl animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-accent-400 text-sm font-semibold mb-6 border border-white/10">
              Trusted Data & Admin Outsourcing Partner
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Smart Data Solutions for a{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-400 to-primary-200 bg-300% animate-gradient">
                Growing Business
              </span>
            </h1>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl">
              From data entry and web scraping to analytics and virtual administrative support -
              {` ${siteConfig.name}`} delivers accurate, scalable, and affordable outsourcing
              solutions tailored to your business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Get a Free Quote <FaArrowRight />
              </Link>
              <Link to="/departments/data-entry" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary-700">
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z" />
          </svg>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white -mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="card p-6 flex flex-col items-center justify-center"
              >
                <span className="text-3xl md:text-4xl font-extrabold gradient-text">{stat.value}</span>
                <span className="text-slate-500 text-sm mt-2 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS */}
      <section className="section">
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">What We Offer</span>
          <h2 className="section-title mt-2">Our Departments</h2>
          <p className="section-subtitle mx-auto">
            Explore our specialized departments designed to handle every aspect of your data
            and administrative needs under one roof.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, idx) => (
            <Link
              key={dept.slug}
              to={`/departments/${dept.slug}`}
              className="card group p-8 flex flex-col"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 text-white text-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-primary-600/20">
                <dept.icon />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                {dept.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">{dept.shortDesc}</p>
              <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                Learn More <FaArrowRight className="text-xs" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50">
        <div className="section">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Why Choose Us</span>
            <h2 className="section-title mt-2">Built On Trust & Accuracy</h2>
            <p className="section-subtitle mx-auto">
              We combine skilled professionals, proven processes, and the latest tools to
              deliver results that help your business grow faster.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item) => (
              <div key={item.title} className="card p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600 text-2xl mb-5">
                  <item.icon />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS / HOW WE WORK */}
      <section className="section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Our Process</span>
            <h2 className="section-title mt-2">How We Work With You</h2>
            <p className="text-slate-600 mb-8">
              We follow a simple, transparent process to ensure every project is delivered with
              accuracy, speed, and complete client satisfaction.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Share Your Requirements', desc: 'Tell us about your project, data, and expectations.' },
                { title: 'Get a Custom Plan & Quote', desc: 'We analyze your needs and propose the best approach and pricing.' },
                { title: 'Project Kickoff', desc: 'Our team starts work with a pilot batch for your approval.' },
                { title: 'Ongoing Delivery & Support', desc: 'Receive regular updates, quality checks, and final delivery.' },
              ].map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-500 text-white font-bold shadow-md shadow-primary-600/30">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{step.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-600 to-accent-500 p-2 shadow-2xl animate-float-slow">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
                alt="Team analyzing data"
                className="h-full w-full object-cover rounded-[1.4rem]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3 animate-fade-in-up">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 text-xl">
                <FaCheck />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">99.9% Accuracy</p>
                <p className="text-xs text-slate-500">Across all delivered projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50">
        <div className="section">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Testimonials</span>
            <h2 className="section-title mt-2">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="card p-8">
                <FaQuoteLeft className="text-primary-200 text-3xl mb-4" />
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </div>
                  <div className="flex text-yellow-400 text-sm gap-0.5">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-600 bg-300% animate-gradient" />
        <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-white/10 blur-3xl animate-float" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Streamline Your Data Operations?
          </h2>
          <p className="text-slate-100 max-w-2xl mx-auto mb-8">
            Get in touch with our team today and discover how {siteConfig.name} can help your
            business save time, reduce costs, and scale efficiently.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary !bg-white !text-primary-700 !shadow-white/30 hover:!bg-slate-100">
              Contact Us Today <FaArrowRight />
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary-700">
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
