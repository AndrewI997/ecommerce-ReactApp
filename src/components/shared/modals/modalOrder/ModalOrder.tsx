import axios from 'axios'
import React, { MouseEventHandler } from 'react'
import ModalWrap from '../modalWrap/ModalWrap'
import s from './modalOrder.module.scss'

const ModalOrder = ({ active, setActive }: any) => {

    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [personName, setPersonName] = React.useState('')

    const sendToTelegram = (e: any) => {
        e.preventDefault()

        const TOKEN = '5637045049:AAFuEEJIwdRqqPeUmsVtwPAN1p0-0sqh9bw'
        const CHAT_ID = '-1001814307663'
        const TG_API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

        let message = `<b>Ура! Новая заявка!</b>\n`
        message += `<b>Имя отправителя:</b> ${personName}\n`
        message += `<b>Номер отправителя:</b> ${phoneNumber}`

        axios.post(TG_API_URL, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        setPersonName('')
        setPhoneNumber('')
        setActive(false)

    }
    
    return (
        <ModalWrap active={active} setActive={setActive}>
            <div className={s.formInner}>
                <h3>Обратный звонок</h3>
                <input type="text" placeholder="Имя" value={personName} onChange={(e) => setPersonName(e.target.value)} />
                <input type="email" placeholder="Телефон" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <textarea placeholder="Сообщение..." rows={3}></textarea>
                <input type="submit" value="Отправить" onClick={(e)=>sendToTelegram(e)} />
            </div>
        </ModalWrap>
    )
}

export default ModalOrder