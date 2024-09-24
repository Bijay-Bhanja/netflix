import videoTv from "../assets/video-tv-in-0819.m4v"

import destop from "../assets/destop.png"
const TV = () => {
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
                            <video className="absolute w-[80%] bottom-[20%] left-[10%] z-[1]" autoplay>
                                <source src={videoTv} />
                            </video>
                            <img src={destop} alt="" className="relative z-[2]" />
                        </figure>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default TV