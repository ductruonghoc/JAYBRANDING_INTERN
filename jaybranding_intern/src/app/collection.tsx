'use client'
import Image from "next/image";
import img1Src from "./img/ghe1f.png"
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
export default function Collection() {
    const [hoverItem, setHoverItem] = useState(-1);
    return (
        <div
            className="w-full mb-[40px]
                    flex flex-col gap-[40px] items-center">
            <div className="text-[52px]">
                Our Collection
            </div>
            <div
                className="flex gap-[20px] max-md:hidden">
                <div
                    className="relative w-[361px] h-[320px] rounded-[12px] 
                                    bg-gradient-to-b from-gray-400 to-white
                                    overflow-hidden"
                    onMouseEnter={() => setHoverItem(1)}
                    onMouseLeave={() => setHoverItem(-1)}>
                    <Image
                        src={img1Src}
                        alt="item2"
                        loading="lazy"
                        className="relative w-full"></Image>
                    {
                        hoverItem === 1 &&
                        <div
                            className="absolute w-full h-full top-0 z-10
                                        flex flex-col items-center justify-center gap-[10px]
                                        text-white bg-black 
                                        opacity-70
                                        ">
                            <div
                                className="text-[52px]">AI</div>
                            <div
                                className="text-[24px]">
                                VIEW ALL COLLECTIONS
                            </div>
                            <button
                                className="relative px-[60px] py-[12px] 
                                        flex gap-[10px] items-center
                                        text-nowrap text-[15px] text-black
                                        bg-white
                                        rounded-[100px]">
                                Discover More
                                <ArrowRightIcon width={20}></ArrowRightIcon>
                            </button>
                        </div>
                    }
                </div>
                <div
                    className="relative w-[361px] h-[320px] rounded-[12px] 
                                    bg-gradient-to-b from-gray-400 to-white
                                    overflow-hidden"
                    onMouseEnter={() => setHoverItem(2)}
                    onMouseLeave={() => setHoverItem(-1)}>
                    <Image
                        src={img1Src}
                        alt="item1"
                        loading="lazy"
                        className="relative w-full"></Image>
                    {
                        hoverItem === 2 &&
                        <div
                            className="absolute w-full h-full top-0 z-10
                                        flex flex-col items-center justify-center gap-[10px]
                                        text-white bg-black 
                                        opacity-70
                                        ">
                            <div
                                className="text-[52px]">AI</div>
                            <div
                                className="text-[24px]">
                                VIEW ALL COLLECTIONS
                            </div>
                            <button
                                className="relative px-[60px] py-[12px] 
                                        flex gap-[10px] items-center
                                        text-nowrap text-[15px] text-black
                                        bg-white
                                        rounded-[100px]">
                                Discover More
                                <ArrowRightIcon width={20}></ArrowRightIcon>
                            </button>
                        </div>
                    }
                </div>
                <div
                    className="relative w-[361px] h-[320px] rounded-[12px] 
                                    bg-gradient-to-b from-gray-400 to-white
                                    overflow-hidden"
                    onMouseEnter={() => setHoverItem(3)}
                    onMouseLeave={() => setHoverItem(-1)}>
                    <Image
                        src={img1Src}
                        alt="item1"
                        loading="lazy"
                        className="relative w-full"></Image>
                    {
                        hoverItem === 3 &&
                        <div
                            className="absolute w-full h-full top-0 z-10
                                        flex flex-col items-center justify-center gap-[10px]
                                        text-white bg-black 
                                        opacity-70
                                        ">
                            <div
                                className="text-[52px]">AI</div>
                            <div
                                className="text-[24px]">
                                VIEW ALL COLLECTIONS
                            </div>
                            <button
                                className="relative px-[60px] py-[12px] 
                                        flex gap-[10px] items-center
                                        text-nowrap text-[15px] text-black
                                        bg-white
                                        rounded-[100px]">
                                Discover More
                                <ArrowRightIcon width={20}></ArrowRightIcon>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div
                className="max-md:flex justify-center md:hidden">
                <div
                    className="w-[383px]">
                    <div
                        className="relative w-full h-[320px] rounded-[12px] 
                                    flex items-center
                                    bg-gradient-to-b from-gray-400 to-white
                                    overflow-hidden">
                        <Image
                            src={img1Src}
                            alt="item2"
                            loading="lazy"
                            className="relative w-full"></Image>
                        <button
                            className="absolute z-10 left-[10px] rounded-full w-[60px] h-[60px]
                                        bg-white opacity-60
                                        flex justify-center items-center">
                            <ArrowLeftIcon
                                width={32}></ArrowLeftIcon>
                        </button>
                        <button
                            className="absolute z-10 right-[10px] rounded-full w-[60px] h-[60px]
                                        bg-white opacity-60
                                        flex justify-center items-center">
                            <ArrowRightIcon
                                width={32}></ArrowRightIcon>
                        </button>
                    </div>
                    <div 
                        className="w-full h-[120px]
                                flex flex-col justify-center items-center">
                        <div 
                            className="text-[48px]">
                            AI
                        </div>
                        <div
                            className="text-[16px]">
                            VIEW ALL COLLECTIONS
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}