'use client'

import NavBar from '@/components/NavBar/NavBar'
import type { Metadata } from 'next'
import { barlow } from './font'
import './globals.css'
import style from './layout.module.css'
import { usePathname } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Space Tourism',
  description:
    'Space tourism website that contains information on the possible planets to tour, along with the crew and technology needed to make it happen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <html lang="en" className={barlow.className}>
      <body className={style.layoutBody} data-path={pathname}>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
