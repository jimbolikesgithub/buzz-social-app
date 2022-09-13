import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'

// Imports
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

// components
import Feed from '../components/Feed/Feed'
import Sidebar from '../components/Sidebar/Sidebar'
import Widgets from '../components/Widgets/Widgets'
import { Buzz } from '../typings'
import { fetchBuzz } from '../utils/fetchBuzz'

interface Props {
  buzz: Buzz[]
}

const Home = ({ buzz }: Props) => {
  // console.log(buzz)

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Social Media App</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Toaster/>

      <main className='grid grid-cols-9'>
        {/* Sidebar */}
        <Sidebar/>

        {/* Feed */}
        <Feed buzz={buzz} />

        {/* Widgets */}
        <Widgets />

      </main>

    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {
  const buzz = await fetchBuzz();

  return {
    props: {
      buzz,
    }
  }
}