import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import Image from 'next/image';
import {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next';
import { POSTINGS } from '@/constants/postings';
import { Banknote, BarChart, Briefcase, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import { getJobById } from '@/blockchain/constants/utils';
import { utils } from 'ethers';

const IndividualPostingPage = () => {
	const benefits = [
		'Flexible work schedule and remote work options.',
		'Opportunity to work with a talented and diverse team.',
		'Enhance your project management skills and gain valuable experience in software development.',
		'Competitive pay and potential for long-term collaboration.',
		'Contribute to the successful delivery of a cutting-edge software product.',
	];
	const responsibilities = [
		'Develop and maintain a detailed project plan, including tasks, timelines, and dependencies.',
		'Allocate resources and manage project budget to ensure efficient utilization of available resources.',
		'Coordinate and communicate with cross-functional teams to ensure alignment and timely completion of project milestones.',
	];
	const [post, setPost] = useState([]);
	const sendPostingRequestNotification = async () => {
		try {
			const res = await axios.post('/api/notification');
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const { isConnected, address } = useAccount();
	const router = useRouter();
	const { idx } = router.query;

	useEffect(() => {
		if (!isConnected) {
			router.replace('/');
		}
	}, [address]);

	useEffect(() => {
		if (isConnected && idx) {
			getJobById(Number(idx)).then((data) => {
				/* @ts-ignore */
				setPost({
					...data,
					formatedMatic: utils.formatEther(data.payInMATIC),
				});
			});
		}
	}, [address, idx]);

	console.log(post);

	return (
		<>
			<Head>
				{/* @ts-ignore */}
				<title>{post.title} | DeWorks</title>
			</Head>
			<main className="h-full bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
				<Header />
				<section className='p-4 flex md:px-16 items-center gap-6 max-w-7xl mx-auto py-[50px] md:py-[80px]'>
					{/* <div>
            <Image
              unoptimized
              className="w-20"
              src={post.client.image}
              alt={post.client.name}
              width={100}
              height={100}
            />
          </div> */}
					<div>
						{/* @ts-ignore */}
						<h1 className='text-3xl lg:text-5xl font-bold'>
							{post.title}
						</h1>
						{/* <p className="text-slate-200 text-lg font-medium md:text-xl mt-2">
              {post.client.name}
            </p> */}
					</div>
				</section>
				<section className='p-4 flex flex-col md:px-16 lg:flex-row gap-6 max-w-7xl mx-auto pb-[50px] md:pb-[80px]'>
					<div>
						<h2 className='text-2xl lg:text-4xl font-bold'>
							Job Description
						</h2>
						{/* <p className="mt-2 text-slate-200 md:text-lg">{post.description} </p> */}
						<p className='mt-2 text-slate-200 md:text-lg'>
							We are seeking a skilled freelance project manager
							to oversee a software development project in Austin,
							TX. As the project manager, you will be responsible
							for ensuring the successful completion of the
							project within the given budget and timeline. Your
							strong project planning, budgeting, and team
							coordination skills will be crucial in driving the
							project forward.
						</p>
						<p className='mt-2 text-slate-200 md:text-lg'>
							In this role, you will collaborate with
							cross-functional teams, including developers,
							designers, and stakeholders, to define project
							goals, allocate resources, and track progress. You
							will also be responsible for identifying and
							mitigating risks, resolving conflicts, and ensuring
							effective communication among team members.
						</p>
						<h2 className='text-2xl lg:text-4xl font-bold my-4'>
							Key Responsibilities
						</h2>
						<ul className='list-disc'>
							{benefits.map((benefits, idx) => (
								<li
									key={idx}
									className='mt-2 text-slate-200 md:text-lg ml-4'
								>
									{benefits}
								</li>
							))}
						</ul>
						<ul className='list-disc'>
							{responsibilities.map((responsibilities, idx) => (
								<li
									key={idx}
									className='mt-2 text-slate-200 md:text-lg ml-4'
								>
									{responsibilities}
								</li>
							))}
						</ul>
						<h2 className='text-2xl lg:text-4xl font-bold mt-4'>
							Benefits
						</h2>
						<ul className='list-disc'>
							{benefits.map((benefits, idx) => (
								<li
									key={idx}
									className='mt-2 text-slate-200 md:text-lg ml-4'
								>
									{benefits}
								</li>
							))}
						</ul>
					</div>
					<div className=''>
						<div className='w-full h-fit bg-app-grey-light border border-white/20 rounded p-4 md:min-w-[400px] lg:sticky top-24'>
							<h2 className='text-2xl lg:text-4xl font-bold'>
								Overview
							</h2>
							<ul className='mt-4 flex flex-col gap-4'>
								<li className='flex items-center justify-between'>
									<span className='flex gap-2 font-medium items-center'>
										<Calendar strokeWidth={1.5} size={20} />
										Posted on:
									</span>
									<span>
										{new Intl.DateTimeFormat('en-IN', {
											dateStyle: 'medium',
											timeZone: 'Asia/Kolkata',
										}).format(new Date())}
									</span>
								</li>
								<li className='flex items-center justify-between'>
									<span className='flex gap-2 font-medium items-center'>
										<MapPin strokeWidth={1.5} size={20} />
										Location:
									</span>
									{/* @ts-ignore */}
									<span>{post.location}</span>
								</li>
								<li className='flex items-center justify-between'>
									<span className='flex gap-2 font-medium items-center'>
										<BarChart strokeWidth={1.5} size={20} />
										Level:
									</span>
									{/* @ts-ignore */}
									<span>{post.experience}</span>
								</li>
								<li className='flex items-center justify-between'>
									<span className='flex gap-2 font-medium items-center'>
										<Briefcase
											strokeWidth={1.5}
											size={20}
										/>
										Category:
									</span>
									{/* @ts-ignore */}
									<span>{post.category}</span>
								</li>
								<li className='flex items-center justify-between'>
									<span className='flex gap-2 font-medium items-center'>
										<Banknote strokeWidth={1.5} size={20} />
										Pay:
									</span>
									<span>
										{/* @ts-ignore */}
										{post.formatedMatic}
										MATIC
									</span>
								</li>
							</ul>
							<Button
								variant={'outline'}
								className='h-12 text-base mt-4 w-full'
								onClick={sendPostingRequestNotification}
							>
								Apply Now
							</Button>
						</div>
					</div>
				</section>
				<Footer />
			</main>
		</>
	);
};

export default IndividualPostingPage;
