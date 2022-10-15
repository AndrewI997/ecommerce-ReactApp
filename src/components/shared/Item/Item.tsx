import React from 'react'
import s from './item.module.scss'
import { CSSTransition } from 'react-transition-group'

const Item = ({ obj, setModalOrderActive, setModalItemActive, setClickedItem }: any) => {

  return (
      <div className={s.card}>
        <div className={s.imgWrap} onClick={() => {
              setModalItemActive(true)
              setClickedItem(obj)
            }}>
          <img src='./' alt='picture' />
        </div>
        <div className={s.contentWrap}>
          <h3 className={s.title} onClick={() => {
              setModalItemActive(true)
              setClickedItem(obj)
            }}>{obj.name}</h3>
          <p className={s.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit dolor sit amet consectetur Lorem ipsum.
          </p>
          <p>Цена: <span className={s.price}>{obj.price}</span></p>
          <div className={s.toggleWrap}>
            {/* <p className={s.toggleInfo} onClick={() => {
              setModalItemActive(true)
              setModalItemState(obj)
            }}>Подробнее..</p> */}
            <button className={s.toggleBuy} onClick={() => setModalOrderActive(true)}>Заказать</button>
          </div>
        </div>
      </div>
  )
}

export default Item