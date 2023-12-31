'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import WalletButton from '../function/walletbutton';
import Image from 'next/image';
import logo from '../../../public/logo.png';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!isOpen) {
                const currentScrollPos = window.scrollY;
                const scrollingUp = currentScrollPos < prevScrollPos;

                setVisible(scrollingUp || currentScrollPos < 10);
                setPrevScrollPos(currentScrollPos);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, isOpen]);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const [showDrop, setShowDrop] = useState({
        drop1: false,
        drop2: false,
        drop3: false,
        drop4: false,
    });

    const handleDropClick = (drop) => {
        // Verificar o estado atual da div clicada
        const isCurrentlyOpen = showDrop[drop];

        // Fechar todas as divs
        const updatedShowDrop = {
            drop1: false,
            drop2: false,
            drop3: false,
            drop4: false,
        };

        // Abrir a div clicada, se ela estiver fechada
        if (!isCurrentlyOpen) {
            updatedShowDrop[drop] = true;
        }

        // Atualizar o estado
        setShowDrop(updatedShowDrop);
    };

    return (
        <motion.nav
            className={`md:mt-4 bg-transparent md:flex md:justify-center fixed w-full z-10 ${
                visible ? '' : '-translate-y-full'
            }`}
            initial={false}
            animate={{ y: visible ? 0 : '-130%' }}
            transition={{ duration: 0.3 }}
        >
            <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 bg-gray-700 md:bg-gray-700/25 md:backdrop-blur-xl md:rounded-full md:mx-4">
                <div className="flex items-center justify-between h-16">
                    <div className="w-full flex items-center justify-between">
                        <Link href="/" className="flex-shrink-0 flex items-center">
                            <Image src={logo} alt="logo" className="max-h-16 w-auto mr-2" />
                            <div>GOalGame</div>
                        </Link>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link href="/" className="hover:bg-white px-3 py-2 rounded-md ">
                                    Início
                                </Link>
                                <div
                                    onClick={() => handleDropClick('drop1')}
                                    className="hover:bg-white px-3 py-2 flex flex-row justify-center rounded-md"
                                >
                                    Participar
                                    {showDrop.drop1 && (
                                        <div className="absolute flex flex-col items-center rounded-lg mt-12 p-4 bg-slate-400 backdrop-blur-xl">
                                            <Link
                                                href="/games"
                                                className="p-2 hover:bg-white w-full rounded-lg text-center"
                                            >
                                                GoalGames
                                            </Link>
                                            <Link
                                                href="/campaigns"
                                                className="p-2 hover:bg-white w-full rounded-lg text-center"
                                            >
                                                Campanhas
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <div
                                    onClick={() => handleDropClick('drop2')}
                                    className="hover:bg-white px-3 py-2 flex flex-row justify-center rounded-md"
                                >
                                    Criar
                                    {showDrop.drop2 && (
                                        <div className="absolute flex flex-col items-center rounded-lg mt-12 p-4 bg-slate-400 backdrop-blur-xl">
                                            <Link
                                                href="/createc"
                                                className="p-2 hover:bg-white w-full rounded-lg text-center"
                                            >
                                                Criar Campanha
                                            </Link>
                                            <Link
                                                href="/createm"
                                                className="p-2 hover:bg-white w-full rounded-lg text-center"
                                            >
                                                Criar GoalGame
                                            </Link>
                                        </div>
                                    )}
                                </div>
                                <Link href="/benefits" className="hover:bg-white px-3 py-2 rounded-md">
                                    Beneficios
                                </Link>
                                <WalletButton />
                            </div>
                        </div>
                    </div>
                    <div className="mr-2 flex md:hidden">
                        <button
                            onClick={toggleNavbar}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="md:hidden bg-gray-800 backdrop-blur-xl"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <Link
                            href="/"
                            className="w-full text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center"
                        >
                            Início
                        </Link>
                        <div
                            onClick={() => handleDropClick('drop3')}
                            className="w-full text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Participar
                            {showDrop.drop3 && (
                                <div className="flex flex-col items-center rounded-lg mt-12 p-4 bg-slate-400 backdrop-blur-xl">
                                    <Link
                                        href="/games"
                                        className="p-2 hover:bg-white w-full rounded-lg text-center hover:text-black"
                                    >
                                        GoalGames
                                    </Link>
                                    <Link
                                        href="/campaigns"
                                        className="p-2 hover:bg-white w-full rounded-lg text-center hover:text-black"
                                    >
                                        Campanhas
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div
                            onClick={() => handleDropClick('drop4')}
                            className="w-full text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Criar
                            {showDrop.drop4 && (
                                <div className="flex flex-col items-center rounded-lg mt-12 p-4 bg-slate-400 backdrop-blur-xl">
                                    <Link
                                        href="/createm"
                                        className="p-2 hover:bg-white w-full rounded-lg text-center hover:text-black"
                                    >
                                        Criar GoalGame
                                    </Link>
                                    <Link
                                        href="/createc"
                                        className="p-2 hover:bg-white w-full rounded-lg text-center hover:text-black"
                                    >
                                        Criar Campanha
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/benefits"
                            className="w-full text-center text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Benefícios
                        </Link>
                        <WalletButton />
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;
