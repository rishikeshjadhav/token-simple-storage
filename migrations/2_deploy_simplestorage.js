// File: `./migrations/2_deploy_simplestorage.js`

var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  // ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc is public key for Quorum node 7
  deployer.deploy(SimpleStorage, 42, {privateFor: ["ROAZBWtSacxXQrOe3FGAqJDyJjFePR5ce4TSIzmJ0Bc="]})
};