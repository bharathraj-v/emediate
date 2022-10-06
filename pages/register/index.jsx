import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Register from '../../components/Register'
import Footer from '../../components/Footer'

export default function RegisterPage() {
  return (
    <div className='fixed  Montserrat bg-hero-pattern  h-screen bg w-screen overflow-scroll'>
      <Head>
        <title>E-Mediate</title>
        <meta name="description" content="Data Storage for Arbitration and Mediation Documents" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Register />
      <Footer />
      </div>
  )
}