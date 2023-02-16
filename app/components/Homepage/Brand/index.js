import styles from './Brand.module.css'
import Link from 'next/link'
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from "swiper";
import 'swiper/css'

export default function Brand({ data }) {
	return (
		<section className={`section ${styles.brand_section}`}>
			<div className="container">
				<h2 className={styles.section_title}>Section Title</h2>
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
					<SwiperSlide className={`${styles.brand_items} ${styles.swiper_slide}`}>
						<Link className={styles.brand_img} href="#">
							<img src="/vercel.svg" alt="logo" />
						</Link>
					</SwiperSlide>
					<SwiperSlide className={`${styles.brand_items} ${styles.swiper_slide}`}>
						<Link className={styles.brand_img} href="#">
							<img src="/next.svg" alt="logo" />
						</Link>
					</SwiperSlide>
					<SwiperSlide className={`${styles.brand_items} ${styles.swiper_slide}`}>
						<Link className={styles.brand_img} href="#">
							<img src="/vercel.svg" alt="logo" />
						</Link>
					</SwiperSlide>
					<SwiperSlide className={`${styles.brand_items} ${styles.swiper_slide}`}>
						<Link className={styles.brand_img} href="#">
							<img src="/next.svg" alt="logo" />
						</Link>
					</SwiperSlide>
				</Swiper>
				{/* <div className={`${styles.swiper_container} ${styles.init_brand_slider_js}`}>
					<div className={`${styles.brand_grid} ${styles.swiper_wrapper}`}>
						<div className={`${styles.brand_items} ${styles.swiper_slide}`}>
							<Link className={styles.brand_img} href="#">
								<img src="/vercel.svg" alt="logo" />
							</Link>
						</div>
						<div className={`${styles.brand_items} ${styles.swiper_slide}`}>
							<Link className={styles.brand_img} href="#">
								<img src="/next.svg" alt="logo" />
							</Link>
						</div>
					</div>
				</div> */}
			</div>
		</section >
	)
}