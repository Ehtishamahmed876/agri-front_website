"use client"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      interval={5000}
      transitionTime={500}
    >
      <div className="relative bg-slider-image bg-cover h-[30rem]">
        {/* <img src="/path/to/background-image-1.jpg" alt="Slide 1" /> */}
        <div className="absolute inset-0 flex flex-col justify-start items-start m-24 p-10 gap-20 text-white ">
          <h2 className="text-6xl font-bold mb-4">Soil and Water Research Institute Rawalpindi</h2>
          <div className="space-x-4">
            <button className="bg-white text-black px-6 py-4 rounded-md">
             Contact Us
            </button>
            <button className="bg-green-600 text-white px-6 py-4 rounded-md ">
             Check Results
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-slider-image bg-cover h-[30rem]">
        {/* <img src="/path/to/background-image-1.jpg" alt="Slide 1" /> */}
        <div className="absolute inset-0 flex flex-col justify-start items-start m-24 p-10 gap-20 text-white ">
          <h2 className="text-6xl font-bold mb-4">We Help Improve your SOIL FERTILITY</h2>
          <div className="space-x-4">
            <button className="bg-white text-black px-6 py-4 rounded-md">
             Contact Us
            </button>
            <button className="bg-green-600 text-white px-6 py-4 rounded-md ">
             Check Results
            </button>
          </div>
        </div>
      </div>

      <div className="relative bg-slider-image bg-cover h-[30rem]">
        {/* <img src="/path/to/background-image-1.jpg" alt="Slide 1" /> */}
        <div className="absolute inset-0 flex flex-col justify-start items-start m-24 p-10 gap-20 text-white ">
          <h2 className="text-6xl font-bold mb-4">You can check Results ONLINE</h2>
          <div className="space-x-4">
            <button className="bg-white text-black px-6 py-4 rounded-md">
             Contact Us
            </button>
            <button className="bg-green-600 text-white px-6 py-4 rounded-md ">
             Check Results
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
