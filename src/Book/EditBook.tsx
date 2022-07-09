import React from 'react';

type PropsType = {
    setEditMode: (value:boolean) => void
}

export const EditBook = (props:PropsType) => {
    return (
        <div>HELLO
            <button onClick={()=>props.setEditMode(true)}>
                Save
                
            </button>
            <div>
               Автор <input type="text"/>
            </div>
            <div>
               Название книги <input type="text"/>
            </div>
            <div>
               Год издания <input type="text"/>
            </div>

        </div>
    );
};

//todo в инпут вставить текст той книги которую редактируем
// id
