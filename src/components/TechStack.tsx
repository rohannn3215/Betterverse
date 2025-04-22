import { motion } from 'framer-motion';
import {
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiJavascript, SiTypescript, SiTailwindcss,
 SiGit, SiPhp, SiMysql , SiHtml5 ,SiPostman, SiCss3 ,
  SiFigma, SiAdobepremierepro, SiAdobeaftereffects
} from 'react-icons/si';

const technologies = [
  { name: 'Html5', icon: SiHtml5, color: '#F24E1E' },
  { name: 'CSS', icon: SiCss3, color: '#F24E1E' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#000000' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Postman', icon: SiPostman, color: '#F05032' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Premiere Pro', icon: SiAdobepremierepro, color: '#9999FF' },
  { name: 'After Effects', icon: SiAdobeaftereffects, color: '#9999FF' },
];

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
    >
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          className="tech-card group"
        >
          <motion.div
            className="flex flex-col items-center gap-3 relative"
            whileHover={{ y: -5 }}
          >
            <tech.icon
              className="w-12 h-12 transition-all duration-300 group-hover:text-[#8B5CF6]"
              style={{ color: tech.color }}
            />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              {tech.name}
            </span>
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default TechStack;