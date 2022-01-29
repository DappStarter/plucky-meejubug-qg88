require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glove flee street name repeat night pull install beauty flush gift'; 
let testAccounts = [
"0x0b0f3b0dd6b06ccddf1c2a7208920ed91af8955f936ab49b925f25cf31338b6e",
"0x147dcb1ee943bc22e24d9b0d4b22975f9b551dc544824c02661761b35ffadc96",
"0x7c9457fb9f1c2863d79dd3f660d05fc4995c11b45afa1e6d76cc7041c78fca19",
"0x27f943b46ebf6a90741674573c0fcc350c8611e7498bde0458e30dc59ecd0203",
"0x80a6d7939ead5e19ba2574ac4c391834a61935a77acec2a8f3b994b2a6ae29c2",
"0x24903f77c884a90dd2d928c50428b2e1a16c01e12903d432a35c071e91068544",
"0x9e0f0a63a1423388358fbbf8aaac139f7c4bde99abde7ecddcda53e546afd56b",
"0x6afe8fdaa811745b61291efda840eae914c3a21e835a6b492e5692100ca67f98",
"0x409d136c0be89891c503457a1334dfa916c18375ef9c3b27dbbe7a42e533bfce",
"0x5b558b75f98b2548f72bb9f466937c43c677c8b8e01c0cf0b9671f9728f64ea0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

