import React from 'react'
import { createBrowserRouter } from 'react-router'
import { Root } from '../Pages/Roots/Root'
import { Error } from '../Pages/ErrorPage/Error'
import { Home } from '../Pages/Home/Home'

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
            }
        ]
      },
])
