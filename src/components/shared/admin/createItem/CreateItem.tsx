import React from 'react'
import axios from 'axios'
import s from './createItem.module.scss'
import { createItem } from '../../../../http/itemAPI'
import { Blob } from 'buffer'


const AdminBar = () => {
    const [name, setName] = React.useState('')
    const [type, setType] = React.useState('')
    const [subType, setSubType] = React.useState('')
    const [style, setStyle] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [option5, setOption5] = React.useState('')

    // ArrayLike<File> | Iterable<File> |   <ArrayLike<File> | Iterable<File> >
    const [types, setTypes] = React.useState([]);
    const [subTypes, setSubTypes] = React.useState([]);
    const [stylesheets, setStylesheets] = React.useState([]);





    // const handleFiles = (files: any) => {
    //     // const uploaded = [...images]
    //     // if (Array.isArray(files)) {
    //     //     files.some((file: any) => {
    //     //         if (uploaded.findIndex((f) => f.name === file.name) === -1) {
    //     //             uploaded.push(file)
    //     //         }
    //     //     })
    //     // }

    //     setImages(files)

    //     console.log(images)
    // }



    // Array.prototype.slice.call()

    const [images, setImages] = React.useState<any | any[]>([])

    const handleEventFile = (e: any) => {
        e.preventDefault();
        setImages(e.currentTarget.files)

    }

    const postItem = (e: any) => {
        if (name.trim() !== '' && type.trim() !== '' && subType.trim() !== '' && style.trim() !== '' && price !== '' && images !== null) {
            e.preventDefault()
            const item = new FormData()
            item.append('name', name)
            item.append('price', price)
            item.append('type', type)
            item.append('subType', subType)
            item.append('style', style)
            Array.from(images).forEach((element: any) => {
                item.append('images', element)
            })
            createItem(item)
                .then(data => {
                    setName('')
                    setType('')
                    setSubType('')
                    setStyle('')
                    setPrice('')
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
                            value={type}
                            onChange={(e) => {
                                setType(e.target.value)
                                console.log(e.target.value)
                            }}>
                            <option defaultValue={''}></option>
                            {types.map((item: any, i: number) => (
                                <option key={i} value={item.id} label={item.name}></option>
                            ))}
                        </select>
                        <button onClick={(e) => {
                            e.preventDefault()
                            setType('')
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4 >подтип:</h4>
                    <label>
                        <select
                            required
                            value={subType}
                            onChange={(e) => {
                                setSubType(e.target.value)
                                console.log(e.target.value)
                            }}>
                            <option defaultValue={''}  ></option>
                            {subTypes.map((item: any, i: number) => (
                                <option key={i} value={item.id} label={item.name}></option>
                            ))}
                        </select>
                        <button onClick={(e) => {
                            e.preventDefault()
                            setSubType('')
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4 >стиль:</h4>
                    <label>
                        <select
                            required
                            value={style}
                            onChange={(e) => {
                                setStyle(e.target.value)
                                console.log(e.target.value)
                            }}>
                            <option defaultValue={''} ></option>
                            {stylesheets.map((item: any, i: number) => (
                                <option key={i} value={item.id} label={item.name}></option>
                            ))}
                        </select>
                        <button onClick={(e) => {
                            e.preventDefault()
                            setStyle('')
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4>название:</h4>
                    <label>
                        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                        <button onClick={(e) => {
                            e.preventDefault()
                            setName('')
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4>цена:</h4>
                    <label>
                        <input required type='text' value={price} onChange={(e) => setPrice(e.target.value)} />
                        <button onClick={(e) => {
                            e.preventDefault()
                            setPrice('')
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4>описание:</h4>
                    <label>
                        <textarea value={option5} onChange={(e) => setOption5(e.target.value)} style={{ marginBottom: '5px' }} />
                        <button onClick={(e) => {
                            e.preventDefault()
                            setOption5('')
                        }}>&times;</button>
                    </label>
                </div>

                <div className={s.inputWrap}>
                    <h4>фото:</h4>
                    <label>
                        <input type='file' multiple onChange={(e) => setImages(e.currentTarget.files)} style={{ maxWidth: 'max-content' }} />
                    </label>
                </div>

            </div>

            <button className={s.deleteBtn} onClick={(e) => {
                e.preventDefault()
                setName('')
                setType('')
                setSubType('')
                setStyle('')
                setPrice('')
                setOption5('')
            }}>очистить все</button>
            <button type='submit' onClick={(e) => {
                postItem(e)
            }} >СОЗДАТЬ</button>

        </form>
    )
}

export default AdminBar