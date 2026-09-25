import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import VideoShowcase from './components/VideoShowcase.jsx'
import Problem from './components/Problem.jsx'
import Solution from './components/Solution.jsx'
import Dashboard from './components/Dashboard.jsx'
import Workflow from './components/Workflow.jsx'
import Architecture from './components/Architecture.jsx'
import AICapabilities from './components/AICapabilities.jsx'
import BusinessWorkflow from './components/BusinessWorkflow.jsx'
import GTM from './components/GTM.jsx'
import Pricing from './components/Pricing.jsx'
import Comparison from './components/Comparison.jsx'
import FutureVision from './components/FutureVision.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-base focus:px-4 focus:py-2 focus:rounded-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <VideoShowcase />
        <Problem />
        <Solution />
        <Dashboard />
        <Workflow />
        <Architecture />
        <AICapabilities />
        <BusinessWorkflow />
        <GTM />
        <Pricing />
        <Comparison />
        <FutureVision />
      </main>
      <Footer />
    </div>
  )
}
