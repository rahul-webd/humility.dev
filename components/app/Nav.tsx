import Link from "next/link";
import NavItem from "./NavItem";

export type NavProps = {
    className?: string
}

const Nav = ({
    className = ''
}: NavProps) => {

    return (
        <nav
            className={className}>
            <ul
                className="flex items-center">
                <NavItem
                    href="/"
                    title="About"
                    className="mr-6 md:mr-8" />
                <NavItem
                    href="/work"
                    title="Work"
                    className="mr-6 md:mr-8" />
                <NavItem
                    href="/blog"
                    title="Blog"/>
            </ul>
        </nav>
    )
}

export default Nav;