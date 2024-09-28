import { useState } from "react";

export const Hero = () => {

  const [media,setMedia]= useState({img:"https://ik.imagekit.io/varsh0506/Internship/instagram.png?updatedAt=1726943292562",
    name:"Instagram",
  });

  return (
    <div className="flex flex-col items-center justify-center mx-auto 2xl:container gap-y-10 bg-black text-white" id="hero">
      <div>
        <button className="flex items-center mt-10 justify-center p-2 text-sm font-semibold border border-orange-100 rounded-3xl hover:text-[#5151d6] gap-x-2">
          Rated 4.5 <span className="material-symbols-outlined">star</span>on G2
          Crowd <span className="material-symbols-outlined">arrow_outward</span>
        </button>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-5xl leading-[70px] font-bold text-center w-[70%]">
        Unleash the Power of <span className="text-[#5151d6]">Influencer Marketing:</span> Elevate Your Brand, Amplify Your Reach
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-center w-[70%] ">
        Biglinkz empowers brands to connect with influencers, creating authentic campaigns that boost visibility and drive engagement. Elevate your brand’s presence and reach new audiences through seamless collaboration and impactful marketing.
        </p>
      </div>
      <div className="md:flex items-start justify-between p-3 border border-white rounded-xl w-[60%] hidden text-black">
        <div>
          <button
            className="flex items-center justify-center  bg-gray-100 gap-x-2 rounded-3xl h-[40px] w-[150px]"
            onClick={() => {
              document.getElementById("drop").classList.toggle("hidden");
            }}
          >
            <span>
              <img
                className="h-[20px] "
                src={media.img}
              ></img>
            </span>
            {media.name}
            <span className="text-black material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </button>
          <div
            className=" hidden absolute m-4 rounded-xl bg-gray-200 space-y-3 w-fit p-3 shadow-2xl"
            id="drop"
          >
            <div className="rounded-xl hover:border hover:border-gray-500 ">
              <button className="flex gap-3 p-3 " onClick={()=>{
                setMedia({
                  img: "https://ik.imagekit.io/varsh0506/Internship/instagram.png?updatedAt=1726943292562",
                  name: "Instagram",
                })
              }}>
                <img
                  className="h-7"
                  src="https://ik.imagekit.io/varsh0506/Internship/instagram.png?updatedAt=1726943292562"
                ></img>
                Instagram
              </button>
            </div>
            <div  className="rounded-xl hover:border hover:border-gray-500 ">
              <button className=" flex gap-3 p-3"  onClick={()=>{
                  setMedia({
                    img: "https://ik.imagekit.io/varsh0506/Internship/youtube.png?updatedAt=1726943316386",
                    name: "Youtube",
                  })
              }}>
                < img
                  className="h-7"
                  src="https://ik.imagekit.io/varsh0506/Internship/youtube.png?updatedAt=1726943316386"
                ></img>
                Youtube
              </button>
            </div>
            <div  className="rounded-xl hover:border hover:border-gray-500 ">
              <button className="flex gap-3 p-3"  onClick={()=>{
                setMedia({
                  img: "https://ik.imagekit.io/varsh0506/Internship/facebook.png?updatedAt=1726943316345",
                  name: "Facebook",
                })
              }}>
                <img
                  className="h-7"
                  src="https://ik.imagekit.io/varsh0506/Internship/facebook.png?updatedAt=1726943316345"
                ></img>
                Facebook
              </button>
            </div>
            <div  className="rounded-xl hover:border hover:border-gray-500 ">
              <button className="flex gap-3 p-3"  onClick={()=>{
               setMedia({
                img: "https://ik.imagekit.io/varsh0506/Internship/twitter.png?updatedAt=1726943316383",
                name: "Twitter",
              })
              }}>
                <img
                  className="h-7"
                  src="https://ik.imagekit.io/varsh0506/Internship/twitter.png?updatedAt=1726943316383"
                ></img>
                Twitter
              </button>
            </div>
          </div>
        </div>
        <div className="hidden mt-2 md:flex">
          <input placeholder="Start by Searching . . ." className="text-white"/>
        </div>
        <div>
          <button className="px-2 py-1 text-center text-white bg-[#5151d6] rounded-3xl ">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
      <div>
        <button className="flex items-center mb-4 justify-center p-2 border border-[#5151d6] hover:shadow-xl rounded-2xl hover:text-[#5151d6]">
          <span className="text-[#5151d6] material-symbols-outlined">
            play_arrow
          </span>
          See how it works
        </button>
      </div>
    </div>
  );
};
