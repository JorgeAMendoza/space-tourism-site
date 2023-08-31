import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { barlow } from './font'

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
  return (
    <html lang="en" className={barlow.className}>
      <body>
        <header>
          <NavBar />
        </header>
        {children}
      </body>
    </html>
  )
}
