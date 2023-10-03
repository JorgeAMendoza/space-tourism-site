'use client'

import { CrewMember } from '@/types/api'
import { useMemo, useState } from 'react'
import Crew from '../Crew/Crew'
import style from './crew-slider.module.css'

interface CrewSliderProps {
  crew: CrewMember[]
}

const CrewSlider = ({ crew }: CrewSliderProps) => {
  const [currentMember, setCurrentMember] = useState(crew[0].name)

  const crewMemberData = useMemo(() => {
    const targetMember = crew.find((member) => member.name === currentMember)
    if (targetMember === undefined) return null

    return targetMember
  }, [currentMember, crew])

  if (crewMemberData === null) return null

  return (
    <div>
      <Crew data={crewMemberData}>
        <nav aria-label="navigation for crew members">
          <ul className={style.slider}>
            {crew.map((member) => (
              <li key={member.name}>
                <button
                  type="button"
                  onClick={() => {
                    setCurrentMember(member.name)
                  }}
                  aria-label={`button to navigate to crew member ${member.name}`}
                  data-active={member.name === currentMember ? 'true' : 'false'}
                ></button>
              </li>
            ))}
          </ul>
        </nav>
      </Crew>
    </div>
  )
}

export default CrewSlider
