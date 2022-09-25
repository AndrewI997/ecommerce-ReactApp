import React from 'react'
import ModalWrap from '../modalWrap/ModalWrap'
import s from './modalOrder.module.scss'

const ModalOrder = ({ active, setActive }: any) => {
    return (
        <ModalWrap active={active} setActive={setActive}>
            <div className={s.formInner}>
                <h3>Обратный звонок</h3>
                <input type="text" placeholder="Имя" />
                <input type="email" placeholder="Телефон" />
                <textarea placeholder="Сообщение..." rows={3}></textarea>
                <input type="submit" value="Отправить" />
            </div>
        </ModalWrap>
    )
}

export default ModalOrder