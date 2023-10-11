import Link from 'next/link'
import style from './home.module.css'

export default function Home() {
  return (
    <main className={style.home}>
      <div className={style.homeContent}>
        <h1>
          so, you want to travel to <span>space</span>
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className={style.explore}>
        <Link href="/destinations">explore</Link>
      </div>
    </main>
  )
}
