import styles from './Review.module.css'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Review({ data }) {
	const { title, feedbacks } = data

	return (
		<section className={`section ${styles.review_section}`}>
			<div className={`container ${styles.review_container}`}>
				<div className="section_title">{title}</div>
				<Swiper
					className={styles.swiper_container}
					slidesPerView={1}
					loop={true}
					navigation={true}
					grabCursor={true}
					pagination={{
						clickable: true,
					}}
					modules={[Navigation, Pagination]}
				>
					<div className={`${styles.review_review} ${styles.swiper_wrapper}`}>
						{feedbacks?.map((item, i) => {
							return (
								<SwiperSlide className={`${styles.review_items} ${styles.swiper_slide}`} key={i}>
									<div className={styles.review_item_wrapper}>
										<div className={styles.description}>{item.content}</div>
										<div className={styles.author_block}>
											<div className={styles.author_image}>
												<img src={`http://localhost:1337${item?.image?.data?.attributes.url}`} alt="photo" />
											</div>
											<div className={styles.author_info}>
												<div className={styles.author_name}>{item.name}</div>
												<div className={styles.published_data}>{item.date}</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							)
						})}
					</div>
				</Swiper>
			</div>
		</section>
	)
}