import { useState } from "react";
import { Phone, MapPin, Clock, Building2 } from "lucide-react";
import "./Contact.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendToWhatsApp = () => {
    // Check if required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.course
    ) {
      alert("Please fill in all required fields");
      return;
    }

    // Format the message with form details
    const messageText = `Hello,

I am interested in your courses.

*Personal Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Course Interested: ${formData.course}
${formData.message ? `Message: ${formData.message}` : ""}

Please get back to me with more information.`;

    // WhatsApp number in international format (India: 91 + 8086250005)
    const phoneNumber = "918086250005";

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(messageText);

    // Create WhatsApp link and open in new window
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");

    // Show success feedback
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", course: "", message: "" });
    }, 3000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendToWhatsApp();
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions? We're here to help! Contact us for personalized
            guidance.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <div className="detail-header">
                <Phone size={24} className="detail-icon" />
                <h4>Phone</h4>
              </div>
              <p>+91 9447189626</p>
              <p>+91 8086250005</p>
              <p>+91 8157023093</p>
              <p>+91 8281704626</p>
            </div>

            <div className="detail-item">
              <div className="detail-header">
                <MapPin size={24} className="detail-icon" />
                <h4>Location</h4>
              </div>
              <p>H.O Mallappally</p>
              <p>Opp. SBI Bus Stand Road</p>
              <p>Mallappally</p>
            </div>

            <div className="detail-item">
              <div className="detail-header">
                <Clock size={24} className="detail-icon" />
                <h4>Hours</h4>
              </div>
              <p>Monday - Friday: 10:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

            <div className="detail-item branches">
              <div className="detail-header">
                <Building2 size={24} className="detail-icon" />
                <h4>Our Branches</h4>
              </div>
              <ul>
                <li>
                  <strong>Ranni:</strong> +91 9497103901, +91 6235162731
                </li>
                <li>
                  <strong>Konni:</strong> +91 8289895626, +91 8921022436
                </li>
                <li>
                  <strong>Idukki:</strong> +91 9447189626, +91 9447689626
                </li>
              </ul>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a Message</h3>

          {submitted && (
            <div className="success-message">
              ✓ Thank you! We'll get back to you soon.
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Full Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+91 98765 43210"
            />
          </div>

          <div className="form-group">
            <label htmlFor="course">Course Interested In *</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option value="MBBS">MBBS</option>
              <option value="BDS">BDS</option>
              <option value="Nursing">Nursing</option>
              <option value="BE">BE</option>
              <option value="B.Pharm">B.Pharm</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your interests..."
              rows={3}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
