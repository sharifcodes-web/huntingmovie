
import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet}from 'react-router'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
            <main className="container container-lg page flex-1">
            <Outlet/>
            </main>
        <Footer/>
    </div>
  )
}
 