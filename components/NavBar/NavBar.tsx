'use client'
import Image from 'next/image'
import logo from '@/public/images/icons/logo.svg'
import Link from 'next/link'
import menuIcon from '@/public/images/icons/icon-hamburger.svg'
import closeIcon from '@/public/images/icons/icon-close.svg'
import style from './navbar.module.css'
import { barlowCondensed } from '@/app/font'
import { useState } from 'react'

const NavBar = () => {
  const [showNav, setShowNav] = useState(false)

  // use effect to set to false when we go to a bigger screen

  // use effect to apply overflow class depending on showNav

  return (
    <div className={style.navbar}>
      <Link href="/" aria-label="link to homepage">
        <Image
          src={logo as string}
          width={40}
          height={40}
          alt="space tourism logo"
        />
      </Link>

      <nav
        aria-label="navigation for space tourism website"
        aria-hidden={showNav ? 'false' : 'true'}
        id="nav-menu"
      >
        <button
          type="button"
          aria-label="click to close the nav menu"
          onClick={() => setShowNav(false)}
          aria-controls="nav-menu"
        >
          <Image src={closeIcon as string} alt="" />
        </button>
        <ul className={barlowCondensed.className}>
          <li>
            <Link href="/">
              <span>00</span> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link href="/destinations">
              <span>01</span> <span>Destination</span>
            </Link>
          </li>
          <li>
            <Link href="/crew">
              <span>02</span> <span>Crew</span>
            </Link>
          </li>
          <li>
            <Link href="technology">
              <span>03</span> <span>Technology</span>
            </Link>
          </li>
        </ul>
      </nav>

      <button
        aria-label="click to open the menu"
        type="button"
        aria-controls="nav-menu"
        onClick={() => setShowNav(true)}
        aria-hidden={showNav ? 'true' : 'false'}
        className={style.hamburgerMenu}
      >
        <Image src={menuIcon as string} alt="menu icon" />
      </button>
    </div>
  )
}

export default NavBar
