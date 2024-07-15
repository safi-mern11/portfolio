"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="absolute bottom-0 w-full flex justify-between border-t border-[#1E2D3D] min-h-[5.7vh] max-h-[5.7vh]">
      <div className="flex justify-between max-w-[250px] w-full items-center">
        <p className="pl-[22px] whitespace-nowrap">find me in:</p>
        <div className="max-w-[104px] w-full flex items-center border-x border-[#1E2D3D] h-full">
          <button
            onClick={() => router.push("/contact-me")}
            className={`h-full border-r border-r-[#1E2D3D] px-[14px] max-w-[52px] group`}
          >
            <svg
              width={24}
              height={25}
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2808_171)">
                <path
                  d="M22.383 6.15593C21.6196 6.49362 20.81 6.7154 19.981 6.81393C20.8548 6.29136 21.5087 5.46894 21.821 4.49993C21.001 4.98793 20.102 5.32993 19.165 5.51493C18.5356 4.84151 17.7014 4.39489 16.792 4.24451C15.8826 4.09413 14.9489 4.24842 14.1363 4.68338C13.3236 5.11834 12.6774 5.80961 12.2981 6.64972C11.9188 7.48983 11.8277 8.43171 12.039 9.32893C10.3761 9.24558 8.74933 8.81345 7.26429 8.06059C5.77924 7.30773 4.46913 6.25097 3.419 4.95893C3.04729 5.59738 2.85196 6.32315 2.853 7.06193C2.853 8.51193 3.591 9.79293 4.713 10.5429C4.04901 10.522 3.39963 10.3427 2.819 10.0199V10.0719C2.8192 11.0376 3.15337 11.9735 3.76485 12.721C4.37633 13.4684 5.22748 13.9814 6.174 14.1729C5.55761 14.34 4.91131 14.3646 4.284 14.2449C4.55087 15.0762 5.07101 15.8031 5.77159 16.324C6.47218 16.8449 7.31813 17.1337 8.191 17.1499C7.32348 17.8313 6.33018 18.3349 5.26788 18.6321C4.20558 18.9293 3.09513 19.0142 2 18.8819C3.9117 20.1114 6.1371 20.764 8.41 20.7619C16.103 20.7619 20.31 14.3889 20.31 8.86193C20.31 8.68193 20.305 8.49993 20.297 8.32193C21.1159 7.73009 21.8226 6.99695 22.384 6.15693L22.383 6.15593Z"
                  className="group-hover:fill-[#fff] fill-[#607B96] transition-all ease-in-out duration-300"
                />
              </g>
              <defs>
                <clipPath id="clip0_2808_171">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button
            onClick={() => router.push("/contact-me")}
            className={`h-full px-[14px] max-w-[52px] group`}
          >
            <svg
              width={24}
              height={25}
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2808_175)">
                <path
                  d="M14 14H16.5L17.5 10H14V8C14 6.97 14 6 16 6H17.5V2.64C17.174 2.597 15.943 2.5 14.643 2.5C11.928 2.5 10 4.157 10 7.2V10H7V14H10V22.5H14V14Z"
                  className="group-hover:fill-[#fff] fill-[#607B96] transition-all ease-in-out duration-300"
                />
              </g>
              <defs>
                <clipPath id="clip0_2808_175">
                  <rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </div>
      <Link
        href={"https://github.com/safi-mern11"}
        target="_blank"
        className={`h-full border-l group flex items-center gap-[5px] border-l-[#1E2D3D] px-[23px] whitespace-nowrap hover:text-[#fff] transition-all ease-in-out duration-300 min-h-[5.7vh] max-h-[5.7vh]`}
      >
        @safi-mern11
        <svg
          width={25}
          height={25}
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2808_161)">
            <path
              className="group-hover:fill-[#fff] fill-[#607B96] transition-all ease-in-out duration-300"
              d="M12.9766 2.27808C7.45156 2.27808 2.97656 6.75308 2.97656 12.2781C2.97543 14.3774 3.63538 16.4237 4.86278 18.1268C6.09018 19.8298 7.82271 21.1031 9.81456 21.7661C10.3146 21.8531 10.5016 21.5531 10.5016 21.2901C10.5016 21.0531 10.4886 20.2661 10.4886 19.4281C7.97656 19.8911 7.32656 18.8161 7.12656 18.2531C7.01356 17.9651 6.52656 17.0781 6.10156 16.8401C5.75156 16.6531 5.25156 16.1901 6.08856 16.1781C6.87656 16.1651 7.43856 16.9031 7.62656 17.2031C8.52656 18.7151 9.96456 18.2901 10.5386 18.0281C10.6266 17.3781 10.8886 16.9411 11.1766 16.6911C8.95156 16.4411 6.62656 15.5781 6.62656 11.7531C6.62656 10.6651 7.01356 9.76608 7.65156 9.06508C7.55156 8.81508 7.20156 7.79008 7.75156 6.41508C7.75156 6.41508 8.58856 6.15308 10.5016 7.44108C11.3156 7.21514 12.1567 7.10142 13.0016 7.10308C13.8516 7.10308 14.7016 7.21508 15.5016 7.44008C17.4136 6.14008 18.2516 6.41608 18.2516 6.41608C18.8016 7.79108 18.4516 8.81608 18.3516 9.06608C18.9886 9.76608 19.3766 10.6531 19.3766 11.7531C19.3766 15.5911 17.0396 16.4411 14.8146 16.6911C15.1766 17.0031 15.4896 17.6031 15.4896 18.5411C15.4896 19.8781 15.4766 20.9531 15.4766 21.2911C15.4766 21.5531 15.6646 21.8651 16.1646 21.7651C18.1496 21.0949 19.8745 19.8191 21.0965 18.1172C22.3184 16.4154 22.976 14.3732 22.9766 12.2781C22.9766 6.75308 18.5016 2.27808 12.9766 2.27808Z"
            />
          </g>
          <defs>
            <clipPath id="clip0_2808_161">
              <rect
                width={24}
                height={24}
                fill="white"
                transform="translate(0.976562 0.278076)"
              />
            </clipPath>
          </defs>
        </svg>
      </Link>
    </div>
  );
};

export default Footer;
