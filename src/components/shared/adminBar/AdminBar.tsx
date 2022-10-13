import React from 'react'
import s from './adminBar.module.scss'

const AdminBar = () => {
    const [option1, setOption1] = React.useState('')
    const [option2, setOption2] = React.useState('')
    const [option3, setOption3] = React.useState('')
    const [types, setTypes] = React.useState([]);
    const [subTypes, setSubTypes] = React.useState([]);
    const [stylesheets, setStylesheets] = React.useState([]);

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
    }, [])


  return (
    <form className={s.adminBarWrap}>
        <input placeholder='Выбрать тип' type={'text'} list={'typeList'} value={option1} onChange={(e) => setOption1(e.target.value)} />
        <datalist id='typeList'>
            {types.map((item: any, i: number) => (
                 <option key={i} value={item.name}></option>
            ))}  
        </datalist>


        <input placeholder='Выбрать подтип' type={'text'} list={'subtypeList'} value={option2} onChange={(e) => setOption2(e.target.value)} />

        <datalist id='subtypeList'>
            {subTypes.map((item: any, i: number) => (
                 <option key={i} value={item.name}></option>
            ))}  
        </datalist>

        
        <input placeholder='Выбрать стиль' type={'text'} list={'styleList'} value={option3} onChange={(e) => setOption3(e.target.value)} />
        <datalist id='styleList'>
            {stylesheets.map((item: any, i: number) => (
                 <option key={i} value={item.name}></option>
            ))}  
        </datalist>


        {/* <input placeholder='Выбрать тип' type={'text'} list={'kindList'} value={option} onChange={(e) => setOption(e.target.value)} />
        <datalist id='kindList'>
            {subTypes.map((item: any, i: number) => (
                 <option key={i} value={item.name}></option>
            ))}  
        </datalist> */}
        <button type='submit' onClick={(e) => e.preventDefault()} >CREATE</button>
        <button onClick={(e) => {
            e.preventDefault()
            setOption1('')
            setOption2('')
            setOption3('')
        }}>Clear</button>
    </form>
  )
}

export default AdminBar