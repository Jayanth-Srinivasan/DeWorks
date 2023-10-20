import Footer from '@/components/layouts/Footer';
import { PRIVACY_POLICY } from '@/constants/legal';
import Header from '@/components/layouts/Header';

const PrivacyPolicyPage = () => {
	return (
		<main className="h-full bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
			<Header />
			<section className='p-4 py-[50px] md:py-[80px] max-w-7xl mx-auto'>
				<h1 className='text-3xl lg:text-5xl font-bold'>
					Privacy Policy
				</h1>
				<p className='text-slate-200 text-lg md:text-xl mt-2'>
					Last Updated: 20th October 2023
				</p>
				<ul className='mt-4'>
					{PRIVACY_POLICY.map((privacy, index) => (
						<li key={`privacy-title-${index}`} className='mt-8'>
							<h2 className='text-xl lg:text-3xl font-semibold'>
								{privacy.title}
							</h2>
							<ul className='list-disc'>
								{privacy.information.map((info, idx) => (
									<li
										key={`privacy-${index}-sub-title-${idx}`}
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

export default PrivacyPolicyPage;
