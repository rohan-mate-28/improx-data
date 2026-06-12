import { Link } from 'react-router-dom'
import { FaArrowRight, FaBullseye, FaEye, FaHandshake } from 'react-icons/fa'
import { departments } from '../data/departments'
import { siteConfig } from '../data/siteConfig'

const values = [
  {
    icon: FaBullseye,
    title: 'Our Mission',
    desc: 'To empower businesses worldwide with accurate, affordable, and scalable data and administrative outsourcing services.',
  },
  {
    icon: FaEye,
    title: 'Our Vision',
    desc: 'To become a globally trusted name in data outsourcing, known for quality, integrity, and innovation.',
  },
  {
    icon: FaHandshake,
    title: 'Our Commitment',
    desc: 'We commit to confidentiality, transparency, and long-term partnerships built on trust and results.',
  },
]

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600 text-white overflow-hidden">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl animate-float" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-accent-400 text-sm font-semibold mb-6 border border-white/10">
            About {siteConfig.name}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Your Reliable Partner in Data & Administrative Outsourcing
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            {siteConfig.name} is a dedicated outsourcing company helping businesses across the
            globe manage their data, automate workflows, and streamline administrative
            operations.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="section">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="ImproxData team working"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Who We Are</span>
            <h2 className="section-title mt-2">Driven By Accuracy, Built On Trust</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              At {siteConfig.name}, we specialize in providing reliable back-office support to
              businesses of all sizes - from startups to large enterprises. Our team combines
              skilled professionals, modern tools, and proven workflows to deliver services
              that are accurate, secure, and cost-effective.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Whether you need bulk data entry, automated web scraping, in-depth analytics, or
              dedicated virtual assistants, our departments are structured to give you focused
              expertise and consistent quality across every project.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50">
        <div className="section">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Our Foundation</span>
            <h2 className="section-title mt-2">Mission, Vision & Values</h2>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-600 text-2xl mb-5">
                  <value.icon />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPARTMENTS QUICK LIST */}
      <section className="section">
        <div className="text-center mb-14">
          <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">Our Expertise</span>
          <h2 className="section-title mt-2">Departments We Specialize In</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <Link
              key={dept.slug}
              to={`/departments/${dept.slug}`}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary-200 transition-all duration-300 group"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 text-xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <dept.icon />
              </span>
              <span className="font-semibold text-slate-800 group-hover:text-primary-600 transition-colors duration-200">
                {dept.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-600 bg-300% animate-gradient" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-100 max-w-2xl mx-auto mb-8">
            Partner with {siteConfig.name} for reliable data and administrative support that
            scales with your business.
          </p>
          <Link to="/contact" className="btn-primary !bg-white !text-primary-700 !shadow-white/30 hover:!bg-slate-100">
            Contact Us <FaArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}
