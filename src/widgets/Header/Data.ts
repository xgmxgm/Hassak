interface ILinks {
	link: string,
	href: string
}

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
		href: "/about"
	},
	{
		link: "Системы диспетчеризации (BMS)",
		href: "/bms"
	},
	{
		link: "Лифты и Эскалаторы",
		href: "/elevatorsandescalators"
	},
	{
		link: "Проектирование",
		href: "/design"
	},
	{
		link: "Услуги",
		href: "/services"
	},
	{
		link: "Проекты",
		href: "/projects"
	}
]

export const Links: ILinks[] = [
	{
		link: "Контакты",
		href: "/contacts"
	},
	{
		link: "Отзывы",
		href: "/reviews"
	},
	{
		link: "Сертификаты",
		href: "/certificates"
	}
]

export const Contacts: IContacts[] = [
	{
		icon: "/phone.svg",
		title: "+7 701 880 04 58"
	},
	{
		icon: "/mail.svg",
		title: "info@hassak.kz "
	},
	{
		icon: "/location.svg",
		title: "Алматы, Алматы Тауэрс, 18 этаж, офис 18"
	}
]