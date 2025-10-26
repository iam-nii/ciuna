import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div
      id="search-bar"
      className="flex items-center border-2 border-orange-500 rounded-xl pl-3 bg-white sm:h-12 
               w-full sm:w-[320px] md:w-[400px] lg:w-[550px] transition focus-within:ring-2 focus-within:ring-orange-300"
    >
      <Search className="h-5 w-5 mr-2 text-gray-500" />
      <Input
        type="text"
        placeholder="Search for items, services, and vendors..."
        className="flex-1 border-none shadow-none rounded-lg focus-visible:ring-0 text-gray-700 placeholder-gray-400"
      />
      <Button
        variant="outline"
        className="bg-orange-500 hover:opacity-600 cursor-pointer text-white font-medium border-none px-4 py-2 rounded-r-lg sm:h-12 w-24 text-md"
      >
        Search
      </Button>
    </div>
  );
}

export default SearchBar;
