const tokenico = artifacts.require("chinShibaFinance");


module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(tokenico);
};
