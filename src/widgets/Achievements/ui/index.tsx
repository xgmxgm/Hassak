'use client'

import { MAchievementCard } from '@/shared/ui/AchievementCard'
import { motion } from 'framer-motion'
import styles from './Achievements.module.scss'
import { useTranslations } from 'next-intl'

export const Achievements = () => {
	const t = useTranslations('AchievementCards')

	const pVariants = {
		hidden: {
			x: -100,
			opacity: 0,
		},
		visible: (custom: number) => ({
			x: 0,
			opacity: 1,
			transition: { delay: custom * 0.2 },
		}),
	}

	return (
		<>
			<motion.div
				className={styles.Achievements}
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true, amount: 0.5 }}
			>
				<div className={styles.Content}>
					<div className={styles.Text}>
						<p className={styles.Numbs}>{t('Numbs')}</p>
						<h2 className={styles.Title}>TEO BUILDING</h2>
					</div>
					<div className={styles.Cards}>
						<MAchievementCard
							variants={pVariants}
							custom={1}
							title={t('engineers')}
							icon='engineer.svg'
							Achievement='10+'
						/>
						<MAchievementCard
							variants={pVariants}
							custom={2}
							title={t('completedProjects')}
							icon='ruler.svg'
							Achievement='100+'
						/>
						<MAchievementCard
							variants={pVariants}
							custom={3}
							title={t('clients')}
							icon='users.svg'
							Achievement='200+'
						/>
						<MAchievementCard
							variants={pVariants}
							custom={4}
							title={t('experience')}
							icon='wheelbarrow.svg'
							Achievement='15 лет'
						/>
					</div>
				</div>
			</motion.div>
		</>
	)
}
