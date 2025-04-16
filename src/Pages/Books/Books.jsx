import React from 'react'
import { Book } from '../Book/Book'

export const Books = ({data}) => {
  // console.log(data)
  return (
    <div>
      <h1 className='text-3xl text-center p-6'>Books</h1>
      <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          data.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  )
}
