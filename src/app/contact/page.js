"use client"

import Breadcrumb from "@src/components/Breadcrumb";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
    return (
        <div>
            <div className="bannerImg  h-[320px] lg:h-[420px]">
                <div className="!bg-[--bg-shadow-color] h-[100%] py-36">
                    <div className="mainContainer  flex flex-col justify-center items-center !mt-10">
                        <h1 className="text-[36px] text-[--white-color]">Contact Us</h1>
                        <Breadcrumb path="contact" />
                    </div>
                </div>
            </div>
            <div className="!my-[80px]">
                <div className="mainContainer flex flex-col lg:flex-row lg:justify-between space-y-10 lg:space-x-10 lg:space-y-0 sm:px-6">
                    <div className="">
                        <h1 className="text-4xl lg:text-6xl w-[70%]">Let’s Work
                            Together</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
                        <div className="space-y-3">
                            <p className="text-[18px] font-medium text-[#636363]">Email</p>
                            <h1>info.deercreative@gmail.com</h1>
                        </div>
                        <div className="space-y-3">
                            <p className="text-[18px] font-medium text-[#636363]">Visit Us</p>
                            <h1>60-49 Road 11378 New York</h1>
                        </div>
                        <div className="space-y-3">
                            <p className="text-[18px] font-medium text-[#636363]">Call Us</p>
                            <h1>+6511.188.888</h1>
                        </div>
                    </div>
                </div>
                <div className="mainContainer !mt-20 rounded-lg">
                    <Fade delay={500} duration={1000} cascade damping={1e-1} triggerOnce>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12309.440717226664!2d24.094896788114085!3d56.9484200464499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sRiga%2C+Latvia!5e0!3m2!1sen!2sbd!4v1550835159592" allowFullScreen className="!w-[100%] h-[85vh] rounded-xl"></iframe>
                    </Fade>
                </div>
            </div>
        </div >
    )
}

export default Contact;