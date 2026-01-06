import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Footer } from '@/components/layout/footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://fitool.vercel.app/'),
  title: {
    default: 'FiTool',
    template: '%s | FiTool',
  },
  description:
    'FiTool es el gimnasio de más alto rendimiento con planes guiados, equipamiento profesional y calculadoras para optimizar entrenamiento, nutrición y recuperación.',
  keywords: [
    'gimnasio',
    'fitness',
    'entrenamiento',
    'nutrición',
    'salud',
    'calculadoras fitness',
    'planes de entrenamiento',
  ],
  authors: [
    { name: '(Mr Redu) - Eduardo R.', url: 'https://github.com/MrRedu' },
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FiTool | Gimnasio de alto rendimiento',
    description:
      'Entrena en FiTool con planes personalizados, equipo pro y calculadoras para macronutrientes y gasto energético. Lleva tu rendimiento al siguiente nivel con un gimnasio pensado para progresar.',
    url: '/',
    siteName: 'FiTool',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/cover-page.webp',
        width: 800,
        height: 600,
        alt: 'FiTool | Gimnasio de alto rendimiento',
      },
      {
        url: '/cover-page.webp',
        width: 1800,
        height: 1600,
        alt: 'FiTool | Gimnasio de alto rendimiento',
      },
    ],
  },
  category: 'health & fitness',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
