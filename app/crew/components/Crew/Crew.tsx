import { CrewMember } from '@/types/api'
import { ReactNode } from 'react'
import Image from 'next/image'
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
        <Image
          src={data.images.webp}
          alt={`image of ${data.name}`}
          width={165}
          height={222}
        />
      </div>
    </div>
  )
}

export default Crew
