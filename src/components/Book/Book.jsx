import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author, tags, category, rating } = book;

  return (
    <div className="card bg-base-100 p-6 border">
      <figure className="bg-[#F3F3F3] rounded-[16px] h-[230px]">
        <img className="h-[166px] w-[134px]" src={image} alt="Shoes" />
      </figure>
      <div className="mt-6">
        <div className="flex gap-4">
          {tags.map((tag) => (
            <button className="px-4 py-[7px] bg-[#23BE0A0D] rounded-[30px] text-base text-[#23BE0A] font-medium">
              {tag}
            </button>
          ))}
        </div>
        <h2 className="text-[24px] font-bold mt-4">{bookName}</h2>
        <p className="text-base font-medium text-[#131313CC] mt-4">
          By:{author}
        </p>
        <div className="border-t-2 border-dashed mt-5 mb-5"></div>
        <div className="card-actions justify-between">
          <div className="text-base font-medium text-[#131313CC]">{category}</div>
          <div className="flex items-center gap-2">
            <div className="text-base font-medium text-[#131313CC]">
                {rating}
            </div>
            <div className="rating">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-green-300"
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
