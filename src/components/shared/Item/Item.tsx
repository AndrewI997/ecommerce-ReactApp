import React from 'react'
import s from './item.module.scss'
import { CSSTransition } from 'react-transition-group'
import image from './image2.jpg'

const Item = ({ obj, index, setModalOrderActive, setModalItemActive, setItemIndex, setClickedItem, itemIndex, itemsState }: any) => {


  return (
    <div className={s.card}>
      <div className={s.imgWrap} onClick={() => {
        setModalItemActive(true)
        setClickedItem(obj)
        setItemIndex(index)
      }}>
        <img src={'http://localhost:4321/' + obj.images[0]} alt='picture' />
      </div>
      <div className={s.contentWrap}>
        <h3 className={s.title} onClick={() => {
          setModalItemActive(true)
          setClickedItem(obj)
          setItemIndex(index)
        }}>{obj.name}</h3>
        <p className={s.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit dolor sit amet consectetur Lorem ipsum.
        </p>
        <p>Цена: <span className={s.price}>{obj.price}</span></p>
        <div className={s.toggleWrap}>
          <button className={s.toggleBuy} onClick={() => setModalOrderActive(true)}>Заказать</button>
        </div>
      </div>
    </div>
  )
}

export default Item