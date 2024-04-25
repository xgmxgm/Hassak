import Image from 'next/image'
import styles from './NetworksAndSystems.module.scss'

export const NetworksAndSystems = () => {
	return (
		<>
			<div className={styles.NetworksAndSystems}>
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
						<div className={styles.Right}>
							<div className={styles.layer1}>
								<Image className={styles.Img1} src="/image-15.jpg" alt='img' width={350} height={525} />
							</div>
							<div className={styles.layer2}>
								<Image className={styles.Img2} src="/cross.jpg" alt='img' width={350} height={525} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}