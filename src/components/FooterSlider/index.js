"use client"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderData } from "@src/constant";
import InstagramIcon from '@mui/icons-material/Instagram';

const FooterSlider = () => {

    const smSlickTechnologies = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const mdSlickTechnologies = { ...smSlickTechnologies, slidesToShow: 3 }
    const lgSlickTechnologies = { ...smSlickTechnologies, slidesToShow: 4 }
    const xlSlickTechnologies = { ...smSlickTechnologies, slidesToShow: 5 }
    const SlickTechnologies = { ...smSlickTechnologies, slidesToShow: 6 }

    return (
        <div className="mt-[80px]">
            <div className="flex flex-col justify-center items-center space-y-2 mt-6">
                <h1 className="block text-2xl lg:text-[36px]">Follow Instagram</h1>
                <p className="text-[#636363] text-md lg:text-[16px] font-normal ">@Alime_photographer</p>
            </div>
            <div className="mt-[50px] w-full overflow-x-hidden ">
                <div className="sm:hidden">
                    <Slider {...smSlickTechnologies}>
                        {SliderData.map((val, index) => (
                            <div key={index} className="footerSlider relative transition-all ease-in-out duration-500 overflow-hidden">
                                <img src={val.image} alt="data" className="w-full transition-all ease-in-out duration-1000" />
                                <div className="layer hidden bg-red-400 bg-opacity-80 absolute inset-0 space-y-3 transition-all ease-in-out duration-500">
                                    <InstagramIcon fontSize="large" className="text-[--white-color] cursor-pointer" />
                                    <h1 className="text-[--white-color] text-[14px] cursor-pointer">Alime_photographer</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="hidden sm:block md:hidden">
                    <Slider {...mdSlickTechnologies}>
                        {SliderData.map((val, index) => (
                            <div key={index} className="footerSlider relative transition-all ease-in-out duration-500 overflow-hidden">
                                <img src={val.image} alt="data" className="w-full transition-all ease-in-out duration-1000" />
                                <div className="layer hidden bg-red-400 bg-opacity-80 absolute inset-0 space-y-3 transition-all ease-in-out duration-500">
                                    <InstagramIcon fontSize="large" className="text-[--white-color] cursor-pointer" />
                                    <h1 className="text-[--white-color] text-[14px] cursor-pointer">Alime_photographer</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="hidden md:block lg:hidden">
                    <Slider {...lgSlickTechnologies}>
                        {SliderData.map((val, index) => (
                            <div key={index} className="footerSlider relative transition-all ease-in-out duration-500 overflow-hidden">
                                <img src={val.image} alt="data" className="w-full transition-all ease-in-out duration-1000" />
                                <div className="layer hidden bg-red-400 bg-opacity-80 absolute inset-0 space-y-3 transition-all ease-in-out duration-500">
                                    <InstagramIcon fontSize="large" className="text-[--white-color] cursor-pointer" />
                                    <h1 className="text-[--white-color] text-[14px] cursor-pointer">Alime_photographer</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="hidden lg:block xl:hidden">
                    <Slider {...xlSlickTechnologies}>
                        {SliderData.map((val, index) => (
                            <div key={index} className="footerSlider relative transition-all ease-in-out duration-500 overflow-hidden">
                                <img src={val.image} alt="data" className="w-full transition-all ease-in-out duration-1000" />
                                <div className="layer hidden bg-red-400 bg-opacity-80 absolute inset-0 space-y-3 transition-all ease-in-out duration-500">
                                    <InstagramIcon fontSize="large" className="text-[--white-color] cursor-pointer" />
                                    <h1 className="text-[--white-color] text-[14px] cursor-pointer">Alime_photographer</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="hidden xl:block">
                    <Slider {...SlickTechnologies}>
                        {SliderData.map((val, index) => (
                            <div key={index} className="footerSlider relative transition-all ease-in-out duration-500 overflow-hidden">
                                <img src={val.image} alt="data" className="w-full transition-all ease-in-out duration-1000" />
                                <div className="layer hidden bg-red-400 bg-opacity-80 absolute inset-0 space-y-3 transition-all ease-in-out duration-500">
                                    <InstagramIcon fontSize="large" className="text-[--white-color] cursor-pointer" />
                                    <h1 className="text-[--white-color] text-[14px] cursor-pointer">Alime_photographer</h1>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}


export default FooterSlider