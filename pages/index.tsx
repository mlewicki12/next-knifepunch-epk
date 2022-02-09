
import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/header'

const Home: NextPage = () => {
  return (
    <div className='w-full h-full flex justify-center'>
      <Head>
        <title>GammaGIRL - A Cult of Flesh and Blood</title>
        <meta name="description" content="Knifepunch Records EPK - GammaGIRL" />
        <link rel="icon" href="/knifepunch.png" />
      </Head>

      <main className='w-1/2 h-full'>
        <Header />

        { /* profile */ }

        { /* soundcloud */ }
      </main>
    </div>
  )
}

export default Home
