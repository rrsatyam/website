"use client"
import { TeamData } from "@src/constant";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Fade } from "react-awesome-reveal";

const OurTeam = () => {
    return (
        <div className="mainContainer !my-[80px]">
            <h1 className="text-3xl lg:text-4xl text-center">Our Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10 !mt-20">
                <Fade delay={500} duration={2500} cascade damping={1e-1} triggerOnce>
                    {TeamData.map((val, index) => {
                        return (
                            <div key={index} className="teamCard space-y-3">
                                <div className="rounded-full w-[150px] h-[150px]">
                                    <img src={val.image} alt="teamImg" className="rounded-full transition-all ease-in-out duration-500" />
                                </div>
                                <div className="text-center space-y-3">
                                    <h1 className="text-[20px] transition-all ease-in-out duration-500">{val.name}</h1>
                                    <h3 className="text-md text-[--theme-red-color] transition-all ease-in-out duration-500">{val.details}</h3>
                                </div>
                                <div className="flex items-center space-x-4 transition-all ease-in-out duration-500">
                                    <FacebookIcon className="text-[20px]" />
                                    <TwitterIcon className="text-[20px]" />
                                    <LinkedInIcon className="text-[20px]" />
                                    <PinterestIcon className="text-[20px]" />
                                </div>
                            </div>
                        )
                    })}
                </Fade>
            </div>
        </div>
    )
}

export default OurTeam;