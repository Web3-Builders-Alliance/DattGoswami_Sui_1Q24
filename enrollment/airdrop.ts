import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { getFaucetHost, requestSuiFromFaucetV0 } from "@mysten/sui.js/faucet";

import wallet from "./dev-wallet.json";

// We're going to import our keypair from the wallet file
const keypair = Ed25519Keypair.fromSecretKey(new Uint8Array(wallet));

(async () => {
  try {
    let res = await requestSuiFromFaucetV0({
      host: getFaucetHost("testnet"), //testnet or devnet
      recipient: keypair.toSuiAddress(),
    });
    console.log(`Success! Check our your TX here:
          https://suiscan.xyz/testnet/object/${res.transferredGasObjects[0].id}`); //testnet
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();