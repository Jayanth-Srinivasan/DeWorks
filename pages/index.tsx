import Head from "next/head";
import Header from "@/components/layouts/Header";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Category from "@/components/home/Category";
import Faqs from "@/components/home/Faqs";
import Humans from "@/components/home/Humans";
import Postings from "@/components/home/Postings";
import Footer from "@/components/layouts/Footer";
import { ethers } from "ethers";
import ABI, { contractAddress } from "@/blockchain/constants/usersABI";
import { useAccount } from "wagmi";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { checkUserExists } from "@/blockchain/constants/utils";

export default function Home() {
  const { isConnected, address } = useAccount();
  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      checkUserExists(address!).then((res: unknown) => {
        if ((res as boolean[])[0] === false) {
          router.push("/onboarding");
        } else {
          if ((res as string[])[1] === "Client") {
            router.push("/dashboard/client");
          } else {
            router.push("/dashboard/freelancer");
          }
        }
      });
    }
  }, [address]);

  return (
    <div className="flex min-h-screen w-full bg-app-grey-dark text-stone-200">
      <Head>
        <title>DeWorks</title>
      </Head>
      <main className="w-full font-work">
        <Header />
        <Hero />
        <Humans />
        <Features />
        <Category />
        <Postings />
        <Faqs />
        <Footer />
      </main>
    </div>
  );
}
