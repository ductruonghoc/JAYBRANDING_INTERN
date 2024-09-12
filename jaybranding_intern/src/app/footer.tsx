import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

const GOVMark = "https://dangkywebvoibocongthuong.com/wp-content/uploads/2021/11/logo-da-thong-bao-bo-cong-thuong.png"

interface Item {
    Parent: String,
    Child: Array<String>
};

interface Items extends Array<Item> { }; //interface for array of list

const items: Items = [
    {
        Parent: "PRODUCTS",
        Child: [
            "Message Chairs",
            "Foot Massager",
            "Sport Series",
            "Mobile Series",
            "Handy Massage",
            "Beauty Series",
            "Home Series"
        ]
    },
    {
        Parent: "SHOP",
        Child: [
            "Our Showroom",
            "Shop Online"
        ]
    },
    {
        Parent: "PROMOTION",
        Child: [
            "Monthly Promo",
            "Experiential Program"
        ]
    },
    {
        Parent: "FAQ",
        Child: [
            "Payments",
            "Terms & Conditions",
            "Privacy Policy",
            "Trade in Policy"
        ]
    },
]
export default function Footer() {
    return (
        <div
            className="relative w-full md:p-[49px]
                        flex md:gap-[128px] justify-center
                        bg-black text-slate-400
                        max-md:flex-col
                        max-md:pt-[20px] max-md:pb-[49px] max-md:divide-y max-md:divide-gray-700
                        ">
            <div
                className="relative
                flex flex-col gap-[10px]
                max-md:w-full max-md:cursor-pointer"> {/*Products */}
                <div
                    className="flex md:gap-[10px]
                                max-md:p-[16px] max-md:w-full max-md:justify-between">
                    <strong
                        className="md:text-[24px]
                                    max-md:text-[20px]">
                        {items[0].Parent}
                    </strong>
                    <ChevronDownIcon
                        className="md:hidden"
                        width={22}
                    />
                </div>
                {
                    items[0].Child.map((_, idx) => {
                        return (
                            <div
                                key={idx}
                                className="flex gap-[10px] items-center cursor-pointer
                                            max-md:hidden">
                                <div>
                                    <ChevronRightIcon
                                        className="h-[14px] stroke-slate-400" />
                                </div>
                                <div
                                    className="text-[18px] text-nowrap">
                                    {_}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div
                className="relative
                            flex flex-col md:gap-[28px]
                            max-md:w-full max-md:divide-y max-md:divide-gray-700">
                <div
                    className="
                                flex flex-col gap-[10px]
                                max-md:w-full max-md:cursor-pointer"> {/*SHOP */}
                    <div
                        className="flex md:gap-[10px]
                                max-md:p-[16px] max-md:w-full max-md:justify-between">
                        <strong
                            className="md:text-[24px]
                                    max-md:text-[20px]">
                            {items[1].Parent}
                        </strong>
                        <ChevronDownIcon
                            className="md:hidden"
                            width={22}
                        />
                    </div>
                    {
                        items[1].Child.map((_, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="flex gap-[10px] items-center cursor-pointer
                                                max-md:hidden">
                                    <div>
                                        <ChevronRightIcon
                                            className="h-[14px] stroke-slate-400" />
                                    </div>
                                    <div
                                        className="text-[18px] text-nowrap">
                                        {_}
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div
                    className="
                                flex flex-col gap-[10px]
                                max-md:w-full max-md:cursor-pointer"> {/*Prômtotion */}
                    <div
                        className="flex md:gap-[10px]
                                max-md:p-[16px] max-md:w-full max-md:justify-between">
                        <strong
                            className="md:text-[24px]
                                    max-md:text-[20px]">
                            {items[2].Parent}
                        </strong>
                        <ChevronDownIcon
                            className="md:hidden"
                            width={22}
                        />
                    </div>
                    {
                        items[2].Child.map((_, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className="flex gap-[10px] items-center cursor-pointer
                                                max-md:hidden">
                                    <div>
                                        <ChevronRightIcon
                                            className="h-[14px] stroke-slate-400" />
                                    </div>
                                    <div
                                        className="text-[18px] text-nowrap">
                                        {_}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div
                className="relative
                flex flex-col gap-[10px]
                max-md:w-full"> {/*Faq */}
                <div
                    className="flex md:gap-[10px]
                               max-md:cursor-pointer max-md:p-[16px] max-md:w-full max-md:justify-between">
                    <strong
                        className="md:text-[24px]
                                    max-md:text-[20px]">
                        {items[3].Parent}
                    </strong>
                    <ChevronDownIcon
                        className="md:hidden"
                        width={22}
                    />
                </div>
                {
                    items[3].Child.map((_, idx) => {
                        return (
                            <div
                                key={idx}
                                className="flex gap-[10px] items-center cursor-pointer
                                            max-md:hidden">
                                <div>
                                    <ChevronRightIcon
                                        className="h-[14px] stroke-slate-400" />
                                </div>
                                <div
                                    className="text-[18px] text-nowrap">
                                    {_}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div
                className="pb-[20px] flex flex-col-reverse
                            max-md:pt-[20px] max-md:items-center">
                <Image
                    src={GOVMark}
                    alt="Bộ công thương đã xác nhận"
                    width={200}
                    height={76} />
            </div>
            <div
                className="absolute w-full py-[10px] bottom-0
                            text-center text-[14px]
                            bg-slate-700"
            >
                Copyright © 2022 Ogawa. All right reserved.
            </div>
        </div>
    )
}