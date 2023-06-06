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
            <About />
            <Experience />
            <Companies />
        </section>
    )
}

export default Home;