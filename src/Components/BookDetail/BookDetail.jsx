import { parse } from "postcss";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList } from "../../Utility/addtoDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {
    bookId: currentBookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead =(id)=>{
    addToStoreReadList(id);

  }
  return <div>
    <div className="flex justify-around">
  <div className="w-full md:w-1/2">
    <img src={image} alt="" className="h-[600px]"/>
  </div>
  <div className="py-2 text-right w-full md:w-1/2">
    <p>{bookName}</p>
    <p>{author}</p>
    <p>{review}</p>
    <p>{totalPages}</p>
    <p>{rating}</p>
    <p>{category}</p>
    <p>{tags}</p>
    <p>{publisher}</p>
    <p>{yearOfPublishing}</p>
    <br />
    <div className="flex gap-4">
  <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline btn-accent">Mark as Read</button>
  <button className="btn btn-outline btn-accent">Add to WishList</button>
    </div>
  </div>
    </div>
  </div>;
};

export default BookDetail;
