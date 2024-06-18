import { Links, Contacts } from "@/widgets/Header/Data"
import { FixedNavigation } from '@/widgets/FixedNavigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import styles from './DesktopHeader.module.scss'

export const DesktopHeader = () => {
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
			<motion.div
			className = {styles.DesktopHeader}
			initial = "hidden"
			animate = "visible"
			variants = {pVariants}
			>
				<div className={styles.Content}>
					<div className={styles.DesktopHeaderUp}>
						<div className={styles.Navigation}>
							{
								Links.map((link, index) => <ul key={index} style={{listStyle: "none"}}>
									<li><Link className={styles.Link} href={link.href}>{link.link}</Link></li>
								</ul>)
							}
						</div>
						<div className={styles.Contacts}>
							{
								Contacts.map((contact, index) => <ul key={index} style={{listStyle: "none"}}>
									<li className={styles.Li}><Image src={contact.icon} alt='icon' width={20} height={20} />{contact.title}</li>
								</ul>)
							}
						</div>
					</div>
					<div className={styles.DesktopHeaderCenter}>
						<div className={styles.Logo}>
							<Image className={styles.LogoImg} src="/teo-logo-sait.jpeg" alt='logo' width={80} height={80} />
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