import { fetchTechnologyData } from '@/services/api/technology'
import TechSlider from './components/TechSlider/TechSlider'
import style from './technology.module.css'

const getData = () => {
  const data = fetchTechnologyData()
  return data
}

const TechnologyPage = () => {
  const data = getData()
  return (
    <main className={style.technology}>
      <div className={style.infoContainer}>
        <h1 className={style.pageTitle}>
          <p>03</p> space launch 101
        </h1>

        <section>
          <TechSlider data={data} />
        </section>
      </div>
    </main>
  )
}

export default TechnologyPage
