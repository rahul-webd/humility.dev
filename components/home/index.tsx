import About from "./About";
import Companies from "./Companies";
import Experience from "./Experience";

export type HomeProps = {
    className?: string
}

const Home = ({
    className
}: HomeProps) => {

    return (
        <section
            className={className}>
            <About
                className="mb-24 md:mb-32" />
            <Experience
                className="mb-px" />
            <Companies
                className="mb-24 md:mb-32" />
        </section>
    )
}

export default Home;