import { CrewMember } from '@/types/api'
import { ReactNode } from 'react'
import style from './crew.module.css'

interface CrewProps {
  data: CrewMember
  children: ReactNode
  crewSwitch: boolean
  showNextCrewMember: () => void
}

const Crew = ({
  data,
  children,
  crewSwitch,
  showNextCrewMember,
}: CrewProps) => {
  return (
    <div
      className={style.crew}
      onAnimationEnd={() => {
        if (crewSwitch === false) return
        showNextCrewMember()
      }}
    >
      <div className={style.crewInfo}>
        <div className={style.nav}>{children}</div>
        <h2 data-switch={crewSwitch}>
          <p>{data.role}</p>
          {data.name}
        </h2>
        <p data-name={data.name} data-switch={crewSwitch}>
          {data.bio}
        </p>
      </div>
      <div className={style.crewImage} data-switch={crewSwitch}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.images.webp}
          alt={`image of ${data.name}`}
          loading="lazy"
          data-switch={crewSwitch}
        />
      </div>
    </div>
  )
}

export default Crew
