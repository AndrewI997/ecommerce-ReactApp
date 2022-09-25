import React from 'react'
import Item from '../../shared/Item/Item';
import Wrapper from '../../shared/wrapper/Wrapper';
import s from './itemBlock.module.scss'
// import ItemCardModal from '../../shared/Item/ItemCardModal';
// import ItemsFilterBar from '../../shared/ItemsFilterBar/ItemsFilterBar';

// const ModalContext = React.createContext()

const ItemBlock = ({ setModalActive, itemCardModalActive, setItemCardModalActive }: any) => {

    // const [clickedType, setClickedType] = React.useState(0)
    // const [clickedSubType, setClickedSubType] = React.useState(0)
    // const [clickedStyle, setClickedStyle] = React.useState(0)
    // const [clickedKind, setClickedKind] = React.useState(0)

    const [showItemModal, setShowItemModal] = React.useState();
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
                            setShowItemModal={setShowItemModal}
                            setItemCardModalActive={setItemCardModalActive}
                            setModalActive={setModalActive}
                            obj={obj}
                            name={obj.name}
                            price={'От' + ' ' + obj.price + 'p'}
                            img={obj.imageUrl} />
                    ))
                }
                {/* <ItemCardModal
                    setModalActive={setModalActive}
                    showItemModal={showItemModal}
                    itemCardModalActive={itemCardModalActive}
                    setItemCardModalActive={setItemCardModalActive} /> */}
            </div>
        </Wrapper>
    )
}

export default ItemBlock