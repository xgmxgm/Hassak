import { FixedNavigation } from '@/widgets/FixedNavigation'
import { SelectLocales } from '@/widgets/SelectLocales'
import styles from './DesktopHeader.module.scss'
import { Contacts } from '@/widgets/Header/Data'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const DesktopHeader = () => {
	const t = useTranslations('DesktopHeader.Contacts')

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
						<div>
							<SelectLocales />
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
