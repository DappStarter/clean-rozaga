require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glimpse flame sword strong dash trumpet coconut gentle light army gesture'; 
let testAccounts = [
"0x9723f73152bbadd19e8cea5d6ebd07e6796919367a14ef07181175eb87870aa9",
"0x7b0b0d7ae7baa006a55a17b9c6676ec703dee5f36c8f932667596713d03ff684",
"0x02a0ab48b1bf82ee24aad18538ce7cd9eadb9cfa667311ae6206ebfefd0d48b3",
"0x8a10e0e9b12df5a7339746274f4e1b6e453d17016fa199e3bfead169633c395d",
"0xe18de08766aa6ccdcc5b15a276c0388714cdf53de3d63c84d86b67910eddcd44",
"0xa080a8c1c4d0c1fa7854ce7aec524e08a06b5f2929969b1a0d415738419dd124",
"0xc65906d356eb7831d309db1bdfe35a85921b2cc6ea21267f6ec94a141e095397",
"0x9af64cd5d2a3be8d34801fb3c4e8e3e17fe1952be9683026d264ef32e363be74",
"0x9aa26712bd3c5b04beb60d5d37c1cb3bc1f88cd34ac6f621ce969583b7dcec17",
"0x957ddb8c5b81d7f962a9b7abd4ca92c7c3d6f568fc6758809e20ea587e8b748a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
