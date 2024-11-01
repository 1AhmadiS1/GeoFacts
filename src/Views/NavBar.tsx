import { FaMoon } from 'react-icons/fa';
import logo from "../../35b9df7afb6c4d6fb9ba5f88a405eda5.png"
type darkmodeprops={
  dark:boolean;
  darkmode:()=>void;
}

function NavBar({dark,darkmode}:darkmodeprops) {
 
  return (
    <nav className={`h-[100px] p-[2rem] justify-between text-2xl shadow-xl flex items-center ${dark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
    <h1 className='font-medium flex'><img src={logo} className='md:w-10 md:h-full w-6  md:my-0 my-3 ' alt="" /><p className='mx-2 my-2'>Where in the world?</p></h1>
            <button  onClick={darkmode} className='flex  font-light p-2'>

            <FaMoon  className={`${dark?"text-white":"text-gray-900"} text-xl`} />
  <p className='text-sm mx-2'>Dark mode</p>
            </button>

    </nav>
  )
}

export default NavBar
