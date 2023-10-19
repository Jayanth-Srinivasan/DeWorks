import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Category from '@/components/home/Category';
import Faqs from '@/components/home/Faqs';
import Postings from '@/components/home/Postings';

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
        <Postings/>
				<Faqs />
			</main>
		</div>
	);
}
