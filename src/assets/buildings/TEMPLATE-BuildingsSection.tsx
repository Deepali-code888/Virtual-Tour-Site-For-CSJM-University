// TEMPLATE: How to update BuildingsSection.tsx with your own photos
// Copy this code and replace the existing imports and image assignments

import { BuildingCard } from "./BuildingCard";

// STEP 1: Import your building photos
// Place your photos in src/assets/buildings/ and import them here
import centralLibrary from "@/assets/buildings/central-library.jpg";
import academicBlockA from "@/assets/buildings/academic-block-a.jpg";
import scienceTechBlock from "@/assets/buildings/science-tech-block.jpg";
import evaluationBuilding from "@/assets/buildings/evaluation-building.jpg";
import studentActivityCenter from "@/assets/buildings/student-activity-center.jpg";
import internationalCentre from "@/assets/buildings/international-centre.jpg";

export const BuildingsSection = () => {
  const buildings = [
    {
      name: "Central Library",
      description: "A modern, technology-enabled library housing over 500,000 books, digital resources, and research databases. The library serves as the intellectual hub of the university with collaborative study spaces.",
      image: centralLibrary, // STEP 2: Use your imported photo variable
      facilities: [
        "Digital Resource Center",
        "Reading Halls (500+ seats)",
        "Research Cubicles",
        "Audio-Visual Section",
        "Wi-Fi Connectivity",
        "24/7 Access for Research Scholars"
      ],
      hours: "6:00 AM - 11:00 PM",
      location: "Central Campus",
      capacity: 1500,
      delay: 1
    },
    {
      name: "Academic Complex - Block A",
      description: "The main academic building housing multiple departments with modern classrooms, seminar halls, and faculty offices. Features smart classrooms with latest teaching technology.",
      image: academicBlockA, // Use your Academic Block A photo
      facilities: [
        "Smart Classrooms (50+)",
        "Seminar Halls",
        "Faculty Offices",
        "Administrative Offices",
        "Student Common Areas",
        "High-Speed Internet"
      ],
      hours: "7:00 AM - 10:00 PM",
      location: "Main Campus",
      capacity: 5000,
      delay: 2
    },
    {
      name: "Science & Technology Block",
      description: "State-of-the-art laboratories and research facilities for engineering, science, and technology programs. Equipped with modern instruments and safety systems.",
      image: scienceTechBlock, // Use your Science & Technology Block photo
      facilities: [
        "Research Laboratories (25+)",
        "Computer Labs",
        "Engineering Workshops",
        "Safety Equipment",
        "Project Rooms",
        "Equipment Storage"
      ],
      hours: "8:00 AM - 8:00 PM",
      location: "Tech Campus",
      capacity: 2500,
      delay: 3
    },
    {
      name: "Central Evaluation Building",
      description: "Dedicated facility for examination and evaluation processes with secure storage and digital evaluation systems. Ensures fair and transparent assessment.",
      image: evaluationBuilding, // Use your Evaluation Building photo
      facilities: [
        "Examination Halls",
        "Secure Storage",
        "Digital Evaluation Center",
        "Result Processing Unit",
        "Surveillance Systems",
        "Administrative Offices"
      ],
      hours: "9:00 AM - 6:00 PM",
      location: "Administrative Zone",
      delay: 4
    },
    {
      name: "Student Activity Center",
      description: "Hub for student life and extracurricular activities including sports, cultural events, and student organizations. Features multipurpose halls and recreational facilities.",
      image: studentActivityCenter, // Use your Student Activity Center photo
      facilities: [
        "Multipurpose Auditorium",
        "Sports Complex",
        "Cultural Activity Rooms",
        "Student Council Offices",
        "Cafeteria",
        "Recreation Areas"
      ],
      hours: "6:00 AM - 10:00 PM",
      location: "Student Zone",
      capacity: 3000,
      delay: 1
    },
    {
      name: "International Centre",
      description: "Facilitating international collaborations, student exchanges, and global partnerships. Houses offices for international programs and visiting faculty.",
      image: internationalCentre, // Use your International Centre photo
      facilities: [
        "Conference Rooms",
        "International Student Services",
        "Language Labs",
        "Cultural Exchange Center",
        "Guest Faculty Offices",
        "Digital Communication Center"
      ],
      hours: "9:00 AM - 6:00 PM",
      location: "International Campus",
      delay: 2
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12 fade-in-up">
        <h2 className="text-4xl font-bold mb-4">Campus Infrastructure</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Explore our world-class buildings and facilities designed to provide an optimal 
          learning environment with modern amenities and cutting-edge technology.
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