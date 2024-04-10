"use client"
import Breadcrumb from "@src/components/Breadcrumb";
import GalleryGrid from '@src/components/GalleryGrid';
import ImageSlider from '@src/components/ImageSlider';
import { GalleryData } from "@src/constant";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Gallery = () => {
    const [categoryTypeLabel, setCategoryTypeLabel] = useState("all")
    const [showSlider, setShowSlider] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    const imageSlideChangeHandler = (n) => {
        let newIndex = slideIndex + n;
        let lastIndex
        if (categoryTypeLabel !== "all") {
            lastIndex = GalleryData.filter(val => val.type === categoryTypeLabel).length - 1;
        } else {
            lastIndex = GalleryData.length - 1;
        }
        if (newIndex < 0) {
            newIndex = lastIndex;
        } else if (newIndex > lastIndex) {
            newIndex = 0;
        }
        setSlideIndex(newIndex);
    };

    return (
        <div>
            <div className="bannerImg  h-[320px] lg:h-[420px]">
                <div className="!bg-[--bg-shadow-color] h-[100%] py-36">
                    <div className="mainContainer  flex flex-col justify-center items-center !mt-10">
                        <h1 className="text-[36px] text-[--white-color]">Gallery</h1>
                        <Breadcrumb path="gallery" />
                    </div>
                </div>
            </div>
            <div className="mainContainer !my-10 space-y-2">
                <div className="py-8">
                    <ul className="flex items-center justify-center gap-2 text-sm sm:w-50 sm:gap-7 py-4">
                        <li className={`${categoryTypeLabel === "all" ? "border-b-4 border-[--theme-red-color]" : "border-b-4 border-[--white-color]"} text-sm cursor-pointer text-slate-700 font-semibold sm:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setCategoryTypeLabel("all")}>All</li>
                        <li className={`${categoryTypeLabel === "human" ? "border-b-4 border-[--theme-red-color]" : "border-b-4 border-[--white-color]"} text-sm cursor-pointer text-slate-700 font-semibold sm:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setCategoryTypeLabel("human")}>Human</li>
                        <li className={`${categoryTypeLabel === "nature" ? "border-b-4 border-[--theme-red-color]" : "border-b-4 border-[--white-color]"} text-sm cursor-pointer text-slate-700 font-semibold sm:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setCategoryTypeLabel("nature")}>Nature</li>
                        <li className={`${categoryTypeLabel === "country" ? "border-b-4 border-[--theme-red-color]" : "border-b-4 border-[--white-color]"} text-sm cursor-pointer text-slate-700 font-semibold sm:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setCategoryTypeLabel("country")}>Country</li>
                        <li className={`${categoryTypeLabel === "video" ? "border-b-4 border-[--theme-red-color]" : "border-b-4 border-[--white-color]"} text-sm cursor-pointer text-slate-700 font-semibold sm:text-lg p-0.5 transition-all ease-in-out duration-700`} onClick={() => setCategoryTypeLabel("video")}>Video</li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Fade delay={500} duration={1500} cascade damping={1e-1} triggerOnce>
                        {categoryTypeLabel === "all"
                            ?
                            GalleryData.map((val, index) =>
                                <GalleryGrid
                                    key={index}
                                    data={val}
                                    index={index}
                                    setShowSlider={setShowSlider}
                                    setSlideIndex={setSlideIndex}
                                    type={"gallery"} />)
                            :
                            GalleryData.filter((elem) => elem.type === categoryTypeLabel).map((val, index) =>
                                <GalleryGrid
                                    key={index}
                                    data={val}
                                    index={index}
                                    setShowSlider={setShowSlider}
                                    setSlideIndex={setSlideIndex}
                                    type={"gallery"} />)
                        }
                    </Fade>
                </div>
            </div>
            <div className="flex justify-center items-center mt-16">
                <Fade delay={500} duration={2000} cascade damping={1e-1} triggerOnce>
                    <div className="border-2 border-[--theme-red-color] px-14 py-3 rounded-full text-lg font-medium cursor-pointer hover:text-[--white-color] hover:bg-[--theme-red-color] transition-all ease-in-out duration-500" >
                        View More
                    </div>
                </Fade>
            </div>
            {showSlider && (categoryTypeLabel === "all" ?
                <ImageSlider data={GalleryData} setShowSlider={setShowSlider} slideIndex={slideIndex} imageSlideChangeHandler={imageSlideChangeHandler} />
                :
                <ImageSlider data={GalleryData.filter((elem) => elem.type === categoryTypeLabel)} setShowSlider={setShowSlider} slideIndex={slideIndex} imageSlideChangeHandler={imageSlideChangeHandler} />
            )}
        </div >
    )
}

export default Gallery;