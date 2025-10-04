type MessageProps = {
	description?: string;
	className?: string;
};

const Message = ({
	description = "adamkeyes",
	className = "",
}: MessageProps) => {
	return (
		<p
			className={`font-medium text-lg leading-7 tracking-[0px] text-grey-primary ${className}`}
		>
			{description}
		</p>
	);
};

export default Message;
