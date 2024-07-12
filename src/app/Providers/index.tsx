'use client'

import React from 'react'
import '@/i18n'

interface IProps {
	children: React.ReactNode
}

export const Provider = ({ children }: IProps) => {
	return <>{children}</>
}
