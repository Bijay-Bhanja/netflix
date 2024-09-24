import React from 'react'
import children from "../assets/children.png"
const CreateProfile = () => {
  return (
    <div>
        <section className="w-[100%] border-t-[8px] border-t-[#605d5d] bg-[black] sm:py-[50px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
            <div className="grid sm:grid-cols-2 grid-cols-1 text-white items-center">
                <figure className="relative sm:order-1 order-2">
                    <img src={children} alt=""/>
                </figure>
                <div className="sm:order-2 order-1">
                    <h2 className="sm:text-[50px] text-[40px] font-bold">Create profiles for kids</h2>
                    <p className="sm:text-[25px] text-[20px] pt-[30px]">Send children on adventures with their favourite characters in a space made just for them-free with your membership.</p>
                </div>
            </div>
        </div>
     </section>
    </div>
  )
}

export default CreateProfile