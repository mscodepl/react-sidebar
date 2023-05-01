import React, { createContext, useState } from 'react'

export const SideBarContext = createContext({} as {
    small: boolean
    activeStyle?: "fill" | "outline"
    setSmall: React.Dispatch<React.SetStateAction<boolean>>
    logoUrl: string
    title?: string
    userName: React.ReactNode
    userEmail: string
    mobileHeaderContent?: React.ReactNode
    navItems: (() => JSX.Element)[]
    onLogoClick?: () => void
    onProfileImgClick?: () => void
    onLogOut: () => void
});

interface iSidebarWrapper {
    logoUrl: string
    userName: React.ReactNode
    title?: string
    userEmail: string
    navItems: (() => JSX.Element)[]
    children: React.ReactNode
    activeStyle?: "fill" | "outline"
    mobileHeaderContent?: React.ReactNode
    onLogoClick?: () => void
    onProfileImgClick?: () => void
    onLogOut: () => void
}

/**
 * @description wrape your react router using this sidebarbar wrapper or wrape all component in _App.tsx in next js application
 */
export default function SidebarWrapper({ title = undefined, logoUrl, userName, userEmail, activeStyle = "fill", children, mobileHeaderContent, navItems, onLogOut, onProfileImgClick = () => { }, onLogoClick = () => { } }: iSidebarWrapper) {
    const [small, setSmall] = useState(false);

    return (
        <SideBarContext.Provider value={{
            title, small, setSmall, logoUrl, userName, userEmail, activeStyle, mobileHeaderContent,
            navItems,
            onLogOut,
            onProfileImgClick,
            onLogoClick
        }}>
            {children}
        </SideBarContext.Provider>
    )
}
