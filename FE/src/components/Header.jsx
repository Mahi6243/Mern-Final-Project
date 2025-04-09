import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import Search from './Search'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaRegCircleUser } from "react-icons/fa6";
import useMobile from '../hooks/useMobile';
import { IoCart } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { GoTriangleDown, GoTriangleUp  } from "react-icons/go";
import UserMenu from './UserMenu'
import { DisplayPriceInRupees } from '../utils/DisplayPriceInRupees';
import { useGlobalContext } from '../provider/GlobalProvider';
import DisplayCartItem from './DisplayCartItem';





const Header = () => {
  const [ isMobile ] = useMobile()
  const location = useLocation()
  const isSearchPage = location.pathname === "/search"
  const navigate = useNavigate()
  const user = useSelector((state)=> state?.user)
  const [openUserMenu,setOpenUserMenu] = useState(false)
  const cartItem = useSelector(state => state.cartItem.cart)
  const { totalPrice, totalQty} = useGlobalContext()
  const [openCartSection,setOpenCartSection] = useState(false)
 

 
 
  const redirectToLoginPage = () =>{
        navigate("/login")
  }

  const handleCloseUserMenu = () =>{
    setOpenUserMenu(false)
  }

  const handleMobileUser = () =>{
    if(!user._id){
      navigate("/login")
      return
    }

    navigate("/user")
  }

  return (
    <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 z-4 flex flex-col justify-center gap-1 bg-white'>
     {
        !(isSearchPage && isMobile ) && (
             <div className='container mx-auto flex items-center px-2 justify-between'>
          {/* Logo */}
          <div className='h-full'>
              <Link to={"/"} className='h-full flex justify-center items-center'>
                 <img
                   src={logo}
                   width={170}
                   height={60}
                   alt='logo'
                   className='hidden lg:block'
                   />
                   <img
                   src={logo}
                   width={120}
                   height={60}
                   alt='logo'
                   className='lg:hidden'
                   />
              </Link>
           </div>
            {/* Search */}
                   <div className='hidden lg:block'>
              <Search/>
                   </div>
             {/* login and my cart */}
                   <div className=''>
             {/* user icons display in only mobile version */}
                        <button className='text-neutral-600 lg:hidden' onClick={handleMobileUser}>
                            <FaRegCircleUser size={26}/>
                        </button>
                  {/* Desktop */}
                             <div className='hidden lg:flex items-center gap-10'>
                              {
                                user?._id ?(
                                    <div className='relative'>
                                        <div onClick={() =>setOpenUserMenu(preve => !preve)} className='flex select-none items-center gap-1 cursor-pointer'>
                                          <p>Account</p>
                                          {
                                            openUserMenu ? (
                                              <GoTriangleUp size={25}/>
                                            ) : (
                                              <GoTriangleDown size={25}/>
                                            )
                                          }
                                        </div>
                                        {
                                          openUserMenu && (
                                            <div className='absolute right-0 top-12'>
                                                 <div className='bg-white rounded p-4 min-w-52 lg:shadow-lg'>
                                                  <UserMenu close={handleCloseUserMenu}/>
                                                  </div>
                                            </div>
                                          )
                                        }
                                    </div>
                                ) :(
                                  <button onClick={redirectToLoginPage} className='text-lg px-2'>Login</button>
                                )
                              }
                               
                                <button onClick={() =>setOpenCartSection(true)} className='flex items-center gap-2 bg-green-900  hover:bg-teal-500 px-3 py-2 rounded text-white'>
                                     {/* add to cart icons */}
                                     <div className='animate-bounce'>
                                        <IoCart size={27}/>  
                                     </div>
                                     <div className='font-semibold text-sm'>
                                     {
                                                    cartItem[0] ? (
                                                        <div>
                                                            <p>{totalQty} Items</p>
                                                            <p>{DisplayPriceInRupees(totalPrice)}</p>
                                                        </div>
                                                    ) : (
                                                        <p>My Cart</p>
                                                    )
                                                }
                                    </div>
                                </button>
                             </div>
                   </div>
        </div>
        )
     }
      <div className='container mx-auto px-2 lg:hidden'>
        <Search/>
      </div>
      {
        openCartSection && (
          <DisplayCartItem close={() =>setOpenCartSection(false)}/>
        )
      }
    </header>
  )
}

export default Header
