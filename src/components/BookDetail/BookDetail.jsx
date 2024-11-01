import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDb';

const BookDetail = () => {
    const param = useParams()
    const {bookId} = param; // jai card e click tar id string 
    const id = parseInt(bookId) // click er id number banabo

    const data = useLoaderData();
    
    const book = data.find(book => book.bookId === id)   // 
    
    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;


    const handleMarkAsRead = (id) => {
        addToStoredReadList(id)

    }

    


    
    return (
        <div className='grid grid-cols-2 gap-[48px] h-[710px] mb-[100px]'>
            <div className='p-[74px] bg-[#1313130D] rounded-[16px]'>
                <img className='h-[564px] w-[425px]' src={image} alt="" />
            </div>
            <div>
                <h1 className='text-[40px] font-bold'>
                    {bookName}
                </h1>
                <p className='my-4 text-[20px] font-medium text-[#131313CC]'>By: {author}</p>
                <hr />
                <p className='my-4 text-[20px] font-medium text-[#131313CC]'>{category}</p>
                <hr />
                <p className='mt-6 text-base text-[#131313B3]'>
                    <span className='font-bold text-black'>Review :</span>{review}
                </p>
                <div className="flex gap-4 my-6 items-center">
                    <p className='font-bold'>Tag:</p>
            {tags.map((tag, idx) => (
              <button key={idx} className="px-4 py-[7px] bg-[#23BE0A0D] rounded-[30px] text-base text-[#23BE0A] font-medium">
               #{tag}
              </button>
            ))}
          </div>
          <hr />
          <div className='flex gap-[60px] mt-6'>
            <div className='text-base font-normal text-[#131313B3]'>
                <p>Number of Pages:</p>
                <p className='mt-3'>Publisher:</p>
                <p className='mt-3'>Year of Publishing:</p>
                <p className='mt-3'>Rating:</p>
            </div>
            <div className='text-base font-semibold'>
                <p>{totalPages}</p>
                <p className='mt-3'>{publisher}</p>
                <p className='mt-3'>{yearOfPublishing}</p>
                <p className='mt-3'>{rating}</p>
            </div>
          </div>
          <div className='mt-8'>
            <button onClick={() => handleMarkAsRead(bookId)} className='px-[28px] py-[18px] text-[18px] hover:bg-[#50B1C9] hover:text-white font-semibold border-[#50B1C9] rounded-[8px] border'>Read</button>
            <button className='px-[28px] text-[18px] border-[#50B1C9] hover:bg-[#50B1C9] hover:text-white font-semibold ml-4 py-[18px] rounded-[8px] border'>Wishlist</button>
          </div>
            </div>
        </div>
    );
};

export default BookDetail;