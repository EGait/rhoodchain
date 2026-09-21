'use client'

import { useRouter } from 'next/navigation'
import HeroChat from './HeroChat'

export default function Hero() {
  const router = useRouter()

  return (
    <div
      className="text-center px-6 py-10 md:py-16 border-b"
      style={{
        borderColor: 'rgba(34,197,94,0.2)',
        background: 'linear-gradient(180deg, #050806 0%, #08120d 20%, #0c1f16 45%, #113020 70%, #16402a 88%, #1a4a31 100%)',
      }}
    >
      <img
        src="/icon.png"
        alt="RhoodChain"
        className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 object-contain"
      />
      <div className="inline-block text-xs md:text-sm px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}>
        Your Robinhood Chain universe, all in one place
      </div>
      <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-3">
        The hub for everything{" "}
        <span style={{ color: '#22C55E' }}>
          Robinhood Chain
        </span>
      </h1>
      <p className="text-gray-500 text-sm md:text-base max-w-md md:max-w-xl mx-auto mb-5 leading-relaxed">
        Top projects, breaking news, and DeFi — all in one place for the Robinhood Chain ecosystem.
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {[
          { label: 'Projects', href: '/projects', primary: true },
          { label: 'Markets', href: '/markets' },
          { label: 'News', href: '/news' },
          { label: 'Learn', href: '/learn' },
        ].map((btn: any) => (
          <button
            key={btn.label}
            onClick={() => router.push(btn.href)}
            className="text-sm md:text-base px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity border"
            style={btn.primary
              ? { backgroundColor: '#22C55E', color: '#08100c', borderColor: '#22C55E' }
              : { borderColor: '#22C55E', color: '#22C55E' }
            }
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Ask bar — compact mode, sits right under the buttons */}
      <div className="mt-8">
        <HeroChat compact />
      </div>
    </div>
  )
}