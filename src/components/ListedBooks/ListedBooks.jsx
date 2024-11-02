import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import ReadList from "../ReadList/ReadList";

const ListedBooks = () => {

    // ideally we will directly get the read book list from the database
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);

    useEffect(()=> {
        const storedReadList = getStoredReadList(); // localStorage e store kora array with id

        const storedReadListInt = storedReadList.map(id => parseInt(id)); // id golo map kore sobgolo ke string to number kora

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId))  // all books thake readBook list 

        setReadList(readBookList)
    }, [])


  return (
    <div>
      <h1 className="text-[28px] font-bold text-center bg-[#1313130D] py-[34px] rounded-[16px]">Books</h1>
      <div className="flex justify-center mt-8 mb-[56px] text-white text-[18px]">
      <button className="py-[14px] px-5 rounded-[8px] bg-[#23BE0A]">
        Sort By <i class="fa-solid fa-sort-down"></i>
      </button>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-8 mb-[100px] grid grid-cols-1 gap-6">
            {
                readList.map(book => <ReadList key={book.bookId} book={book}></ReadList>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
