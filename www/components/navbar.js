import {useContext} from 'react';
import Context from './UserContext';
import Link from 'next/link';
import Login from './Login'

const LogOut = () => {
    const {login} = useContext(Context)
    return (
        <div>
            <button onClick={()=>{ login('guest') }}>Login</button>
        </div>
    )
}

const LogIn = () => {
    const {user, logout} = useContext(Context)
    return (
        <div>
            Welcom {user}!
            <div>
                <button onClick={()=>{ logout() }}>Logout</button>
            </div>
        </div>
    )
}

export const  Navbar = () => {
    const {user} = useContext(Context)
  return (
    <nav className='bg-blue-500 text-center p-5 w-full text-lg mb-5'>

        <Link href="/">
            <a className="inline-flex shadow-lg float-left lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-800 hover:text-white">Accueil</a>
        </Link>

        <Link href="/about">
            <a className="inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">About</a>
        </Link>

        <Link href="/contacts"> 
            <a className="inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">Contacts</a>
        </Link>

        <Link href="/posts">
            <a className="inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">Articles</a>
        </Link>

        <Link
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <a className="inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">Deploy</a>
        </Link>

        <a className="inline-flex shadow-lg float-right lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white"><Login /></a>

      </nav>
  );
}