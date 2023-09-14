import Link from 'next/link'
import style from './home.module.css'
import { barlow, barlowCondensed, bellefair } from './font'

export default function Home() {
  return (
    <main className={style.home}>
      <div className={style.homeContent}>
        <h1 className={barlowCondensed.className}>
          so, you want to travel to{' '}
          <span className={bellefair.className}>space</span>
        </h1>
        <p className={barlow.className}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>

      <div className={`${bellefair.className} ${style.explore}`}>
        <Link href="/destinations">explore</Link>
      </div>
    </main>
  )
}
