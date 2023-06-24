const address = '';
const { abi } = require('../build/contracts/DailyImprovementsFactory.json');

const dailyImprovementsFactoryContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default dailyImprovementsFactoryContract;
