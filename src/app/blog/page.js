"use client"
import Breadcrumb from "@src/components/Breadcrumb";
import { BlogData } from "@src/constant";

const Blog = () => {
    return (
        <div>
            <div className="bannerImg h-[320px] lg:h-[420px]">
                <div className="!bg-[--bg-shadow-color] h-[100%] py-36">
                    <div className="mainContainer  flex flex-col justify-center items-center !mt-10">
                        <h1 className="text-[36px] text-[--white-color]">Latest Blog</h1>
                        <Breadcrumb path="blog" />
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-10 lg:py-[50px] lg:w-[90%] xl:w-[80%] lg:mx-auto !my-[80px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {BlogData.map((val, index) => {
                    return (
                        <div key={index} className={`blogCard relative transition-all ease-in-out duration-500 overflow-hidden ${(index === 0 || index === 5 || index === 6) ? 'sm:col-span-2' : ''}`}>
                            <img src={val.image} alt="data" className="w-full h-[60vh] transition-all ease-in-out duration-1000 object-cover" />
                            <div className="bg-[--bg-shadow-color] absolute inset-0 space-y-3 transition-all ease-in-out duration-500 p-3">
                                <div className="flex justify-end items-center">
                                    <p className="bg-[--theme-red-color] py-1 px-4 rounded-sm text-[11px] text-[--white-color] font-medium tracking-wide hover:bg-[--black-color] cursor-pointer transition-all ease-in-out duration-500">{val.batch}</p>
                                </div>
                                <div className="absolute bottom-7 space-y-3 px-3">
                                    <div className="space-x-3 flex items-center">
                                        <span className="text-[--white-color] text-sm font-light hover:text-[--theme-red-color] cursor-pointer transition-all ease-in-out duration-500">{val.date}</span><span className="text-[--white-color] text-sm font-light"> | </span><span className="text-[--white-color] text-sm font-light hover:text-[--theme-red-color] cursor-pointer transition-all ease-in-out duration-500">{val.comment}</span>
                                    </div>
                                    <h1 className="text-[--white-color] text-[20px] font-semibold hover:text-[--theme-red-color] cursor-pointer transition-all ease-in-out duration-500">{val.title}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Blog;