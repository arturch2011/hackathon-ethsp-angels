// const address = '';
const { abi } = require('../build/contracts/Angels.json');

const angelsContract = (web3, address) => {
    return new web3.eth.Contract(abi, address);
};

export default angelsContract;
