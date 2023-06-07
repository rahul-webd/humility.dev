import Connect from "./Connect"
import Copyright from "./Copyright"

export type FooterProps = {
    className?: string
}

const Footer = ({
    className = ''
}: FooterProps) => {

    return (
        <footer
            className={`px-4 md:px-8 ${className}`}>
            <Connect
                className="mb-8 md:mb-24" />
            <Copyright />
        </footer>
    )
}

export default Footer;