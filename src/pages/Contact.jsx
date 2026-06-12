import { useState } from 'react'
import { FaPhone, FaEnvelope, FaLocationDot, FaPaperPlane } from 'react-icons/fa6'
import { departments } from '../data/departments'
import { siteConfig, socialLinks } from '../data/siteConfig'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600 text-white overflow-hidden">
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-accent-400/20 blur-3xl animate-float" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-accent-400 text-sm font-semibold mb-6 border border-white/10">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6">
            Let's Discuss Your Project
          </h1>
          <p className="text-lg text-slate-200 max-w-2xl mx-auto">
            Have a question or ready to get started? Reach out to our team and we'll respond
            as quickly as possible.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="section">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="card p-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 text-xl">
                  <FaPhone />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">Call Us</h3>
                  <a href={`tel:${siteConfig.phoneRaw}`} className="text-slate-600 hover:text-primary-600 transition-colors">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 text-xl">
                  <FaEnvelope />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">Email Us</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-slate-600 hover:text-primary-600 transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="flex items-center gap-4 mb-2">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-600 text-xl">
                  <FaLocationDot />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900">Website</h3>
                  <p className="text-slate-600">{siteConfig.domain}</p>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="font-bold text-slate-900 mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary-600 hover:bg-gradient-to-r hover:from-primary-600 hover:to-accent-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                  >
                    <social.icon className="text-base" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 card p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
            <p className="text-slate-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {submitted && (
              <div className="mb-6 rounded-xl bg-green-50 border border-green-200 text-green-700 px-4 py-3 text-sm font-medium animate-fade-in-up">
                Thank you! Your message has been received. We'll be in touch soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    <option value="">Select a service</option>
                    {departments.map((dept) => (
                      <option key={dept.slug} value={dept.title}>{dept.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
