import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import {renameCommentAC} from "../Reducer";

type PropsType = {
    newComment:string
    id:string
}
export const EditableBookComment = (props:PropsType) => {
    console.log("id " + props.id)
    const dispatch = useDispatch()

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.newComment);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.newComment);
    }
    const activateViewMode = () => {
        setEditMode(false);
        dispatch(renameCommentAC(props.id,title))
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode
        ? <input value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode}/>
        : <span onDoubleClick={activateEditMode}>{props.newComment}</span>
};

// export let x = 1