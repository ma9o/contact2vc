import EthrDID from "ethr-did";

const ethAddress = process.env.ETH_ADDRESS;
const ethPrivKey = process.env.ETH_PRIV_KEY;

export function issueCredential() {
  if (ethAddress && ethPrivKey) {
    return new EthrDID({
      address: ethAddress,
      privateKey: ethPrivKey,
    });
  } else {
    throw new Error("ETH_ADDRESS environment variable is not set");
  }
}

export default issueCredential;
