import './globals.css'
 import Theme from '@/app/theme/theme'
export default function MyApp({ Component, pageProps }) {
  return( 
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}