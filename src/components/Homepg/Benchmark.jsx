const Benchmark = () => {
    return (
      <div className="mx-auto 2xl:container">
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 p-[20px]  border border-[#5151d6] mt-10 pl-10 rounded-xl">
          <div className="flex flex-col items-start mt-3 gap-y-7">
            <div>
              <p className="flex p-3 text-white bg-[#5151d6] rounded-3xl h-[30px] justify-center items-center ">
                New<span className="material-symbols-outlined">star</span>
              </p>
            </div>
            <div>
              <p className="font-sans text-4xl font-bold leading-30">Assess Your Standing in the Market</p>
            </div>
            <div>
              <p className="text-lg text-gray-500 leading-50">
              With Biglinkz, you can thoroughly evaluate your market standing and gain essential insights into industry trends. This empowers you to make informed decisions that drive growth, enhance your brand's influence, and effectively connect with the right influencers for your campaigns.
              </p>
            </div>
            <div>
              <button className="md:flex items-center justify-center font-semibold text-white bg-[#5151d6] hover:bg-[#3f3fa8] rounded-xl h-[50px] p-2 hidden">
                View Sample Report<span className="material-symbols-outlined">north_east</span>
              </button>
            </div>
          </div>
          <div>
            <img src="https://ik.imagekit.io/varsh0506/Internship/160509066-businessman-office-worker-character-running-to-success-income-money-win-vector-concept-flat-graphic.jpg?updatedAt=1727034569960" alt="image" />
          </div>
        </div>
      </div>
    );
  };
export default Benchmark;