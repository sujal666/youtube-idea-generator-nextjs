"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export default function FeatureModal() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        Learn More
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-md w-full relative"
            >
              <h2 className="text-2xl font-bold mb-4 text-purple-400">Amazing Features</h2>
              <p className="text-gray-300 mb-4">
                Our AI-powered platform offers cutting-edge solutions for content creators:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Advanced topic generation</li>
                <li>Trend analysis and predictions</li>
                <li>Personalized content strategies</li>
                <li>Engagement optimization</li>
              </ul>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

