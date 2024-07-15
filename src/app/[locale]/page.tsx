'use client'

import { CompanyOffers } from '@/widgets/CompanyOffers'
import { WelcomeTitle } from '@/widgets/WelcomeTitle'
import { Achievements } from '@/widgets/Achievements'
import { Projects } from '@/widgets/Projects'
import styles from './page.module.css'

export default function Home() {
	return (
		<>
			<div className={styles.Main}>
				<div className={styles.Content}>
					<WelcomeTitle />
					<CompanyOffers />
					<Achievements />
					<Projects />
				</div>
			</div>
		</>
	)
}
