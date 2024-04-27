import { StaticImageData } from 'next/image'
import Jhonson from "@/../public/jhonson.png"
import Honeywell from "@/../public/Honeywell.png"
import Triadium from "@/../public/logo-triadium.jpg"
import Siemens from "@/../public/logo-siemens.jpg"

interface ILogo {
	img: StaticImageData,
}

// export const Logos: ILogo[] = [
// 	{
// 		img: "/jhonson.png",
// 	},
// 	{
// 		img: "/Honeywell.png",
// 	},
// 	{
// 		img: "/logo-triadium.jpg",
// 	},
// 	{
// 		img: "/logo-siemens.jpg",
// 	},
// ]

export const Logos: ILogo[] = [
	{
		img: Jhonson,
	},
	{
		img: Honeywell,
	},
	{
		img: Triadium,
	},
	{
		img: Siemens,
	},
]