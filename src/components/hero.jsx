'use client'

import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="flex flex-col items-center justify-center max-w-7xl"
            >
                <h1 className="text-7xl md:text-9xl font-bold mb-4 text-center text-gold">Angels</h1>
                <p className="text-4xl md:text-6xl font-bold mb-8 text-center text-cgold">
                    Unleashing a New Way to Make a Difference!
                </p>
            </motion.div>
        </section>
    )
}

export default HeroSection
