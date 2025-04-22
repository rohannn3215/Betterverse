import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, FileText } from 'lucide-react';
import TechStack from '../components/TechStack';

const Section = ({ children, id }: { children: React.ReactNode; id: string }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="section-container"
    >
      {children}
    </motion.section>
  );
};

const Home = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with real-time updates, payment integration, and admin dashboard.",
      image: "https://st2.depositphotos.com/1760420/5432/i/450/depositphotos_54324565-stock-photo-online-shopping-and-e-commerce.jpg",
      tech: ["React", "Node.js", "MongoDB", "Express"]
    },
    {
      title: "Project Sanction Dashboard",
      description: "Collaborative college Semester project management tool with real-time updates and team features.",
      image: "https://media.istockphoto.com/id/1317443847/photo/project-manager-working-on-gantt-chart-to-update-the-schedule-tasks-and-milestones-progress.jpg?s=612x612&w=0&k=20&c=FDsi1mRxUw3uHIOTMBNcKcFyxoX6O8ux0ne2bX9q-IU=",
      tech: ["Html", "CSS", "Javascript", "PHP"]
    },
    {
      title: "AgriConnect - A Farmer's Marketplace",
      description: "A digital platform that connects farmers directly with buyers, enabling seamless crop listing, real-time updates, and smarter agricultural decisions.",
      image: "https://media.istockphoto.com/id/143917299/photo/farmer-counts-yields-on-a-computer.jpg?s=612x612&w=0&k=20&c=sf5AxvdEfCtJLWRA7WwxEK3f_V5Xk1Vp8t8cg3a3BOs=",
      tech: ["React", "Express", "MongoDB", "Node.js" ]
    },
    {
      title: "iphone/ios Calculator clone",
      description: "A sleek and functional replica of the native iPhone calculator, designed to deliver an authentic and intuitive user experience.",
      image: "https://img.goodfon.com/wallpaper/big/2/25/apple-black-rebristyy.webp",
      tech: [ "Java", "Andriod studio"]
    }
  ];

  const socialLinks = [
    { href: "https://github.com/rohannn3215", icon: Github, text: "GitHub" },
    { href: "https://www.linkedin.c~om/in/rohannn-jadhavvv-3215fgtge/", icon: Linkedin, text: "LinkedIn" },
    { href: "project\assets\RESUME - Rohan Jadhav (1).pdf", icon: FileText, text: "Resume" }
  ];

  return (
    <div className="relative animated-gradient  ">
      {/* Hero Section */}
      <Section id="hero">
        <div className="relative flex flex-col items-center justify-center min-h-screen text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 relative"
          >
            <img
              src="../assets/rohan.jpg"
              alt="Rohan Jadhav"
              className="w-60 h-60 rounded-full border-4 border-purple-500 object-cover"
            />
            <motion.div
              className="absolute inset-0 border-4 border-purple-500 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 glowing-text"
          >
            Hi, I'm Rohan Jadhav
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-400 mb-8"
          >
            Crafting impactful digital solutions with code, creativity & motion
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.text}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.text}</span>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8"
          >
            <ChevronDown className="w-8 h-8 text-purple-500" />
          </motion.div>
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <motion.h2 className="text-4xl font-bold mb-8 glowing-text">
          About Me
        </motion.h2>
        <motion.p className="text-gray-300 text-xl max-w-6xl">
        I’m a Full Stack Developer and Creative Technologist, pursuing Computer Engineering at R.C. Patel Institute of Technology. I specialize in building robust web applications using the MERN stack, with a strong foundation in Java, React.js, and backend systems.

Beyond development, I bring a creative edge as a freelance video editor and designer. With tools like Premiere Pro, After Effects, and Photoshop, I craft compelling visual content—from cinematic edits to polished graphics—blending storytelling with design precision.

With a unique fusion of logic and creativity, I aim to deliver digital experiences that are both technically sound and visually engaging.
        </motion.p>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <motion.h2 className="text-3xl font-bold mb-12 glowing-text">
          Skills & Technologies
        </motion.h2>
        <TechStack />
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <motion.h2 className="text-3xl font-bold mb-12 glowing-text">
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="tech-card group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 glowing-text">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-purple-500/20 rounded-full border border-purple-500/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Hire Me Section */}
      <Section id="Contact">
        <motion.h2 className="text-3xl font-bold mb-12 glowing-text">
          Hire Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="tech-card"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-[#0a0a0f] rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-[#0a0a0f] rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-[#0a0a0f] rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <button className="glow-button w-full">
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="tech-card flex flex-col justify-center items-center gap-8"
          >
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold glowing-text">Let's Work Together</h3>
              <p className="text-gray-400">
                I'm currently available for freelance work and full-time positions.
                If you're interested in working together, let's connect!
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Home;


