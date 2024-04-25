import Image from 'next/image'
import { Logos } from '../Data'
import styles from './Sponsors.module.scss'

export const Sponsors = () => {
	return (
		<>
			<div className={styles.Sponsors}>
				<div className={styles.Content}>
					{
						Logos.map((Logo, index) => <Image key={index} src={Logo.img} alt='Logo' width={260} height={95} className={styles.Logo}/>)
					}
				</div>
			</div>
		</>
	)
}