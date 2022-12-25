import {useContext, useState, useEffect} from 'react';
import Context from './UserContext';
import Link from 'next/link'
import {useTheme} from "next-themes";
import Image from 'next/image';
import logo from '../content/images/accueil.png'
import Login from './Login'
import { MoonIcon,SunIcon } from '@heroicons/react/20/solid'

export const  Navbar = () => {
    const {user} = useContext(Context)
    const [mounted, setMounted] = useState(false);
    const {systemTheme , theme, setTheme} = useTheme ();

    useEffect(() =>{
        setMounted(true);
      },[])

    const renderThemeChanger= () => {

        if(!mounted) return null;
        const currentTheme = theme === "system" ? systemTheme : theme ;

        if(currentTheme ==="dark"){
          return (
            <SunIcon className=" bg-orange-500 hidden mt-1 h-10 w-10 shadow-lg lg:w-auto px-3 py-2 rounded font-bold items-center justify-center hover:text-white hover:bg-black dark:text- dark:hover:bg-stone-400 dark:inline-flex float-right" role="button" onClick={() => setTheme('light')}/>
          )
        }

        else {
          return (
            <MoonIcon className=" bg-orange-500 mt-1 h-10 w-10 inline-flex shadow-lg lg:w-auto px-3 py-2 rounded font-bold items-center justify-center hover:text-white hover:bg-black dark:text-black dark:hidden float-right" role="button" onClick={() => setTheme('dark')}/>
          )
        }
     };


    return (
        <nav className='bg-orange-500 sticky z-30 top-0 text-center p-3 w-full text-lg border-b-2 border-black dark:bg-orange-700'>

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
                <a className="bg-orange-500 inline-flex mx-6 shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white dark:text-black dark:hover:bg-stone-400">About</a>
            </Link>

            <Link href="/contacts">
                <a className=" bg-orange-500 inline-flex mx-6 shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white dark:text-black dark:hover:bg-stone-400">Contacts</a>
            </Link>

            <Link href="/posts">
                <a className=" bg-orange-500 inline-flex mx-6 shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white dark:text-black dark:hover:bg-stone-400">Players</a>
            </Link>

            <a className="bg-orange-500 ml-6 inline-flex shadow-lg float-right lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-black hover:text-white dark:text-black dark:hover:bg-stone-400"><Login /></a>
            {renderThemeChanger()}
        </nav>
    );
}