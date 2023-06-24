'use client';
import angelsContract from '../../../Instances/Angels';
import angelsFactoryContract from '../../../Instances/AngelsFactory';
import web3 from '../../../Instances/web3';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Events = () => {
    const [events, setEventos] = useState([]);

    useEffect(() => {
        const setEventosHanddler = async () => {
            const instance = await angelsFactoryContract(web3);
            const eventos = await instance.methods.getDeployedAngels().call();
            setEventos(eventos);
        };
        setEventosHanddler();
    }, []);

    console.log(events);
    const items = events.map((item, index) => {
        return (
            <div key={index}>
                <div className="h-full p-3 bg-blue/25 rounded-xl flex flex-col">Testee + {item}</div>
            </div>
        );
    });

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
                <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-16">
                    <div className="flex items-center justify-between text-amber">
                        <div>
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium bg-amber text-dblue rounded-lg hover:bg-amber/50 hover:text-amber active:bg-amber active:text-dblue"
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
                                className="pl-4 pr-12 py-2 rounded-full bg-white/25 focus:border-amber focus:border-2 focus:outline-none"
                                placeholder="Search"
                            />
                            <button className="absolute right-0 top-0 h-full p-2 rounded-r-full bg-amber text-dblue hover:bg-amber/50 hover:text-amber active:bg-amber active:text-dblue">
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
                        <div className="flex justify-center py-6 text-6xl font-bold text-center">Events</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">testee</div>
                        <div>{items}</div>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

// export const getServerSideProps = async () => {
//     const instance = await angelsFactoryContract(web3);
//     const eventos = await instance.methods.getDeployedAngels().call();

//     return { props: { eventos } };
// };

export default Events;
