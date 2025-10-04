import RingsImage from "../assets/images/pattern-rings.svg";
import CircleImage from "../assets/images/pattern-circle.svg";
import ProfileImage from "../assets/images/image-profile-desktop.webp";

type ImageProps = {
	className?: string;
	srcImg: typeof RingsImage | typeof CircleImage | typeof ProfileImage;
	altImg: string;
};

const Image = ({ className = "", srcImg, altImg }: ImageProps) => {
	return (
		<img src={srcImg} alt={altImg} className={`absolute ${className}`} />
	);
};

export default Image;
