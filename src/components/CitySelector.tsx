import React from "react";
import { MapPin } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";
import { cities } from "@/lib/constants";
function CitySelector() {
  return (
    <div className="cursor-pointer">
      <Menubar className="bg-white border-none sm:w-32  shadow-none hover:bg-gray-100 h-[45px]">
        <MenubarMenu>
          <MenubarTrigger className=" w-full hover:bg-gray-100 gap-2 cursor-pointer">
            <MapPin className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium">Kyiv</span>
          </MenubarTrigger>
          <MenubarContent className="bg-white border-none">
            {cities.map((city) => (
              <MenubarItem key={city}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {city}
                </div>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}

export default CitySelector;
