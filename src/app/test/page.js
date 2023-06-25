'use client';
import web3 from '../../../Instances/web3';
import angelsFactoryContract from '../../../Instances/AngelsFactory';
import { useState } from 'react';

export default function Test() {
    const [addr, setAddr] = useState('');
    const setToken = async () => {
        const address = await web3.eth.getAccounts();
        const instance = angelsFactoryContract(web3);
        await instance.methods.setAngelTokenAddress(addr).send({ from: address[0] });
    };

    return (
        <div className="min-h-screen w-full p-28">
            <div>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-xl font-medium mb-2">
                        Set Token Address
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Token address"
                        className="w-full border-gray-300 rounded-md p-3 text-black placeholder:italic"
                        onChange={(e) => setAddr(e.target.value)}
                    />
                    <button onClick={setToken}>submit</button>
                </div>
            </div>
        </div>
    );
}
