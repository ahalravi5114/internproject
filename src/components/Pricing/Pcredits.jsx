import React from 'react';

function Pcredits() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20">
        <p className="font-sans text-3xl md:text-4xl font-bold text-center">More Power with Credits</p>
        <p className="text-center mt-4">
          Credits can be spent on any product, including lead lists, technology lookups, and APIs.
        </p>
      </div>

      <div className="flex flex-col md:flex-row mt-10 items-start justify-center">
        <div className="w-full md:w-2/3 border border-[#5151d6] rounded-2xl p-4 gap-x-16" id="credits">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="w-full md:w-1/2">
              <table className="w-full table-auto">
                <tbody>
                  {[
                    { label: 'For Creator analytics', value: '1 Credit / valid for 30 days' },
                    { label: 'For Creator contact or cost', value: '1 Credit' },
                    { label: 'For Message or first interaction', value: '1 Credit / creator' },
                    { label: 'For Media planner', value: '1 Credit / for directly adding creators' },
                    { label: 'For Creator comparison', value: '1 Credit / per creator valid up to 30 days' },
                    { label: 'For Reports', value: '1 Credit / creator for one report' },
                    { label: 'For Competitor intelligence', value: '1 Credit / for 5 posts tracked' },
                  ].map((item, index) => (
                    <tr key={index}>
                      <td className="py-2 px-2">{item.label}</td>
                      <td className="py-2 px-2">
                        <span className="text-indigo-600 font-semibold">1 Credit</span>{' '}
                        <span className="font-normal">{item.value.substring(9)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="w-full md:w-1/2 ">
              <img
                src="https://ik.imagekit.io/zcdsz07ad/BigLinkz/pricingmain.png?updatedAt=1727156264154"
                alt="Pricing Image"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pcredits;
