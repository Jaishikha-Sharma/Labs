import React from 'react';

const SoilTestingBlog = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1 style={styles.title}>Soil Testing: Boosting Agricultural Productivity</h1>
        <p style={styles.description}>
          Soil testing is a critical component of modern agriculture. By analyzing soil properties, farmers can make informed decisions about crop selection, fertilization, and land management, ultimately leading to improved yield and sustainability.
        </p>

        <h2 style={styles.heading}>1. Understanding Soil Nutrients</h2>
        <p style={styles.text}>
          Soil testing reveals levels of essential nutrients such as nitrogen, phosphorus, and potassium. Knowing these levels helps in applying the right type and amount of fertilizer, preventing both deficiency and excess.
        </p>

        <h2 style={styles.heading}>2. pH Level Management</h2>
        <p style={styles.text}>
          Soil pH affects the availability of nutrients to plants. Testing allows for adjustments through lime or sulfur applications, ensuring the soil environment is optimal for plant growth.
        </p>

        <h2 style={styles.heading}>3. Cost-Effective Farming</h2>
        <p style={styles.text}>
          By using data from soil tests, farmers can avoid unnecessary spending on fertilizers or soil conditioners. It promotes targeted intervention and reduces input costs.
        </p>

        <h2 style={styles.heading}>4. Enhancing Soil Health</h2>
        <p style={styles.text}>
          Regular soil testing helps monitor long-term soil health. Identifying organic matter content and microbial activity guides sustainable farming practices that enrich the soil over time.
        </p>

        <h2 style={styles.heading}>5. Environmental Protection</h2>
        <p style={styles.text}>
          Accurate nutrient application based on soil testing minimizes leaching and runoff, which can pollute water bodies. It's a key step toward eco-friendly farming.
        </p>

        <p style={styles.footer}>
          In essence, soil testing is not just about increasing yield—it's about making agriculture smarter, more efficient, and environmentally responsible.
        </p>
      </div>

      <div style={styles.imageContainer}>
        <img
          src="https://i.imgur.com/p4FU48L.jpeg"
          alt="Soil Testing"
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

export default SoilTestingBlog;
