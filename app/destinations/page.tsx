// grab data for destination

import { fetchDestinationData } from "@/services/api/destination"
import PlanetSlider from "./components/PlanetSlider/PlanetSlider"

// pass into slider so it can render the navigator and content. 
function getData() {
  const dests = fetchDestinationData()
  return dests
}


const DestinationsPage = () => {
  const data = getData()
  return (
    <section>
      <h1>
        <span>01</span> pick your destination
      </h1>

      <PlanetSlider destinations={data} />
    </section>
  )
}

export default DestinationsPage
