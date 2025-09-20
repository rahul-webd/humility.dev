import H1 from "./H1";
import P1 from "./P1";
import P2 from "./P2";
import Stat from "./Stat";

export type ExperienceProps = {
    className?: string
}

const Experience = ({
    className = ''
}: ExperienceProps) => {

    return (
        <div
            className={`flex flex-col md:flex-row
                md:justify-center md:items-center
                bg-amber-200 px-4 py-8 md:px-8 md:py-16 
                ${className}`}>
            <div
                className="flex-none mb-16 md:mb-0 
                    md:mr-16 lg:mr-28">
                <H1
                    className="mb-16 ml-4">
                    Experience
                </H1>
                <div
                    className="flex justify-center">
                    <Stat
                        count={4}
                        title="Years of experience"
                        className="mr-8 md:mr-16" />
                    <Stat
                        count={3}
                        title="Satisfied Clients" />
                </div>
            </div>
            <article
                className="max-w-lg">
                <P1
                    className="mb-8">
                    I enjoy solving problems with clean scalable
                    solutions. I have a genuine passion for web
                    development.
                </P1>
                <P2>
                    For the past four years, I&apos;ve specialized in 
                    building large-scale e-commerce applications and 
                    custom software solutions. My work goes beyond 
                    standard websites; I focus on gaining a deep 
                    understanding of market needs and then executing 
                    a strategic plan to deliver a robust 
                    and effective application.                
                </P2>
            </article>
        </div>
    )
}

export default Experience;