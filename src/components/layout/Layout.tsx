import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import s from './layout.module.scss'
import Wrapper from '../shared/wrapper/Wrapper';


const Layout = ({ children }: any) => {


    return (
        <div className={s.layoutWrapp}>
            <Header />
            <Wrapper>
                <main className={s.content}>
                    {children}
                </main>
            </Wrapper>
            <Footer />
        </div>
    )
}

export default Layout