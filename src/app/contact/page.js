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
              <h1 className="text-4xl lg:text-6xl w-[70%]">
                Let’s Work Together
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
              <div className="space-y-3">
                <p className="text-[18px] font-medium text-[#636363]">Email</p>
                <h1>satyam1105@gmail.com</h1>
              </div>
              <div className="space-y-3">
                <p className="text-[18px] font-medium text-[#636363]">
                  Visit Us
                </p>
                <h1>
                  14 Bhaktinandan society Sector3 near by ABC circle Shree hari
                  hospital ni same Mota varachha surat
                </h1>
              </div>
              <div className="space-y-3">
                <p className="text-[18px] font-medium text-[#636363]">
                  Call Us
                </p>
                <h1>+91 8000 000 275</h1>
              </div>
            </div>
          </div>
          <div className="mainContainer !mt-20 rounded-lg">
            <Fade
              delay={500}
              duration={1000}
              cascade
              damping={1e-1}
              triggerOnce
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.6849873330057!2d72.87502787603773!3d21.2443366803379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f9ffa9f6441%3A0xb48d642aea31c028!2sSatyam%20Photo%20Studio!5e0!3m2!1sen!2sin!4v1713862518695!5m2!1sen!2sin"
                allowFullScreen
                className="!w-[100%] h-[85vh] rounded-xl"
              ></iframe>
            </Fade>
          </div>
        </div>
      </div>
    );
}

export default Contact;