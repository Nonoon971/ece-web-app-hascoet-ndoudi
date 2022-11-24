import "../styles/global.css";
import {ContextProvider} from '../components/UserContext'

function MyApp({Component, pageProps}) {
    return(
        <ContextProvider>
            <Component {...pageProps}/>
        </ContextProvider>
    )
}
export default MyApp;