
const FilterBar = () => {

  return (
    <div className="w-full max-w-[1280px] mx-auto p-4">
    
      <div className="hidden md:flex flex-wrap items-center gap-6 text-sm text-gray-600">
        <span className="font-medium">Bộ lọc:</span>


        <button className="hover:text-gray-700">
            Availability
        </button>
        <button className="hover:text-gray-700 flex items-center gap-1">
          Price <span className="text-xl pb-2 rotate-180">⌅</span>
        </button>
        <button className="hover:text-gray-700">Product type</button>
        <button className="hover:text-gray-700">Collection</button>


        <div className="ml-auto flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>Sắp xếp theo:</span>
            <button className="hover:text-gray-700 flex items-center gap-1">
              Bán chạy nhất <span className="text-xl pb-2 rotate-180">⌅</span>
            </button>
          </div>
          <span className="text-gray-600">341 sản phẩm</span>
        </div>
      </div>


      <div className="flex md:hidden items-center justify-between text-gray-600">
        <button className="flex items-center gap-2 text-sm font-medium">
          <i class="fa-solid fa-filter w-4 h-4"></i>
          Lọc và sắp xếp
        </button>
        <span className="text-gray-600 text-sm">341 sản phẩm</span>
      </div> 

     
    </div>
  );
};

export default FilterBar;
