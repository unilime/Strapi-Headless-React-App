import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero({ data }) {
	console.log(data);
	const { title, subtitle, background } = data
	const buttons = data.buttons ?? []

	const imageUrl = `http://localhost:1337${background?.data?.attributes.url}`

	return (
		<section className={`section ${styles.hero_section}`} style={{ backgroundImage: `url("${imageUrl}")` }}>
			<div className="container">
				<div className={styles.hero_section_preview}>
					<div className={styles.content_inner}>
						<div className={styles.title}>{title}</div>
						<div className={styles.sub_title}>{subtitle}</div>
						{buttons.map((btn, i) => {
							<Link className={`${styles.btn} ${styles.hero_link}`} href="#" target="_blank">
								{/* <span>learn more</span> */}
								<span>{btn.title}</span>
							</Link>
						})}
					</div>
				</div>
			</div>
		</section >
	)
}