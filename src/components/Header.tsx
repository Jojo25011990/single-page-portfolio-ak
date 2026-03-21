import Button from "./Button";
import Menu from "./Menu";
import Message from "./Message";
import Title from "./Title";
import Image from "./Image";
import RingsImage from "../assets/images/pattern-rings.svg";
import CircleImage from "../assets/images/pattern-circle.svg";
import ProfileImage from "../assets/images/image-profile-desktop.webp";

const Header = () => {
	return (
		<header className="relative w-full flex justify-center px-5">
			<div className="relative w-full max-w-275 h-180 header-wrapper">
				<Menu isHeader={true} />

				<div className="relative left-0 top-40 z-20 w-full max-w-176.5 h-full max-h-101.75 header-content">
					<Title />
					<Message
						description="Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love."
						className="mb-16.5 max-w-111.25"
					/>
					<Button isForm={false} />
				</div>

				<Image
					srcImg={RingsImage}
					altImg=""
					className="top-45 -left-68 ring-img"
				/>
				<Image
					srcImg={CircleImage}
					altImg=""
					className="z-20 top-130.25 right-[382.5px] circle-img"
				/>
				<Image
					srcImg={ProfileImage}
					altImg="Portrait of Adam Keyes - Frontend Developer"
					className="z-10 right-0 top-0 h-full object-cover author-img"
				/>
			</div>
		</header>
	);
};

export default Header;
