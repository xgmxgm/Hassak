import { usePathname, useRouter } from 'next/navigation'
import styles from './SelectLocales.module.scss'

export const SelectLocales = () => {
	const pathName = usePathname()
	const router = useRouter()

	const handleLanguageChange = (event: any) => {
		const str = pathName.split('/')
		str[1] = event.target.value
		const URL: string = str.join('/')
		router.push(URL)
	}

	return (
		<>
			<select
				onChange={handleLanguageChange}
				defaultValue={pathName.split('/')[1]}
				className={styles.Select}
			>
				<option className={styles.Option} value='ru'>
					Русский
				</option>
				<option className={styles.Option} value='kz'>
					Қазақша
				</option>
			</select>
		</>
	)
}
