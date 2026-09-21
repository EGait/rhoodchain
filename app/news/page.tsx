import Navbar from '../components/Navbar'
import NewsFeed from '../components/NewsFeed'
import Footer from '../components/Footer'

export default function NewsPage() {
  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />
      <NewsFeed />
      <Footer />
    </main>
  )
}