import { createElement } from "react";
import Github from "assets/icons/github.svg";

export const icons = {
	Github,
};

export type Icon = keyof typeof icons;

interface Props {
	/** icon custom class name */
	className?: string;
	/** will fire if click action triggered */
	onClick?: () => void;
	/** name of the icon */
	name: Icon;
}

const Icon = ({ className, onClick, name }: Props): JSX.Element => {
	return createElement(icons[name], { className, onClick });
};

export default Icon;
