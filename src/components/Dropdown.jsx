//import React from 'react'

const Dropdown = () => {
  return (
    <div className="2xl:container mx-auto">
        <div className="w-[70%] mx-auto grid grid-cols-2 absolute bg-white shadow-xl rounded-xl p-5 gap-3 space-y-3">
           <div className="flex gap-3 border border-gray-400 p-2 rounded-xl">
            <div>
                <img src="https://ik.imagekit.io/varsh0506/Internship/team.png?updatedAt=1726942858566" className="h-20"></img>
            </div>
            <div className="space-y-3">
                <h2 className="font-bold">Advanced creator discovery</h2>
                <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit amet.</p>
            </div>
           </div>
           <div className="flex gap-3 border border-gray-400 p-2 rounded-xl">
            <div>
                <img src="https://ik.imagekit.io/varsh0506/Internship/certificate.png?updatedAt=1726942858555" className="h-20"></img>
            </div>
            <div className="space-y-3">
                <h2 className="font-bold">Creator Authority Score</h2>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet.</p>
            </div>
           </div>
           <div className="flex gap-3 border border-gray-400 p-2 rounded-xl">
            <div>
                <img src="https://ik.imagekit.io/varsh0506/Internship/idea.png?updatedAt=1726942858665" className="h-20"></img>
            </div>
            <div className="space-y-3">
                <h2 className="font-bold">Creator audience insights</h2>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet.</p>
            </div>
           </div>
           <div className="flex gap-3 border border-gray-400 p-2 rounded-xl">
            <div>
                <img src="https://ik.imagekit.io/varsh0506/Internship/growth.png?updatedAt=1726942858717" className="h-20"></img>
            </div>
            <div className="space-y-3">
                <h2 className="font-bold">Campaign Reports</h2>
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet.</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Dropdown