import React from 'react'
import s from './modal.module.scss'

const ModalWrap = ({ active, setActive, children }: any) => {
  return (
    <div className={active ? s.modal + ' ' + s.active : s.modal} onClick={() => setActive(false)}>
      <form className={active ? s.modalContent + ' ' + s.active : s.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={s.formLeftDecoration}></div>
        <div className={s.formRightDecoration}></div>
        <div className={s.circle}></div>
        {children}
      </form>
    </div>
  )
}

export default ModalWrap