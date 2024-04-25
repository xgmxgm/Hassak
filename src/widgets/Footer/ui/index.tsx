import Image from 'next/image'
import styles from './Footer.module.scss'
import { Links } from '../Data'
import Link from 'next/link'

export const Footer = () => {
	return (
		<>
			<div className={styles.Footer}>
				<div className={styles.Content}>
					<div className={styles.Up}>
						<div className={styles.Left}>
							<Image className={styles.Logo} src="/hassak-logo-sait.png" alt='' width={270} height={80} />
							<p className={styles.Text}>Мы гарантируем высокую компетентность наших инженеров, выполнение контракта в соответствии с нормы ISO 9001, и более гибкое сотрудничество с сотрудниками, ответственными за Ваш проект.</p>
						</div>
						<div className={styles.Center}>
							{
								Links.map((link, index) => <Link className={styles.Link} key={index} href={link.href}>{link.text}</Link>)
							}
						</div>
						<div className={styles.Right}>
							<div className={styles.Title}>
								<h3 className={styles.Info}>Info</h3>
							</div>
							<div className={styles.Contacts}>
								<div className={styles.Phone}>
									<Image src="/phone.svg" alt='icon' width={20} height={20} />
									<p>+7 701 880 04 58</p>
								</div>
								<div className={styles.Geo}>
									<Image src="/location.svg" alt='icon' width={20} height={20} />
									<p>Алматы, ул. Байзакова 280, Алматы Тауэрс, Северная башня, 18 этаж, офис 18</p>
								</div>
								<div className={styles.Mail}>
									<Image src="/mail.svg" alt='icon' width={20} height={20} />
									<p>info@hassak.kz</p>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.Down}>
						<p className={styles.Text}>© HASSAK ENGINEERING</p>
					</div>
				</div>
			</div>
		</>
	)
}