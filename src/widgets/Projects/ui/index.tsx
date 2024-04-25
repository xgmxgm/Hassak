import { Project } from '@/shared/ui/Project'
import styles from './Projects.module.scss'

export const Projects = () => {
	return (
		<>
			<div className={styles.Projects}>
				<div className={styles.Content}>
					<div className={styles.Up}>
						<p className={styles.Text}>ВЫПОЛНИТЬ ПРОЕКТ ДЛЯ СТРОИТЕЛЬСТВА АРХИТЕКТУРНОГО СООРУЖЕНИЯ - ЭТО НЕЧТО БОЛЬШЕЕ, ЧЕМ ПРОСТО ПРИДУМАТЬ ЕГО ДИЗАЙН И ВНЕШНИЙ ОБЛИК.</p>
						<h2 className={styles.Title}>Проекты</h2>
					</div>
					<div className={styles.Down}>
						<Project />
					</div>
				</div>
			</div>
		</>
	)
}