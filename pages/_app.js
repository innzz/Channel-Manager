import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './navbar';
import {SSRProvider} from '@react-aria/ssr'; 

function MyApp({ Component, pageProps }) {
  return(
  <>
    <SSRProvider>
    {/* <NavBar /> */}
    <Component {...pageProps}/>
    </SSRProvider>
  </>
  )
}

export default MyApp
