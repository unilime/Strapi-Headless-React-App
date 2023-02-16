import styles from './Button.module.css'

export default function Button({ props }) {
	const { label, classes } = props

	return (
		<span className={`${styles.btn} ${classes.map((cl) => `${styles}.${cl}`)}`}>
			<span>{label}</span>
		</span>
	)
}