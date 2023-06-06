import App from '../components/app/App'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
