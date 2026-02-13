# 🧩 NFT Mint & Swap Project (Devnet)

## 📌 Project Overview

This project demonstrates how to **mint and trade an NFT on devnet**.
The objective was to create a simple NFT (image + metadata), mint it using a devnet wallet, and successfully swap it with another participant.

This repository contains:

* NFT minting code
* Metadata configuration
* Transaction details
* Reflection on challenges and potential improvements

---

# 🚀 Features

* Minted a custom NFT on **devnet**
* Uploaded metadata and linked image asset
* Completed NFT trade using devnet wallets
* Documented transaction hashes and workflow

---

# 🖼️ NFT Preview

screenshots are provided in the main file

# 🛠️ Tech Stack

* JavaScript / TypeScript
* Web3 / Blockchain SDK (update depending on what you used)
* Devnet Wallets
* Discord (for peer-to-peer trading coordination)

---

# ⚙️ Setup Instructions

## 1️⃣ Clone Repository

git clone https://github.com/sahkunal18/spl-token-devent.git
cd spl-token-devnet

## 2️⃣ Install Dependencies

```bash
npm install
```

## 3️⃣ Configure Wallet

* Create or import a **devnet wallet**
* Add private key or keypair file to `.env`

Example:

```
PRIVATE_KEY=your_private_key_here
RPC_URL=https://api.devnet.solana.com
```

## 4️⃣ Mint NFT

```bash
npm run mint
```

---

# 🔗 NFT Details

## Mint Address

```
<8oiLDdfm84NEcvRtFRUo6Tatof3YaMvSwXd3xJzyTbfL>```

## Metadata URI

```
 https://gateway.irys.xyz/7VcLtokcEMqqt6AkCT4BMmotjL48Nj3v6nQ3FbUxqATY

---

# 🔄 Trade / Swap Transactions

## Mint Transaction Hash

```
5KLGJSASDVxKPjLCDWNtnABLpZjsQSrYZ8HKwcEdAMC8```

(did the self transfer)

# 📚 Workflow Summary

1. Created NFT artwork and metadata JSON.
2. Uploaded metadata and linked the image.
3. Minted NFT on devnet.
4. Found a trade partner via Discord.
5. Exchanged wallet addresses and executed swap transactions.
6. Verified ownership transfer on explorer.

---

# ⚠️ Problems & Limitations

## 1. Lack of Trustless Swaps

Trading NFTs manually through Discord required trust between participants.
One user could potentially send their NFT first and risk losing it if the other party does not follow through.

## 2. Poor User Experience

Manual wallet handling, transaction signing, and devnet setup can be confusing for beginners.

## 3. No Built-in Escrow

Without escrow or atomic swap functionality, trades require coordination and timing.

---

# 💡 Proposed Solutions

## ✅ Use Escrow Smart Contracts

Implement a smart contract that holds both NFTs until both parties confirm.
This ensures atomic swaps and prevents fraud.

## ✅ Integrate a Swap UI

Build a simple front-end interface where users:

* Connect wallets
* Select NFTs
* Execute swaps in one transaction

## ✅ Automated Trade Protocols

Use existing NFT marketplaces or swap protocols that support devnet to reduce manual errors.

---



# 📄 Repository Structure

```
├── assets/
├── metadata/
├── scripts/
├── src/
├── README.md
└── package.json
```

---

# 🙌 Acknowledgements

* Devnet community participants for NFT trading
* Web3 developer resources and documentation

---

# 👤 Author

**Your Name**
Github: https://github.com/YOUR_USERNAME
