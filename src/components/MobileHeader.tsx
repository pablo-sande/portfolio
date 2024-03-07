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
                    className="w-8 h-8 text-white hover:text-blue-400"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                <Dialog.Panel className="fixed top-0 left-0 h-screen w-screen bg-white flex flex-col justify-center items-center">
                    <button onClick={() => setIsOpen(false)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-8 h-8 fixed top-[36px] right-[32px] text-black hover:text-blue-400"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18 18 6M6 6l12 12"
                            />
                        </svg>
                    </button>

                    <Dialog.Title className="text-black text-3xl">
                        Menu
                    </Dialog.Title>

                    <div className="flex flex-col items-center space-3">
                        <a
                            href="/about"
                            className="text-black text-xl hover:text-blue-400 mt-6"
                        >
                            About me
                        </a>
                        <a
                            href="/skills"
                            className="text-black text-xl hover:text-blue-400 mt-6"
                        >
                            Skills
                        </a>
                        <a
                            href="/contact"
                            className="text-black text-xl hover:text-blue-400 mt-6"
                        >
                            Contact
                        </a>
                        <a
                            href="/cv"
                            className="text-black text-xl hover:text-blue-400 mt-6"
                        >
                            Download CV
                        </a>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </>
    )
}
