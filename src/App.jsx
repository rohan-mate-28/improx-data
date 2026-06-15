import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'
import ScrollToTop from './components/ScrollToTop'
import PageTransition from './components/PageTransition'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import DepartmentPage from './pages/DepartmentPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />

      <main className="flex-grow">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/departments/:slug" element={<DepartmentPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>

      <Footer />
      <FloatingButton />
    </div>
  )
}

export default App