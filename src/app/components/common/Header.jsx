"use client";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const links = [
    {
      name: "_hello",
      route: "/",
    },
    {
      name: "_about-me",
      route: "/about-me",
    },
    {
      name: "_projects",
      route: "/projects",
    },
  ];
  console.log(pathName);
  return (
    <div className="w-full flex justify-between border-b border-[#1E2D3D] min-h-[5.7vh] max-h-[5.7vh]">
      <div className="flex justify-between max-w-[732px] w-full items-center">
        <p className="pl-[22px] whitespace-nowrap">muhammad-safiullah</p>
        <div className="max-w-[421px] w-full flex items-center border-x border-[#1E2D3D] h-full">
          {links.map((i, index) => (
            <button
              key={index + "link"}
              onClick={() => router.push(i.route)}
              className={`h-full ${
                index !== 2 && "border-r"
              } border-r-[#1E2D3D] px-[31.5px] ${
                pathName == i.route
                  ? "border-b-[5px] border-b-[#FEA55F] text-[#fff]"
                  : ""
              } whitespace-nowrap hover:text-[#fff] transition-all ease-in-out duration-300 `}
            >
              {i.name}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => router.push("/contact-me")}
        className={`h-full border-l border-l-[#1E2D3D] px-[31.5px] ${
          pathName == "/contact-me"
            ? "border-b-[5px] border-b-[#FEA55F] text-[#fff]"
            : ""
        } whitespace-nowrap hover:text-[#fff] transition-all ease-in-out duration-300 min-h-[5.7vh] max-h-[5.7vh]`}
      >
        _contact-me
      </button>
    </div>
  );
};

export default Header;
