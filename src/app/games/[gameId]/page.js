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
    const [donateAll, setDonteAll] = useState(false);
    const [donatePrize, setDonatePrize] = useState(false);
    const [invValue, setInvValue] = useState(0);
    const [valAddress, setValaddress] = useState('');

    useEffect(() => {
        const getGameProps = async () => {
            const promises = await getData(addr);
            console.log(promises);

            setGameProps(promises);
        };

        getGameProps();
    }, [addr]);

    // console.log(gameProps);
    // console.log(gameProps.start + '');
    // let startStr = gameProps.start + '';
    // let sDay = startStr.slice(0, 2);
    // console.log(sDay);
    // let sMt = startStr.slice(2, 4);
    // console.log(sMt);
    // let sY = startStr.slice(4, 8);
    // console.log(sY);
    // let startDate = new Date(sY, sMt, sDay);
    // console.log('Data de inicio: ' + startDate);
    // let endStr = gameProps.end + '';
    // let eDay = endStr.slice(0, 2);
    // console.log(eDay);
    // let eMt = endStr.slice(2, 4);
    // console.log(eMt);
    // let eY = endStr.slice(4, 8);
    // console.log(eY);
    // let endDate = new Date(eY, eMt, eDay);
    // console.log('Data de termino: ' + endDate);

    // let totalDuration = endDate.getTime() - startDate.getTime();
    // let now = new Date();
    // let elapsedDuration = now.getTime() - startDate.getTime();
    // let progress = ((elapsedDuration / totalDuration) * 100).toFixed(2);
    // console.log(progress);

    const getData = async (addr) => {
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
        return {
            addr,
            name,
            goal,
            description,
            start,
            end,
            category,
            validator,
            creator,
            isClosed,
            totalValue,
            myProgress,
            start,
            end,
            category,
            callerAddr,
        };
    };

    const participateHandler = async () => {
        const instance = await dailyImprovementsContract(web3, addr);
        const callerAddr = await web3.eth.getAccounts();
        const valorWei = web3.utils.toWei(invValue, 'ether');
        console.log(valorWei, donatePrize, donateAll);
        console.log(typeof invValue, typeof donatePrize, typeof donateAll);
        await instance.methods
            .contribute(valorWei, donatePrize, donateAll)
            .send({ from: callerAddr[0], value: valorWei }); //vmax 1000000000000000
    };

    const validateHandler = async () => {
        const instace = await dailyImprovementsContract(web3, addr);
        const callerAddr = await web3.eth.getAccounts();
        await instace.methods.validate(valAddress).send({ from: callerAddr[0] });
    };

    const finalizeHandler = async () => {
        const instace = await dailyImprovementsContract(web3, addr);
        const callerAddr = await web3.eth.getAccounts();
        await instace.methods.finalizeImprovement().send({ from: callerAddr[0] });
    };

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
                                <p className="text-sm text-gray-500">Data de inicio:</p>
                                <p className="text-lg font-semibold text-gray-800">{gameProps.start + ''}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Data de fim:</p>
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
                            <p className="text-sm text-gray-500">Categoria de doação:</p>
                            <p className="text-lg font-semibold text-gray-800 ">{gameProps.category}</p>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm text-gray-500">Total arrecadado:</p>
                            <p className="text-lg font-semibold text-gray-800 ">{gameProps.totalValue + ' MATIC'}</p>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex flex-col py-2 px-6">
                                <div className="mb-6">
                                    <div>Doação:</div>
                                    <div className="flex">
                                        <label htmlFor="doarpremio" className="text-sm text-gray-500 mr-2">
                                            Doar Valor Investido
                                        </label>
                                        <input
                                            id="doarpremio"
                                            type="checkbox"
                                            checked={donateAll}
                                            onChange={() => setDonteAll(!donateAll)}
                                        ></input>
                                    </div>
                                    <div className="flex">
                                        <label htmlFor="partepremio" className="text-sm text-gray-500 mr-2">
                                            Doar Apenas o Premio
                                        </label>
                                        <input
                                            id="partepremio"
                                            type="checkbox"
                                            checked={donatePrize}
                                            onChange={() => setDonatePrize(!donatePrize)}
                                        ></input>
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    id="participate"
                                    placeholder="Valor de contribuição"
                                    className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                    onChange={(e) => setInvValue(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-dgold text-white py-2 px-6 rounded-lg shadow-lg mb-6"
                                    onClick={participateHandler}
                                >
                                    Participar
                                </button>
                            </div>
                            <div className="flex flex-col py-2 px-6">
                                <input
                                    type="text"
                                    id="valaddress"
                                    placeholder="Endereço da carteira"
                                    className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                                    onChange={(e) => setValaddress(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-dgold text-white py-2 px-6 rounded-lg shadow-lg mb-6"
                                    onClick={validateHandler}
                                >
                                    Validar Meta Diaria({gameProps.validator})
                                </button>
                            </div>
                            <div className="flex flex-col py-2 px-6">
                                <button
                                    type="submit"
                                    className="bg-dgold text-white py-2 px-6 rounded-lg shadow-lg mb-6"
                                    onClick={finalizeHandler}
                                >
                                    Finalizar GoalGame({gameProps.creator})
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 ml-4 p-6">
                        <h2 className="text-4xl pb-4 font-bold text-gray-800 mb-4 border-b-2 border-slate-700">
                            Descrição
                        </h2>
                        <p className="text-lg text-gray-700 break-words">{gameProps.description}</p>
                    </div>
                </div>
            </motion.section>
        </>
    );
};

export default GameID;
