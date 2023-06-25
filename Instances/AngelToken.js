const address = '0xe9f907BdA74BD062E829b68FD6aEe25a44Cd1DC1';
const { abi } = require('../build/contracts/AngelToken.json');

const angelTokenContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default angelTokenContract;
