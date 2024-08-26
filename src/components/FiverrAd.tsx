import React from 'react';
import Link from "next/link"
const FiverrSellerProfile = () => {
    return (
        <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-32 bg-gradient-to-b from-gray-200 to-gray-300"></div>
            <div className="relative px-4 pb-4">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full bg-gray-300 relative bottom-[60px] border-4 border-white">
                        <div className="w-full h-full rounded-full  flex items-center justify-center bg-green-500 text-white font-bold text-xl">
                            fiverr.
                        </div>
                    </div>
                </div>
                <div className="mt-14 flex flex-col gap-1 text-center">
                    <div>    <h2 className="text-xl font-semibold">Excel Guru Hub</h2>
                        <div className="flex justify-center ">
                            <span className="text-yellow-400">★★★★</span>
                            <span className="text-yellow-400">★</span>
                        </div></div>
                    <p className="text-gray-600 text-[13px]">Welcome to Excel Guru Hub with Shahnila Amin! With over 15 years of Excel expertise, I offer tailored solutions for data analysis, spreadsheet design, and VBA programming. Transform your data into actionable insights with my client-centric approach, ensuring efficiency and satisfaction. Let's excel together—contact me for top-notch Excel services!</p>

                    <Link href="https://www.fiverr.com/excelguruhub?up_rollout=true" className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        Check out my Gigs
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default FiverrSellerProfile;