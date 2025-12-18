import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

const APP_NAME = "AgentKit Example";

async function runExample() {
  const sdk = new CoinbaseWalletSDK({
    appName: APP_NAME,
  });

  const provider = sdk.makeWeb3Provider();

  try {
    const accounts = await provider.request({
      method: "eth_requestAccounts",
    });
    console.log("Connected accounts:", accounts);
  } catch (err) {
    console.error("Wallet connection failed:", err);
  }
}

runExample();
