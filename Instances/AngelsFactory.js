const address = '0x653FE32C74288Cd4399B06ec75E596c3f44Ef426';

const { abi } = require('../build/contracts/AngelsFactory.json');

const angelsFactoryContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default angelsFactoryContract;
