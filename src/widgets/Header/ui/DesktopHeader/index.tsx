import { FixedNavigation } from '@/widgets/FixedNavigation'
import { Contacts } from '@/widgets/Header/Data'
import { motion } from 'framer-motion'
import Image from 'next/image'

import styles from './DesktopHeader.module.scss'
import { useTranslation } from 'react-i18next'

export const DesktopHeader = () => {
	const { t, i18n } = useTranslation()

	const changeLanguage = (language: string) => {
		i18n.changeLanguage(language)
	}

	const pVariants = {
		hidden: {
			x: -100,
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
				className={styles.DesktopHeader}
				initial='hidden'
				animate='visible'
				variants={pVariants}
			>
				<div className={styles.Content}>
					<div className={styles.DesktopHeaderUp}>
						<div>
							<button onClick={() => changeLanguage('ru')}>Ru</button>
							<button onClick={() => changeLanguage('kz')}>Kz</button>
						</div>
						<div className={styles.Contacts}>
							{Contacts.map((contact, index) => (
								<ul key={index} style={{ listStyle: 'none' }}>
									<li className={styles.Li}>
										<Image
											src={contact.icon}
											alt='icon'
											width={20}
											height={20}
										/>

										{t(contact.key)}
									</li>
								</ul>
							))}
						</div>
					</div>
					<div className={styles.DesktopHeaderCenter}>
						<div className={styles.Logo}>
							<Image
								className={styles.LogoImg}
								src='/teo-logo-sait.jpeg'
								alt='logo'
								width={80}
								height={80}
							/>
						</div>
					</div>
					<div className={styles.DesktopHeaderDown}>
						<FixedNavigation />
					</div>
				</div>
			</motion.div>
		</>
	)
}
