//import React from 'react'

const Bhero=()=> {
    return(
       <div className="mx-auto 2xl:container bg-black text-white">
       <div className="w-[97%] mx-auto flex flex-cols p-[20px]">
         <div className="flex flex-col items-start pl-20 mt-10 mr-50 gap-y-7 pb-20">
           <div>
             <p className="flex p-5 text-black bg-white border border-violet-600 rounded-3xl h-[30px] justify-center items-center font-semibold text-xl">For Brands
             </p>
           </div>
           <div>
             <p className="font-sans text-[40px] font-bold">Creator marketing tools & <br></br>intelligence for brand growth</p>
           </div>
           <div>
             <p className="text-lg text-gray-300">
             Have an end to end control throughout your creator marketing campaign with our creator marketing platform. Plan, Launch, Measure & Optimize your campaigns at scale
             </p>
           </div>
           <div className="flex gap-x-5">
           <button className="flex items-center justify-center p-3 px-10 font-bold text-white bg-[#5151d6] border border-[#5151d6] rounded-xl hover:bg-[#3f3fa8]">
             Request For  Demo
             <span className="material-symbols-outlined">north_east</span>
           </button>
           <button className="flex items-center justify-center p-3 px-10 font-bold text-[#5151d6] border border-[#5151d6] bg-blue-50 rounded-xl hover:text-[#3f3fa8]">
             Try For Free
             <span className="material-symbols-outlined">north_east</span>
           </button>
           
           </div>
         </div>
       </div>
     </div>
    );
}

export default Bhero;