"use client"
import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import SearchIcon from '@mui/icons-material/Search';
import { Routes } from "@src/constant";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../public/images/core-img/logo.png";
import { useState } from 'react';

const Navbar = () => {
    const pathname = usePathname()
    const [isNavbarBg, setIsNavbarBg] = useState(false)
    const [toggle, setToggle] = useState(false)

    const sideNavOpenHandler = () => setToggle(true)

    const sideNavCloseHandler = () => setToggle(false)

    const navbarVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50) {
            setIsNavbarBg(true)
        }
        else {
            setIsNavbarBg(false)
        }
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', navbarVisible);
    }

    return (
        <nav className={`${isNavbarBg ? "bg-[--black-color] w-[100%]" : "bg-[--bg-navbar] w-[100%]"} fixed top-0 left-0 z-50  transition-all ease-in-out duration-500 `}>
            <div className=" mainContainer max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div>
                        <Image src={Logo} alt="logo" width={100} height={100} />
                    </div>
                    <div className="hidden md:flex items-center md:space-x-6 lg:space-x-14">
                        {Routes?.map((route, index) => {
                            return (
                                <Link href={route.path} key={index}>
                                    <span className={`${pathname === route.path && "text-[--theme-red-color] border-b-2 border-[--theme-red-color] "} text-[--white-color] text-base capitalize font-medium hover:text-[--theme-red-color] transition-all ease-in-out duration-500 pb-1 tracking-wider`}>{route.name}</span>
                                </Link>
                            )
                        })}
                    </div>
                    <div className="hidden md:flex">
                        <SearchIcon fontSize="large" className="cursor-pointer text-[--white-color]" />
                    </div>
                    <div className="block cursor-pointer md:hidden">
                        {toggle
                            ? <CloseIcon fontSize="large" className="text-[--white-color] transition-all ease-in-out duration-500 " onClick={sideNavCloseHandler} />
                            : <DensityMediumIcon fontSize="large" className="text-[--white-color] transition-all ease-in-out duration-500 " onClick={sideNavOpenHandler} />}
                    </div >
                </div>
            </div>
            <div className={`md:hidden fixed top-0 left-0 w-[320px] h-[100vh] bg-[--white-color] transition-all ease-in-out duration-500 ${toggle ? 'translate-x-0' : 'translate-x-[-100%]'}`}>
                <div className="flex justify-end items-center py-4 px-2">
                    <CloseIcon fontSize="large" className="" onClick={sideNavCloseHandler} />
                </div>
                <div className="flex items-start flex-col py-4 space-y-4 list-none px-3 transition-all ease-in-out duration-500 bg-[#f2f4f8]">
                    {Routes?.map((route, index) => {
                        return (
                            <Link href={route.path} key={index}>
                                <span className={`${pathname === route.path && "text-[--theme-red-color]"} text-[--black-color] text-sm capitalize font-medium hover:text-[--theme-red-color] transition-all ease-in-out duration-500 pb-1 tracking-wider `} onClick={sideNavCloseHandler}>{route.name}</span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav >
    )
}
export default Navbar