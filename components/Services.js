import React from 'react';

const ServiceCard = ({ imageSrc, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-56 object-contain "
        src={imageSrc}
        alt={title}
      />
      <div className="p-4">
        <h3 className="text-xl  font-bold text-gray-900">{title}</h3>
        <p className="mt-2   text-lg text-black">{description}</p>
      </div>
    </div>
  );
};

const OurServices = () => {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className=" ">
        {/* Top section */}
        <div className="text-center">
          <h2 className="text-6xl font-extrabold text-black ">
            Our Services
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-3xl text-black">
            Insert your description here about the services your company offers.
          </p>
        </div>

        {/* Middle section */}
        <div className="mt-12">
          <div className="grid grid-cols-1 p-5 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <ServiceCard
              imageSrc="images/testtube.jpg" // Replace with the actual path to the image for Service 1
              title="SOIL AND WATER TESTING"
              description="Our Lab provide facility to Farmers for testing and Analysis of their soil"
            />

            {/* Service 2 */}
            <ServiceCard
              imageSrc="images/sampling.png" // Replace with the actual path to the image for Service 2
              title="SOIL AND WATER SAMPLING"
              description="It is a long established fact that a reader will be distracted by the"
            />

            {/* Service 3 */}
            <ServiceCard
              imageSrc="images/advice.png" // Replace with the actual path to the image for Service 3
              title="GUIDANCE AND
              ADVICE"
              description="As proper guidance is very important for Farmers, So we give advice according to the soil reports
              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
