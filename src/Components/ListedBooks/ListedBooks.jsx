import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreReadList } from "../../Utility/addtoDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  const allBook = useLoaderData();

  const allBooks = useLoaderData();
  useEffect(() => {
    const storedReadList = getStoreReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    const bookReadList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(bookReadList);
  }, []);
  const handleShort = (sortType) => {
    setSort(sortType);
    if(sortType === 'No of Page'){
      const sortedReadList = [...readList].sort((a,b) => a.totalPages - b.totalPages);
      setReadList(sortedReadList);

    }
  };
  return (
    <div>
      <h3 className="text-3xl font-bold text-center">Listed Books</h3>
      <details className="dropdown">
        <summary className="btn m-1">
          {sort ? `Sort by: ${sort}` : "Sort by"}
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li onClick={() => handleShort("Reatings")}>
            <a>Reatings</a>
          </li>
          <li onClick={() => handleShort("No of Page")}>
            <a>No of Page</a>
          </li>
        </ul>
      </details>
      <div className="py-12">
        <Tabs>
          <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {readList.map((book) => (
                <Book key={book.bookId} book={book}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2 className="text-xl font-semibold">My Wish List</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBooks;
