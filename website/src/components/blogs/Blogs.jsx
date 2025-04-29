import React from "react";
import "./Blogs.css";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Importance of Quality Testing Labs",
    img: "https://i.imgur.com/pRM0U82.jpeg",
    description:
      "Learn why testing labs are crucial for ensuring quality and compliance across industries.",
    link: "/testing-lab-blog",
  },
  {
    id: 2,
    title: "Water Testing: Ensuring Safe and Clean Drinking Water",
    img: "https://i.imgur.com/4Ixnddk.jpeg",
    description:
      "Discover how water testing helps maintain purity and prevents contamination risks.",
    link: "/water-testing-blog",
  },
  {
    id: 3,
    title: "Soil Testing: Boosting Agricultural Productivity",
    img: "https://i.imgur.com/p4FU48L.jpeg",
    description:
      "Find out how soil testing plays a vital role in modern farming and sustainability.",
    link: "/soil-testing-blog",
  },
  {
    id: 4,
    title: "Food Testing: Ensuring Safety in What We Eat",
    img: "https://i.imgur.com/qRzxJNn.jpeg",
    description:
      "Explore the significance of food testing in preventing contamination and maintaining health standards.",
    link: "/food-testing-blog",
  },
];

const Blogs = () => {
  return (
    <div>
      <h3 style={{ marginTop: "30px" }} className="blog-heading">
        Latest Blogs
      </h3>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img
              src={blog.img}
              alt={blog.title}
              className="blog-img"
              loading="lazy"
            />
            <h4 className="blog-title">{blog.title}</h4>
            <p className="blog-description">{blog.description}</p>
            <Link to={blog.link} className="read-more-link">
              👉 Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
