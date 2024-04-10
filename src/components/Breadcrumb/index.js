"use client"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, capitalize } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = ({ path }) => {
    const pathname = usePathname()
    return (
        <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" className="text-[--white-color]" />}
            aria-label="breadcrumb"
        >
            <Link underline="hover" key="1" color="inherit" href="/" onClick={() => {
            }}>
                <div className="flex justify-center items-center text-[--white-color] space-x-2 text-[16px] text-base hover:text-[--theme-red-color] transition-all ease-in-out duration-500 ">
                    <HomeOutlinedIcon /> <span>Home</span>
                </div>
            </Link>,
            <Link
                href={pathname}
                onClick={() => {
                }}
            >
                <span className={`flex justify-center items-center text-[--white-color] space-x-2 text-[16px] text-base hover:text-[--theme-red-color] transition-all ease-in-out duration-500 ${pathname === `/${path}` && "!text-[--theme-red-color]"}`}>{capitalize(path)}</span>
            </Link>
        </Breadcrumbs>
    )
}

export default Breadcrumb