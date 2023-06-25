'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import web3 from '../../../Instances/web3';
import dailyImprovementsFactoryContract from '../../../Instances/DailyImprovementsFactory';

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
    const [description, setDescription] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [category, setCategory] = useState('');
    const [validator, setValidator] = useState('');

    const createCampaignHanddler = async () => {
        const accounts = await web3.eth.getAccounts();
        const dailyImprovementsFactory = dailyImprovementsFactoryContract(web3);
        await dailyImprovementsFactory.methods
            .createDailyImprovements(name, goal, description, start, end, validator, category)
            .send({ from: accounts[0] });
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
                        className="text-4xl md:text-6xl font-bold mb-8 text-center text-purple"
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
                                placeholder="GoalGame Name"
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
                                placeholder="Main objective of the GoalGame"
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setGoal(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="start" className="block text-xl font-medium mb-2">
                                Start Date
                            </label>
                            <input
                                type="start"
                                id="start"
                                placeholder="dd/mm/yyyy"
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setStart(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="end" className="block text-xl font-medium mb-2">
                                End Date
                            </label>
                            <input
                                type="end"
                                id="end"
                                placeholder="dd/mm/yyyy"
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setEnd(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="category" className="block text-xl font-medium mb-2">
                                Donate ODS Category
                            </label>
                            <select
                                type="category"
                                id="category"
                                className="w-full border-gray-300 rounded-md p-3 text-black"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Select a ODS category</option>
                                <option value="Health and Well-being">Health and Well-being</option>
                                <option value="Education and Quality">Education and Quality</option>
                                <option value="Industry, Innovation, and Infrastructure">
                                    Industry, Innovation, and Infrastructure
                                </option>
                                <option value="Peace, Justice, and Effective Institutions">
                                    Peace, Justice, and Effective Institutions
                                </option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="validator" className="block text-xl font-medium mb-2">
                                ONG Address
                            </label>
                            <input
                                type="validator"
                                id="validator"
                                placeholder="wallet address of the ONG"
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setValidator(e.target.value)}
                            />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="description" className="block text-xl font-medium mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                placeholder="GoalGame Description"
                                rows={5}
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="bg-purple text-white px-6 py-3 rounded-md font-bold text-lg shadow-lg"
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
