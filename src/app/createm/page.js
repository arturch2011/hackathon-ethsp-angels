'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import web3 from '../../../Instances/web3';
import angelsFactoryContract from '../../../Instances/AngelsFactory';

const Create = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [deadline, setDeadline] = useState('');
    const [minimum, setMinimum] = useState('');
    const [description, setDescription] = useState('');

    const createCampaignHanddler = async () => {
        const accounts = await web3.eth.getAccounts();
        const angelsFactory = angelsFactoryContract(web3);
        await angelsFactory.methods.createAngel(name, goal, deadline, minimum, description).send({ from: accounts[0] });
    };

    return (
        <section className="bg-blue py-28 flex flex-col items-center justify-center min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="max-w-3xl mx-auto"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-bold mb-8 text-center text-purple-600"
                    >
                        Create a GoalGame
                    </motion.h2>
                    <motion.div variants={itemVariants} className="bg-dgold rounded-md p-8 shadow-md">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-xl font-medium mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Campaign Name"
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="goal" className="block text-xl font-medium mb-2">
                                Goal
                            </label>
                            <input
                                type="goal"
                                id="goal"
                                placeholder="Amount To Be Collected"
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setGoal(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="deadline" className="block text-xl font-medium mb-2">
                                Deadline
                            </label>
                            <input
                                type="deadline"
                                id="deadline"
                                placeholder="Days"
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setDeadline(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="minimum" className="block text-xl font-medium mb-2">
                                Minimum Contribution
                            </label>
                            <input
                                type="minimum"
                                id="minimum"
                                placeholder="Minimum Donation Amount"
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setMinimum(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="description" className="block text-xl font-medium mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                placeholder="Campaign Description"
                                rows={5}
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="bg-purple-600 text-white px-6 py-3 rounded-md font-bold text-lg shadow-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={createCampaignHanddler}
                        >
                            Create
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Create;
