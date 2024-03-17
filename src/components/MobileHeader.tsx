import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import '../styles/styles.scss'

export const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(false);

    return (
        <>
            <div 
                className="box w-8 h-8 text-white z-30" 
                onClick={() => {
                    setIsOpen(!isOpen); 
                    setIsActive(!isActive);
                }}
            >
                <div className={"btn w-8 h-8 " + (isActive ? 'active' : 'not-active')}>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                    <span className="menu-icon"></span>
                </div>
            </div>

            {isOpen && (
                <div className="fixed left-0 h-full top-0 w-full flex flex-col justify-center items-center z-10 menu-in">
                    <div className="fixed left-0 -z-10 h-full top-0 w-full">
                        <div className="absolute h-full top-0 w-full z-[-2] bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
                        </div>
                    </div>


                    <div className="text-white text-3xl">
                        Menu
                    </div>

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
                </div>
            )}
        </>
    )
}