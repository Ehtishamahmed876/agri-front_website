import React from 'react';

const Footer = () => {
  return (
    <footer className="">
      <div className="h-56  bg-blue-900 text-white py-20 px-8 sm:px-6 lg:px-16 ">
        {/* First column */}
        <div className="flex  gap-6 mb-8">
          {/* First div */}
          <div className="w-full md:w-1/3">
            <img
              className="w-12 h-12 object-cover object-center inline-block"
              src="images/map-icon.png" // Replace with the actual path to the address icon
              alt="Address"
            />
            <p className="inline-block ml-2">
              Your Address Here
            </p>
          </div>

          {/* Second div */}
          <div className="w-full md:w-1/3">
            <img
              className="w-12 h-12 object-cover object-center inline-block"
              src="images/call-icon.png" // Replace with the actual path to the phone icon
              alt="Phone"
            />
            <p className="inline-block ml-2">
              Your Phone Number Here
            </p>
          </div>

          {/* Third div */}
          <div className="w-full md:w-1/3">
            <img
              className="w-12 h-12 object-cover object-center inline-block"
              src="images/mail-icon.png" // Replace with the actual path to the email icon
              alt="Email"
            />
            <p className="inline-block ml-2">
              Your Email Here
            </p>
          </div>
        </div>

        {/* Second column */}
      
      </div>
      <div className="text-center bg-orange-600  h-12 flex flex-co justify-center items-center">
          <p className="text-gray-300">All Rights Reserved &copy; {new Date().getFullYear()}</p>
        </div>
    </footer>
  );
};

export default Footer;
