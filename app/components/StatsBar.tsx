'use client'

const stats = [
  { value: 'Daily', label: 'Robinhood Chain updates' },
  { value: 'Live', label: 'Stock token tracking' },
  { value: 'Top', label: 'Projects tracked' },
  { value: 'Free', label: 'Always free to use' },
]

export default function StatsBar() {
  return (
    <div className="px-6 py-6 border-b" style={{ borderColor: 'rgba(34,197,94,0.2)' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-xl md:text-2xl font-medium" style={{ color: '#22C55E' }}>
              {stat.value}
            </div>
            <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
