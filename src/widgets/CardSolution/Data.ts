'use client'

interface ICard {
	icon: string
	key: string
	info: string
}

export let CartsData: ICard[] = [
	{
		icon: 'monitor.svg',
		key: 'CompanyOffers.cardSolution.architecturalSolutions.title',
		info: 'CompanyOffers.cardSolution.architecturalSolutions.info',
	},
	{
		icon: 'heating.svg',
		key: 'CompanyOffers.cardSolution.heatingVentilationAndAirConditioningSystems.title',
		info: 'CompanyOffers.cardSolution.heatingVentilationAndAirConditioningSystems.info',
	},
	{
		icon: 'pipe.svg',
		key: 'CompanyOffers.cardSolution.waterSupplyAndSanitation.title',
		info: 'CompanyOffers.cardSolution.waterSupplyAndSanitation.info',
	},
	{
		icon: 'energy.svg',
		key: 'CompanyOffers.cardSolution.electricalEquipmentAndLighting.title',
		info: 'CompanyOffers.cardSolution.electricalEquipmentAndLighting.info',
	},
	{
		icon: 'message.svg',
		key: 'CompanyOffers.cardSolution.lowCurrentSystems.title',
		info: 'CompanyOffers.cardSolution.lowCurrentSystems.info',
	},
	{
		icon: 'lift.svg',
		key: 'CompanyOffers.cardSolution.operationOfBuildingsStructuresAndUtilities.title',
		info: 'CompanyOffers.cardSolution.operationOfBuildingsStructuresAndUtilities.info',
	},
]
