import React from "react";
import img from "../../../assets/images/process.png"

const cardsData = [
  {
    title: "Infrastructure",
    description: [
      "Infrastructure of the lab has been designed carefully in.",
    ],
    img:img,
  },
  {
    title: "Instrumentations",
    description: [
      "Any Many More Sophisticated Instruments....",
    ],
  },
  {
    title: "Quality Assurance",
    description: [
      "We at M/S Jagdamba Laboratories pledge to achieve complete.",
    ],
  },
  {
    title: "Our Team",
    description: [
      "Our expert and qualified team has helped us deliver enhanced services",
    ],
  },
];

const Card = ({ title, description }) => {
  return (
    <div className="card-container" style={styles.card}>
      <div style={styles.header}>{title}</div>
      <ul style={styles.list}>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const CardRow = () => {
  return (
    <div style={styles.row}>
      {cardsData.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

const styles = {
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    padding: "20px",
    flexWrap: "wrap",
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "46px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    width: "300px",
    fontFamily: "Arial, sans-serif",
    textAlign: "left",
    marginTop:"40px"
  },
  header: {
    background: "#FFD700",
    padding: "10px",
    fontWeight: "bold",
    borderRadius: "5px",
    textAlign: "center",
    marginTop:"-22%",
    marginBottom:"20px",
    width:"302px",
    marginLeft:"-47px"

  },
  list: {
    padding: 0,
    listStyleType: "none",
  },
};

export default CardRow;
