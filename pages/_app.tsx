import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Outfit, Work_Sans } from "next/font/google";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// @ts-ignore
import { configureChains, createConfig, WagmiConfig } from "wagmi";
// @ts-ignore
import { polygon, polygonMumbai } from "wagmi/chains";

// @ts-ignore
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains(
  [polygon, polygonMumbai],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "deworks",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID!,
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const outfit = Outfit({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-outfit",
});

const workSans = Work_Sans({
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${outfit.variable} ${workSans.variable}`}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </main>
  );
}
