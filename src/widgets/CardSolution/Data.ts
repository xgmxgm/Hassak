interface ICard {
	icon: string,
	title: string,
	info: string,
	backgroundImg: string,
	isHover: boolean
}

export let CartsData: ICard[] = [
	{
		icon: "monitor.svg",
		title: "Системы АСУТП",
		info: "Проектирование и Тех. Обслуживание систем автоматизации и диспетчеризации инженерных сетей. На базе оборудования Tridium Niagara, Johnson Controls, Siemens, Honeywell, Kinco Automation",
		backgroundImg: "startap.jpg",
		isHover: false
	},
	{
		icon: "message.svg",
		title: "Консультация",
		info: "Проведения консультации на стадии проектирования для ТРЦ, бизнес центры,гостиничные комплексы, административные здания и д.р",
		backgroundImg: "startap.jpg",
		isHover: false
	},
	{
		icon: "fireExtinguisher.svg",
		title: "Пожарная Сигнализация",
		info: "Проектирование системы автоматической пожарной сигнализации.",
		backgroundImg: "startap.jpg",
		isHover: false
	},
	{
		icon: "energy.svg",
		title: "Электроосвещение",
		info: "Проектирование системы внутреннего электроосвещения и силового оборудования",
		backgroundImg: "startap.jpg",
		isHover: false
	},
	{
		icon: "pipe.svg",
		title: "Инженерные Коммуникации",
		info: "Техническое обслуживание инженерных коммуникаций для (ТРЦ, бизнес центры, гостиничные комплексы, административные здания и д.р.) - Насосные станции - Тепловые Узлы - Фонтаны",
		backgroundImg: "startap.jpg",
		isHover: false
	},
	{
		icon: "lift.svg",
		title: "Грузоподъемный механизм",
		info: "Техническое обслуживание и освидетельствование грузоподъемных механизмов согласно всем требованиям ПУБЭЛ",
		backgroundImg: "startap.jpg",
		isHover: false
	},
]