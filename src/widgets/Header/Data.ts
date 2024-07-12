interface IContacts {
	icon: string
	key: string
}

interface INav {
	link: string
	href: string
}

export const Navs: INav[] = [
	{
		link: 'О Нас',
		href: '/',
	},
	{
		link: 'Фото галерея',
		href: '/photo-galleries',
	},
	{
		link: 'Сертификаты',
		href: '/certificates',
	},
]

export const Contacts: IContacts[] = [
	{
		icon: '/phone.svg',
		key: 'DesktopHeader.Contacts.phone',
	},
	{
		icon: '/mail.svg',
		key: 'DesktopHeader.Contacts.mail',
	},
	{
		icon: '/location.svg',
		key: 'DesktopHeader.Contacts.place',
	},
]
