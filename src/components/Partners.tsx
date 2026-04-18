import { useState, useEffect } from "react";
import "./Partners.css";
import pt1 from "../assets/partners/pt1.jpg";
import pt2 from "../assets/partners/pt2.jpg";
import pt3 from "../assets/partners/pt3.jpg";
import pt4 from "../assets/partners/pt4.jpg";
import pt5 from "../assets/partners/pt5.jpg";
import pt6 from "../assets/partners/pt6.jpg";
import pt7 from "../assets/partners/pt7.jpg";
import pt8 from "../assets/partners/pt8.jpg";
import pt9 from "../assets/partners/pt9.jpg";
import pt10 from "../assets/partners/pt10.jpg";
import pt11 from "../assets/partners/pt11.png";
import pt12 from "../assets/partners/pt12.jpg";
import al1 from "../assets/partners/al1.jpg";
import al2 from "../assets/partners/al2.jpg";
import al3 from "../assets/partners/al3.jpg";
import al4 from "../assets/partners/al4.jpg";
import al5 from "../assets/partners/al5.jpg";
import {
  Stethoscope,
  Heart,
  Brain,
  Cpu,
  BookOpen,
  Microscope,
  Zap,
  Code,
  Briefcase,
  GraduationCap,
  MapPin,
} from "lucide-react";

const partnerImages = [
  pt1,
  pt2,
  pt3,
  pt4,
  pt5,
  pt6,
  pt7,
  pt8,
  pt9,
  pt10,
  pt11,
  pt12,
  al1,
  al2,
  al3,
  al4,
  al5,
];

const specialtyIconMap: Record<
  string,
  React.ComponentType<{ size: number; className: string }>
> = {
  Nursing: Stethoscope,
  Healthcare: Heart,
  Medicine: Brain,
  "Medical Technology": Cpu,
  "Medical Education": BookOpen,
  MBBS: BookOpen,
  Engineering: Code,
  Technology: Zap,
  "Clinical Training": Microscope,
  "Post Graduate": GraduationCap,
  Management: Briefcase,
  Commerce: Briefcase,
};

const getIconForSpecialty = (
  specialty: string,
): React.ComponentType<{ size: number; className: string }> => {
  return specialtyIconMap[specialty] || Stethoscope;
};

const renderSpecialtyTags = (specialties: string) => {
  return specialties.split(",").map((specialty, index) => {
    const trimmedSpecialty = specialty.trim();
    const Icon = getIconForSpecialty(trimmedSpecialty);
    return (
      <span key={index} className="specialty-tag">
        <Icon size={16} className="tag-icon" />
        <span className="tag-text">{trimmedSpecialty}</span>
      </span>
    );
  });
};

interface College {
  id: string;
  name: string;
  location: string;
  image_url: string;
  specialties: string;
}

export default function Partners() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleConnectClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetchColleges();
  }, []);

  const fetchColleges = async () => {
    try {
      setLoading(true);

      // Sample data - replace with actual Supabase query when configured
      const sampleColleges: College[] = [
        {
          id: "1",
          name: "Shreedeevi College of Nursing",
          location: "Bangalore",
          image_url: partnerImages[0],
          specialties: "Nursing",
        },
        {
          id: "2",
          name: "Bangalore City College of Nursing",
          location: "Bangalore",
          image_url: partnerImages[1],
          specialties: "Nursing, Clinical Training",
        },
        {
          id: "3",
          name: "Alvas College of Nursing",
          location: "Mangalore",
          image_url: partnerImages[2],
          specialties: "Nursing",
        },
        {
          id: "4",
          name: "Mudra College of Nursing",
          location: "Bangalore",
          image_url: partnerImages[3],
          specialties: "Nursing, Medical Technology",
        },
        {
          id: "5",
          name: "A.J Medical College",
          location: "Mangalore",
          image_url: partnerImages[4],
          specialties: "MBBS, Medical Education",
        },
        {
          id: "6",
          name: "St. John College of Nursing",
          location: "Bangalore",
          image_url: partnerImages[5],
          specialties: "Nursing, Healthcare",
        },
        {
          id: "7",
          name: "K.V.G Medical College",
          location: "Sullia",
          image_url: partnerImages[6],
          specialties: "MBBS, Medicine",
        },
        {
          id: "8",
          name: "St. George College",
          location: "Bangalore",
          image_url: partnerImages[7],
          specialties: " Science, Nursing",
        },
        {
          id: "9",
          name: "Prasanna College of Nursing",
          location: "Mangalore",
          image_url: partnerImages[8],
          specialties: "Nursing, Post Graduate",
        },
        {
          id: "10",
          name: "Karavali College of Nursing",
          location: "Mangalore",
          image_url: partnerImages[9],
          specialties: "Nursing",
        },
        {
          id: "11",
          name: "City & Thejaswani College",
          location: "Mangalore",
          image_url: partnerImages[10],
          specialties: "Management, Commerce",
        },

        {
          id: "12",
          name: "N.R.T Nursing College",
          location: "Thenni",
          image_url: partnerImages[11],
          specialties: "Nursing",
        },
        {
          id: "13",
          name: "Alvas Homeopathic Medical College",
          location: "Mangalore",
          image_url: partnerImages[12],
          specialties: "Homeopathy, Medical Education",
        },
        {
          id: "14",
          name: "Alvas Ayurveda Medical College",
          location: "Mangalore",
          image_url: partnerImages[13],
          specialties: "Ayurveda, Medicine",
        },
        {
          id: "15",
          name: "Alvas Degree College",
          location: "Mangalore",
          image_url: partnerImages[14],
          specialties: "Commerce, Science, Management",
        },
        {
          id: "16",
          name: "Alvas College of Hospital and Administration",
          location: "Mangalore",
          image_url: partnerImages[15],
          specialties: "Healthcare, Management, Hospital Administration",
        },
        {
          id: "17",
          name: "Alvas Institute of Engineering & Technology",
          location: "Mangalore",
          image_url: partnerImages[16],
          specialties: "Engineering, Technology",
        },
      ];

      // TODO: Uncomment when Supabase is configured
      // const { data, error } = await supabase
      //   .from('colleges')
      //   .select('*');

      // if (error) {
      //   setError(error.message);
      // } else {
      //   setColleges(data || []);
      // }

      setColleges(sampleColleges);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch colleges");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="partners-section">
        <div className="partners-container">
          <h2>Our Trusted Partners</h2>
          <div className="loading">Loading colleges...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2>Our Trusted Partners</h2>
        <p className="partners-intro">
          Affiliated with India's leading educational institutions
        </p>

        {error && <div className="error-message">{error}</div>}

        <div className="colleges-grid">
          {colleges.map((college) => (
            <div key={college.id} className="college-card">
              <img
                src={college.image_url}
                alt={college.name}
                className="college-image"
              />
              <div className="college-info">
                <h3>{college.name}</h3>
                <p className="location">
                  <MapPin size={16} className="location-icon" />
                  {college.location}
                </p>
                <div className="specialties">
                  {renderSpecialtyTags(college.specialties)}
                </div>
                <button className="connect-btn" onClick={handleConnectClick}>
                  Connect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
