import React from "react";
import axios from 'axios';
import Book from '../Book/Book';
import { useEffect, useState } from "react";
import "./Book.css";

const URL="http://localhost:5000/books/";

const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}

const Books = () => {
    const [books, setbooks] = useState();
    
    useEffect(() => {

        fetchHandler().then(data => setbooks(data.books));

    },[]);

    // console.log(books);
    // console.log("hello");
    
    return (                     // using i as iterator for the array of books and return each book component
        <div>
            {/* This is running */}
            <ul>               
                {books && books.map((book, i) => (        
                    <li key={i}>                                 
                        <Book book={book} ></Book>
                    </li>
                ))}
            </ul>
        </div>
)}

export default Books;