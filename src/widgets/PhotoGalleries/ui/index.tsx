'use client'

import Image from 'next/image'
import { Photos } from '../data'
import styles from './PhotoGalleriesBlock.module.scss'
import { motion } from "framer-motion"

export const PhotoGalleriesBlock = () => {
	const pVariants = {
        hidden: {
			x: 100,
            opacity: 0,
        },
        visible: (custom: number) => ({
			x: 0,
            opacity: 1,
			transition: {delay: custom * 0.8},
        }),
    }

	return (
		<>
			<motion.div
				className={styles.PhotoGalleriesBlock}
				initial='hidden'
				whileInView='visible'
				viewport={{once: true}}
			>
				<div className={styles.Content}>
					<div className={styles.Title}>
						<h2 className={styles.TitleText}>Фото галерея</h2>
					</div>
					<div className={styles.PhotosBlock}>
						{
							Photos.map((img, index) => 
							<motion.div
								key={index}
								variants={pVariants}
								custom={index}
							>
								<Image
									className={styles.Img}
									src={img.href}
									alt='Photo'
									width={550}
									height={800}
									style={{maxWidth: '100%', height: 'auto'}}
									priority={true}
								/>
							</motion.div>)
						}
					</div>
				</div>
			</motion.div>
		</>
	)
}