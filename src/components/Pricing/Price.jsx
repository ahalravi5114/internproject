import { useState } from 'react';

const Price = () => {
  const [activeTab, setActiveTab] = useState('Qoruz Flex');

  return (
    <div className="flex flex-col items-center min-h-screen py-10 mt-24 text-white bg-black">
      <div className="flex mb-8 space-x-4">
        <button
          className={`py-2 px-4 text-xl rounded-xl ${activeTab === 'Qoruz Flex' ? 'bg-[#5151d6] text-white' : 'bg-transparent text-white hover:bg-[#3636b8]'}`}
          onClick={() => setActiveTab('Qoruz Flex')}
        >
          BiglLinkz Flex
        </button>
        <button
          className={`py-2 px-4 text-xl rounded-xl ${activeTab === 'Qoruz Brain' ? 'bg-[#5151d6] text-white' : 'bg-transparent text-white hover:bg-[#3636b8]'}`}
          onClick={() => setActiveTab('Qoruz Brain')}
        >
          BiglLinkz Brain
        </button>
      </div>

      <h1 className="mb-4 text-lg text-center">
        BiglLinkz Flex: Everything You Need to Run Complex Creator Programs at Scale.<br /> For Marketers & Agencies.
      </h1>

      <div className="flex flex-wrap justify-center md:space-x-8">
        {activeTab === 'Qoruz Flex' && (
          <div className="bg-[#0d0d20] p-6 rounded-lg w-full md:w-80 mb-4 border border-[#5151d6] flex flex-col">
            <h2 className="mb-2 text-2xl font-bold">Free</h2>
            <p className="mb-4 text-sm">For Freelancers And Small Agencies</p>
            <p className="mb-2">Free plan includes:</p>
            <ul className="mb-4">
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Creator Search</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Creator Insights (Basic)</li>
              <li className="flex items-center"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Content Inspiration</li>
            </ul>
            <button className="flex items-center justify-center px-4 py-2 mt-auto text-black font-bold bg-[#5151d6] rounded-full">
              Get Started for Free <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        )}

        {(activeTab === 'Qoruz Flex' || activeTab === 'Qoruz Brain') && (
          <div className="bg-[#12122c] p-6 rounded-lg w-full md:w-80 mb-4 border border-[#5151d6] flex flex-col">
            <h2 className="mb-2 text-2xl font-bold">Premium</h2>
            <p className="mb-4 text-sm">For D2C And Agencies</p>
            <p className="mb-2">Everything on Free plus:</p>
            <ul className="mb-4">
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Advanced Filters & Audience Based Search</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Historical Cost</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Pre-Curated List & Brand Analysis</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Costing Insights</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Open Access To Influencer Database</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Campaign Reports</li>
            </ul>
            <button className="flex items-center justify-center px-4 py-2 mt-auto text-white font-bold bg-[#5151d6] rounded-full">
              Book a Demo <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        )}

        {(activeTab === 'Qoruz Flex' || activeTab === 'Qoruz Brain') && (
          <div className="bg-[#0d0d20] p-6 rounded-lg w-full md:w-80 mb-4 border border-[#5151d6] flex flex-col">
            <h2 className="mb-2 text-2xl font-bold">Enterprise</h2>
            <p className="mb-4 text-sm">Tailored For Top Brands Or Agencies</p>
            <p className="mb-2">Everything on Premium plus:</p>
            <ul className="mb-4">
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Role-Based Access</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Volume Based Discount</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Training Of The Platform For The Users</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Dedicated Customer Success Manager</li>
            </ul>
            <button className="flex items-center justify-center px-4 py-2 mt-auto text-black font-bold bg-[#5151d6] rounded-full">
              Book a Demo <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

export default Price;


/*import { useState } from 'react'; 

const Price = () => {
  const [activeTab, setActiveTab] = useState('BigLinkz Flex');

  return (
    <div className="flex flex-col items-center min-h-screen py-10 mt-10 bg-gradient-to-b from-[#f0f0ff] to-[#e6e6f7] shadow-xl border border-[#b3b3ff] rounded-xl w-[90%] mx-auto p-8" id="price"> 
      <div className="flex mb-8 space-x-4">
        <button
          className={`py-2 px-4 text-xl rounded-xl ${activeTab === 'BigLinkz Flex' ? 'bg-[#5151d6] text-white' : 'bg-transparent text-black hover:bg-[#3f3fa8] hover:text-white'}`}
          onClick={() => setActiveTab('BigLinkz Flex')}
        >
          BigLinkz Flex
        </button>
        <button
          className={`py-2 px-4 text-xl rounded-xl ${activeTab === 'BigLinkz Brain' ? 'bg-[#5151d6] text-white' : 'bg-transparent text-black hover:bg-[#3f3fa8] hover:text-white'}`}
          onClick={() => setActiveTab('BigLinkz Brain')}
        >
          BigLinkz Brain
        </button>
      </div>

      <h1 className="mb-4 text-lg text-center text-[#333]">
        BigLinkz Flex: Everything You Need to Run Complex Creator Programs at Scale.<br /> For Marketers & Agencies.
      </h1>

      <div className="flex flex-wrap justify-center md:space-x-8">
        {activeTab === 'BigLinkz Flex' && (
          <div className="bg-[#0d0d20] p-6 rounded-lg w-full md:w-80 mb-4 border border-[#5151d6] flex flex-col shadow-lg">
            <h2 className="mb-2 text-2xl font-bold">Free</h2>
            <p className="mb-4 text-sm">For Freelancers And Small Agencies</p>
            <p className="mb-2">Free plan includes:</p>
            <ul className="mb-4">
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Creator Search</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Creator Insights (Basic)</li>
              <li className="flex items-center"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Content Inspiration</li>
            </ul>
            <button className="flex items-center justify-center px-4 py-2 mt-auto text-black font-bold bg-[#5151d6] rounded-full">
              Get Started for Free <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        )}

        {(activeTab === 'BigLinkz Flex' || activeTab === 'BigLinkz Brain') && (
          <div className="bg-[#12122c] p-6 rounded-lg w-full md:w-80 mb-4 border border-[#5151d6] flex flex-col shadow-lg">
            <h2 className="mb-2 text-2xl font-bold">Premium</h2>
            <p className="mb-4 text-sm">For D2C And Agencies</p>
            <p className="mb-2">Everything on Free plus:</p>
            <ul className="mb-4">
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Advanced Filters & Audience Based Search</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Historical Cost</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Pre-Curated List & Brand Analysis</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Costing Insights</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Open Access To Influencer Database</li>
              <li className="flex items-center mb-2"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Campaign Reports</li>
            </ul>
            <button className="flex items-center justify-center px-4 py-2 mt-auto text-white font-bold bg-[#5151d6] rounded-full">
              Book a Demo <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        )}

        {(activeTab === 'BigLinkz Flex' || activeTab === 'BigLinkz Brain') && (
          <div className="bg-[#0d0d20] p-6 rounded-lg w-full md:w-80 mb-4 border border-[#5151d6] flex flex-col shadow-lg">
            <h2 className="mb-2 text-2xl font-bold">Enterprise</h2>
            <p className="mb-4 text-sm">Tailored For Top Brands Or Agencies</p>
            <p className="mb-2">Everything on Premium plus:</p>
            <ul className="mb-4">
              <li className="flex items-center"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Role-Based Access</li>
              <li className="flex items-center"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Volume Based Discount</li>
              <li className="flex items-center"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Training Of The Platform For The Users</li>
              <li className="flex items-center"><span className="text-[#5151d6] material-symbols-outlined">check_circle</span>Dedicated Customer Success Manager</li>
            </ul>
            <button className="flex items-center justify-center px-4 py-2 mt-auto text-black font-bold bg-[#5151d6] rounded-full">
              Book a Demo <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        )}
      </div>

    </div>
  );
}

export default Price;*/
