"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  MdDirectionsBus,
  MdTrain,
  MdDirectionsBoat,
  MdContacts,
} from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname.includes("login") || pathname.includes("register")) {
    return null;
  }
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const navItems = [
    { name: "Bus", icon: <MdDirectionsBus className="text-[24px]" /> },
    { name: "Hotel", icon: <RiHotelFill className="text-[24px]" /> },
    { name: "Train", icon: <MdTrain className="text-[24px]" /> },
    { name: "Ship", icon: <MdDirectionsBoat className="text-[24px]" /> },
    { name: "Contact", icon: <MdContacts className="text-[24px]" /> },
  ];

  const user = false;

  return (
    <>
      {/* Main Navbar */}
      <nav className="border-b sticky top-0 backdrop-blur-sm bg-white z-50">
        <div className="w-11/12 mx-auto flex justify-between items-center py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/e-ticket.png"
              alt="ET-ticket BD logo"
              width={120}
              height={40}
              priority
            />
          </div>

          {/* Desktop Menu - hidden on medium and below */}
          <div className="hidden md:block">
            <ul className="flex items-center md:gap-8 lg:gap-12">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2 ">
                  <span className="text-gray-700 ">{item.icon}</span>
                  <span className="text-sm font-semibold cursor-pointer text-gray-900 hover:text-[#00026e]">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Profile and Login - visible on all devices */}
          <div className="flex items-center gap-4">
            {user ? (
              <div
                onClick={toggleDropdown}
                className="w-[42px] h-[42px] rounded-full text-sm overflow-hidden"
              >
                <Image
                  referrerPolicy="no-referrer"
                  src="/self.jpg"
                  alt="User"
                  width={42}
                  height={42}
                  className=" object-cover"
                />
              </div>
            ) : (
              <Link href="/login">
                <button className="font-semibold rounded-md border-2 px-3 py-1 border-secondary bg-[#fdcc02] hover:text-white">
                  Login
                </button>
              </Link>
            )}
          </div>

          {/* Profile Dropdown */}
          {isDropdownOpen && (
            <div className="z-50 my-4 text-base list-none bg-white rounded-b-sm shadow w-44 absolute top-[50px] right-[64px]">
              <div className="px-4 py-3">
                <span className="block">Jahid Hasan</span>
              </div>
              <ul className="py-1">
                <li className="block px-4 py-2 hover:bg-gray-100">Profile</li>
                <li className="block px-4 py-2 hover:bg-gray-100">
                  My Booking
                </li>
                <li className="block px-4 py-2 hover:bg-gray-100">Saved</li>
                <hr />
                <li className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Fixed Bottom Bar - Only for Medium Devices */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40  md:hidden">
        <ul className="w-11/12 mx-auto border- border-red-500 flex justify-around items-center py-3">
          {navItems.map((item, index) => (
            <li key={index} className="flex flex-col items-center gap-1 px-2">
              <span className="text-gray-800">{item.icon}</span>
              <span className="text-xs font-medium text-gray-900">
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
