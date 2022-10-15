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
        <div className={s.filterBarWrap}>

            {types.length ?
                <div className={s.filterWrap} >
                    <ul>
                        {types.map((obj: any, i) => (
                            <li key={obj.id}
                                onClick={() => {
                                    setClickedType(i)
                                    if (clickedType === i) setClickedType(-1)
                                }}
                                className={clickedType === i ? s.active : ''}
                            >{obj.name}</li>
                        ))}
                    </ul>
                </div> : <></>
            }

            {subTypes.length ?
                <div className={s.filterWrap}>
                    <ul>
                        {subTypes.map((obj: any, i) => (
                            <li key={obj.id}
                                onClick={() => {
                                    setClickedSubType(i)
                                    if (clickedSubType === i) setClickedSubType(-1)
                                }}
                                className={clickedSubType === i ? s.active : ''}
                            >{obj.name}</li>
                        ))}
                    </ul>
                </div> : <></>
            }

            {stylesheets.length ?
                <div className={s.filterWrap} >
                    <ul>
                        {stylesheets.map((obj: any, i) => (
                            <li key={obj.name}
                                onClick={() => {
                                    setClickedStyle(i)
                                    if (clickedStyle === i) setClickedStyle(-1)
                                }}
                                className={clickedStyle === i ? s.active : ''}
                            >{obj.name}
                            </li>
                        ))}
                    </ul>
                </div> : <></>
            }
        </div>
    )
}

export default FilterBar