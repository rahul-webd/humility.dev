import Script from 'next/script'
import App from '../components/app/App'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Script 
        defer 
        src="https://cloud.umami.is/script.js" 
        data-website-id="1b8eaf11-6d75-4b86-890f-271f11ec5d55"></Script>
      <App>
        <Component {...pageProps} />
      </App>
    </>
  )
}

export default MyApp
