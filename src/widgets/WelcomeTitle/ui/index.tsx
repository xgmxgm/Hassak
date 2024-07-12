import styles from './WelcomeTitle.module.scss'

export const WelcomeTitle = () => {
	return (
		<>
			<div className={styles.WelcomeTitle}>
				<div className={styles.Content}>
					<div className={styles.CompanyTitle}>
						<h2 className={styles.Title}>TEO BUILDING.</h2>
					</div>
				</div>
			</div>
		</>
	)
}
