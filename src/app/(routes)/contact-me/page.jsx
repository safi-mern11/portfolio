"use client";
import React, { useState } from "react";

const Page = () => {
  const [contactMe, setContactMe] = useState([
    {
      main: "contacts",
      isopened: true,
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
        {contactMe?.map((item, index) => (
          <div key={index + "contactMe"} className="overflow-hidden">
            <button
              onClick={() => {
                setContactMe((prev) =>
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
                item.isopened ? "h-[105px] pt-[22px] pb-[27px]" : "h-0"
              } transition duration-500 ease-in-out px-[17px]  flex flex-col gap-[8px]`}
            >
              {item?.subFolders?.map((subItem, i) => (
                <button
                  key={i + "sub"}
                  className={`flex gap-[9px] items-center `}
                >
                  {subItem.icon}
                  <p title={subItem.name} className="truncate">
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
            _send-email
          </p>
        </div>
        <div className="flex justify-between min-h-[calc(88.62vh_-_40.6px)]">
          <div className="pt-[115px] w-full">
            <form className="flex flex-col gap-[24px] w-full max-w-[372px] mx-auto">
              <div className="flex flex-col gap-[10px]">
                <label>_name:</label>
                <input
                  type="text"
                  className="min-h-[41px] max-h-[41px] rounded-[8px] w-full border border-[#607B96] bg-transparent pl-[15px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label>_email:</label>
                <input
                  type="text"
                  className="min-h-[41px] max-h-[41px] rounded-[8px] w-full border border-[#607B96] bg-transparent pl-[15px] outline-none"
                />
              </div>
              <div className="flex flex-col gap-[10px]">
                <label>message:</label>
                <textarea
                  type="text"
                  className="min-h-[145px] max-h-[145px] rounded-[8px] w-full border border-[#607B96] bg-transparent p-[15px] outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="max-w-[156px] min-h-[45px] max-h-[38px] w-full rounded-[8px] bg-[#1C2B3A] hover:text-[#fff] transition-all ease-in-out duration-300"
              >
                _send-message
              </button>
            </form>
          </div>
          <div className="pl-[26px] border-l border-t-[10px] border-t-[#607B96] border-l-[#1E2D3D]" />
        </div>
      </div>
      <div className="max-w-[43.48%] w-full  min-h-[88.62vh]">
        <div className="pt-[40.6px] border-b border-[#1E2D3D] w-full " />
        <div className="flex justify-between min-h-[calc(88.62vh_-_40.6px)]">
          <div className="mx-auto">
            <img src="/snippet2.png" alt="" className="mt-[115px]" />
          </div>
          <div className="pl-[26px] border-l border-t-[10px] border-t-[#607B96] border-l-[#1E2D3D]" />
        </div>
      </div>
    </div>
  );
};

export default Page;