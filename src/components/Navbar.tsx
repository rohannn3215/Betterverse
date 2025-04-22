// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Menu, X, Code2 } from 'lucide-react';

// const navItems = ['About', 'Skills', 'Projects', 'Contact'];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [typedText, setTypedText] = useState('');
//   const fullText = "R J's Betterverse";
//   const index = useRef(0);

//   useEffect(() => {
//     const typing = setInterval(() => {
//       if (index.current < fullText.length) {
//         setTypedText((prev) => prev + fullText.charAt(index.current));
//         index.current += 1;
//       } else {
//         clearInterval(typing);
//       }
//     }, 100);
//     return () => clearInterval(typing);
//   }, []);

//   return (
//     <>
//       {/* Blurry Tech Logos Background */}
//       <div className="tech-background"></div>

//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.6, ease: 'easeOut' }}
//         className="fixed top-0 w-full z-50 navbar"
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           {/* Brand */}
//           <div className="flex items-center gap-2">
//             <Code2 className="w-6 h-6 text-purple-400 drop-shadow-[0_0_6px_rgba(128,0,255,0.4)]" />
//             <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-white bg-clip-text text-transparent whitespace-nowrap typing-blink">
//               {typedText}
//             </span>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex gap-8">
//             {navItems.map((item, index) => (
//               <motion.a
//                 key={item}
//                 href={`#${item.toLowerCase()}`}
//                 className="relative text-sm text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
//                 whileHover={{ scale: 1.08 }}
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: index * 0.1 }}
//               >
//                 <span className="relative z-10">{item}</span>
//                 <motion.span
//                   className=""
//                   whileHover={{ scale: 1 }}
//                 />
//                 <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-white to-purple-400 transition-all duration-300 hover:w-full" />
//               </motion.a>
//             ))}
//           </div>

//           {/* Mobile Button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-white transition"
//             >
//               {isOpen ? <X size={26} /> : <Menu size={26} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden px-6 pb-4 flex flex-col gap-2"
//             >
//               {navItems.map((item) => (
//                 <a
//                   key={item}
//                   href={`#${item.toLowerCase()}`}
//                   onClick={() => setIsOpen(false)}
//                   className="py-2 text-gray-300 hover:text-white text-base tracking-wide transition-colors"
//                 >
//                   {item}
//                 </a>
//               ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>
//     </>
//   );
// };

// export default Navbar;





'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = "R J's Betterverse";
  const index = useRef(0);

  useEffect(() => {
    const typing = setInterval(() => {
      if (index.current < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index.current));
        index.current += 1;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <>
      <div className="tech-background"></div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 w-full z-50 navbar"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-purple-400 drop-shadow-[0_0_6px_rgba(128,0,255,0.4)]" />
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-white bg-clip-text text-transparent whitespace-nowrap typing-blink">
              {typedText}
            </span>
          </div>

          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm text-gray-300 hover:text-white transition-all duration-300 ease-in-out"
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <span className="relative z-10">{item}</span>
                <motion.span className="" whileHover={{ scale: 1 }} />
                <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-white to-purple-400 transition-all duration-300 hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden px-6 pb-4 flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-gray-300 hover:text-white text-base tracking-wide transition-colors"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
