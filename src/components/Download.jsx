import girl from "../assets/girl.jpg"
import stranger from "../assets/stranger.png"
import download from "../assets/download-icon.gif"
const Download = () => {
    return (
        <div>
            <section className="w-[100%] border-t-[8px] border-t-[#605d5d] bg-[black] sm:py-[50px] py-[70px]">
                <div className="max-w-[1170px] mx-auto px-[15px]">
                    <div className="grid sm:grid-cols-2 grid-cols-1 text-white items-center">
                        <figure className="relative sm:order-1 order-2">
                            <img src={girl} alt="" />
                            <div className="sm:w-[60%] w-[90%] absolute sm:left-[20%] left-[5%] items-center border-[1px] border-[#ccc] bottom-[0px] grid grid-cols-[70%_auto] bg-[black] rounded-[10px]">
                                <div className="grid grid-cols-[25%_auto] p-[10px] gap-[10px] items-center">
                                    <img src={stranger} className="m-[2px]" alt="" />
                                    <div className="text-white">
                                        <h3 className="font-bold text-[14px]">Stranger Things</h3>
                                        <span className="text-[blue]">Downloading...</span>
                                    </div>
                                </div>
                                <div>
                                    <img src={download} alt="" className="w-[50px]" />
                                </div>
                            </div>
                        </figure>
                        <div className="sm:order-2 order-1">
                            <h2 className="sm:text-[50px] text-[40px] font-bold sm:leading-[65px] leading-[50px]">Download your shows to watch offline</h2>
                            <p className="sm:text-[25px] text-[20px] pt-[30px]">Save your favourites easily and always have something to watch.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Download