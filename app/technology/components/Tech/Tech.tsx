import type { Technology } from '@/types/api'
import Image from 'next/image'
import { ReactNode } from 'react'
import style from './tech.module.css'

interface TechProps {
  data: Technology
  children: ReactNode
  techSwitch: boolean
  showNextTech: () => void
}

const Tech = ({ data, children, techSwitch, showNextTech }: TechProps) => {
  return (
    <div
      className={style.tech}
      onAnimationEnd={() => {
        if (techSwitch === false) return
        showNextTech()
      }}
    >
      <div className={style.nav}>{children}</div>
      <div className={style.techInfo} data-switch={techSwitch}>
        <h2 className={style.title}>
          <p>
            the terminology<span>...</span>
          </p>
          {data.name}
        </h2>
        <p className={style.description}>{data.description}</p>
      </div>

      <div className={style.image} data-switch={techSwitch}>
        <Image
          src={data.images.landscape}
          alt={data.name}
          width={375}
          height={170}
          className={style.mobileImage}
        />

        <Image
          src={data.images.portrait}
          alt={data.name}
          width={515}
          height={527}
          className={style.portraitImage}
        />
      </div>
    </div>
  )
}

export default Tech
