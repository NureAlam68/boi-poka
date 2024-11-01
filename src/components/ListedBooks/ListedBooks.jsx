import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../utility/addToDb";
import Book from "../Book/Book";

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
      <h1 className="text-5xl my-8">Listed books</h1>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {
                readList.map(book => <Book key={book.bookId} book={book}></Book>)
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
