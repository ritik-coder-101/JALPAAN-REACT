import React from "react";
import Slider from "react-slick";
import "./Home.css";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div id="home" className="home-container">
      <div className="slideshow-container">
        {/* Text Overlay */}
        <div className="text-overlay">
          <h1 className="heading-large">ORDER YOUR</h1>
          <h2 className="heading-medium">Favourite food here</h2>
          <p className="description">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
        </div>

        {/* Image Slider */}
        <Slider {...settings} className="slider">
          <div>
            <img src="/images/slide1.avif" alt="Delicious dish 1" className="slide-img" />
          </div>
          <div>
            <img src="/images/slide2.jpg" alt="Delicious dish 2" className="slide-img" />
          </div>
          <div>
            <img src="/images/slide3.jpg" alt="Delicious dish 3" className="slide-img" />
          </div>
          <div>
            <img src="/images/slide4.jpg" alt="Delicious dish 4" className="slide-img" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Home;
