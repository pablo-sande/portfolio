import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.75}
                    stroke="currentColor"
                    className={"w-8 h-8 text-white hover:text-blue-400 " + (isOpen ? 'hidden' : '')}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
            {/* rgb(63 186 205) */}
            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel className="fixed top-0 left-0 h-full w-full flex flex-col justify-center items-center z-10">
                <div className="fixed left-0 top-0 -z-10 h-full w-full">
                    <div className="absolute h-full w-full top-0 z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                    </div>
                </div>

                    <button onClick={() => setIsOpen(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 fixed top-[36px] right-[32px] text-white hover:text-blue-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <Dialog.Title className="text-white text-3xl">
                        Menu
                    </Dialog.Title>

                    <nav className="flex flex-col items-center justify-center space-3">
                        <a
                            href="/#about"
                            className="text-white text-xl mt-6"
                            onClick={() => setIsOpen(false)}
                        >
                            About Me
                        </a>
                        <a
                            href="/#experience"
                            className="text-white text-xl mt-6"
                            onClick={() => setIsOpen(false)}
                        >
                            Experience
                        </a>
                        <a
                            href="/skills"
                            className="text-white text-xl mt-6"
                            onClick={() => setIsOpen(false)}
                        >
                            Skills
                        </a>
                        {/* <a 
                            href="/site"
                            className="text-white text-xl mt-6"
                            onClick={() => setIsOpen(false)}
                        >
                            About this site
                        </a> */}
                        <a
                            href="/contact"
                            className="text-white text-xl mt-6"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                        <a
                            href="cv.pdf"
                            className="text-white text-xl mt-6"
                            onClick={() => setIsOpen(false)}
                            download="PabloSande2024"
                        >
                            Download CV
                        </a>
                    </nav>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}
