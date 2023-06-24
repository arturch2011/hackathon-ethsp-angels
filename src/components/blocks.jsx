'use client';

import { motion } from 'framer-motion';

const Blocks = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2,
                delayChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="flex flex-col items-center"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-bold mb-8 text-center text-gray-500"
                    >
                        The GoalGame
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div variants={itemVariants} className="bg-gray-500 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Welcome to GoalGame</h3>
                            <p>
                                Welcome to GoalGame, an exciting blockchain-based game that combines personal
                                goal-setting, financial incentives, and social impact. In this innovative platform,
                                users are invited to deposit money and challenge themselves to achieve their goals
                                within a specified timeframe. The game leverages the power of blockchain technology to
                                ensure transparency, security, and fairness in all transactions.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-gray-500 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Charitable Campaigns and Social Impact</h3>
                            <p>
                                If the player fails to achieve their goals, the deposited money will be directed towards
                                charitable campaigns generated on the GoalGame website, also on the blockchain. These
                                campaigns will be carefully selected, focusing on relevant and impactful social causes.
                                This way, the money that wasn't redeemed by the players will be converted into valuable
                                resources to help those in need.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="bg-gray-500 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold mb-4">Financial Rewards for Success</h3>
                            <p>
                                On the other hand, if the player successfully achieves their goals within the
                                established timeframe, they will be entitled to receive a portion of the money deposited
                                by players who couldn't meet their goals. This financial reward serves as an additional
                                incentive to motivate and encourage players to give their best in order to reach their
                                objectives. The distribution of earnings will be fair and transparent, taking into
                                account each player's individual performance.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Blocks;
