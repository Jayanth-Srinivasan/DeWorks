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
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!',
		},
		{
			Svg: FileEdit,
			title: 'User Registration and Onboarding',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!',
		},
		{
			Svg: FileCheck2,
			title: 'Task Creation and Assignment',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!',
		},
		{
			Svg: Newspaper,
			title: 'Smart Contract Creation',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!',
		},
		{
			Svg: BadgeCheck,
			title: 'Task Completion Verification',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!',
		},
		{
			Svg: Banknote,
			title: 'Instant Payment Release',
			description:
				'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!',
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
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Consequuntur aliquam doloribus nesciunt eos
						fugiat. Vitae aperiam fugit consequuntur saepe laborum.
					</p>
				</div>
				<div className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
					{FEATURES.map((feat, idx) => (
						<a
							className='block rounded-xl border-2 border-[#ffffff12] p-8 shadow-xl transition duration-300 hover:scale-105'
							href='#'
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
						</a>
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
