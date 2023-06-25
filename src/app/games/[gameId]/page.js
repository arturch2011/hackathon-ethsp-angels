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
    //const [dataIn, setDataIn] = useState(0);
    // console.log(addr);
    // console.log(typeof addr);

    useEffect(() => {
        const getGameProps = async () => {
            const callerAddr = await web3.eth.getAccounts();
            const dailyImprovementsInstance = await dailyImprovementsContract(web3, addr);
            const name = await dailyImprovementsInstance.methods.name().call();
            const goal = await dailyImprovementsInstance.methods.goal().call();
            const description = await dailyImprovementsInstance.methods.description().call();
            const validator = await dailyImprovementsInstance.methods.validator().call();
            const creator = await dailyImprovementsInstance.methods.creator().call();
            const isClosed = await dailyImprovementsInstance.methods.isClosed().call();
            const totalValue = await dailyImprovementsInstance.methods.totalValue().call();
            const myProgress = await dailyImprovementsInstance.methods.myProgress().call({ from: callerAddr[0] });
            const start = await dailyImprovementsInstance.methods.inicio().call();
            const end = await dailyImprovementsInstance.methods.fim().call();
            const category = await dailyImprovementsInstance.methods.category().call();

            const gameProps = {
                addr,
                name,
                goal,
                description,
                start,
                end,
                category,
                validator,
                creator,
                // participants,
                // validators,
                isClosed,
                totalValue,
                myProgress,
                start,
                end,
                category,
                callerAddr,
            };

            //console.log(gameProps.category);

            setGameProps(gameProps);
        };

        getGameProps();
    }, [addr]);
    //const game = Promise.all(gameProps);
    console.log(gameProps);
    //console.log(gameProps);
    // const dataIn = gameProps.start;
    // const dataInString = dataIn.toString();
    // const diaIn = dataInString.substring(0, 2);
    // const mesIn = dataInString.substring(2, 4);
    // const anoIn = dataInString.substring(4, 8);
    // const startDate = new Date(anoIn, mesIn, diaIn); // Exemplo de data de início
    // const endDate = new Date(2023, 5, 30); // Exemplo de data de fim
    // const now = new Date();
    // const totalAmount = 5000; // Exemplo de valor arrecadado
    // const goalAmount = 10000; // Exemplo de valor meta

    // const totalDuration = endDate.getTime() - startDate.getTime();
    // const elapsedDuration = now.getTime() - startDate.getTime();
    // const progress = ((elapsedDuration / totalDuration) * 100).toFixed(2);

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="min-h-screen w-full bg-dblue py-28 flex items-center"
            >
                <div className="max-w-7xl mx-auto w-full flex">
                    <div className="w-1/2 bg-cblue p-6 rounded-xl mr-4">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">{gameProps.name}</h2>
                        <p className="text-2xl text-gray-600 mb-6">{gameProps.goal}</p>

                        <div className="flex items-center mb-6">
                            <div className="mr-6">
                                <p className="text-sm text-gray-500">Start date:</p>
                                <p className="text-lg font-semibold text-gray-800">{gameProps.start + ''}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">End Date:</p>
                                <p className="text-lg font-semibold text-gray-800">{gameProps.end + ''}</p>
                            </div>
                        </div>

                        <div className="flex items-center mb-6">
                            <div className="w-10/12 bg-gray-200 h-4 rounded-full">
                                <div className="bg-purple h-4 rounded-full"></div>
                            </div>
                            <p className="ml-4 text-gray-700">{}</p>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500">Donate category:</p>
                            <p className="text-lg font-semibold text-gray-800 ">{gameProps.category}</p>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500">Total arrecadado:</p>
                            <p className="text-lg font-semibold text-gray-800 ">{gameProps.totalValue}</p>
                        </div>
                        <div className="flex flex-col">
                            <button className="bg-dgold text-white py-2 px-6 rounded-lg shadow-lg mb-6">
                                Participate
                            </button>
                            <button className="bg-dgold text-white py-2 px-6 rounded-lg shadow-lg mb-6">
                                Validade Daily Goal
                            </button>
                            <button className="bg-dgold text-white py-2 px-6 rounded-lg shadow-lg">
                                Finalize Game
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 ml-4 p-6">
                        <h2 className="text-4xl pb-4 font-bold text-gray-800 mb-4 border-b-2 border-slate-700">
                            Description
                        </h2>
                        <p className="text-lg text-gray-700 mb- overflow-hidden">{gameProps.description}</p>
                    </div>
                </div>
            </motion.section>
            <div>
                <h2>Propsss</h2>

                <p>Total Value: {gameProps.totalValue + ''}</p>
                <p>My Progress: {gameProps.myProgress + ''}</p>
                <p>Start Date: {gameProps.start + ''}</p>
                <p>End Date: {gameProps.end + ''}</p>
                <p>Category: {gameProps.category + ''}</p>
                <p>validator: {gameProps.validator + ''}</p>
            </div>
        </>
    );
};

export default GameID;
