import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="w-[100%] bg-[black] border-t-[8px] border-t-[#605d5d] sm:py-[60px] py-[50px]">
        <div className="max-w-[1170px] mx-auto px-[15px]">
            <h3 className="text-[18px] text-[#ccc]">Questions? Call <a className="underline" href="tel-000-800-919-1694">000-800-919-1694</a></h3>

            <div className="py-[30px] grid sm:grid-cols-3 grid-cols-1">
                <div>
                    <ul className="text-[#ccc]">
                        <li className="mb-[10px]"><a className="underline" href="#">Faq</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Media Center</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Ways to Watch</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Cookie Preferences</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Speed Test</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="text-[#ccc]">
                        <li className="mb-[10px]"><a className="underline" href="#">Help Center</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Investor Relations</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Terms of Use</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Corporate Information</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Legal Notices</a></li>
                    </ul>
                </div>
                <div>
                    <ul className="text-[#ccc]">
                        <li className="mb-[10px]"><a className="underline" href="#">Account</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Jobs</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Privacy</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Contact Us</a></li>
                        <li className="mb-[10px]"><a className="underline" href="#">Only on Netflix</a></li>
                    </ul>
                </div>
            </div>
            <div className="relative">
                
                <select name="" id="" className="bg-[black] text-white border-[1px] border-[white] sm:p-[5px_25px] p-[5px_20px] rounded-[5px]">
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>
            </div>
            <h3 className="text-[#ccc] pt-[20px]">Netflix India</h3>
        </div>
     </footer>
    </div>
  )
}

export default Footer