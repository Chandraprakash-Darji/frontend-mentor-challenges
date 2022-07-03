import Link from "next/link";

const Project = () => {
    return (
        <section id="project-section" className="my-5">
            <h2 className="text-center text-3xl sm:text-5xl font-PlayFairDisplay font-normal tracking-wide">
                All Frontend Mentor Challenges
            </h2>
            <div>
                <Link href="/projects/01introSectionPage">
                    <a>01 Intro section with dropdown navigation solution</a>
                </Link>
            </div>
        </section>
    );
};

export default Project;
