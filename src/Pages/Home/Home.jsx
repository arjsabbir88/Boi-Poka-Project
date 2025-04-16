import React from 'react'
import { Banner } from '../../Components/Banner/Banner'
import { useLoaderData } from 'react-router'
import { Books } from '../Books/Books';

export const Home = () => {
    const data = useLoaderData();

  return (
    <>
        <div>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    </>
  )
}
