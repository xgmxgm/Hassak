import { Projects } from '../Data'
import styles from './Project.module.scss'

export const Project = () => {
	return (
		<>
			<div className={styles.Project}>
				<div className={styles.Content}>
					<div className={styles.Projects}>
						{
							Projects.map((Project, index) => <div key={index} className={styles.Project}
							style={{backgroundImage: `url(${Project.img})`}}>
								<div className={styles.Text}>
									<h3 className={styles.Title}>{Project.title}</h3>
									<div className={styles.Line}></div>
								</div>
							</div>)
						}
					</div>
				</div>
			</div>
		</>
	)
}