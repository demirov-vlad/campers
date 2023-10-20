"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "@/components/Button";
import React, { useState } from "react";
import MenuOverlay from "@/components/MenuOverlay";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const hide = () => setIsOpen(false);

  return (
    <ClickAwayListener onClickAway={hide}>
      <nav className="fixed top-0 left-0 right-0 z-30 bg-white opacity-[0.96]">
        <div className="flexBetween max-container padding-container relative z-30 py-5">
          <Link href="/">
            <Image
              src="/campers/hilink-logo.svg"
              alt="Hilink"
              width={74}
              height={29}
            />
          </Link>
          <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flexCenter cursor-pointer
            transition-all hover:underline hover:text-gray-90"
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <div className="lg:flexCenter hidden">
            <Button
              type="button"
              title="Login"
              icon="/campers/user.svg"
              variant="btn_dark_green"
            />
          </div>
          <button
            onClick={handleClick}
            className="flex flex-col justify-center items-center lg:hidden"
          >
            <span
              className={`bg-black block transition-all duration-300 ease-out h-[2px] w-[30px] rounded-md ${
                isOpen ? "-rotate-45 translate-y-1" : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-[2px] w-[30px] rounded-md my-[2.6px] ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-black block transition-all duration-300 ease-out h-[2px] w-[30px] rounded-md ${
                isOpen ? "rotate-45 -translate-y-1" : "translate-y-0.5"
              }`}
            ></span>
          </button>
        </div>
        <div
          className={`fixed top-0 bg-white opacity-[0.98] w-full border-t-2 mt-[69px] ${
            isOpen ? "right-0" : "-right-full"
          } transition-all duration-300 ease-out`}
        >
          <MenuOverlay handleClick={handleClick} />
        </div>
      </nav>
    </ClickAwayListener>
  );
};

export default Navbar;
