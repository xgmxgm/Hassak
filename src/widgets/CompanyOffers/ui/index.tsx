'use client'

import { CardSolution } from '@/widgets/CardSolution'
import styles from './CompanyOffers.module.scss'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

export const CompanyOffers = () => {
	const { t } = useTranslation()

	const pVariants = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.3 },
		}),
	}

	return (
		<>
			<motion.div
				className={styles.CompanyOffers}
				initial='hidden'
				whileInView='visible'
				viewport={{ amount: 0.1, once: true }}
			>
				<div className={styles.Content}>
					<div className={styles.Title}>
						<motion.h3
							variants={pVariants}
							custom={2}
							className={styles.TitleH3}
						>
							{t('CompanyOffers.infoSmall')}
						</motion.h3>
					</div>
					<div className={styles.Info}>
						<motion.p variants={pVariants} custom={3} className={styles.InfoP}>
							{t('CompanyOffers.infoBig')}
						</motion.p>
					</div>
					<div className={styles.CardSolution}>
						<CardSolution />
					</div>
				</div>
			</motion.div>
		</>
	)
}
