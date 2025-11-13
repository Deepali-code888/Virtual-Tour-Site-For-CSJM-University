import { DepartmentCard } from "./DepartmentCard";
import academicBuilding from "@/assets/academic-building.jpg";
import SchoolOfBusinessManagement from "@/assets/School-of-Business-Management.jpg";
import libraryInterior from "@/assets/library.jpeg";
import atalbihari from "@/assets/AtalBihariLegalStudy.jpg";
import DepartmentOfBSBT from "@/assets/Dept-of-BSBT.jpg";
import DepartmentofEngineering from "@/assets/uiet-campus-1.jpg";

export const DepartmentsSection = () => {
  const departments = [
    {
      name: "School of Engineering & Technology (UIET)",
      description: "A premier engineering institution offering cutting-edge programs in Computer Science, Electronics, Mechanical, and Civil Engineering. Our faculty comprises renowned researchers and industry experts.",
      image: DepartmentofEngineering,
      faculty: 120,
      courses: ["B.Tech", "M.Tech", "PhD", "Integrated Programs"],
      achievements: [
        "AICTE approved programs",
        "State-of-the-art laboratories",
        "Industry partnerships with tech giants",
        "100% placement record in core branches"
      ],
      link: "https://csjmu.ac.in/school-of-engineering-and-technology/",
      delay: 1
    },
    {
      name: "School of Business Management",
      description: "Nurturing future business leaders through comprehensive management education, case-based learning, and industry exposure. Our MBA program is recognized among the top in the region.",
      image: SchoolOfBusinessManagement,
      faculty: 45,
      courses: ["MBA", "PGDM", "Executive MBA", "PhD in Management"],
      achievements: [
        "NAAC A+ accredited",
        "Corporate tie-ups with Fortune 500 companies",
        "International exchange programs",
        "Entrepreneurship incubation center"
      ],
      link: "https://csjmu.ac.in/departments/school-of-business-management/",
      delay: 2
    },
    {
      name: "School of Life Sciences & Biotechnology",
      description: "Advancing scientific research in life sciences with modern laboratories and research facilities. Our programs integrate theoretical knowledge with practical applications.",
      image: DepartmentOfBSBT,
      faculty: 60,
      courses: ["B.Sc", "M.Sc", "PhD", "Integrated M.Sc"],
      achievements: [
        "Advanced research laboratories",
        "Collaborative research projects",
        "Published research in international journals",
        "Industry partnerships in biotech sector"
      ],
      link: "https://csjmu.ac.in/departments/department-of-life-sciences-and-biotechnology/",
      delay: 3
    },
    {
      name: "Atal Bihari Vajpayee School of Legal Studies",
      description: "Providing comprehensive legal education with emphasis on constitutional law, corporate law, and human rights. Our graduates excel in legal practice and judiciary.",
      image: atalbihari,
      faculty: 35,
      courses: ["LLB", "LLM", "BA LLB", "PhD in Law"],
      achievements: [
        "Bar Council of India approved",
        "Moot court competitions",
        "Legal aid clinic",
        "High success rate in judicial services"
      ],
      link: "https://csjmu.ac.in/departments/atal-bihari-vajpayee-school-of-legal-studies/",
      delay: 4
    },
    {
      name: "School of Arts, Humanities & Social Sciences",
      description: "Fostering critical thinking and cultural understanding through diverse programs in humanities and social sciences. Our interdisciplinary approach prepares students for various career paths.",
      image: libraryInterior,
      faculty: 80,
      courses: ["BA", "MA", "PhD", "Diploma Programs"],
      achievements: [
        "Research centers in social sciences",
        "Cultural heritage preservation projects",
        "Community outreach programs",
        "International faculty exchange"
      ],
      delay: 1
    },
    {
      name: "School of Pharmaceutical Sciences",
      description: "Leading pharmaceutical education and research with modern laboratories and industry collaborations. Our graduates contribute significantly to the healthcare sector.",
      image: DepartmentOfBSBT,
      faculty: 50,
      courses: ["B.Pharm", "M.Pharm", "PharmD", "PhD"],
      achievements: [
        "AICTE and PCI approved",
        "Modern pharmaceutical laboratories",
        "Industry internship programs",
        "Research in drug development"
      ],
      delay: 2
    }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12 fade-in-up">
        <h2 className="text-4xl font-bold mb-4">Academic Excellence</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Discover our diverse schools and departments offering world-class education across 
          multiple disciplines with experienced faculty and modern facilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((department, index) => (
          <DepartmentCard
            key={index}
            {...department}
            delay={department.delay}
          />
        ))}
      </div>
    </section>
  );
};