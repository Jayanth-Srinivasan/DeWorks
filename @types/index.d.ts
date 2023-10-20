type Posting = Readonly<{
	category: Category;
	title: string;
	location: string;
	pay: number;
	experience: Experience;
	description: string;
	client: {
		name: string;
		image: string;
	};
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
	| 'Customer Service';
