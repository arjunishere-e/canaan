import "./Footer.css";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Welcome message
    const message = "Hi! Welcome to Canaan. How can we assist you?";
    const phoneNumber = "918086250005"; // +91 8086250005
    const encodedMessage = encodeURIComponent(message);

    // Open WhatsApp
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>CANAAN</h4>
            <p>Career Information Centre</p>
            <p className="footer-desc">
              Connecting students with premier institutions for quality
              education and career success.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Courses</a>
              </li>
              <li>
                <a href="#partners">Colleges</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul>
              <li className="contact-row">
                <a href="tel:+919447189626">
                  <Phone size={18} color="white" className="contact-icon" /> +91
                  9447189626
                </a>
                <a href="mailto:canaancareer2005@gmail.com">
                  <Mail size={18} color="white" className="contact-icon" />{" "}
                  canaancareer2005@gmail.com
                </a>
              </li>
              <li>
                <MapPin size={18} color="white" className="contact-icon" />{" "}
                Mallappally, Kerala
              </li>
              <li>
                <Clock size={18} color="white" className="contact-icon" /> 10 AM
                - 5 PM (Mon-Fri)
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" onClick={handleWhatsAppClick}>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} canaan. All Rights Reserved. Designed by{" "}
            <a
              href="https://adbite.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              adbite.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
