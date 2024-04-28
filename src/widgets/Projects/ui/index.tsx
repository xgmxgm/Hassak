'use client'

import { Project } from '@/shared/ui/Project'
import { motion } from 'framer-motion'
import styles from './Projects.module.scss'

export const Projects = () => {
	const pVariants = {
        hidden: {
			x: 100,
            opacity: 0,
        },
        visible: (custom: number) => ({
			x: 0,
            opacity: 1,
			transition: {delay: custom * 0.2},
        }),
    }

	return (
		<>
			<motion.div
				className={styles.Projects}
				initial = "hidden"
				whileInView = "visible"
				viewport={{amount: 0.1, once: true}}
				style={{overflow: "hidden"}}
			>
				<div className={styles.Content}>
					<div className={styles.Up}>
						<motion.p variants={pVariants} custom={1} className={styles.Text} style={{overflow: "hidden"}}>ВЫПОЛНИТЬ ПРОЕКТ ДЛЯ СТРОИТЕЛЬСТВА АРХИТЕКТУРНОГО СООРУЖЕНИЯ - ЭТО НЕЧТО БОЛЬШЕЕ, ЧЕМ ПРОСТО ПРИДУМАТЬ ЕГО ДИЗАЙН И ВНЕШНИЙ ОБЛИК.</motion.p>
						<motion.h2 className={styles.Title} variants={pVariants} custom={2} style={{overflow: "hidden"}}>Проекты</motion.h2>
					</div>
					<div className={styles.Down} style={{overflow: "hidden"}}>
						<Project />
					</div>
				</div>
			</motion.div>
		</>
	)
}