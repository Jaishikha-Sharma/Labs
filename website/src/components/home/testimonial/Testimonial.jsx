import React from "react";
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
    text: "The expertise at ECMA Lab is unmatched. Their precise testing procedures and insightful recommendations have significantly contributed to our research and development projects. We highly appreciate their dedication and professionalism.",
    rating: 5,
  },
];

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <h2 className="testimonial-title">Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            {/* Image inside the card */}
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
      </div>
    </div>
  );
};

export default TestimonialSection;