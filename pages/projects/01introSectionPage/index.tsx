import Head from "next/head";
import Image from "next/image";
import menuList, {
    menuListType,
    menuObjectType,
} from "../../../public/data/01introSectionPage/menu";
import styles from "./01introSectionPage.module.css";
import { useState } from "react";
const imagesat = "/images/01introSectionPage/";
const clients = [
    "client-databiz.svg",
    "client-audiophile.svg",
    "client-meet.svg",
    "client-maker.svg",
];
interface RenderMenuPropType extends menuListType {
    flex: boolean;
}
const RenderMenu = ({ menu, flex }: RenderMenuPropType) => {
    return (
        <ul
            className={`${
                flex
                    ? "flex flex-col md:flex-row relative gap-0 md:gap-10 items-start"
                    : "relative md:absolute md:top-10 w-max flex flex-col gap-3 md:left-1/2 md:-translate-x-1/2 bg-gray-50 md:border md:border-gray-600/10 md:rounded-2xl md:shadow-2xl md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 z-10 max-h-0 overflow-hidden md:max-h-max md:overflow-y-visible md:p-6 md:pt-6"
            }`}
            onClick={function (e) {
                if (!flex) return;
                let ul = (e.target as HTMLUListElement)
                    .closest("li")
                    ?.querySelector("ul") as HTMLUListElement;
                if (!ul) return;
                let toggleIconEl = (e.target as HTMLUListElement)
                    .closest("li")
                    ?.querySelector(".toggleIcon");
                if (ul.style.maxHeight) {
                    ul.setAttribute("style", "null");
                    ul?.classList.remove(styles.active);
                    toggleIconEl?.classList.remove(styles.toggleActive);
                } else {
                    ul.style.maxHeight = ul.scrollHeight + 48 + "px";
                    ul?.classList.add(styles.active);
                    toggleIconEl?.classList.add(styles.toggleActive);
                }
            }}
        >
            {menu.map((menuItem: menuObjectType, i) => {
                return (
                    <li
                        className={`flex items-start md:items-center ${
                            menuItem.iconInLeft
                                ? "bg-[hsl(0_0%_98%)]"
                                : "group flex-col relative py-3"
                        } `}
                        key={menuItem.name + i}
                    >
                        <div
                            className={`flex items-center  ${
                                menuItem.iconInLeft ? "gap-2" : "gap-4"
                            }`}
                        >
                            {menuItem.icon && menuItem.iconInLeft && (
                                <Image
                                    src={`${imagesat + menuItem.icon}`}
                                    height={menuItem.iconInLeft ? 18 : 7}
                                    width={menuItem.iconInLeft ? 18 : 10}
                                    alt={menuItem.icon}
                                />
                            )}
                            <span className="hover:text-[hsl(0_0%_8%)] cursor-pointer">
                                {menuItem.name}
                            </span>
                            {menuItem.icon && !menuItem.iconInLeft && (
                                <Image
                                    src={`${imagesat + menuItem.icon}`}
                                    height={menuItem.iconInLeft ? 18 : 7}
                                    width={menuItem.iconInLeft ? 18 : 10}
                                    alt={menuItem.icon}
                                    className={
                                        menuItem.iconInLeft
                                            ? ""
                                            : "toggleIcon rotate-0 md:group-hover:rotate-180 transition-all duration-500"
                                    }
                                />
                            )}
                        </div>
                        {menuItem.li.length > 0 && (
                            <RenderMenu menu={menuItem.li} flex={false} />
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

const IntroSectionDropdown = () => {
    const [mobilemenu, setMobilemenu] = useState(false);
    return (
        <>
            <Head>
                <title>Intro section with dropdown navigation</title>
                <link
                    href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="font-['Epilogue',sans-serif] min-h-screen overflow-x-hidden">
                <header className="px-8 p-6 flex w-screen justify-between items-center text-[hsl(0_0%_41%)] select-none fixed bg-[hsl(0_0%_98%)]">
                    <Image
                        src={`${imagesat}logo.svg`}
                        alt="snap"
                        width={84}
                        height={27}
                    />
                    <button
                        className="z-50 absolute top-6 right-6 md:hidden"
                        onClick={() => setMobilemenu((prev) => !prev)}
                    >
                        {mobilemenu ? (
                            <Image
                                src={`${imagesat}icon-close-menu.svg`}
                                alt="menu"
                                width={25}
                                height={25}
                            />
                        ) : (
                            <Image
                                src={`${imagesat}icon-menu.svg`}
                                alt="menu"
                                width={25}
                                height={25}
                            />
                        )}
                        <span className="sr-only">Menu</span>
                    </button>
                    <div
                        className={`md:w-full flex justify-between bg-[hsl(0_0%_8%)] bg-opacity-70 backdrop-blur absolute w-screen min-h-screen top-0 left-0 transition-all duration-300 ${
                            mobilemenu
                                ? "opacity-100 visible"
                                : "invisible opacity-0"
                        } md:hidden`}
                        onClick={() => setMobilemenu(false)}
                    ></div>
                    <div
                        className={`flex flex-col md:flex-row md:justify-between absolute h-screen overflow-y-scroll md:overflow-y-visible top-0  w-[75%] shadow-xl shadow-black/40 px-8 py-16 md:relative md:h-[1rem] md:shadow-none md:w-full bg-[hsl(0_0%_98%)] md:py-0 md:px-0 transition-all duration-500 right-0 ${
                            mobilemenu ? "translate-x-0" : "translate-x-full"
                        } md:right-auto md:translate-x-0 md:items-center`}
                    >
                        <nav className="md:pl-14 mr-auto">
                            <RenderMenu menu={menuList} flex={true} />
                        </nav>
                        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-10 md:mt-0">
                            <button className="hover:text-[hsl(0_0%_8%)]">
                                Login
                            </button>
                            <button className="border-2 border-[hsl(0_0%_41%)] px-6 py-2 rounded-xl hover:text-[hsl(0_0%_8%)] hover:border-[hsl(0_0%_8%)]">
                                Register
                            </button>
                        </div>
                    </div>
                </header>
                <main className="mx-auto flex min-h-screen xl:p-10 p-20 pt-32 px-10 lg:px-[9rem] xl:px-52 2xl:px-56 gap-10 xl:gap-[3rem] 2xl:gap-48 justify-center items-center flex-col-reverse md:flex-row text-center md:text-left">
                    <div className="flex-[1_0_0%]">
                        <h1 className="text-6xl 2xl:text-8xl font-bold my-12">
                            Make remote work
                        </h1>
                        <p className="text-[18px] mb-16">
                            Get your team in sync, no matter your location.{" "}
                            <br />
                            Streamline processes, create team rituals, and{" "}
                            <br /> watch productivity soar.
                        </p>
                        <button className="bg-[hsl(0_0%_8%)] border-2 border-[hsl(0_0%_8%)] text-[hsl(0_0%_98%)] px-7 py-3 rounded-xl hover:bg-[hsl(0_0%_98%)] hover:text-[hsl(0_0%_8%)] transition-all duration-500">
                            Learn more
                        </button>
                        <div className="mt-16 xl:mt-24 flex gap-8 xl:gap-14 flex-wrap items-center justify-center md:justify-start">
                            {clients.map((client, i) => {
                                return (
                                    <div className="relative w-28 h-12"
                                        key={client + i}
                                    >
                                        <Image
                                            src={imagesat + client}
                                            alt=""
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-screen h-[23rem] sm:h-[34rem] md:w-[24rem] xl:h-[36rem] xl:w-[27rem] 2xl:h-[44rem] 2xl:w-[33rem]">
                        <div
                            className={`${styles.heroImg} h-full w-full bg-no-repeat bg-cover`}
                        >
                            <span className="sr-only">Hero image</span>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};
export default IntroSectionDropdown;
