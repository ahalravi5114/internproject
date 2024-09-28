const Workspace = () => {
  return (
    <div className="mx-auto bg-[#c0c0f6] 2xl:container ">
      <div className="w-[80%] mx-auto flex justify-center items-center p-[30px] pl-10 rounded-xl flex-col gap-y-6">
        <div className="flex items-center justify-center">
          <h2 className="text-5xl font-bold w-[80%] mt-5 text-center pt-10">
            One Workspace for All Your Influencer Marketing Campaigns
          </h2>
        </div>
        <div>
          <p className="text-gray-600">
            Time for you to leverage influencer intelligence platform and launch
            your influencer marketing campaigns.
          </p>
        </div>
        <div>
          <button className="flex gap-2 p-3 font-semibold text-white bg-[#5151d6] hover:bg-[#3f3fa8] rounded-xl">
            Request For Demo
            <span className="material-symbols-outlined">arrow_outward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-2 gap-7">
          <div className="flex border border-gray-600 hover:shadow-2xl rounded-3xl hover:border-gray-600 hover:drop-shadow-xl">
            <button className="m-6">
              <div className="flex flex-col">
                <div className="flex justify-start">
                  <p className="mb-3 text-2xl font-semibold">Influencer <span className="material-symbols-outlined">
groups
</span></p>
                </div>
                <div className="">
                  <p className="text-gray-600">
                  Connect with the right brands that resonate with your values and audience, allowing you to elevate your influence and create impactful partnerships that drive engagement and growth.
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <span className="text-[#5151d6] material-symbols-outlined">
                  arrow_outward
                </span>
              </div>
            </button>
          </div>
          <div className="flex border border-gray-600 rounded-3xl hover:border-gray-600 hover:shadow-2xl hover:drop-shadow-xl">
            <button className="m-6">
              <div className="flex flex-col">
                <div className="flex justify-start">
                  <p className="mb-3 text-2xl font-semibold">Brands <span className="material-symbols-outlined">
apartment
</span></p>
                </div>
                <div>
                  <p className="text-gray-600">
                  Partner with authentic influencers who align with your brand's vision and goals, ensuring impactful campaigns that resonate with your target audience and drive meaningful engagement.
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <span className="text-[#5151d6] material-symbols-outlined">
                  arrow_outward
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workspace;
