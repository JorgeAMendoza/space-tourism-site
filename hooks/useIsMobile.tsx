'use client'

import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function detectWindowResize() {
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
    }
    window.addEventListener('resize', detectWindowResize)

    return () => window.removeEventListener('resize', detectWindowResize)
  }, [])

  return isMobile
}

export default useIsMobile
