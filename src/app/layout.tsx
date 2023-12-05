import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import './globals.css'
import { Footer } from './components/footer'



export const metadata: Metadata = {
  title: 'Chhayly Sreng',
  description: 'Personal website of Chhayly Sreng',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="mx-auto max-w-screen-md p-11">
      <Navbar />
        {children}
      <Footer/>
      </body>
    </html>
  )
}
