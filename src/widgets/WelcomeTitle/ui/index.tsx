import styles from './WelcomeTitle.module.scss'

export const WelcomeTitle = () => {
	return (
		<>
			<div className={styles.WelcomeTitle}>
				<div className={styles.Content}>
					<div className={styles.CompanyTitle}>
						<h2 className={styles.Title}>TEO <br/> BUILDING</h2>
					</div>
					<div className={styles.CompanyInfo}>
						<p className={styles.Info}>Комплексные инженерные решения <br/> Осуществляем проектирование и поставку <br/> инженерных систем по Казахстану</p>
					</div>
				</div>
			</div>
		</>
	)
}