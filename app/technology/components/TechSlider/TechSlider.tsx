'use client'
import style from './tech-slider.module.css'

import type { Technology } from '@/types/api'
import { useMemo, useState } from 'react'
import Tech from '../Tech/Tech'

interface TechSliderProps {
  data: Technology[]
}

const TechSlider = ({ data }: TechSliderProps) => {
  const [nextTech, setNextTech] = useState<string>('')
  const [techSwitch, setTechSwitch] = useState<boolean>(false)
  const [currentTech, setCurrentTech] = useState(data[0].name)

  const techData = useMemo(() => {
    const targetTech = data.find((tech) => tech.name === currentTech)
    if (targetTech === undefined) return null

    return targetTech
  }, [currentTech, data])

  if (techData === null) return null
  return (
    <div>
      <Tech
        data={techData}
        techSwitch={techSwitch}
        showNextTech={() => {
          setTechSwitch(false)
          setCurrentTech(nextTech)
        }}
      >
        <nav aria-label="navigation for technology used for travel">
          <ul className={style.techSlider}>
            {data.map((tech, index) => (
              <li key={tech.name} data-active={tech.name === currentTech}>
                <button
                  type="button"
                  aria-label={`click to navigate to ${tech.name}`}
                  onClick={() => {
                    if (currentTech === tech.name) return
                    setNextTech(tech.name)
                    setTechSwitch(true)
                  }}
                >
                  {index + 1}
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
