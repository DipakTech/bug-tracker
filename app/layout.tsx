import '@radix-ui/themes/styles.css'
import './theme-config.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar'
import { Container, Theme, ThemePanel } from '@radix-ui/themes'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Issue Tracker',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <SessionProvider>
          <Theme
            appearance='light'
            accentColor='violet'
            grayColor='sand'
            panelBackground='solid'
            scaling='110%'
          >
            <NavBar />
            <main className='p-5'>
              <Container>{children}</Container>
            </main>
            {/* <ThemePanel /> */}
          </Theme>
        </SessionProvider>
      </body>
    </html>
  )
}
