import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"; 

const testimonials = [
  {
    name: "Dr. Anjali Mehta",
    text: "ECMA Lab’s analytical services have been crucial for our geological research. Their meticulous approach and commitment to quality have given us confidence in our mineralogical studies. The team at ECMA Lab is always responsive and professional, making them a trusted partner in our scientific endeavors here in India.",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    text: "Working with ECMA Lab has transformed our exploration projects. Their comprehensive mineral analysis and innovative methodologies have enabled us to make well-informed decisions, minimizing risks and optimizing our operations. The clarity and consistency in their reporting are commendable. We look forward to a long-term collaboration with ECMA Lab.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    text: "The expertise at ECMA Lab is unmatched. Their precise testing procedures and insightful recommendations have significantly contributed to our research and development projects. We highly appreciate their dedication and professionalism.Working with ECMA Lab has transformed our exploration projects.",
    rating: 5,
  },
  {
    name: "Dr. visal",
    text: "ECMA Lab’s analytical services have been crucial for our geological research. Their meticulous approach and commitment to quality have given us confidence in our mineralogical studies. The team at ECMA Lab is always responsive and professional, making them a trusted partner in our scientific endeavors here in India.",
    rating: 4,
  },
  {
    name: "Shweta",
    text: "ECMA Lab’s analytical services have been crucial for our geological research. Their meticulous approach and commitment to quality have given us confidence in our mineralogical studies. The team at ECMA Lab is always responsive and professional, making them a trusted partner in our scientific endeavors here in India.",
    rating: 4,
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 cards ek saath dikhao
    slidesToScroll: 1, // 1 slide pe shift
    autoplay: false,
    arrows: true, // arrow dikhane ke liye
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-img-container">
              <img
                src="https://i.imgur.com/njJQdAg.png"
                alt="logo"
                className="testimonial-img"
              />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <h4 className="testimonial-name">{testimonial.name}</h4>
            <div className="testimonial-rating">
              {"★".repeat(testimonial.rating)}
              {"☆".repeat(5 - testimonial.rating)}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSection;
