import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'João V. B. Rodrigues — Desenvolvedor Full-Stack Freelancer',
  description:
    'Portfólio de João V. B. Rodrigues, desenvolvedor freelancer especializado em WordPress, PHP, Laravel, React e Next.js. 2+ anos de experiência profissional.',
  keywords: [
    'desenvolvedor freelancer',
    'WordPress',
    'PHP',
    'Laravel',
    'React',
    'Next.js',
    'desenvolvimento web',
    'Brasil',
  ],
  authors: [{ name: 'João V. B. Rodrigues' }],
  creator: 'João V. B. Rodrigues',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'João V. B. Rodrigues — Desenvolvedor Full-Stack Freelancer',
    description:
      'Portfólio de João V. B. Rodrigues, desenvolvedor freelancer especializado em WordPress, PHP, Laravel, React e Next.js.',
    siteName: 'João V. B. Rodrigues',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'João V. B. Rodrigues — Desenvolvedor Full-Stack Freelancer',
    description:
      'Portfólio de João V. B. Rodrigues, desenvolvedor freelancer especializado em WordPress, PHP, Laravel, React e Next.js.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scanlines">
      <body>{children}</body>
    </html>
  )
}
