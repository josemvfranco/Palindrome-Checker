# Palindrome Checker on MultiversX Testnet

This project is a simple palindrome checker web application with deployment capability on the MultiversX testnet blockchain. It includes:

- A frontend web app to check if a given text is a palindrome.
- A MultiversX smart contract written in Rust for efficient palindrome storage and verification.
- Deployment scripts using the MultiversX SDK for easy deployment to the testnet.
- Step-by-step instructions for beginners to set up, deploy, and run the application.

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
