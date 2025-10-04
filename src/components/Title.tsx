type TitleProps = {
	text?: string;
	isHeader?: boolean;
};

const Title = ({ text, isHeader = true }: TitleProps) => {
	return isHeader ? (
		<h1 className="font-bold text-[88px] leading-[88px] tracking-[-2.5px] mb-[46px]">
			Nice to meet you! I'm <span className="author">Adam Keyes</span>.
		</h1>
	) : (
		<h2 className="font-bold text-[88px] leading-[88px] tracking-[-2.5px]">
			{text}
		</h2>
	);
};

export default Title;
