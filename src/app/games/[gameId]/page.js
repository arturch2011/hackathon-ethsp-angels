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
            <section className="min-h-screen w-full bg-dblue pt-20">
                <div className="mx-auto  max-w-screen-2xl">{params.gameId}</div>
                <p>{gameProps.name}</p>
                <p>{gameProps.goal}</p>
                <p>{gameProps.description}</p>
                <p>{gameProps.creator}</p>
                <p>{gameProps.isClosed}</p>
            </section>
        </>
    );
};

export default GameID;
