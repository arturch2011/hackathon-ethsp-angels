import Web3 from 'web3';

const { PROJECT_ID } = process.env;

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
} else {
    const provider = new web3.providers.HttpProvider(`https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`);
    web3 = new Web3(provider);
}
export default web3;
