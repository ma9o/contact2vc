// import express, { RequestHandler } from "express";
// import { refreshVc } from "./request_handlers/refreshVc";
// import { verifyOtp } from "./request_handlers/verifyOtp";

// const app = express();

// app.post("/refresh_vc", refreshVc);
// app.post("/verify_otp", verifyOtp);

// app.listen(3000);

const transports = require("uport-transports").transport;
const message = require("uport-transports").message.util;

import { Resolver } from "did-resolver";
import { getResolver } from "ethr-did-resolver";

import { Credentials } from "uport-credentials";

const providerConfig = {
  rpcUrl: "https://mainnet.infura.io/<YOUR INFURA PROJECT ID>",
};
const resolver = new Resolver(getResolver(providerConfig));

const credentials = new Credentials({
  did: "did:ethr:0x31486054a6ad2c0b685cd89ce0ba018e210d504e",
  privateKey:
    "ef6a01d0d98ba08bd23ee8b0c650076c65d629560940de9935d0f46f00679e01",
  resolver,
});

credentials
  .createDisclosureResponse({
    notifications: true,
    callbackUrl: "example.com/callback",
  })
  .then((requestToken) => {
    const uri = message.paramsToQueryString(
      message.messageToURI(requestToken),
      { callback_type: "post" }
    );
    const qr = transports.ui.getImageDataURI(uri);

    console.log(qr);
  });
