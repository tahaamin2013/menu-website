import React from 'react';
import Link from "next/link"
import Image from 'next/image';
const FiverrSellerProfile = () => {
    return (
        <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="h-[150px] bg-gradient-to-b overflow-hidden from-gray-200 to-gray-300 relative">
                <Image
                    src="/fiverr.jpg"
                    width={350}
                    height={360}
                    className='h-full w-[340px] object-cover'
                    alt='Fiverr add Image'
                />
                <div className="absolute inset-x-0 bottom-0 h-[150px] opacity-50 bg-green-950" />
            </div>


            <div className="relative px-4 pb-4">
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 rounded-full bg-gray-300 relative bottom-[55px] border-4 border-white">
                        <div className="w-full h-full rounded-full  flex items-center justify-center bg-green-500 text-white font-bold text-xl">
                            fiverr.
                        </div>
                    </div>
                </div>
                <div className="mt-11 flex flex-col gap-1 text-center">
                    <div>    <h2 className="text-xl font-semibold">Excel Guru Hub</h2>
                        <div className="flex justify-center ">
                            <span className="text-yellow-400">
                                <span className="text-yellow-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 inline-block"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        <path d="M12 15.4V4.6L9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </span>
                                <span className="text-yellow-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 inline-block"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        <path d="M12 15.4V4.6L9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </span>
                                <span className="text-yellow-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 inline-block"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        <path d="M12 15.4V4.6L9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </span>
                                <span className="text-yellow-400">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-6 h-6 inline-block"
                                    >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        <path d="M12 15.4V4.6L9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                </span>

                            </span>
                            <span className="text-yellow-400"><span className="text-yellow-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 h-6 inline-block transform scale-x-[-1]"
                                >
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2v15.27z" />
                                    <path fill="none" d="M0 0h24v24H0z" />
                                </svg>
                            </span>
                            </span>
                        </div></div>
                    <p className="text-gray-600 text-[13px]">Welcome to Excel Guru Hub! With 15+ years of expertise, I provide tailored Excel solutions. Contact me for top-notch services!</p>

                    <Link itemProp='url' target='_blank' href='https://www.fiverr.com/excelguruhub' rel="nofollow" className="mt-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                        Check out my Gigs
                    </Link>

                </div>

            </div>
        </div >
    );
};

export default FiverrSellerProfile;