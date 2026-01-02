'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FloatingCharacters() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Floating Girl 1 - Hero Section (Arriba izquierda) */}
      <motion.div
        className="absolute top-[5%] left-[1%] w-56 h-80 opacity-30"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          rotate: [-2, 2, -2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/floating-3d/floating-1.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Floating Girl 2 - Hero Section (Arriba derecha) */}
      <motion.div
        className="absolute top-[8%] right-[2%] w-64 h-88 opacity-35"
        animate={{
          x: [0, -35, 0],
          y: [0, 25, 0],
          rotate: [3, -3, 3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Image
          src="/images/floating-3d/floating-2.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Floating Girl 3 - Character Carousel (Izquierda) */}
      <motion.div
        className="absolute top-[25%] left-[0%] w-52 h-72 opacity-25"
        animate={{
          x: [0, 50, 0],
          y: [0, -15, 0],
          rotate: [-1, 2, -1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Image
          src="/images/floating-3d/floating-3.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Floating Girl 4 - Features Section (Derecha) */}
      <motion.div
        className="absolute top-[40%] right-[1%] w-60 h-84 opacity-30"
        animate={{
          x: [0, -45, 0],
          y: [0, 20, 0],
          rotate: [2, -2, 2],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <Image
          src="/images/floating-3d/floating-4.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Floating Girl 5 - Live Simulator (Izquierda) */}
      <motion.div
        className="absolute top-[55%] left-[2%] w-56 h-80 opacity-28"
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
          rotate: [-2, 1, -2],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <Image
          src="/images/floating-3d/floating-5.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Floating Girl 6 - Pricing Section (Derecha) */}
      <motion.div
        className="absolute top-[70%] right-[0%] w-58 h-82 opacity-32"
        animate={{
          x: [0, -50, 0],
          y: [0, 18, 0],
          rotate: [3, -1, 3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      >
        <Image
          src="/images/floating-3d/floating-6.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Floating Girl 7 - Testimonials (Izquierda abajo) */}
      <motion.div
        className="absolute top-[82%] left-[1%] w-54 h-76 opacity-27"
        animate={{
          x: [0, 45, 0],
          y: [0, -20, 0],
          rotate: [-1, 2, -1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <Image
          src="/images/floating-3d/floating-7.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Floating Girl 8 - Footer Area (Derecha abajo) */}
      <motion.div
        className="absolute top-[90%] right-[2%] w-52 h-72 opacity-30"
        animate={{
          x: [0, -40, 0],
          y: [0, 22, 0],
          rotate: [2, -3, 2],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
      >
        <Image
          src="/images/floating-3d/floating-8.png"
          alt="Floating character"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Chicas adicionales flotando en el medio */}
      {/* Floating Girl Extra - Centro superior */}
      <motion.div
        className="absolute top-[18%] left-[8%] w-48 h-68 opacity-20"
        animate={{
          x: [0, 60, 0],
          y: [0, -18, 0],
          rotate: [-2, 1, -2],
        }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        <Image
          src="/images/floating-3d/floating-1.png"
          alt="Floating character"
          fill
          className="object-contain opacity-70"
        />
      </motion.div>

      {/* Floating Girl Extra - Centro derecha */}
      <motion.div
        className="absolute top-[48%] right-[6%] w-50 h-70 opacity-22"
        animate={{
          x: [0, -55, 0],
          y: [0, 28, 0],
          rotate: [3, -2, 3],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
      >
        <Image
          src="/images/floating-3d/floating-3.png"
          alt="Floating character"
          fill
          className="object-contain opacity-70"
        />
      </motion.div>

      {/* Floating Girl Extra - Centro izquierda bajo */}
      <motion.div
        className="absolute top-[63%] left-[5%] w-46 h-66 opacity-24"
        animate={{
          x: [0, 48, 0],
          y: [0, -22, 0],
          rotate: [-1, 2, -1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      >
        <Image
          src="/images/floating-3d/floating-5.png"
          alt="Floating character"
          fill
          className="object-contain opacity-70"
        />
      </motion.div>
    </div>
  );
}
