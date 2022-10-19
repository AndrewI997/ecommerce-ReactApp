import React from 'react'
import axios from 'axios'
import s from './createItem.module.scss'
import { createItem } from '../../../../http/itemAPI'


const AdminBar = () => {
    const [option, setOption] = React.useState('')
    const [option1, setOption1] = React.useState('')
    const [option2, setOption2] = React.useState('')
    const [option3, setOption3] = React.useState('')
    const [option4, setOption4] = React.useState('')
    const [option5, setOption5] = React.useState('')

    const [types, setTypes] = React.useState([]);
    const [subTypes, setSubTypes] = React.useState([]);
    const [stylesheets, setStylesheets] = React.useState([]);

    const postItem = (e: any) => {
        if (option.trim() !== '' && option1.trim() !== '' && option2.trim() !== '' && option3.trim() !== '' && option4 !== '') {
            e.preventDefault()
            createItem({
                name: option,
                type: option1,
                subType: option2,
                style: option3,
                price: option4
            })
            .then(data => {
                setOption('')
                setOption1('')
                setOption2('')
                setOption3('')
                setOption4('')
            })
        }
    }

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
            <h3>Новый товар</h3>
            <div className={s.formWrap} >

                <div className={s.inputWrap}>
                    <h4 >тип:</h4>
                    <label>
                        <select
                            required
                            value={option1}
                            onChange={(e) => {
                                setOption1(e.target.value)
                                console.log(e.target.value)
                            }}>
                            <option defaultValue={''}></option>
                            {types.map((item: any, i: number) => (
                                <option key={i} value={item.id} label={item.name}></option>
                            ))}
                        </select>
                        <button onClick={(e) => {
                            e.preventDefault()
                            setOption1('')
                            console.log(option1)
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4 >подтип:</h4>
                    <label>
                        <select
                            required
                            value={option2}
                            onChange={(e) => {
                                setOption2(e.target.value)
                                console.log(e.target.value)
                            }}>
                            <option defaultValue={''}  ></option>
                            {subTypes.map((item: any, i: number) => (
                                <option key={i} value={item.id} label={item.name}></option>
                            ))}
                        </select>
                        <button onClick={(e) => {
                            e.preventDefault()
                            setOption2('')
                            console.log(option2)
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4 >стиль:</h4>
                    <label>
                        <select
                            required
                            value={option3}
                            onChange={(e) => {
                                setOption3(e.target.value)
                                console.log(e.target.value)
                            }}>
                            <option defaultValue={''} ></option>
                            {stylesheets.map((item: any, i: number) => (
                                <option key={i} value={item.id} label={item.name}></option>
                            ))}
                        </select>
                        <button onClick={(e) => {
                            e.preventDefault()
                            setOption3('')
                            console.log(option3)
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4>имя:</h4>
                    <label>
                        <input required type={'text'} value={option} onChange={(e) => setOption(e.target.value)} />
                        <button onClick={(e) => {
                            e.preventDefault()
                            setOption('')
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4>цена:</h4>
                    <label>
                        <input required type={'text'} value={option4} onChange={(e) => setOption4(e.target.value)} />
                        <button onClick={(e) => {
                            e.preventDefault()
                            setOption4('')
                            console.log(option4)
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4>описание:</h4>
                    <label>
                        <textarea value={option5} onChange={(e) => setOption5(e.target.value)} />
                        <button onClick={(e) => {
                            e.preventDefault()
                            setOption5('')
                        }}>&times;</button>
                    </label>
                </div>

            </div>

            <button className={s.deleteBtn} onClick={(e) => {
                e.preventDefault()
                setOption('')
                setOption1('')
                setOption2('')
                setOption3('')
                setOption4('')
                setOption5('')
            }}>очистить все</button>
            <button type='submit' onClick={(e) => postItem(e)} >СОЗДАТЬ</button>

        </form>
    )
}

export default AdminBar