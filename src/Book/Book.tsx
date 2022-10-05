import styles from './Book.module.css'

import React from 'react';
import {useDispatch} from "react-redux";
import {removeBookAC} from "../Reducer";
import mops from '../Book/Images/Book-image.jpg';
import {EditableBookComment} from "./EditableBookComment";


type PropsType = {
    author: string,
    title: string,
    date?: number
    id:string
    comment?: string
    editBook: (isEdit:boolean)=>void
}

export const Book = (props: PropsType) => {
    const dispatch = useDispatch()

    const removeBook = (id: string) => {
        dispatch(removeBookAC(id))
    }

    let newDate = props.date ? props.date : " неизвестен"
    let newComment = props.comment ? props.comment : " добавьте свой комментарий"

    return (
        <li className={styles.book}>
            <div className={styles.left}>
                <div className={styles.info}>
                    <div>Автор:{props.author}</div>
                    <div>Название:{props.title}</div>
                    <div>Год издания:{newDate}</div>
                    {/*<div>Ваш комментарий:{newComment}</div>*/}
                    <EditableBookComment newComment={newComment} id={props.id}/>
                    <div>
                        Доставка: <input type="checkbox"/>
                    </div>
                </div>

                <div className={styles.imageSide}>
                    <img src={mops} alt={"book"}/>
                </div>

            </div>

            <div className={styles.right}>
                <button onClick={() => {removeBook(props.id)} }>УДАЛИТЬ КНИГУ</button>
                <button onClick={() => props.editBook(false)}>РЕДАКТИРОВАТЬ КНИГУ</button>
            </div>

        </li>
    );
};


//1. todo редактирование книги (кнопка Edit),
//2. todo с открытием новой компоненты и отображением id-книги и кнопка сохранить с перенаправлением ко всем книгам
//3.
//4.