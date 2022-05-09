import React, { useContext, useState, useEffect } from "react";
import { SideBarContext } from "./SidebarWrapper";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Define from "../Define";

export interface iSubMenu {
    title: string
    to: string
    icon: React.ReactNode
}

export const createReactNavLink = (MainNavLink: any, title: string, to: string, icon: React.ReactNode, subMenus: iSubMenu[] = []) => {
    return () => {
        const { small } = useContext(SideBarContext);
        const [open, setOpen] = useState(false)
        // const [subActive, setSubActive] = useState(false)
        const [path, setPath] = useState('')

        useEffect(() => {
            setPath(window.location.pathname)
        }, [])

        // const path = typeof window !== "undefined" ? window.location.pathname : ""

        // if submenus are there ....
        //path.split('/')[1] === to.replace('/', '')
        if (subMenus.length > 0) {
            return <>
                <div
                    onClick={() => {
                        setOpen(old => {
                            return !old
                        })
                    }}
                    className={`rs-cursor-pointer rs-my-2 ${small ? 'rs-p-2' : 'rs-px-2.5 rs-py-2.5'} ${Define.ROUND} rs-flex rs-gap-2 ${Define.H_BG} rs-justify-between rs-items-center ${subMenus.map(item => item.to).includes(path) ? `${Define.BG} rs-font-semibold` : ""}`}
                >
                    <div className="rs-flex rs-gap-2 rs-justify-between rs-items-center">
                        <span className="my_icon"> {icon}</span><span className={`${small === true ? "rs-hidden" : "rs-block"} `}>{title}</span>
                    </div>
                    {open === true ? <FiChevronUp /> : <FiChevronDown />}
                </div>
                <div className={`${open === true ? "rs-block" : "rs-hidden"} ${Define.ROUND} rs-pl-1`}>
                    {subMenus.map((item, idx) => {
                        return <MainNavLink
                            key={idx}
                            to={item.to}
                            className={(navinfo: any) => {
                                // if (navinfo.isActive === true) {
                                //     setSubActive(true)
                                // }
                                return `${small ? 'rs-p-2' : 'rs-px-2.5 rs-py-2.5'} ${Define.ROUND} rs-flex rs-gap-2 rs-items-center ${Define.H_BG} ${navinfo.isActive === true ? " rs-border rs-border-slate-200" : ""}`
                            }}
                        >
                            <span className="my_icon"> {item.icon}</span><span className={`${small === true ? "rs-hidden" : "rs-block"} `}>{item.title}</span>
                        </MainNavLink>
                    })}
                </div>

            </>
        }
        return <>
            <MainNavLink
                to={to}
                className={(navinfo: any) => `rs-my-2 ${small ? 'rs-p-2' : 'rs-px-2.5 rs-py-2.5'} ${Define.ROUND} ${Define.H_BG} rs-flex rs-gap-2 rs-items-center ${navinfo.isActive === true ? `${Define.BG} rs-font-semibold ` : ""}`}
            >
                <span className="my_icon">{icon}</span><span className={`${small === true ? "rs-hidden" : "rs-block"} rs-text-base`}>{title}</span>
            </MainNavLink>
        </>;

    }
}


