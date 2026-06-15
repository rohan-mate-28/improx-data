import { useParams, Link, Navigate } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { departments, getDepartmentBySlug } from "../data/departments";
import { siteConfig } from "../data/siteConfig";

export default function DepartmentPage() {
  const { slug } = useParams();
  const dept = getDepartmentBySlug(slug);

  if (!dept) return <Navigate to="/404" replace />;

  const otherDepartments = departments
    .filter((d) => d.slug !== dept.slug)
    .slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600 text-white overflow-hidden">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl animate-float" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <nav className="text-sm text-slate-300 mb-6 animate-fade-in-up">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{dept.title}</span>
          </nav>
          <div className="flex items-center gap-5 mb-6 animate-fade-in-up">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-3xl border border-white/10">
              <dept.icon />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
              {dept.title}
            </h1>
          </div>
          <p className="text-lg text-slate-200 max-w-2xl animate-fade-in-up">
            {dept.shortDesc}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">
              Overview
            </span>
            <h2 className="section-title mt-2">
              About Our {dept.title} Service
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              {dept.overview}
            </p>
            <Link to="/contact" className="btn-primary">
              Request This Service <FaArrowRight />
            </Link>
          </div>
          <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={dept.heroImage}
              alt={dept.title}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* SUB-DEPARTMENTS */}
      <section className="bg-slate-50">
        <div className="section">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">
              Sub-Departments
            </span>
            <h2 className="section-title mt-2">
              What's Included in {dept.title}
            </h2>
            <p className="section-subtitle mx-auto">
              Our {dept.title} department is divided into specialized
              sub-services to handle every requirement with focused expertise.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {dept.subDepartments.map((sub) => (
              <div key={sub.name} className="card p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 text-white mb-4 shadow-md shadow-primary-600/20">
                  <FaCheckCircle />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">
                  {sub.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS + PROCESS */}
      <section className="section">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">
              Benefits
            </span>
            <h2 className="section-title mt-2">
              Why Choose Our {dept.title} Service
            </h2>
            <ul className="space-y-4 mt-6">
              {dept.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 text-xs">
                    <FaCheckCircle />
                  </span>
                  <span className="text-slate-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">
              Our Process
            </span>
            <h2 className="section-title mt-2">How It Works</h2>
            <div className="space-y-6 mt-6">
              {dept.process.map((step, i) => (
                <div key={step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-500 text-white font-bold shadow-md shadow-primary-600/30">
                    {i + 1}
                  </div>
                  <p className="text-slate-600 pt-2">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER DEPARTMENTS */}
      <section className="bg-slate-50">
        <div className="section">
          <div className="text-center mb-14">
            <span className="text-primary-600 font-semibold tracking-wide uppercase text-sm">
              Explore More
            </span>
            <h2 className="section-title mt-2">Other Departments</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherDepartments.map((d) => (
              <Link
                key={d.slug}
                to={`/departments/${d.slug}`}
                className="card group overflow-hidden p-0 flex flex-col hover:-translate-y-2 transition-all duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={d.cardImage}
                    alt={d.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 text-white text-2xl mb-4 shadow-lg shadow-primary-600/20">
                    <d.icon />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                    {d.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {d.shortDesc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    Learn More <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-600 bg-300% animate-gradient" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Need Help With {dept.title}?
          </h2>
          <p className="text-slate-100 max-w-2xl mx-auto mb-8">
            Reach out to {siteConfig.name} today for a free consultation and
            custom quote tailored to your project requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary !bg-white !text-primary-700 !shadow-white/30 hover:!bg-slate-100"
            >
              Get Started <FaArrowRight />
            </Link>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary-700"
            >
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
