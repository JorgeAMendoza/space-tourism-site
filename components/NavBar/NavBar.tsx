'use client'
import Image from 'next/image'
import logo from '@/public/images/icons/logo.svg'
import Link from 'next/link'
import menuIcon from '@/public/images/icons/icon-hamburger.svg'
const NavBar = () => {
  return (
    <div>
      <Image
        src={logo as string}
        width={40}
        height={40}
        alt="space tourism logo"
      />

      <div>
        <nav>
          <ul>
            <li>
              <Link href="/">00 Home</Link>
            </li>
            <li>
              <Link href="/destinations">01 Destinations</Link>
            </li>
            <li>
              <Link href="/crew">02 Crew</Link>
            </li>
            <li>
              <Link href="technology">03Technology</Link>
            </li>
          </ul>
        </nav>

        <button aria-label="click to toggle the menu" type="button">
          <Image src={menuIcon as string} alt="menu icon" />
        </button>
      </div>
    </div>
  )
}

export default NavBar
