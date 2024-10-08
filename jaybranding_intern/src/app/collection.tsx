'use client'
import Image, { StaticImageData } from "next/image";
import img1Src from "./img/ghe1f.png";
import img2Src from "./img/ghe4.png";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const itemImgSrc: Array<StaticImageData> = [
    img1Src,
    img2Src,
    img2Src
]

export default function Collection() {
    const [currentItem, setCurrentItem] = useState<number>(0);

    const MoveSliderRight = () => {
        if (currentItem + 1 === itemImgSrc.length) //out of bound
        {
            return setCurrentItem(0);
        }
        return setCurrentItem(currentItem + 1);
    }

    const MoveSliderLeft = () => {
        if (currentItem === 0) //out of bound
        {
            return setCurrentItem(itemImgSrc.length - 1);
        }
        return setCurrentItem(currentItem - 1);
    }

    return (
        <div
            className="w-full mb-[40px]
                    flex flex-col gap-[40px] items-center">
            <div className="text-[52px]">
                Our Collection
            </div>
            <div
                className="flex gap-[20px] max-md:hidden">
                {itemImgSrc.map((_, idx) => (<div
                    key={idx}
                    className="
                                    relative w-[361px] h-[320px] rounded-[12px] 
                                    bg-gradient-to-b from-gray-400 to-white
                                    overflow-hidden">
                    <div
                        className="relative w-full h-full bg-gradient-to-b from-gray-400 to-white z-[1] hover:-z-[1]">
                        <Image
                            src={_}
                            alt="item2"
                            loading="lazy"
                            className="relative object-cover w-full h-full"></Image>
                    </div>
                    <div
                        className="     transform transition ease-linear delay-50 duration-300
                                        absolute w-full h-full top-0 z-0 hover:z-[2]
                                        flex flex-col items-center justify-center gap-[10px]
                                        text-white bg-black 
                                        hover:opacity-70 opacity-30
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
                </div>
                ))}
            </div>
            <div
                className="max-md:flex justify-center md:hidden">
                {
                    itemImgSrc.map((_, idx) => (
                        <div key={idx}>
                            {idx === currentItem &&
                                <div
                                    
                                    className="w-[383px]">
                                    <div
                                        className="animate-[appear_2s_ease_0s] 
                                                relative w-full h-[320px] rounded-[12px] 
                                                flex items-center
                                                bg-gradient-to-b from-gray-400 to-white
                                                overflow-hidden">
                                        <Image
                                            src={_}
                                            alt="item2"
                                            loading="lazy"
                                            className="relative object-cover"></Image>
                                        <button
                                            className="absolute z-10 left-[10px] rounded-full w-[60px] h-[60px]
                                                        bg-white opacity-60
                                                        flex justify-center items-center">
                                            <ArrowLeftIcon
                                                className="cursor-pointer"
                                                onClick={() => MoveSliderLeft()}
                                                width={32}></ArrowLeftIcon>
                                        </button>
                                        <button
                                            className="absolute z-10 right-[10px] rounded-full w-[60px] h-[60px]
                                                        bg-white opacity-60
                                                        flex justify-center items-center">
                                            <ArrowRightIcon
                                                className="cursor-pointer"
                                                onClick={() => MoveSliderRight()}
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
                            }
                        </div>
                    )
                    )
                }
            </div>
        </div>);
}