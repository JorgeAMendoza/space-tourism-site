import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Space Destinations',
  description:
    'This page contains the various destinations that are available for the space tours',
}

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main>{children}</main>
}
