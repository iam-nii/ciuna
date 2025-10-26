"use client";
import { useState, useRef, useEffect } from "react";
import { Grid3X3, X } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { cn } from "@/lib/utils";
import { categories } from "@/lib/constants";

function CategoriesMenu({ mobile = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // ✅ Properly typed ref

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={menuRef}>
      <Menubar
        className={cn(
          "border-none h-[45px] text-white transition-all relative",
          mobile
            ? "bg-orange-500 rounded-lg px-3 py-2"
            : "bg-orange-500 hover:bg-orange-600 px-4 rounded-lg"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenubarMenu>
          <MenubarTrigger className="hover:cursor-pointer p-0 sm:w-30">
            <div className="flex items-center gap-2">
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Grid3X3 className="h-5 w-5" />
              )}
              <span className="font-medium sm:text-[14px]">All Categories</span>
            </div>
          </MenubarTrigger>

          {isOpen && (
            <MenubarContent className="absolute left-0 mt-2 border-none shadow-lg rounded-md p-1 bg-white z-50">
              {categories.map((category) => (
                <MenubarItem
                  key={category.name}
                  className="hover:cursor-pointer hover:bg-orange-50 flex items-center px-2 py-1.5 rounded-md"
                >
                  <category.icon
                    className={cn(`${category.color} h-4 w-4 mr-2`)}
                  />
                  {category.name}
                </MenubarItem>
              ))}
            </MenubarContent>
          )}
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default CategoriesMenu;
