import Image from 'next/image'
import styles from './MobileHeader.module.scss'
import { useState } from 'react'
import { Contacts, Links } from '../../Data'
import Link from 'next/link'

export const MobileHeader = () => {
	const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false);

	return (
		<>
			<div className={styles.MobileHeader}>
				<div className={styles.Content}>
					<div className={styles.Logo}>
						<Image src="/hassak-logo-sait.png" alt='logo' width={140} height={40} />
					</div>
					<div className={styles.BurgerMenuIcon} onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}>
						<div className={styles.Line}></div>
						<div className={styles.Line}></div>
						<div className={styles.Line}></div>
					</div>
					<div className={isOpenBurgerMenu ? styles.BurgerMenu : styles.BurgerMenuClosed}>
						<div className={styles.Content}>
							<div className={styles.Links}>
								{
									Links.map((link, index) => <Link className={styles.Link} key={index} href={link.href}>{link.link}</Link>)
								}
							</div>
							<div className={styles.Contacts}>
								{
									Contacts.map((Contact, index) => <div key={index} className={styles.Contact}><Image src={Contact.icon} alt='icon' width={25} height={25} /><p>{Contact.title}</p></div>)
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}