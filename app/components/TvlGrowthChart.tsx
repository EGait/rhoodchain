'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

// Real, dated TVL snapshots pulled from public reporting across this project's
// research (CryptoBriefing, FalconX, datawallet) — not interpolated or estimated.
// Each bar is a discrete measured point in time, not a continuous trend line,
// since we don't have daily data to justify a line chart between them.
const data = [
  { date: 'Jul 14', tvl: 140, label: '$140M' },
  { date: 'Jul 22', tvl: 450, label: '$450M' },
  { date: 'Sep 17', tvl: 929, label: '$929M' },
]

function CustomTooltip({ active, payload }: any) {
  if (active && payload && payload.length) {
    return (
      <div
        className="rounded-lg px-3 py-2 text-xs"
        style={{ backgroundColor: '#0c1a12', border: '1px solid rgba(34,197,94,0.3)', color: '#e2f5e6' }}
      >
        {payload[0].payload.label} TVL
      </div>
    )
  }
  return null
}

export default function TvlGrowthChart() {
  return (
    <div className="rounded-2xl p-5" style={{ backgroundColor: 'rgba(34,197,94,0.04)', border: '1px solid rgba(34,197,94,0.15)' }}>
      <div className="flex items-center justify-between mb-1">
        <div className="text-sm font-medium text-gray-200">Total Value Locked, 2026</div>
        <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#22C55E' }}>
          Discrete snapshots
        </span>
      </div>
      <p className="text-xs text-gray-600 mb-4">
        Three publicly reported measurements — not a continuous trend line, since daily data isn't public.
      </p>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(34,197,94,0.1)" vertical={false} />
          <XAxis dataKey="date" tick={{ fill: '#8695a3', fontSize: 12 }} axisLine={{ stroke: 'rgba(34,197,94,0.2)' }} tickLine={false} />
          <YAxis tick={{ fill: '#8695a3', fontSize: 12 }} axisLine={false} tickLine={false} tickFormatter={(v) => `$${v}M`} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(34,197,94,0.05)' }} />
          <Bar dataKey="tvl" fill="#22C55E" radius={[6, 6, 0, 0]} maxBarSize={80} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
