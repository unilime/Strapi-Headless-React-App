import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Info.module.css'

export default function Info({ data }) {
	return (
		<section className={`${styles.section} ${styles.service_section}`} >
			<div className="container">
				<h2 className={styles.section_title}></h2>
				<div className={styles.service_grid_list}>
					{data.infos?.map((item, index) => {
						return (
							<div className={styles.service_items} key={index}>
								<Link className={styles.item_wrapper} href="#">
									<span className={styles.info_top}>
										<span className={styles.image}>
											<img src={`http://localhost:1337${item?.image?.data[0]?.attributes.url}`} alt="icon" />
										</span>
										<span className={styles.title}>{item.title}</span>
									</span>
									<span className={styles.info_description}>{item.subtitle}</span>
									{item?.buttons.map((btn, i) => {
										return (
											<span className={`${styles.btn} ${styles.btn_box1} ${styles.btn_more}`} key={i}>
												<span>{btn.title}</span>
												{btn.icon && (
													<i className={btn.icon}></i>
												)}
											</span>
										)
									})}
								</Link>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}