// Layout
import Header from '@layouts/Header'
import Footer from '@layouts/Footer'

const Layout = (props) => {
  return (
    <main className="bg-cs-primary text-white leading-tight">
      <Header />
      {props.children}
      <Footer />
    </main>
  )
}

export default Layout