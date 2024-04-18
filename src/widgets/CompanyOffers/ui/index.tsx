import { CardSolution } from '@/widgets/CardSolution'
import styles from './CompanyOffers.module.scss'

export const CompanyOffers = () => {
	return (
		<>
			<div className={styles.CompanyOffers}>
				<div className={styles.Content}>
					<div className={styles.CompanyTitle}>
						<h3 className={styles.Title}>ТОО HASSAK ENGINEERING</h3>
					</div>
					<div className={styles.Title}>
						<h3 className={styles.TitleH3}>Наша компания предлагает комплексные инженерные решения</h3>
					</div>
					<div className={styles.Info}>
						<p className={styles.InfoP}>которые сопровождаются с высококвалифицированными техническими специалистами, имеющие опыт работы более 10 лет</p>
					</div>
					<div className={styles.CardSolution}>
						<CardSolution />
					</div>
				</div>
			</div>
		</>
	)
}