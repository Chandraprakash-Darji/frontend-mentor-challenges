import Head from "next/head";
import { useEffect } from "react";
import DarkModeButton from "../Components/DarkModeButton";
import HeroSection from "../Components/Hero";
import NavBar from "../Components/Navbar";
import Project from "../Components/Project";

const Home = () => {
    useEffect(() => {
        if (
            localStorage.getItem("theme") === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    return (
        <div className="gradient-bg-welcome-light gradient-bg-welcome-dark min-h-screen text-gray-900 dark:text-gray-50 relative font-sans">
            <Head>
                <title>Frontend Mentor Project Showcase</title>
            </Head>
            <NavBar />
            <HeroSection />
            <DarkModeButton />
            <Project />
        </div>
    );
};

export default Home;
