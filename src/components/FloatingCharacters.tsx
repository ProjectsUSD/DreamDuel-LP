'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FloatingCharacters() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* Las imágenes flotantes se agregarán aquí */}
    </div>
  );
}
