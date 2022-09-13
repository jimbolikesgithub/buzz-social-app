import type { NextPage } from 'next'
import Head from 'next/head'

// components
import Feed from '../components/Feed/Feed'
import Sidebar from '../components/Sidebar/Sidebar'
import Widgets from '../components/Widgets/Widgets'

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Social Media App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className='grid grid-cols-9'>
        {/* Sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets />

      </main>

    </div>
  )
}

export default Home

export const getServerSideProps:Ge