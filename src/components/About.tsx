import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  Code,
  Users,
  Target,
  Award,
  TrendingUp,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Software Engineering at COMSATS University",
    },
    {
      icon: Code,
      title: "Full Stack",
      description: "React, Node.js, Python, Laravel",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Led 3-member team, 2 weeks early delivery",
    },
    {
      icon: Award,
      title: "Achievement",
      description: "95% user satisfaction in UI initiatives",
    },
  ];

  const achievements = [
    {
      icon: TrendingUp,
      stat: "95%",
      label: "User Satisfaction Rate",
    },
    {
      icon: Users,
      stat: "3+",
      label: "Team Members Led",
    },
    {
      icon: Award,
      stat: "2 weeks",
      label: "Early Project Delivery",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Full Stack Web Developer & UI/UX Designer with a passion for
            innovation
          </p>
        </div>

        {/* Top 2-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-12">
          {/* Left Column - Text */}
          <div className="space-y-5">
            <h3 className="text-xl font-bold text-gray-900">
              Passionate Full Stack Developer & Designer
            </h3>
            <p className="text-gray-600 text-base leading-relaxed">
              I am a passionate and innovative Full Stack Web Developer and
              UI/UX Designer, recently graduated with a Bachelor's degree in
              Software Engineering from COMSATS University Islamabad. My
              interdisciplinary background also includes a foundation in
              Biology, which fuels my analytical and problem-solving abilities.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              I specialize in crafting user-centered designs, building
              location-aware web applications, and using technology to address
              real-world challenges. My journey includes hands-on experience as
              a Python Intern, leading collaborative team projects, and
              consistently delivering creative, scalable solutions.
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              As a fresh graduate, I bring a strong academic foundation, a
              portfolio of practical work, and an eagerness to grow and
              contribute in dynamic tech environments. I’m actively seeking
              opportunities where I can apply my skills, learn from industry
              experts, and make meaningful impact through innovative
              development.
            </p>
          </div>

          {/* Right Column - Quick Info Card */}
          <Card className="p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-5 text-center">
              Quick Info
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md border border-blue-100">
                <span className="text-gray-600 font-medium">Location</span>
                <span className="text-blue-500 font-semibold">
                  Wah Cantt, Pakistan
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md border border-blue-100">
                <span className="text-gray-600 font-medium">University</span>
                <span className="text-blue-500 font-semibold">
                  COMSATS University
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md border border-blue-100">
                <span className="text-gray-600 font-medium">Major</span>
                <span className="text-blue-500 font-semibold">
                  Software Engineering
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-md border border-green-100">
                <span className="text-gray-600 font-medium">Status</span>
                <span className="text-green-600 font-semibold">
                  Available for Opportunities
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Highlight Cards - Single Row Below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="flex items-center p-4 bg-white border border-gray-200 shadow-sm rounded-md transition-transform transform hover:scale-105 hover:shadow-md"
            >
              <div className="p-2 bg-blue-100 rounded-md">
                <item.icon className="text-blue-500" size={20} />
              </div>
              <div className="ml-3">
                <h4 className="text-gray-900 font-semibold text-sm">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs mt-1">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-teal-500 rounded-xl p-6 text-white">
          <h3 className="text-xl font-bold text-center mb-6">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <achievement.icon size={36} className="text-blue-200" />
                </div>
                <div className="text-2xl font-bold mb-1">
                  {achievement.stat}
                </div>
                <div className="text-blue-100 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
