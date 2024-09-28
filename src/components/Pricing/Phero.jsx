const Phero=()=>{
    return (
      <div className="flex flex-col mx-auto pt-20 2xl:container bg-black text-white">
        <div className="flex items-center justify-center ">
          <button className="flex items-center mt-8 justify-center p-2 text-sm font-semibold border border-white rounded-3xl hover:text-[#5151d6] gap-x-2">
            Rated 4.5 <span className="material-symbols-outlined">star</span> on G2 Crowd <span className="material-symbols-outlined">arrow_outward</span>
          </button>
        </div>
        
        <div className="flex items-center justify-center">
          <p className="font-sans text-3xl md:text-5xl font-bold leading-[50px] md:leading-[70px] text-center">Find your Perfect plan</p>
        </div>
        <div className="flex items-center justify-center mb-28">
          <p className="text-center w-[90%] md:w-[58%] ">
            Sign up for free to get started with all products. Credits can be spent on any product, including creator analytics, creator contacts, and reporting.
          </p>
        </div>
        </div>
        );
}
export default Phero;