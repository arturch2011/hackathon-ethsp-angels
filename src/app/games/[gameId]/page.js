'use client';

import angelsContract from '../../../../Instances/Angels';
import angelsFactoryContract from '../../../../Instances/AngelsFactory';
import web3 from '../../../../Instances/web3';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GameID = ({ params }) => {
    return (
        <>
            <section className="min-h-screen w-full bg-dblue pt-20">
                <div className="mx-auto  max-w-screen-2xl">{params.gameId}</div>
            </section>
        </>
    );
};

export default GameID;
