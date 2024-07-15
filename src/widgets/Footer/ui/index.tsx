'use client'

import { SelectLocales } from '@/widgets/SelectLocales'
import { useTranslations } from 'next-intl'
import styles from './Footer.module.scss'
import { motion } from 'framer-motion'
import Image from 'next/image'

export const Footer = () => {
	const t = useTranslations('Footer')

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
			<div className={styles.Footer}>
				<motion.div
					className={styles.Content}
					initial='hidden'
					whileInView='visible'
					variants={pVariants}
					viewport={{ amount: 0.2, once: true }}
					style={{ overflow: 'hidden' }}
				>
					<div className={styles.Up}>
						<div className={styles.Left}>
							<Image
								className={styles.Logo}
								src='/teo-logo-sait.jpeg'
								alt=''
								width={90}
								height={90}
							/>
							<p className={styles.Text}>{t('text')}</p>
						</div>
						<div className={styles.Right}>
							<div className={styles.Title}>
								<h3 className={styles.Info}>{t('Info')}</h3>
							</div>
							<div className={styles.Contacts}>
								<div className={styles.Phone}>
									<Image src='/phone.svg' alt='icon' width={20} height={20} />
									<p className={styles.PhoneText}>{t('Contacts.phone')}</p>
								</div>
								<div className={styles.Geo}>
									<Image
										src='/location.svg'
										alt='icon'
										width={20}
										height={20}
									/>
									<p>{t('Contacts.place')}</p>
								</div>
								<div className={styles.Mail}>
									<Image src='/mail.svg' alt='icon' width={20} height={20} />
									<p>{t('Contacts.mail')}</p>
								</div>
							</div>
							<div className={styles.SelectLocales}>
								<SelectLocales />
							</div>
						</div>
					</div>
					<div className={styles.Down}>
						<p className={styles.Text}>© TEO BUILDING</p>
					</div>
				</motion.div>
			</div>
		</>
	)
}
