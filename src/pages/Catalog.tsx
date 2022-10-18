import React from 'react'
import FilterBar from '../components/shared/filterBar/FilterBar'
import ItemBlock from '../components/blocks/itemBlock/ItemBlock'

const Catalog = () => {
    const [clickedType, setClickedType] = React.useState(-1)
    const [clickedSubType, setClickedSubType] = React.useState(-1)
    const [clickedStyle, setClickedStyle] = React.useState(-1)
    const [clickedKind, setClickedKind] = React.useState(-1)

    return (
        <div>
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
            <ItemBlock
                clickedType={clickedType}
                clickedSubType={clickedSubType}
                clickedStyle={clickedStyle}
            />
        </div>
    )
}

export default Catalog