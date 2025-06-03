import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, author, image, tags, category } = book;
  return (
    <Link to={`books/${bookId}`}>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img src={image} className="h-[166px]" alt={bookName} />
          </figure>
          <div className="card-body">
            <div className="flex gap-4">
              {tags.map((tag,index) => (
                <button key={index} className="btn btn-xs">{tag}</button>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>By: {author}</p>
            <div className="border border-dashed"></div>
            <div className="flex justify-between">
              <div className="badge badge-outline">{category}</div>
              <div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
