import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "Python", level: 90, category: "Programming Languages" },
    { name: "JavaScript", level: 85, category: "Programming Languages" },
       { name: "React", level: 90, category: "Programming Languages" },

    { name: "PHP", level: 75, category: "Programming Languages" },
    { name: "React", level: 90, category: "Frontend Frameworks" },
    { name: "Next.js", level: 90, category: "Frontend Frameworks" },
    { name: "HTML/CSS", level: 95, category: "Frontend Frameworks" },
    { name: "Tailwind", level: 90, category: "Frontend Frameworks" },
    { name: "Node.js", level: 80, category: "Backend Technologies" },
    { name: "Laravel", level: 75, category: "Backend Technologies" },
        { name: "Next.js", level: 75, category: "Backend Technologies" },

    { name: "MongoDB", level: 80, category: "Backend Technologies" },
    { name: "MySQL", level: 75, category: "Backend Technologies" },
    { name: "Git", level: 60, category: "Tools & Technologies" },
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
    "Programming Languages": {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-700/50",
    },
    "Frontend Frameworks": {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-600 dark:text-green-400",
      border: "border-green-200 dark:border-green-700/50",
    },
    "Backend Technologies": {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-700/50",
    },
    "Tools & Technologies": {
      bg: "bg-orange-100 dark:bg-orange-900/30",
      text: "text-orange-600 dark:text-orange-400",
      border: "border-orange-200 dark:border-orange-700/50",
    },
    "AI & Machine Learning": {
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      text: "text-indigo-600 dark:text-indigo-400",
      border: "border-indigo-200 dark:border-indigo-700/50",
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-gray-500 to-gray-700 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            A curated collection of modern technologies and programming languages I specialize in.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category}
              className="p-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-gray-100/50 dark:border-gray-700/50 shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 tracking-wide">
                  {category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-block px-4 py-2 ${categoryColors[category].bg} ${categoryColors[category].text} ${categoryColors[category].border} border rounded-full text-sm font-medium hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default`}
                    >
                      {skill.name}
                    </span>
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