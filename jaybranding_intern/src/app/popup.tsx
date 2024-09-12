
'use client'
import { XCircleIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import Link from "next/link";
const GithubIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-indigo-600">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    )
}
const LinkedinIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24"
            className="fill-cyan-600">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    )
}

const GmailIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd" clip-rule="evenodd"
            className="fill-rose-600">
            <path d="M22.288 21h-20.576c-.945 0-1.712-.767-1.712-1.712v-13.576c0-.945.767-1.712 1.712-1.712h20.576c.945 0 1.712.767 1.712 1.712v13.576c0 .945-.767 1.712-1.712 1.712zm-10.288-6.086l-9.342-6.483-.02 11.569h18.684v-11.569l-9.322 6.483zm8.869-9.914h-17.789l8.92 6.229s6.252-4.406 8.869-6.229z" />
        </svg>
    )
}
export default function Popup() {
    const [modalOn, setModalOn] = useState(true);
    return (
        <>
            {
                modalOn &&
                <div className="absolute w-full h-dvh
                                flex justify-center items-center">
                    <div className="absolute w-full h-full bg-black opacity-70 top-0">
                    </div> {/*Filter */}
                    <div
                        className="relative bg-white md:p-[40px]
                                    flex flex-col gap-[10px] items-center 
                                    text-blue-800
                                    max-md:py-[40px] max-md:w-full"> {/*Modal */}
                        <div
                            className="absolute top-[5px] right-[5px]"
                            onClick={() => setModalOn(false)} >
                            <XCircleIcon
                                className="stroke-red-600 cursor-pointer"
                                width={40}></XCircleIcon>
                        </div>
                        <strong
                            className="md:text-2xl
                                        max-md:text-lg">
                            I am Lê Minh Đức,
                        </strong>
                        <div
                            className="italic md:text-lg
                                        max-md:text-md">
                            A Web Developer
                        </div>
                        <div
                            className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text
                                        text-transparent md:text-4xl text-center
                                        max-md:text-3xl">
                            WELCOME YOU GUYS AND BEST WISHES!
                        </div>
                        <div
                            className="flex gap-[30px]">
                            <div
                                className="md:text-3xl
                                            max-md:text-2xl">
                                Contact:
                            </div>
                            <div
                                className="flex flex-col gap-[10px]">
                                <Link
                                    className="flex gap-[10px] items-center
                                                text-indigo-900"
                                    href="https://github.com/ductruonghoc"
                                    target="blank">
                                    <GithubIcon></GithubIcon>
                                    Github
                                </Link>
                                <Link
                                    className="flex gap-[10px] items-center
                                                text-cyan-600"
                                    href="www.linkedin.com/in/đức-lê"
                                    target="blank">
                                    <LinkedinIcon />
                                    Linkedin</Link>
                                <Link
                                    className="flex gap-[10px] items-center
                                                text-rose-400"
                                    href="https://mail.google.com/mail/u/0/?fs=1&to=duclefl21@gmail.com&tf=cm"
                                    target="blank">
                                    <GmailIcon />
                                    duclefl21@gmail.com
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}