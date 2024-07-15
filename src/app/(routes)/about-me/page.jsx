"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [content, setContent] = useState([]);
  const [label, setLabel] = useState("");

  useEffect(() => {
    setContent(aboutMe[0].subFolders[0].content);
    setLabel(aboutMe[0].subFolders[0].name);
  }, []);

  const [aboutMe, setAboutMe] = useState([
    {
      main: "personal-info",
      isopened: true,
      subFolders: [
        {
          name: "_bio",
          icon: (
            <svg
              width={16}
              height={14}
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z"
                fill="#E99287"
              />
            </svg>
          ),

          content: [
            "/**",
            "* About me",
            "* I have 5 years of еxperience in web",
            "* development lorem ipsum dolor sit amet,",
            "* consectetur adipiscing elit, sed do eiusmod",
            "* tempor incididunt ut labore et dolore",
            "* magna aliqua. Ut enim ad minim veniam,",
            "* quis nostrud exercitation ullamco laboris",
            "* nisi ut aliquip ex ea commodo consequat.",
            "* Duis aute irure dolor in reprehenderit in",
            "* Duis aute irure dolor in reprehenderit in",
            "* voluptate velit esse cillum dolore eu fugiat",
            "* nulla pariatur. Excepteur sint occaecat",
            "* officia deserunt mollit anim id est laborum.",
            "*/",
          ],
        },
        {
          name: "_education",
          icon: (
            <svg
              width={16}
              height={14}
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.0802 4.49392V13.1606C15.0802 13.3521 15.0041 13.5358 14.8687 13.6713C14.7332 13.8067 14.5495 13.8828 14.358 13.8828H1.35796C1.16642 13.8828 0.982719 13.8067 0.847276 13.6713C0.711833 13.5358 0.635742 13.3521 0.635742 13.1606V3.7717H14.358C14.5495 3.7717 14.7332 3.84779 14.8687 3.98324C15.0041 4.11868 15.0802 4.30238 15.0802 4.49392ZM8.15696 2.32726H0.635742V1.60503C0.635742 1.41349 0.711833 1.22979 0.847276 1.09435C0.982719 0.958904 1.16642 0.882813 1.35796 0.882812H6.71252L8.15696 2.32726Z"
                fill="#3A49A4"
              />
            </svg>
          ),

          content: [
            "/**",
            "* About me",
            "* I have 5 years of еxperience in web",
            "* development lorem ipsum dolor sit amet,",
            "* consectetur adipiscing elit, sed do eiusmod",
            "* tempor incididunt ut labore et dolore",
            "* magna aliqua. Ut enim ad minim veniam,",
            "* quis nostrud exercitation ullamco laboris",
            "* nisi ut aliquip ex ea commodo consequat.",
            "* Duis aute irure dolor in reprehenderit in",
            "* Duis aute irure dolor in reprehenderit in",
            "* voluptate velit esse cillum dolore eu fugiat",
            "* nulla pariatur. Excepteur sint occaecat",
            "* officia deserunt mollit anim id est laborum.",
            "*/",
          ],
        },
      ],
    },
    {
      main: "contacts",
      isopened: false,
      subFolders: [
        {
          name: "safiullah.mern@gmail.com",
          icon: (
            <svg
              width={17}
              height={16}
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.811096 0.548828H15.4108C15.6259 0.548828 15.8322 0.634283 15.9844 0.786393C16.1365 0.938503 16.2219 1.14481 16.2219 1.35992V14.3375C16.2219 14.5526 16.1365 14.7589 15.9844 14.911C15.8322 15.0631 15.6259 15.1486 15.4108 15.1486H0.811096C0.59598 15.1486 0.389675 15.0631 0.237565 14.911C0.0854545 14.7589 0 14.5526 0 14.3375V1.35992C0 1.14481 0.0854545 0.938503 0.237565 0.786393C0.389675 0.634283 0.59598 0.548828 0.811096 0.548828ZM8.15963 7.59158L2.95888 3.17516L1.90851 4.41127L8.17017 9.728L14.3191 4.40721L13.2582 3.18002L8.16044 7.59158H8.15963Z"
                fill="#607B96"
              />
            </svg>
          ),
        },
        {
          name: "+92 3199554359",
          icon: (
            <svg
              width={17}
              height={18}
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.221 13.0453V16.2319C16.2211 16.46 16.1347 16.6797 15.9791 16.8466C15.8236 17.0136 15.6105 17.1153 15.3829 17.1312C14.9891 17.1583 14.6674 17.1727 14.4187 17.1727C6.45507 17.1727 0 10.7176 0 2.754C0 2.50527 0.0135175 2.18356 0.0414537 1.78975C0.0574246 1.56215 0.159129 1.34908 0.326046 1.19354C0.492962 1.038 0.712664 0.951557 0.940819 0.95166H4.12735C4.23913 0.951547 4.34696 0.992987 4.4299 1.06793C4.51283 1.14287 4.56495 1.24597 4.57613 1.35719C4.59686 1.56445 4.61578 1.72937 4.63381 1.85463C4.8129 3.10448 5.17992 4.32008 5.72242 5.4602C5.80803 5.64044 5.75215 5.85582 5.58994 5.97117L3.64522 7.36077C4.83427 10.1314 7.04222 12.3393 9.81282 13.5284L11.2006 11.5872C11.2573 11.5079 11.3401 11.4511 11.4345 11.4265C11.5288 11.402 11.6288 11.4113 11.717 11.453C12.857 11.9945 14.0723 12.3606 15.3217 12.5389C15.4469 12.5569 15.6118 12.5767 15.8173 12.5966C15.9284 12.6079 16.0312 12.6601 16.106 12.7431C16.1807 12.826 16.2221 12.9337 16.2219 13.0453H16.221Z"
                fill="#607B96"
              />
            </svg>
          ),
        },
      ],
    },
  ]);
  return (
    <div className="flex w-full min-h-[88.62vh]">
      <div className="max-w-[17.52%] w-full border-r border-[#1E2D3D] min-h-[88.62vh]">
        {aboutMe?.map((item, index) => (
          <div key={index + "aboutme"} className="overflow-hidden">
            <button
              onClick={() => {
                setAboutMe((prev) =>
                  prev.map((item, i) =>
                    i === index ? { ...item, isopened: !item.isopened } : item
                  )
                );
              }}
              className={`${
                item.isopened && "text-[#fff]"
              } flex gap-[11px] items-center border-b border-b-[#1E2D3D] pl-[14.5px] min-h-[40.6px] max-h-[40.6px] w-full`}
            >
              <svg
                className={`${!item.isopened && "rotate-[-90deg]"}`}
                width={9}
                height={7}
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.74998 6.65186L0.499969 0.651856L9 0.651855L4.74998 6.65186Z"
                  fill="white"
                />
              </svg>
              <p>{item.main}</p>
            </button>
            <div
              className={`${
                index == 0 && "border-b border-[#1E2D3D]"
              } ${
                item.isopened
                  ? "max-h-[105px] pt-[22px] pb-[27px]"
                  : "max-h-[0px]"
              } transition-all duration-500 ease-in-out px-[17px]  flex flex-col gap-[8px]`}
            >
              {item?.subFolders?.map((subItem, i) => (
                <button
                  onClick={() => {
                    if (index == 0) {
                      setContent(subItem.content);
                      setLabel(subItem.name);
                    }
                  }}
                  key={i + "sub"}
                  className={`flex gap-[9px] items-center ${
                    label == subItem.name && "text-[#fff]"
                  }`}
                >
                  {subItem.icon}
                  <p title={index == 1 && subItem.name} className="truncate">
                    {subItem.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[39%] w-full border-r border-[#1E2D3D] min-h-[88.62vh]">
        <div className="min-h-[40.6px] max-h-[40.6px] border-b border-[#1E2D3D] w-full ">
          <p className="px-[14.25px] min-h-[40.6px] max-h-[40.6px] w-fit flex items-center border-r border-[#1E2D3D]">
            {label}
          </p>
        </div>
        <div className="flex justify-between min-h-[calc(88.62vh_-_40.6px)]">
          <div className="px-[40.5px] pt-[18.21px]">
            {content?.map((item, index) => (
              <div
                key={index + "about"}
                className="flex items-center gap-[40px]  text-[18px] leading-[150%] "
              >
                <p className="min-w-[22px] text-right">{index + 1}</p>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="pl-[26px] border-l border-t-[10px] border-t-[#607B96] border-l-[#1E2D3D]" />
        </div>
      </div>
      <div className="max-w-[43.48%] w-full  min-h-[88.62vh]">
        <div className="pt-[40.6px] border-b border-[#1E2D3D] w-full " />
        <div className="flex justify-between min-h-[calc(88.62vh_-_40.6px)]">
          <div className="px-[40.5px]">
            <img src="/snippet.png" alt="" className="mt-[17.9px]" />
          </div>
          <div className="pl-[26px] border-l border-t-[10px] border-t-[#607B96] border-l-[#1E2D3D]" />
        </div>
      </div>
    </div>
  );
};

export default Page;
