import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import PageTransition from './components/PageTransition'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Industries from './pages/Industries'
import IndustryDetail from './pages/IndustryDetail'
import Compliance from './pages/Compliance'
import ComplianceDetail from './pages/ComplianceDetail'
import Packages from './pages/Packages'
import Contact from './pages/Contact'
import ComingSoon from './pages/ComingSoon'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
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
      <Route path="/packages" element={<Layout><Packages /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/blog" element={<Layout><ComingSoon /></Layout>} />
      <Route path="/case-studies" element={<Layout><ComingSoon /></Layout>} />
      <Route path="/product-updates" element={<Layout><ComingSoon /></Layout>} />
      <Route path="/help-center" element={<Layout><ComingSoon /></Layout>} />
    </Routes>
  )
}
