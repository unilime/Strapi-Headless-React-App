import styles from './Review.module.css'

export default function Review() {
	return (
		<section className={styles.review_section}>
			<div className={`container ${styles.review_container}`}>
				<div className={styles.section_title}>Section Review Title</div>
				<div className={styles.swiper_container}>
					<div className={`${styles.review_review} ${styles.swiper_wrapper}`}>

						<div className={`${styles.review_items} ${styles.swiper_slide}`}>
							<div className={styles.review_item_wrapper}>
								<div className={styles.description}>Review Description`</div>
								<div className={styles.author_block}>
									<div className={styles.author_image}>
										<img src="/vercel.svg" alt="photo" />
									</div>
									<div className={styles.author_info}>
										<div className={styles.author_name}>Author Name</div>
										<div className={styles.published_data}>Review Date</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}