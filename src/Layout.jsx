
import Header from './components/Header'
import Footer from './components/Footer'
import {Outlet}from 'react-router'

export default function Layout() {
  return (
    <>
        <Header/>
            <main className="container container-lg page ">
            <Outlet/>
            </main>
        <Footer/>
    </>
  )
}
 