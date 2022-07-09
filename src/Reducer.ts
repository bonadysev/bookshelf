import {v1} from "uuid";

const startState: InitialStateType = [
    {
        id: v1(),
        author: ' Дэвид Флэнаган',
        title: ' JavaScript. Подробное руководство',
        comment: " отличная книга, рекомендую к покупке"
    },
    {id: v1(), author: ' Эрик Фримен, Элизабет Робсон', title: ' Изучаем программирование на JavaScript', date: 2011},
    {id: v1(), author: ' Дуглас Крокфорд', title: ' JavaScript сильные стороны'}
]
export type BookType = {
    id: string
    author: string
    title: string
    date?: number
    comment?: string
}
export type InitialStateType = Array<BookType>

export const Reducer = (state: InitialStateType = startState, action: GeneralTypeAction): InitialStateType => {
    switch (action.type) {
        case "REMOVE-BOOK": {
            return state.filter(b => b.id !== action.id)
        }
        case "ADD-BOOK": {
            let newBook = {
                id: v1(),
                author: action.author,
                title: action.title,
                date: action.date,
                comment: action.comment
            };
            return [...state, newBook]
        }
        case "RENAME-COMMENT": {
            return state.map(book => {
                if (book.id === action.id) {
                    return {
                        ...book,
                        comment: action.comment}
                }
                return book
            })
        }
        default:
            return state
    }
}

type GeneralTypeAction = removeBookACType | addBookACType | renameCommentACType
type removeBookACType = ReturnType<typeof removeBookAC>
type addBookACType = ReturnType<typeof addBookAC>
type renameCommentACType = ReturnType<typeof renameCommentAC>

export const renameCommentAC = (id: string, newComment: string) => {
    return {
        type: "RENAME-COMMENT",
        comment: newComment,
        id: id
    } as const
}

export const removeBookAC = (id: string) => {
    return {
        type: "REMOVE-BOOK",
        id: id
    } as const
}
export const addBookAC = (author: string, title: string, date?: number, comment?: string) => {
    return {
        type: "ADD-BOOK",
        author,
        title,
        date,
        comment
    } as const
}