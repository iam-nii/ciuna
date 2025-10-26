"use client";
import { categories } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";

function CategoryScrollContainer() {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollButtons);
      return () =>
        scrollContainer.removeEventListener("scroll", checkScrollButtons);
    }
  }, []);
  return (
    <>
      {/* Category Slider */}
      <div className="mb-8">
        <div className="flex items-center gap-4">
          {/* Left scroll button */}
          {canScrollLeft && (
            <Button
              variant="outline"
              size="icon"
              className="flex-shrink-0 w-10 h-10 bg-white shadow-sm hover:bg-gray-50 border-gray-200 cursor-pointer"
              onClick={scrollLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          {/* Category badges container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-3 overflow-x-auto scrollbar-hide flex-1"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Link
                  key={index}
                  href={
                    category.name === "Services"
                      ? "/services"
                      : `/categories/${category.name}`
                  }
                  className="group flex-shrink-0"
                >
                  <div className="flex items-center space-x-2 px-4 py-2 h-10 rounded-full border border-gray-200 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer whitespace-nowrap">
                    <Icon
                      className={`h-4 w-4 ${category.color} group-hover:text-primary-foreground`}
                    />
                    <span className="text-sm font-medium">{category.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Right scroll button */}
          {canScrollRight && (
            <Button
              variant="outline"
              size="icon"
              className="flex-shrink-0 w-10 h-10 bg-white shadow-sm hover:bg-gray-50 border-gray-200 cursor-pointer"
              onClick={scrollRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default CategoryScrollContainer;
