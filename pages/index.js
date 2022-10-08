import Head from 'next/head'
import Navbar from '../components/Navbar'
import SearchInterface from '../components/SearchInterface'
import Footer from '../components/Footer'
import Search from '../components/Search'

export default function Home() {
  return (
    <div className='fixed bg-hero-pattern font-Montserrat top-0 h-screen bg w-screen overflow-scroll'>
      <Head>
        <title>E-Mediate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Search />
      <Footer />

      </div>
  )
}