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
		<header className="relative w-full  flex justify-center px-5">
			<div className="relative w-full max-w-[1100px] h-[720px] header-wrapper">
				<Menu isHeader={true} />

				<div className="relative left-0 top-[160px] z-20 w-full max-w-[706px] h-full max-h-[407px] header-content">
					<Title />
					<Message
						description="Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love."
						className="mb-[66px] max-w-[445px]"
					/>
					<Button isForm={false} />
				</div>

				<Image
					srcImg={RingsImage}
					altImg="Background Image - White Rings"
					className="top-[180px] left-[-272px] ring-img"
				/>
				<Image
					srcImg={CircleImage}
					altImg="Background Image - White Circle"
					className="z-20 top-[521px] right-[382.5px] circle-img"
				/>
				<Image
					srcImg={ProfileImage}
					altImg="Adam Keyes - Frontend Developer"
					className="z-10 right-0 top-0 h-full object-cover author-img"
				/>
			</div>
		</header>
	);
};

export default Header;
