import React from 'react';

const OurPhilosophy = () => {
  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto">
        {/* Top section */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-extrabold text-black ">
            Our Philosophy
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-3xl text-black">
            Insert your philosophy description here. You can describe your
            principles, values, and beliefs as a company.
          </p>
        </div>

        {/* Middle section */}
        <div className="flex    m-10 mb-12 gap-4">
        

          {/* Div with tags */}
          <div className="border flex-1  border-gray-400 px-12  rounded-md flex flex-col ">
            <div className="flex items-center p-3 gap-5  mt-5">
              <div className="bg-red-500 rounded-lg text-white   w-16 h-16 flex items-center justify-center mr-3 ">
                01
              </div>
              <p className='text-black text-2xl'>Quick in Response</p>
            </div>
            <div className="flex items-center p-3 gap-5">
              <div className="bg-red-500 rounded-lg text-white   w-16 h-16 flex items-center justify-center mr-3">
                02
              </div>
              <p className='text-black text-2xl'>Satisfaction Guarantee</p>
            </div>
            <div className="flex items-center p-3 gap-5">
              <div className="bg-red-500 rounded-lg text-white   w-16 h-16 flex items-center justify-center mr-3">
                03
              </div>
              <p className='text-black text-2xl'>Expert & Professional</p>
            </div>
            <div className="flex items-center p-3 gap-5">
              <div className="bg-red-500 rounded-lg text-white   w-16 h-16 flex items-center justify-center mr-3">
                04
              </div>
              <p className='text-black text-2xl'>Professional Approach</p>
            </div>
            <div className="flex items-center p-3 gap-5">
              <div className="bg-red-500 rounded-lg text-white   w-16 h-16 flex items-center justify-center mr-3">
                05
              </div>
              <p className='text-black text-2xl'>High Quality Work</p>
            </div>
            {/* Add more tags as needed */}
          </div>

            {/* Image */}
            <div className='flex-1'>

            <img
            className=" "
            src="images/backheader17.jpg" // Replace with the actual path to the philosophy image
            alt="Our Philosophy"
          />
            </div>

        </div>
      </div>
    </div>
  );
};

export default OurPhilosophy;
