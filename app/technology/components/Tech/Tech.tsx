import type { Technology } from '@/types/api'
import Image from 'next/image'
import { ReactNode } from 'react'

interface TechProps {
  data: Technology
  children: ReactNode
}

const Tech = ({ data, children }: TechProps) => {
  return (
    <div>
      {children}
      <h2>{data.name}</h2>
      <Image
        src={data.images.landscape}
        alt={data.name}
        width={375}
        height={170}
      />
      <p>{data.description}</p>
    </div>
  )
}

export default Tech
