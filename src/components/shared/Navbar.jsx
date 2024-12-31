import React, { useEffect, useState } from 'react'
import { IoIosSearch } from 'react-icons/io';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchText, setUser } from '../../redux/appSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Navbar = () => {

    const [input, setInput] = useState("");
    const [toggle, setToggle] = useState(false);
    const {user} = useSelector(store=>store.appSlice)
    const dispatch = useDispatch();

    const signOutHandler = () => {
        signOut(auth).then(() => {
            dispatch(setUser(null));
        }).catch((error)=> {
            console.log(error);
        })
    }

    useEffect(() => {
        dispatch(setSearchText(input))
    }, [input])

  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <RxHamburgerMenu size={'20px'}/>
                </div>
                    <img className='w-8' src="https://static.vecteezy.com/system/resources/previews/022/484/508/non_2x/google-mail-gmail-icon-logo-symbol-free-png.png" alt="gmail-logo" />
                    <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
            </div>
        </div>
        <div className='md:block hidden w[50%] mr-60'>
            <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                <IoIosSearch size={'24px'} className='text-gray-700' />
                <input type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Search Mil'
                className='rounded-full w-full bg-transparent outline-none px-1'
                />
            </div>
        </div>
        <div className='md:block hidden'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <CiCircleQuestion size={'20px'}/>
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <IoSettingsOutline size={'20px'}/>
                </div>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <PiDotsNineBold size={'20px'}/>
                </div>
                <div className='relative cursor-pointer'>
                    <Avatar onClick={()=> setToggle(!toggle)} src={user?.photoURL} size='40' round={true} />
                    <AnimatePresence>
                        {
                            toggle && (
                                <motion.div
                                initial={{opacity:0, scale:0.8}}
                                animate={{opacity:1, scale:1}}
                                exit={{opacity:0, scale:0.8}}
                                transition={{duration:0.1}}
                                className='absolute right-2 z-20 shadow-lg bg-white rounded-md'
                                >
                                <p onClick={signOutHandler} className='p-2 underline'>LogOut</p>
                                </motion.div>
                            )
                        }
                    </AnimatePresence>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar