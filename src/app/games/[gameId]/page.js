'use client';

import dailyImprovementsContract from '../../../../Instances/DailyImprovements';
import dailyImprovementsFactoryContract from '../../../../Instances/DailyImprovementsFactory';
import web3 from '../../../../Instances/web3';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GameID = ({ params }) => {
    const addr = params.gameId;
    const [gameProps, setGameProps] = useState({});
    // console.log(addr);
    // console.log(typeof addr);
    const startDate = new Date(2023, 5, 1); // Exemplo de data de início
    const endDate = new Date(2023, 5, 30); // Exemplo de data de fim
    const now = new Date();
    const totalAmount = 5000; // Exemplo de valor arrecadado
    const goalAmount = 10000; // Exemplo de valor meta

    const totalDuration = endDate.getTime() - startDate.getTime();
    const elapsedDuration = now.getTime() - startDate.getTime();
    const progress = ((elapsedDuration / totalDuration) * 100).toFixed(2);

    useEffect(() => {
        const getGameProps = async () => {
            const dailyImprovementsInstance = await dailyImprovementsContract(web3, addr);
            const name = await dailyImprovementsInstance.methods.name().call();
            const goal = await dailyImprovementsInstance.methods.goal().call();
            const description = await dailyImprovementsInstance.methods.description().call();
            const creator = await dailyImprovementsInstance.methods.creator().call();
            const isClosed = await dailyImprovementsInstance.methods.isClosed().call();

            const gameProps = {
                addr,
                name,
                goal,
                description,
                creator,
                // participants,
                // validators,
                isClosed,
            };
            console.log(gameProps);

            setGameProps(gameProps);
        };

        getGameProps();
    }, [addr]);

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="min-h-screen w-full bg-dblue py-28 flex items-center"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">{gameProps.name}</h2>
                    <p className="text-lg text-gray-600 mb-6">{gameProps.goal}</p>

                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <p className="text-sm text-gray-500">Start date:</p>
                            <p className="text-lg font-semibold text-gray-800">{startDate.toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">End Date:</p>
                            <p className="text-lg font-semibold text-gray-800">{endDate.toLocaleDateString()}</p>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Donate category:</p>
                            <p className="text-lg font-semibold text-gray-800">Categoria do produto</p>
                        </div>
                    </div>

                    <div className="flex items-center mb-6">
                        <div className="w-10/12 bg-gray-200 h-4 rounded-full">
                            <div className="bg-purple h-4 rounded-full" style={{ width: `${progress}%` }}></div>
                        </div>
                        <p className="ml-4 text-gray-700">{`${progress}% done`}</p>
                    </div>

                    <p className="text-lg text-gray-700 mb-6">{gameProps.description}</p>

                    <button className="bg-dgold text-white py-2 px-6 rounded-lg shadow-lg">Participate</button>
                </div>
            </motion.section>
        </>
    );
};

export default GameID;
