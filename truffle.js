// truffle.js config for klaytn.
const PrivateKeyConnector = require("connect-privkey-to-provider");
const NETWORK_ID = "1001"; // 바오밥 고유의 네트워크 아이디
const GASLIMIT = "20000000";
const URL = "https://api.baobab.klaytn.net:8651";
const PRIVATE_KEY =
  "0x733d8907374e0e0bec40beef02c60c68d1424b97cdef5da434311f983fc9b50e";

module.exports = {
  networks: {
    klaytn: {
      provider: new PrivateKeyConnector(PRIVATE_KEY, URL),
      network_id: NETWORK_ID,
      gas: GASLIMIT,
      gasPrice: null,
    },
  },
};
