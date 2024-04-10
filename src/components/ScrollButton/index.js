"use client";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

const isBrowser = () => typeof window !== 'undefined'
const scrollToTop = () => {
    if (!isBrowser()) return;
    if (typeof window !== 'undefined') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
};

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 250) {
            setVisible(true)
        }
        else if (scrolled <= 250) {
            setVisible(false)
        }
    };
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', toggleVisible);
    }

    return (
        <button onClick={scrollToTop} className={visible ? 'fixed cursor-pointer rounded-full bg-[--theme-red-color] text-white p-2 hover:bg-[black] transition-all duration-500 right-[15px] bottom-5' : "hidden transition-none	"}>
            <KeyboardArrowUpIcon />
        </button>
    )
}

export default ScrollButton
export { scrollToTop };

