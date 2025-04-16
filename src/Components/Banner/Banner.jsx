import React from 'react'
import bannerImage from '../../assets/books.jpg'

export const Banner = () => {
  return (
    <div className='flex max-w-10/12 mx-auto rounded-xl p-6 justify-between items-center bg-cyan-800'>
        <div className='max-w-xl'>
            <h1 className='text-2xl'>
                Lorem ipsum dolor sit 
                <span className='text-cyan-400'> amet, consectetur</span> 
            </h1>
            <p className='text-sm my-3 text-gray-400'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad non facilis eligendi fugit odio itaque blanditiis dolorum nisi facere inventore nam, </p>
            <button className='btn btn-success'>Buy Now</button>
        </div>
        <div>
            <img className='w-lg rounded-lg' src={bannerImage}alt="" />
        </div>
    </div>
  )
}
