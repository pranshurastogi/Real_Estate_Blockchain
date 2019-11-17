const HDWalletProvider = require('truffle-hdwallet-provider');
const TruffleContract = require('truffle-contract');
const Web3 = require("web3");

const INFURA_KEY = "3e5d33f1b1f74340973a654e01d28b76";
const NETWORK = "rinkeby";
const fs = require('fs');
// This is Contract Address on Local Development Network
const SOLN_SQUARE_VERIFIER_AT_RINKEBY = "0xecD9171F7474D6A3237d3Fc13C98bab0b4D186e2";

const OWNER_ACCOUNT = "0x6038c699e6bc985605d36819E10B722981a2D5cc";

main()
    .then(result => {
        presentResult(result);
    })
    .catch(e => {
        presentResult(e.message)
    });

async function main() {
    let network = createNetwork(process.argv[2]);
    let mnemonic = createMnemonic(process.argv[3]);
    let proof = createProof(process.argv[4]);
    let contractAbi = createContractAbi(process.argv[5]);
    return await verifiedMint(network, mnemonic, proof, contractAbi);
}

/**
 * @param {string} network - The name of the network, where SolnVerifier contract is deployed
 * @param {string} mnemonic - the mnemonic of your Rinkeby wallet
 * @param {object} proof - the zokrates proof object.
 * @param {object} contractAbi - the SolnSquareVerifier contract abi.
 */
async function verifiedMint(network, mnemonic, proof, contractAbi) {
    let provider = createWalletProvider(network, mnemonic);

    let web3Instance = new Web3(provider);

    let solnSquareVerifier = TruffleContract(contractAbi);

    solnSquareVerifier.setProvider(provider);
    // let accounts;
    // try {
    //     accounts = await web3Instance.eth.getAccounts();
    //     console.log(accounts);
    // } catch (e) {
    //     console.log(`Failed to get accounts\n${e.message}`);
    // }
    // let contract;
    try {
        contract = await solnSquareVerifier.deployed();
    } catch (e) {
        console.log(`Failed getting contract instance at address\n${e.message}`);
        throw e;
    }
    try {
        await contract.addSolution(
            proof.proof.A,
            proof.proof.B,
            proof.proof.C,
            proof.input,
            {from: OWNER_ACCOUNT});
    } catch (e) {
        console.log(`Failed to add the solution\n${e.message}`);
        throw e;
    }

    let currentTokenSupply;
    try {
        currentTokenSupply = await contract.totalSupply();
    } catch (e) {
        console.log(`Failed to get total token supply\n${e.message}\nSetting currentTokenSupply to 0.`);
        currentTokenSupply = 0;
    }

    let newTokenId = parseInt(currentTokenSupply) + 1;
    try{
        await contract.mint(OWNER_ACCOUNT, newTokenId, {from: OWNER_ACCOUNT});
    } catch (e) {
        console.log(`Failed to mint the token\n${e.message}`);
        throw e;
    }

    // let newTokenId = "default";
    return `Token with Id = ${newTokenId} has been minted successfully`;
}

/**
 *
 * @param {string} mnemonicFilePath - The path to the mnemonic file, that contains the mnemonic of your Rinkeby wallet
 * @return {string}
 */
function createMnemonic(mnemonicFilePath){
    return fs.readFileSync(mnemonicFilePath, "utf-8").toString().trim();
}

/**
 *
 * @param {string} proofFilePath - The path to proof.json file that you have generated using Zokrates
 * @return {any}
 */
function createProof(proofFilePath){
    return JSON.parse(fs.readFileSync(proofFilePath, "utf-8"));
}

/**
 *
 * @param {string} contractAbiFilePath - The path to SolnSquareVerifier contract abi, built by Truffle
 * @return {any}
 */
function createContractAbi(contractAbiFilePath) {
    return JSON.parse(fs.readFileSync(contractAbiFilePath, "utf-8"));
}

function createWalletProvider(network, mnemonic){
    let provider;
    if(network === "rinkeby") {
        return new HDWalletProvider(mnemonic, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`);
    }
    else if(network === "development") {
        return new Web3.providers.WebsocketProvider("ws://localhost:8545");
    }
}

function createNetwork(network) {
    return network;
}
function presentResult(str) {
    console.log(`Process finished.\nResults:\n${str}`);
}