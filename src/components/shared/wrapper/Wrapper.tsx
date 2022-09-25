import React from 'react'
import { PropsWithChildren } from 'react'
import s from './wrapper.module.scss'

const Wrapper = ({ children }: PropsWithChildren)=> {
    return (
        <div className={s.contentWrapper}>{children}</div>
    )
}

export default Wrapper