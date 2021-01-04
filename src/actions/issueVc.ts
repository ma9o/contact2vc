import {
  JwtCredentialPayload,
  createVerifiableCredentialJwt,
    
} from "did-jwt-vc";

export function issueVc() {
  const vcPayload: JwtCredentialPayload = {
    sub: "did:ethr:0x435df3eda57154cf8cf7926079881f2912f54db4",
    nbf: 1562950282,
    vc: {
      "@context": ["https://www.w3.org/2018/credentials/v1"],
      type: ["VerifiableCredential"],
      credentialSubject: {
        degree: {
          type: "BachelorDegree",
          name: "Baccalauréat en musiques numériques",
        },
      },
    },
  };
}

export default issueVc;

