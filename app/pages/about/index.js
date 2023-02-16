import styles from './About.module.css'

import { useEffect, useState } from 'react'
import axios from 'axios'

import ReactMarkdown from 'react-markdown'

export default function About() {
	const [about, setAbout] = useState([])

	useEffect(() => {
		getData().catch(console.error())
	}, [])

	const getData = async () => {
		const data = await axios.get(`${API_URL}/about?populate=*`)
		setAbout(data?.data?.data)
	}

	let imageUrl = `http://localhost:1337${about?.attributes?.background?.data?.attributes.url}`
	return (
		<section className={styles.about_page}>
			<div className={styles.section_banner} style={{ backgroundImage: `url("${imageUrl}")` }}>
				<h1>{about?.attributes?.title}</h1>
			</div>
			<div className="container">
				<div className={styles.box_content}>
					<ReactMarkdown>{about?.attributes?.content}</ReactMarkdown>
				</div>
			</div>
		</section>
	)
}