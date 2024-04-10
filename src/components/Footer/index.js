"use client"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="py-[10px] !lg:py-[20px] px-[20px] md:px-[50px]">
            <div className="flex items-center justify-between lg:px-[50px]">
                <h1 className="text-[13px] font-normal lg:text-[16px]">Copyright © {currentYear} All rights reserved | This template is made with  by <span className="!text-[--theme-red-color]">Colorlib</span></h1>
                <div className='hidden sm:flex justify-center items-center sm:w-[50px] sm:h-[30px] lg:w-[70px] lg:h-[20px]'>
                    <img src="/images/core-img/logo2.png" alt="logo" className='w-[100%] h-[100%] object-contain' />
                </div>
                <div className="sm:space-x-2">
                    <FacebookIcon className="text-[20px]" />
                    <TwitterIcon className="text-[20px]" />
                    <LinkedInIcon className="text-[20px]" />
                    <PinterestIcon className="text-[20px]" />
                </div>
            </div>
        </div>
    )
}
export default Footer