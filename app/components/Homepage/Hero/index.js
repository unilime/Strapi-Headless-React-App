import Button from '@/components/Button';
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero({ data }) {
	const { title, subtitle, buttons, background } = data

	const imageUrl = `http://localhost:1337${background?.data?.attributes.url}`

	return (
		<section className={`section ${styles.hero_section}`} style={{ backgroundImage: `url("${imageUrl}")` }}>
			<div className="container">
				<div className={styles.hero_section_preview}>
					<div className={styles.content_inner}>
						<div className={styles.title}>{title}</div>
						<div className={styles.sub_title}>{subtitle}</div>
						{buttons?.map((btn, i) => {
							return <Link className={`${styles.btn} ${styles.hero_link}`} href={btn.link} key={i} target="_blank">
								<span>{btn.title}</span>
							</Link>
						})}
					</div>
				</div>
			</div>
		</section >
	)
}