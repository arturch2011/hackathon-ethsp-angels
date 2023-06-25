const address = '0x1bc5cEC4Be75C23a27B0F5320ED1B763DE1c9098';
const { abi } = require('../build/contracts/AngelToken.json');

const angelTokenContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default angelTokenContract;
