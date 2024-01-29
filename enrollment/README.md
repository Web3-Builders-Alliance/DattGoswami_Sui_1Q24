# Enrollment dApp Tutorial

## Overview
This tutorial is designed for developers who want to learn how to interact with the Sui blockchain using TypeScript. You'll learn to create a keypair, airdrop Sui tokens, make transfers, and interact with a specific enrollment dApp on the Sui devnet.

### What You'll Learn
- Create a new keypair using @mysten/sui.js
- Airdrop Sui devnet tokens to your Public Key
- Make Sui transfers on the devnet
- Transfer all assets from your devnet wallet to your WBA wallet
- Enroll in the WBA enrollment dApp using your WBA Private Key

### Prerequisites
- NodeJS installed
- Yarn installed
- A fresh folder for this tutorial

## Setup

### Creating a New Project
1. Create a new folder and initialize a TypeScript project:
   ```bash
   mkdir enrollment && cd enrollment
   yarn init -y
   ```
2. Add TypeScript, @mysten/sui.js, and other dependencies:
   ```bash
   yarn add @types/node typescript @mysten/sui.js
   yarn add -D ts-node
   touch keygen.ts airdrop.ts transfer.ts enroll.ts
   yarn tsc --init --rootDir ./ --outDir ./dist --esModuleInterop --lib ES2019 --module commonjs --resolveJsonModule true --noImplicitAny true
   ```
3. Update `package.json` to add scripts for running your scripts:
   ```json
   "scripts": {
     "keygen": "ts-node ./keygen.ts",
     "airdrop": "ts-node ./airdrop.ts",
     "transfer": "ts-node ./transfer.ts",
     "enroll": "ts-node ./enroll.ts"
   }
   ```

## Tutorial Steps

### 1. Create a new Keypair
- Generate a new Sui wallet using Ed25519.
- Save your wallet's details locally.
```
yarn keygen
```

### 2. Claim Token Airdrop
- Import your wallet into `./airdrop.ts`.
- Request an airdrop for Sui devnet tokens.
```
yarn airdrop
```

### 3. Transfer Tokens
- Transfer Sui tokens from your dev wallet to a specified WBA address.
```
yarn transfer
```

### 4. Empty Devnet Wallet
- Transfer all remaining assets to your WBA dev wallet.
```
yarn transfer
```

### 5. Enroll in WBA Pre-requisites Program
- Familiarize with PTBs and Move calls.
- Interact with the WBA enrollment module on the Sui devnet.

## Additional Information
- Make sure to secure your private keys and avoid committing them to public repositories.
- Use `.gitignore` to exclude sensitive files like `*wallet.json`.

## Conclusion
Congratulations on completing the Enrollment dApp tutorial! You now have the skills to interact with the Sui blockchain using JavaScript and the @mysten/sui.js library. Your journey into Sui blockchain development has just begun!

---

This tutorial is a hands-on approach to understanding the basics of blockchain interactions using Sui. For further exploration and more advanced topics, refer to the official Sui documentation and developer forums. Happy coding!
## Reference
[gist link](https://gist.github.com/ivmidable/4be14c3dd52f63e848411a5bf6c33f37)