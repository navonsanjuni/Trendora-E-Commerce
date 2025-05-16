import React from 'react'
import { useState } from 'react'

const CartDrawer = () => {

        const [drawerOpen, setDraweropen] = useState(false);
        const toggleCartDrawer = () => {
            setDraweropen(!drawerOpen);
        }

  return (

    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex-col flex ${drawerOpen? "translate-x-0" : "translate-x-full"}`}>
      
    </div>
  )
}

export default CartDrawer