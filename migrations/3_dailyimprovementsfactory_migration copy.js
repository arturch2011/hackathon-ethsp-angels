const DailyImprovementsFactory = artifacts.require('DailyImprovementsFactory');

module.exports = function (deployer) {
    deployer.deploy(DailyImprovementsFactory);
};
