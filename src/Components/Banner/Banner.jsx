import bannerImage from "../../assets/books.jpg"

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen border-4 border-blue-400">
  <div className="hero-content flex-col lg:flex-row-reverse w-full justify-around">
    <img
      src={bannerImage}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="">
      <h1 className="text-5xl font-bold">Boi Poka Store</h1>
      <button className="btn btn-primary">View The List</button>
    </div>
  </div>
</div>
    );
};

export default Banner;