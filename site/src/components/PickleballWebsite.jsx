import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export default function PickleballWebsite() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-96 overflow-hidden flex items-center justify-center bg-gradient-to-r from-green-900 via-green-800 to-green-700">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg text-white">
            Pickleball Courts
          </h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow text-gray-200">
            Join us for fun, fitness, and friendly competition
          </p>
          <Button
            asChild
            className="bg-green-600 text-white hover:bg-green-500 hover:text-white"
          >
            <a
              href="https://example.com/reservations"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reserve a Court
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Info Section */}
      <section className="container mx-auto px-4 py-8 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Card className="rounded-2xl bg-gray-800 text-gray-100 shadow-lg">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">About Our Courts</h2>
              <p>
                We offer well-maintained pickleball courts designed for players
                of all levels. Our facility includes ample seating, shaded
                areas, and restrooms. Come experience the fastest growing
                sport in a friendly and vibrant environment!
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl bg-gray-800 text-gray-100 shadow-lg">
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">
                Location &amp; Amenities
              </h2>
              <p>
                Conveniently located near downtown, our courts are easy to reach
                by public transport or car. Enjoy free parking, equipment
                rentals, and a small pro shop. After your game, relax at nearby
                cafes and restaurants.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Image Gallery Section */}
      <section className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://source.unsplash.com/featured/?pickleball"
              alt="Pickleball 1"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <img
              src="https://source.unsplash.com/featured/?tenniscourt"
              alt="Pickleball 2"
              className="w-full h-48 object-cover rounded-2xl"
            />
            <img
              src="https://source.unsplash.com/featured/?sports"
              alt="Pickleball 3"
              className="w-full h-48 object-cover rounded-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6 mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pickleball Courts. All rights
            reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
