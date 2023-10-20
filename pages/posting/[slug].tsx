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

const IndividualPostingPage: NextPage<
	InferGetStaticPropsType<typeof getStaticProps>
> = ({ post }) => {
	console.log(post);
	return (
		<main className="h-full bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
			<Header />
			<section className='p-4 flex md:px-16 items-center gap-6 max-w-7xl mx-auto py-[50px] md:py-[80px]'>
				<div>
					<Image
						unoptimized
						className='w-20'
						src={post.client.image}
						alt={post.client.name}
						width={100}
						height={100}
					/>
				</div>
				<div>
					<h1 className='text-3xl lg:text-5xl font-bold'>
						{post.title}
					</h1>
					<p className='text-slate-200 text-lg font-medium md:text-xl mt-2'>
						{post.client.name}
					</p>
				</div>
			</section>
			<section className='p-4 flex flex-col md:px-16 lg:flex-row gap-6 max-w-7xl mx-auto pb-[50px] md:pb-[80px]'>
				<div>
					<h2 className='text-2xl lg:text-4xl font-bold'>
						Job Description
					</h2>
					{post.description.map((description, index) => (
						<p
							key={`post-${post.id}-description-${index}`}
							className='mt-2 text-slate-200 md:text-lg'
						>
							{description}
						</p>
					))}
					<h2 className='text-2xl lg:text-4xl font-bold mt-4'>
						Key Responsibilities
					</h2>
					<ul className='list-disc'>
						{post.responsibilities.map(
							(responsibilities, index) => (
								<li
									key={`post-${post.id}-responsibilities-${index}`}
									className='mt-2 text-slate-200 md:text-lg ml-4'
								>
									{responsibilities}
								</li>
							)
						)}
					</ul>
					<h2 className='text-2xl lg:text-4xl font-bold mt-4'>
						Benefits
					</h2>
					<ul className='list-disc'>
						{post.benefits.map((benefits, index) => (
							<li
								key={`post-${post.id}-benefits-${index}`}
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
								<span>{post.location}</span>
							</li>
							<li className='flex items-center justify-between'>
								<span className='flex gap-2 font-medium items-center'>
									<BarChart strokeWidth={1.5} size={20} />
									Level:
								</span>
								<span>{post.experience}</span>
							</li>
							<li className='flex items-center justify-between'>
								<span className='flex gap-2 font-medium items-center'>
									<Briefcase strokeWidth={1.5} size={20} />
									Category:
								</span>
								<span>{post.category}</span>
							</li>
							<li className='flex items-center justify-between'>
								<span className='flex gap-2 font-medium items-center'>
									<Banknote strokeWidth={1.5} size={20} />
									Pay:
								</span>
								<span>{post.pay}</span>
							</li>
						</ul>
						<Button
							variant={'outline'}
							className='h-12 text-base mt-4 w-full'
							asChild
						>
							<Link href={`#`}>Apply Now</Link>
						</Button>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
};

export const getStaticProps: GetStaticProps<{ post: Posting }> = async (
	context
) => {
	const { slug } = context.params!;
	const post = POSTINGS.find((p) => p.id === slug);
	if (!post) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	return {
		props: { post },
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = POSTINGS.map((post) => {
		return { params: { slug: post.id } };
	});
	return { paths, fallback: false };
};

export default IndividualPostingPage;
