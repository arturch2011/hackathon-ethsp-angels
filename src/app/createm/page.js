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
                        Criar GoalGame
                    </motion.h2>
                    <motion.div variants={itemVariants} className="bg-dgold rounded-md p-8 shadow-md">
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-xl font-medium mb-2">
                                Nome
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Nome do GoalGame"
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="goal" className="block text-xl font-medium mb-2">
                                Objetivo
                            </label>
                            <input
                                type="goal"
                                id="goal"
                                placeholder="Objetivo principal do GoalGame"
                                className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                onChange={(e) => setGoal(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="start" className="block text-xl font-medium mb-2">
                                Data de Inicio
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
                                Data de finalização
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
                                Categoria ODS
                            </label>
                            <select
                                type="category"
                                id="category"
                                className="w-full border-gray-300 rounded-md p-3 text-black"
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="">Escolha a categoria ODS</option>
                                <option value="Saude e Bem-Estar">Saude e Bem-Estar</option>
                                <option value="Educação e Qualidade">Educação e Qualidade</option>
                                <option value="Industria, Inovação e Infraestrutura">
                                    Industria, Inovação e Infraestrutura
                                </option>
                                <option value="Paz, Justiça e Instituições Eficazes">
                                    Paz, Justiça e Instituições Eficazes
                                </option>
                            </select>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="validator" className="block text-xl font-medium mb-2">
                                Endereço da ONG
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
                                Descrição
                            </label>
                            <textarea
                                id="description"
                                placeholder="Descrição do GoalGame"
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
                            Criar
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Create;
