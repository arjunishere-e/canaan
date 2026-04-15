import "./Hero.css";
import canaaLogo from "../assets/canaan.png";

export default function Hero() {
  const handleGetStarted = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <img src={canaaLogo} alt="CANAAN Logo" className="hero-logo" />
        <h1>Welcome to CANAAN</h1>
        <p>Your Gateway to Quality Education & Career Success</p>
        <p className="hero-subtitle">
          Connecting thousands of students with India's premier medical,
          engineering, and professional institutions
        </p>
        <button className="cta-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
      <div className="hero-overlay"></div>
    </div>
  );
}
