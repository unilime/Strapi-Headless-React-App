import Image from 'next/image'
import styles from './WWD.module.css'

export default function WhatWeDo({ data }) {
	return (
		<section id="about_section" className={`${styles.section} ${styles.about_section}`}>
			<div className="container">
				<div className={styles.wrapper_box}>
					<div className={styles.section_title}>Section Title</div>
					<div className={styles.section_sub_title}>Section Subtitle</div>
				</div>
				<div className={styles.about_slide_grid}>
					<div className={styles.about_slide_grid_item}>
						<div className={styles.img}>
							<Image src="/vercel.svg" width={550} height={350} alt="img" />
						</div>
						<div className={styles.item_info}>
							<div className={styles.title}>Item title</div>
							<div className={styles.description}>Item desc</div>
						</div>
					</div>

					<div className={styles.about_slide_grid_item}>
						<div className={styles.img}>
							<Image src="/next.svg" width={550} height={350} alt="img" />
						</div>
						<div className={styles.item_info}>
							<div className={styles.title}>Item title</div>
							<div className={styles.description}>Item desc</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}