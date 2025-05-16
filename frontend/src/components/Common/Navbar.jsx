import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiOutlineBars3BottomRight } from 'react-icons/hi2'
import SearchBar from './Searchbar'
import CartDrawer from '../Layout/CartDrawer'


const Navbar = () => {
  return (
   <>
    <nav className='container mx-auto flex justify-between items-center py-4 px-6'>
        {/*Left - Logo */}
        <div >
            <Link to="/" className='text-3xl font-medium text-elegantBlack'>
               Trendora
            </Link>
        </div>

            {/* Center- Navigation Links */}
        <div className='hidden md:flex space-x-6'>
            <Link 
                to="#"
                className='text-gray-700 hover:text-elegantBlack text-sm font-medium uppercase'>
                Men
            </Link>

            <Link 
                to="#"
                className='text-gray-700 hover:text-elegantBlack text-sm font-medium uppercase'>
                Women
            </Link>

            <Link 
                to="#"
                className='text-gray-700 hover:text-elegantBlack text-sm font-medium uppercase'>
                Top Wear
            </Link>

            <Link 
                to="#"
                className='text-gray-700 hover:text-elegantBlack text-sm font-medium uppercase'>
                Bottom Wear
            </Link>

        </div>

        <div className='hidden md:flex space-x-6'>
            <Link 
                    to="/profile"
                    className='hover:text-elegantBlack'>
                    <HiOutlineUser className='h-6 w-6 text-gray-700'/>
            </Link>
            <button
                    type='button'
                    className='relative hover:text-elegantBlack'>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700'/>
                    <span className='absolute -top-2 -right-2 bg-red-600 text-white rounded-full px-2 text-xs'>
                        0
                    </span>
            </button>
            {/* Search */}
            <div className='overflow-hidden'>
                 <SearchBar/>
            </div>
           
            <button
                    type='button'
                    className='md:hidden hover:text-elegantBlack'>
                    <HiOutlineBars3BottomRight className='h-6 w-6 text-gray-700'/>
            </button>
        </div>

    </nav>
    <CartDrawer/>
   </>
  )
}

export default Navbar