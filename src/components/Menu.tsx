import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import MenuLink from "./MenuLink";

type MenuProps = {
	isHeader: boolean;
};

const Menu = ({ isHeader = true }: MenuProps) => {
	return (
		<div
			className={`w-full h-20 flex justify-between gap-10 ${
				isHeader
					? "relative z-20 max-w-[1100px] pt-10 pr-5 header-menu"
					: "max-w-[1100px] pt-[47px] border-t-[1px] border-t-white footer-menu"
			}`}
		>
			{/* Logo - text*/}
			<p
				className={`font-bold text-[32px] leading-8 tracking-[-0.44px] ${
					isHeader ? "author-logo" : ""
				}`}
			>
				adamkeyes
			</p>
			{/* End of Logo - text */}
			<ul className="w-full max-w-[200px] flex items-center justify-between gap-2.5">
				<MenuLink text={<FaGithub />} href="#" />
				<MenuLink text={<FaInstagram />} href="#" />
				<MenuLink text={<FaLinkedin />} href="#" />
				<MenuLink text={<FaTwitter />} href="#" />
			</ul>
		</div>
	);
};

export default Menu;

// For Info
// I named this component "Menu instead of Navigation".
// Used div instead nav tag, because links are monstly external ( social media ) and logo, not internal nav 😉
// Back in the day, I used to wrap everything in nav tag and call it "Navigation"🤣😅
