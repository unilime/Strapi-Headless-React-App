import styles from './Brand.module.css'
import Link from 'next/link'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper";
import 'swiper/css'

export default function Brand({ data }) {
	const { brands } = data
	return (
		<section className={`section ${styles.brand_section}`}>
			<div className="container">
				<h2 className="section_title">Section Title</h2>
				<Swiper
					className={styles.swiper_container}
					speed={6000}
					loop={true}
					slidesPerView={'auto'}
					centeredSlides={true}
					slideToClickedSlide={true}
					autoplay={{ delay: 1 }}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
					}}
					modules={[Autoplay]}
				>
					<div className={`${styles.brand_grid} ${styles.swiper_wrapper}`}>
						{brands?.data?.map((img, i) => {
							return (
								<SwiperSlide className={`${styles.brand_items} ${styles.swiper_slide}`} key={i}>
									<Link className={styles.brand_img} href="#">
										<img src={`http://localhost:1337${img?.attributes.url}`} alt="logo" />
									</Link>
								</SwiperSlide>
							)
						})}
					</div>
				</Swiper>
			</div >
		</section >
	)
}