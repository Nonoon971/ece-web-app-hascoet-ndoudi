import {useContext} from 'react';
import Context from './UserContext';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../images/accueil.png'


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
    <nav className='bg-orange-500 text-center p-5 w-full text-lg mb-5'>

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
            <a className="bg-black inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">About</a>
        </Link>

        <Link href="/contacts"> 
            <a className=" bg-black inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">Contacts</a>
        </Link>

        <Link href="/posts">
            <a className=" bg-black inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">Articles</a>
        </Link>

        <Link
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
            <a className="bg-black inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">Deploy</a>
        </Link>

          <div className="bg-black inline-flex shadow-lg float-right lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-800 hover:text-white">
            {user ? <LogIn />: <LogOut />}
          </div>
          <Link href="/signup">
            <a className=" bg-black float-right mr-2 inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">Sign up</a>
        </Link>

      </nav>
  );
}