<<<<<<< HEAD
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Category from "@/components/home/Category";
import Faqs from "@/components/home/Faqs";
import Humans from "@/components/home/Humans";

export default function Home() {
    return (
        <div className="flex min-h-screen w-full bg-[#161616] text-stone-200">
            <Head>
                <title>DeWorks</title>
            </Head>
            <main className="w-full font-work">
                <Header />
                <Hero />
                <Humans/>
                <Features />
                <Category />
                <Faqs />
            </main>
        </div>
    );
=======
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Category from '@/components/home/Category';
import Faqs from '@/components/home/Faqs';

export default function Home() {
	return (
		<div className='flex min-h-screen w-full bg-[#161616] text-stone-200'>
			<Head>
				<title>DeWorks</title>
			</Head>
			<main className='w-full font-work'>
			  <Header />
				<Hero />
				<Features />
				<Category />
				<Faqs />
			</main>
		</div>
	);
>>>>>>> a64553fc450a2e7934e2fb3d2e91e93e3a86a32f
}
