import Landing from "@/components/Landing";
import Head from "next/head";




export default function Home() {
  return (
    <div className="flex min-h-screen w-full">
      <Head>
        <title>DeWorks</title>
      </Head>
      <main className="w-full font-montserrat">
        <Landing />
      </main>
    </div>
  );
}
