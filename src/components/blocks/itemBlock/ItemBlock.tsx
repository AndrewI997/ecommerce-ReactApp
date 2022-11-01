import React from 'react'
import Item from '../../shared/Item/Item';
import s from './itemBlock.module.scss'
import ModalItem from '../../shared/modals/modalItem/ModalItem';
import ModalOrder from '../../shared/modals/modalOrder/ModalOrder';
import { CSSTransition, TransitionGroup } from "react-transition-group"


const ItemBlock = ({ clickedType, clickedSubType, clickedStyle }: any) => {

    const [modalOrderActive, setModalOrderActive] = React.useState(false)
    const [modalItemActive, setModalItemActive] = React.useState(false)

    const [itemIndex, setItemIndex] = React.useState(-1);

    const [clickedItem, setClickedItem] = React.useState(null);
    const [itemsState, setItemsState] = React.useState([]);

    const type = clickedType >= 0 ? `/${clickedType + 1}` : '';
    const subType = clickedSubType >= 0 ? `/${clickedSubType + 1}` : '';
    const style = clickedStyle >= 0 ? `/${clickedStyle + 1}` : '';



    React.useEffect(() => {
        if (clickedType === -1 && clickedSubType === -1 && clickedStyle === -1) {
            fetch(`http://localhost:4321/item/all`)
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    setItemsState(res)
                })
        }
        if (clickedType + 1 && clickedStyle === -1 && clickedSubType === -1) {
            fetch(`http://localhost:4321/item/all${type}`)
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    setItemsState(res)
                })
        }
        if (clickedType === -1 && clickedStyle === -1 && clickedSubType !== -1) {
            fetch(`http://localhost:4321/item/subtype${subType}`)
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    setItemsState(res)
                })
        }
        if (clickedType === -1 && clickedStyle + 1 && clickedSubType === -1) {
            fetch(`http://localhost:4321/item/style${style}`)
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    setItemsState(res)
                })
        }
        if (clickedType + 1 && clickedSubType + 1 && clickedStyle === -1) {
            fetch(`http://localhost:4321/item/all${type}${subType}`)
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    setItemsState(res)
                })
        }
        if (clickedType + 1 && clickedSubType + 1 && clickedStyle + 1) {
            fetch(`http://localhost:4321/item/all${type}${subType}${style}`)
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    setItemsState(res)
                })
        }
        if (clickedType + 1 && clickedStyle + 1 && clickedSubType === -1) {
            fetch(`http://localhost:4321/item/typestyle${type}${style}`)
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    setItemsState(res)
                })
        }
        if (clickedType === -1 && clickedStyle + 1 && clickedSubType + 1) {
            fetch(`http://localhost:4321/item/subtypestyle${subType}${style}`)
                .then((res) => {
                    return res.json()
                })
                .then((res) => {
                    setItemsState(res)
                })
        }
        console.log('FETCHED')

    }, [clickedType, clickedSubType, clickedStyle])

    return (
        <>
            <TransitionGroup className={s.itemsBlockWrapp}>
                {itemsState.map((obj: any, index: number) => (
                    <CSSTransition key={obj.id}
                        timeout={400}
                        classNames="item">
                        <Item
                        // itemsState={itemsState}
                            // key={obj.id}
                            setClickedItem={setClickedItem}
                            setModalItemActive={setModalItemActive}
                            setModalOrderActive={setModalOrderActive}
                            setItemIndex={setItemIndex}
                            // itemIndex={itemIndex}
                            obj={obj}
                            img={obj.imageUrl}
                            index={index}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>

            <ModalItem
            setClickedItem={setClickedItem}
            setItemIndex={setItemIndex}
                itemIndex={itemIndex}
                itemsState={itemsState}
                setModalOrderActive={setModalOrderActive}
                clickedItem={clickedItem}
                modalItemActive={modalItemActive}
                setModalItemActive={setModalItemActive}
            />
            <ModalOrder
                active={modalOrderActive}
                setActive={setModalOrderActive}
            />
        </>
    )
}

export default ItemBlock