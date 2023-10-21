type Posting = Readonly<{
	id: string;
	category: Category;
	title: string;
	location: string;
	pay: number;
	experience: Experience;
	description: string[];
	responsibilities: string[];
	benefits: string[];
	client: {
		name: string;
		image: string;
	};
	walletAddress: string;
	clientId: string;
}>;

type Experience = 'Beginner' | 'Intermediate' | 'Expert';
type Category =
	| 'Accounting'
	| 'Business & Consulting'
	| 'Human Research'
	| 'Marketing & Finance'
	| 'Design & Development'
	| 'Finance Management'
	| 'Project Management'
	| 'Customer Service'
	| 'Healthcare'
	| 'Education'
	| 'Engineering';
