import Article from '@/components/Article'
import styles from './Blog.module.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Blog() {

	const [posts, setPosts] = useState([])

	useEffect(() => {
		getData().catch(console.error)
	}, [])

	const getData = async () => {
		const data = await axios.get(`${API_URL}/posts?populate=*`)
		setPosts(data?.data?.data)
	}

	return (
		<section className={styles.category_section}>
			<div className="container">
				<h1 className={styles.section_title}>Blog</h1>
				<div className={`${styles.section_content} ${styles.category_content}`}>
					<div className={`${styles.category_description} ${styles.box_content}`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</div>
					<div className={styles.category_content_part}>
						<div className={styles.blog_post_grid}>
							{posts.map((post, i) => <Article key={i} id={post.id} post={post.attributes} />)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}