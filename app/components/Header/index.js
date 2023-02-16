import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
	return (
		<>
			<div className={styles.fake_padding}></div>
			<header className={styles.header}>
				<div className="container">
					<div className={styles.header_wrapper}>
						<div className={styles.logo_wrapper_block}>
							<Link className={styles.logo_img} href="/">
								<img src="/logo.svg" alt="Logo" />
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