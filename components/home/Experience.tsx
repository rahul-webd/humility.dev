import H1 from "./H1";
import P1 from "./P1";
import P2 from "./P2";
import Stat from "./Stat";

export type ExperienceProps = {
    className?: string
}

const Experience = ({
    className
}: ExperienceProps) => {

    return (
        <div
            className={className}>
            <div>
                <H1>
                    Experience
                </H1>
                <div>
                    <Stat
                        count={2}
                        title="Years of experience" />
                    <Stat
                        count={3}
                        title="Satisfied Clients" />
                </div>
            </div>
            <div>
                <P1>
                    Details
                </P1>
                <P2>
                    Details
                </P2>
            </div>
        </div>
    )
}

export default Experience;