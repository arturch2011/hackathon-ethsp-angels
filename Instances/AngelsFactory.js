const address = '0x2A14cc523f3d4dd6dC081FA25b31291A3c961aad';

const { abi } = require('../build/contracts/AngelsFactory.json');

const angelsFactoryContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default angelsFactoryContract;
