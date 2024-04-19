import { AchievementCard } from '@/shared/ui/AchievementCard'
import styles from './Achievements.module.scss'

export const Achievements = () => {
	return (
		<>
			<div className={styles.Achievements}>
				<div className={styles.Content}>
					<div className={styles.Text}>
						<p className={styles.Numbs}>ЦИФРЫ</p>
						<h2 className={styles.Title}>ТОО Hassak Engineering</h2>
					</div>
					<div className={styles.Cards}>
						<AchievementCard title='Инженеров' icon='engineer.svg' Achievement='20+'  />
						<AchievementCard title='Реализованные Проекты' icon='ruler.svg' Achievement='100+'  />
						<AchievementCard title='Клиенты' icon='users.svg' Achievement='500+'  />
						<AchievementCard title='Опыт Работы' icon='wheelbarrow.svg' Achievement='15лет'  />
					</div>
				</div>
			</div>
		</>
	)
}