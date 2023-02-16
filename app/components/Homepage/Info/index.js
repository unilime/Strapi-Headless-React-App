import Button from '@/components/Button'
import Link from 'next/link'
import styles from './Info.module.css'

export default function Info({ data }) {
	const { infos } = data

	return (
		<section className={`${styles.section} ${styles.service_section}`} >
			<div className="container">
				<h2 className={styles.section_title}></h2>
				<div className={styles.service_grid_list}>
					{/* {infos?.map((item) => { */}
					<div className={styles.service_items}>
						<Link className={styles.item_wrapper} href="#">
							<span className={styles.info_top}>
								<span className={styles.image}><img src="" alt="icon" /></span>
								<span className={styles.title}>Title</span>
							</span>
							<span className={styles.info_description}>Desc</span>
							<span className={`${styles.btn} ${styles.btn_box1} ${styles.btn_more}`}>
								<span>Learn more</span>
							</span>
						</Link>
					</div>
					{/* })} */}
				</div>
			</div>
		</section>
	)
}