const address = '0x5C831E10eF6Ce071E457A6d9171d431aFC3c3fab';

const { abi } = require('../build/contracts/AngelsFactory.json');

const angelsFactoryContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default angelsFactoryContract;
