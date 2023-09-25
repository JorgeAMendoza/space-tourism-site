import { fetchDestinationData } from '@/services/api/destination'
import { barlowCondensed } from '../font'
import PlanetSlider from './components/PlanetSlider/PlanetSlider'
import style from './destinations.module.css'

// pass into slider so it can render the navigator and content.
function getData() {
  const dests = fetchDestinationData()
  return dests
}

const DestinationsPage = () => {
  const data = getData()
  return (
    <section className={style.destinations}>
      <h1 className={`${barlowCondensed.className} ${style.pageTitle}`}>
        <p>01</p> pick your destination
      </h1>

      <PlanetSlider destinations={data} />
    </section>
  )
}

export default DestinationsPage
