import React, {useState} from 'react';
import {Book} from "../Book/Book";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../store";
import {InitialStateType} from "../Reducer";
import {EditBook} from "../Book/EditBook";


export const BooksList = () => {

    let [editMode, setEditMode] = useState(true);

    const books = useSelector<AppRootStateType, InitialStateType>(state => state.myReducer)
    let toggleEditBook = (isEdit: boolean) => {
        setEditMode(isEdit)
    }
    return (
        <>
            {editMode
                ? <ul>
                    {
                        books.map(bk => {
                            return (
                                <Book key={bk.id} author={bk.author} title={bk.title} date={bk.date} id={bk.id}
                                      comment={bk.comment} editBook={toggleEditBook}/>
                            )
                        })
                    }
                </ul>
                : <EditBook setEditMode={toggleEditBook}/>
            }
        </>
    )
        ;
};

