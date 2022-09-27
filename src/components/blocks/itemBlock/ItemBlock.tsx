import React from 'react'
import Item from '../../shared/Item/Item';
import Wrapper from '../../shared/wrapper/Wrapper';
import s from './itemBlock.module.scss'
import ModalItem from '../../shared/modals/modalItem/ModalItem';
import ModalOrder from '../../shared/modals/modalOrder/ModalOrder';
// import ItemsFilterBar from '../../shared/ItemsFilterBar/ItemsFilterBar';

// const ModalContext = React.createContext()

const ItemBlock = ({ }: any) => {

    const [modalOrderActive, setModalOrderActive] = React.useState(false)
    const [modalItemActive, setModalItemActive] = React.useState(false)
    const [modalItemState, setModalItemState] = React.useState();

    const [itemsState, setItemsState] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost:4321/item')
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                setItemsState(res)
            })
    }, [])

    return (
        <Wrapper>
            {/* <ItemsFilterBar
                clickedType={clickedType}
                setClickedType={(id) => setClickedType(id)}
                clickedSubType={clickedSubType}
                setClickedSubType={(id) => setClickedSubType(id)}
                clickedStyle={clickedStyle}
                setClickedStyle={(id) => setClickedStyle(id)}
                clickedKind={clickedKind}
                setClickedKind={(id) => setClickedKind(id)} /> */}

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