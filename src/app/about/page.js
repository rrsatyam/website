"use client"
import Breadcrumb from "@src/components/Breadcrumb";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import TheatersRoundedIcon from '@mui/icons-material/TheatersRounded';
import OurTeam from "@src/components/OurTeam";
import "animate.css";
import { Fade, Slide } from "react-awesome-reveal";

const About = () => {
    return (
        <div>
            <div className="bannerImg h-[320px] lg:h-[420px]">
                <div className="!bg-[--bg-shadow-color] h-[100%] py-36">
                    <div className="mainContainer  flex flex-col justify-center items-center !mt-10">
                        <h1 className="text-[36px] text-[--white-color]">About Us</h1>
                        <Breadcrumb path="about" />
                    </div>
                </div>
            </div>
            <div className="mainContainer !my-[80px] flex flex-col justify-between items-center space-y-10 lg:flex-row lg:space-x-12">
                <div className="lg:w-[50%]">
                    <Fade delay={500} duration={1000} cascade damping={1e-1} triggerOnce>
                        <h1 className="text-2xl md:text-4xl font-bold">We Live For Passion</h1>
                        <div className="h-[4px] w-[70px] bg-[--theme-red-color] mb-[30px] mt-[10px]"></div>
                        <p className="text-[16px] font-normal text-[#636363] !mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore magnam aliquam quaerat voluptatem.</p>
                        <p className="text-[16px] font-normal text-[#636363] !mt-[30px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et do sunt explicabo. Nemo enim ipsam et dolore magnam aliquam quaerat voluptatem.</p>
                        <div className="flex justify-start items-center mt-12 lg:!mt-16">
                            <div className="border-2 border-[--theme-red-color] px-7 py-2 md:px-10 md:py-3 rounded-full text-md font-medium cursor-pointer hover:text-[--white-color] hover:bg-[--theme-red-color] transition-all ease-in-out duration-500" >
                                Contact Us
                            </div>
                        </div>
                    </Fade>
                </div>
                <Fade delay={500} duration={1000} cascade damping={1e-1} triggerOnce>
                    <div className="shadow-2xl rounded-xl relative lg:w-[90%] lg:h-[90%]">
                        <img src="/images/bg-img/17.jpg" alt="videoImg" className="rounded-xl w-[100%] h-[100%] " />
                        <div className="video-icon">
                            <span className="flex justify-center items-center transition-all ease-in-out duration-500">
                                <PlayArrowRoundedIcon fontSize="large" className="" />
                            </span>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className="bg-[#f7f7f7] py-[80px]">
                <div className="mainContainer ">
                    <Slide direction="up" triggerOnce>
                        <h1 className="text-3xl lg:text-4xl text-center">Why Choose Us</h1>
                    </Slide>
                    <div className="flex flex-col justify-between items-start space-y-16 lg:flex-row lg:space-y-0 lg:space-x-10 !mt-20">
                        <Fade delay={500} duration={2500} cascade damping={1e-1} triggerOnce>
                            <div className="aboutCard flex flex-col space-y-6 py-[40px] px-[30px] justify-center items-center rounded-xl shadow-xl bg-[--white-color] relative transition-all ease-in-out duration-500">
                                <div className="aboutCardIcon rounded-full p-5 bg-[--theme-red-color] text-[--white-color] w-max absolute -top-8 transition-all ease-in-out duration-500">
                                    <TheatersRoundedIcon fontSize="large" />
                                </div>
                                <h1 className="text-[20px] transition-all ease-in-out duration-500">High Quality Images</h1>
                                <p className="text-[14px] font-normal text-[#636363] text-center transition-all ease-in-out duration-500">Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
                            </div>
                            <div className="aboutCard flex flex-col space-y-6 py-[40px] px-[30px] justify-center items-center rounded-xl shadow-xl bg-[--white-color] relative transition-all ease-in-out duration-500">
                                <div className="aboutCardIcon rounded-full p-5 bg-[--theme-red-color] w-max absolute -top-8 text-[--white-color] transition-all ease-in-out duration-500">
                                    <ModeEditOutlineRoundedIcon fontSize="large" />
                                </div>
                                <h1 className="text-[20px] transition-all ease-in-out duration-500">Abundant Experience</h1>
                                <p className="text-[14px] font-normal text-[#636363] text-center transition-all ease-in-out duration-500">Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
                            </div>
                            <div className="aboutCard flex flex-col space-y-6 py-[40px] px-[30px] justify-center items-center rounded-xl shadow-xl bg-[--white-color] relative transition-all ease-in-out duration-500">
                                <div className="aboutCardIcon rounded-full p-5 bg-[--theme-red-color] w-max absolute -top-8 text-[--white-color] transition-all ease-in-out duration-500">
                                    <CameraAltRoundedIcon fontSize="large" />
                                </div>
                                <h1 className="text-[20px] transition-all ease-in-out duration-500">Modern Equipments</h1>
                                <p className="text-[14px] font-normal text-[#636363] text-center transition-all ease-in-out duration-500">Lorem ipsum dolor sit amet, consectetur isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut elit, sed do eiusmod te</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div >
            <OurTeam />
        </div >
    )
}

export default About;