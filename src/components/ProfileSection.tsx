import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileSection = () => {
  return (
    <div className="">
      <div className="relative rounded-2xl border mt-16 mb-32 w-[240px] mr-3 mx-auto mt-24">
        <div className="rounded-2xl overflow-hidden shadow-glow shadow-black/25 bg-white">
          <div className="absolute -mt-20 w-full flex justify-left ml-5">
            <div className="h-32 w-32">
              <Image
                alt="Writer Amin Ahsan Image"
                width={5080}
                height={5000}
                loading="lazy"
                src="/Author.jpg"
                className="rounded-full border-2 border-white shadow-xl object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="px-6 mt-16">
            <span className="font-bold text-3xl  mb-1">Amin Ahsan</span>
            <p className="text-sm  text-slate-800 font-bold">Author</p>
            <p className="text-sm text-justify text-gray-600  pt-3 font-normal">
              Amin Ahsan is a professional accountant and SEO expert with a
              growing passion for writing. With a strong background in finance
              and digital marketing, Amin brings a unique perspective to his
              work. He has recently embarked on a new journey as a writer for
              <Link href="https://www.starbucks-menu-with-prices.net/" target="_blank" className='underline ml-1 font-bold text-green-700'>starbucks-menu-with-prices.net</Link>, where he combines his analytical skills with his
              love for clear, engaging content.
            </p>
            <p className=" text-sm text-justify text-gray-600  pt-3 font-normal mt-2">
              When not crunching numbers or optimizing content, Amin can be
              found exploring local cafes, experimenting with home-brewed
              coffee, and expanding his culinary knowledge.
            </p>
            <div className="w-full gap-4 flex justify-center pt-5 pb-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
