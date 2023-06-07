import Image from "next/image"
import MyImg from 'public/home/me.jpeg'
import { FaArrowRight } from 'react-icons/fa'
import P1 from "./P1"
import P2 from "./P2"
import AsideText from "./AsideText"

export type AboutProps = {
    className?: string
}

const About = ({ className = '' }: AboutProps) => {

    return (
        <div
            className={`flex flex-col md:flex-row
                md:justify-center md:items-center
                px-4 md:px-8 ${className}`}>
            <div
                className="flex-none mb-16 md:mb-0 
                    md:mr-16 lg:mr-28">
                <AsideText
                    className="-rotate-[10deg]">
                    Backend In
                </AsideText>
                <div
                    className="mb-8 flex flex-col items-center">
                    <Image
                        src={MyImg}
                        height={240}
                        width={240}
                        style={{
                            borderRadius: '9999px',
                            objectFit: 'cover',
                        }} />
                    <div
                        className="flex items-center mt-8">
                        <p
                            className="font-semibold text-4xl
                                md:text-5xl lg:text-6xl mr-4">
                            Rahul Gautam
                        </p>
                        <FaArrowRight
                            className="h-8 w-8 mt-1 md:h-10
                                md:w-10" />
                    </div>
                </div>
                <AsideText
                    className="float-right rotate-[10deg]"
                    colors="bg-sky-600/50 text-sky-900">
                    Frontend Out
                </AsideText>
            </div>
            <article
                className="max-w-lg">
                <P1
                    className="mb-6">
                    Hi, I am Rahul. Fullstack Web Developer From India.
                </P1>
                <P2>
                    A professional developer who likes to 
                    listen, research, prototype, and build so that 
                    you can relax and have a good product at the end.
                </P2>
            </article>
        </div>
    )
}

export default About;