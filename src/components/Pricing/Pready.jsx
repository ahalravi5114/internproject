import React from 'react';

function Pready(){
    return(
        <div className="mx-auto bg-[#c0c0f6]  2xl:container h-[50%] text-black">
        <div className="flex justify-center items-center p-[30px] rounded-xl flex-col gap-y-6">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl md:text-4xl font-bold w-[90%] md:w-[80%] mt-5 text-center pt-2">Ready to Take Your Creator Marketing To the Next Level?</h2>
          </div>
          <div>
            <p className="text-gray-600 text-center">
              Launch your creator marketing campaigns using the largest creator database, 
              deep audience analytics and competitor analysis.
            </p>
          </div>
          <div>
            <button className="flex gap-2 p-3 font-semibold text-white bg-[#5151d6] hover:bg-[#3f3fa8] rounded-xl">
              Request For Demo<span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        </div>
      </div>
    );
}
export default Pready;