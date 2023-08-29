'use client'

import { Destination } from '@/types/api'
import { useEffect, useMemo, useState } from 'react'
import Planet from '../Planet/Planet'

interface PlanetSliderProps {
  destinations: Destination[]
}

const PlanetSlider = ({ destinations }: PlanetSliderProps) => {
  const [destination, setDestination] = useState<null | string>(null)

  useEffect(() => {
    setDestination(destinations[0]['name'])
  }, [destinations])

  // variable for the current destination!
  const destinationData = useMemo(() => {
    if (destination === null) return null
    const targetDestination = destinations.find(
      (dest) => dest.name === destination
    )
    if (destination === undefined) return null

    return targetDestination
  }, [destination, destinations])

  if (destinationData === null || destinationData === undefined) return null

  return (
    <div>
      <Planet data={destinationData}>
        <nav>
          <ul>
            {destinations.map((dest) => (
              <li key={dest.name}>
                <button type="button" onClick={() => setDestination(dest.name)}>
                  {dest.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Planet>
    </div>
  )
}

export default PlanetSlider
