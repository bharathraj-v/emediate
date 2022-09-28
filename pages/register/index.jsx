import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Register from '../../components/Register'

export default function RegisterPage() {
  return (
    <div className='fixed  bg-gradient-to-t from-gray-300 via-white to-gray-300 top-0 h-screen bg w-screen overflow-hidden'>
      <Head>
        <title>E-Mediate</title>
        <meta name="description" content="Data Storage for Arbitration and Mediation Documents" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Register />
      </div>
  )
}