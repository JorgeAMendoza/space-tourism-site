'use client'

import type { Technology } from '@/types/api'
import { useMemo, useState } from 'react'
import Tech from '../Tech/Tech'

interface TechSliderProps {
  data: Technology[]
}

const TechSlider = ({ data }: TechSliderProps) => {
  const [currentTech, setCurrentTech] = useState(data[0].name)

  const techData = useMemo(() => {
    const targetTech = data.find((tech) => tech.name === currentTech)
    if (targetTech === undefined) return null

    return targetTech
  }, [currentTech, data])

  if (techData === null) return null
  return (
    <div>
      <Tech data={techData}>
        <nav aria-label="navigation for technology used for travel">
          <ul>
            {data.map((tech, index) => (
              <li key={tech.name}>
                <button
                  type="button"
                  aria-label={`click to navigate to ${tech.name}`}
                  onClick={() => setCurrentTech(tech.name)}
                >
                  {index}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Tech>
    </div>
  )
}

export default TechSlider
