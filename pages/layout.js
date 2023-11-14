'use client'
import { Inter } from 'next/font/google'
import './globals.css'
<link rel="icon"  sizes="32x32" href="favicon.ico">

</link>
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
