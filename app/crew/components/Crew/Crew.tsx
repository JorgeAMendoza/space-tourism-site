import { CrewMember } from '@/types/api'
import { ReactNode } from 'react'
import Image from 'next/image'

interface CrewProps {
  data: CrewMember
  children: ReactNode
}

const Crew = ({ data, children }: CrewProps) => {
  return (
    <div>
      {children}
      <h2>{data.name}</h2>
      <p>{data.role}</p>
      <p>{data.bio}</p>
      <Image
        src={data.images.webp}
        alt={`image of ${data.name}`}
        width={177}
        height={222}
      />
    </div>
  )
}

export default Crew
