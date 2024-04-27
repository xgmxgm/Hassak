'use client'

import { useEffect, useState } from "react"
import { DesktopHeader } from "../DesktopHeader"
import { MobileHeader } from "../MobileHeader"

export const Header = () => {
    const [widthScreen, setWidthScreen] = useState<number>(0)

    useEffect(() => {
        setWidthScreen(typeof window !== 'undefined' && window.screen.width || 0)
    })

    return (
        <>
        { widthScreen >= 1050 ? <DesktopHeader /> : <MobileHeader /> }
        </>
    )
}