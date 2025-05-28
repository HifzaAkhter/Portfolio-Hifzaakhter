import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Fields",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send email");

      await response.json();

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send email. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hifxaakhter@gmail.com",
      link: "mailto:hifxaakhter@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "0316-5103342",
      link: "tel:+923165103342",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gulshan Colony, Wah Cantt, Pakistan",
      link: null,
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
    <section id="contact" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Let's Connect</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-600 mt-3 text-base max-w-xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get In Touch</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a question, want to collaborate, or just want to say hello, I'd love to hear from you!
              </p>
            </div>

            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white rounded-md shadow-sm border border-gray-200"
                >
                  <div className="p-2 bg-blue-100 rounded-md">
                    <info.icon className="text-blue-500" size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-600">{info.label}</div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-800 hover:text-blue-500 transition-colors font-medium text-sm"
                        target={info.link.startsWith("http") ? "_blank" : undefined}
                        rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-800 font-medium text-sm">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-5">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-semibold text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;