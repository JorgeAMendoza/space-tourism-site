'use client'

import NavBar from '@/components/NavBar/NavBar'
import '@fontsource/barlow'
import '@fontsource/bellefair'
import '@fontsource/barlow-condensed/400.css'
import '@fontsource/barlow-condensed/700.css'
import { usePathname } from 'next/navigation'
import './globals.css'
import style from './layout.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={style.layoutBody} data-path={pathname}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
