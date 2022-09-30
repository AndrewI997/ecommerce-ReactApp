import React from 'react'
import s from './filterBar.module.scss'

const FilterBar = ({ clickedType, setClickedType, clickedSubType, setClickedSubType, clickedStyle, setClickedStyle, clickedKind, setClickedKind }: any) => {

    const [types, setTypes] = React.useState([]);
    const [subTypes, setSubTypes] = React.useState([]);
    const [stylesheets, setStylesheets] = React.useState([]);
    const [kinds, setKinds] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:4321/itemtype')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setTypes(items)
            })

        fetch('http://localhost:4321/itemsubtype')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setSubTypes(items)
            })

        fetch('http://localhost:4321/itemstyle')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setStylesheets(items)
            })
        fetch('http://localhost:4321/itemkind')
            .then((res) => {
                return res.json()
            })
            .then((items) => {
                setKinds(items)
            })
    }, [])

    return (
        <div className={s.filterBarWrapper} >
            {types.length ? <div className={s.filterBarWrap} >
                {/* <h3>Тип:</h3> */}
                <ul>
                    {
                        types.map((obj: any, i) => (
                            <li key={obj.id}
                                onClick={() => {
                                    setClickedType(i)
                                    if (clickedType === i) {
                                        setClickedType(-1)
                                    }
                                }}
                                className={clickedType === i ? s.active : ''}
                            >
                                {obj.name}
                            </li>
                        ))
                    }
                </ul>
            </div> : <></>}

            {subTypes.length ? <div className={s.filterBarWrap} >
                {/* <h3>Подтип:</h3> */}
                <ul>
                    {
                        subTypes.map((obj: any, i) => (
                            <li key={obj.id}
                                onClick={() => {
                                    setClickedSubType(i)
                                    if (clickedSubType === i) {
                                        setClickedSubType(-1)
                                    }
                                }}
                                className={clickedSubType === i ? s.active : ''}
                            >
                                {obj.name}
                            </li>
                        ))
                    }
                </ul>
            </div> : <></>}

            {stylesheets.length ? <div className={s.filterBarWrap} >
                {/* <h3>Стиль:</h3> */}
                <ul>
                    {
                        stylesheets.map((obj: any, i) => (
                            <li key={obj.name}
                                onClick={() => {
                                    setClickedStyle(i)
                                    if (clickedStyle === i) {
                                        setClickedStyle(-1)
                                    }
                                }}
                                className={clickedStyle === i ? s.active : ''}
                            >
                                {obj.name}
                            </li>
                        ))
                    }
                </ul>
            </div> : <></>}

            {kinds.length ? <div className={s.filterBarWrap} >
                {/* <h3>Вариация:</h3> */}
                <ul>

                    {
                        kinds.map((obj: any, i) => (

                            <li key={obj.name}
                                onClick={() => {
                                    setClickedKind(i)
                                    if (clickedKind === i) {
                                        setClickedKind(-1)
                                    }
                                }}
                                className={clickedKind === i ? s.active : ''}
                            >
                                {obj.name}
                            </li>
                        ))

                    }
                </ul>
            </div> : <></>}
        </div>
    )
}

export default FilterBar