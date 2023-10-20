import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { TERMS_AND_CONDITIONS } from '@/constants/legal';

const TermsAndConditionsPage = () => {
	return (
		<main className="h-full bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
			<Header />
			<section className='p-4 py-[50px] md:py-[80px] max-w-7xl mx-auto'>
				<h1 className='text-3xl lg:text-5xl font-bold'>
					Terms & Conditions
				</h1>
				<p className='text-slate-200 text-lg md:text-xl mt-2'>
					Last Updated: 20th October 2023
				</p>
				<p className='mt-2 text-md md:text-lg'>
					By using this platform, you agree to comply with and be
					bound by these terms and conditions. If you do not agree
					with any part of these terms, please do not use the
					platform.
				</p>
				<ul className='mt-4'>
					{TERMS_AND_CONDITIONS.map((term, index) => (
						<li key={`term-title-${index}`} className='mt-8'>
							<h2 className='text-xl lg:text-3xl font-semibold'>
								{term.title}
							</h2>
							<ul className='list-disc'>
								{term.information.map((info, idx) => (
									<li
										key={`term-${index}-sub-title-${idx}`}
										className='mt-2 text-slate-200 md:text-lg ml-4'
									>
										{info}
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</section>
			<Footer />
		</main>
	);
};

export default TermsAndConditionsPage;
