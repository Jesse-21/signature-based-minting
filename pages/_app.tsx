import React from "react";
import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
// import Head from "next/head";
// import ThirdwebGuideFooter from "../components/guide/ThirdwebGuideFooter";
import "./styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      // <Head>
        <title>OF 1 NFT: Signature VIP Minting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This minter is for VIP Artist Pass (Temorarily Open to non VIP members. "
        />
        <meta name="keywords" content="of1nft vip minter" />
      // </Head>
      <Component {...pageProps} />
      // <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
