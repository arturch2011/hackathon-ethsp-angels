'use client'

import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.section
            className="w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="my-20 mx-auto w-1/2 flex flex-col justify-center items-center">
                <motion.h2
                    className="text-6xl font-bold text-center text-gold font-bold"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Harnessing Blockchain for Effective Campaigns and Donations
                </motion.h2>
            </div>
            <div className="w-full mx-auto px-20 max-w-screen-2xl grid grid-cols-1 md:grid-cols-2">
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-gold overflow-hidden"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col items-center md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl text-gold font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Blockchain: The Foundation of Trust in Giving
                            </motion.h1>
                            <motion.p
                                className="mt-4 text-cgold font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                By leveraging blockchain technology, Angels ensures transparency and accountability in
                                every step of the donation process. Through its decentralized and immutable nature,
                                blockchain creates a permanent record of transactions, enabling donors to track their
                                contributions and verify their impact. This transparency fosters trust among donors and
                                recipients, encouraging widespread participation in campaigns and increasing the overall
                                effectiveness of the platform.
                            </motion.p>
                        </div>
                        <div className="w-full border-b border-solid border-gold h-20 border-0 md:border-b"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-gold overflow-hidden"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl text-gold font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Direct Giving: Cutting Out the Middlemen
                            </motion.h1>
                            <motion.p
                                className="mt-4 text-cgold font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                With Angels, traditional intermediaries and their associated fees become a thing of the
                                past. By utilizing smart contracts on the blockchain, the platform connects donors
                                directly with recipients, enabling faster and more efficient transfers of funds. This
                                direct giving approach eliminates unnecessary costs and ensures that a higher proportion
                                of donations reach those in need, making a tangible and immediate impact on communities
                                around the world.
                            </motion.p>
                        </div>
                        <div className="w-full border-b border-solid border-gold h-20 border-0 md:border-b"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-gold overflow-hidden"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl text-gold font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Empowering Communities Worldwide
                            </motion.h1>
                            <motion.p
                                className="mt-4 text-cgold font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Angels leverages the global nature of blockchain technology to connect people from all
                                corners of the world. The platform transcends geographical boundaries, allowing
                                individuals, organizations, and communities from any country to create and participate
                                in campaigns. This inclusivity not only expands the donor pool but also enables targeted
                                assistance to regions facing specific challenges, fostering a truly global movement of
                                giving and solidarity.
                            </motion.p>
                        </div>
                        <div className="w-full border-0 border-solid border-gold h-20 border-b md:border-0"></div>
                    </div>
                </motion.div>
                <motion.div
                    className="md:border-0 md:odd:border-r md:border-solid md:border-gold overflow-hidden"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className="text-center h-full flex flex-col items-center md:pt-20 md:mx-[2px]">
                        <div className="max-w-md flex-1 flex flex-col md:px-10 lg:px-1/12 xl:px-2/12">
                            <motion.h1
                                className="mt-4 text-4xl text-gold font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                Technology-Driven Efficiency
                            </motion.h1>
                            <motion.p
                                className="mt-4 text-cgold font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                            >
                                Angels harnesses the power of advanced technology to streamline the donation process. By
                                utilizing blockchain's decentralized infrastructure, the platform achieves enhanced
                                efficiency, reducing overhead costs and minimizing administrative burdens. Additionally,
                                the scalability of blockchain allows Angels to handle a high volume of transactions,
                                ensuring that campaigns can rapidly scale and respond to urgent needs. This
                                technology-driven efficiency enables Angels to make a significant impact on a global
                                scale.
                            </motion.p>
                        </div>
                        <div className="w-full border-0 border-solid border-gold h-20 border-b md:border-0"></div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default About
