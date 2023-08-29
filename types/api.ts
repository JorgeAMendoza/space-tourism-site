export interface Destination {
  name: string
  images: {
    png: string
    webp: string
  }
  description: string
  distance: string
  travel: string
}

export interface CrewMember {
  name: string
  images: {
    png: string
    webp: string
  }
  role: string
  bio: string
}
