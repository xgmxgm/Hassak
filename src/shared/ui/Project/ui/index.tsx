import { motion } from "framer-motion"
import { Projects } from '../Data'
import styles from './Project.module.scss'

export const Project = () => {
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
				className={styles.Project}
				initial='hidden'
				whileInView='visible'
				viewport={{amount: 0.2, once: true}}
			>
				<div className={styles.Content}>
					<div className={styles.Projects}>
						{
							Projects.map((Project, index) => <motion.div variants={pVariants} custom={index} key={index} className={styles.Project} style={{backgroundImage: `url(${Project.img})`, overflow: "hidden"}}>
								<div className={styles.Text}>
									<h3 className={styles.Title}>{Project.title}</h3>
									<div className={styles.Line}></div>
								</div>
							</motion.div>)
						}
					</div>
				</div>
			</motion.div>
		</>
	)
}