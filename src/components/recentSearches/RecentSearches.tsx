import ss from "./RecentSearches.module.css";

const RecentSearches = () => {
  return (
    <>
      <div className={ss.flex_container}>
        <span className={ss.header}>Recent Searches</span>
        <div className={ss.flex_container_searches}>
          <button className={ss.btn}>Clear</button>
          <button className="bg-white text-black text-sm px-6 py-2 rounded-full">
            Rainbow
          </button>
          <button className="bg-white text-black text-sm px-6 py-2 rounded-full">
            Blue Light
          </button>
          <button className="bg-white text-black text-sm px-6 py-2 rounded-full">
            Readers
          </button>
          <button className="bg-white text-black text-sm px-6 py-2 rounded-full">
            Tortiese
          </button>
          <button className="bg-white text-black text-sm px-6 py-2 rounded-full">
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default RecentSearches;
