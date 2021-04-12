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
      <ToastContainer position="bottom-center" closeButton={false} autoClose={2000} />
    </SWRConfig>
  )
}

export default MyApp
