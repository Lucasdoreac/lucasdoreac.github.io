import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lucas Dórea | Sustainable Tech Developer',
  description: 'Environmental Manager turned Computer Science enthusiast, creating eco-conscious technology solutions.',
  keywords: ['sustainable tech', 'green computing', 'web development', 'environmental management'],
  authors: [{ name: 'Lucas Dórea Cardoso' }],
  openGraph: {
    title: 'Lucas Dórea | Sustainable Tech Developer',
    description: 'Environmental Manager turned Computer Science enthusiast, creating eco-conscious technology solutions.',
    url: 'https://lucasdoreac.github.io',
    siteName: 'Lucas Dórea Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lucas Dórea - Sustainable Tech Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-primary text-primary dark:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}