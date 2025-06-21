import { useEffect, useState } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import './NavBar.css'
import  {Sun,Moon} from 'lucide-react'
const NavBar = ({isDark,setIsDark}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const handleClick = ( )=>{
    setIsDark(!isDark)
  }
  
  return (
    <div>
    <div className='m-[25px] max-w-[100vw]' >
          <ul className=' max-w-[80vw] flex items-center justify-between  rounded-full m-[auto] px-4 py-2 #F7F8FC'> 
            
            <span className='font-ClashDisplay'>AR</span>
            <div className='flex flex-row justify-center align-center space-x-6'>
            <li className={currentPath=='/' ? 'active' :''} onClick={()=>navigate('/')}>Home</li>
            <li className={currentPath=='/about' ? 'active' :''} onClick={()=>navigate('/about')}>About</li>
            <li className={currentPath=='/contact' ? 'active' :''} onClick={()=>navigate('/contact')}>Contact</li>
            </div>
            <span className='toogle' data-dark={isDark}  onClick={handleClick}>{isDark ? <Moon/>:<Sun/>}</span>
          </ul>
        </div>
      </div>
    )
}

export default NavBar
