interface ICard {
	icon: string,
	title: string,
	info: string,
	backgroundImg: string,
}

export let CartsData: ICard[] = [
	{
		icon: "monitor.svg",
		title: "Системы АСУТП",
		info: "Проектирование и Тех. Обслуживание систем автоматизации и диспетчеризации инженерных сетей. На базе оборудования Tridium Niagara, Johnson Controls, Siemens, Honeywell, Kinco Automation",
		backgroundImg: "startap.jpg",
	},
	{
		icon: "message.svg",
		title: "Консультация",
		info: "Проведения консультации на стадии проектирования для ТРЦ, бизнес центры,гостиничные комплексы, административные здания и д.р",
		backgroundImg: "startap.jpg",
	},
	{
		icon: "fireExtinguisher.svg",
		title: "Пожарная Сигнализация",
		info: "Проектирование системы автоматической пожарной сигнализации.",
		backgroundImg: "startap.jpg",
	},
	{
		icon: "energy.svg",
		title: "Электроосвещение",
		info: "Проектирование системы внутреннего электроосвещения и силового оборудования",
		backgroundImg: "startap.jpg",
	},
	{
		icon: "pipe.svg",
		title: "Инженерные Коммуникации",
		info: "Техническое обслуживание инженерных коммуникаций для (ТРЦ, бизнес центры, гостиничные комплексы, административные здания и д.р.) - Насосные станции - Тепловые Узлы - Фонтаны",
		backgroundImg: "startap.jpg",
	},
	{
		icon: "lift.svg",
		title: "Грузоподъемный механизм",
		info: "Техническое обслуживание и освидетельствование грузоподъемных механизмов согласно всем требованиям ПУБЭЛ",
		backgroundImg: "startap.jpg",
	},
]