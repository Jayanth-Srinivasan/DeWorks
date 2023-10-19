import React from 'react';
import {
	BadgeCheck,
	Banknote,
	FileCheck2,
	FileEdit,
	LucideIcon,
	Newspaper,
	Search,
} from 'lucide-react';

function Features() {
	interface FeaturesData {
		Svg: LucideIcon;
		title: string;
		description: string;
	}
	[];
	const FEATURES: FeaturesData[] = [
		{
			Svg: Search,
			title: 'Transparency and Audit Trail',
			description:
				"We take your security seriously. Our platform ensures every step of your freelancing journey is recorded in a secure, immutable ledger. You'll have a complete audit trail of your work, so you can focus on what you do best.",
		},
		{
			Svg: FileEdit,
			title: 'User Registration and Onboarding',
			description:
				'Becoming a part of our platform is a breeze. Register and onboard quickly to connect with freelancers and clients from all around the world. Your freelancing journey begins here!',
		},
		{
			Svg: FileCheck2,
			title: 'Task Creation and Assignment',
			description:
				'Create tasks, specify requirements, and find the perfect freelancers for your projects. Our platform makes task creation and assignment a simple and efficient process. Get ready to see your ideas come to life!',
		},
		{
			Svg: Newspaper,
			title: 'Smart Contract Creation',
			description:
				'Our platform simplifies contract creation. Establish clear terms, milestones, and payments with the security of blockchain technology. Your agreements are locked in, ensuring trust and fairness.',
		},
		{
			Svg: BadgeCheck,
			title: 'Task Completion Verification',
			description:
				'Ensure the quality of work with our straightforward task completion verification process. Verify project milestones with ease and confidence, giving you peace of mind throughout the project.',
		},
		{
			Svg: Banknote,
			title: 'Instant Payment Release',
			description:
				'Say goodbye to delayed payments. Our platform enables instant payment release upon task completion. No more waiting – get paid promptly for your hard work!',
		},
	];
	return (
		<section className='py-[50px] md:py-[80px]' id='features'>
			<div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8'>
				<div className='mx-auto flex flex-col gap-4 max-w-xl text-center'>
					<h2 className='text-3xl lg:text-5xl font-bold'>
						Kickstart your Freelancing
					</h2>
					<p className='my-4 text-slate-200'>
						Jump into the World of Opportunities: Begin your
						freelancing journey on our platform. Explore a wide
						range of projects waiting for your skills and expertise.
						It&apos;s time to kickstart your freelancing career and
						unlock new horizons!
					</p>
				</div>
				<div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{FEATURES.map((feat, idx) => (
						<div
							className='block rounded-xl border-2 border-[#ffffff12] p-8 shadow-xl transition duration-300 hover:scale-105'
							key={idx}
						>
							<feat.Svg
								strokeWidth={1.5}
								className='text-app-slate-blue'
								size={36}
							/>
							<h2 className='mt-4 text-lg font-bold text-white'>
								{feat.title}
							</h2>

							<p className='mt-1 text-sm text-gray-200'>
								{feat.description}
							</p>
						</div>
						// <div key={idx} className="flex flex-col items-center">
						//     <div className="mb-4">{feat.Svg}</div>
						//     <h1 className="text-lg font-semibold">{feat.title}</h1>
						//     <span className="text-stone-300">{feat.description}</span>
						// </div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Features;
