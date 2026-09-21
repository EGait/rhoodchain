import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function WalletSafety101Page() {
  return (
    <main className="bg-[#08100c] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.3)', color: '#22C55E' }}>
            Learn · Beginner
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            Crypto Wallet Safety <span style={{ color: '#22C55E' }}>101</span>
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By RhoodChain</span>
            <span>•</span>
            <span>September 20, 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
            <p className="text-sm text-gray-300">
              This guide assumes zero crypto experience. If you already know what a seed phrase is, skip to "The Real Threats" below.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What a Wallet Actually Is</h2>
            <p className="mb-3">
              A crypto wallet doesn't "hold" your tokens the way a physical wallet holds cash. Your assets live on the blockchain itself. What a wallet actually stores is a <strong className="text-gray-200">private key</strong> — a secret piece of data that proves you're allowed to move those assets. The wallet app is really just a signing tool: it uses your key to authorize transactions on your behalf.
            </p>
            <p>
              This distinction matters because it explains almost every rule below. Whoever has your private key controls your assets — fully, instantly, and irreversibly. There's no bank to call, no "forgot password" button, and no chargeback.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Seed Phrases: The One Rule That Matters Most</h2>
            <p className="mb-3">
              When you create a wallet, you're given a <strong className="text-gray-200">seed phrase</strong> (also called a recovery phrase) — usually 12 or 24 plain English words, like "apple river coffee tunnel..." That phrase is a human-readable backup of your private key. Anyone who has it can recreate your wallet on their own device and take everything in it.
            </p>
            <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', borderColor: '#22C55E', borderTop: '1px solid rgba(34,197,94,0.12)', borderRight: '1px solid rgba(34,197,94,0.12)', borderBottom: '1px solid rgba(34,197,94,0.12)' }}>
              <div className="text-sm font-medium text-gray-200 mb-1">No legitimate person or company will ever ask for it</div>
              <p className="text-xs text-gray-500">
                Not Robinhood support, not a wallet's "customer service," not a project's team in Discord, not a giveaway, not a "wallet verification" popup. Anyone asking for your seed phrase — however official they look — is trying to steal from you. Every time, no exceptions.
              </p>
            </div>
            <p className="mt-3">
              Write your seed phrase on paper and store it somewhere physical and private. Don't screenshot it, don't save it in a notes app, don't email it to yourself, don't store it in cloud storage. Digital copies are exactly what gets stolen when a device is compromised.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Custodial vs. Self-Custody: Know Which One You're Using</h2>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Custodial (an app holds the keys for you)</div>
                <p className="text-xs text-gray-500">
                  The Robinhood Wallet is largely this model for most users — it manages the underlying keys so you don't have to. This is easier for beginners and has a support team you can contact, but it also means you're trusting that company's security and business continuity.
                </p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Self-custody (you hold the keys)</div>
                <p className="text-xs text-gray-500">
                  Wallets like Rabby generate and store your private key on your own device. Nobody can freeze your funds or lose them on your behalf — but there's also no "forgot password" recovery. If you lose your seed phrase, the funds are gone permanently.
                </p>
              </div>
            </div>
            <p className="mt-3">
              Neither model is "safer" in every sense — they trade different risks. Custodial wallets concentrate risk in a company (their security, their solvency, their policies). Self-custody concentrates risk in you (your own operational security, your own backups).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Real Threats</h2>
            <p className="mb-3">
              Seed phrase theft gets the headlines, but most people actually lose funds to these, roughly in order of how common they are:
            </p>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', borderColor: '#22C55E', borderTop: '1px solid rgba(34,197,94,0.12)', borderRight: '1px solid rgba(34,197,94,0.12)', borderBottom: '1px solid rgba(34,197,94,0.12)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Phishing sites</div>
                <p className="text-xs text-gray-500">A near-identical copy of a real site's URL, usually reached through a link in a DM, comment, or ad — never by typing the address yourself. Bookmark the real URLs you use and stop typing them into search engines, where sponsored fake results can outrank the real site.</p>
              </div>
              <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', borderColor: '#22C55E', borderTop: '1px solid rgba(34,197,94,0.12)', borderRight: '1px solid rgba(34,197,94,0.12)', borderBottom: '1px solid rgba(34,197,94,0.12)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Malicious "approve" transactions</div>
                <p className="text-xs text-gray-500">Wallets don't just ask you to sign transfers — they ask you to sign permissions ("approve this app to spend token X"). A scam site can request unlimited approval on a valuable token, then drain it later without ever asking again. Read what you're approving; if it doesn't make sense for what you're doing, decline.</p>
              </div>
              <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', borderColor: '#22C55E', borderTop: '1px solid rgba(34,197,94,0.12)', borderRight: '1px solid rgba(34,197,94,0.12)', borderBottom: '1px solid rgba(34,197,94,0.12)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Fake support</div>
                <p className="text-xs text-gray-500">Scammers monitor social media for people asking for help, then DM pretending to be official support. Real support will never DM you first, and will never ask you to "verify your wallet" by connecting it to a random site or sharing your seed phrase.</p>
              </div>
              <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', borderColor: '#22C55E', borderTop: '1px solid rgba(34,197,94,0.12)', borderRight: '1px solid rgba(34,197,94,0.12)', borderBottom: '1px solid rgba(34,197,94,0.12)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Sending to the wrong address</div>
                <p className="text-xs text-gray-500">Blockchain transactions can't be reversed. Always verify the first and last few characters of an address before confirming, and send a small test amount first for any large or unfamiliar transfer.</p>
              </div>
              <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', borderColor: '#22C55E', borderTop: '1px solid rgba(34,197,94,0.12)', borderRight: '1px solid rgba(34,197,94,0.12)', borderBottom: '1px solid rgba(34,197,94,0.12)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Fake tokens and ticker collisions</div>
                <p className="text-xs text-gray-500">Anyone can create a token with any name or ticker, including copying the name of a real project. Always verify a contract address through the project's official site or docs — never trust a name alone on an aggregator or DEX search bar.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Practical Habits Worth Building</h2>
            <div className="flex flex-col gap-2">
              <p>• <strong className="text-gray-300">Use a separate "hot" wallet for everyday activity</strong> and keep larger holdings in a wallet you rarely connect to new sites.</p>
              <p>• <strong className="text-gray-300">Double-check the network</strong> before sending — sending an asset to the wrong chain can mean permanent loss, even with the correct address.</p>
              <p>• <strong className="text-gray-300">Revoke old approvals periodically</strong> using a tool like revoke.cash — permissions you granted months ago to an app you no longer use are still live until you cancel them.</p>
              <p>• <strong className="text-gray-300">Never sign a transaction you don't understand</strong> — most wallets show a summary of what's being requested; if it looks unfamiliar or overly broad, stop and research first.</p>
              <p>• <strong className="text-gray-300">Be skeptical of urgency</strong> — "act now," "limited time," "your account will be locked" are pressure tactics designed to short-circuit careful thinking.</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What's Next</h2>
            <p>
              For details specific to using the Robinhood Wallet and Rabby together on Robinhood Chain, see our <a href="/learn/robinhood-wallet-and-rabby" style={{ color: '#22C55E' }}>companion guide</a>.
            </p>
          </div>

          <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This guide is for educational purposes only and does not constitute financial, legal, or security advice. Always do your own research and never share sensitive wallet information with anyone.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}
