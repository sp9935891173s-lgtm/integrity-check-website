import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Industries from './pages/Industries'
import IndustryDetail from './pages/IndustryDetail'
import Compliance from './pages/Compliance'
import ComplianceDetail from './pages/ComplianceDetail'
import About from './pages/About'
import Contact from './pages/Contact'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/services" element={<Layout><Services /></Layout>} />
      <Route path="/services/:id" element={<Layout><ServiceDetail /></Layout>} />
      <Route path="/industries" element={<Layout><Industries /></Layout>} />
      <Route path="/industries/:id" element={<Layout><IndustryDetail /></Layout>} />
      <Route path="/compliance" element={<Layout><Compliance /></Layout>} />
      <Route path="/compliance/:id" element={<Layout><ComplianceDetail /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
    </Routes>
  )
}
