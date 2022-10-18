import React from 'react'
import ModalWrap from '../modalWrap/ModalWrap'
import s from './ModalItem.module.scss'
import image from '../../Item/image2.jpg'
import { CSSTransition, TransitionGroup } from "react-transition-group"

const ModalItem = ({ modalItemActive, setModalItemActive, setModalOrderActive, clickedItem, itemIndex, setItemIndex, setClickedItem, itemsState }: any) => {

  const[anim, setAnim] = React.useState(false)

  const nextItem = () => {
    if (itemsState.length - 1 > itemIndex) {
      setClickedItem(itemsState[itemIndex + 1])
      setItemIndex(itemIndex + 1)
      setAnim(false)
    }
  }

  const prevItem = () => {
    if (itemIndex !== 0) {
      setClickedItem(itemsState[itemIndex - 1])
      setItemIndex(itemIndex - 1)
      setAnim(false)
    }
  }

  return (
    <ModalWrap active={modalItemActive} setActive={setModalItemActive} onClick={(e: Event) => e.stopPropagation()}>
      <CSSTransition
      in={true}
          timeout={300}
          classNames="itemModal"
          >
      <div className={s.contentWrapper}>
        <div className={s.modalImgWrapp}>
          <img src={image} alt="picture" />
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
        
      </div>
      </CSSTransition>
      <div className={s.itemNavigate}>
          <span onClick={(e) => {
            e.preventDefault()
            prevItem()
            setAnim(true)
          }}>&#10094;</span>
          <span onClick={(e) => {
            e.preventDefault()
            nextItem()
            setAnim(true)
          }}>&#10095;</span>
        </div>
    </ModalWrap>
  )
}

export default ModalItem