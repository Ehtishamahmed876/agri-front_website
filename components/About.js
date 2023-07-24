import React from 'react';

const AboutUs = () => {
  return (
    <div className=" py-12 px-4   sm:px-6 lg:p-36 flex flex-col gap-5 lg:flex-row items-center">
      {/* Left side with content */}
      <div className="lg:w-1/2 flex flex-col gap-10 ">
        <h2 className="text-5xl font-extrabold text-gray-900 ">
          About Us
        </h2>
        <p className=" max-w-3xl text-lg  text-black">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
        </p>
        <button className=" w-72 text-xl bg-red-400 border border-transparent rounded-md p-5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Learn More
        </button>
      </div>

      {/* Right side with the big rounded image */}
      <div className="mt-10 lg:mt-0 lg:w-1/2">
        <img
          className="w-full h-full object-cover object-center rounded-full"
          src="images/lab.png" // Replace with the actual path to your image
          alt="About Us"
        />
      </div>
    </div>
  );
};

export default AboutUs;
