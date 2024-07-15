'use client'

import { CardSolution } from '@/widgets/CardSolution'
import styles from './CompanyOffers.module.scss'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'

export const CompanyOffers = () => {
	const t = useTranslations('CompanyOffers')

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
							{t('infoSmall')}
						</motion.h3>
					</div>
					<div className={styles.Info}>
						<motion.p variants={pVariants} custom={3} className={styles.InfoP}>
							{t('infoBig')}
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
