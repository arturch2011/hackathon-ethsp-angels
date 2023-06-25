const address = '0x7Fae45e44822a799d043D26D3698AdeFa4A2a556';
const { abi } = require('../build/contracts/DailyImprovementsFactory.json');

const dailyImprovementsFactoryContract = (web3) => {
    return new web3.eth.Contract(abi, address);
};

export default dailyImprovementsFactoryContract;
