import { fetchTechnologyData } from '@/services/api/technology'
import TechSlider from './components/TechSlider/TechSlider'

const getData = () => {
  const data = fetchTechnologyData()
  return data
}

const TechnologyPage = () => {
  const data = getData()
  return (
    <main>
      <h1>
        <span>03</span> space launch 101
      </h1>

      <section>
        <TechSlider data={data} />
      </section>
    </main>
  )
}

export default TechnologyPage
