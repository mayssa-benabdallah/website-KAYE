import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KAYE - Tech Stack Overview: Full Stack Technologies',
  description: 'Discover the technologies that empower my full stack projects. Get insights into my tech stack choices, ranging from foundational languages to cutting-edge frameworks and tools.',
  openGraph: {
    title: 'KAYE - Tech Stack Overview: Full Stack Technologies',
    description: 'Discover the technologies that empower my full stack projects. Get insights into my tech stack choices, ranging from foundational languages to cutting-edge frameworks and tools.',
    url: '/tech-stack/',
    siteName: 'KAYE',
    images: [
      {
        url: 'myimage.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_Gb',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KAYE - Tech Stack Overview: Full Stack Technologies',
    description: 'Discover the technologies that empower my full stack projects. Get insights into my tech stack choices, ranging from foundational languages to cutting-edge frameworks and tools.',
    creator: '@cwaitt_dev',
    images: 'image.jpg',
  },
}

export default function TechStacksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children;
}
