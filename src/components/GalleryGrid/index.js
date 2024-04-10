"use client"
import AddIcon from '@mui/icons-material/Add';
import { Fade } from "react-awesome-reveal";

const GalleryGrid = ({ data, index, setShowSlider, setSlideIndex, type }) => {
    return (
        <div className={`${type === "home" && `gallery__item gallery__item--${index + 1}`} footerSlider relative transition-all ease-in-out duration-500 overflow-hidden`} key={index}>
            <img src={data.image} className="w-[100%] h-[100%] object-cover transition-all ease-in-out duration-500" alt="Image 1" />
            <div className="layer hidden bg-[--bg-shadow-color] absolute inset-0 space-y-3 transition-all ease-in-out duration-500">
                <Fade direction="up" cascade damping={1e-1}>
                    <button className="bg-[--theme-red-color] bottom-0 rounded-full p-2 hover:bg-[--black-color] transition-all ease-in-out duration-500" onClick={() => {
                        setShowSlider(true)
                        setSlideIndex(index)
                    }}>
                        <AddIcon fontSize="large" className="text-[--white-color] cursor-pointer" />
                    </button>
                </Fade>
            </div>
        </div>
    )
}

export default GalleryGrid