import Image from "next/image"
import MyImg from 'public/home/me.jpeg'
import { FaArrowRight } from 'react-icons/fa'
import P1 from "./P1"
import P2 from "./P2"

export type AboutProps = {
    className?: string
}

const About = ({ className }: AboutProps) => {

    return (
        <div
            className={className}>
            <div>
                <p>Plug In Backend</p>
                <Image
                    src={MyImg}
                    height={240}
                    width={240} />
                <div>
                    <p>Rahul Gautam</p>
                    <FaArrowRight
                        className="h-5 w-5" />
                </div>
                <p>Switch On The Frontend</p>
            </div>
            <article>
                <P1>
                    Details
                </P1>
                <P2>
                    Details
                </P2>
            </article>
        </div>
    )
}

export default About;