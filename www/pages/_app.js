import "../styles/global.css";
import { useState } from 'react'
import {ContextProvider} from '../components/UserContext'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

function MyApp({Component, pageProps}) {
    const [supabase] = useState(() => createBrowserSupabaseClient())

    return (
        <ContextProvider>
            <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
                <Component {...pageProps} />
            </SessionContextProvider>
        </ContextProvider>
    )
}
export default MyApp;