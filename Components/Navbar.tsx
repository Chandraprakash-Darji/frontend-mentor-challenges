import Image from "next/image";
import { useState } from "react";

const avatar = "https://avatars.githubusercontent.com/u/93640141?v=4";

const NavBar = () => {
    const [userState, setUserState] = useState(false);
    const [navState, setNavState] = useState(false);
    const [backdropState, setbackdropState] = useState(false);
    const userMenu = [
        {
            name: "LinkedIn",
            a: "https://www.linkedin.com/in/chandra-prakash-6065b2224/",
        },
        { name: "GitHub", a: "https://github.com/Chandraprakash-Darji" },
        { name: "Twitter", a: "https://twitter.com/chandra_7852" },
        { name: "Mail me", a: "mailto:prakashchandra3786@gmail.com" },
    ];
    const mainMenu = [
        { name: "Home", a: "#home" },
        { name: "Projects", a: "#project-section" },
        { name: "About Me", a: "#aboutMe" },
    ];
    const userMenuClick = () => {
        setNavState(false);
        setUserState((prev) => {
            setbackdropState(!prev);
            return !prev;
        });
    };
    const navMenuClick = () => {
        setUserState(false);
        setNavState((prev) => {
            setbackdropState(!prev);
            return !prev;
        });
    };
    const backdropClick = () => {
        setNavState(false);
        setUserState(false);
        setbackdropState(false);
    };
    return (
        <>
            <nav className="border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 backdrop-blur bg-white/75 dark:bg-slate-900/75 fixed w-screen z-50">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="#" className="flex items-center">
                        <Image
                            src="/c.png"
                            className="mr-3 h-6 sm:h-9"
                            alt="C logo"
                            width={24}
                            height={24}
                        />
                        <span className="self-center text-sm md:text-xl font-semibold whitespace-nowrap dark:text-gray-50">
                            ChandraPrakash
                        </span>
                    </a>

                    <div className="flex items-center md:order-2">
                        <button
                            type="button"
                            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                            id="user-menu-button"
                            onClick={userMenuClick}
                        >
                            <span className="sr-only">Open user menu</span>
                            <Image
                                className="w-8 h-8 rounded-full"
                                src={avatar}
                                alt="Chandra Prakash Profile"
                                width={32}
                                height={32}
                            />
                        </button>

                        <div
                            className={`absolute ${
                                userState ? "" : "hidden"
                            } z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 top-1/2 left-1/2 -translate-x-1/2 translate-y-5 md:top-0 md:left-auto  md:-translate-x-1/2 md:translate-y-10`}
                            id="dropdown"
                        >
                            <div className="py-3 px-4">
                                <span className="block text-sm text-gray-900 dark:text-white">
                                    Darji ChandraPrakash
                                </span>
                                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                                    prakashchandra3786@gmail.com
                                </span>
                            </div>
                            <ul className="py-1" aria-labelledby="dropdown">
                                {Array.from(userMenu).map((menuItem, i) => {
                                    return (
                                        <li key={`${menuItem.name}${i}`}>
                                            <a
                                                href={menuItem.a}
                                                target={"_blank"}
                                                rel={"noreferrer"}
                                                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                                            >
                                                {menuItem.name}
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <button
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            onClick={navMenuClick}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`${
                            navState ? "" : "hidden"
                        } justify-between items-center w-full md:flex md:w-auto md:order-1`}
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            {Array.from(mainMenu).map((menuItem, i) => {
                                return (
                                    <li key={`${menuItem.name}${i}`}>
                                        <a
                                            href={menuItem.a}
                                            className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                        >
                                            {menuItem.name}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
            <div
                className={`backdrop z-40 ${backdropState ? "" : "hidden"}`}
                onClick={backdropClick}
            ></div>
        </>
    );
};

export default NavBar;
