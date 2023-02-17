import Image from 'next/image'
import styles from './WWD.module.css'

export default function WhatWeDo({ data }) {
	const { title, subtitle, features } = data
	return (
		<section id="about_section" className={`section ${styles.about_section}`}>
			<div className="container">
				<div className={styles.wrapper_box}>
					<div className="section_title">{title}</div>
					<div className={styles.section_sub_title}>{subtitle}</div>
				</div>
				<div className={styles.about_slide_grid}>
					{features?.map((item, i) => {
						return (
							<div className={styles.about_slide_grid_item} key={i}>
								<div className={styles.img}>
									<img src={`http://localhost:1337${item?.image?.data?.attributes.url}`} alt="img" />
								</div>
								<div className={styles.item_info}>
									<div className={styles.title}>{item.title}</div>
									<div className={styles.description}>{item.subtitle}</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}