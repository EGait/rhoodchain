'use client'

import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100 flex items-center justify-center">
      <div className="text-center px-6">
        <img
          src="/icon.png"
          alt="RhoodChain"
          className="w-16 h-16 mx-auto mb-6 object-contain opacity-50"
        />
        <div className="text-6xl font-medium mb-4" style={{ color: '#22C55E' }}>
          404
        </div>
        <div className="text-xl font-medium text-gray-200 mb-3">
          Page not found
        </div>
        <p className="text-gray-500 text-sm max-w-sm mx-auto mb-8">
          This page does not exist or has been moved. Head back to the homepage to explore Robinhood Chain.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => router.push('/')}
            className="text-sm px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#22C55E', color: '#08100c' }}
          >
            Go home
          </button>
          <button
            onClick={() => router.push('/news')}
            className="text-sm px-5 py-2 rounded-lg hover:opacity-80 transition-opacity border"
            style={{ borderColor: '#22C55E', color: '#22C55E' }}
          >
            Read news
          </button>
        </div>
      </div>
    </main>
  )
}