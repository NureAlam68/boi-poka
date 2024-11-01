import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {
    const param = useParams()
    const {bookId} = param; // jai card e click tar id string 
    const id = parseInt(bookId) // click er id number banabo

    const data = useLoaderData();
    
    const book = data.find(book => book.bookId === id)   // 
    console.log(book)


    
    return (
        <div className='mb-[100px] grid grid-cols-2'>
            <div></div>
            <div></div>
        </div>
    );
};

export default BookDetail;