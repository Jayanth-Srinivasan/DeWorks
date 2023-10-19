import Landing from "@/components/Landing";
import Head from "next/head";




export default function Home() {
  return (
    <div className="flex min-h-screen w-full bg-[#161616] text-stone-200">
      <Head>
        <title>DeWorks</title>
      </Head>
      <main className="w-full font-montserrat">
        <Landing />
      </main>
    </div>
  );
}
