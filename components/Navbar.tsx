"use client";

import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "@/components/Button";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Handles the opening and closing of our nav
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
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
    </nav>
  );
};

export default Navbar;
