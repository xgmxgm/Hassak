import Link from 'next/link'
import { Links } from '../Data'
import styles from './FixedNavigation.module.scss'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const FixedNavigation = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	const { t } = useTranslation()

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)
	})

	return (
		<>
			<div
				className={
					scrollPosition > 500
						? styles.FixedNavigation
						: styles.FixedNavigationAbsotule
				}
			>
				{Links.map((link, index) => (
					<ul key={index} style={{ listStyle: 'none' }}>
						<li className={styles.Li}>
							<Link className={styles.Link} href={link.href}>
								{t(link.link)}
							</Link>
						</li>
					</ul>
				))}
			</div>
		</>
	)
}
