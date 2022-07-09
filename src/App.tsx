import React from 'react';
import './App.css';
import {BooksList} from "./BooksList/BooksList";
import {AddNewBook} from "./Book/AddNewBook";



function App() {
    return (
        <div>
            <AddNewBook/>
            <BooksList/>
        </div>
    )
}

export default App;
