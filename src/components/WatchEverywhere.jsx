import React from 'react'
import rajma from "../assets/rajma.png"
import videoDevices from "../assets/video-devices-in.m4v"
const WatchEverywhere = () => {
  return (
    <div>
        <section className="w-[100%] border-t-[8px] border-t-[#605d5d] bg-[black] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
            <div className="grid sm:grid-cols-2 grid-cols-1 text-white items-center">
                <div>
                    <h2 className="sm:text-[50px] text-[40px] font-bold">Enjoy on your TV</h2>
                    <p className="sm:text-[25px] text-[20px] pt-[30px]">Watch on smart TVs,PlayStatioin,Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <figure className="relative">
                    <video className="absolute w-[60%] bottom-[40%] left-[20%] z-[1]" autoplay>
                        <source src={videoDevices}/>
                    </video>
                    <img src={rajma} alt="" className="relative z-[2]"/>
                </figure>
            </div>
        </div>
     </section>
    </div>
  )
}

export default WatchEverywhere