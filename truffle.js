module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 22000, // was 8545 - 22000 is port for Quorum node 1
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    },
    nodefour:  {
      host: "127.0.0.1",
      port: 22003, // 22003 is port for Quorum node 4
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    },
    nodeseven:  {
      host: "127.0.0.1",
      port: 22006, // 22006 is port for Quorum node 7
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    }
  }
};
