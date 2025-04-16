import React from "react";

export const Book = ({ book }) => {
    const {bookName,author,image, category,rating} = book;
  return (
    <>
      <div className="card w-96 shadow-xl
      bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
      ">
        <figure>
          <img
            className="h-60 rounded-lg px-4 
            rotate-x-20 -rotate-y-30"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{author}</div>
          </h2>
          <p className="text-lg">
          category: {category}
          </p>
          <div className="card-actions justify-between">
            <div className="btn btn-success">Show More</div>
            <div className="btn">rating: {rating}</div>
          </div>
        </div>
      </div>
    </>
  );
};
