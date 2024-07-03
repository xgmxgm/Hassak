'use client'

import { CardSolution } from '@/widgets/CardSolution'
import styles from './Services.module.scss'

export const Services = () => {
	return (
		<>
			<div className={styles.Services}>
				<div className={styles.Content}>
					<div className={styles.Title}>
						<h2 className={styles.TitleText}>Услуги</h2>
					</div>
					<div className={styles.ServicesBlock}>
						<CardSolution />
					</div>
				</div>
			</div>
		</>
	)
}