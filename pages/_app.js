import { SWRConfig } from 'swr'
import fetch from '../lib/fetchJson'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: fetch,
        onError: (err) => {
          console.error(err)
        },
      }}
    >
      <Component {...pageProps} />
      <ToastContainer position="top-center" closeButton={false} autoClose={1500} hideProgressBar={true} />
    </SWRConfig>
  )
}

export default MyApp
