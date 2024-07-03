interface IContacts {
	icon: string,
	title: string
}

interface INav {
	link: string,
	href: string
}

export const Navs: INav[] = [
	{
		link: "О Нас",
		href: "/"
	},
	{
		link: "Услуги",
		href: "/services"
	},
	{
		link: "Сертификаты",
		href: "/certificates"
	}
]

export const Contacts: IContacts[] = [
	{
		icon: "/phone.svg",
		title: "+7 707 558 66 40"
	},
	{
		icon: "/mail.svg",
		title: "Teo@gmail.com"
	},
	{
		icon: "/location.svg",
		title: "г.Алматы., мкр. Жетысу-1, дом-50, оф-5"
	}
]