import styles from './Contact.module.css'
import axios from 'axios'

import { useEffect, useState } from 'react'

import ReactMarkdown from 'react-markdown'

export default function Contact() {
	const [contact, setContact] = useState([])

	useEffect(() => {
		getData().catch(console.error())
	}, [])

	const getData = async () => {
		const data = await axios.get(`${API_URL}/contact?populate=*`)
		setContact(data?.data?.data)
	}

	return (
		<section className={styles.contact_section}>
			<div class="container">
				<h1 class={styles.section_title}>{contact?.attributes?.title}</h1>
				<div class={styles.contact_page_grid}>
					<div class={`${styles.items} ${styles.form}`}>
						<div class={styles.form_wrapper}>
							FORM
						</div>
					</div>
					<div class={`${styles.items} ${styles.information}`}>
						<div class={`${styles.contact_text} ${styles.box_content}`}>
							<ReactMarkdown>{contact?.attributes?.description}</ReactMarkdown>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}