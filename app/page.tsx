import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedResearch from './components/FeaturedResearch'
import ProjectList from './components/ProjectList'
import NewsFeed from './components/NewsFeed'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />
      <Hero />
      <FeaturedResearch />
      <ProjectList />
      <NewsFeed includeOwn={false} />
      <Footer />
    </main>
  )
}