import "../styles/global.css";
import { useState } from 'react'
import {ContextProvider} from '../components/UserContext'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

function MyApp({Component, pageProps}) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
        <SessionContextProvider
            supabaseClient={supabaseClient}
            initialSession={pageProps.initialSession}
        >
            <ContextProvider>
                <Component {...pageProps} />
            </ContextProvider>
        </SessionContextProvider>
    )
}
export default MyApp;