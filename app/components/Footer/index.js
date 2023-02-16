import Link from 'next/link';
import styles from './Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer_top}>
				<div className="container">
					<div className={styles.footer_grid}>
						<div className={styles.footer_col}>
							<div className={styles.footer_menu_content}>
								<Link className={`${styles.logo} ${styles.logo_img}`} href="/">
									<img src="/logo.svg" alt="Logo" />
								</Link>
								<div className={styles.site_description}>Site description footer</div>
							</div>
						</div>
						<div className={styles.footer_col}>
							<div className={styles.footer_menu}>
								<ul>
									<li><Link href="/">Home</Link></li>
									<li><Link href="/blog">Blog</Link></li>
									<li><Link href="/about">About</Link></li>
									<li><Link href="/contact">Contact</Link></li>
									<li><Link href="/">Privacy Policy</Link></li>
								</ul>
							</div>
						</div>
						<div className={styles.footer_col}>
							<div className={styles.footer_social}>
								<div className={styles.footer_title}>Social Networks</div>
								<ul>
									<li><Link href="#" target="_blank"><i className="icon-instagram"></i></Link></li>
									<li><Link href="#" target="_blank"><i className="icon-twitter"></i></Link></li>
									<li><Link href="#" target="_blank"><i className="icon-facebook"></i></Link></li>
									<li><Link href="#" target="_blank"><i className="icon-linkedin"></i></Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer_bottom}>
				<div className={styles.container}>
					<div className={styles.footer_copyright}>
						<div className={styles.copy}>
							Designed and developed by
							<Link href="https://unilime.group/" target="_blank"> Unilime.Group</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}