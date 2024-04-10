"use client"
import Category from "@src/components/Category";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRef, useState } from "react";

const Home = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    afterChange: (current) => setCurrentSlide(current)
  };

  return (
    <div className="overflow-x-hidden">
      <Slider {...sliderSettings} ref={sliderRef}>
        <div className="relative h-[95vh] md:h-[100vh]">
          <div className="w-[100vw] h-[100%]">
            <img src="/images/bg-img/1.jpg" alt="data" className="w-[100%] h-[100%] object-cover" />
          </div>
          <div className="bg-[--bg-shadow-color] absolute inset-0 space-y-3 ">
            <div className="absolute bottom-[20%] left-[13%]">
              <Fade direction="down" delay={1500} duration={500} cascade damping={1e-1}>
                <p className="gradient-text !font-bold text-4xl sm:text-6xl md:text-[82px] m-0">Hello<br />I&apos;m Jackson</p>
              </Fade>
              <Fade direction="down" delay={2000} duration={500} cascade damping={1e-1}>
                <p className="text-[--white-color] font-extralight tracking-wide text-sm w-[86vw] sm:w-[85%] sm:text-md md:text-lg lg:text-md lg:w-[70%]">
                  I photograph very instinctively. I
                  see how it is taken like that. I do not follow certain styles, philosophies or
                  teachers.
                </p>
              </Fade>
              <Fade direction="down" delay={2500} duration={500} cascade damping={1e-1}>
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center mt-10 space-y-3 sm:space-y-0 sm:space-x-7">
                  <div className="border-2 border-[--theme-red-color] px-5 py-2 md:px-10 md:py-3 rounded-full text-md font-medium cursor-pointer text-[--white-color] hover:bg-[--theme-red-color] transition-all ease-in-out duration-500" >
                    Get A Quote
                  </div>
                  <a className="text-[--white-color] underline hover:text-[--theme-red-color] transition-all ease-in-out duration-500 italic" href="mailto:hello.alime@gmail.com">hello.alime@gmail.com</a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
        <div className="relative h-[95vh] md:h-[100vh]">
          <div className="w-[100vw] h-[100%]">
            <img src="/images/bg-img/2.jpg" alt="data" className="w-[100%] h-[100%] object-cover" />
          </div>
          <div className="bg-[--bg-shadow-color] absolute inset-0 space-y-3">
            <div className="mx-auto absolute bottom-[20%] left-[10%]">
              <Fade direction="up" delay={1500} duration={500} cascade damping={1e-1}>
                <p className="gradient-text font-bold text-4xl sm:text-6xl md:text-[82px] mb-0">Hello <br />I&apos;m Amlie</p>
              </Fade>
              <Fade direction="up" delay={2000} duration={500} cascade damping={1e-1}>
                <p className="text-[--white-color] font-extralight tracking-wide text-sm w-[86vw] sm:w-[85%] sm:text-md md:text-lg lg:text-md lg:w-[70%]">
                  I photograph very instinctively. I
                  see how it is taken like that. I do not follow certain styles, philosophies or
                  teachers.
                </p>
              </Fade>
              <Fade direction="up" delay={2500} duration={500} cascade damping={1e-1}>
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center mt-10 space-y-3 sm:space-y-0 sm:space-x-7">
                  <div className="border-2 border-[--theme-red-color] px-5 py-2 md:px-10 md:py-3 rounded-full text-md font-medium cursor-pointer text-[--white-color] hover:bg-[--theme-red-color] transition-all ease-in-out duration-500" >
                    Get A Quote
                  </div>
                  <a className="text-[--white-color] underline hover:text-[--theme-red-color] transition-all ease-in-out duration-500 italic" href="mailto:hello.alime@gmail.com">hello.alime@gmail.com</a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Slider>
      <button className="absolute top-[50%] translate-y-[-50%] cursor-pointer bg-[--slider-button-color] hover:bg-[--theme-red-color] transition-all ease-in-out duration-500 left-2 p-2 md:left-6 lg:left-10 lg:p-4 rounded-[50%] " onClick={() => sliderRef.current.slickPrev()}>
        <ArrowBackIcon fontSize="large" className="text-[--white-color] z-1" />
      </button>
      <button className="absolute top-[50%] translate-y-[-50%] cursor-pointer bg-[--slider-button-color] hover:bg-[--theme-red-color] transition-all ease-in-out duration-500 right-2 p-2 md:right-6 lg:right-10 lg:p-4 rounded-[50%]" onClick={() => sliderRef.current.slickNext()}>
        <ArrowForwardIcon fontSize="large" className="text-[--white-color] z-1" />
      </button>
      <Category />
    </div >
  );
}

export default Home
