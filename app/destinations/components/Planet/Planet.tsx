import Image from 'next/image'
import { ReactNode } from 'react'
import { Destination } from '@/types/api'

type PlanetProps = Destination & { children: ReactNode }

const Planet = ({
  name,
  description,
  images,
  distance,
  travel,
  children,
}: PlanetProps) => {
  return (
    <div>
      {children}
      <Image
        src={images.webp}
        width={445}
        height={445}
        alt={`image of the destination ${name}`}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <div>
        <p>{distance}</p>
        <p>{travel}</p>
      </div>
    </div>
  )
}

export default Planet
