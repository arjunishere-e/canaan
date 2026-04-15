import "./Services.css";

const courses = [
  {
    category: "Medical & Health Courses",
    courses: ["MBBS", "BDS", "MDS", "BAMS", "BHMS", "B.Sc Nursing", "G.N.M"],
  },
  {
    category: "Pharmacy & Paramedical",
    courses: ["B.Pharm", "Pharm D", "D.Pharm", "BPT", "BHS"],
  },
  {
    category: "Science & Allied Courses",
    courses: [
      "B.Sc",
      "M.Sc",
      "M.Sc (N)",
      "B.Sc (Perfusion)",
      "B.Sc Dialysis",
      "B.Sc Cardiac Care / Critical Care",
      "B.Sc MLT",
      "B.Sc Optometry",
      "B.Sc Radiology / Imaging",
    ],
  },
  { category: "Management & IT", courses: ["BCA", "MCA", "MBA"] },
  {
    category: "Commerce & Other Degrees",
    courses: ["B.Com (Acc)", "B.Sc (CIT)", "BBA", "BSW"],
  },
  { category: "Diplomas & Others", courses: ["FD / ID", "BHM"] },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        <h2>Courses We Offer</h2>
        <p className="services-intro">
          Wide range of professional courses in collaboration with premier
          institutions
        </p>

        <div className="courses-grid">
          {courses.map((item, index) => (
            <div key={index} className="course-category">
              <div className="category-header">
                <h3>{item.category}</h3>
              </div>
              <ul className="course-list">
                {item.courses.map((course, idx) => (
                  <li key={idx}>
                    <span className="course-badge">✓</span>
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
