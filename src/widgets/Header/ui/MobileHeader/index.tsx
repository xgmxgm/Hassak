import styles from './MobileHeader.module.scss'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Contacts, Navs } from '../../Data'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SelectLocales } from '@/widgets/SelectLocales'

export const MobileHeader = () => {
	const translation = useTranslations('DesktopHeader.FixedNavigation')
	const t = useTranslations('DesktopHeader.Contacts')
	const pathName = usePathname()

	const [isOpenBurgerMenu, setIsOpenBurgerMenu] = useState<boolean>(false)

	return (
		<>
			<div className={styles.MobileHeader}>
				<div className={styles.Content}>
					<div className={styles.Logo}>
						<Image
							className={styles.LogoImg}
							src='/teo-logo-sait.jpeg'
							alt='logo'
							width={50}
							height={50}
						/>
					</div>
					<div
						className={styles.BurgerMenuIcon}
						onClick={() => setIsOpenBurgerMenu(!isOpenBurgerMenu)}
						style={isOpenBurgerMenu ? { position: 'fixed', right: '20px' } : {}}
					>
						<div className={styles.Line}></div>
						<div className={styles.Line}></div>
						<div className={styles.Line}></div>
					</div>
					<div
						className={
							isOpenBurgerMenu ? styles.BurgerMenu : styles.BurgerMenuClosed
						}
					>
						<div className={styles.Content}>
							<div className={styles.Navs}>
								{Navs.map((Nav, index) => (
									<Link
										key={index}
										className={styles.Nav}
										href={`/${pathName.split('/')[1]}${Nav.href}`}
										onClick={() => setIsOpenBurgerMenu(false)}
									>
										{translation(Nav.link)}
									</Link>
								))}
							</div>
							<div className={styles.Contacts}>
								{Contacts.map((Contact, index) => (
									<div key={index} className={styles.Contact}>
										<Image
											src={Contact.icon}
											alt='icon'
											width={25}
											height={25}
										/>
										<p className={styles.TextContact}>{t(Contact.key)}</p>
									</div>
								))}
							</div>
							<div>
								<SelectLocales />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
