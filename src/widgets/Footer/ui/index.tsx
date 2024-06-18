'use client'

import styles from './Footer.module.scss'
import { motion } from 'framer-motion'
import { Links } from '../Data'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
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

	return (
		<>
			<div className={styles.Footer}>
				<motion.div
				className={styles.Content}
				initial = "hidden"
				whileInView = "visible"
				variants = {pVariants}
				viewport={{amount: 0.2, once: true}}
				style={{overflow: 'hidden'}}
				>
					<div className={styles.Up}>
						<div className={styles.Left}>
							<Image className={styles.Logo} src="/teo-logo-sait.jpeg" alt='' width={90} height={90} />
							<p className={styles.Text}>Мы гарантируем высокую компетентность наших инженеров, выполнение контракта в соответствии с нормы ISO 9001, и более гибкое сотрудничество с сотрудниками, ответственными за Ваш проект.</p>
						</div>
						<div className={styles.Center}>
							{
								Links.map((link, index) => <Link className={styles.Link} key={index} href={link.href}>{link.text}</Link>)
							}
						</div>
						<div className={styles.Right}>
							<div className={styles.Title}>
								<h3 className={styles.Info}>Info</h3>
							</div>
							<div className={styles.Contacts}>
								<div className={styles.Phone}>
									<Image src="/phone.svg" alt='icon' width={20} height={20} />
									<p>+7 707 558 66 40</p>
								</div>
								<div className={styles.Geo}>
									<Image src="/location.svg" alt='icon' width={20} height={20} />
									<p>г.Алматы., мкр. Жетысу-1, дом-50, оф-5</p>
								</div>
								<div className={styles.Mail}>
									<Image src="/mail.svg" alt='icon' width={20} height={20} />
									<p>Teo@gmail.com</p>
								</div>
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