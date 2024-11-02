import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList, getStoredWishList } from "../../utility/addToDb";
import ReadList from "../ReadList/ReadList";

const ListedBooks = () => {
  // ideally we will directly get the read book list from the database
  const allBooks = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedReadList = getStoredReadList(); // localStorage e store kora array with id

    const storedReadListInt = storedReadList.map((id) => parseInt(id)); // id golo map kore sobgolo ke string to number kora

    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    ); // all books thake readBook list

    setReadList(readBookList);
  }, []);

  useEffect(() => {
    const storedWishList = getStoredWishList();
    const storedWishListInt = storedWishList.map((id) => parseInt(id));
    const wishBookList = allBooks.filter((book) =>
      storedWishListInt.includes(book.bookId)
    );

    setWishList(wishBookList);
  }, []);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Rating") {
      const sortedReadList = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedReadList);
    }
    if (sortType === "Number of pages") {
      const sortedReadList = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedReadList);
    }
    if (sortType === "Publishing year") {
      const sortedReadList = [...readList].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setReadList(sortedReadList);
    }
  };

  return (
    <div>
      <h1 className="text-[28px] font-bold text-center bg-[#1313130D] py-[34px] rounded-[16px]">
        Books
      </h1>
      <div className="flex justify-center mt-8 mb-[100px] text-white text-[18px]">
        <details className="dropdown">
          <summary className="py-[14px] cursor-pointer px-5 rounded-[8px] font-semibold bg-[#23BE0A]">
            {sort ? `Sort By: ${sort}` : "Sort By"}
          </summary>
          <ul className="dropdown-content menu bg-base-100 text-black rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handleSort("Rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSort("Number of pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleSort("Publishing year")}>
              <a>Publishing year</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div className="mt-8 mb-[100px] grid grid-cols-1 gap-6">
            {readList.map((book) => (
              <ReadList key={book.bookId} book={book}></ReadList>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="mt-8 mb-[100px] grid grid-cols-1 gap-6">
            {wishList.map((book) => (
              <ReadList key={book.bookId} book={book}></ReadList>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
