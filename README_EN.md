# Palindrome Checker on MultiversX Testnet

Este projeto é uma aplicação web simples de verificação de palíndromos com capacidade de implantação na blockchain da rede de testes MultiversX. Inclui:

- Um aplicativo web front-end para verificar se um determinado texto é um palíndromo.
- Um contrato inteligente MultiversX escrito em Rust para armazenamento e verificação eficientes de palíndromos.
- Scripts de implantação usando o MultiversX SDK para fácil implantação na rede de teste.
- Instruções passo a passo para iniciantes configurarem, implantarem e executarem o aplicativo.

## Project Structure

- `contracts/palindrome/` - Rust smart contract source code.
- `frontend/index.html` - Frontend UI for palindrome checking.
- `frontend/main.js` - JavaScript logic for palindrome checking and blockchain interaction.
- `scripts/deploy.js` - Script to deploy the smart contract to the MultiversX testnet.
- `README.md` - This documentation.

## Prerequisites

- Rust and Cargo installed for smart contract compilation.
- Node.js and npm installed.
- MultiversX CLI and SDK installed.
- A MultiversX testnet wallet with some test EGLD tokens.
- Basic knowledge of Rust, JavaScript, and blockchain concepts.

## Setup and Deployment

1. Clone the repository or download the project files.

2. Compile the smart contract:
   ```bash
   cd contracts/palindrome
   cargo build --release
   ```

3. Install frontend dependencies (if any):
   ```bash
   cd ../../frontend
   npm install
   ```

4. Update the smart contract address in `frontend/main.js` after deployment.

5. Deploy the smart contract to the MultiversX testnet:
   ```bash
   cd ../scripts
   node deploy.js
   ```

6. Open `frontend/index.html` in a web browser to use the palindrome checker.

## Usage

- Enter text in the input field.
- Click "Check Palindrome" to see if the text is a palindrome.
- (Optional) Use blockchain features if integrated.

## Notes

- The Rust smart contract is optimized for low cost on the MultiversX blockchain.
- Frontend and deployment scripts are designed for simplicity and ease of use.

## Support

For questions or issues, please open an issue or contact the maintainer.

---

This project is designed to be beginner-friendly and easy to extend.