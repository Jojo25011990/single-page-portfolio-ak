type MenuLinkProps = {
	text: React.ReactNode;
	href: string;
	ariaLabel: string;
};

const MenuLink = ({ text, href, ariaLabel }: MenuLinkProps) => {
	return (
		<li>
			<a
				href={href}
				className="text-2xl hover:text-success-primary active:text-success-primary focus:outline-none focus-visible:text-success-primary  duration-300 transition-colors"
				aria-label={ariaLabel}
				target="_blank"
				rel="noopener noreferrer"
			>
				{text}
			</a>
		</li>
	);
};

export default MenuLink;
