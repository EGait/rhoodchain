'use client'

import { projects } from '../data/projects'

export default function ProjectList() {
  const topProjects = projects.slice(0, 6)

  return (
    <div className="px-6 md:px-8 py-10">
      <div className="text-xs font-medium uppercase tracking-widest mb-6" style={{ color: '#22C55E' }}>
        Top Projects
      </div>
      {topProjects.length === 0 ? (
        <div
          className="rounded-lg border px-6 py-10 text-center text-sm text-gray-500"
          style={{ borderColor: 'rgba(34,197,94,0.2)', backgroundColor: 'rgba(34,197,94,0.04)' }}
        >
          Robinhood Chain ecosystem projects are coming soon.
        </div>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {topProjects.map((project: any) => (
          <div
            key={project.id}
            className="rounded-2xl p-5 flex flex-col gap-3 transition-all duration-200 hover:scale-[1.02]"
            style={{ backgroundColor: 'rgba(34,197,94,0.05)', border: '1px solid rgba(34,197,94,0.15)' }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 overflow-hidden" style={{ backgroundColor: 'rgba(34,197,94,0.1)' }}>
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt={project.name}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e: any) => {
                        e.currentTarget.style.display = 'none'
                        const sibling = e.currentTarget.nextElementSibling as HTMLElement
                        if (sibling) sibling.style.display = 'block'
                      }}
                    />
                  ) : null}
                  <span style={{ display: project.logo ? 'none' : 'block' }}>{project.icon}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-200">{project.name}</div>
                  <div className="text-xs text-gray-600">{project.category}</div>
                </div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(34,197,94,0.1)', color: '#22C55E' }}>
                {project.badge}
              </span>
            </div>
            <div className="text-xs text-gray-500 leading-relaxed">
              {project.description}
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  )
}
