import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "SalonSphere",
      period: "Oct 2023 - May 2024",
      description: "Developed a robust full-stack platform for salon services, enabling seamless booking, beauty product purchases, and vendor management. Features include a vendor/salon dashboard for managing bookings and inventory, and an admin dashboard for overseeing platform operations.",
      tech: ["Next.js",  "MongoDB", "JavaScript"],
      category: "Full Stack Web Application",
      highlights: ["Vendor/Salon Dashboard", "Admin Dashboard", "Time Scheduling", "Product Purchases"],
      image: "/lovable-uploads/cdc.jpg",
      deployedLink: "https://salonsphere.vercel.app"
    },
    {
      title: "HealthyLiving",
      period: "Sep 2023 - Jan 2024",
      description: "Built a comprehensive healthcare platform for online doctor consultations and appointment booking, integrated with nutrition and workout tracking systems. Developed using Laravel for robust backend functionality.",
      tech: ["Laravel", "PHP", "MySQL", "HTML/CSS"],
      category: "Healthcare Platform",
      highlights: ["Doctor Consultations", "Appointment Booking", "Health Tracking"],
      image: "/lovable-uploads/healthyliving.png"
    },
    {
      title: "Emotion-Based Music Recommendation System",
      period: "Mar 2023 - Jul 2023",
      description: "Designed an intelligent system to recommend music based on emotion detection using computer vision and machine learning technologies. Currently not deployed but available for demonstration upon request.",
      tech: ["Python", "OpenCV", "TensorFlow", "Machine Learning"],
      category: "AI/ML Project",
      highlights: ["Emotion Detection", "Music Recommendation", "Computer Vision"],
      image: "/lovable-uploads/emotion.jpg"
      
    },
    {
      title: "Ride-Sharing App UI/UX Design",
      period: "Nov 2022 - Jan 2023",
      description: "Designed a user-friendly ride-sharing interface with a focus on accessibility and user experience. Created high-fidelity prototypes and a comprehensive design system in Figma.",
      tech: ["Figma", "UI/UX Design", "Prototyping", "User Research"],
      category: "UI/UX Design",
      highlights: ["User-Friendly Interface", "High-Fidelity Designs", "Design System"],
      image: "/lovable-uploads/ride1.png",
      figmaLink: "/lovable-uploads/riding-removebg-preview.png"
    }
  ];

  const categoryColors = {
    "Full Stack Web Application": "from-blue-500 to-blue-600",
    "Healthcare Platform": "from-green-500 to-green-600",
    "AI/ML Project": "from-purple-500 to-purple-600",
    "UI/UX Design": "from-pink-500 to-pink-600"
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Showcasing my expertise in full-stack development, AI/ML, and UI/UX design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-4">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={16} className="mr-1" />
                    {project.period}
                  </div>
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r ${categoryColors[project.category]}`}>
                  {project.category}
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.highlights.map((highlight, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-200"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.deployedLink && (
                  <a
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </a>
                )}
                {project.figmaLink && (
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-md transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Figma Design
                  </a>
                )}
                {!project.deployedLink && !project.figmaLink && (
                 <a
  href="#contact"
  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 rounded-md transition-all duration-300"
>
  <ExternalLink size={16} className="mr-2" />
  Contact for Demo
</a>

                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;