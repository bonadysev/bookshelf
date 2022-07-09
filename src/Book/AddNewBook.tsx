import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {addBookAC} from "../Reducer";

export const AddNewBook = () => {
    let dispatch = useDispatch();

    let [author, setAuthor] = useState("")
    let [comment, setComment] = useState("")
    let [newBookTitle, setNewBookTitle] = useState("")
    let [date, setDate] = useState("")// инпут всегда строка
    let [error, setError] = useState<string | null>(null)

    // let _addNewBookHandler = () => {
    //     if (newBookTitle.trim() && (author.trim() !== "")){
    //         dispatch(addBookAC(author, newBookTitle, Number(date)))//преобразование инпута date из строки в число
    //         setNewBookTitle("")
    //         setAuthor("")
    //         setDate("")
    //     } else {
    //         setError("Заполните поле: название и автор книги")
    //     }
    // }

    let addNewBookHandler = () => {
        if (author.trim() === '' && newBookTitle.trim() === '') {
            setError("Заполните поля: автор и название книги")
        } else if (author.trim() === '' ) {
            setError("Заполните поле: автор книги")
        } else if (newBookTitle.trim() === '' ){
            setError("Заполните поле: название книги")
        } else {
            dispatch(addBookAC(author, newBookTitle, Number(date),comment))//преобразование инпута date из строки в число
            setNewBookTitle("")
            setAuthor("")
            setDate("")
            setComment("")
        }
    }

    // let onKeyPressHandler = () => { // объект события е не используется = не нужно принимать (e: KeyboardEvent<HTMLInputElement>)
    //     setError(null)
    // }
    const onChangeHandlerAuthor = (e:ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.currentTarget.value)
        // onKeyPressHandler()
        setError(null)
    }
    const onChangeHandlerNewBookTitle = (e:ChangeEvent<HTMLInputElement>) => {
        setNewBookTitle(e.currentTarget.value)
        // onKeyPressHandler()
        setError(null)
    }
    const onChangeHandlerComment = (e:ChangeEvent<HTMLInputElement>) => {
        setComment(e.currentTarget.value)
        // onKeyPressHandler()
        setError(null)
    }
    const onChangeHandlerDate = (e:ChangeEvent<HTMLInputElement>) => {setDate(e.currentTarget.value)
    }

    return (
        <div style={{background: '#eee', padding: 10, margin: 15}}>
            <input type={"text"} placeholder={'Автор ...'}
                   value={author}
                   onChange={onChangeHandlerAuthor}
                   // onKeyPress={onKeyPressHandler}
            />
            <input type={"text"} placeholder={'Название ...'}
                   value={newBookTitle}
                   onChange={onChangeHandlerNewBookTitle}
                   // onKeyPress={onKeyPressHandler}
            />
            <input type={"number"} placeholder={'Дата ...'}
                   value={date}
                   onChange={onChangeHandlerDate}
            />
            <input type={"text"} placeholder={'Комментарий ...'}
                   value={comment}
                   onChange={onChangeHandlerComment}
            />
            <div>
                Доставка: <input type="checkbox"/>
            </div>


            <div>
                <button onClick={addNewBookHandler}>Add book</button>
                {error && <div className="error-message">{error}</div>}
            </div>
        </div>
    );
};