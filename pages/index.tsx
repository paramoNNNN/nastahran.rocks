import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "components";

import styles from "./styles.module.css";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Nastahran Rock</title>
				<meta name="description" content="Nastahran Rocks!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<main className={styles.main}>
				<p className={styles.title}>Nastahran Rocks</p>
			</main>
		</>
	);
};

export default Home;
