import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "Python", level: 90, category: "Programming Languages" },
    { name: "JavaScript", level: 85, category: "Programming Languages" },
    { name: "Java", level: 60, category: "Programming Languages" },
    { name: "PHP", level: 75, category: "Programming Languages" },
    { name: "React", level: 90, category: "Frontend Frameworks" },
    { name: "Next.js", level:90, category: "Frontend Frameworks" },
    { name: "HTML/CSS", level: 95, category: "Frontend Frameworks" },
    { name: "Tailwind", level: 90, category: "Frontend Frameworks" },
    { name: "Node.js", level: 80, category: "Backend Technologies" },
    { name: "Laravel", level: 75, category: "Backend Technologies" },
    { name: "MongoDB", level: 80, category: "Backend Technologies" },
    { name: "MySQL", level: 75, category: "Backend Technologies" },
    { name: "Git", level:60, category: "Tools & Technologies" },
    { name: "Figma", level: 90, category: "Tools & Technologies" },
    { name: "VS Code", level: 95, category: "Tools & Technologies" },
    { name: "OpenCV", level: 70, category: "AI & Machine Learning" },
    { name: "TensorFlow", level: 70, category: "AI & Machine Learning" },
    { name: "Streamlit", level: 60, category: "AI & Machine Learning" },
  ];

  const categories = [
    "Programming Languages",
    "Frontend Frameworks",
    "Backend Technologies",
    "Tools & Technologies",
    "AI & Machine Learning",
  ];

  const categoryColors = {
    "Programming Languages": "from-blue-500 to-blue-600",
    "Frontend Frameworks": "from-green-500 to-green-600",
    "Backend Technologies": "from-purple-500 to-purple-600",
    "Tools & Technologies": "from-orange-500 to-orange-600",
    "AI & Machine Learning": "from-indigo-500 to-indigo-600", // Changed from red to indigo
  };

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and programming languages
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category}
              className="p-6 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">
                  {category}
                </h3>
                <div
                  className={`w-full h-1 bg-gradient-to-r ${categoryColors[category]} rounded-full`}
                ></div>
              </div>

              <div className="space-y-5">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-indigo-600 font-bold">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`bg-gradient-to-r ${categoryColors[category]} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;