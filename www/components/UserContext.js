import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import {createContext, useState, useEffect} from 'react'

const Context = createContext()

export default Context

export function ContextProvider ({
    children
}) {
    const supabaseClient = useSupabaseClient()
    const supabaseUser = useUser()
    const md5 = require('md5');
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(function() {
        if (supabaseUser) {
            setUser(supabaseUser)
            setLoading(false)
        }
    }, [supabaseUser])
    return(
        <Context.Provider
            value={{
                user: user,
                avatar: function (email) {
                    // Trim leading and trailing whitespace from
                    // an email address and force all characters
                    // to lower case
                    const address = String(email).trim().toLowerCase();

                    // Create an MD5 hash of the final string
                    const hash = md5(address);

                    // Grab the actual image URL
                    return `https://www.gravatar.com/avatar/${hash}/?d=https://e7.pngegg.com/pngimages/59/644/png-clipart-silhouette-avatar-line-art-silhouette-animals-vexel.png`;
                  },
                logout: async function() {
                    await supabaseClient.auth.signOut()
                    setUser(null)
                }
            }}
        >{children}
    </Context.Provider>
    )
}