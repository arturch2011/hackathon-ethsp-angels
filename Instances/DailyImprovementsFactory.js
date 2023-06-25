const address = '0xC94a06B724E7c40c0384c848279F020a75b1FF59';
const { abi } = require('../build/contracts/DailyImprovementsFactory.json');

const dailyImprovementsFactoryContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default dailyImprovementsFactoryContract;
