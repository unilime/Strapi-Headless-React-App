import Link from 'next/link'
import styles from './Article.module.css'

export default function Article({ post, id }) {
	const { title, content } = post
	const imageUrl = post?.image?.data?.attributes.url

	return (
		<div className={styles.blog_post_grid_items}>
			<Link className={styles.blog_post_grid_item} href={`posts/${id}`}>
				<span className={styles.image_wrapper}>
					{/* <Image width={600} height={350} src={(imageUrl)} alt="photo" /> */}
					<img src={`http://localhost:1337${imageUrl}`} alt="photo" />
				</span>
				<span className={styles.card_info}>
					<span className={styles.title}>{title}</span>
					<span className={styles.description}>{content.substr(0, 75)}...</span>
					<span className={`${styles.btn} ${styles.btn_box1}`}>
						<span>Learn more</span>
					</span>
				</span>
			</Link>
		</div>
	)
}