import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation to the home page

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // For exit animation
  const navigate = useNavigate();

  const styles = {
    container: {
      textAlign: "center",
      padding: "3rem",
      background: "linear-gradient(to right, #eef2f3, #8e9eab)",
      fontFamily: "'Arial', sans-serif",
      color: "#333",
      transition: "opacity 1s ease", // Smooth fade effect
      opacity: fadeOut ? 0 : 1, // Apply fade-out when redirecting
    },
    heading: {
      fontSize: "2.5rem",
      color: "#4A90E2",
      marginBottom: "1rem",
      animation: "slideIn 1s ease-out", // Animation for the heading
    },
    description: {
      fontSize: "1.2rem",
      marginBottom: "2rem",
      color: "#555",
    },
    formContainer: {
      display: isSubmitted ? "none" : "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.5rem",
    },
    input: {
      width: "300px",
      padding: "0.8rem",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1rem",
    },
    textarea: {
      width: "300px",
      height: "100px",
      padding: "0.8rem",
      border: "1px solid #ccc",
      borderRadius: "5px",
      fontSize: "1rem",
      resize: "none",
    },
    button: {
      padding: "0.8rem 1.5rem",
      border: "none",
      borderRadius: "5px",
      backgroundColor: "#4A90E2",
      color: "#fff",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#357ABD",
      transform: "scale(1.05)", // Slight zoom on hover
    },
    successMessage: {
      display: isSubmitted ? "block" : "none",
      color: "#28a745",
      fontSize: "1.5rem",
      marginTop: "2rem",
      animation: "fadeIn 1.5s ease", // Fade-in effect for success message
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // Trigger fade-out animation before redirecting
    setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        navigate("/");
      }, 1000); // Redirect after fade-out animation
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.description}>
        We'd love to hear from you! Please fill out the form below or reach out
        to us using the provided contact details.
      </p>
      <div style={styles.formContainer}>
        <input type="text" placeholder="Your Name" style={styles.input} />
        <input type="email" placeholder="Your Email" style={styles.input} />
        <textarea placeholder="Your Message" style={styles.textarea}></textarea>
        <button
          style={styles.button}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
            e.target.style.transform = styles.buttonHover.transform;
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = styles.button.backgroundColor;
            e.target.style.transform = "scale(1)";
          }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      <div style={styles.successMessage}>Thank you! Your message has been sent successfully.</div>
    </div>
  );
};

export default Contact;
