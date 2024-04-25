'use client'

import Image from 'next/image'
import { CartsData } from '../Data'
import styles from './CardSolution.module.scss'
import { useState } from 'react'

export const CardSolution = () => {
	const [Hover, setHover] = useState<boolean>(false);

	return (
		<>
			<div className={styles.CardSolution}>
				<div className={styles.Content}>
					{
						CartsData.map((CartData, index) => <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} key={index} className={styles.Card}>
							<div className={styles.BackgroundImg}>
								<div className={styles.CardBody}>
									<div className={styles.Icon}>
										<Image src={CartData.icon} alt='icon' width={40}height={40} />
									</div>
									<div className={styles.CardTitle}>
										<h3>{CartData.title}</h3>
									</div>
									<div className={styles.CardInfo}>
										<p>{CartData.info}</p>
									</div>
								</div>
							</div>
						</div>)
					}
				</div>
			</div>
		</>
	)
}