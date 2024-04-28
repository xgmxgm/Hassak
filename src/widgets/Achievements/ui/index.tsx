'use client'

import { MAchievementCard } from '@/shared/ui/AchievementCard'
import { motion } from "framer-motion"
import styles from './Achievements.module.scss'

export const Achievements = () => {
	const pVariants = {
        hidden: {
            x: -100,
            opacity: 0,
        },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
			transition: { delay: custom * 0.2 }
        })
    }

	return (
		<>
			<motion.div
				className={styles.Achievements}
				initial = "hidden"
				whileInView = "visible"
				viewport={{once: true, amount: 0.5}}
			>
				<div className={styles.Content}>
					<div className={styles.Text}>
						<p className={styles.Numbs}>ЦИФРЫ</p>
						<h2 className={styles.Title}>ТОО Hassak Engineering</h2>
					</div>
					<div className={styles.Cards}>
						<MAchievementCard variants={pVariants} custom={1} title='Инженеров' icon='engineer.svg' Achievement='20+'  />
						<MAchievementCard variants={pVariants} custom={2} title='Реализованные Проекты' icon='ruler.svg' Achievement='100+'  />
						<MAchievementCard variants={pVariants} custom={3} title='Клиенты' icon='users.svg' Achievement='500+'  />
						<MAchievementCard variants={pVariants} custom={4} title='Опыт Работы' icon='wheelbarrow.svg' Achievement='15лет'  />
					</div>
				</div>
			</motion.div>
		</>
	)
}