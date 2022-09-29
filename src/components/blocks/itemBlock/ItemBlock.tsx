import React from 'react'
import Item from '../../shared/Item/Item';
import Wrapper from '../../shared/wrapper/Wrapper';
import s from './itemBlock.module.scss'
import ModalItem from '../../shared/modals/modalItem/ModalItem';
import ModalOrder from '../../shared/modals/modalOrder/ModalOrder';
import FilterBar from '../../shared/filterBar/FilterBar';
// import ItemsFilterBar from '../../shared/ItemsFilterBar/ItemsFilterBar';

// const ModalContext = React.createContext()

const ItemBlock = ({ }: any) => {

    const [clickedType, setClickedType] = React.useState(0)
    const [clickedSubType, setClickedSubType] = React.useState(0)
    const [clickedStyle, setClickedStyle] = React.useState(0)
    const [clickedKind, setClickedKind] = React.useState(0)

    const [modalOrderActive, setModalOrderActive] = React.useState(false)
    const [modalItemActive, setModalItemActive] = React.useState(false)
    const [modalItemState, setModalItemState] = React.useState({});


    const [itemsState, setItemsState] = React.useState([]);

    const type = clickedType > 0 ? `/query/${clickedType.toString()}` : '';
    const subType = clickedSubType > 0 ? `/${clickedSubType.toString()}` : '';

    console.log(type, subType)


    React.useEffect(() => {
        fetch(`http://localhost:4321/item${type && subType ? type + subType : ''}`)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setItemsState(res)
            })
    }, [clickedType, clickedSubType])

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
                            setModalItemState={setModalItemState}
                            setModalItemActive={setModalItemActive}
                            setModalOrderActive={setModalOrderActive}
                            obj={obj}
                            img={obj.imageUrl} />
                    ))
                }
                <ModalItem 
                itemsState={itemsState}
                setModalOrderActive={setModalOrderActive}
                modalItemState={modalItemState}
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