import Head from 'next/head';
import Header from '@/components/layouts/Header';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Category from '@/components/home/Category';
import Faqs from '@/components/home/Faqs';
import Humans from '@/components/home/Humans';
import Postings from '@/components/home/Postings';
import Footer from '@/components/layouts/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>DeWorks</title>
			</Head>
			<div className='flex min-h-screen w-full bg-app-grey-dark text-stone-200'>
				<main className='w-full font-work'>
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
		</>
	);
}
