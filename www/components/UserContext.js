import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import {createContext, useState, useEffect} from 'react'

const Context = createContext()

export default Context

export function ContextProvider ({
    children
}) {
    const supabaseClient = useSupabaseClient()
    const supabaseUser = useUser()
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
                logout: async function() {
                    await supabaseClient.auth.signOut()
                    setUser(null)
                }
            }}
        >{children}
    </Context.Provider>
    )
}