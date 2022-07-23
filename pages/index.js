import Head from 'next/head'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Next Shop</title>
        <meta name="description" content="nextshop.com" />
        <link rel="icon" href="https://cdn-icons.flaticon.com/png/512/1390/premium/1390737.png" />
      </Head>

      <main>

        <div className="h-48 w-48 bg-red-600 flex justify-center items-center">
          hello nextshop
        </div>
       
      </main>

   
    </div>
  )
}
