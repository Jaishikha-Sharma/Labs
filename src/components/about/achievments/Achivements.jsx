import React from "react";
import "./Achivements.css"; 

const Achievements = () => {
  const achievements = [
    { title: "BUILDING", percentage: 95 },
    { title: "MINERAL TEST", percentage: 91 },
    { title: "WATER TEST", percentage: 97 },
    { title: "DRUGS TEST", percentage: 88 },
  ];

  return (
    <div className="achievements-container">
      {achievements.map((achievement, index) => (
        <div className="achievement-card" key={index}>
          <h3>{achievement.title}</h3>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: `${achievement.percentage}%` }}
            >
              {achievement.percentage}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
