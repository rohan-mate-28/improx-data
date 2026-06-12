import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-950 via-primary-800 to-primary-600 text-white overflow-hidden">
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-primary-400/20 blur-3xl animate-float-slow" />
      <div className="relative text-center px-4">
        <h1 className="text-8xl md:text-9xl font-extrabold gradient-text">404</h1>
        <p className="text-xl md:text-2xl font-semibold mt-4 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn-primary !bg-white !text-primary-700 hover:!bg-slate-100">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    </section>
  )
}
