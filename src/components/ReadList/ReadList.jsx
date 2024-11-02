import React from "react";
import { Link } from "react-router-dom";

const ReadList = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    category,
    rating,
    publisher,
    yearOfPublishing,
    totalPages,
    bookId
  } = book;
  return (
    <div className="flex gap-6 p-6 border rounded-[16px]">
      <div className="w-[230px] bg-[#1313130D] rounded-[16px] py-[34px] px-12">
        <img className="w-[138px] h-[172px]" src={image} alt="" />
      </div>
      <div>
        <h2 className="text-[24px] font-bold">{bookName}</h2>
        <p className="mt-3 text-base text-[#131313CC] font-medium">By :{author}</p>
        <div className="flex gap-4 my-4 items-center">
          <p className="font-bold">Tag:</p>
          {tags.map((tag, idx) => (
            <button
              key={idx}
              className="px-4 py-[7px] bg-[#23BE0A0D] rounded-[30px] text-base text-[#23BE0A] font-medium"
            >
              #{tag}
            </button>
          ))}
          <p>
            <i class="fa-solid fa-location-dot"></i>
            <span className="ml-2">Year of Publishing: {yearOfPublishing}</span>
          </p>
        </div>
        <div className="flex gap-5 text-[#13131399] mb-3">
            <p>
            <i class="fa-regular fa-user"></i>
            <span className="ml-2">Publisher: {publisher}</span>
            </p>
            <p>
            <i class="fa-regular fa-file"></i>
            <span className="ml-2">Page {totalPages}</span>
            </p>
        </div>
        <hr className="w-[867px]" />
        <div className="mt-4 flex gap-3">
            <button className="bg-[#328EFF26] py-[11px] px-[20px] rounded-[30px] text-[#328EFF]">
                Category: {category}
            </button>
            <button className="bg-[#FFAC3326] py-[11px] px-[20px] rounded-[30px] text-[#FFAC33]">
                Rating: {rating}
            </button>
            <Link to={`/books/${bookId}`} className="bg-[#23BE0A] py-[11px] px-[20px] rounded-[30px] text-[18px] text-white font-medium">
                View Details
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
