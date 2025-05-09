import React from 'react'
import { createBrowserRouter } from 'react-router'
import { Root } from '../Pages/Roots/Root'
import { Error } from '../Pages/ErrorPage/Error'
import { Home } from '../Pages/Home/Home'
import { About } from '../Pages/About/About'
import { BookDetails } from '../Pages/bookDetails/BookDetails'
import { ReadList } from '../Pages/ReadList/ReadList'

export const router =createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                loader:()=> fetch('./bookData.json'),
                path: '/',
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
                path: '/bookDetails/:id',
                loader:()=> fetch('./bookData.json'),
                Component: BookDetails
            },
            {
                path: '/readList',
                loader:()=> fetch('./bookData.json'),
                Component: ReadList
            }
        ]
      },
])
