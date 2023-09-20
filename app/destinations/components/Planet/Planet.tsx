import Image from 'next/image'
import { ReactNode } from 'react'
import { Destination } from '@/types/api'
import style from './planet.module.css'
import { barlowCondensed, bellefair } from '@/app/font'

type PlanetProps = {
  data: Destination
  children: ReactNode
}

const Planet = ({ data, children }: PlanetProps) => {
  return (
    <div className={style.planet}>
      <div className={style.planetNav}>{children}</div>

      <Image
        src={data.images.webp}
        width={170}
        height={170}
        alt={`image of the destination ${data.name}`}
        className={style.planetImage}
        priority={true}
      />
      <div className={style.planetDescription}>
        <h2 className={`${bellefair.className} ${style.planetName}`}>
          {data.name}
        </h2>
        <p className={`${style.planetText}`}>{data.description}</p>
      </div>
      <div className={style.planetStats}>
        <div className={style.stat}>
          <p className={barlowCondensed.className}>avg. distance</p>
          <p className={bellefair.className}>{data.distance}</p>
        </div>

        <div className={style.stat}>
          <p className={barlowCondensed.className}>est. travel time</p>
          <p className={bellefair.className}>{data.travel}</p>
        </div>
      </div>
    </div>
  )
}

export default Planet
