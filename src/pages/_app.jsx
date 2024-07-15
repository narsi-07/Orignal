import 'styles/globals.css'
import { Provider as ConnectionProvider } from 'context/connect'
import { useRouter } from 'next/router'
import Sidebar from 'components/Sidebar';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <ConnectionProvider>
    <Head>
   
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {router.pathname.includes('rooms') ? (
      <div className="flex">
        <Sidebar />
        <div className="overflow-y-auto w-full">
          <Component {...pageProps} />
        </div>
      </div>
    ) : <Component {...pageProps} />}
  </ConnectionProvider>
}

export default MyApp;
