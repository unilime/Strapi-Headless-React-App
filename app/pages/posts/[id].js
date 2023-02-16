import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './Post.module.css'
import ReactMarkdown from 'react-markdown'
import Moment from 'moment'

export default function Post() {
	const router = useRouter()
	const { query: { id } } = router
	const [post, setPost] = useState()

	const imageUrl = post?.attributes?.image?.data?.attributes.url
	const date = post?.attributes?.author.date

	useEffect(() => {
		getData().catch(console.error)
	}, [id])

	const getData = async () => {
		if (typeof (id) === 'undefined') return ''
		const data = await axios.get(`http://localhost:1337/api/posts/${id}?populate=*`)
		setPost(data?.data?.data)
	}

	return (
		<div className={styles.blog_page}>
			<div className="container">
				<section className={styles.post_section}>
					<div className={styles.page_breadcrumbs}>
						<div className={styles.breadcrumbs}>

						</div>
					</div>
					<h1 className={styles.title_post}>{post?.attributes.title}</h1>
					<div className={styles.author}>
						<div className={styles.img}>
							<img src={`http://localhost:1337${imageUrl}`} alt="photo" />
						</div>
						<div className={styles.info}>
							<div className={styles.author_block_content}>Written by: .</div>
							<div className={styles.author_block_publish_time}>Last updated: {Moment(date).format('MMM d, YYYY')} </div>
						</div>
					</div>
					<div className={styles.content}>
						<div className={styles.main_content}>
							<div className={styles.toc}>
								<div className={styles.toc_header}>Page Contents</div>
								<div className={styles.toc_body}>
									<ul>
										<li>Header 1</li>
										<li>Header 2</li>
										<li>Header 3</li>
									</ul>
								</div>
							</div>

							<div className={styles.box_content}>
								<ReactMarkdown>{post?.attributes.content}</ReactMarkdown>
							</div>
						</div>
						<div className={styles.sidebar}>
							<div className={styles.sticky_sidebar}>
								<div className={styles.toc}>
									<div className={styles.toc_header}>Page Contents</div>
									<div className={styles.toc_body}>
										<ul>
											<li>Header 1</li>
											<li>Header 2</li>
											<li>Header 3</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}