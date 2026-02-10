import wallet from "../turbin3-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { 
    createMetadataAccountV3, 
    CreateMetadataAccountV3InstructionAccounts, 
    CreateMetadataAccountV3InstructionArgs,
    DataV2Args
} from "@metaplex-foundation/mpl-token-metadata";
import { createSignerFromKeypair, signerIdentity, publicKey } from "@metaplex-foundation/umi";
import { bs58 } from "@coral-xyz/anchor/dist/cjs/utils/bytes";

// Define our Mint address
const mint = publicKey("CS7GeeaefYLRiojmfAr5mUic6zQUZPstgtcGcACGTX8K")

// Create a UMI connection
const umi = createUmi('https://api.devnet.solana.com');
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

(async () => {
    try {
        // Start here
        // let accounts: CreateMetadataAccountV3InstructionAccounts = {
        //     ???
        // }
        let accounts: CreateMetadataAccountV3InstructionAccounts = {
            mint,
            mintAuthority:signer,
        }
        let data: DataV2Args = {
        //     ???
        name:"MyToken",
        symbol:"MTK",
        uri:"https://arweave.net/0n9l8sXo2m1a3e7j5h6g8f9k0l1m2n3o4p5q6r7s8t9u0v",
        sellerFeeBasisPoints: 500,
        creators: null,
        collection: null,
        uses: null
    }

        let args: CreateMetadataAccountV3InstructionArgs = {
        data,
        isMutable: true,
        collectionDetails: null
        }

        let tx = createMetadataAccountV3(
            umi,
            {
                ...accounts,
                ...args
            }
        )
        let result= await tx.sendAndConfirm(umi);
        console.log(bs58.encode(result.signature));

    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();
