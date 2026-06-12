import { Link } from "react-router-dom";
import { departments } from "../data/departments";
import { siteConfig, socialLinks, contactIcons } from "../data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  const PhoneIcon = contactIcons.phone;
  const EmailIcon = contactIcons.email;
  const LocationIcon = contactIcons.location;

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
      {/* decorative blobs */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary-700/20 blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl animate-pulse-slow" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 group"
              onClick={() => setIsOpen(false)}
            >
              <img
                src="/logo.png"
                alt="ImproxData logo"
                className="h-12 w-auto object-contain"
              />
              <span className="text-2xl font-extrabold text-white gradient-text">
                Data
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline}. We help businesses save time and cut costs
              with reliable data and administrative outsourcing solutions.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Departments
            </h3>
            <ul className="space-y-2.5 text-sm">
              {departments.map((dept) => (
                <li key={dept.slug}>
                  <Link
                    to={`/departments/${dept.slug}`}
                    className="hover:text-primary-400 transition-colors duration-200"
                  >
                    {dept.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-primary-400">
                  <PhoneIcon />
                </span>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-primary-400">
                  <EmailIcon />
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary-400 transition-colors duration-200"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-800 text-primary-400">
                  <LocationIcon />
                </span>
                <span>{siteConfig.domain}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>&copy; {year} ImproxData. All rights reserved.</p>
          <p>Designed &amp; Developed with ❤ by ImproxData Team</p>
        </div>
      </div>
    </footer>
  );
}
