import Link from 'next/link'
import Image from 'next/image'

import logo from '@/public/logo.svg'
import styles from './Header.module.css'

import { getPageData } from '@/helpers/helpers'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Header() {
	// const [menu, setMenu] = useState([])

	// useEffect(() => {
	// 	getPageData('header?populate=*').then((data) => {
	// 		setMenu(data?.data?.data)
	// 	})
	// })

	return (
		<>
			<div className={styles.fake_padding}></div>
			<header className={styles.header}>
				<div className="container">
					<div className={styles.header_wrapper}>
						<div className={styles.logo_wrapper_block}>
							<Link className={styles.logo_img} href="/">
								<Image src={logo} height={25} width={150} alt="Logo" />
							</Link>
						</div>
						<div className={styles.header_inner_content}>
							<div className={styles.main_menu}>
								<ul id="menu-main" className="menu">
									<li className={styles.current_menu_item}><Link href="/">Home</Link></li>
									<li className=""><Link href="/blog">Blog</Link></li>
									<li className=""><Link href="/about">About</Link></li>
									<li className=""><Link href="/contact">Contact</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}