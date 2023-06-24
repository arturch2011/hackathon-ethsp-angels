//const address = '';
const { abi } = require('../build/contracts/DailyImprovements.json');

const dailyImprovementsContract = (web3, address) => {
    return new web3.eth.Contract(abi, address);
};

export default dailyImprovementsContract;
