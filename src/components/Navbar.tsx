"use client";
import Image from "next/image";

import SearchBar from "./SearchBar";
import CategoriesMenu from "./CategoriesMenu";
import CitySelector from "./CitySelector";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white w-full flex flex-col sm:flex-row sm:items-center sm:gap-40 px-4 py-3 border-b border-gray-200 shadow-sm">
      {/* Logo */}
      <div className="flex items-center justify-around sm:justify-start w-full sm:w-auto">
        <Image
          src="/сiuna_logo.svg"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="w-24 sm:w-28 h-auto sm:ml-20"
        />
        {/* Show Menu Button (mobile only) */}
        <div className="sm:hidden flex items-center gap-2">
          <CategoriesMenu mobile />
          <CitySelector />
        </div>
      </div>
      {/* Middle Section: Search + Categories */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto sm:justify-center">
        {/* Categories Menu (hidden on small screens, replaced by mobile version above) */}
        <div className="hidden sm:block">
          <CategoriesMenu />
        </div>

        {/* Search Bar */}
        <SearchBar />

        {/* City selector */}
        <div className="hidden sm:block">
          <CitySelector />
        </div>
      </div>
    </header>
  );
}
