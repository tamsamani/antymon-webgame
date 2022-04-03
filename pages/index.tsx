import Head from 'next/head'
import { Button } from "@mantine/core"
import BgLayout from '../components/BgLayout'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (<BgLayout >
		<Head>
			<title>Antymon | RPGB Game</title>
			<meta name="description" content="a mini game based to rpg style" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		
		<h1 className={styles.title}>
			Welcome to Antymon
		</h1>

		<p className={styles.description}>
			Get start your journy to catch monsters
		</p>

		<div className={styles.grid}>
			<Button>Start Game</Button>
		</div>


		<footer className={styles.footer}>
			<a
				href="#"
				target="_blank"
				rel="noopener noreferrer"
			>
				Powered by Vercel
				and Replit & developed by Tamsamani
			</a>
		</footer>
	</BgLayout>)
}
