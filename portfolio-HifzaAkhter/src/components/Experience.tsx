
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Python Intern",
      company: "Islamabad, Pakistan",
      period: "June 2023 - September 2023",
      description: "Specialized in software solutions and developed custom class modules using Python for ERP solutions.",
      achievements: [
        "Developed custom Python modules for ERP systems",
        "Specialized in creating efficient software solutions",
        "Gained hands-on experience in python development"
      ]
    },
    {
      type: "education",
      title: "Bachelor of Science in Software Engineering",
      company: "COMSATS University Islamabad, Wah Cantt Campus",
      period: "September 2021 - May 2025",
      description: "Pursuing comprehensive education in software engineering with focus on modern development practices and emerging technologies.",
      achievements: [
        "Relevant Coursework: Data Structures, Algorithms, Databases",
        "Strong academic performance in core subjects",
        "Active participation in coding projects and software development"
      ]
    },
    {
      type: "education",
      title: "Pre-Medical",
      company: "Scholars Science College, Wah Cantt",
      period: "September 2019 - June 2021",
      description: "Completed pre-medical studies with excellent grades, developing strong analytical and scientific thinking skills.",
      achievements: [
        "Developed strong analytical and problem-solving skills",
        "Maintained excellent academic performance",
        "Built foundation in scientific methodology and research"
      ]
    },
    {
      type: "education",
      title: "Matriculation",
      company: "Bahira Foundation College, Wah Cantt",
      period: "April 2017 - May 2019",
      description: "Completed secondary education with strong foundation in mathematics and sciences.",
      achievements: [
        "Strong foundation in mathematics and sciences",
        "Excellent academic performance",
        "Developed core analytical thinking skills"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Education & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            My academic journey and professional experience in software development
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-full ${exp.type === 'work' ? 'bg-blue-100' : 'bg-green-100'}`}>
                    {exp.type === 'work' ? 
                      <Briefcase className={`${exp.type === 'work' ? 'text-blue-600' : 'text-green-600'}`} size={24} /> :
                      <GraduationCap className="text-green-600" size={24} />
                    }
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.title}</h3>
                    <p className="text-blue-600 font-medium text-lg">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center mt-2 md:mt-0">
                  <Calendar size={16} className="text-gray-500 mr-2" />
                  <span className={`px-3 py-1 rounded text-sm font-medium ${
                    exp.type === 'work' ? 'text-blue-600 bg-blue-50' : 'text-green-600 bg-green-50'
                  }`}>
                    {exp.period}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                {exp.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-gray-800 font-semibold mb-3">Key Highlights:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className={`mr-3 mt-1.5 w-2 h-2 rounded-full ${
                        exp.type === 'work' ? 'bg-blue-500' : 'bg-green-500'
                      }`}></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
