import { Links, Contacts } from "@/widgets/Header/Data"
import { FixedNavigation } from '@/widgets/FixedNavigation'
import Image from 'next/image'
import Link from 'next/link'

import styles from './DesktopHeader.module.scss'

export const DesktopHeader = () => {
	return (
		<>
			<div className={styles.DesktopHeader}>
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
							<Image src="/hassak-logo-sait.png" alt='logo' width={140} height={45} />
						</div>
					</div>
					<div className={styles.DesktopHeaderDown}>
						<FixedNavigation />
					</div>
				</div>
			</div>
		</>
	)
}