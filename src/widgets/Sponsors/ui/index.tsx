"use client"

import Image from 'next/image'
import { Logos } from '../Data'
import { motion } from 'framer-motion'
import styles from './Sponsors.module.scss'

export const Sponsors = () => {
	const pVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1
        }
    }

	return (
		<>
			<motion.div
			className={styles.Sponsors}
			initial = "hidden"
			whileInView = "visible"
			variants = {pVariants}
			>
				<div className={styles.Content}>
					{
						// Logos.map((Logo, index) => <Image key={index} src={Logo.img} alt='Logo' width={260} height={95} className={styles.Logo}/>)
						Logos.map((Logo, index) => <Image key={index} className={styles.Logo} src={Logo.img} alt='Logo' style={{width: "260px", height: "auto"}}/>)
					}
				</div>
			</motion.div>
		</>
	)
}