const PofiToken = artifacts.require("PofiToken.sol");

module.exports = function(deployer) {
    deployer.deploy(PofiToken);
};