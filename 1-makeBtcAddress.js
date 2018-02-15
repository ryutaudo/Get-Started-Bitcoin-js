// config
const bitcoin = require('bitcoinjs-lib');
require('dotenv').config();

// Tips:
// BlockExplorer : http://tbtc.blockchainhub.co.jp/

// Step1: Make your Bitcoin address

// You cannot change the config of network because we use only TestNet today

// Let's make your Bitcoin Address in order to get TestNet Bitcoin;

// Bitcoin Secret is a bunch of words which shows your Private key.
// When you get a Bitcoin secret, DO NOT FORGET to memoize your Bitcoin Secret.

// If you have Bitcoin Secret, you can retrieve your Private key.
// const keyPair = bitcoin.ECPair.fromWIF(process.env.myWIF, testNet);

// Bitcoin Address is necessary to get Bitcoin.
// When you get a Bitcoin address, DO NOT FORGET to memoize your Bitcoin Secret.
