'use client'

import Image from 'next/image'
import styles from './NetworksAndSystems.module.scss'
import { motion } from 'framer-motion'
import img_1 from "@/../public/image-15.jpg"
import img_2 from "@/../public/cross.jpg"

export const NetworksAndSystems = () => {
	const pVariants = {
        hidden: {
			x: -100,
            opacity: 0,
        },
        visible: {
			x: 0,
            opacity: 1
        }
    }

	const pVariants2 = {
        hidden: {
			x: 100,
            opacity: 0,
        },
        visible: {
			x: 0,
            opacity: 1,
        },
    }

	return (
		<>
			<motion.div
				className={styles.NetworksAndSystems}
				initial = "hidden"
				whileInView = "visible"
				viewport={{amount: 0.4, once: true}}
			>
				<div className={styles.Content}>
					<div className={styles.Up}>
						<p className={styles.Title}>НАША КОМПАНИЯ ПРЕДЛАГАЕТ КОМПЛЕКСНЫЕ ИНЖЕНЕРНЫЕ РЕШЕНИЯ</p>
						<h2 className={styles.Info}>которые сопровождаются с высококвалифицированными техническими специалистами, имеющие опыт работы более 10 лет</h2>
					</div>
					<div className={styles.Down}>
						<div className={styles.Left}>
							<h2 className={styles.Title}>Проектирование инженерных сетей и систем является одним из важных этапов при возведении и реконструкции объектов.</h2>
							<p className={styles.Info}>Проектирование инженерных систем и сетей — сложный и трудоемкий процесс, требующий от исполнителя максимальной концентрации, точности и внимания. В процессе проектирования систем водоснабжения, канализации, отопления, вентиляции и кондиционирования решаются задачи как инженерного, так и технического характера.</p>
						</div>
						<div
							className={styles.Right}
							style={{overflow: "hidden"}}
						>
							<motion.div
								className={styles.layer1}
								variants={pVariants}
							>
								<Image className={styles.Img1} src={img_1} alt='img' style={{width: '100%', height: 'auto', minWidth: "250px"}} />
							</motion.div>
							<motion.div
								className={styles.layer2}
								variants={pVariants2}
							>
								<Image className={styles.Img2} src={img_2} alt='img' style={{width: '100%', height: 'auto', minWidth: "250px"}}/>
							</motion.div>
						</div>
					</div>
				</div>
			</motion.div>
		</>
	)
}