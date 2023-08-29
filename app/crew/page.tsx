import { fetchCrewData } from '@/services/api/crew'
import CrewSlider from './components/CrewSlider/CrewSlider'

function getData() {
  const crew = fetchCrewData()
  return crew
}

const CrewPage = () => {
  const data = getData()
  return (
    <main>
      <h1>
        <span>02</span> meet your crew
      </h1>

      <CrewSlider crew={data} />
    </main>
  )
}

export default CrewPage
