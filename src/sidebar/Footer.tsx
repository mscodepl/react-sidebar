import React, { useContext } from 'react'
import { IoIosArrowForward, IoMdExit } from 'react-icons/all'
import { SideBarContext } from './SidebarWrapper'
import Gravatar from 'react-gravatar'

export default function Footer() {
    const { small, setSmall, userName, userEmail, onLogOut, onProfileImgClick } = useContext(SideBarContext)
    return (
        <div className={`rs_user rs-w-full ${small === true ? "sm:rs-w-[65px]" : "sm:rs-w-[240px]"} rs-overflow-x-hidden rs-fixed rs-bottom-0 rs-left-0 rs-px-4 rs-py-3 rs-bg-white`}>
            <div className='rs-flex rs-gap-2 rs-justify-between rs-items-center'>

                <div className={`rs-w-8 rs-h-8 rs-cursor-pointer`} onClick={onProfileImgClick}>
                    <Gravatar email={userEmail} size={100} rating="pg" className="rs-rounded-full rs-shadow rs-w-8 rs-h-8 rs-overflow-hidden rs-object-cover" />
                </div>

                <a href={"/account"} className={`${small === true ? "rs-hidden" : "rs-block"} font-bold rs-whitespace-pre-line truncate rs-leading-none ${userName}`}>Moje Konto</a>

                <IoMdExit onClick={onLogOut} className={`${small === true ? "rs-hidden" : "rs-block"} rs-text-3xl rs-rounded rs-bg-slate-200 rs-p-2 rs-cursor-pointer`} />

            </div>
            {small === true && <IoIosArrowForward onClick={() => { setSmall(old => !old) }} className='rs-my-2 rs-text-3xl rs-rounded rs-bg-slate-200 rs-p-2 rs-cursor-pointer' />}

        </div>
    )
}
