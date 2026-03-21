import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import MenuLink from "./MenuLink";

type MenuProps = {
	isHeader: boolean;
};

const Menu = ({ isHeader = true }: MenuProps) => {
	return (
		<nav
			className={`w-full h-20 flex justify-between gap-10 ${
				isHeader
					? "relative z-20 max-w-275 pt-10 pr-5 header-menu"
					: "max-w-275 pt-11.75 border-t border-t-white footer-menu"
			}`}
			aria-label={isHeader ? "Main navigation" : "Footer navigation"}
		>
			{/* Logo - text*/}
			<a
				href="/"
				className={`font-bold text-[32px] leading-8 tracking-[-0.44px] ${
					isHeader ? "author-logo" : ""
				}`}
				aria-label="Homepage"
			>
				adamkeyes
			</a>
			{/* End of Logo - text */}
			<ul className="w-full max-w-50 flex items-center justify-between gap-2.5">
				<MenuLink
					text={<FaGithub />}
					href="https://github.com/"
					ariaLabel="GitHub profile (opens in a new tab)"
				/>
				<MenuLink
					text={<FaInstagram />}
					href="https://www.instagram.com/"
					ariaLabel="Instagram profile (opens in a new tab)"
				/>
				<MenuLink
					text={<FaLinkedin />}
					href="linkedin.com"
					ariaLabel="LinkedIn profile (opens in a new tab)"
				/>
				<MenuLink
					text={<FaTwitter />}
					href="https://x.com/"
					ariaLabel="Twitter profile (opens in a new tab)"
				/>
			</ul>
		</nav>
	);
};

export default Menu;
