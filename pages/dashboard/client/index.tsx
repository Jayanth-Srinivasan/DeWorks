import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ClientPostings from '@/components/clientDashboard/ClientPostings';
import Notifications from '@/components/clientDashboard/Notifications';
import Freelancers from '@/components/clientDashboard/Freelancers';
import ConnectWalletButton from '@/components/connectWalletButton';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import { getAllPostData } from '@/blockchain/constants/utils';

function ClientDashboard() {
	const { isConnected, address } = useAccount();
	const router = useRouter();

	useEffect(() => {
		if (!isConnected) {
			router.replace('/');
		}
	}, [address]);

	return (
		<main className="min-h-screen bg-[url('/assets/line-bg.png')] w-full font-outfit bg-app-grey-dark text-stone-200">
			<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto'>
				<div className='flex items-center sm:justify-between sm:gap-4'>
					<div className='flex flex-1 items-center justify-end gap-8'>
						{/* <button
              type="button"
              className="group flex shrink-0 items-center rounded-lg transition"
            >
              <Image
                alt="Man"
                src={
                  "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1770&amp;q=80"
                }
                width={100}
                height={100}
                className="rounded-full object-cover w-12 h-12"
              />

              <p className="ms-2 hidden text-left text-sm md:block">
                <span className="block font-medium">Eric Frusciante</span>

                <span className="text-slate-300"> eric@frusciante.com </span>
              </p>
            </button> */}
						<ConnectWalletButton />
					</div>
				</div>
				<div className='flex flex-col md:flex-row md:justify-between mt-8 md:items-center gap-4 md:gap-0'>
					<div className=''>
						<h1 className='text-3xl font-bold md:text-5xl'>
							Dashboard
						</h1>

						<p className='mt-1.5 text-sm text-slate-300'>
							Your website has seen a 52% increase in traffic in
							the last month. Keep it up! 🚀
						</p>
					</div>
					<div>
						<Button variant={'outline'} className='h-12 ' asChild>
							<Link href={'/post-a-job'}>Post a Job</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto py-[50px] md:py-[80px]'>
				<div className='w-full'>
					<Tabs
						defaultValue='postings'
						className='text-sm md:text-base w-full'
					>
						<TabsList className='w-full md:w-fit'>
							<TabsTrigger value='postings'>
								Your Postings
							</TabsTrigger>
							<TabsTrigger value='freelancers'>
								Find Freelancers
							</TabsTrigger>
							<TabsTrigger value='notification'>
								Notification
							</TabsTrigger>
						</TabsList>
						<TabsContent value='postings'>
							<ClientPostings />
						</TabsContent>
						<TabsContent value='freelancers'>
							<Freelancers />
						</TabsContent>
						<TabsContent value='notification'>
							<Notifications />
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</main>
	);
}

export default ClientDashboard;
