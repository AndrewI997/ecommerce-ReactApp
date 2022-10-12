import React from 'react'
import s from './filterBar.module.scss'

const FilterBar = ({ clickedType, setClickedType, clickedSubType, setClickedSubType, clickedStyle, setClickedStyle, clickedKind, setClickedKind }: any) => {

    const [types, setTypes] = React.useState([]);
    const [subTypes, setSubTypes] = React.useState([]);
    const [stylesheets, setStylesheets] = React.useState([]);

console.log('filter')
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
            console.log('filer FETCHED!')
    }, [])

 
    return (
        <div className={s.filterBarWrapper} >
            {types.length ? <div className={s.filterBarWrap} >
                {/* <h3>Тип:</h3> */}
                <ul>
                    {/* <li onClick={() => {
                                    setClickedType(-1)
                                    if (clickedType === -1) {
                                        setClickedType(-1)
                                    }
                                }}
                                className={clickedType === -1 ? s.active : ''}>Все</li> */}
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
                                <div className={s.listTitle}>{obj.name}</div>
                            </li>
                        ))
                    }
                </ul>
            </div> : <></>}

            {subTypes.length ? <div className={s.filterBarWrap} >
                {/* <h3>Подтип:</h3> */}
                <ul>
                {/* <li onClick={() => {
                                    setClickedSubType(-1)
                                    if (clickedSubType === -1) {
                                        setClickedSubType(-1)
                                    }
                                }}
                                className={clickedSubType === -1 ? s.active : ''}>Все</li> */}
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
                                <div className={s.listTitle}>{obj.name}</div>
                            </li>
                        ))
                    }
                </ul>
            </div> : <></>}

            {stylesheets.length ? <div className={s.filterBarWrap} >
                {/* <h3>Стиль:</h3> */}
                <ul>
                {/* <li onClick={() => {
                                    setClickedStyle(-1)
                                    if (clickedStyle === -1) {
                                        setClickedStyle(-1)
                                    }
                                }}
                                className={clickedStyle === -1 ? s.active : ''}>Все</li> */}
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
                                <div className={s.listTitle}>{obj.name}</div>
                            </li>
                        ))
                    }
                </ul>
            </div> : <></>}
        </div>
    )
}

export default FilterBar