import { Commitment, Connection, Keypair, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js"
import wallet from "../turbin3-wallet.json"
import { getOrCreateAssociatedTokenAccount, transfer } from "@solana/spl-token";
import { get } from "prompt";

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

//Create a Solana devnet connection
const commitment: Commitment = "confirmed";
const connection = new Connection("https://api.devnet.solana.com", commitment);

// Mint address
const mint = new PublicKey("8oiLDdfm84NEcvRtFRUo6Tatof3YaMvSwXd3xJzyTbfL");

// Recipient address
const to = new PublicKey("6kJXNxvAH5EojH5Xk7WTxq9LN4iEanxctuRR3Gyc6LTJ");

(async () => {
    try {
        // Get the token account of the fromWallet address, and if it does not exist, create it
        const sourceAta= await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            keypair.publicKey
        )
        const toWalletAta=await getOrCreateAssociatedTokenAccount(
            connection,
            keypair,
            mint,
            to
        );
        const tx= await transfer(
            connection,
            keypair,
            sourceAta.address,
            toWalletAta.address,
            keypair,
            15e6
        )
        console.log(tx);

        // Get the token account of the toWallet address, and if it does not exist, create it

        // Transfer the new token to the "toTokenAccount" we just created
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();