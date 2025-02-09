'use client'

import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Luaraujo Investment Calculator',
    description: 'A comprehensive financial calculator web application providing investment simulations and financial planning tools. Built with focus on performance and user experience.',
    link: 'https://luaraujo.com',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PHP'],
    features: [
      'Investment simulation tools',
      'Financial planning calculators',
      'Responsive design',
      'Performance optimized'
    ],
    category: 'Web Development'
  },
  {
    title: 'Environmental Impact Dashboard',
    description: 'An analytics dashboard for monitoring and visualizing environmental impact metrics of web applications.',
    link: 'https://github.com/Lucasdoreac',
    tech: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    features: [
      'Real-time monitoring',
      'Energy consumption tracking',
      'Carbon footprint calculation',
      'Resource optimization suggestions'
    ],
    category: 'Green Computing'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Showcasing sustainable and efficient solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary dark:text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-secondary-dark transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-secondary/10 text-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects