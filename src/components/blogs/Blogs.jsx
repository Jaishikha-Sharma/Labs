import React from "react";
import "./Blogs.css";

const blogs = [
  {
    id: 1,
    title: "The Importance of Quality Testing Labs",
    img: "https://i.imgur.com/pRM0U82.jpeg",
    description:
      "Learn why testing labs are crucial for ensuring quality and compliance across industries.",
    link: "/blog/testing-lab",
  },
  {
    id: 2,
    title: "Water Testing: Ensuring Safe and Clean Drinking Water",
    img: "https://i.imgur.com/4Ixnddk.jpeg",
    description:
      "Discover how water testing helps maintain purity and prevents contamination risks.",
    link: "/blog/water-testing",
  },
  {
    id: 3,
    title: "Soil Testing: Boosting Agricultural Productivity",
    img: "https://i.imgur.com/p4FU48L.jpeg",
    description:
      "Find out how soil testing plays a vital role in modern farming and sustainability.",
    link: "/blog/soil-testing",
  },
  {
    id: 4,
    title: "Food Testing: Ensuring Safety in What We Eat",
    img: "https://i.imgur.com/qRzxJNn.jpeg",
    description:
      "Explore the significance of food testing in preventing contamination and maintaining health standards.",
    link: "/blog/food-testing",
  },
];

const Blogs = () => {
  return (
    <div>
      <div>
        <img
          src="https://i.imgur.com/8Ie7SqD.jpeg"
          alt="Contact-us"
          className="about-banner"
        />
      </div>
      <h3 className="blog-heading">Latest Blogs</h3>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.img} alt={blog.title} className="blog-img" />
            <h4 className="blog-title">{blog.title}</h4>
            <p className="blog-description">{blog.description}</p>
            <a className="read-more">Read More →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
