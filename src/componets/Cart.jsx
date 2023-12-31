import React from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import {RiRefreshFill} from "react-icons/ri"
import {motion} from "framer-motion";
import {actionType} from "../context/reducer"
import { useStateValue } from '../context/StateProvider';
import CartMenu from './CartMenu';
export default function Cart() {
    const [{cartShow,cartItems,user},dispatch] = useStateValue()

    const showCartMenu =()=>{
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        });
    }
    const clearCart = () =>{
        dispatch({
            type:actionType.SET_CARTITEMS,
            cartItems:[],
        })
        localStorage.setItem("cartItems",JSON.stringify([]))
    }
  return (
    <>
    <motion.div
    initial={{opacity:0 , x:200}}
    animate={{opacity:1 , x:0}}
    exit={{opacity:0, x:200}}
     className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white 
    drop-shadow-md flex flex-col z-[101]">
        <div className="w-full flex items-center 
        justify-between p-4 cursor-pointer"
       >
            <motion.div
            whileTap={{scale: 0.75}}
            onClick={showCartMenu}>
                <MdOutlineKeyboardBackspace className='text-textColor text-3xl'/>
            </motion.div>
            <p className="text-textColor text-lg font-semibold"> cart</p>

        <motion.p
        whileTap={{scale:0.75}}
        onClick={clearCart}
        className='flex items-center gap-2 p-1 px-2 my-2
        bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base'>
            clear <RiRefreshFill/>{""}

        </motion.p>
        </div>

        {cartItems && cartItems.length > 0 ? (
            <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
            <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">



                {cartItems && cartItems.map((item,index)=>(
                <CartMenu key={index} item={item}/>
))}



            </div>

            <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center
            justify-evenly px-8 py-2">
               


                    {user ? (
            <motion.button
            whileTap={{scale:0.8}}
            type='button' 
            className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400
            to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'>
                check out
            </motion.button>
                    ):(
                        <motion.button
            whileTap={{scale:0.8}}
            type='button' 
            className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400
            to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg'>
                Login to check out
            </motion.button>
                    )} 
        </div>
        </div>
        ):(
            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
                <img src="/assets/Detective.png" className='w-300' />
                <p className="text-xl text-textColor font-semibold">
                    Add some items to your Cart
                </p>
            </div>
        )}
    </motion.div>
    </>
  )
}



























































































































































{/*
 <div className="w-full flex items-center justify-between">
                    <p className="text-gray-400 text-lg">Sub Total</p>
                    <p className="text-gray-400 text-lg">8.5</p>
                </div>

                <div className="w-full flex items-center justify-between">
                    <p className="text-gray-400 text-lg">Sub Total</p>
                    <p className="text-gray-400 text-lg">8.5</p>
                </div>

                <div className="w-full border-b border-gray-600 my-2"></div>
                <div className="w-full flex items-center justify-between">
                    <p className="text-gray-200 text-xl font-semibold">Total</p>
                    <p className="text-gray-200 text-xl font-semibold">8.5</p>
            </div>
 */}