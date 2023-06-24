const address = '0x7A2064d29B769f25CF7069eeaDa472053d7f670B';
const { abi } = require('../build/contracts/DailyImprovementsFactory.json');

const dailyImprovementsFactoryContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default dailyImprovementsFactoryContract;
