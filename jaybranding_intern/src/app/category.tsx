import Image from 'next/image';
import item1ImgSrc from './img/ghe1f.png';
import item2ImgSrc from './img/ghe1.png';
import item3ImgSrc from './img/ghe2.png';
import item4ImgSrc from './img/ghe3.png';
import { GlobeAsiaAustraliaIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
export default function Category() {
    return (
        <div
            className="relative w-full
                        flex flex-col items-center
                        pt-[83px]"> {/*Category */}
            <div
                className=" animate-[appear_2s_ease_0s]
                            relative md:w-[1360px] md:mb-[65px]
                            flex flex-col items-center
                            gap-[8px]
                            max-md:w-[full]
                            max-md:mb-[81px]"> {/*First item */}
                <div
                    className='md:text-[52px]
                                max-md:text-[48px]'>
                    OGAWA
                </div>
                <div
                    className="relative md:w-[848px] 
                            text-[18px] text-stone-400
                            md:line-clamp-2
                            text-center
                            max-md:w-[390px]
                            max-md:line-clamp-4">
                    OGAWA takes pride in creating revolutionary ideas to innovate and exceptional engineering practices to deliver the ultimate rejuvenating experiences.
                </div>
                <Image
                    src={item1ImgSrc}
                    alt="ghế 1"
                    className='relative md:h-[506px] w-auto
                                max-md:h-[389px]'
                    loading='lazy'></Image>
                <GlobeAsiaAustraliaIcon
                    className='absolute md:h-[532px] top-0 -z-10 opacity-[.02]
                                max-md:h-[402px]'></GlobeAsiaAustraliaIcon>
            </div>
            <div className='animate-[appear_2s_ease_0s]
                            flex 
                            max-md:flex-col max-md:items-center'> {/*Second item */}
                <Image
                    src={item2ImgSrc}
                    alt="item2 image"
                    className='
                        md:h-[505px] md:w-auto
                        max-md:w-full max-md:h-auto'
                    loading='lazy'></Image>
                <div
                    className='md:w-[669px] md:h-[403px] pt-[80px]
                            flex flex-col gap-[10px]
                            max-md:items-center
                            max-md:w-full max-md:h-auto max-md:p-[16px]'>
                    <div
                        className='text-[32px] text-nowrap'>
                        MASTER DRIVE SERIES
                    </div>
                    <div
                        className='text-[24px] text-nowrap text-stone-400'>
                        More than A.I
                    </div>
                    <div
                        className='md:text-[20px] md:line-clamp-4
                                    max-md:text-center max-md:line-clamp-5 max-md:text-[18px]'>
                        Discover the Technology of Tomorrow, for the Best Massage Today. Each Master Drive is built to be ‘different’. Engineered with state-of-the-art technology, indulge in the best massage experience that is unique to each individual user.
                    </div>
                    <button
                        className="w-[206px] px-[60px] py-[12px] 
                                        flex gap-[10px] items-center
                                        text-nowrap text-[15px]
                                        bg-white
                                        border-black border
                                        rounded-[100px]">
                        See more
                        <ArrowRightIcon width={20}></ArrowRightIcon>
                    </button>
                </div>
            </div>
            <div className='animate-[appear_2s_ease_0s]
                            flex md:flex-row-reverse
                            max-md:flex-col max-md:items-center'> {/*Thirditem */}
                <Image
                    src={item3ImgSrc}
                    alt="item 3 image"
                    className='
                    md:h-[505px] md:w-auto
                    max-md:w-full max-md:h-auto'
                    loading='lazy'></Image>
                <div
                    className='md:w-[669px] md:h-[403px] pt-[80px]
                    flex flex-col gap-[10px]
                    max-md:items-center
                    max-md:w-full max-md:h-auto max-md:p-[16px]'>
                    <div
                        className='text-[32px] text-nowrap'>
                        FOOT SERIES
                    </div>
                    <div
                        className='text-[24px] text-nowrap text-stone-400'>
                        Safe & Caring
                    </div>
                    <div
                         className='md:text-[20px] md:line-clamp-4
                         max-md:text-center max-md:line-clamp-5 max-md:text-[18px]'>
                        Innovative design and adaptive functionality, get total rejuvenation and maximum massage coverage for your entire legs
                    </div>
                    <button
                        className="w-[206px] px-[60px] py-[12px] 
                                        flex gap-[10px] items-center
                                        text-nowrap text-[15px]
                                        bg-white
                                        border-black border
                                        rounded-[100px]">
                        See more
                        <ArrowRightIcon width={20}></ArrowRightIcon>
                    </button>
                </div>
            </div>
            <div className='animate-[appear_2s_ease_0s]
                            flex 
                            max-md:flex-col max-md:items-center'> {/*4th item */}
                <Image
                    src={item4ImgSrc}
                    alt="item 4 image"
                    className='
                        md:h-[505px] md:w-auto
                        max-md:w-full max-md:h-auto'
                    loading='lazy'></Image>
                <div
                    className='md:w-[669px] md:h-[403px] pt-[80px]
                    flex flex-col gap-[10px]
                    max-md:items-center
                    max-md:w-full max-md:h-auto max-md:p-[16px]'>
                    <div
                        className='text-[32px] text-nowrap'>
                        MOBILE SERIES
                    </div>
                    <div
                        className='text-[24px] text-nowrap text-stone-400'>
                        Excite your journey
                    </div>
                    <div
                        className='md:text-[20px] md:line-clamp-4
                        max-md:text-center max-md:line-clamp-5 max-md:text-[18px]'>
                        Designed specifically to meet the demands of a digital and sedentary lifestyle.
                    </div>
                    <button
                        className="w-[206px] px-[60px] py-[12px] 
                                        flex gap-[10px] items-center
                                        text-nowrap text-[15px]
                                        bg-white
                                        border-black border
                                        rounded-[100px]">
                        See more
                        <ArrowRightIcon width={20}></ArrowRightIcon>
                    </button>
                </div>
            </div>
        </div>
    )
}