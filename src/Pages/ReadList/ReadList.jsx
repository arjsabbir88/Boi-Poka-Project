import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoreBook } from "../../Utilities/Utilities";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Book } from "../Book/Book";

export const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [, setSort] = useState("");

  const allData = useLoaderData();
  useEffect(() => {
    const readListData = getStoreBook();
    const convertedReadListData = readListData.map((id) => parseInt(id));
    const myReadList = allData.filter((book) =>
      convertedReadListData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if(type === "Pages"){
        const sortedByPage = [...readList].sort((a,b)=>a.totalPage - b.totalPage);
        setReadList(sortedByPage)
        console.log(sortedByPage)
    }
    if(type === "Rating"){
        const sortedByRating = [...readList].sort((a,b)=> a.rating - b.rating)
        setReadList(sortedByRating)
        console.log(sortedByRating)
    }
  };

  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="dropdown dropdown-right dropdown-center">
            <div tabIndex={0} role="button" className="btn m-1 btn-soft btn-secondary">
            Sort By
            </div>
            <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
            <li>
                <a onClick={()=>handleSort("Pages")} className="btn btn-soft btn-secondary">Pages</a>
            </li>
            <li className="btn btn-soft btn-secondary">
                <a onClick={()=>handleSort("Rating")}>Rating</a>
            </li>
            </ul>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Read Book List : {readList.length}</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2>BookList</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-6">
            {readList.map((b) => (
              <Book key={b.bookId} book={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>WishList</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};
