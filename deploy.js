import { ApiNetworkProvider, SmartContract, SmartContractAbi, SmartContractDeployTransaction, UserSigner, TransactionWatcher } from '@multiversx/sdk-core';
import fs from 'fs';
import path from 'path';

// Configuration
const NETWORK = 'https://testnet-gateway.multiversx.com';
const WALLET_MNEMONIC = 'your wallet mnemonic here'; // Replace with your wallet mnemonic
const CONTRACT_WASM_PATH = path.join(__dirname, 'palindromeContract.wasm'); // Assuming compiled wasm file
const CONTRACT_ABI_PATH = path.join(__dirname, 'palindromeContract.abi.json'); // Assuming ABI file

async function deployContract() {
    try {
        const provider = new ApiNetworkProvider(NETWORK);
        const signer = UserSigner.fromMnemonic(WALLET_MNEMONIC);

        const abi = SmartContractAbi.fromFile(CONTRACT_ABI_PATH);
        const contract = new SmartContract({ abi });

        const deployTx = new SmartContractDeployTransaction({
            contract,
            data: fs.readFileSync(CONTRACT_WASM_PATH),
            gasLimit: 50000000,
            chainID: 'T',
            sender: signer.getAddress(),
        });

        const txHash = await signer.signAndSend(deployTx, provider);
        console.log('Deployment transaction sent. TxHash:', txHash);

        const watcher = new TransactionWatcher(provider);
        const txStatus = await watcher.awaitCompleted(txHash);
        console.log('Deployment transaction status:', txStatus.status);

        if (txStatus.status === 'success') {
            console.log('Contract deployed successfully at address:', deployTx.getContractAddress().bech32());
        } else {
            console.error('Contract deployment failed.');
        }
    } catch (error) {
        console.error('Error deploying contract:', error);
    }
}

deployContract();
