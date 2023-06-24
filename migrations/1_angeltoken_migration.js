const AngelToken = artifacts.require('AngelToken');

module.exports = function (deployer) {
    deployer.deploy(AngelToken);
};
