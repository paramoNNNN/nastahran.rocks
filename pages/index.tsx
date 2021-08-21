import type { NextPage } from "next";
import Head from "next/head";

import { Icon } from "components";

import styles from "./styles.module.css";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Nastahran Rock</title>
				<meta name="description" content="Nastahran Rocks!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<a
					className={styles.github}
					href="https://github.com/paramoNNNN/nastahran.rocks"
					title="Github"
					target="_blank"
					rel="noreferrer"
				>
					<Icon name="Github" />
				</a>

				<p className={styles.title}>Nastahran Rocks</p>
			</main>
		</div>
	);
};

export default Home;
