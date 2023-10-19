import Link from 'next/link';
import React from 'react';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';

function Header() {
	return (
		<nav className='px-4 md:p-0 sticky top-0 z-50 flex items-center h-[5rem] bg-app-grey-dark justify-between md:px-16  lg:mx-auto'>
			<Link href={'/'}>
				<h1 className='text-2xl font-semibold'>DeWorks</h1>
			</Link>
			<div className='font-normal'>
				<ul className=' lg:flex text-center text-md xl:text-lg items-center hidden'>
					{NAVBAR_NAVIGATION.map((link) => (
						<li
							key={`nav-desktop-link-${link.link}`}
							className='p-5'
						>
							<Link
								className='rounded transition-colors hover:bg-[#222222] p-2 duration-300 ease-in-out'
								href={link.link}
								target={link.target}
							>
								<span>{link.title}</span>
							</Link>
						</li>
					))}
					<li>
						<Button variant={'outline'} className='h-12'>
							Post a Job
						</Button>
					</li>
				</ul>
			</div>
			<div className='lg:hidden'>
				<Sheet>
					<SheetTrigger className='lg:hidden py-4'>
						<Menu strokeWidth={1.5} size={24} />
					</SheetTrigger>
					<SheetContent className='bg-app-grey-dark'>
						<SheetHeader>
							<SheetTitle className='text-2xl font-semibold text-white'>
								DeWorks
							</SheetTitle>
							<SheetDescription>
								<nav className='contents font-semibold '>
									<ul className='mx-auto flex flex-col items-center '>
										{NAVBAR_NAVIGATION.map((link) => (
											<li
												key={`nav-mobile-link-${link.link}`}
												className='p-2'
											>
												<Link
													className='rounded transition-colors hover:bg-[#222222] p-2 duration-300 ease-in-out text-lg'
													href={link.link}
													target={link.target}
												>
													<span>{link.title}</span>
												</Link>
											</li>
										))}
										<li>
											<Button
												variant={'outline'}
												className='mt-2'
											>
												Post a Job
											</Button>
										</li>
									</ul>
								</nav>
							</SheetDescription>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</nav>
	);
}

export default Header;
