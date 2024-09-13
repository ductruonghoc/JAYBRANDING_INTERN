'use client'
import { ArrowRightIcon } from "@heroicons/react/24/outline"
import { ReactNode, useState } from "react"
export default function ThumbNail() {
    const [selectedThumb, setSelectedThumb] = useState<number>(0);

    return (
        <div
            className="relative w-full md:h-[903px] md:pb-[78px]
                        flex flex-col items-center justify-end gap-[21px]
                        md:bg-stone-300
                        max-md:h-[590px] max-md:bg-stone-600 max-md:pb-[77px]">
            <div
                className="absolute w-[839px] h-[85px] md:top-[446px]
                                flex justify-center items-center
                                max-md:top-[384px]">
                <div className="md:text-[68px] text-nowrap text-white font-thin
                                        max-md:text-[35px]">
                    Live Better And Healthier
                </div>
            </div>
            <button
                className="relative px-[60px] py-[12px] 
                                        flex gap-[10px] items-center
                                        text-nowrap text-[15px]
                                        bg-white
                                        rounded-[100px]">
                Learn more
                <ArrowRightIcon width={20}></ArrowRightIcon>
            </button>
            <div
                className="md:flex gap-[8px]
                                max-md:hidden">
                {
                    Array<ReactNode>(4).fill(<></>).map((_, idx) => {
                        return (

                            <div
                                className={`transform transition ease-linear duration-300
                                            rounded-full
                                            cursor-pointer 
                                            ${idx === selectedThumb ? 
                                                "bg-black border-[7px] p-[2px] border-white" : 
                                                "p-[8px] bg-gray-100"}`}
                                key={idx}
                                onClick={() => setSelectedThumb(idx)}>
                            </div>
                        )
                    })
                }
            </div>
            <div
                className="md:block text-white text-[14px]
                                max-md:hidden">
                SCROLL DOWN
            </div>
        </div>
    )
}