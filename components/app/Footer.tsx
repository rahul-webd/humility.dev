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
            className={className}>
            <Connect
                className="mb-8 md:mb-16" />
            <Copyright />
        </footer>
    )
}

export default Footer;