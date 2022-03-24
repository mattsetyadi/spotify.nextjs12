import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import Sidebar from '../components/molecules/Sidebar'

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-hidden bg-black">
      <Head>
        <title>My Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Sidebar />
      </main>
    </div>
  )
}

export default Home
