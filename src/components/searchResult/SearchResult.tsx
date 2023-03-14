const SearchResult = () => {
  return (
    <>
      <div className="flex md:flex-row sm:flex-col-reverse flex-col-reverse">
        <div>
          <div className=" mt-8 flex md:flex-col justify-between sm:flex-row flex-col">
            <div>
              <p className="font-bold">Categories</p>
              <p className="mt-6 text-sm">
                <span className="font-bold">Bifocal</span> Reading Glasses
              </p>
              <p className="mt-6 text-sm">
                Women’s <span className="font-bold">Bifocal</span> Reading
                Glasses
              </p>
              <p className="mt-8 text-sm underline underline-offset-4">
                Men’s <span className="font-bold">Bifocal</span> Reading Glasses
              </p>
              <p className="mt-8 text-sm">
                <span className="font-bold">Bifocal</span> Blue Light Glasses
              </p>
            </div>
            <div className="mt-8">
              <p className="font-bold">Help Center</p>
              <p className="mt-8 text-sm">
                How do your <span className="font-bold">Bifocal</span> style
                reading glass work?
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mt-8 text-base">
            Found 48 product results for “bifocal”
          </h3>
          <div className="mt-8 flex justify-between">
            <span className="font-bold">Products</span>
            <span className="font-medium underline underline-offset-4">
              View All
            </span>
          </div>

          <div className="grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 mt-8">
            <div className="bg-white flex py-4 px-5">
              <div className="w-24 h-9 mr-8">
                <img src="https://dev.readers.com/tn_images--D--Anderson-Angle-Silver---jpg_w920.jpg" />
              </div>
              <div>
                <p className="font-semibold text-sm">
                  The Cosmo Polarized Magnetic{" "}
                  <span className="font-bold">Bifocal</span> Reading Sunglasses
                </p>
                <span className="text-xs text-red-500">$35</span>
                <span className="line-through text-xs ml-2">8.10</span>
              </div>
            </div>
            <div className="bg-white flex py-4 px-5">
              <div className="w-24 h-9 mr-8">
                <img src="https://dev.readers.com/tn_images--D--Anderson-Angle-Silver---jpg_w920.jpg" />
              </div>
              <div>
                <p className="font-semibold text-xs">
                  The Cosmo Polarized Magnetic{" "}
                  <span className="font-bold">Bifocal</span> Reading Sunglasses
                </p>
                <span className="text-xs">$35</span>
              </div>
            </div>

            <div className="bg-white flex py-4 px-5">
              <div className="w-24 h-9 mr-8">
                <img src="https://dev.readers.com/tn_images--D--Anderson-Angle-Silver---jpg_w920.jpg" />
              </div>
              <div>
                <p className="font-semibold text-sm">
                  The Cosmo Polarized Magnetic{" "}
                  <span className="font-bold">Bifocal</span> Reading Sunglasses
                </p>
                <span className="text-xs text-red-500">$35</span>
                <span className="text-xs ml-2">8.10</span>
              </div>
            </div>

            <div className="bg-white flex py-4 px-5">
              <div className="w-24 h-9 mr-8">
                <img src="https://dev.readers.com/tn_images--D--Anderson-Angle-Silver---jpg_w920.jpg" />
              </div>
              <div>
                <p className="font-semibold text-sm">
                  The Cosmo Polarized Magnetic{" "}
                  <span className="font-bold">Bifocal</span> Reading Sunglasses
                </p>
                <span className="text-xs">$35</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchResult;
