import { useContext } from 'react'
import { useRouter } from 'next/router'
import UserContext from './UserContext'

export default function LoggedIn(){
  const router = useRouter()
  const {user, avatar, logout} = useContext(UserContext)
  function onClick() {
    if (user)
      router.push('/profile')
    else
      router.push('/login')
  }

  return (
    <button
      className="flex gap-2 [&_svg]:h-6 [&_svg]:w-6"
      onClick={onClick}
    >
      {user ?
        <>
          <img className='rounded-full w-6 h-6 sm:w-8 sm:h-8' src={avatar(user.email)} height={35} width={35} />
          {user.user_metadata.preferred_username}
        </>
        :
        <>
          Login
        </>
      }
    </button>
  )
}