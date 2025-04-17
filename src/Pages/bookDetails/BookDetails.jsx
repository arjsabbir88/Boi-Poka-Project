import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoreDB } from '../../Utilities/Utilities';

export const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData()
    const singleBook = data.find(book => book.bookId === bookId)
    
    const {
        author,bookName,category,image,publisher,
        rating,review,tags,totalPages,yearOfPublishing
    }= singleBook;

    const handleMarkIsRead = id =>{
        addToStoreDB(id)
    }

    
  return (
    <>
        <div className='flex w-2/3 mx-auto border-2 rounded-xl p-4 gap-6'>
            <div className='bg-gray-400 rounded-xl w-1/2 flex justify-center items-center'>
                <img className='w-44' src={image} alt="" />
            </div>
            <div className=' bg-gray-950 flex w-1/2 rounded-xl'>
                <div className='ml-6 mt-4'>
                    <h1 className='text-4xl'>{bookName}</h1>
                    <p>By: {author}</p>
                    <p className='my-4'>{category}</p>
                    <p>Review: {review}</p>
                    <h3 className='my-4'>Tag: {tags.map(tag => <button className='btn btn-success m-4 text-black'>{tag}</button>)}</h3>
                    <div className='mb-4'>
                        <p>PageNumber           : {totalPages}</p>
                        <p>Publisher            : {publisher}</p>
                        <p>Year of Publisher    : {yearOfPublishing}</p>
                        <p>PageNumber           : {totalPages}</p>
                        <p>Rating               : {rating}</p>
                    </div>
                    <div className='flex justify-center gap-4 mb-4'>
                        <button onClick={()=>handleMarkIsRead(id)} className='btn btn-soft btn-secondary'>Mark as read</button>
                        <button className='btn'>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
