'use client';
import dailyImprovementsContract from '../../../Instances/DailyImprovements';
import dailyImprovementsFactoryContract from '../../../Instances/DailyImprovementsFactory';
import web3 from '../../../Instances/web3';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Page = () => {
    const [dailyImprovements, setDailyImprovements] = useState([]);

    useEffect(() => {
        const getAngelsList = async () => {
            const instace = await dailyImprovementsFactoryContract(web3);
            const dailyImprovementsList = await instace.methods.getDeployedDailyImprovements().call();
            console.log(dailyImprovementsList);

            const dailyImprovementsPromisses = dailyImprovementsList.map(async (id) => getAngelById(id));
            const dailyImprovements = await Promise.all(dailyImprovementsPromisses);
            console.log(dailyImprovements);
            setDailyImprovements(dailyImprovements);
        };

        getAngelsList();
    }, []);

    const getAngelById = async (id) => {
        const addr = id;
        const dailyImprovementsInstance = await dailyImprovementsContract(web3, id);
        console.log(typeof id);
        const name = await dailyImprovementsInstance.methods.name().call();
        const goal = await dailyImprovementsInstance.methods.goal().call();
        const description = await dailyImprovementsInstance.methods.description().call();
        const creator = await dailyImprovementsInstance.methods.creator().call();
        // const participants = await dailyImprovementsInstance.methods.participants().call();
        //const validators = await dailyImprovementsInstance.methods.validators().call();
        const isClosed = await dailyImprovementsInstance.methods.isClosed().call();

        return {
            addr,
            name,
            goal,
            description,
            creator,
            // participants,
            // validators,
            isClosed,
        };
    };

    const toggleMenu = () => {
        var menu = document.getElementById('filter-menu');
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    };

    return (
        <>
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen py-20 bg-dblue">
                <div className="w-full py-28 max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16">
                    <div className="flex items-center justify-between text-amber">
                        <div>
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium bg-dgold text-dblue rounded-lg hover:bg-amber/50 hover:text-amber active:bg-amber active:text-dblue"
                                id="filter-menu-button"
                                aria-expanded="false"
                                aria-haspopup="true"
                            >
                                Filter
                                <svg
                                    className="-mr-1 ml-2 h-5 w-5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 12.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            <div
                                className="hidden absolute z-10 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                                id="filter-menu"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="filter-menu-button"
                                tabIndex="-1"
                            >
                                {/* Conteúdo do menu de filtro */}
                            </div>
                        </div>

                        <div className="relative flex items-center">
                            <input
                                className="pl-4 pr-12 py-2 rounded-full bg-white/25 focus:border-dgold focus:border-2 focus:outline-none"
                                placeholder="Search"
                            />
                            <button className="absolute right-0 top-0 h-full p-2 rounded-r-full bg-dgold text-dblue hover:bg-amber/50 hover:text-amber active:bg-amber active:text-dblue">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-search h-5 w-5"
                                >
                                    <circle cx="11" cy="11" r="8" />
                                    <path d="M21 21l-4.35-4.35" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="py-4 text-amber">
                        <div className="flex justify-center py-6 text-6xl font-bold text-center text-purple">
                            Daily Improvements
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {dailyImprovements.map((improvements, index) => (
                                <div key={index}>
                                    <Link href={`/games/${improvements.addr}`}>
                                        <div className="h-full p-3 bg-dgold rounded-xl flex flex-col">
                                            <p>{improvements.addr}</p>
                                            <p>{improvements.name}</p>
                                            <p>{improvements.goal}</p>
                                            <p>{improvements.description}</p>
                                            <p>{improvements.creator}</p>

                                            <p>{improvements.isClosed + ' boolean'}</p>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div></div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default Page;
