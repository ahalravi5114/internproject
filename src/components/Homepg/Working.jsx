//import React from 'react'
import { useState } from "react";

const Working = () => {
  const [content, setContent] = useState({
    heading: "Design Targeted Campaigns to Elevate Your Brand",
    data: "Start by creating customized campaigns that align with your brand’s goals. Whether you’re aiming for product awareness, audience engagement, or conversions, Biglinkz provides easy-to-use tools to tailor your campaign objectives, select preferred demographics, and set a budget—all in just a few clicks.",
    image:
      "https://ik.imagekit.io/varsh0506/Internship/organic-flat-people-business-training-illustration.png?updatedAt=1726996141689",
  });

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-semibold text-center">
        How Biglinkz Works: Simplifying Influencer Marketing
      </h1>
      <div className="flex md:gap-20 justify-center items-center mt-10 gap-4">
        <div>
          <button
            className="border font-semibold p-3 border-[#605FFC] rounded-xl focus:text-white focus:bg-[#605FFC]"
            onClick={() => {
              setContent({
                heading: "Design Targeted Campaigns to Elevate Your Brand",
                data: "Start by creating customized campaigns that align with your brand’s goals. Whether you’re aiming for product awareness, audience engagement, or conversions, Biglinkz provides easy-to-use tools to tailor your campaign objectives, select preferred demographics, and set a budget—all in just a few clicks.",
                image:
                  "https://ik.imagekit.io/varsh0506/Internship/organic-flat-people-business-training-illustration.png?updatedAt=1726996141689",
              });
            }}
          >
            Create Campaigns
          </button>
        </div>
        <div>
          <button className="border font-semibold border-[#605FFC] p-3 rounded-xl focus:text-white focus:bg-[#605FFC]" onClick={() => {
              setContent({
                heading: "Discover the Right Influencers for Your Brand",
                data: "Biglinkz helps you connect with influencers who resonate with your target audience. Use advanced filters like niche, audience size, location, and engagement rate to find influencers who align perfectly with your brand values and campaign goals, ensuring an authentic and effective promotion.",
                image:
                  "https://ik.imagekit.io/varsh0506/Internship/search-concept-landing-page.png?updatedAt=1726996141758",
              });
            }}>
            Find Influencers
          </button>
        </div>
        <div>
          <button className="border font-semibold border-[#605FFC] p-3 rounded-xl focus:text-white focus:bg-[#605FFC]" onClick={() => {
              setContent({
                heading: "Manage Collaborations and Monitor Results in Real-Time",
                data: "Once your campaign is live, Biglinkz makes collaboration easy by facilitating communication and content approval. Monitor your campaign’s performance with real-time analytics, track engagement, conversions, and ROI, and make informed decisions for optimizing future campaigns.",
                image:
                  "https://ik.imagekit.io/varsh0506/Internship/Data_report-pana-removebg-preview.png?updatedAt=1726996153162",
              });
            }}>
            Collaborate and Track
          </button>
        </div>
      </div>
      <Section content={content} />
    </div>
  );
};

const Section = ({content}) => {
  return (
    <div className="2xl:container mx-auto flip-horizontal-bottom">
      <div
        className="w-[80%] rounded-xl mx-auto grid grid-cols-2 p-4 border border-[#605FFC] my-16"
        id="sections"
      >
        <div className="flex items-center justify-center">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-center">
              {content.heading}
            </h2>
            <p className="text-center text-gray-500">{content.data}</p>
          </div>
        </div>
        <div>
          <img src={content.image} className="w-[400px] h-[400px]"/>
        </div>
      </div>
    </div>
  );
};

export default Working;
