import Head from "next/head";
import Image from "next/image";
import menuList, { menuListType, menuObjectType } from "./menu";
const imagesat = "/images/01introSectionPage/";
const clients = [
    "client-audiophile.svg",
    "client-databiz.svg",
    "client-maker.svg",
    "client-meet.svg",
];
const RenderMenu = ({ menu }: menuListType) => {
    return (
        <ul className="pl-12">
            {menu.map((menuItem: menuObjectType) => {
                return (
                    <li className="outline outline-black/10">
                        {menuItem.icon && (
                            <img src={`${imagesat + menuItem.icon}`} />
                        )}
                        {menuItem.name}
                        {menuItem.li.length > 0 && (
                            <RenderMenu menu={menuItem.li} />
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

const IntroSectionDropdown = () => {
    return (
        <>
            <Head>
                <title>Intro section with dropdown navigation</title>
            </Head>
            <div>
                <header className="py-6 px-4">
                    <div className="logo">
                        <Image
                            src={`${imagesat}logo.svg`}
                            alt="snap"
                            width={84}
                            height={27}
                        />
                    </div>
                    <div className="menu">
                        <img
                            src={`${imagesat}icon-menu.svg`}
                            alt="menu"
                            width={25}
                            height={25}
                        />
                        <img
                            src={`${imagesat}icon-close-menu.svg`}
                            alt="menu"
                            width={25}
                            height={25}
                        />
                    </div>
                    <nav>
                        <RenderMenu menu={menuList} />
                    </nav>
                    <div>
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </header>
                <main>
                    <div className="left">
                        <h1>Make remote work</h1>
                        <p>
                            Get your team in sync, no matter your location.
                            Streamline processes, create team rituals, and watch
                            productivity soar.
                        </p>
                        <button>Learn more</button>
                        <div className="brands">
                            {clients.map((client) => {
                                return (
                                    <img src={`${imagesat + client}`} alt="" />
                                );
                            })}
                        </div>
                    </div>
                    <div className="right">
                        {/* <div
                            className={`bg-[url('${imagesat}image-hero-mobile.png')] md:bg-[url('${imagesat}image-hero-desktop.png')]  h-32 w-32 bg-no-repeat bg-cover`}
                        >
                            <span className="sr-only">Hero image</span>
                        </div> */}
                        {/* <img
                            src={`${imagesat}image-hero-desktop.png`}   
                            alt=""
                            className="hidden md:block"
                        /> */}
                        {/* <img
                            src={`${imagesat}image-hero-mobile.png`}
                            alt=""
                            className="md:hidden"
                        /> */}
                    </div>
                </main>
            </div>
        </>
    );
};
export default IntroSectionDropdown;
