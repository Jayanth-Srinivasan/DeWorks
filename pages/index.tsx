import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/home/Hero';

export default function Home() {
	return (
		<div className='flex min-h-screen w-full bg-[#161616] text-stone-200'>
			<Head>
				<title>DeWorks</title>
			</Head>
			<Header />
			<main className='w-full font-work'>
				<Hero />
			</main>
		</div>
	);
}
