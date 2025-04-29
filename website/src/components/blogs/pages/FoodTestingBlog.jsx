import React from 'react';

const FoodTestingBlog = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.content}>
        <h1 style={styles.title}>Food Testing: Ensuring Safety in What We Eat</h1>
        <p style={styles.description}>
          Food testing is a vital process in maintaining public health and consumer trust. It ensures that the food we consume is free from harmful substances, contaminants, and meets nutritional labeling standards.
        </p>

        <h2 style={styles.heading}>1. Contaminant Detection</h2>
        <p style={styles.text}>
          Testing helps identify the presence of contaminants such as heavy metals, pesticides, or harmful bacteria like E. coli and Salmonella. Early detection prevents the distribution of unsafe food products.
        </p>

        <h2 style={styles.heading}>2. Allergen Control</h2>
        <p style={styles.text}>
          For individuals with food allergies, accurate labeling and testing for allergens like peanuts, gluten, or soy is crucial. Food testing ensures compliance with allergen declaration laws.
        </p>

        <h2 style={styles.heading}>3. Nutritional Accuracy</h2>
        <p style={styles.text}>
          Labels on packaged foods must accurately reflect calorie count, fat content, vitamins, and minerals. Testing verifies these claims to ensure transparency and consumer safety.
        </p>

        <h2 style={styles.heading}>4. Shelf Life and Spoilage Prevention</h2>
        <p style={styles.text}>
          Through microbiological testing, manufacturers can assess product stability and determine expiration dates, reducing the risk of spoilage or consumption past safe limits.
        </p>

        <h2 style={styles.heading}>5. Regulatory Compliance</h2>
        <p style={styles.text}>
          Food safety authorities require manufacturers to meet rigorous standards. Testing supports regulatory compliance, helping avoid penalties and safeguarding the brand's reputation.
        </p>

        <p style={styles.footer}>
          In conclusion, food testing is essential in protecting consumer health, ensuring product quality, and upholding brand integrity in the competitive food industry.
        </p>
      </div>

      <div style={styles.imageContainer}>
        <img
          src="https://i.imgur.com/qRzxJNn.jpeg"
          alt="Food Testing"
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

export default FoodTestingBlog;
