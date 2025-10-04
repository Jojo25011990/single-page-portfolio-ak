import DesignPortfolio from "./assets/images/thumbnail-project-1-large.webp";
import LearningPage from "./assets/images/thumbnail-project-2-large.webp";
import TodoList from "./assets/images/thumbnail-project-3-large.webp";
import EntertnaimentApp from "./assets/images/thumbnail-project-4-large.webp";
import MemoryGame from "./assets/images/thumbnail-project-5-large.webp";
import ArtGallery from "./assets/images/thumbnail-project-6-large.webp";

type dataType = {
	id: number;
	title: string;
	technologies: string[];
	image: string;
};

const data: dataType[] = [
	{
		id: 1,
		title: "design Portfolio",
		technologies: ["html", "css"],
		image: DesignPortfolio,
	},
	{
		id: 2,
		title: "e-learning landing page",
		technologies: ["html", "css"],
		image: LearningPage,
	},
	{
		id: 3,
		title: "todo web app",
		technologies: ["html", "css", "javascript"],
		image: TodoList,
	},
	{
		id: 4,
		title: "entertainment web app",
		technologies: ["html", "css", "javascript"],
		image: EntertnaimentApp,
	},
	{
		id: 5,
		title: "memory game",
		technologies: ["html", "css", "javascript"],
		image: MemoryGame,
	},
	{
		id: 6,
		title: "art gallery showcase",
		technologies: ["html", "css", "javascript"],
		image: ArtGallery,
	},
];

export default data;
