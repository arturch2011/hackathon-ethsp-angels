'use client';

import angelsContract from '../../../../Instances/Angels';
import angelsFactoryContract from '../../../../Instances/AngelsFactory';
import web3 from '../../../../Instances/web3';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GameID = ({ params }) => {
    const index = params.campaignId;
    const getAngelById = async (id) => {
        const addr = id;
        const angelsContractInstance = await angelsContract(web3, id);
        console.log(typeof id);
        const name = await angelsContractInstance.methods.name().call();
        const goal = await angelsContractInstance.methods.goal().call();
        const deadline = await angelsContractInstance.methods.deadline().call();
        const minimumContribution = await angelsContractInstance.methods.minimumContribution().call();
        const amountRaised = await angelsContractInstance.methods.amountRaised().call();
        const beneficiary = await angelsContractInstance.methods.beneficiary().call();
        const isGoalReached = await angelsContractInstance.methods.isGoalReached().call();
        const isClosed = await angelsContractInstance.methods.isClosed().call();
        const description = await angelsContractInstance.methods.description().call();
        return {
            addr,
            name,
            goal,
            deadline,
            minimumContribution,
            amountRaised,
            beneficiary,
            isGoalReached,
            isClosed,
            description,
        };
    };

    const info = getAngelById(index);

    console.log(info);

    return (
        <>
            <section className="min-h-screen w-full bg-dblue pt-20">
                <div className="mx-auto  max-w-screen-2xl">{index}</div>
            </section>
        </>
    );
};

export default GameID;
