'use client'

interface ICard {
	icon: string
	key: any
	info: any
}

export let CartsData: ICard[] = [
	{
		icon: 'monitor.svg',
		key: 'architecturalSolutions.title',
		info: 'architecturalSolutions.info',
	},
	{
		icon: 'heating.svg',
		key: 'heatingVentilationAndAirConditioningSystems.title',
		info: 'heatingVentilationAndAirConditioningSystems.info',
	},
	{
		icon: 'pipe.svg',
		key: 'waterSupplyAndSanitation.title',
		info: 'waterSupplyAndSanitation.info',
	},
	{
		icon: 'energy.svg',
		key: 'electricalEquipmentAndLighting.title',
		info: 'electricalEquipmentAndLighting.info',
	},
	{
		icon: 'message.svg',
		key: 'lowCurrentSystems.title',
		info: 'lowCurrentSystems.info',
	},
	{
		icon: 'lift.svg',
		key: 'operationOfBuildingsStructuresAndUtilities.title',
		info: 'operationOfBuildingsStructuresAndUtilities.info',
	},
]
