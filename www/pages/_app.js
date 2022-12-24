import "../styles/global.css";
import { useState } from 'react'
import { ContextProvider } from '../components/UserContext'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <SessionContextProvider
                supabaseClient={supabaseClient}
                initialSession={pageProps.initialSession}
            >
                <ContextProvider>
                    <Component {...pageProps} />
                </ContextProvider>
            </SessionContextProvider>
        </ThemeProvider>
    )
}
export default MyApp;