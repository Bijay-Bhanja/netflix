import React from 'react'

const FrequentlyAskedQuestion = () => {
    let drawer=()=>{
        let allQuestion=document.querySelectorAll(".faQuestion")
        allQuestion.forEach((v,index)=>{
            v.addEventListener('click',()=>{
                v.nextElementSibling.classList.toggle("h-[auto]")
                v.nextElementSibling.classList.toggle("scale-y-100")
                v.nextElementSibling.classList.toggle("p-[20px]")

                v.children[1].classList.toggle("rotate-45")

                allQuestion.forEach((el,i)=>{
                    if(i!==index){
                        el.nextElementSibling.classList.remove("h-[auto]","scale-y-100","p-[20px]")
                        el.children[1].classList.remove("rotate-45")
                    }
                })
            })
        })
    }
    return (
        <div>
            <section className="w-[100%] bg-[black] border-t-[8px] border-t-[#605d5d] sm:py-[80px] py-[50px]">
                <div className="max-w-[1170px] mx-auto px-[15px]">
                    <h2 className="sm:text-[50px] text-[40px] font-bold text-white text-center">Frequently Asked Questions</h2>

                    <div className="py-[30px]">
                        <div className="bg-[#2d2d2d]">
                            <div className="p-[20px] text-white sm:text-[30px] text-[20px] relative border-b-[20px] border-[black] hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer faQuestion" onClick={drawer}>
                                <h3>What is Netflix?</h3>
                                <span className="absolute right-[20px] top-[15px]">+</span>
                            </div>
                            <div className="text-white text-[20px] mb-[5px] scale-y-0 h-[0px] origin-top duration-300">
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                            </div>
                        </div>

                        <div className="bg-[#2d2d2d]">
                            <div className="p-[20px] text-white sm:text-[30px] text-[20px] relative border-b-[20px] border-[black] hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer faQuestion" onClick={drawer}>
                                <h3>How much does Netflix cost?</h3>
                                <span className="absolute right-[20px] top-[15px]">+</span>
                            </div>
                            <div className="text-white text-[20px] mb-[5px] scale-y-0 h-[0px] origin-top duration-300">
                                <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>

                            </div>
                        </div>

                        <div className="bg-[#2d2d2d]">
                            <div className="p-[20px] text-white sm:text-[30px] text-[20px] relative border-b-[20px] border-[black] hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer faQuestion" onClick={drawer}>
                                <h3>Where can I watch?</h3>
                                <span className="absolute right-[20px] top-[15px]">+</span>
                            </div>
                            <div className="text-white text-[20px] mb-[5px] scale-y-0 h-[0px] origin-top duration-300">
                                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                                <p>You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                            </div>
                        </div>

                        <div className="bg-[#2d2d2d]">
                            <div className="p-[20px] text-white sm:text-[30px] text-[20px] relative border-b-[20px] border-[black] hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer faQuestion" onClick={drawer}>
                                <h3>How do I cancel?</h3>
                                <span className="absolute right-[20px] top-[15px]">+</span>
                            </div>
                            <div className="text-white text-[20px] mb-[5px] scale-y-0 h-[0px] origin-top duration-300">
                                <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>

                            </div>
                        </div>

                        <div className="bg-[#2d2d2d]">
                            <div className="p-[20px] text-white sm:text-[30px] text-[20px] relative border-b-[20px] border-[black] hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer faQuestion" onClick={drawer}>
                                <h3>What can I watch on Netflix?</h3>
                                <span className="absolute right-[20px] top-[15px]">+</span>
                            </div>
                            <div className="text-white text-[20px] mb-[5px] scale-y-0 h-[0px] origin-top duration-300">
                                <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>

                            </div>
                        </div>

                        <div className="bg-[#2d2d2d]">
                            <div className="p-[20px] text-white sm:text-[30px] text-[20px] relative border-b-[20px] border-[black] hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer bg-[#2d2d2d] faQuestion" onClick={drawer}>
                                <h3>Is Netflix good for kids?</h3>
                                <span className="absolute right-[20px] top-[15px]">+</span>
                            </div>
                            <div className="text-white text-[20px] mb-[5px] scale-y-0 h-[0px] origin-top duration-300 bg-[#2d2d2d]">
                                <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                                <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>

                            </div>
                        </div>
                    </div>

                    <p className="text-[20px] py-[15px] text-white text-center">Ready to watch?Enter your email to create or restart your membership.</p>
                    <div className="max-w-[700px] px-[40px] mx-auto mt-[30px]">
                        <form action="" className="grid sm:grid-cols-[70%_auto] grid-cols-1 gap-[20px]">
                            <input type="text" className="outline-none border-[1px] h-[50px] border-[#ccc] bg-[transparent] pl-[20px] text-white" placeholder="Email Address"/>
                                <button className="bg-[red] px-[10px] rounded-[5px] text-white py-[7px] hover:bg-[rgb(193,17,25)] duration-300 text-[20px]">Get Started</button>
                        </form>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default FrequentlyAskedQuestion