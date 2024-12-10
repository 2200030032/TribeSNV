import React, { useState } from "react";

const About = () => {
  const styles = {
    container: {
      textAlign: "center",
      padding: "3rem",
      background: "linear-gradient(to right, #eef2f3, #8e9eab)", // Added gradient background
      fontFamily: "'Arial', sans-serif",
      color: "#333",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#4A90E2",
      marginBottom: "1rem",
    },
    description: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
      color: "#555",
    },
    teamContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "3rem",  // Increased gap between team cards
      flexWrap: "wrap",
    },
    teamCard: {
      backgroundColor: "#fff",
      border: "1px solid #e0e0e0",
      borderRadius: "10px",
      padding: "2rem",
      width: "400px",  // Increased width of the card
      height: "480px", // Increased height of the card
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    teamCardHover: {
      transform: "scale(1.05)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
    teamImage: {
      width: "200px",  // Increased size to 200x200
      height: "200px", // Increased size to 200x200
      borderRadius: "50%",
      marginBottom: "1.5rem",  // Increased margin to provide more space
      objectFit: "cover",
    },
    name: {
      fontSize: "1.6rem", // Slightly larger name font
      color: "#4A90E2",
      margin: "0.5rem 0",
    },
    role: {
      fontSize: "1.3rem", // Slightly larger role font
      color: "#555",
      marginBottom: "0.5rem",
    },
    text: {
      fontSize: "1.1rem", // Slightly larger description font
      color: "#666",
      textAlign: "center",
    },
  };

  const teamMembers = [
    {
      name: "Sai Navadeep",
      role: "Team Leader",
      description: "Navadeep is a leader who ensures smooth project execution.",
      img: "/images/navadeep_v2.jpg",
    },
    {
      name: "Vamsi Reddy",
      role: "Developer",
      description: "Vamsi specializes in developing scalable solutions.",
      img: "/images/vamsi_v2.jpg",
    },
    {
      name: "Sanjeev Ganesh Krishna",
      role: "Designer",
      description: "Sanjeev designs user-friendly and creative interfaces.",
      img: "/images/sanjeev_v2.png",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.description}>
        We are a team of passionate professionals committed to excellence.
      </p>
      <div style={styles.teamContainer}>
        {teamMembers.map((member, index) => (
          <div
            key={index}
            style={{
              ...styles.teamCard,
              ...(hoverIndex === index ? styles.teamCardHover : {}),
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img src={member.img} alt={member.name} style={styles.teamImage} />
            <h2 style={styles.name}>{member.name}</h2>
            <h3 style={styles.role}>{member.role}</h3>
            <p style={styles.text}>{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
