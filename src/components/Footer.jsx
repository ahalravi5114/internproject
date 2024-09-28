const Footer = () => {
    return (
      <footer className="py-10 px-6 text-gray-300 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-[#5151d6] p-2 rounded-full">
                <span className="material-symbols-outlined">search</span>
              </div>
              <h2 className="font-bold text-xl">BigLinkz</h2>
            </div>
            <p className="mb-6 w-[55%]">
              BigLinkz is an influencer marketing and intelligence platform that enables superior influencer discovery, quick and easy influencer outreach.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#5151d6]">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#5151d6]">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#5151d6]">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#5151d6]">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#5151d6]">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
  
          <div className="px-25 md:col-span-1">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  For Brands
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  For Agencies
                </a>
              </li>
            </ul>
          </div>
  
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Book a Demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Terms of Use - Brands
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Terms of Use - Influencers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
  
          <div className="md:col-span-1">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Top Influencers Lists
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Insight & Trends
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Comparison
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Free Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#5151d6]">
                  Agency Partnership
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;