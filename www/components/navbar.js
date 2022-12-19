import {useContext} from 'react';
import Context from './UserContext';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/accueil.png'
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
        <nav className='bg-orange-500 fixed z-30 text-center p-2 w-full text-lg border-b-2 border-black'>

            <Link href="/">
                <a className="float-left lg:w-auto items-center justify-center">
                    <Image
                        src={logo}
                        alt="Picture of the logo"
                        width={(50)}
                        height={50}
                    />
                </a>
            </Link>
            
            <Link href="/about">
                <a className="bg-orange-500 inline-flex mx-6 shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white">About</a>
            </Link>
    
            <Link href="/contacts"> 
                <a className=" bg-orange-500 inline-flex mx-6 shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white">Contacts</a>
            </Link>
    
            <Link href="/posts">
                <a className=" bg-orange-500 inline-flex mx-6 shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white">Articles</a>
            </Link>
    
            <a className="bg-orange-500 inline-flex shadow-lg float-right lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white"><Login /></a>
    
        </nav>
    );
}