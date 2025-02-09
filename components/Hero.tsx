'use client'

import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-primary dark:text-white">Hello, I'm </span>
            <span className="text-secondary">Lucas Dórea</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Environmental Manager turned Computer Science Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg transition-colors duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12"
          >
            <p className="text-gray-600 dark:text-gray-300">
              Creating eco-conscious technology solutions that prioritize both environmental impact and technical efficiency
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent rounded-full filter blur-3xl"
        />
      </div>
    </section>
  )
}

export default Hero