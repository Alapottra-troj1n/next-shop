import Head from 'next/head'
import HeroSection from '../components/HeroSection'




export default function Home() {
  return (
    <div >
      <Head>
        <title>Next Shop</title>
        <meta name="description" content="nextshop.com" />
        <link rel="icon" href="https://cdn-icons.flaticon.com/png/512/1390/premium/1390737.png" />
      </Head>

      <main>

      <HeroSection/>
       
      </main>

   
    </div>
  )
}
