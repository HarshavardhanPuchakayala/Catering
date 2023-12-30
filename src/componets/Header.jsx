import React,{useState} from 'react'
import Avatar from "/assets/avatar.png"
import { MdShoppingBasket,MdAdd,MdLogout } from "react-icons/md";
import {motion} from "framer-motion"
import {Link} from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from "../firebase.config"
import {actionType} from "../context/reducer"
import { useStateValue } from '../context/StateProvider';
export default function Header() {
    const firebaseAuth =getAuth(app);
        const provider = new GoogleAuthProvider();
        const [{user},dispatch] = useStateValue()
        const [isMenu,setMenu] = useState(false)
        const login=async()=>{
                if (!user){
                    const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseAuth, provider);
                    dispatch({
                        type: actionType.SET_USER,
                        user: providerData[0]
                    });
                    localStorage.setItem('user', JSON.stringify(providerData[0]))
                }else{
                    setMenu(!isMenu)
                }
        }
        const logout = () =>{
            setMenu(false);
            localStorage.clear();
            dispatch({
                type:actionType.SET_USER,
                user:null,
            })
        }
  return (
    <>
    <header className='fixed z-50 w-screen md:p-4 md:px-16 p-4 px-5 bg-primary'>
        <div className="hidden md:flex w-full h-full items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
                <img src="/assets/logo.png" alt="logo" className='w-20 object-cover'/>

            </Link>
            <div className="flex items-center gap-8">
            <motion.ul 
            initial={{opacity:0,x:200}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:200}}
            className="flex items-center gap-8 ">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" onClick={()=>setMenu(false)}>Home</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" onClick={()=>setMenu(false)}>Menu</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" onClick={()=>setMenu(false)}>About us</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer" onClick={()=>setMenu(false)}>Service</li>
            </motion.ul>
       
        <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer"/>
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">2</p>
                </div>
            </div>

            <div className='relative'>
            <motion.img whileTap={{scale:0.6}} src={user ? user.photoURL : Avatar} alt="avatar" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' onClick={login}/>
           { isMenu && (
             <motion.div 
             initial={{ opacity:0, scale:0.6}}
             animate={{ opacity:1, scale:1}}
             exit={{ opacity:0, scale:0.6}}
             className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 px-4 py-2">
             {user && user.email === "projects9h@gmail.com" &&(
             <Link to="/createItem">
             <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={()=>setMenu(false)}>New Item <MdAdd/></p>
             </Link>
             )}
             <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout <MdLogout/></p>
         </motion.div>
           )}
            </div>
            </div>
            </div>

            {/*Mobile */}
        <div className="flex md:hidden w-full h-full items-center justify-between">
        <div className="relative flex items-center justify-center">
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer"/>
                <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                    <p className="text-xs text-white font-semibold">2</p>
                </div>
            </div>
            <Link to="/" className="flex items-center gap-2">
                <img src="/assets/logo.png" alt="logo" className='w-20  object-cover'/>
                
            </Link>

            <div className='relative'>
            <motion.img whileTap={{scale:0.6}} src={user ? user.photoURL : Avatar} alt="avatar" className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full' onClick={login}/>
           { isMenu && (
             <motion.div 
             initial={{ opacity:0, scale:0.6}}
             animate={{ opacity:1, scale:1}}
             exit={{ opacity:0, scale:0.6}}
             className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 ">
             {user && user.email === "projects9h@gmail.com" &&(
             <Link to="/createItem">
             <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={()=>setMenu(false)}>New Item <MdAdd/></p>
             </Link>
             )}

            <ul 
            className="flex flex-col">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2 " onClick={()=>setMenu(false)}>Home</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2" onClick={()=>setMenu(false)}>Menu</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2" onClick={()=>setMenu(false)}>About us</li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2" onClick={()=>setMenu(false)}>Service</li>
            </ul>

             <p className='m-2 p-2 rounded-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>
                Logout<MdLogout/>
                </p>
         </motion.div>
           )}
            </div>
        </div>
    </header>
    </>
  )
}
