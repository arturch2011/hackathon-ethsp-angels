const address = '';
const { abi } = require('../build/contracts/DailyImprovements.json');

const dailyImprovementsContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default dailyImprovementsContract;
