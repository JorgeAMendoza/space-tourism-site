'use client'
import Image from 'next/image'
import logo from '@/public/images/icons/logo.svg'
import Link from 'next/link'
import menuIcon from '@/public/images/icons/icon-hamburger.svg'
import closeIcon from '@/public/images/icons/icon-close.svg'
import style from './navbar.module.css'
import { useEffect, useState } from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import { usePathname } from 'next/navigation'
import useClickOutside from '@/hooks/useClickOutside'

const NavBar = () => {
  const [showNav, setShowNav] = useState(false)
  const nav = useClickOutside(setShowNav)
  const isMobile = useIsMobile()
  const pathname = usePathname()

  useEffect(() => {
    if (isMobile) {
      setShowNav(false)
    }
  }, [isMobile])

  useEffect(() => {
    if (showNav) {
      document.body.classList.add('mobileActive')
    } else {
      document.body.classList.remove('mobileActive')
    }
  })

  return (
    <div className={style.navbar}>
      <div className={style.navContainer}>
        <Link href="/" aria-label="link to homepage">
          <Image
            src={logo as string}
            width={40}
            height={40}
            alt="space tourism logo"
            className={style.logo}
          />
        </Link>

        <button
          aria-expanded={showNav}
          aria-label="click to open the menu"
          type="button"
          aria-controls="nav-menu-mobile"
          onClick={() => setShowNav(true)}
          className={style.hamburgerMenu}
        >
          <Image src={menuIcon as string} alt="menu icon" />
        </button>

        <nav
          ref={nav}
          aria-label="navigation for space tourism website"
          aria-hidden={showNav ? 'false' : 'true'}
          id="nav-menu-mobile"
          className={style.navMenuMobile}
        >
          <button
            type="button"
            aria-label="click to close the nav menu"
            onClick={() => setShowNav(false)}
            aria-controls="nav-menu-mobile"
          >
            <Image src={closeIcon as string} alt="" />
          </button>
          <ul>
            <li data-active={pathname === '/'}>
              <Link href="/">
                <span>00</span> <span>Home</span>
              </Link>
            </li>
            <li data-active={pathname === '/destinations'}>
              <Link href="/destinations">
                <span>01</span> <span>Destination</span>
              </Link>
            </li>
            <li data-active={pathname === '/crew'}>
              <Link href="/crew">
                <span>02</span> <span>Crew</span>
              </Link>
            </li>
            <li data-active={pathname === '/technology'}>
              <Link href="technology">
                <span>03</span> <span>Technology</span>
              </Link>
            </li>
          </ul>
        </nav>

        <nav
          aria-label="navigation for space toursim website"
          id="nav-menu"
          className={style.navMenu}
        >
          <ul>
            <li data-active={pathname === '/'}>
              <Link href="/">
                <span>00</span> <span>Home</span>
              </Link>
            </li>
            <li data-active={pathname === '/destinations'}>
              <Link href="/destinations">
                <span>01</span> <span>Destination</span>
              </Link>
            </li>
            <li data-active={pathname === '/crew'}>
              <Link href="/crew">
                <span>02</span> <span>Crew</span>
              </Link>
            </li>
            <li data-active={pathname === '/technology'}>
              <Link href="technology">
                <span>03</span> <span>Technology</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default NavBar
