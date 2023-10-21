import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { CalendarRange } from 'lucide-react';
import { useRouter } from 'next/router';
import { getAllPostData } from '@/blockchain/constants/utils';
import { utils } from 'ethers';
import { useAccount } from 'wagmi';

function ClientPostings() {
	const router = useRouter();
	const { address } = useAccount();

	const [postings, setPostings] = useState<Posting[]>([]);

	useEffect(() => {
		getAllPostData().then((data) =>
			setPostings(
				(data as Posting[]).filter((post) => post.clientId === address)
			)
		);
	}, [address]);

	console.log(postings);

	return (
		<section className='mt-4 font-outfit'>
			<div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{postings.map((post, idx) => (
					<div
						className='w-full flex flex-col lg:flex-ro md:justify-between md:items-center gap-8 hover:-translate-y-1 transition-all duration-300 bg-app-grey-light p-4 md:p-8 rounded border border-white/10'
						key={idx}
					>
						<div className='flex flex-col gap-4'>
							<h2 className='bg-app-slate-blue rounded font-medium px-2 py-1 w-fit'>
								{post.category}
							</h2>
							<h1 className='font-semibold text-2xl'>
								{post.title}
							</h1>
							<div className='text-base flex items-center gap-4'>
								<p>
									<span className='font-medium'>
										{/* @ts-ignore */}
										{utils.formatEther(post.payInMATIC)}
									</span>{' '}
									MATIC
								</p>
								<p>•</p>
								<p className='flex items-center gap-2'>
									<CalendarRange
										strokeWidth={1.5}
										size={18}
									/>{' '}
									2 days ago
								</p>
							</div>
						</div>
						{/* <div className="flex gap-4 items-center">
              <div>
                <Image
                  unoptimized
                  className="md:w-12 rounded-full md:h-12 w-10 h-10 object-cover"
                  src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"
                  alt="company logo"
                  width={100}
                  height={100}
                />
              </div>
              <div className="">
                <h1 className="text-base  font-semibold">Freelancer 1</h1>
                <div className="flex gap-4 text-base font-medium">
                  <p>Junior</p>
                  <p>|</p>
                  <p>⭐⭐⭐⭐</p>
                </div>
              </div>
            </div> */}
						<Button
							onClick={() =>
								router.push(`/dashboard/client/posting/${idx}`)
							}
							variant={'secondary'}
							className='h-12 w-full text-base'
						>
							View Posting
						</Button>
					</div>
				))}
			</div>
		</section>
	);
}

export default ClientPostings;
