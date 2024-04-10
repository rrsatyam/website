"use client"
import { HomeGalleryData } from "@src/constant";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import GalleryGrid from '../GalleryGrid';
import ImageSlider from '../ImageSlider';

const Category = () => {
    const [categoryTypeLabel, setCategoryTypeLabel] = useState("all")
    const [showSlider, setShowSlider] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    const imageSlideChangeHandler = (n) => {
        let newIndex = slideIndex + n;
        let lastIndex
        if (categoryTypeLabel !== "all") {
            lastIndex = HomeGalleryData.filter(val => val.type === categoryTypeLabel).length - 1;
        } else {
            lastIndex = HomeGalleryData.length - 1;
        }
        if (newIndex < 0) {
            newIndex = lastIndex;
        } else if (newIndex > lastIndex) {
            newIndex = 0;
        }
        setSlideIndex(newIndex);
    };

    return (
        <div className="mainContainer !my-10">
            <ul className="flex items-center justify-center gap-4 sm:w-50 sm:gap-7 sm:py-4" >
                <li className={`${categoryTypeLabel === "all" ? "border-b-2 md:border-b-4 border-[--theme-red-color]" : "border-b-2 md:border-b-4 border-[--white-color]"} text-sm cursor-pointer text-slate-700 font-semibold sm:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setCategoryTypeLabel("all")}>All</li>
                <li className={`${categoryTypeLabel === "human" ? "border-b-2 md:border-b-4 border-[--theme-red-color]" : "border-b-2 md:border-b-4 border-[--white-color]"} text-sm cursor-pointer text-slate-700 font-semibold sm:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setCategoryTypeLabel("human")}>Human</li>
                <li className={`${categoryTypeLabel === "nature" ? "border-b-2 md:border-b-4 border-[--theme-red-color]" : "border-b-2 md:border-b-4 border-[--white-color]"} text-sm cursor-pointer text-slate-700 font-semibold sm:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setCategoryTypeLabel("nature")}>Nature</li>
                <li className={`${categoryTypeLabel === "country" ? "border-b-2 md:border-b-4 border-[--theme-red-color]" : "border-b-2 md:border-b-4 border-[--white-color]"} text-sm cursor-pointer text-slate-700 font-semibold sm:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setCategoryTypeLabel("country")}>Country</li>
                <li className={`${categoryTypeLabel === "video" ? "border-b-2 md:border-b-4 border-[--theme-red-color]" : "border-b-2 md:border-b-4 border-[--white-color]"} text-sm cursor-pointer text-slate-700 font-semibold sm:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setCategoryTypeLabel("video")}>Video</li>
            </ ul>
            <div className="gallery space-y-6 sm:space-y-0 mt-4">
                {categoryTypeLabel === "all"
                    ?
                    HomeGalleryData.map((val, index) =>
                        <GalleryGrid
                            key={index}
                            data={val}
                            index={index}
                            setShowSlider={setShowSlider}
                            setSlideIndex={setSlideIndex}
                            type={"home"} />
                    )
                    :
                    HomeGalleryData.filter((elem) => elem.type === categoryTypeLabel).map((val, index) => <GalleryGrid
                        key={index}
                        data={val}
                        index={index}
                        setShowSlider={setShowSlider}
                        setSlideIndex={setSlideIndex}
                        type={"home"} />
                    )
                }
            </div >
            <div className="flex justify-center items-center mt-16">
                <Fade delay={500} duration={2000} cascade damping={1e-1} triggerOnce>
                    <div className="border-2 border-[--theme-red-color] px-5 py-2 md:px-10 md:py-3 rounded-full text-md font-medium cursor-pointer hover:text-[--white-color] hover:bg-[--theme-red-color] transition-all ease-in-out duration-500" >
                        View More
                    </div>
                </Fade>
            </div>
            {showSlider && (categoryTypeLabel === "all" ?
                <ImageSlider data={HomeGalleryData} setShowSlider={setShowSlider} slideIndex={slideIndex} imageSlideChangeHandler={imageSlideChangeHandler} />
                :
                <ImageSlider data={HomeGalleryData.filter((elem) => elem.type === categoryTypeLabel)} setShowSlider={setShowSlider} slideIndex={slideIndex} imageSlideChangeHandler={imageSlideChangeHandler} />
            )}
        </div >
    );
}

export default Category