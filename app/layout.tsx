import Link from 'next/link'
import "./globals.css"
export default function RootLayout
({children}: {children: React.ReactNode}) {
  return(
   <html lang="en">
<body>
 <div>
  <nav>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
  </nav>
 </div>
 <main>{children}</main>
 <footer>
  <p>Sva prava zadrzana</p></footer>
</body>
   </html>
  )}