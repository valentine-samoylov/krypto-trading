// Layout
import Header from '@/layouts/Header'
import Footer from '@/layouts/Footer'

const Layout = ({ children }) => {
  return (
    <main className="bg-navy text-white leading-tight">
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout
