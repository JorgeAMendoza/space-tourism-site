import { CrewMember } from '@/types/api'
import { ReactNode } from 'react'
import style from './crew.module.css'
import { bellefair } from '@/app/font'

interface CrewProps {
  data: CrewMember
  children: ReactNode
}

const Crew = ({ data, children }: CrewProps) => {
  return (
    <div className={style.crew}>
      <div className={style.crewInfo}>
        <div>{children}</div>
        <h2 className={bellefair.className}>
          <p>{data.role}</p>
          {data.name}
        </h2>
        <p>{data.bio}</p>
      </div>
      <div className={style.crewImage}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={data.images.webp}
          alt={`image of ${data.name}`}
          loading="lazy"
        />
      </div>
    </div>
  )
}

export default Crew
