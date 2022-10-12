import React from 'react'
import Item from '../../shared/Item/Item';
import Wrapper from '../../shared/wrapper/Wrapper';
import s from './itemBlock.module.scss'
import ModalItem from '../../shared/modals/modalItem/ModalItem';
import ModalOrder from '../../shared/modals/modalOrder/ModalOrder';
import FilterBar from '../../shared/filterBar/FilterBar';


const ItemBlock = ({ }: any) => {

    const [clickedType, setClickedType] = React.useState(-1)
    const [clickedSubType, setClickedSubType] = React.useState(-1)
    const [clickedStyle, setClickedStyle] = React.useState(-1)
    const [clickedKind, setClickedKind] = React.useState(-1)

    const [modalOrderActive, setModalOrderActive] = React.useState(false)
    const [modalItemActive, setModalItemActive] = React.useState(false)
    const [clickedItem, setClickedItem] = React.useState({});
    const [itemsState, setItemsState] = React.useState([]);

    const type = clickedType >= 0 ? `/${clickedType + 1}` : '';
    const subType = clickedSubType >= 0 ? `/${clickedSubType + 1}` : '';
    const style = clickedStyle >= 0 ? `/${clickedStyle + 1}` : '';

    React.useEffect(() => {
        if(clickedType === -1 && clickedSubType === -1 && clickedStyle === -1) {
            fetch(`http://localhost:4321/item/all`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setItemsState(res)
            })
        }
        if(clickedType+1 && clickedStyle === -1 && clickedSubType === -1) {
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
        if (clickedType === -1 && clickedStyle+1 && clickedSubType === -1) {
            fetch(`http://localhost:4321/item/style${style}`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setItemsState(res)
            })
        }
        if(clickedType+1 && clickedSubType+1 && clickedStyle === -1) {
            fetch(`http://localhost:4321/item/all${type}${subType}`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setItemsState(res)
            })
        }
        if(clickedType+1 && clickedSubType+1 && clickedStyle+1) {
            fetch(`http://localhost:4321/item/all${type}${subType}${style}`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setItemsState(res)
            })
        }
        if(clickedType+1 && clickedStyle+1 && clickedSubType === -1) {
            fetch(`http://localhost:4321/item/typestyle${type}${style}`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setItemsState(res)
            })
        }
        if (clickedType === -1 && clickedStyle+1 && clickedSubType+1) {
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
        <Wrapper className={s.wrapWrapper}>
            <FilterBar
                clickedType={clickedType}
                setClickedType={(id: number) => setClickedType(id)}
                clickedSubType={clickedSubType}
                setClickedSubType={(id: number) => setClickedSubType(id)}
                clickedStyle={clickedStyle}
                setClickedStyle={(id: number) => setClickedStyle(id)}
                clickedKind={clickedKind}
                setClickedKind={(id: number) => setClickedKind(id)} 
                />
            <div className={s.itemsBlockWrapp}>
                {
                    itemsState.map((obj: any) => (
                        <Item
                            key={obj.id}
                            setClickedItem={setClickedItem}
                            setModalItemActive={setModalItemActive}
                            setModalOrderActive={setModalOrderActive}
                            obj={obj}
                            img={obj.imageUrl} />
                    ))
                }
                <ModalItem 
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
            </div>
        </Wrapper>
    )
}

export default ItemBlock