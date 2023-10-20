import React from "react";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "@/components/Button";

interface Props {
  handleClick: () => void;
}

const MenuOverlay = ({ handleClick }: Props) => {
  return (
    <ul className="flex flex-col py-4 gap-4 items-center">
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          onClick={handleClick}
          className="regular-16 text-gray-50 flexCenter cursor-pointer
            transition-all hover:underline hover:text-gray-90"
        >
          {link.label}
        </Link>
      ))}
      <div className="py-4">
        <Button
          type="button"
          onClick={handleClick}
          title="Login"
          icon="/campers/user.svg"
          variant="btn_dark_green"
        />
      </div>
    </ul>
  );
};

export default MenuOverlay;
