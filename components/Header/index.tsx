import { Icon } from "components";

import styles from "./styles.module.css";

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<a
				className={styles.github}
				href="https://github.com/paramoNNNN/nastahran.rocks"
				title="Github"
				target="_blank"
				rel="noreferrer"
			>
				<Icon name="Github" />
			</a>
		</header>
	);
};

export default Header;
