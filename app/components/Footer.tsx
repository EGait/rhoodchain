export default function Footer() {
  return (
    <footer className="px-8 py-5 border-t" style={{ borderColor: 'rgba(34,197,94,0.2)' }}>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
        <div className="text-xs text-gray-700">© 2026 RhoodChain · Built for the Robinhood Chain ecosystem</div>
        <div className="flex gap-4 items-center flex-wrap justify-center">
          <a href="/projects" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">Projects</a>
          <a href="/markets" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">Markets</a>
          <a href="/news" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">News</a>
          <a href="/learn" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">Learn</a>
          <a href="/about" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">About</a>
          <a href="/privacy" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">Privacy</a>
          <a href="/license" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">License</a>
          <a href="/copyright" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">Copyright</a>
          <a href="https://x.com/RHoodChainHQ" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-700 hover:text-gray-500 transition-colors">𝕏 @RHoodChainHQ</a>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t text-center" style={{ borderColor: 'rgba(34,197,94,0.1)' }}>
        <p className="text-xs text-gray-700 leading-relaxed max-w-3xl mx-auto">
          RhoodChain is an independent community site and is <strong className="text-gray-600">not affiliated with, endorsed by, or sponsored by Robinhood Markets, Inc.</strong> or any of its subsidiaries. Nothing here is financial advice. Tokens on Robinhood Chain are created by third parties and are not vetted or backed by Robinhood.
        </p>
      </div>
    </footer>
  )
}
