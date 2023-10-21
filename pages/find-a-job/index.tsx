import { getAllPostData } from '@/blockchain/constants/utils';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { Button } from '@/components/ui/button';
import { POSTINGS } from '@/constants/postings';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { utils } from 'ethers';

const FindAJob = () => {
	const [postings, setPostings] = useState<Posting[]>([]);

	useEffect(() => {
		getAllPostData().then((data) => setPostings(data as Posting[]));
	}, []);
	const CATEGORIES = [
		'Accounting',
		'Business & Consulting',
		'Human Research',
		'Marketing & Finance',
		'Design & Development',
		'Finance Management',
		'Project Management',
		'Customer Service',
		'Healthcare',
		'Education',
		'Engineering',
	];
	const EXPERIENCE = ['Beginner', 'Intermediate', 'Expert'];
	return (
		<main className="h-full bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
			<Header />
			<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto font-outfit py-[50px] md:py-[80px]'>
				<div className='mx-auto flex flex-col lg:max-w-3xl gap-4 text-center pb-[50px] md:pb-[80px]'>
					<h2 className='text-3xl lg:text-5xl font-bold'>
						Find your Job
					</h2>
					<p className='text-slate-200 md:text-lg'>
						Browse listings, submit your proposals, and collaborate
						with clients who value your talents. Find the projects
						that align with your expertise and take your freelancing
						career to the next level.
					</p>
				</div>
				<div className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4'>
					<div className='flex flex-col gap-4 lg:col-span-1 h-fit lg:sticky lg:top-24'>
						<div>
							<h2 className='text-xl lg:text-3xl font-bold'>
								Category
							</h2>
							<div className='flex flex-col gap-2 mt-4'>
								{CATEGORIES.map((item, idx) => (
									<Link
										href={`/find-a-job/${item}`}
										key={idx}
									>
										<h1 className='text-lg py-2 px-4 border bg-app-grey-dark rounded hover:bg-app-slate-blue transition-all duration-300 border-white/10'>
											{item}
										</h1>
									</Link>
								))}
							</div>
						</div>
						<div>
							<h2 className='text-xl lg:text-3xl font-bold'>
								Job Level
							</h2>
							<div className='flex flex-col gap-2 mt-4'>
								{EXPERIENCE.map((item, idx) => (
									<Link
										href={`/find-a-job/${item}`}
										key={idx}
									>
										<h1 className='text-lg py-2 px-4 border bg-app-grey-dark rounded hover:bg-app-slate-blue transition-all duration-300 border-white/10'>
											{item}
										</h1>
									</Link>
								))}
							</div>
						</div>
					</div>
					<div className='lg:col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2'>
						{postings.map((job, idx) => (
							<div
								className='w-full capitalize flex flex-col gap-8 hover:-translate-y-1 transition-all duration-300 h-fit bg-app-grey-light p-4 md:p-8 rounded border border-white/10'
								key={idx}
							>
								<div className='flex flex-col gap-4'>
									<h2 className='bg-app-slate-blue rounded font-medium px-2 py-1 w-fit'>
										{job.title}
									</h2>
									<h1 className='font-semibold text-2xl'>
										{job.location}
									</h1>
									<p className='capitalize'>{job.description}</p>
									<div className='text-base flex items-center gap-4'>
										<p>
											<span className='font-medium'>
												{utils.formatEther(
													// @ts-ignore
													job.payInMATIC
												)}
											</span>{' '}
											MATIC
										</p>
										<p>•</p>
										<p>{job.experience}</p>
									</div>
								</div>
								{/* <div className="flex gap-4 items-center">
                  <div>
                    <Image
                      unoptimized
                      className="w-12"
                      src={job.client.image}
                      alt="company logo"
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <p>{job.client.name}</p>
                    <p className="flex items-center gap-1">
                      <MapPin strokeWidth={1.5} size={16} /> {job.location}
                    </p>
                  </div>
                </div> */}
								<Button
									variant={'secondary'}
									className='h-12 text-base mt-auto'
									asChild
								>
									<Link href={`/posting/${idx}`}>
										View Posting
									</Link>
								</Button>
							</div>
						))}
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export default FindAJob;
