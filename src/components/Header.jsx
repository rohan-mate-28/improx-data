import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXmark, FaChevronDown, FaPhone } from "react-icons/fa6";
import { departments } from "../data/departments";
import { siteConfig } from "../data/siteConfig";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [deptOpen, setDeptOpen] = useState(false);
  const [mobileDeptOpen, setMobileDeptOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={() => setIsOpen(false)}
          >
            <img
              src="/logo.png"
              alt="ImproxData logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-2xl font-extrabold tracking-tight text-slate-900 gradient-text">
              Data
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 hover:text-primary-600 ${
                  isActive ? "text-primary-600" : "text-slate-700"
                }`
              }
            >
              Home
            </NavLink>

            {/* Departments Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDeptOpen(true)}
              onMouseLeave={() => setDeptOpen(false)}
            >
              <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-primary-600 transition-colors duration-200">
                Services
                <FaChevronDown
                  className={`text-xs mt-0.5 transition-transform duration-300 ${deptOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[420px] transition-all duration-300 origin-top ${
                  deptOpen
                    ? "opacity-100 scale-100 visible"
                    : "opacity-0 scale-95 invisible pointer-events-none"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 grid grid-cols-2 gap-1">
                  {departments.map((dept) => (
                    <Link
                      key={dept.slug}
                      to={`/departments/${dept.slug}`}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-primary-50 transition-colors duration-200 group"
                      onClick={() => setDeptOpen(false)}
                    >
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-200">
                        <dept.icon className="text-base" />
                      </span>
                      <span>
                        <span className="block font-semibold text-slate-800 text-sm">
                          {dept.title}
                        </span>
                        <span className="block text-xs text-slate-500 mt-0.5 line-clamp-2">
                          {dept.shortDesc}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 hover:text-primary-600 ${
                  isActive ? "text-primary-600" : "text-slate-700"
                }`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-medium transition-colors duration-200 hover:text-primary-600 ${
                  isActive ? "text-primary-600" : "text-slate-700"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA + Phone (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-primary-600 transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <FaPhone className="text-sm" />
              </span>
              {siteConfig.phone}
            </a>
            <Link to="/contact" className="btn-primary !px-5 !py-2.5 text-sm">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-2xl text-slate-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white border-t border-slate-100 ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `py-2.5 px-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? "bg-primary-50 text-primary-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          {/* Mobile Departments accordion */}
          <button
            className="flex items-center justify-between py-2.5 px-3 rounded-lg font-medium text-slate-700 hover:bg-slate-50 transition-colors"
            onClick={() => setMobileDeptOpen(!mobileDeptOpen)}
          >
            Services
            <FaChevronDown
              className={`text-xs transition-transform duration-300 ${mobileDeptOpen ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${mobileDeptOpen ? "max-h-[600px]" : "max-h-0"}`}
          >
            <div className="pl-4 flex flex-col gap-1 pb-2">
              {departments.map((dept) => (
                <Link
                  key={dept.slug}
                  to={`/departments/${dept.slug}`}
                  onClick={() => {
                    setIsOpen(false);
                    setMobileDeptOpen(false);
                  }}
                  className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                >
                  <dept.icon className="text-primary-500" />
                  {dept.title}
                </Link>
              ))}
            </div>
          </div>

          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `py-2.5 px-3 rounded-lg font-medium transition-colors ${
                isActive
                  ? "bg-primary-50 text-primary-600"
                  : "text-slate-700 hover:bg-slate-50"
              }`
            }
          >
            Contact
          </NavLink>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
