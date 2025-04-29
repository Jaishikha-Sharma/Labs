import React from 'react';

const TestingLabBlog = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1 style={styles.title}>The Importance of Quality Testing Labs</h1>
        <p style={styles.description}>
          Testing labs play a vital role in maintaining the quality, safety, and compliance of products and services across various industries. From pharmaceuticals and food products to construction materials and electronics, these labs ensure that everything meets regulatory standards before reaching consumers.
        </p>

        <h2 style={styles.heading}>1. Compliance with Regulations</h2>
        <p style={styles.text}>
          Industries are governed by strict standards set by regulatory authorities. Testing labs help businesses meet these requirements, ensuring legal compliance and avoiding costly penalties.
        </p>

        <h2 style={styles.heading}>2. Quality Assurance</h2>
        <p style={styles.text}>
          Quality control is not optional—it's essential. Testing labs verify the durability, performance, and safety of materials, ensuring customer satisfaction and brand trust.
        </p>

        <h2 style={styles.heading}>3. Risk Reduction</h2>
        <p style={styles.text}>
          Early detection of defects through lab testing prevents product recalls, financial loss, and damage to reputation. It's a proactive step that saves businesses in the long run.
        </p>

        <h2 style={styles.heading}>4. Innovation Support</h2>
        <p style={styles.text}>
          For R&D departments, labs offer an environment to test new products, materials, or solutions before they hit the market. This ensures innovation without compromising on quality.
        </p>

        <h2 style={styles.heading}>5. Consumer Safety</h2>
        <p style={styles.text}>
          Above all, testing labs protect end-users by ensuring that products are safe to use, consume, or operate. This creates a reliable ecosystem and enhances public trust.
        </p>

        <p style={styles.footer}>
          In conclusion, testing labs are the unsung heroes in today’s quality-driven marketplace. Partnering with a certified lab is not just a necessity—it's a strategic advantage.
        </p>
      </div>

      <div style={styles.imageContainer}>
        <img
          src="/img1.webp"
          alt="Testing Lab"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '40px',
    gap: '40px',
    maxWidth: '1479px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    flexWrap: 'wrap', 
  },
  content: {
    flex: 2,
    textAlign: 'justify',
    minWidth: '300px',
  },
  imageContainer: {
    flex: 1,
    minWidth: '250px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  title: {
    fontSize: '32px',
    marginBottom: '16px',
    color: '#222',
  },
  description: {
    fontSize: '18px',
    marginBottom: '20px',
    color: '#444',
    textAlign: 'justify',
  },
  heading: {
    fontSize: '22px',
    marginTop: '20px',
    marginBottom: '10px',
    color: '#333',
  },
  text: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '10px',
    textAlign: 'justify',
  },
  footer: {
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '30px',
    color: '#2c3e50',
    textAlign: 'justify',
  },
  imageContainer: {
    flex: 1.5, 
    minWidth: '300px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    maxHeight: '600px',
    objectFit: 'cover',
  },

};


export default TestingLabBlog;
