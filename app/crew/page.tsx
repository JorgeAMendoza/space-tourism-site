import { fetchCrewData } from '@/services/api/crew'
import CrewSlider from './components/CrewSlider/CrewSlider'
import style from './crew.module.css'
import { barlowCondensed } from '../font'

function getData() {
  const crew = fetchCrewData()
  return crew
}

const CrewPage = () => {
  const data = getData()
  return (
    <main className={style.crew}>
      <h1 className={`${barlowCondensed.className} ${style.pageTitle}`}>
        <p>02</p> meet your crew
      </h1>

      <CrewSlider crew={data} />
    </main>
  )
}

export default CrewPage
