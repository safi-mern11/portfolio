import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  justify-between items-center max-w-[65%] w-[100%] mx-auto min-h-[88.62vh]">
      <div className="max-w-[551px] w-full flex flex-col gap-[81px] " >
      <div>
      <p className="text-[18px] text-[#E5E9F0] leading-[24px]">Hi all. I am</p>
      <h1 className="text-[62px] text-[#E5E9F0] leading-[81px]">
        M-Safiullah
      </h1>
      <p className="text-[32px] text-[#4D5BCE] leading-[42px]"> {"> MERN developer"}</p>
      </div>
      <div>
         <p>// skilled in web developer</p>
         <p>// you can also see it on my Github page</p>
         <p><span className="text-[#4D5BCE]">const</span> <span className="text-[#43D9AD]">githubLink</span> = <span className="text-[#E99287] ">“https://github.com/safi-mern11”</span></p>
      </div>
      </div>
      <img src="/hero.png" alt="" />
    </div>
  );
}
