import s from "./RecentSearches.module.css";

const RecentSearches = () => {
  return (
    <>
      <div className="flex flex-nowrap sm:items-center max-sm:flex-col py-6 gap-x-8">
        <span className="font-bold">Recent Searches</span>
        <div className="flex sm:mt-0 mt-3 gap-4 font-semibold">
          <button className={s.button}>Clear</button>
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
