import { BuildingCard } from "./BuildingCard";
// Import existing placeholder images (you can replace these with your own photos)
import academicBuilding from "@/assets/academic-building.jpg";
import AcademicBuilding from "@/assets/Multipurpose-Hall.jpg";
import AHS from "@/assets/AHS.jpg";
import finearts from "@/assets/finearts.jpg";
import InternationalCenter from "@/assets/International-Centre.png";


import libraryInterior from "@/assets/library.jpeg";
import scienceLab from "@/assets/science-lab.jpg";
import campusHero from "@/assets/Boys-Hostel-1.jpg";
import CampusHero from "@/assets/helipad2.jpeg";
// import  from "@/assets/campus-hero.jpg";

// TODO: Replace these imports with your own building photos
// See README-FACILITIES.md for detailed instructions on adding new facilities

export const BuildingsSection = () => {
  const buildings = [
    // Hostels
    {
      name: "Boys Hostel",
      description: "Modern residential facility for male students with comfortable accommodation, study areas, and recreational facilities.",
      image: campusHero,
      facilities: [
        "Air-conditioned rooms",
        "Study halls",
        "Recreation center",
        "Mess facility",
        "Wi-Fi connectivity",
        "24/7 security"
      ],
      hours: "24/7 Access",
      location: "Hostel Complex",
      capacity: 1000,
      delay: 1
    },
    {
      name: "Girls Hostel",
      description: "Safe and comfortable residential accommodation for female students with modern amenities and dedicated facilities.",
      image: campusHero,
      facilities: [
        "Secure accommodation",
        "Common rooms",
        "Study areas",
        "Mess facility",
        "Medical facility",
        "24/7 security"
      ],
      hours: "24/7 Access",
      location: "Hostel Complex",
      capacity: 800,
      delay: 2
    },

    // Academic Departments
    {
      name: "School of Education",
      description: "Leading institute for teacher training and educational research with modern pedagogy and teaching methodologies.",
      image: academicBuilding,
      facilities: [
        "Teacher training labs",
        "Educational technology center",
        "Research facilities",
        "Seminar halls",
        "Library",
        "Practice teaching rooms"
      ],
      hours: "9:00 AM - 5:00 PM",
      location: "Academic Block",
      capacity: 500,
      delay: 3
    },
    {
      name: "Lecture Hall Complex",
      description: "State-of-the-art lecture halls equipped with modern audio-visual systems for large academic gatherings.",
      image: academicBuilding,
      facilities: [
        "Multiple lecture halls",
        "Audio-visual systems",
        "Air conditioning",
        "High-capacity seating",
        "Smart boards",
        "Recording facilities"
      ],
      hours: "8:00 AM - 8:00 PM",
      location: "Central Campus",
      capacity: 2000,
      delay: 4
    },
    {
      name: "Department of Life Long and Extension",
      description: "Dedicated to continuing education and community outreach programs for lifelong learning initiatives.",
      image: academicBuilding,
      facilities: [
        "Training centers",
        "Community halls",
        "Workshop spaces",
        "Conference rooms",
        "Resource library",
        "Digital learning center"
      ],
      hours: "9:00 AM - 6:00 PM",
      location: "Extension Block",
      capacity: 300,
      delay: 1
    },
    {
      name: "School of Advanced Agricultural Sciences and Technology",
      description: "Modern agricultural research and education facility with laboratories and experimental farms.",
      image: scienceLab,
      facilities: [
        "Research laboratories",
        "Experimental farms",
        "Greenhouse facilities",
        "Equipment storage",
        "Processing units",
        "Field stations"
      ],
      hours: "8:00 AM - 6:00 PM",
      location: "Agricultural Campus",
      capacity: 400,
      delay: 2
    },
    {
      name: "Business Management Department",
      description: "Modern business education facility with case study rooms, computer labs, and corporate training centers.",
      image: academicBuilding,
      facilities: [
        "Case study rooms",
        "Computer labs",
        "Corporate training center",
        "Seminar halls",
        "Library",
        "Placement cell"
      ],
      hours: "9:00 AM - 6:00 PM",
      location: "Management Block",
      capacity: 600,
      delay: 3
    },
    {
      name: "Department of Biological Sciences and Biotechnology",
      description: "Advanced research facility for biological sciences with modern laboratories and research equipment.",
      image: scienceLab,
      facilities: [
        "Molecular biology labs",
        "Biotechnology labs",
        "Research centers",
        "Equipment rooms",
        "Culture rooms",
        "Analysis labs"
      ],
      hours: "8:00 AM - 8:00 PM",
      location: "Science Block",
      capacity: 350,
      delay: 4
    },
    {
      name: "Fine Arts Building (1 and 2)",
      description: "Creative spaces for artistic expression including studios, galleries, and performance areas.",
      image: academicBuilding,
      facilities: [
        "Art studios",
        "Sculpture workshops",
        "Gallery spaces",
        "Performance halls",
        "Music rooms",
        "Exhibition areas"
      ],
      hours: "9:00 AM - 7:00 PM",
      location: "Arts Campus",
      capacity: 400,
      delay: 1
    },

    // UIET - Engineering Department
    {
      name: "UIET - School of Engineering and Technology",
      description: "Premier engineering institute with state-of-the-art laboratories and modern infrastructure.",
      image: scienceLab,
      facilities: [
        "Engineering labs",
        "Workshop facilities",
        "CAD/CAM centers",
        "Project rooms",
        "Faculty offices",
        "Student common areas"
      ],
      hours: "8:00 AM - 8:00 PM",
      location: "UIET Campus",
      capacity: 2000,
      delay: 2
    },
    {
      name: "Chemical and Mechanical Engineering",
      description: "Specialized laboratories and workshops for chemical and mechanical engineering programs.",
      image: scienceLab,
      facilities: [
        "Chemical process labs",
        "Mechanical workshops",
        "Testing equipment",
        "Safety systems",
        "Research centers",
        "Industrial training units"
      ],
      hours: "8:00 AM - 6:00 PM",
      location: "Engineering Block",
      capacity: 500,
      delay: 3
    },
    {
      name: "CSE AI Department",
      description: "Modern computer science facility with AI labs, high-performance computing, and research centers.",
      image: scienceLab,
      facilities: [
        "AI/ML labs",
        "Computer labs",
        "Server rooms",
        "Research centers",
        "Project rooms",
        "High-speed internet"
      ],
      hours: "8:00 AM - 10:00 PM",
      location: "IT Block",
      capacity: 800,
      delay: 4
    },
    {
      name: "ECE Department",
      description: "Electronics and Communication Engineering with advanced laboratories and research facilities.",
      image: scienceLab,
      facilities: [
        "Electronics labs",
        "Communication labs",
        "Signal processing labs",
        "Hardware labs",
        "Research facilities",
        "Project areas"
      ],
      hours: "8:00 AM - 8:00 PM",
      location: "Electronics Block",
      capacity: 600,
      delay: 1
    },
    {
      name: "Computer Science Department",
      description: "Comprehensive computer science facility with modern labs and computing infrastructure.",
      image: scienceLab,
      facilities: [
        "Programming labs",
        "Software development center",
        "Network labs",
        "Database labs",
        "Research labs",
        "Student project areas"
      ],
      hours: "8:00 AM - 10:00 PM",
      location: "CS Block",
      capacity: 700,
      delay: 2
    },
    {
      name: "Information Technology Department",
      description: "Modern IT infrastructure with specialized labs for information technology programs.",
      image: scienceLab,
      facilities: [
        "IT labs",
        "Network infrastructure",
        "Server management center",
        "Software labs",
        "Research facilities",
        "Innovation center"
      ],
      hours: "8:00 AM - 9:00 PM",
      location: "IT Complex",
      capacity: 550,
      delay: 3
    },
    {
      name: "Material Science and Metallurgical Engineering",
      description: "Specialized facility for materials research with advanced testing and analysis equipment.",
      image: scienceLab,
      facilities: [
        "Materials testing labs",
        "Metallurgy workshops",
        "Analysis equipment",
        "Research centers",
        "Heat treatment facilities",
        "Characterization labs"
      ],
      hours: "8:00 AM - 6:00 PM",
      location: "Materials Block",
      capacity: 300,
      delay: 4
    },
    {
      name: "Department of Vocational Skills",
      description: "Practical training facility for vocational and skill development programs.",
      image: academicBuilding,
      facilities: [
        "Training workshops",
        "Skill labs",
        "Equipment centers",
        "Certification areas",
        "Practice rooms",
        "Industry interface"
      ],
      hours: "9:00 AM - 6:00 PM",
      location: "Vocational Block",
      capacity: 400,
      delay: 1
    },
    {
      name: "School of Computer Applications",
      description: "Dedicated facility for computer applications with modern labs and software development centers.",
      image: scienceLab,
      facilities: [
        "Application development labs",
        "Software testing center",
        "Mobile app labs",
        "Web development center",
        "Database labs",
        "Cloud computing center"
      ],
      hours: "8:00 AM - 9:00 PM",
      location: "SCA Block",
      capacity: 500,
      delay: 2
    },

    // Additional Facilities
    {
      name: "School of Hotel Management",
      description: "Professional hospitality training facility with kitchen labs, restaurant simulation, and guest services training.",
      image: academicBuilding,
      facilities: [
        "Training kitchens",
        "Restaurant simulation",
        "Guest service areas",
        "Food & beverage labs",
        "Housekeeping training",
        "Front office simulation"
      ],
      hours: "8:00 AM - 8:00 PM",
      location: "Hotel Management Block",
      capacity: 250,
      delay: 3
    },
    {
      name: "Health Sciences Department",
      description: "Medical and health sciences facility with laboratories and clinical training areas.",
      image: scienceLab,
      facilities: [
        "Medical labs",
        "Clinical training areas",
        "Health checkup center",
        "Research facilities",
        "Pharmacy lab",
        "Emergency response center"
      ],
      hours: "8:00 AM - 6:00 PM",
      location: "Health Sciences Block",
      capacity: 300,
      delay: 4
    },
    {
      name: "Law Building (Atal Bihari Vajpayee)",
      description: "Modern law faculty building with moot courts, library, and legal research centers.",
      image: AHS,
      facilities: [
        "Moot court halls",
        "Law library",
        "Legal research center",
        "Faculty chambers",
        "Student common rooms",
        "Legal aid clinic"
      ],
      hours: "9:00 AM - 6:00 PM",
      location: "Law Campus",
      capacity: 600,
      delay: 1
    },
    {
      name: "Education Faculty Building",
      description: "Dedicated building for education faculty with teaching labs and educational research facilities.",
      image: academicBuilding,
      facilities: [
        "Teaching methodology labs",
        "Educational research center",
        "Demonstration classrooms",
        "Faculty offices",
        "Conference halls",
        "Resource center"
      ],
      hours: "9:00 AM - 5:00 PM",
      location: "Education Campus",
      capacity: 400,
      delay: 2
    },
    {
      name: "Deen Dayal Shodh Kendra",
      description: "Research center dedicated to advanced studies and scholarly research activities.",
      image: academicBuilding,
      facilities: [
        "Research labs",
        "Study centers",
        "Conference rooms",
        "Digital library",
        "Publication center",
        "Scholar workstations"
      ],
      hours: "9:00 AM - 8:00 PM",
      location: "Research Campus",
      capacity: 200,
      delay: 3
    },

    // Central Facilities
    {
      name: "Helipad",
      description: "Emergency and official helicopter landing facility for quick transportation and emergency services.",
      image: CampusHero,
      facilities: [
        "Landing platform",
        "Safety equipment",
        "Emergency services",
        "Communication systems",
        "Fuel services",
        "Weather monitoring"
      ],
      hours: "24/7 Emergency Access",
      location: "Central Campus",
      capacity: 50,
      delay: 4
    },
    {
      name: "Virangna Rani Lakshmi Bai Auditorium",
      description: "Grand auditorium for large events, conferences, and cultural programs with modern facilities.",
      image: academicBuilding,
      facilities: [
        "Main auditorium hall",
        "Stage facilities",
        "Audio-visual systems",
        "Green rooms",
        "Conference rooms",
        "VIP lounges"
      ],
      hours: "Event based",
      location: "Central Campus",
      capacity: 2000,
      delay: 1
    },
    {
      name: "Senate Hall",
      description: "Official meeting hall for university governance and administrative meetings.",
      image: academicBuilding,
      facilities: [
        "Main meeting hall",
        "Committee rooms",
        "Audio-visual systems",
        "Document storage",
        "Reception area",
        "Refreshment facilities"
      ],
      hours: "9:00 AM - 6:00 PM",
      location: "Administrative Block",
      capacity: 200,
      delay: 2
    },
    {
      name: "Stadium",
      description: "Multi-purpose sports stadium for athletics, football, and major sporting events.",
      image: campusHero,
      facilities: [
        "Athletic track",
        "Football field",
        "Spectator stands",
        "Changing rooms",
        "Sports equipment storage",
        "Medical facility"
      ],
      hours: "6:00 AM - 9:00 PM",
      location: "Sports Complex",
      capacity: 5000,
      delay: 3
    },
    {
      name: "Innovation Foundation",
      description: "Center for innovation, entrepreneurship, and startup incubation with modern facilities.",
      image: scienceLab,
      facilities: [
        "Incubation centers",
        "Innovation labs",
        "Startup offices",
        "Mentoring rooms",
        "Prototype labs",
        "Conference facilities"
      ],
      hours: "9:00 AM - 8:00 PM",
      location: "Innovation Campus",
      capacity: 300,
      delay: 4
    },
    {
      name: "International Center",
      description: "Hub for international collaborations, student exchanges, and global partnerships.",
      image: InternationalCenter,
      facilities: [
        "Conference rooms",
        "International student services",
        "Language labs",
        "Cultural exchange center",
        "Guest faculty offices",
        "Digital communication center"
      ],
      hours: "9:00 AM - 6:00 PM",
      location: "International Campus",
      capacity: 250,
      delay: 1
    },
    {
      name: "Multipurpose Hall",
      description: "Versatile facility for various events, examinations, and large gatherings.",
      image: AcademicBuilding,
      facilities: [
        "Main hall",
        "Flexible seating",
        "Audio-visual systems",
        "Air conditioning",
        "Storage areas",
        "Catering facilities"
      ],
      hours: "Event based",
      location: "Central Campus",
      capacity: 1000,
      delay: 2
    },
    {
      name: "Central Library",
      description: "State-of-the-art library with vast collection of books, digital resources, and research facilities.",
      image: libraryInterior,
      facilities: [
        "Digital resource center",
        "Reading halls (500+ seats)",
        "Research cubicles",
        "Audio-visual section",
        "Wi-Fi connectivity",
        "24/7 access for research scholars"
      ],
      hours: "6:00 AM - 11:00 PM",
      location: "Central Campus",
      capacity: 1500,
      delay: 3
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12 fade-in-up">
        <h2 className="text-4xl font-bold mb-4">CSJMU Campus Facilities & Departments</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Discover our comprehensive range of academic departments, modern facilities, and 
          world-class infrastructure designed to provide excellence in education and research.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {buildings.map((building, index) => (
          <BuildingCard
            key={index}
            {...building}
            delay={building.delay}
          />
        ))}
      </div>
    </section>
  );
};