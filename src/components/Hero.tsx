import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowRight, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion"; // For animations

const Hero = () => {
  // Animation variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-teal-50 via-white to-coral-50 pt-16 overflow-hidden"
    >
      {/* Background Animation (Subtle particle-like effect) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,127,127,0.15)_0%,_transparent_70%)] animate-pulse" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-300/10 rounded-full blur-3xl animate-slow-bounce" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-coral-300/10 rounded-full blur-3xl animate-slow-bounce-delayed" />
      </div>

      <motion.div
        className="text-center max-w-4xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image with Professional Frame and Zoom */}
        <motion.div variants={itemVariants} className="mb-8 flex justify-center">
          <div className="relative w-36 h-36 md:w-44 md:h-44 group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-300 to-coral-300 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-full h-full bg-white rounded-full p-1 border-2 border-gray-100 shadow-xl">
              <img
  src="/lovable-uploads/profile3.jpg"
  alt="Hifza Akhter"
  className="w-full h-full rounded-full object-cover object-[40%_20%]"
/>

            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8 space-y-4">
          <div className="bg-gradient-to-r from-teal-500 via-coral-500 to-gold-400 bg-clip-text text-transparent">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight">
              Hifza Akhter
            </h1>
          </div>

          <h2 className="text-xl md:text-2xl text-teal-800 mb-4 font-medium tracking-wide">
            Full Stack Web Developer 
          </h2>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
            Passionate and innovative developer with expertise in creating user-centered designs,
            developing location-aware applications, and leveraging technology to solve real-world problems.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-gray-700">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-teal-600" />
              <span>0316-5103342</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-teal-600" />
              <span>Gulshan Colony, Wah Cantt, Pakistan</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="relative bg-gradient-to-r from-teal-500 to-coral-500 hover:from-teal-600 hover:to-coral-600 text-white px-8 py-3 font-semibold shadow-lg border-0 group overflow-hidden"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            View My Projects
            <ArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </Button>

          <a
            href="/Resumee.pdf"
            download="Resumee.pdf"
            className="relative inline-flex items-center px-8 py-3 text-sm font-semibold text-gold-400 border-2 border-gold-400 hover:bg-gold-400 hover:text-white rounded-md transition-all duration-300 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gold-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <Download className="mr-2" size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="flex justify-center space-x-6">
          <a
            href="https://github.com/hifza-akhter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-500 transition-all duration-300 p-3 rounded-full hover:bg-teal-50 group"
          >
            <Github
              size={28}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a
            href="https://linkedin.com/in/hifza-akhter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-teal-500 transition-all duration-300 p-3 rounded-full hover:bg-teal-50 group"
          >
            <Linkedin
              size={28}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
          </a>
          <a
            href="mailto:hifzaakhter@gmail.com"
            className="text-gray-600 hover:text-teal-500 transition-all duration-300 p-3 rounded-full hover:bg-teal-50 group"
          >
            <Mail
              size={28}
              className="transform group-hover:scale-110 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;