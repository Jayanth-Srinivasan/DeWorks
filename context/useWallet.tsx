import React, { useContext } from "react";
import { createContext, PropsWithChildren } from "react";
import { Core } from "@walletconnect/core";
import { Web3Wallet } from "@walletconnect/web3wallet";
import { useState } from "react";

const AuthContext = createContext({});

const core = new Core({
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID,
});

const AuthProvider = async ({ children }: PropsWithChildren) => {
  const web3wallet = await Web3Wallet.init({
    core, // <- pass the shared `core` instance
    metadata: {
      name: "Demo app",
      description: "Demo Client as Wallet/Peer",
      url: "www.walletconnect.com",
      icons: [],
    },
  });

  const modal = useState(false);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export function useAuth() {
  return useContext(AuthContext);
}
