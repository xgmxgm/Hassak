import Image from 'next/image'
import styles from './AchievementCard.module.scss'

interface IProps {
	title: string,
	icon: string,
	Achievement: string
}

export const AchievementCard = ({ title, icon, Achievement }: IProps) => {
	return (
		<>
			<div className={styles.AchievementCard}>
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
}