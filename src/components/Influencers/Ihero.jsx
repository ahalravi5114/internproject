const Ihero=()=> {
    return(
       <div className="mx-auto text-white bg-black 2xl:container">
       <div className="w-[97%] mx-auto flex flex-cols p-[20px]">
         <div className="flex flex-col items-start pb-20 pl-20 mt-10 mr-50 gap-y-7">
           <div>
             <p className="flex p-5 text-black bg-white border border-violet-600 rounded-3xl h-[30px] justify-center items-center font-semibold text-xl">For Influencers
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
  
  export default Ihero;