import '@radix-ui/themes/styles.css'
import './theme-config.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './NavBar'
import { Theme, ThemePanel } from '@radix-ui/themes'

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
        <Theme
          appearance='light'
          accentColor='violet'
          grayColor='sand'
          panelBackground='solid'
          scaling='110%'
        >
          <NavBar />
          <main className='p-5'>{children}</main>
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
