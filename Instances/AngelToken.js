const address = '0x27c7d6a7eC4d54Ba0851483A5969146262D83689';
const { abi } = require('../build/contracts/AngelToken.json');

const angelTokenContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default angelTokenContract;
