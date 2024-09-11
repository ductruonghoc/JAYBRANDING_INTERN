'use client'
import Image from "next/image"
import { MagnifyingGlassIcon, ShoppingBagIcon, Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const navTitles: Array<string> = [
    "BỘ SƯU TẬP",
    "VỀ CHÚNG TÔI",
    "MUA SẮM",
    "TIN TỨC",
    "CỬA HÀNG",
    "TUYỂN DỤNG",
    "LIÊN HỆ"]
const owagaLogoSrc: string = "https://ogawaworld.net.au/wp-content/uploads/2022/08/cropped-LOGO_OGAWA_HORIZONTAL-01-e1669929594688-1024x362.png";
export default function Header() {
    const [activeNav, setActiveNav] = useState(0);

    return (
        <div
            className="w-full md:h-[61px]
                        flex justify-center items-center md:gap-[120px]
                        max-md:px-3 max-md:justify-between max-md:h-[92px]">
            <Image
                src={owagaLogoSrc}
                alt="owaga logo"
                width="147"
                height="52"
                loading="lazy"></Image> {/*Logo */}
            <div
                className="h-full 
                            md:flex gap-[40px]
                            font-thin text-base
                            max-md: hidden">
                {navTitles.map((title, idx) => {
                    return (
                        <div
                            className={
                                `h-full
                                flex items-center
                                cursor-pointer
                                text-nowrap
                                ${idx === activeNav && "border-b-4 border-black"}`
                            }
                            onClick={() => setActiveNav(idx)}
                            key={idx}>
                            {title}
                        </div>
                    )
                })}
            </div> {/*Navigator */}
            <div
                className="md:flex gap-[24px]
                            max-md:hidden">
                <div
                    className="flex gap-[12px]">
                    <div
                        className="cursor-pointer">VIN</div>
                    <div>|</div>
                    <div
                        className="cursor-pointer">ENG</div>{/*Language Switch */}
                </div>
                <MagnifyingGlassIcon
                    className="cursor-pointer"
                    width={24}></MagnifyingGlassIcon>
                <ShoppingBagIcon
                    className="cursor-pointer"
                    width={24}></ShoppingBagIcon>
            </div> {/*Utility */}
            <div
                className="md:hidden
                            max-md:block">
                <Bars3BottomLeftIcon
                    width={58}
                    className="cursor-pointer">
                </Bars3BottomLeftIcon>
            </div> {/*Mobile hamburgerbutton */}
        </div >
    )
}