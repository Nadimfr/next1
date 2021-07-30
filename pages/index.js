import Head from 'next/head'
import Account from '../components/Account'
import First from '../components/First'
import Header from '../components/Header'
import Resume from '../components/Resume'

export default function Home() {
  return (
    <div className=" bg-gray-800">
      <Head>
        <title>Nadim.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      < Header />

      

      {/* COntainer */}
      < First />

      < Resume />

      < Account />

    </div>
  )
}
