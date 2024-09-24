import netflixlogo from "../assets/netflixlogo.png"
import netflixHome from "../assets/netflixHome.jpg"
const Banner = () => {
    return (
        <div>
            <section
                className="w-[100%] h-[100vh] bg-center bg-cover"
                style={{ backgroundImage: `url(${netflixHome})` }}  
            >

                <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
                    <header className="max-w-[1170px] mx-auto">
                        <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] items-center">
                            <figure>
                                <img src={netflixlogo} alt="" className="w-[148px]" />
                            </figure>
                            <div className="flex justify-end gap-[10px]">
                                <div className="relative">


                                    <select name="" id="" className="bg-[black] text-white border-[1px] border-[white] sm:p-[5px_25px] p-[5px_20px] rounded-[5px]">
                                        <option value="">English</option>
                                        <option value="">Hindi</option>
                                    </select>
                                </div>
                                <button className=" px-[10px] bg-[red] rounded-[5px] text-white">Sign In</button>
                            </div>
                        </div>
                    </header>
                    <div className="max-w-[1170px] mx-auto sm:py-[150px] py-[50px] text-center text-white">
                        <h1 className="sm:text-[50px] font-bold text-[30px]">Unlimited movies, TV shows and more</h1>
                        <h4 className="text-[25px] py-[20px]">Watch anywhere, Cancel anytime.</h4>
                        <p className="text-[20px] py-[15px]">Ready to watch?Enter your email to create or restart your membership.</p>
                        <div className="max-w-[700px] px-[40px] mx-auto mt-[30px]">
                            <form action="" className="grid sm:grid-cols-[70%_auto] grid-cols-1 gap-[20px]">
                                <input type="text" className="outline-none border-[1px] h-[50px] border-[#ccc] bg-[transparent] pl-[20px]" placeholder="Email Address" />
                                <button className="bg-[red] px-[10px] rounded-[5px] text-white py-[7px] hover:bg-[rgb(193,17,25)] duration-300 text-[20px]">Get Started</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Banner