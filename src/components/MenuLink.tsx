type MenuLinkProps = {
	text: React.ReactNode;
	href: string;
};

const MenuLink = ({ text, href }: MenuLinkProps) => {
	return (
		<li>
			<a
				href={href}
				className="text-2xl hover:text-success-primary active:text-success-primary duration-300 transition-colors"
			>
				{text}
			</a>
		</li>
	);
};

export default MenuLink;
