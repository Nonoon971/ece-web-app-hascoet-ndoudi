export const  Navbar = () => {
  return (
    <nav className='bg-blue-500 text-center p-5 w-full text-lg mb-5'>

          <a href="/" className="inline-flex shadow-lg float-left lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-red-800 hover:text-white">Accueil</a>
          <a href="/about" className="inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">About</a>

          <a href="/contacts" className="inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">Contacts</a>

          <a href="/posts" className="inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white">Articles</a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="inline-flex shadow-lg lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-blue-800 hover:text-white"
          >Deploy</a>

          <a href="/login" className="inline-flex shadow-lg float-right lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-800 hover:text-white">Login</a>
      </nav>
  );
}