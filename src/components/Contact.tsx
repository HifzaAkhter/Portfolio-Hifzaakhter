import { Card } from "@/components/ui/card";
import { Github, Linkedin, MapPin, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Gulshan Colony, Wah Cantt, Pakistan",
      link: null,
    },
    {
      icon: Mail,
      label: "Email",
      value: "hifxaakhter@gmail.com",
      link: "mailto:hifxaakhter@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/hifza-akhter",
      link: "https://github.com/hifza-akhter",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/hifza-akhter",
      link: "https://linkedin.com/in/hifza-akhter",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-5 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Excited to collaborate on innovative projects? Reach out and let's create something extraordinary together!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-10">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-5">Get In Touch</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed max-w-md">
                I'm passionate about new opportunities and love connecting with like-minded individuals. Reach out via the platforms below!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-100/50 dark:border-gray-700/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out"
                >
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                    <info.icon className="text-blue-600 dark:text-blue-400" size={22} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                      {info.label}
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium text-base block mt-1.5"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-800 dark:text-gray-100 font-medium text-base block mt-1.5">
                        {info.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form Card */}
<Card className="p-8 bg-white border border-gray-100 shadow-sm rounded-xl w-full mx-auto lg:mx-0 mt-32 lg:mt-[12rem]">            <div className="space-y-8">
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white">Contact Me</h3>
              <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                Reach out directly via WhatsApp or explore other ways to connect.
              </p>
              <a
                href="https://wa.me/+923165103342"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center py-4 px-8 bg-gradient-to-r from-[#128C7E] to-[#25D366] hover:from-[#0e7a6e] hover:to-[#1fb356] transition-all duration-300 font-semibold text-white rounded-xl shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-700 focus:ring-offset-2"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;