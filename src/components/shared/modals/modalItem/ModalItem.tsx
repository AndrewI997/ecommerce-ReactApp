import React from 'react'
import ModalWrap from '../modalWrap/ModalWrap'
import s from './ModalItem.module.scss'

const ModalItem = ({ modalItemActive, setModalItemActive, setModalOrderActive, clickedItem, itemsState }: any) => {
  
  return (
    <ModalWrap active={modalItemActive} setActive={setModalItemActive} onClick={(e: Event) => e.stopPropagation()}>
      <div className={s.modalImgWrapp}>
        <img src={''} alt="picture" />
      </div>
      <div className={s.modalContentWrap}>
        <h3 className={s.title}>{clickedItem?.name}</h3>
        <p className={s.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <p>Цена: <span className={s.price}>{clickedItem?.price}</span></p>
        <div className={s.toggleWrap}>
          <button className={s.toggleBuy}
            onClick={(e) => {
              e.preventDefault()
              setModalOrderActive(true)
            }}>Заказать</button>
        </div>
      </div>
    </ModalWrap>
  )
}

export default ModalItem