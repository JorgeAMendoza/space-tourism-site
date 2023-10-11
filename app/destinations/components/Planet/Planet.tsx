import Image from 'next/image'
import { ReactNode } from 'react'
import { Destination } from '@/types/api'
import style from './planet.module.css'

type PlanetProps = {
  data: Destination
  children: ReactNode
  planetSwitch: boolean
  showNextPlanet: () => void
}

const Planet = ({
  data,
  children,
  planetSwitch,
  showNextPlanet,
}: PlanetProps) => {
  return (
    <div
      className={style.planet}
      onAnimationEnd={() => {
        if (planetSwitch === false) return
        showNextPlanet()
      }}
    >
      <Image
        src={data.images.webp}
        width={170}
        height={170}
        alt={`image of the destination ${data.name}`}
        priority={true}
        className={style.planetImage}
        data-switch={planetSwitch}
      />
      <div>
        {' '}
        <div className={style.planetNav}>{children}</div>
        <div className={style.planetDescription} data-switch={planetSwitch}>
          <h2 className={`${style.planetName}`}>{data.name}</h2>
          <p className={`${style.planetText}`}>{data.description}</p>
        </div>
        <div className={style.planetStats} data-switch={planetSwitch}>
          <div className={style.stat}>
            <p>avg. distance</p>
            <p>{data.distance}</p>
          </div>

          <div className={style.stat}>
            <p>est. travel time</p>
            <p>{data.travel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Planet
