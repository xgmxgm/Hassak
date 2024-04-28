'use client'

import Image from 'next/image'
import styles from './AchievementCard.module.scss'
import { motion } from 'framer-motion'
import { forwardRef } from 'react'

interface IProps {
	title: string,
	icon: string,
	Achievement: string
}

export const AchievementCard = forwardRef<HTMLDivElement, IProps>(({ title, icon, Achievement }: IProps, ref) => {
	return (
		<>
			<div className={styles.AchievementCard} ref={ref} style={{overflow: "hidden"}}>
				<div className={styles.Content}>
					<div className={styles.Up}>
						<h2 className={styles.Title}>{title}</h2>
					</div>
					<div className={styles.Down}>
						<Image src={icon} alt='icon' width={50} height={50} />
						<h2>{Achievement}</h2>
					</div>
				</div>
			</div>
		</>
	)
})

export const MAchievementCard = motion(AchievementCard);