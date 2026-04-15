import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About CANAAN</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Your Trusted Education Partner</h3>
            <p>
              CANAAN Career Information Centre is a premier counseling
              organization based in Mallappally, dedicated to guiding students
              through their educational aspirations.
            </p>
            <ul className="about-features">
              <li>15+ Years of Experience</li>
              <li>500+ Successful Admissions Annually</li>
              <li>Partnership with Top Medical & Professional Colleges</li>
              <li>Expert Guidance & Professional Counseling</li>
              <li>Personalized Career Planning</li>
              <li>24/7 Support & Assistance</li>
            </ul>
          </div>
          <div className="about-info">
            <div className="info-card">
              <h4>Our Mission</h4>
              <p>
                To empower students by providing comprehensive guidance and
                connecting them with the best educational institutions for their
                bright future.
              </p>
            </div>
            <div className="info-card">
              <h4>Our Vision</h4>
              <p>
                To be the most trusted career information center in India,
                transforming lives through quality education and effective
                mentorship.
              </p>
            </div>
            <div className="info-card">
              <h4>Location</h4>
              <p>H.O Mallappally, Opp. SBI Bus Stand Road, Mallappally</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
