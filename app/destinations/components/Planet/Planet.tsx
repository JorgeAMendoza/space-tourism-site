import Image from 'next/image'
import { ReactNode } from 'react'
import { Destination } from '@/types/api'

type PlanetProps = {
  data: Destination,
  children: ReactNode
}

const Planet = ({
  data,
  children,
}: PlanetProps) => {
  return (
    <div>
      {children}
      <Image
        src={data.images.webp}
        width={445}
        height={445}
        alt={`image of the destination ${data.name}`}
      />
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <div>
        <p>{data.distance}</p>
        <p>{data.travel}</p>
      </div>
    </div>
  )
}

export default Planet
