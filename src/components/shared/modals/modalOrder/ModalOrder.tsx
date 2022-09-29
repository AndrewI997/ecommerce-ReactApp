import React from 'react'
import axios from 'axios'
import ModalWrap from '../modalWrap/ModalWrap'
import s from './modalOrder.module.scss'


const ModalOrder = ({ active, setActive }: React.ComponentState) => {

    const [phoneNumber, setPhoneNumber] = React.useState('')
    const [personName, setPersonName] = React.useState('')
    const [description, setDescription] = React.useState('')

    const sendToTelegram = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault()

        const TOKEN = '5521636436:AAHxPKjnlL_XaMYtvkGTtaBWHKeVoaRKSfA' //'5637045049:AAFuEEJIwdRqqPeUmsVtwPAN1p0-0sqh9bw'
        const CHAT_ID = '-1001525341304' //'-1001814307663'
        const TG_API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`

        let message = `<b>Ура! Новая заявка!</b>\n`
        message += `<b>Имя отправителя:</b> ${personName.trim()}\n`
        message += `<b>Номер отправителя:</b> ${phoneNumber}`
        if (description.trim() !== '') {
            message+= `\n<b>Сообщение:</b> ${description.trim()}`
        }

        axios.post(TG_API_URL, {
            chat_id: CHAT_ID,
            parse_mode: 'html',
            text: message
        })

        setActive(false)
        setPersonName('')
        setPhoneNumber('')
        setDescription('')
    }
    
    return (
        <ModalWrap active={active} setActive={setActive}>
            <div className={s.formInner}>
                <h3>Обратный звонок</h3>
                <input required type="text" placeholder="Имя" value={personName} onChange={(e) => setPersonName(e.target.value)} />
                <input required type="text" placeholder="Телефон" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <textarea placeholder="Cообщение..." rows={3} value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                <input type="submit" value="Отправить" onClick={(e)=>sendToTelegram(e)} />
                <a href="tel:+79822239061" className={s.phoneBtn}>Позвонить</a>
            </div>
        </ModalWrap>
    )
}

export default ModalOrder