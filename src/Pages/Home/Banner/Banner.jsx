import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/New folder/Happy Birthday template (Banner (Landscape)).png";
import img2 from "../../../assets/New folder/Happy Birthday template (Banner (Landscape)) (1).png";
import img3 from "../../../assets/New folder/Happy Birthday template (Banner (Landscape)) (2).png";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto mt-30 rounded-2xl overflow-hidden shadow-2xl">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={3000}
        showStatus={false}
        swipeable={true}
        emulateTouch={true}
        transitionTime={1200} // smooth fade duration
        animationHandler="fade" // 🎨 fade effect added
      >
        <div>
  <img
    src={img1}
    alt="Birthday Banner 1"
    className=" object-center object-cover"
  />
</div>

<div>
  <img
    src={img2}
    alt="Birthday Banner 2"
    className=" object-center object-cover"
  />
</div>

<div>
  <img
    src={img3}
    alt="Birthday Banner 3"
    className="object-center object-cover"
  />
</div>
      </Carousel>
    </div>
  );
};

export default Banner;
