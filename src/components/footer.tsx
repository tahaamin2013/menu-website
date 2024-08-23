import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSpotify } from "react-icons/bs";
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer className="w-full border mt-1">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-8 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
            <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
              <Link
                aria-label="Starbucks Home"
                href="/"
                className="flex justify-center items-center w-full lg:w-fit text-2xl gap-4 z-40 font-bold"
              >
                <Image
                  loading="lazy"
                  decoding="async"
                  src="/logo.svg"
                  alt="Starbucks icon"
                  width={120}
                  height={100}
                  className="mt-1"
                ></Image>
              </Link>
              <p className="text-sm pb-4 text-gray-500 lg:max-w-xl text-center lg:text-left">
                Starbucks boasts a varied menu that features espresso, coffee,
                tea, bakery items, and breakfast and lunch options. Besides
                their specialty coffee beverages, they also offer an assortment
                of snacks and baked goods for those looking for a quick treat.
              </p>
              <div className="flex mt-4 space-x-4 justify-center lg:justify-start sm:mt-0 ">
                <Link
                  href="https://open.spotify.com/user/starbucks"
                  className="rounded-full px-3 py-2 bg-primary hover:bg-[#179B74] transition-all duration-400 flex justify-center items-center text-white"
                  target="_blank"
                  aria-label="Starbucks on Spotify"
                >
                  <BsSpotify size={20} />
                </Link>
                <Link
                  href="https://www.facebook.com/Starbucks/"
                  className="rounded-full px-3 py-2 bg-primary hover:bg-[#179B74] transition-all duration-400 flex justify-center items-center text-white"
                  target="_blank"
                  aria-label="Starbucks on Facebook"
                >
                  <FaFacebookF size={18} />
                </Link>
                <Link
                  href="https://www.pinterest.com/starbucks/"
                  className="rounded-full px-3 py-2 bg-primary hover:bg-[#179B74] transition-all duration-400 flex justify-center items-center text-white"
                  target="_blank"
                  aria-label="Starbucks on Pinterest"
                >
                  <FaPinterestP size={18} />
                </Link>
                <Link
                  href="https://www.instagram.com/starbucks/"
                  className="rounded-full px-3 py-2 bg-primary hover:bg-[#179B74] transition-all duration-400 flex justify-center items-center text-white"
                  target="_blank"
                  aria-label="Starbucks on Instagram"
                >
                  <FiInstagram size={20} />
                </Link>
                <Link
                  href="https://www.youtube.com/starbucks"
                  className="rounded-full px-3 py-2 bg-primary hover:bg-[#179B74] transition-all duration-400 flex justify-center items-center text-white"
                  target="_blank"
                  aria-label="Starbucks on YouTube"
                >
                  <GrYoutube size={20} />
                </Link>
              </div>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <span className="text-lg text-gray-900 font-medium mb-4">Menus</span>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-4">
                  <Link
                    href="/"
                    aria-label="Starbucks Menu"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Full Starbucks Menu
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/featured"
                    aria-label="Starbucks Featured"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Featured Menu
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <span className="text-lg text-gray-900 font-medium mb-4">Drinks</span>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-4">
                  <Link
                    href="/hot-coffees"
                    aria-label="Starbucks   "
                    className="text-gray-600 hover:text-gray-900"
                  >
                      
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/cold-coffees"
                    aria-label="Starbucks   "
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Cold Coffees
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/hot-teas"
                    aria-label="Starbucks Hot Teas"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Hot Teas
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/bottled-beverages"
                    aria-label="Starbucks Bottled Beverages"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Bottled Beverages
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/milk-juice-and-more"
                    aria-label="Starbucks Milk, Juice & More"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Milk, Juice & More
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/iced-tea-and-lemonade"
                    aria-label="Starbucks Iced Tea and Lemonade"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Iced Tea and Lemonade
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    aria-label="Starbucks Refreshers® Beverages"
                    href="/starbucks-refreshers-beverages"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Starbucks Refreshers® Beverages
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/frappuccino-blended-beverages"
                    aria-label="Starbucks Frappuccino® Blended Beverages"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Frappuccino® Blended Beverages
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <span className="text-lg text-gray-900 font-medium mb-4">Foods</span>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-4">
                  <Link
                    href="/hot-breakfast"
                    aria-label="Starbucks Hot Breakfast"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Hot Breakfast
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/oatmeal-and-yogurt"
                    aria-label="Starbucks Oatmeal & Yogurt"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Oatmeal & Yogurt
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/bakery"
                    aria-label="Starbucks Bakery"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Bakery
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/lunch"
                    aria-label="Starbucks Lucn"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Lunch
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/snack-and-sweets"
                    aria-label="Starbucks Snacks & Sweets"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Snacks & Sweets
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:mx-auto text-center sm:text-left">
              <span className="text-lg text-gray-900 font-medium mb-4">
                At Home Coffee
              </span>
              <ul className="text-sm transition-all duration-500">
                <li className="mb-4">
                  <Link
                    href="/whole-bean"
                    aria-label="Starbucks Whole Bean"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Whole Bean
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/via-instant"
                    aria-label="Starbucks VIA Instant"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    VIA® Instant
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-7 border-t border-gray-200">
            <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-sm text-center md:text-left text-gray-500 ">
                ©Starbucks Menu With Prices 2024, All rights reserved.
              </span>
              <ul className="flex items-center text-center gap-9 mt-4 lg:mt-0">
                <li>
                  <Link
                    href="/terms-and-conditions"
                    aria-label="Starbucks Terms And Conditions"
                    className="text-sm text-gray-500"
                  >
                    Terms And Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    aria-label="Starbucks Privacy Policy"
                    className="text-sm text-gray-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-sm text-gray-500">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm text-gray-500">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
