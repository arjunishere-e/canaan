import "./Footer.css";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              <li>
                <Phone size={18} color="white" className="contact-icon" /> +91 9447189626
              </li>
              <li>
                <MapPin size={18} color="white" className="contact-icon" /> Mallappally, Kerala
              </li>
              <li>
                <Mail size={18} color="white" className="contact-icon" /> info@canaan.edu
              </li>
              <li>
                <Clock size={18} color="white" className="contact-icon" /> 9 AM - 6 PM (Mon-Fri)
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-link">
                Facebook
              </a>
              <a href="#" className="social-link">
                Instagram
              </a>
              <a href="#" className="social-link">
                LinkedIn
              </a>
              <a href="#" className="social-link">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Adbite. All rights reserved.</p>
          <p>
            <a href="#privacy">Privacy Policy</a> |{" "}
            <a href="#terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
