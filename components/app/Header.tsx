import Link from "next/link";
import Nav from "./Nav";
import Logo from "./Logo";

export type HeaderProps = {
    className?: string
}

const Header = ({
    className = ''
}: HeaderProps) => {

    return (
        <header
            className={`flex items-center justify-center ${className}`}>
            <Nav
                className="mr-8 md:mr-32" />
            <Logo />
        </header>
    )
}

export default Header;