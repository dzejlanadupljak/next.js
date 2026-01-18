import Link from 'next/link'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <div className="headerContainer">
            <h1 className="logo">MyNextBlog</h1>
            <nav className="navLinks">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/authors">Authors</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="siteFooter">
          <p>© 2026 MyNextBlog. Sva prava zadržana.</p>
          <p>
            Follow us:
            <a href="#">Twitter</a> | 
            <a href="#">Instagram</a> | 
            <a href="#">Facebook</a>
          </p>
        </footer>
      </body>
    </html>
  )
}
